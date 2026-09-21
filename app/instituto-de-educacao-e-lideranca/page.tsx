import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowDown,
  BookOpenCheck,
  Camera,
  Compass,
  GraduationCap,
  Network,
  UsersRound,
  type LucideIcon,
} from 'lucide-react';
import {
  Cta,
  Eyebrow,
  FinalCta,
  Footer,
  Header,
  WhatsAppButton,
} from '@/components/site';
import { ScrollReveal } from '@/components/scroll-reveal';
import styles from './page.module.css';

const INSTAGRAM_URL =
  'https://www.instagram.com/institutodeeducacaoelideranca_/';

export const metadata: Metadata = {
  title: 'Instituto de Educação e Liderança | Jamilla Salviano',
  description:
    'Liderança escolar na prática e formação de gestores e redes de ensino com o Método GPS 5.0.',
};

type Pillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const pillars: Pillar[] = [
  {
    title: 'Educação',
    description: 'Formação pensada para gestores e redes de ensino.',
    icon: BookOpenCheck,
  },
  {
    title: 'Liderança',
    description: 'Liderança escolar conectada aos desafios da prática.',
    icon: UsersRound,
  },
  {
    title: 'Redes de ensino',
    description: 'Uma atuação formativa também voltada às redes de ensino.',
    icon: Network,
  },
  {
    title: 'Método GPS 5.0',
    description:
      'A proposta metodológica de Jamilla Salviano apresentada pelo Instituto.',
    icon: Compass,
  },
];

// Conteúdo centralizado para receber novas ações confirmadas pelo Instituto.
const initiatives = [
  {
    category: 'Formação',
    title: 'Formação de gestores',
    description: 'Iniciativas formativas para quem atua na gestão escolar.',
    image: '/images/jamilla-cream.webp',
    alt: 'Jamilla Salviano em retrato institucional',
    position: 'center 24%',
  },
  {
    category: 'Institucional',
    title: 'Redes de ensino',
    description: 'Atuação formativa voltada às redes de ensino.',
    image: '/images/links-stage-bg.jpeg',
    alt: 'Jamilla Salviano durante apresentação institucional',
    position: '58% center',
  },
  {
    category: 'Método',
    title: 'GPS 5.0',
    description: 'Método de Jamilla Salviano integrado à atuação do Instituto.',
    image: '/images/jamilla-navy.webp',
    alt: 'Jamilla Salviano em retrato institucional com traje azul',
    position: 'center 16%',
  },
];

const gallery = [
  {
    src: '/images/links-stage-bg.jpeg',
    alt: 'Jamilla Salviano em uma apresentação para uma plateia',
    label: 'Presença que mobiliza',
    position: '58% center',
  },
  {
    src: '/images/jamilla-cream.webp',
    alt: 'Retrato institucional de Jamilla Salviano',
    label: 'Formação com direção',
    position: 'center top',
  },
  {
    src: '/images/jamilla-mentora.webp',
    alt: 'Jamilla Salviano sentada em retrato editorial',
    label: 'Liderança na prática',
    position: 'center 18%',
  },
];

export default function InstitutoPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="instituto-title">
          <div className={styles.heroTexture} aria-hidden="true" />
          <div className={`wrap ${styles.heroGrid}`}>
            <ScrollReveal className={styles.heroCopy}>
              <Eyebrow>Instituto de Educação e Liderança</Eyebrow>
              <h1 id="instituto-title">
                Educação que inspira. <em>Liderança que transforma.</em>
              </h1>
              <p>
                Liderança escolar na prática e formação de gestores e redes de
                ensino com o Método GPS 5.0, de Jamilla Salviano.
              </p>
              <div className={styles.heroActions}>
                <Cta href={INSTAGRAM_URL}>Conheça o Instituto</Cta>
                <a className={styles.secondaryCta} href="#iniciativas">
                  <span>Acompanhe nossas ações</span>
                  <ArrowDown size={16} aria-hidden="true" />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal
              className={styles.heroVisual}
              delay={120}
              variant="image"
            >
              <figure className={styles.heroPhoto}>
                <Image
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 46vw"
                  src="/images/links-stage-bg.jpeg"
                  alt="Jamilla Salviano em apresentação institucional"
                />
              </figure>
              <div className={styles.heroSeal} aria-hidden="true">
                <GraduationCap size={25} strokeWidth={1.35} />
                <span>IEL</span>
              </div>
              <p className={styles.heroCaption}>
                Formação de gestores <span>·</span> Redes de ensino
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className={styles.about} aria-labelledby="sobre-instituto">
          <div className={`wrap ${styles.aboutGrid}`}>
            <ScrollReveal>
              <Eyebrow>Sobre o Instituto</Eyebrow>
              <h2 id="sobre-instituto">
                Um espaço para formar, inspirar e <em>transformar</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal className={styles.aboutContent} delay={100}>
              <div className={styles.aboutRule} aria-hidden="true" />
              <p>
                O Instituto de Educação e Liderança é uma frente dedicada à
                liderança escolar na prática e à formação de gestores e redes de
                ensino.
              </p>
              <p>
                Sua atuação apresenta o Método GPS 5.0, de Jamilla Salviano,
                como parte desse caminho formativo.
              </p>
              <div
                className={styles.signature}
                aria-label="Instituto de Educação e Liderança"
              >
                <span>Educação</span>
                <strong>&amp;</strong>
                <span>Liderança</span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className={styles.pillars} aria-labelledby="pilares-title">
          <div className="wrap">
            <ScrollReveal className={styles.sectionHeading}>
              <Eyebrow>Nossos pilares</Eyebrow>
              <h2 id="pilares-title">
                Formação que encontra a <em>realidade da escola.</em>
              </h2>
            </ScrollReveal>
            <div className={styles.pillarGrid}>
              {pillars.map(({ title, description, icon: Icon }, index) => (
                <ScrollReveal delay={index * 70} key={title}>
                  <article className={styles.pillarCard}>
                    <div className={styles.cardTop}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <Icon size={23} strokeWidth={1.4} aria-hidden="true" />
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className={styles.initiatives}
          id="iniciativas"
          aria-labelledby="iniciativas-title"
        >
          <div className="wrap">
            <div className={styles.initiativesHeader}>
              <ScrollReveal>
                <Eyebrow>Ações e formações</Eyebrow>
                <h2 id="iniciativas-title">
                  Conhecimento que se move em <em>direção à prática.</em>
                </h2>
              </ScrollReveal>
              <ScrollReveal className={styles.initiativesIntro} delay={90}>
                <p>
                  Os eixos abaixo refletem exclusivamente a atuação apresentada
                  pelo Instituto em seu perfil oficial.
                </p>
              </ScrollReveal>
            </div>

            <div className={styles.initiativeGrid}>
              {initiatives.map((initiative, index) => (
                <ScrollReveal
                  delay={index * 80}
                  key={initiative.title}
                  variant="image"
                >
                  <article className={styles.initiativeCard}>
                    <figure className={styles.initiativeImage}>
                      <Image
                        fill
                        sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw"
                        src={initiative.image}
                        alt={initiative.alt}
                        style={{ objectPosition: initiative.position }}
                      />
                    </figure>
                    <div className={styles.initiativeCopy}>
                      <div className={styles.initiativeMeta}>
                        <span>{initiative.category}</span>
                        <small>{String(index + 1).padStart(2, '0')}</small>
                      </div>
                      <h3>{initiative.title}</h3>
                      <p>{initiative.description}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className={styles.gallerySection}
          aria-labelledby="galeria-title"
        >
          <div className="wrap">
            <ScrollReveal className={styles.galleryHeading}>
              <div>
                <Eyebrow>Presença do Instituto</Eyebrow>
                <h2 id="galeria-title">
                  Educação se constrói com <em>presença.</em>
                </h2>
              </div>
              <a className={styles.instagramLink} href={INSTAGRAM_URL}>
                <Camera size={17} aria-hidden="true" />
                <span>Ver no Instagram</span>
              </a>
            </ScrollReveal>

            <div className={styles.gallery}>
              {gallery.map((item, index) => (
                <ScrollReveal
                  className={styles.galleryReveal}
                  delay={index * 80}
                  key={item.src}
                  variant="image"
                >
                  <figure className={styles.galleryItem}>
                    <Image
                      fill
                      sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 40vw"
                      src={item.src}
                      alt={item.alt}
                      style={{ objectPosition: item.position }}
                    />
                    <figcaption>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      {item.label}
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <FinalCta
          action="Acompanhe o Instituto no Instagram"
          description="Conheça de perto as ações, formações e conteúdos compartilhados pelo Instituto."
          eyebrow="Educação e liderança"
          href={INSTAGRAM_URL}
          imageAlt="Jamilla Salviano em retrato institucional"
          imageSrc="/images/jamilla-cream.webp"
          title="Toda transformação começa quando conhecimento encontra direção."
          variant="wine"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
