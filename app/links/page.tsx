/* oxlint-disable next/no-html-link-for-pages -- This standalone hub uses native navigation so every destination remains functional without client-side JavaScript. */
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  BookOpenCheck,
  FileText,
  MessageCircle,
  Mic2,
  RotateCcw,
  Target,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Links | Jamilla Salviano',
  description: 'Acesse os conteúdos, formações e canais de Jamilla Salviano.',
};

const links = [
  {
    title: 'GPS 5.0',
    description: 'Formação completa em gestão escolar',
    href: '/gps-5-0',
    image: '/images/gps-modulo-1-editorial.png',
    icon: Target,
  },
  {
    title: 'Trilha da Liderança',
    description: 'Formação prática para líderes',
    href: '/trilha-da-lideranca',
    image: '/images/jamilla-trilha.png',
    icon: BookOpenCheck,
  },
  {
    title: 'Experiência RESET',
    description: 'Uma nova maneira de liderar',
    href: '/reset',
    image: '/images/jamilla-reset.png',
    icon: RotateCcw,
  },
  {
    title: 'Palestras para instituições',
    description: 'Conversas que transformam equipes',
    href: '/palestras',
    image: '/images/jamilla-palestras.png',
    icon: Mic2,
  },
  {
    title: 'Mini curso ATA Inteligente',
    description: 'Registros claros e profissionais',
    href: '/ata-inteligente',
    image: '/images/jamilla-ata.png',
    icon: FileText,
  },
  {
    title: 'Vamos conversar?',
    description: 'Fale diretamente com Jamilla',
    href: '/contato',
    image: '/images/jamilla-diagnostico.webp',
    icon: MessageCircle,
  },
];

export default function LinksPage() {
  return (
    <main className="links-page">
      <div className="links-page__glow" aria-hidden="true" />
      <section className="links-card" aria-labelledby="links-title">
        <a className="links-home" href="/inicio" aria-label="Abrir o site completo">
          <span aria-hidden="true">JS</span>
        </a>

        <div className="links-portrait">
          <Image
            fill
            priority
            sizes="(max-width: 620px) 100vw, 560px"
            src="/images/jamilla-navy-smile.webp"
            alt="Retrato de Jamilla Salviano"
          />
          <div className="links-portrait__shade" aria-hidden="true" />
          <div className="links-intro">
            <p>Liderança • educação • gestão</p>
            <h1 id="links-title">Jamilla Salviano</h1>
            <span>Mentora de líderes e equipes de sucesso</span>
          </div>
        </div>

        <div className="links-list" aria-label="Links principais">
          {links.map(({ title, description, href, image, icon: Icon }, index) => (
            <a className="links-item" href={href} key={href}>
              <span className="links-item__number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="links-item__image">
                <Image fill sizes="58px" src={image} alt="" />
              </span>
              <span className="links-item__copy">
                <strong>{title}</strong>
                <small>{description}</small>
              </span>
              <span className="links-item__action" aria-hidden="true">
                <Icon className="links-item__icon" size={17} strokeWidth={1.55} />
                <ArrowRight className="links-item__arrow" size={17} strokeWidth={1.55} />
              </span>
            </a>
          ))}
        </div>

        <footer className="links-footer">
          <a href="/inicio">jamillasalviano.com.br</a>
          <span>Formação que transforma pessoas e resultados.</span>
        </footer>
      </section>
    </main>
  );
}
