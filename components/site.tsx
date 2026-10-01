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
import { FooterAgencyCredit } from './footer-agency-credit';
import { SITE_CONFIG, whatsappUrl } from '@/lib/site-config';

const navItems = [
  { label: 'Trilha', href: '/trilha-da-lideranca' },
  { label: 'RESET', href: '/reset' },
  { label: 'Palestras', href: '/palestras' },
  { label: 'ATA Inteligente', href: '/ata-inteligente' },
  {
    label: 'Instituto',
    href: '/instituto-de-educacao-e-lideranca',
  },
];

const mobileItems = [...navItems, { label: 'Contato', href: '/contato' }];

type FooterVariant = 'default' | 'instituto' | 'trilha' | 'reset' | 'palestras' | 'ata' | 'gps' | 'links';
type FooterLink = { label: string; href: string; external?: boolean };
type FooterConfig = {
  brand: string;
  tagline: string;
  logo?: string;
  primary: { title: string; links: FooterLink[] };
  secondary: { title: string; links: FooterLink[] };
  copyright: string;
};

const footerConfigs: Record<FooterVariant, FooterConfig> = {
  default: {
    brand: 'Jamilla Salviano', tagline: 'Liderança, gestão e educação com propósito.',
    primary: { title: 'Jamilla Salviano', links: [{ label: 'Projetos e formações', href: '/links' }, { label: 'Fale com Jamilla', href: '/contato' }] },
    secondary: { title: 'Soluções', links: [{ label: 'Trilha da Liderança', href: '/trilha-da-lideranca' }, { label: 'RESET', href: '/reset' }, { label: 'Palestras', href: '/palestras' }, { label: 'ATA Inteligente', href: '/ata-inteligente' }, { label: 'Instituto', href: '/instituto-de-educacao-e-lideranca' }] },
    copyright: '© 2026 Jamilla Salviano. Todos os direitos reservados.',
  },
  instituto: {
    brand: 'Instituto de Educação e Liderança', tagline: 'Estratégia, formação e liderança para redes que querem avançar.', logo: '/images/instituto-logo.png',
    primary: { title: 'Instituto', links: [{ label: 'Sobre o Instituto', href: '#sobre-instituto' }, { label: 'Áreas de atuação', href: '#areas' }, { label: 'Nosso direcionamento', href: '#missao' }, { label: 'Princípios', href: '#valores' }] },
    secondary: { title: 'Soluções', links: [{ label: 'Como atuamos', href: '#solucoes' }, { label: 'Nossa abordagem', href: '#metodologia' }, { label: 'Fale com o Instituto', href: whatsappUrl(), external: true }] },
    copyright: '© 2026 Instituto de Educação e Liderança. Todos os direitos reservados.',
  },
  trilha: {
    brand: 'Jamilla Salviano', tagline: 'Liderança, gestão e educação com propósito.',
    primary: { title: 'Trilha', links: [{ label: 'Sobre a Trilha', href: '#trilha-o-que-e' }, { label: 'Para quem é', href: '#trilha-dores-title' }, { label: 'O que você vai aprender', href: '#trilha-recebe-title' }, { label: 'Módulos', href: '#trilha-o-que-e' }] },
    secondary: { title: 'Acesso', links: [{ label: 'Garantir minha vaga', href: 'https://pay.kiwify.com.br/ZrK7t7E', external: true }, { label: 'Entrar em contato', href: '/contato' }] },
    copyright: '© 2026 Jamilla Salviano. Todos os direitos reservados.',
  },
  reset: {
    brand: 'Jamilla Salviano', tagline: 'Liderança, gestão e educação com propósito.',
    primary: { title: 'RESET', links: [{ label: 'Sobre a mentoria', href: '/reset' }, { label: 'Como funciona', href: '/reset' }, { label: 'Benefícios', href: '/reset' }, { label: 'Resultados', href: '/reset' }] },
    secondary: { title: 'Contato', links: [{ label: 'Quero participar', href: '/contato' }, { label: 'Falar com a equipe', href: '/contato' }] },
    copyright: '© 2026 Jamilla Salviano. Todos os direitos reservados.',
  },
  palestras: {
    brand: 'Jamilla Salviano', tagline: 'Liderança, gestão e educação com propósito.',
    primary: { title: 'Palestras', links: [{ label: 'Sobre a Jamilla', href: '#quem-e-jamilla' }, { label: 'Temas de palestras', href: '/palestras' }, { label: 'Experiência', href: '#palestras-galeria-title' }, { label: 'Eventos', href: '#palestras-galeria-title' }] },
    secondary: { title: 'Contratação', links: [{ label: 'Leve Jamilla para seu evento', href: '/contato' }, { label: 'Fale com a equipe', href: '/contato' }] },
    copyright: '© 2026 Jamilla Salviano. Todos os direitos reservados.',
  },
  ata: {
    brand: 'Jamilla Salviano', tagline: 'Liderança, gestão e educação com propósito.',
    primary: { title: 'ATA Inteligente', links: [{ label: 'Sobre', href: '/ata-inteligente' }, { label: 'Como funciona', href: '/ata-inteligente' }, { label: 'Benefícios', href: '/ata-inteligente' }, { label: 'Conteúdo', href: '/ata-inteligente' }] },
    secondary: { title: 'Acesso', links: [{ label: 'Conhecer o programa', href: '/ata-inteligente' }, { label: 'Falar com a equipe', href: '/contato' }] },
    copyright: '© 2026 Jamilla Salviano. Todos os direitos reservados.',
  },
  gps: {
    brand: 'GPS 5.0', tagline: 'Formação em gestão escolar e liderança.',
    primary: { title: 'GPS 5.0', links: [{ label: 'Sobre a formação', href: '#sobre' }, { label: 'Método', href: '#metodo' }, { label: 'Benefícios', href: '#beneficios' }, { label: 'Dúvidas frequentes', href: '#faq' }] },
    secondary: { title: 'Acesso', links: [{ label: 'Conhecer o GPS 5.0', href: '#inscricao' }, { label: 'Entrar em contato', href: '/contato' }] },
    copyright: '© 2026 Jamilla Salviano. Todos os direitos reservados.',
  },
  links: {
    brand: 'Jamilla Salviano', tagline: 'Liderança, gestão e educação com propósito.',
    primary: { title: 'Projetos', links: [{ label: 'Trilha da Liderança', href: '/trilha-da-lideranca' }, { label: 'Experiência RESET', href: '/reset' }, { label: 'Palestras', href: '/palestras' }] },
    secondary: { title: 'Conexões', links: [{ label: 'Instituto', href: '/instituto-de-educacao-e-lideranca' }, { label: 'Fale com Jamilla', href: '/contato' }] },
    copyright: '© 2026 Jamilla Salviano. Todos os direitos reservados.',
  },
};

function getFooterVariant(pathname: string): FooterVariant {
  if (pathname.includes('instituto-de-educacao-e-lideranca')) return 'instituto';
  if (pathname.includes('trilha-da-lideranca')) return 'trilha';
  if (pathname.includes('palestras')) return 'palestras';
  if (pathname.includes('ata-inteligente')) return 'ata';
  if (pathname.includes('gps-5-0')) return 'gps';
  if (pathname.includes('reset')) return 'reset';
  if (pathname.includes('links')) return 'links';
  return 'default';
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

type CtaProps = {
  href: string;
  children: ReactNode;
  ghost?: boolean;
  dark?: boolean;
  className?: string;
  onClick?: () => void;
};

export function Cta({
  href,
  children,
  ghost = false,
  dark = false,
  className = '',
  onClick,
}: CtaProps) {
  const variant = ghost ? 'cta--ghost' : dark ? 'cta--dark' : 'cta--gold';
  const classes = `cta ${variant} ${className}`.trim();
  const content = (
    <>
      <span className="cta__copy">{children}</span>
      <span className="cta__arrow" aria-hidden="true">
        <ArrowRight className="cta__icon" size={18} />
      </span>
    </>
  );

  if (href.startsWith('http')) {
    return (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} onClick={onClick}>
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
  const visibleNavItems = navItems;
  const visibleMobileItems = mobileItems;
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

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <header
      className={`site-header${isScrolled ? ' is-scrolled' : ''}`}
    >
      <div className="header-inner">
        <Link
          className="logo"
          href="/links"
          aria-label="Jamilla Salviano — página de links"
        >
          <strong>JAMILLA SALVIANO</strong>
          <span>LIDERANÇA &amp; EDUCAÇÃO</span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {visibleNavItems.map((item) => (
            <Link
              className={`nav-link${pathname === item.href ? ' is-active' : ''}`}
              href={item.href}
              key={item.label}
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="header-cta" href="/contato">
          <span>Vamos conversar</span>
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
          {visibleMobileItems.map((item, index) => (
            <Link
              href={item.href}
              key={item.label}
              tabIndex={isOpen ? 0 : -1}
              aria-current={pathname === item.href ? 'page' : undefined}
              onClick={() => setIsOpen(false)}
              style={{ '--menu-index': index } as CSSProperties}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {item.label}
            </Link>
          ))}
          <Cta
            href="/contato"
            className="mobile-menu__cta"
            onClick={() => setIsOpen(false)}
          >
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
  variant?: 'wine' | 'navy' | 'ata';
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

function FooterLinkItem({ link }: { link: FooterLink }) {
  return link.external
    ? <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
    : <Link href={link.href}>{link.label}</Link>;
}

export function Footer({ variant }: { variant?: FooterVariant }) {
  const pathname = usePathname();
  const config = footerConfigs[variant ?? getFooterVariant(pathname)];

  return (
    <>
      <footer className="site-footer">
        <ScrollReveal className="wrap footer-grid">
          <div className="footer-brand">
            {config.logo ? (
              <Link href="/instituto-de-educacao-e-lideranca" className="footer-brand__logo" aria-label={config.brand}>
                <Image src={config.logo} alt={config.brand} width={220} height={220} sizes="(max-width: 620px) 150px, 180px" />
              </Link>
            ) : (
              <Link className="footer-brand__wordmark" href="/links" aria-label="Jamilla Salviano — página de links">
                <strong>{config.brand}</strong><span>Liderança &amp; educação</span>
              </Link>
            )}
            <p>{config.tagline}</p>
          </div>
          <nav className="footer-nav" aria-label={config.primary.title}>
            <b>{config.primary.title}</b>
            {config.primary.links.map((link) => <FooterLinkItem key={link.label} link={link} />)}
          </nav>
          <nav className="footer-nav" aria-label={config.secondary.title}>
            <b>{config.secondary.title}</b>
            {config.secondary.links.map((link) => <FooterLinkItem key={link.label} link={link} />)}
          </nav>
          <div className="footer-meta">
            <nav className="footer-nav" aria-label="Redes sociais">
              <b>Redes sociais</b>
              <a href={SITE_CONFIG.instituteInstagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </nav>
            <FooterAgencyCredit />
          </div>
        </ScrollReveal>
        <ScrollReveal className="wrap copyright" delay={90}>{config.copyright}</ScrollReveal>
      </footer>
      <WhatsAppButton />
    </>
  );
}

export function WhatsAppButton() {
  const pathname = usePathname();
  const details = pathname.includes('trilha')
    ? { label: 'Quero participar', context: 'Gostaria de saber mais sobre a Trilha da Liderança.' }
    : pathname.includes('gps')
      ? { label: 'Conhecer o GPS 5.0', context: 'Tenho interesse no Método GPS da Liderança Escolar.' }
      : pathname.includes('palestras')
        ? { label: 'Fale com a Jamilla', context: 'Gostaria de conversar sobre uma palestra com Jamilla Salviano.' }
        : pathname.includes('reset')
          ? { label: 'Quero participar do RESET', context: 'Gostaria de saber mais sobre a Experiência RESET.' }
          : pathname.includes('ata-inteligente')
            ? { label: 'Conhecer o programa', context: 'Gostaria de saber mais sobre o minicurso ATA Inteligente.' }
            : pathname.includes('instituto')
              ? { label: 'Fale com o Instituto', context: 'Gostaria de conversar sobre o Instituto de Educação e Liderança.' }
              : { label: 'Fale com a Jamilla', context: 'Vim pelo site e gostaria de entender qual solução faz mais sentido para a minha escola.' };

  return (
    <a aria-label={`${details.label} pelo WhatsApp`} className="whatsapp" href={whatsappUrl(`Olá, Jamilla! ${details.context}`)} target="_blank" rel="noopener noreferrer">
      <span className="whatsapp__label">{details.label}</span>
      <span className="whatsapp__icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 4.5A11.5 11.5 0 0 0 6.1 21.84L4.5 27.5l5.8-1.52A11.5 11.5 0 1 0 16 4.5Z" />
          <path d="M12.1 10.15c-.28-.64-.58-.65-.86-.66h-.73c-.25 0-.66.1-1 .47-.34.38-1.31 1.28-1.31 3.12s1.34 3.62 1.53 3.87c.19.25 2.64 4.03 6.39 5.65.89.38 1.59.61 2.13.78.9.28 1.71.24 2.35.15.72-.1 2.21-.91 2.53-1.78.31-.88.31-1.63.22-1.78-.09-.16-.34-.25-.72-.44-.37-.19-2.21-1.09-2.56-1.22-.34-.12-.59-.19-.84.19-.25.37-.97 1.21-1.19 1.46-.22.25-.44.28-.81.09-.38-.18-1.59-.58-3.02-1.87a11.4 11.4 0 0 1-2.09-2.6c-.22-.37-.02-.57.16-.76.17-.17.38-.44.56-.66.19-.22.25-.38.38-.63.12-.25.06-.47-.03-.66-.1-.19-.83-2.04-1.16-2.77Z" />
        </svg>
      </span>
    </a>
  );
}
