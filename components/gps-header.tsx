'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './gps-landing.module.css';

const navigation = [
  { label: 'Método', href: '#metodo' },
  { label: 'Formação', href: '#formacao' },
  { label: 'O que você recebe', href: '#beneficios' },
  { label: 'Dúvidas', href: '#faq' },
];

export function GPSHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 16);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      window.removeEventListener('scroll', updateHeader);
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`${styles.gpsHeader}${isScrolled ? ` ${styles.gpsHeaderScrolled}` : ''}`}>
      <div className={styles.gpsHeaderBar}>
        <Link className={styles.gpsBrand} href="/gps-5-0" aria-label="GPS 5.0 — início" onClick={closeMenu}>
          <Image
            className={styles.gpsBrandLogo}
            src="/images/gps-5-logo.png"
            alt="GPS 5.0"
            width={2172}
            height={724}
            sizes="(max-width: 768px) 104px, 138px"
            priority
          />
        </Link>

        <nav className={styles.gpsDesktopNav} aria-label="Navegação do GPS">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>

        <Link href="/contato" className={styles.gpsHeaderCta}>
          Falar com a equipe <ArrowRight size={16} aria-hidden="true" />
        </Link>

        <button
          type="button"
          className={styles.gpsMenuButton}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="gps-mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div
        id="gps-mobile-navigation"
        className={styles.gpsMobileMenu}
        data-open={isOpen}
        aria-hidden={!isOpen}
      >
        <nav aria-label="Navegação mobile do GPS">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={closeMenu} tabIndex={isOpen ? 0 : -1}>{item.label}</a>)}
          <Link href="/contato" className={styles.gpsMobileCta} onClick={closeMenu} tabIndex={isOpen ? 0 : -1}>
            Falar com a equipe <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
