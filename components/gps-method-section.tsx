'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './gps-method-section.module.css';

const pillars = [
  { number: '01', shortTitle: 'Propósito', title: 'Propósito visível e prático' },
  { number: '02', shortTitle: 'Equilíbrio', title: 'Equilíbrio emocional para liderança' },
  { number: '03', shortTitle: 'Equipe', title: 'Gestão eficaz de equipe e clima escolar' },
  { number: '04', shortTitle: 'Estratégia', title: 'Planejamento estratégico com foco em resultado' },
  { number: '05', shortTitle: 'Resultados', title: 'Cultura de altas expectativas com suporte' },
] as const;

function point(angle: number, radius: number) {
  const radians = ((angle - 90) * Math.PI) / 180;
  return [180 + radius * Math.cos(radians), 180 + radius * Math.sin(radians)];
}

function wedgePath(index: number) {
  const start = index * 72;
  const end = start + 72;
  const [outerStartX, outerStartY] = point(start, 155);
  const [outerEndX, outerEndY] = point(end, 155);
  const [innerEndX, innerEndY] = point(end, 79);
  const [innerStartX, innerStartY] = point(start, 79);
  return `M ${outerStartX} ${outerStartY} A 155 155 0 0 1 ${outerEndX} ${outerEndY} L ${innerEndX} ${innerEndY} A 79 79 0 0 0 ${innerStartX} ${innerStartY} Z`;
}

export function GPSPillarWheel({ activeIndex, onSelect }: { activeIndex: number; onSelect: (index: number) => void }) {
  return <div className={styles.wheelWrap}>
    <svg className={styles.wheel} viewBox="0 0 360 360" role="group" aria-label="Os cinco pilares do Método GPS 5.0">
      {pillars.map((pillar, index) => {
        const [x, y] = point(index * 72 + 36, 118);
        const isActive = activeIndex === index;
        return <g key={pillar.number} className={`${styles.segmentGroup} ${isActive ? styles.segmentActive : ''}`}>
          <path className={styles.segment} d={wedgePath(index)} onMouseEnter={() => onSelect(index)} onFocus={() => onSelect(index)} onClick={() => onSelect(index)} tabIndex={0} role="button" aria-label={`Pilar ${pillar.number}: ${pillar.title}`} />
          <text className={styles.segmentNumber} x={x} y={y + 6} textAnchor="middle" aria-hidden="true">{pillar.number}</text>
        </g>;
      })}
      <circle className={styles.wheelCore} cx="180" cy="180" r="72" />
      <text className={styles.coreName} x="180" y="167" textAnchor="middle">GPS 5.0</text>
      <text className={styles.coreLabel} x="180" y="192" textAnchor="middle">OS 5 PILARES</text>
      <path className={styles.compass} d="M180 221 l-6 -16 6 4 6 -4z" aria-hidden="true" />
    </svg>
    <div className={styles.wheelCaption} aria-live="polite"><span>Pilar ativo · {pillars[activeIndex].number}</span><strong>{pillars[activeIndex].shortTitle}</strong><p>{pillars[activeIndex].title}</p></div>
  </div>;
}

export function GPSPillarItem({ pillar, index, active, onSelect }: { pillar: (typeof pillars)[number]; index: number; active: boolean; onSelect: (index: number) => void }) {
  return <button type="button" className={`${styles.pillarItem} ${active ? styles.pillarItemActive : ''}`} onMouseEnter={() => onSelect(index)} onFocus={() => onSelect(index)} onClick={() => onSelect(index)}>
    <span className={styles.pillarNumber}>{pillar.number}</span><span className={styles.pillarBody}><b>{pillar.shortTitle}</b><span>{pillar.title}</span></span><span className={styles.pillarLine} aria-hidden="true" />
  </button>;
}

export function GPSMethodSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.18 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return <section className={styles.section} ref={sectionRef} data-visible={visible} aria-labelledby="method-title">
    <div className={styles.wrap}>
      <div className={styles.topGrid}>
        <div className={styles.intro}><p className={styles.eyebrow}>O método</p><h2 id="method-title">Como funciona o<br />Método <em>GPS 5.0</em></h2><p>O Método GPS 5.0 é composto por 5 pilares práticos que você irá aplicar na sua rotina como gestor escolar.</p><div className={styles.manifesto}><span className={styles.manifestoCount}>5</span><div><span>pilares.</span><i>Um método.</i><span>Uma transformação completa.</span></div></div></div>
        <GPSPillarWheel activeIndex={activeIndex} onSelect={setActiveIndex} />
      </div>
      <div className={styles.pillarList}>{pillars.map((pillar, index) => <GPSPillarItem key={pillar.number} pillar={pillar} index={index} active={activeIndex === index} onSelect={setActiveIndex} />)}</div>
    </div>
  </section>;
}
