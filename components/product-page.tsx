import {
  CircleCheck,
  FileText,
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

export function ProductPage(p: Props) {
  const primaryHref = p.checkoutHref ?? '/contato';
  const primaryAction = p.checkoutHref ? 'Quero me inscrever' : 'Quero saber mais';

  return (
    <>
      <Header />
      <main className={`product-page product-page--${p.theme}`}>
        <Hero className="product-hero">
          <div className="product-hero__texture" aria-hidden="true" />
          <div className="wrap product-hero-grid">
            <ScrollReveal className="product-hero__copy">
              <Eyebrow>{p.eyebrow}</Eyebrow>
              <h1>
                {p.title}
                <em>{p.accent}</em>
              </h1>
              <p>{p.intro}</p>
              <Cta href={primaryHref}>{primaryAction}</Cta>
            </ScrollReveal>

            <ScrollReveal className="product-hero__visual" delay={140} variant="scale">
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
            </ScrollReveal>
          </div>
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

        <section className="section product-content surface-paper">
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
        </section>

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
