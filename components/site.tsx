'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  Eye,
  FileText,
  Heart,
  Menu,
  MessageCircle,
  Sprout,
  Target,
  UsersRound,
  X,
  Zap,
} from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';

const navItems = [
  { label: 'GPS 5.0', href: '/gps-5-0' },
  { label: 'Trilha', href: '/trilha-da-lideranca' },
  { label: 'RESET', href: '/reset' },
  { label: 'Palestras', href: '/palestras' },
  { label: 'ATA Inteligente', href: '/ata-inteligente' },
  {
    label: 'Instituto',
    href: '/instituto-de-educacao-e-lideranca',
  },
];

const mobileItems = [
  { label: 'Início', href: '/inicio' },
  ...navItems,
  { label: 'Contato', href: '/contato' },
];

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

type CtaProps = {
  href: string;
  children: ReactNode;
  ghost?: boolean;
  dark?: boolean;
  className?: string;
};

export function Cta({
  href,
  children,
  ghost = false,
  dark = false,
  className = '',
}: CtaProps) {
  const variant = ghost ? 'cta--ghost' : dark ? 'cta--dark' : 'cta--gold';
  const classes = `cta ${variant} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      <ArrowRight className="cta__icon" size={16} aria-hidden="true" />
    </>
  );

  if (href.startsWith('http')) {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}

export function Hero({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`hero ${className}`}>{children}</section>;
}

export function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
}) {
  return (
    <div className="section-header">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
    </div>
  );
}

export type EditorialIcon =
  | 'chart'
  | 'book'
  | 'eye'
  | 'file'
  | 'heart'
  | 'message'
  | 'sprout'
  | 'target'
  | 'users'
  | 'zap';

const editorialIcons = {
  chart: BarChart3,
  book: BookOpenCheck,
  eye: Eye,
  file: FileText,
  heart: Heart,
  message: MessageCircle,
  sprout: Sprout,
  target: Target,
  users: UsersRound,
  zap: Zap,
} as const;

export function EditorialCard({
  index,
  title,
  description,
  icon,
  href,
  className = '',
}: {
  index: string;
  title: string;
  description?: string;
  icon: EditorialIcon;
  href?: string;
  className?: string;
}) {
  const Icon = editorialIcons[icon];
  const content = (
    <>
      <div className="editorial-card__top">
        <span className="editorial-card__index">{index}</span>
        <span className="editorial-card__icon" aria-hidden="true">
          <Icon size={21} strokeWidth={1.5} />
        </span>
      </div>
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      {href ? (
        <span className="editorial-card__link">
          Conhecer <ArrowRight size={15} aria-hidden="true" />
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link className={`editorial-card ${className}`} href={href}>
        {content}
      </Link>
    );
  }

  return <article className={`editorial-card ${className}`}>{content}</article>;
}

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 16);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    const initialFrame = window.requestAnimationFrame(updateHeader);
    window.addEventListener('scroll', updateHeader, { passive: true });
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      window.cancelAnimationFrame(initialFrame);
      window.removeEventListener('scroll', updateHeader);
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="header-inner">
        <Link
          className="logo"
          href="/inicio"
          aria-label="Jamilla Salviano — página inicial"
        >
          <strong>JAMILLA SALVIANO</strong>
          <span>LIDERANÇA &amp; EDUCAÇÃO</span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link
              className={`nav-link${pathname === item.href ? ' is-active' : ''}`}
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="header-cta" href="/contato">
          <span>Fale com a Jamilla</span>
          <ArrowRight size={14} aria-hidden="true" />
        </Link>

        <button
          className="menu-btn"
          type="button"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-menu"
        aria-label="Navegação mobile"
        aria-hidden={!isOpen}
        data-open={isOpen}
      >
        <div className="mobile-menu__inner">
          <p className="eyebrow">Navegação</p>
          {mobileItems.map((item, index) => (
            <Link
              href={item.href}
              key={item.label}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
              style={{ '--menu-index': index } as CSSProperties}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {item.label}
            </Link>
          ))}
          <Cta href="/contato" className="mobile-menu__cta">
            Fale com a Jamilla
          </Cta>
        </div>
      </nav>
    </header>
  );
}

export function FinalCta({
  eyebrow = 'Vamos conversar',
  title,
  description,
  href = '/contato',
  action = 'Falar com Jamilla',
  variant = 'wine',
  imageSrc,
  imageAlt,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  href?: string;
  action?: ReactNode;
  variant?: 'wine' | 'navy';
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section
      className={`final-cta final-cta--${variant}${imageSrc ? ' final-cta--with-media' : ''}`}
    >
      {imageSrc ? (
        <div className="final-cta__media">
          <Image
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            src={imageSrc}
            alt={imageAlt ?? ''}
          />
        </div>
      ) : null}
      <div className="wrap final-cta__wrap">
        <ScrollReveal className="final-cta__content" variant="scale">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
          <Cta href={href} className="final-cta__button">
            {action}
          </Cta>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <ScrollReveal className="wrap footer-grid">
        <div className="footer-brand">
          <Link
            className="logo"
            href="/inicio"
            aria-label="Jamilla Salviano — página inicial"
          >
            <strong>JAMILLA SALVIANO</strong>
            <span>LIDERANÇA &amp; EDUCAÇÃO</span>
          </Link>
          <p>Educação, liderança e transformação de equipes.</p>
        </div>
        <div>
          <b>Institucional</b>
          <Link href="/inicio">Início</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/contato">Contato</Link>
        </div>
        <div>
          <b>Soluções</b>
          <Link href="/trilha-da-lideranca">Trilha da Liderança</Link>
          <Link href="/reset">RESET</Link>
          <Link href="/palestras">Palestras</Link>
          <Link href="/ata-inteligente">ATA Inteligente</Link>
        </div>
        <div>
          <b>Redes</b>
          <span>Instagram</span>
          <span>LinkedIn</span>
          <span>YouTube</span>
        </div>
      </ScrollReveal>
      <ScrollReveal className="wrap copyright" delay={90}>
        © 2026 Jamilla Salviano. Todos os direitos reservados.
      </ScrollReveal>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <Link aria-label="Fale com a Jamilla" className="whatsapp" href="/contato?chat=open">
      <span className="whatsapp__label">Fale com a Jamilla</span>
      <span className="whatsapp__icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" role="img">
          <path d="M16 4.5A11.5 11.5 0 0 0 6.1 21.84L4.5 27.5l5.8-1.52A11.5 11.5 0 1 0 16 4.5Z" />
          <path d="M12.1 10.15c-.28-.64-.58-.65-.86-.66h-.73c-.25 0-.66.1-1 .47-.34.38-1.31 1.28-1.31 3.12s1.34 3.62 1.53 3.87c.19.25 2.64 4.03 6.39 5.65.89.38 1.59.61 2.13.78.9.28 1.71.24 2.35.15.72-.1 2.21-.91 2.53-1.78.31-.88.31-1.63.22-1.78-.09-.16-.34-.25-.72-.44-.37-.19-2.21-1.09-2.56-1.22-.34-.12-.59-.19-.84.19-.25.37-.97 1.21-1.19 1.46-.22.25-.44.28-.81.09-.38-.18-1.59-.58-3.02-1.87a11.4 11.4 0 0 1-2.09-2.6c-.22-.37-.02-.57.16-.76.17-.17.38-.44.56-.66.19-.22.25-.38.38-.63.12-.25.06-.47-.03-.66-.1-.19-.83-2.04-1.16-2.77Z" />
        </svg>
      </span>
    </Link>
  );
}
