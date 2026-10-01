import { mkdir, writeFile } from 'node:fs/promises';

const routes = [
  '/links',
  '/trilha-da-lideranca',
  '/reset',
  '/palestras',
  '/ata-inteligente',
  '/instituto-de-educacao-e-lideranca',
  '/contato',
  '/gps-5-0',
];
const widths = [375, 390, 430, 768, 1024, 1440];
const screenshotRoutes = new Set([
  '/links',
  '/trilha-da-lideranca',
  '/palestras',
  '/gps-5-0',
]);
const screenshotWidths = new Set([375, 1440]);
const outputDir =
  'C:\\Users\\Pichau\\AppData\\Local\\Temp\\jamilla-qa';

await mkdir(outputDir, { recursive: true });

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function createTarget(url) {
  const response = await fetch(
    `http://127.0.0.1:9222/json/new?${encodeURIComponent(url)}`,
    { method: 'PUT' },
  );
  return response.json();
}

async function inspect(route, width) {
  const target = await createTarget('about:blank');
  const socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    socket.addEventListener('open', resolve, { once: true });
    socket.addEventListener('error', reject, { once: true });
  });

  let sequence = 0;
  const pending = new Map();
  const events = new Map();
  const consoleErrors = [];

  socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result);
      return;
    }
    if (message.method === 'Runtime.exceptionThrown') {
      consoleErrors.push(message.params.exceptionDetails.text);
    }
    if (message.method === 'Log.entryAdded' && message.params.entry.level === 'error') {
      consoleErrors.push(message.params.entry.text);
    }
    const listeners = events.get(message.method);
    if (listeners) {
      events.delete(message.method);
      for (const resolve of listeners) resolve(message.params);
    }
  });

  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const id = ++sequence;
      pending.set(id, { resolve, reject });
      socket.send(JSON.stringify({ id, method, params }));
    });
  const once = (method) =>
    new Promise((resolve) => {
      const listeners = events.get(method) ?? [];
      listeners.push(resolve);
      events.set(method, listeners);
    });

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Log.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width,
    height: 1000,
    deviceScaleFactor: 1,
    mobile: width < 768,
  });
  const loaded = once('Page.loadEventFired');
  await send('Page.navigate', { url: `http://localhost:3000${route}` });
  await Promise.race([loaded, delay(10000)]);
  await delay(180);

  const evaluation = await send('Runtime.evaluate', {
    expression: `(() => {
      const root = document.documentElement;
      const viewport = root.clientWidth;
      const leaking = [...document.querySelectorAll('body *')]
        .filter((element) => {
          const rect = element.getBoundingClientRect();
          const style = getComputedStyle(element);
          return rect.width > 1 && rect.height > 1 && style.position !== 'fixed' &&
            (rect.left < -1 || rect.right > viewport + 1);
        })
        .slice(0, 8)
        .map((element) => ({
          tag: element.tagName.toLowerCase(),
          className: typeof element.className === 'string' ? element.className.slice(0, 100) : '',
          left: Math.round(element.getBoundingClientRect().left),
          right: Math.round(element.getBoundingClientRect().right),
        }));
      return {
        title: document.title,
        h1Count: document.querySelectorAll('h1').length,
        scrollWidth: root.scrollWidth,
        clientWidth: viewport,
        overflow: root.scrollWidth > viewport + 1,
        leaking,
        missingAlt: [...document.images].filter((image) => !image.hasAttribute('alt')).length,
        emptyLinks: [...document.querySelectorAll('a')].filter((link) => !link.getAttribute('href')).length,
        unnamedButtons: [...document.querySelectorAll('button')].filter((button) => !button.textContent.trim() && !button.getAttribute('aria-label')).length,
      };
    })()`,
    returnByValue: true,
  });

  let screenshot;
  if (screenshotRoutes.has(route) && screenshotWidths.has(width)) {
    const capture = await send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: false,
    });
    screenshot = `${outputDir}\\${route.slice(1).replaceAll('/', '-')}-${width}.png`;
    await writeFile(screenshot, Buffer.from(capture.data, 'base64'));
  }

  socket.close();
  await fetch(`http://127.0.0.1:9222/json/close/${target.id}`);
  return {
    route,
    width,
    ...evaluation.result.value,
    consoleErrors,
    screenshot,
  };
}

const results = [];
for (const route of routes) {
  for (const width of widths) {
    results.push(await inspect(route, width));
  }
}

process.stdout.write(`${JSON.stringify(results, null, 2)}\n`);
