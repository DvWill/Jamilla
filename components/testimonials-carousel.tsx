'use client';

import { ChevronLeft, ChevronRight, Volume2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import styles from './gps-landing.module.css';

const videos = [
  { src: '/videos/historia-01.mp4', label: 'História real 01' },
  { src: '/videos/historia-02.mp4', label: 'História real 02' },
  { src: '/videos/historia-03.mp4', label: 'História real 03' },
];

export function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const goTo = (index: number) => setActive((index + videos.length) % videos.length);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === active) {
        video.load();
        video.muted = true;
        void video.play().catch(() => undefined);
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [active]);

  return (
    <div className={styles.testimonialCarousel} aria-label="Histórias reais em vídeo">
      <div className={styles.testimonialViewport}>
        <div className={styles.testimonialTrack} style={{ transform: `translateX(-${active * 100}%)` }}>
          {videos.map((video, index) => (
            <article className={styles.testimonialSlide} key={video.src} aria-hidden={active !== index}>
              <video
                ref={(element) => { videoRefs.current[index] = element; }}
                controls
                autoPlay={index === active}
                muted={index === active}
                playsInline
                preload={index === active ? 'metadata' : 'none'}
                src={video.src}
                title={video.label}
                onCanPlay={(event) => { if (index === active) void event.currentTarget.play().catch(() => undefined); }}
              />
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
