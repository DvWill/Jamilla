'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, type PointerEvent } from 'react';

type GalleryItem = { src: string; label: string; alt: string };

export function TalksGallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState(0);
  const pointerStart = useRef<number | null>(null);

  const goTo = (index: number) => setActive((index + items.length) % items.length);
  const visibleIndexes = [active - 1, active, active + 1].map(
    (index) => (index + items.length) % items.length,
  );

  const handlePointerDown = (event: PointerEvent<HTMLFieldSetElement>) => {
    if (event.pointerType !== 'mouse') event.currentTarget.setPointerCapture(event.pointerId);
    pointerStart.current = event.clientX;
  };

  const handlePointerUp = (event: PointerEvent<HTMLFieldSetElement>) => {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(distance) < 45) return;
    goTo(distance < 0 ? active + 1 : active - 1);
  };

  return (
    <div className="talks-gallery" aria-label="Galeria de imagens das palestras">
      <fieldset
        className="talks-gallery__viewport"
        aria-label="Fotos da palestra; use os botões anterior e próxima para navegar"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <div className="talks-gallery__track">
          {visibleIndexes.map((itemIndex, position) => {
            const item = items[itemIndex];
            const isActive = position === 1;
            return (
              <figure
                className={`talks-gallery__figure${isActive ? ' is-active' : ' is-adjacent'}`}
                key={`${item.src}-${position}`}
                aria-hidden={!isActive}
              >
                <Image
                  fill
                  priority={isActive && active === 0}
                  sizes="(max-width: 760px) 92vw, 34vw"
                  src={item.src}
                  alt={isActive ? item.alt : ''}
                />
              </figure>
            );
          })}
        </div>
        <p className="sr-only" aria-live="polite">
          {items[active].label}, foto {active + 1} de {items.length}
        </p>
        <button type="button" className="talks-gallery__arrow talks-gallery__arrow--prev" onClick={() => goTo(active - 1)} aria-label="Foto anterior">
          <ChevronLeft size={24} aria-hidden="true" />
        </button>
        <button type="button" className="talks-gallery__arrow talks-gallery__arrow--next" onClick={() => goTo(active + 1)} aria-label="Próxima foto">
          <ChevronRight size={24} aria-hidden="true" />
        </button>
      </fieldset>
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
