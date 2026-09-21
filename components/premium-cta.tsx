'use client';

import { useEffect, useRef, type PointerEvent } from 'react';
import { ArrowRight, Crown } from 'lucide-react';
import styles from './gps-landing.module.css';

const checkoutHref = 'https://pay.kiwify.com.br/2oTcve7';

export function PremiumCta() {
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const frameRef = useRef<number | null>(null);

  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType === 'touch' || !ctaRef.current) return;

    const rect = ctaRef.current.getBoundingClientRect();
    const x = `${event.clientX - rect.left}px`;
    const y = `${event.clientY - rect.top}px`;

    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      ctaRef.current?.style.setProperty('--mouse-x', x);
      ctaRef.current?.style.setProperty('--mouse-y', y);
    });
  };

  useEffect(() => () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <a
      ref={ctaRef}
      href={checkoutHref}
      target="_blank"
      rel="noreferrer"
      className={styles.fixedCta}
      onPointerMove={handlePointerMove}
      aria-label="Quero ter acesso a todos os bônus"
    >
      <span className={styles.fixedCtaCrown} aria-hidden="true"><Crown size={22} strokeWidth={1.8} /></span>
      <span className={styles.fixedCtaCopy}>
        <small>Quero ter acesso a</small>
        <strong>Todos os bônus</strong>
      </span>
      <span className={styles.fixedCtaDivider} aria-hidden="true" />
      <span className={styles.fixedCtaArrow} aria-hidden="true"><ArrowRight size={20} strokeWidth={2.2} /></span>
    </a>
  );
}
