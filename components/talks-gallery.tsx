'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

type GalleryItem = { src: string; label: string; alt: string };

export function TalksGallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  const goTo = (index: number) => setActive((index + items.length) % items.length);

  return (
    <div className="talks-gallery" aria-label="Galeria de imagens das palestras">
      <div className="talks-gallery__viewport" aria-live="polite">
        <figure className="talks-gallery__figure">
          <Image
            key={current.src}
            fill
            priority={active === 0}
            sizes="(max-width: 760px) 100vw, 70vw"
            src={current.src}
            alt={current.alt}
          />
          <figcaption>{current.label}</figcaption>
        </figure>
        <button type="button" className="talks-gallery__arrow talks-gallery__arrow--prev" onClick={() => goTo(active - 1)} aria-label="Foto anterior">
          <ChevronLeft size={24} aria-hidden="true" />
        </button>
        <button type="button" className="talks-gallery__arrow talks-gallery__arrow--next" onClick={() => goTo(active + 1)} aria-label="Próxima foto">
          <ChevronRight size={24} aria-hidden="true" />
        </button>
      </div>
      <div className="talks-gallery__dots" role="tablist" aria-label="Selecionar foto da palestra">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-label={`Exibir ${item.label}`}
            className={active === index ? 'is-active' : ''}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
