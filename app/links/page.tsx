/* oxlint-disable next/no-html-link-for-pages -- Standalone hub keeps native navigation for static export. */
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  BookOpenCheck,
  FileText,
  GraduationCap,
  MessageCircle,
  Mic2,
  RotateCcw,
} from 'lucide-react';
import { LinksGpsCard } from '@/components/links-gps-card';
import { FooterAgencyCredit } from '@/components/footer-agency-credit';

export const metadata: Metadata = {
  title: 'Links | Jamilla Salviano',
  description: 'Acesse os conteúdos, formações e canais de Jamilla Salviano.',
};

const links = [
  {
    title: 'Trilha da Liderança',
    description: 'Formação prática para líderes',
    href: '/trilha-da-lideranca',
    image: '/images/jamilla-trilha.png',
    position: 'center 52%',
    icon: BookOpenCheck,
  },
  {
    title: 'Experiência RESET',
    description: 'Uma nova maneira de liderar',
    href: '/reset',
    image: '/images/jamilla-reset.png',
    position: 'center 48%',
    icon: RotateCcw,
  },
  {
    title: 'Palestras para instituições',
    description: 'Conversas que transformam equipes',
    href: '/palestras',
    image: '/images/jamilla-palestras-transparent.png',
    position: 'center 32%',
    icon: Mic2,
  },
  {
    title: 'Mini curso ATA Inteligente',
    description: 'Registros claros e profissionais',
    href: '/ata-inteligente',
    image: '/images/jamilla-red.webp',
    position: 'center 24%',
    icon: FileText,
  },
  {
    title: 'Instituto de Educação e Liderança',
    description: 'Educação e liderança que transformam realidades',
    href: '/instituto-de-educacao-e-lideranca',
    image: '/images/links-stage-bg.jpeg',
    position: '58% center',
    icon: GraduationCap,
  },
  {
    title: 'Vamos conversar?',
    description: 'Fale diretamente com Jamilla',
    href: '/contato',
    image: '/images/jamilla-diagnostico.webp',
    position: 'center 34%',
    icon: MessageCircle,
  },
];

export default function LinksPage() {
  return (
    <main className="links-v2">
      <div className="links-v2__ambient" aria-hidden="true" />
      <div className="links-v2__frame">
        <section className="links-v2__hero" aria-labelledby="links-v2-title">
          <a
            className="links-v2__monogram"
            href="/inicio"
            aria-label="Abrir o site completo"
          >
            JS
          </a>
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
            <p id="links-v2-title">MENTORA DE LÍDERES E EQUIPES DE SUCESSO</p>
          </div>
        </section>

        <LinksGpsCard />

        <nav className="links-v2__list" aria-label="Produtos e serviços">
          {links.map(
            (
              { title, description, href, image, position, icon: Icon },
              index,
            ) => (
              <a className="links-v2__item" href={href} key={href}>
                <span className="links-v2__item-number" aria-hidden="true">
                  {String(index + 2).padStart(2, '0')}
                </span>
                <span className="links-v2__item-image">
                  <Image
                    fill
                    sizes="64px"
                    src={image}
                    alt=""
                    style={{ objectPosition: position }}
                  />
                </span>
                <span className="links-v2__item-copy">
                  <strong>{title}</strong>
                  <small>{description}</small>
                </span>
                <span className="links-v2__item-arrow" aria-hidden="true">
                  <Icon size={16} />
                  <ArrowRight size={17} />
                </span>
              </a>
            ),
          )}
        </nav>

        <footer className="links-v2__footer">
          <a href="/inicio">jamillasalviano.com.br</a>
          <span>FORMAÇÃO QUE TRANSFORMA PESSOAS E RESULTADOS.</span>
          <FooterAgencyCredit />
        </footer>
      </div>
    </main>
  );
}
