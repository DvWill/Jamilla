import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  FileText,
  GraduationCap,
  MessageCircle,
  Mic2,
  RotateCcw,
} from 'lucide-react';
import { LinksTrilhaCard } from '@/components/links-featured-card';
import { Footer } from '@/components/site';
import { isTrilhaFeatured } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Projetos e formações | Jamilla Salviano',
  description:
    'Conheça as formações, palestras, produtos e iniciativas de Jamilla Salviano para gestores e instituições de ensino.',
  alternates: { canonical: '/links' },
  openGraph: {
    title: 'Projetos e formações | Jamilla Salviano',
    description:
      'Um ecossistema de educação, liderança e gestão para pessoas e instituições.',
    type: 'website',
  },
};

const links = [
  {
    title: 'Experiência RESET',
    description: 'Reorganize sua forma de liderar pessoas e equipes.',
    action: 'Conhecer o RESET',
    href: '/reset',
    image: '/images/jamilla-reset.png',
    icon: RotateCcw,
  },
  {
    title: 'Palestras para instituições',
    description: 'Conteúdo conectado aos desafios reais da educação.',
    action: 'Ver palestras',
    href: '/palestras',
    image: '/images/jamilla-palestras-transparent.png',
    icon: Mic2,
  },
  {
    title: 'Mini curso ATA Inteligente',
    description: 'Registros claros sem começar cada ata do zero.',
    action: 'Conhecer o minicurso',
    href: '/ata-inteligente',
    image: '/images/jamilla-red.webp',
    icon: FileText,
  },
  {
    title: 'Instituto de Educação e Liderança',
    description: 'Formação de gestores e redes de ensino.',
    action: 'Conhecer o Instituto',
    href: '/instituto-de-educacao-e-lideranca',
    image: '/images/links-stage-bg.jpeg',
    icon: GraduationCap,
  },
  {
    title: 'Vamos conversar?',
    description: 'Conte o momento da sua escola ou instituição.',
    action: 'Abrir contato',
    href: '/contato',
    image: '/images/jamilla-diagnostico.webp',
    icon: MessageCircle,
  },
];

export default function LinksPage() {
  const trilhaIsFeatured = isTrilhaFeatured();

  return (
    <>
      <main className="links-v2">
      <div className="links-v2__ambient" aria-hidden="true" />
      <div className="links-v2__frame">
        <section className="links-v2__hero" aria-labelledby="links-v2-title">
          <div className="links-v2__hero-art" aria-hidden="true">
            <span className="links-v2__halo" />
            <span className="links-v2__hero-label">
              LIDERANÇA
              <br />
              EDUCAÇÃO
              <br />
              GESTÃO
            </span>
            <Image
              fill
              priority
              sizes="(max-width: 620px) 92vw, 520px"
              src="/images/jamilla-gps-hero.png"
              alt=""
            />
            <span className="links-v2__hero-line" />
          </div>
          <div className="links-v2__intro">
            <h1 id="links-v2-title">Projetos, formações e experiências</h1>
            <p>LIDERANÇA • EDUCAÇÃO • GESTÃO</p>
          </div>
        </section>

        <LinksTrilhaCard featured={trilhaIsFeatured} />

        <nav className="links-v2__list" aria-label="Produtos e serviços">
          {links.map(
            (
              { title, description, action, href, image, icon: Icon },
              index,
            ) => (
              <Link className="links-v2__item" href={href} key={href}>
                <span className="links-v2__item-number" aria-hidden="true">
                  {String(index + 2).padStart(2, '0')}
                </span>
                <span className="links-v2__item-image">
                  <Image
                    fill
                    sizes="64px"
                    src={image}
                    alt=""
                  />
                </span>
                <span className="links-v2__item-copy">
                  <strong>{title}</strong>
                  <small>{description}</small>
                  <span className="links-v2__item-cta">{action}</span>
                </span>
                <span className="links-v2__item-arrow" aria-hidden="true">
                  <Icon size={16} />
                  <ArrowRight size={17} />
                </span>
              </Link>
            ),
          )}
        </nav>

      </div>
      </main>
      <Footer variant="links" />
    </>
  );
}
