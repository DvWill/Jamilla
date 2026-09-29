'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeDollarSign, MonitorPlay, Target } from 'lucide-react';
import { useRef } from 'react';

const benefits = [
  { label: 'Formação prática', icon: Target },
  { label: 'Ao vivo no Google Meet', icon: MonitorPlay },
  { label: 'Investimento de R$ 37,90', icon: BadgeDollarSign },
];

export function LinksTrilhaCard({ featured }: { featured: boolean }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointRef = useRef({ x: '50%', y: '50%' });

  const updateSpotlight = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (
      event.pointerType === 'touch' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }
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
    <Link
      ref={cardRef}
      className={`links-v2__gps${featured ? ' is-featured' : ''}`}
      href="/trilha-da-lideranca"
      onPointerMove={updateSpotlight}
      onPointerLeave={clearSpotlight}
    >
      <span className="links-v2__gps-image">
        <Image
          fill
          sizes="(max-width: 620px) 100vw, 300px"
          src="/images/jamilla-trilha-cutout.png"
          alt="Jamilla Salviano apresentando a Trilha da Liderança"
        />
      </span>
      <span className="links-v2__gps-content">
        {featured ? <span className="links-v2__badge">★ EM DESTAQUE</span> : null}
        <span className="links-v2__kicker">TRILHA DA LIDERANÇA</span>
        <strong>Imersão ao vivo</strong>
        <span className="links-v2__gps-description">
          Um encontro prático pelo Google Meet para quem precisa liderar com mais
          clareza e segurança.
        </span>
        <span className="links-v2__benefits">
          {benefits.map(({ label, icon: Icon }) => (
            <span key={label}>
              <Icon size={23} strokeWidth={1.45} aria-hidden="true" />
              <small>{label}</small>
            </span>
          ))}
        </span>
        <span className="links-v2__gps-cta">
          QUERO CONHECER A TRILHA <ArrowRight size={17} aria-hidden="true" />
        </span>
      </span>
      <span className="links-v2__round-arrow" aria-hidden="true">
        <ArrowRight size={22} />
      </span>
    </Link>
  );
}
