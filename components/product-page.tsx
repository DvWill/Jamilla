import {
  ChartNoAxesCombined,
  CircleCheck,
  FileText,
  MessageCircle,
  MonitorPlay,
  UsersRound,
} from 'lucide-react';
import Image from 'next/image';
import {
  Cta,
  EditorialCard,
  Eyebrow,
  FinalCta,
  Footer,
  Header,
  Hero,
  SectionHeader,
  WhatsAppButton,
} from './site';
import { ScrollReveal } from './scroll-reveal';

type Props = {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  image: string;
  theme: 'wine' | 'navy' | 'red';
  problem: string;
  items: string[];
  formats: string[];
  cta: string;
  heroVariant?: 'talks';
  heroBackgroundImage?: string;
  showcase?: {
    title: string;
    words?: string[];
    images: Array<{ src: string; label: string }>;
  };
  checkoutHref?: string;
  offer?: {
    bullets?: string[];
    price: string;
    note?: string;
    meta?: Array<{ label: string; value: string }>;
    button: string;
  };
};

const contentIcons = ['chart', 'message', 'users', 'zap', 'target', 'file'] as const;
const formatIcons = [MonitorPlay, FileText, UsersRound];
const talksHeroBenefits = [
  [UsersRound, 'Conexão com a realidade'],
  [MessageCircle, 'Reflexão que gera ação'],
  [ChartNoAxesCombined, 'Resultados sustentáveis'],
] as const;
const heroTopics = ['Liderança escolar', 'Gestão de pessoas', 'Cultura de equipe', 'Comunicação', 'Tomada de decisão'];

export function ProductPage(p: Props) {
  const primaryHref = p.checkoutHref ?? '/contato';
  const primaryAction = p.checkoutHref ? 'Quero me inscrever' : 'Quero saber mais';

  return (
    <>
      <Header />
      <main className={`product-page product-page--${p.theme}`}>
        <Hero className={`product-hero${p.heroBackgroundImage ? ' product-hero--with-background' : ''}${p.heroVariant === 'talks' ? ' product-hero--talks' : ''}`}>
          {p.heroBackgroundImage ? <div className="product-hero__backdrop" aria-hidden="true"><Image fill priority sizes="100vw" src={p.heroBackgroundImage} alt="" /></div> : null}
          <div className="product-hero__texture" aria-hidden="true" />
          <div className="wrap product-hero-grid">
            <ScrollReveal className="product-hero__copy">
              <Eyebrow>{p.eyebrow}</Eyebrow>
              {p.heroVariant === 'talks' ? <h1 className="talks-hero-title"><span>Uma escola</span><span>nunca vai além da</span><em>liderança que</em><em>a conduz.</em></h1> : <h1>{p.title}<em>{p.accent}</em></h1>}
              <p>{p.intro}</p>
              <Cta href={primaryHref}>{primaryAction}</Cta>
            </ScrollReveal>

            <ScrollReveal className="product-hero__visual" delay={120} variant="image">
              <span className="product-hero__orbit product-hero__orbit--outer" aria-hidden="true" />
              <span className="product-hero__orbit product-hero__orbit--inner" aria-hidden="true" />
              <figure className="product-photo">
                <Image
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 42vw"
                  src={p.image}
                  alt="Jamilla Salviano"
                />
              </figure>
              <span className="product-hero__side-note" aria-hidden="true">
                Pessoas · método · resultados
              </span>
              {p.heroVariant === 'talks' ? <aside className="talks-hero-details" aria-hidden="true"><p>Pessoas.<br />Método.<br />Resultados.</p><div><span>Jamilla</span><strong>Salviano</strong><small>Educação que transforma realidades.</small></div></aside> : null}
            </ScrollReveal>
            {p.heroVariant === 'talks' ? <ul className="talks-hero-benefits">{talksHeroBenefits.map(([Icon, text]) => { const BenefitIcon = Icon as typeof UsersRound; return <li key={text}><BenefitIcon size={22} strokeWidth={1.5} /><span>{text}</span></li>; })}</ul> : null}
          </div>
          {p.heroBackgroundImage ? <div className="product-hero__topics" aria-label="Temas das palestras"><div className="product-hero__topics-track">{[...heroTopics, ...heroTopics].map((topic, index) => <span key={`${topic}-${index}`}>{topic}</span>)}</div></div> : null}
        </Hero>

        <section className="section surface-cream product-challenge">
          <div className="wrap split split--challenge">
            <ScrollReveal>
              <SectionHeader eyebrow="O desafio" title={p.problem} />
            </ScrollReveal>
            <ScrollReveal className="prose product-challenge__copy" delay={100}>
              <p>
                Liderança consistente nasce quando intenção encontra método. Esta
                experiência foi desenhada para traduzir desafios reais em conversas,
                decisões e práticas possíveis.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {p.showcase ? <section className="section talks-showcase"><div className="wrap"><div className="talks-showcase__composition">{p.showcase.images.map((image, index) => <figure className={`talks-showcase__image talks-showcase__image--${index + 1}`} key={image.src}><Image fill sizes="(max-width: 760px) 78vw, 29vw" src={image.src} alt="Jamilla Salviano" /><figcaption>{image.label}</figcaption></figure>)}<h2 className={p.showcase.words ? 'talks-showcase__words' : ''}>{(p.showcase.words ?? [p.showcase.title]).map((word, index) => <span key={word} style={{ animationDelay: `${index * 3}s` }}>{word}</span>)}</h2></div></div></section> : <section className="section product-content surface-paper">
          <div className="wrap">
            <ScrollReveal>
              <SectionHeader
                eyebrow="O que você encontra"
                title={
                  <>
                    Clareza para agir.
                    <br />
                    <em>Método para sustentar.</em>
                  </>
                }
              />
            </ScrollReveal>
            <div className="content-grid">
              {p.items.map((item, index) => (
                <ScrollReveal delay={index * 65} key={item}>
                  <EditorialCard
                    className="content-card"
                    index={String(index + 1).padStart(2, '0')}
                    icon={contentIcons[index % contentIcons.length]}
                    title={item}
                    description="Conceitos objetivos, provocações e aplicação conectada ao cotidiano da liderança."
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>}

        <section className="section formats-section">
          <div className="wrap">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Formatos"
                title="Uma experiência que respeita o seu contexto."
              />
            </ScrollReveal>
            <div className="format-grid">
              {p.formats.map((format, index) => {
                const Icon = formatIcons[index % formatIcons.length];
                return (
                  <ScrollReveal delay={index * 85} key={format}>
                    <div className="format-card">
                      <Icon aria-hidden="true" size={27} strokeWidth={1.35} />
                      <span>{format}</span>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section surface-cream partner-section">
          <div className="wrap split split--partner">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Com Jamilla Salviano"
                title="Experiência prática em educação, liderança e gestão de pessoas."
              />
            </ScrollReveal>
            <ScrollReveal className="partner-section__copy" delay={100}>
              <p className="prose">
                Uma condução humana, direta e comprometida com transformações que
                continuam depois do encontro.
              </p>
              <Cta href="/sobre" dark>
                Conheça Jamilla
              </Cta>
            </ScrollReveal>
          </div>
        </section>

        {p.offer ? (
          <section className="offer-section">
            <div className="wrap offer-box">
              <ScrollReveal variant="scale">
                {p.offer.meta ? (
                  <div className="offer-meta">
                    {p.offer.meta.map((item) => (
                      <div key={item.label}>
                        <small>{item.label}</small>
                        <strong>{item.value}</strong>
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="offer-main">
                  {p.offer.bullets ? (
                    <ul>
                      {p.offer.bullets.map((item) => (
                        <li key={item}>
                          <CircleCheck size={19} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <p className="offer-price">{p.offer.price}</p>
                  {p.offer.note ? <p className="offer-note">{p.offer.note}</p> : null}
                  <Cta className="offer-button" href={p.checkoutHref ?? '/contato'}>
                    {p.offer.button}
                  </Cta>
                  <small className="offer-safe">Pagamento seguro pela plataforma Kiwify.</small>
                </div>
              </ScrollReveal>
            </div>
          </section>
        ) : null}

        <FinalCta
          action={p.checkoutHref ? 'Garantir minha vaga' : 'Falar com Jamilla'}
          href={primaryHref}
          title={p.cta}
          variant={p.theme === 'navy' ? 'wine' : 'navy'}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
