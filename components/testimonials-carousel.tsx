'use client';

import { ChevronLeft, ChevronRight, Volume2 } from 'lucide-react';
import { useState } from 'react';
import styles from './gps-landing.module.css';

const videos = [
  { src: '/videos/historia-01.mp4', label: 'História real 01' },
  { src: '/videos/historia-02.mp4', label: 'História real 02' },
  { src: '/videos/historia-03.mp4', label: 'História real 03' },
];

export function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const goTo = (index: number) => setActive((index + videos.length) % videos.length);

  return (
    <div className={styles.testimonialCarousel} aria-label="Histórias reais em vídeo">
      <div className={styles.testimonialViewport}>
        <div className={styles.testimonialTrack} style={{ transform: `translateX(-${active * 100}%)` }}>
          {videos.map((video, index) => (
            <article className={styles.testimonialSlide} key={video.src} aria-hidden={active !== index}>
              <video controls muted playsInline preload={index === 0 ? 'metadata' : 'none'} src={video.src} title={video.label} />
              <div className={styles.testimonialVideoMeta}>
                <span>{video.label}</span>
                <span><Volume2 size={15} /> Toque para ouvir</span>
              </div>
            </article>
          ))}
        </div>
        <button className={`${styles.testimonialArrow} ${styles.testimonialArrowPrev}`} onClick={() => goTo(active - 1)} aria-label="Vídeo anterior"><ChevronLeft size={22} /></button>
        <button className={`${styles.testimonialArrow} ${styles.testimonialArrowNext}`} onClick={() => goTo(active + 1)} aria-label="Próximo vídeo"><ChevronRight size={22} /></button>
      </div>
      <div className={styles.testimonialDots} role="tablist" aria-label="Selecionar história">
        {videos.map((video, index) => (
          <button key={video.src} className={active === index ? styles.testimonialDotActive : styles.testimonialDot} onClick={() => goTo(index)} role="tab" aria-selected={active === index} aria-label={`Exibir ${video.label}`} />
        ))}
      </div>
    </div>
  );
}
