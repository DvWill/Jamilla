'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'up' | 'fade' | 'left' | 'right' | 'image' | 'editorial' | 'scale';
};

/**
 * Reveals an element once when it approaches the viewport. Content remains
 * visible until JavaScript has initialized, so it is never gated by motion.
 */
export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  variant = 'up',
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const reveal = () => setIsVisible(true);
    const bounds = element.getBoundingClientRect();

    // Avoid a hidden first paint for content already on screen.
    if (bounds.top < window.innerHeight * 0.92) {
      reveal();
      return;
    }

    setIsReady(true);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          reveal();
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.18 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties;

  return (
    <div
      ref={elementRef}
      className={`reveal reveal--${variant}${isReady ? ' reveal--ready' : ''}${
        isVisible ? ' reveal--visible' : ''
      } ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
