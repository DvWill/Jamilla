'use client';

import Image from 'next/image';
import { ArrowRight, Award, BarChart3, BookOpenCheck } from 'lucide-react';
import { useRef } from 'react';

const benefits = [
  { label: 'Conteúdo completo', icon: BookOpenCheck },
  { label: 'Certificado de conclusão', icon: Award },
  { label: 'Resultados reais', icon: BarChart3 },
];

export function LinksGpsCard() {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointRef = useRef({ x: '50%', y: '50%' });

  const updateSpotlight = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const card = cardRef.current;
    if (!card) return;
    const bounds = card.getBoundingClientRect();
    pointRef.current = {
      x: `${((event.clientX - bounds.left) / bounds.width) * 100}%`,
      y: `${((event.clientY - bounds.top) / bounds.height) * 100}%`,
    };
    if (frameRef.current !== null) return;
    frameRef.current = window.requestAnimationFrame(() => {
      const current = cardRef.current;
      if (current) {
        current.style.setProperty('--mouse-x', pointRef.current.x);
        current.style.setProperty('--mouse-y', pointRef.current.y);
        current.classList.add('is-pointer-active');
      }
      frameRef.current = null;
    });
  };

  const clearSpotlight = () => {
    if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    frameRef.current = null;
    cardRef.current?.classList.remove('is-pointer-active');
  };

  return (
    <a
      ref={cardRef}
      className="links-v2__gps"
      href="/gps-5-0"
      onPointerMove={updateSpotlight}
      onPointerLeave={clearSpotlight}
    >
      <span className="links-v2__gps-image"><Image fill sizes="(max-width: 620px) 100vw, 300px" src="/images/gps-modulo-1.png" alt="GPS 5.0 — Gestão escolar na prática" /></span>
      <span className="links-v2__gps-content">
        <span className="links-v2__badge">★ DESTAQUE</span>
        <span className="links-v2__kicker">CURSO ONLINE</span>
        <strong>GPS 5.0</strong>
        <span className="links-v2__gps-description">Formação completa para gestores que querem ir além.</span>
        <span className="links-v2__benefits">
          {benefits.map(({ label, icon: Icon }) => <span key={label}><Icon size={23} strokeWidth={1.45} /><small>{label}</small></span>)}
        </span>
        <span className="links-v2__gps-cta">CONHECER O GPS 5.0 <ArrowRight size={17} aria-hidden="true" /></span>
      </span>
      <span className="links-v2__round-arrow" aria-hidden="true"><ArrowRight size={22} /></span>
    </a>
  );
}
