import {
  Brain,
  BookOpenCheck,
  ChartNoAxesCombined,
  CircleCheck,
  Compass,
  FileText,
  MessageCircle,
  MonitorPlay,
  Target,
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
import { TalksGallery } from './talks-gallery';

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
  heroVariant?: 'talks' | 'trilha' | 'reset' | 'ata';
  heroBackgroundImage?: string;
  showcase?: {
    title: string;
    words?: string[];
    images: Array<{ src: string; label: string; alt?: string }>;
  };
  editorialShowcase?: {
    words: string[];
    images: Array<{ src: string; label: string; alt?: string }>;
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
const trilhaHeroBenefits = [
  [Target, 'Ferramentas\npara a sua realidade'],
  [UsersRound, 'Mais segurança\nnas decisões'],
  [ChartNoAxesCombined, 'Resultados\nno dia a dia escolar'],
] as const;
const resetHeroBenefits = [
  [Brain, 'Autoconhecimento', 'para decisões mais conscientes'],
  [UsersRound, 'Relações mais saudáveis', 'no ambiente de trabalho'],
  [ChartNoAxesCombined, 'Resultados reais', 'na sua liderança'],
] as const;
const ataHeroBenefits = [
  [FileText, 'Registros claros', 'e bem estruturados'],
  [Brain, 'Mais segurança', 'para a sua gestão'],
  [UsersRound, 'Menos conflitos', 'e mais alinhamento'],
] as const;
const heroTopics = ['Liderança escolar', 'Gestão de pessoas', 'Cultura de equipe', 'Comunicação', 'Tomada de decisão'];
const talksCredentials = [
  'Professora especialista em Gestão Escolar',
  'Especialista em Supervisão Escolar',
  'Especialista em Docência do Ensino Superior',
  'Especialista em Orientação Escolar',
  'Assessora e Consultora Educacional',
  'Mentora de Gestores Escolares',
  'Palestrante em Liderança Escolar',
  'Experiência como professora, coordenadora, supervisora e diretora',
];

export function ProductPage(p: Props) {
  const primaryHref = p.checkoutHref ?? '/contato';
  const primaryAction = p.checkoutHref ? 'Quero me inscrever' : 'Quero saber mais';

  return (
    <>
      <Header />
      <main className={`product-page product-page--${p.theme}`}>
        <Hero className={`product-hero${p.heroBackgroundImage ? ' product-hero--with-background' : ''}${p.heroVariant === 'talks' ? ' product-hero--talks' : ''}${p.heroVariant === 'trilha' ? ' trilha-hero' : ''}${p.heroVariant === 'reset' ? ' reset-hero' : ''}${p.heroVariant === 'ata' ? ' ata-hero' : ''}`}>
          {p.heroVariant === 'ata' ? (
            <div className="wrap ata-hero__grid">
              <ScrollReveal className="ata-hero__copy">
                <Eyebrow>{p.eyebrow}</Eyebrow>
                <h1>
                  <span>Não deixe sua</span>
                  <span>gestão vulnerável ao</span>
                  <em>‘ninguém me avisou’.</em>
                </h1>
                <p>{p.intro}</p>
                <Cta href={primaryHref}>{primaryAction}</Cta>
              </ScrollReveal>
              <ScrollReveal className="ata-hero__visual" delay={120} variant="image">
                <span className="ata-hero__arch" aria-hidden="true" />
                <span className="ata-hero__arch-glow" aria-hidden="true" />
                <Image className="ata-hero__portrait" fill priority sizes="(max-width: 768px) 94vw, 45vw" src={p.image} alt="Jamilla Salviano" />
                <aside className="ata-hero__signature" aria-label="Assinatura de Jamilla Salviano">
                  <p>PESSOAS.<br />MÉTODO.<br />RESULTADOS.</p>
                  <strong>Jamilla<br />Salviano</strong>
                  <small>LIDERANÇA<br />QUE TRANSFORMA<br />REALIDADES.</small>
                </aside>
              </ScrollReveal>
              <ul className="ata-hero__benefits" aria-label="Diferenciais do minicurso">
                {ataHeroBenefits.map(([Icon, title, description], index) => {
                  const BenefitIcon = Icon as typeof FileText;
                  return <li key={title} className={index > 0 ? 'ata-hero__benefit--divided' : ''}><BenefitIcon size={32} strokeWidth={1.55} /><span><strong>{title}</strong><small>{description}</small></span></li>;
                })}
              </ul>
            </div>
          ) : p.heroVariant === 'reset' ? (
            <div className="wrap reset-hero__grid">
              <ScrollReveal className="reset-hero__copy">
                <Eyebrow>{p.eyebrow}</Eyebrow>
                <h1><span>Você precisa</span><em>liderar</em><em>pessoas.</em></h1>
                <p>{p.intro}</p>
                <Cta href={primaryHref}>{primaryAction}</Cta>
                <ul className="reset-hero__benefits" aria-label="Diferenciais da Experiência RESET">
                  {resetHeroBenefits.map(([Icon, title, description], index) => {
                    const BenefitIcon = Icon as typeof Brain;
                    return <li key={title} className={index > 0 ? 'reset-hero__benefit--divided' : ''}><BenefitIcon size={32} strokeWidth={1.6} /><span><strong>{title}</strong><small>{description}</small></span></li>;
                  })}
                </ul>
              </ScrollReveal>
              <ScrollReveal className="reset-hero__visual" delay={120} variant="image">
                <span className="reset-hero__arch" aria-hidden="true" />
                <span className="reset-hero__arch-glow" aria-hidden="true" />
                <Image className="reset-hero__portrait" fill priority sizes="(max-width: 768px) 92vw, 43vw" src="/images/jamilla-reset-cutout.png" alt="Jamilla Salviano" />
                <aside className="reset-hero__signature" aria-label="Assinatura de Jamilla Salviano">
                  <p>Pessoas.<br />Método.<br />Resultados.</p>
                  <span>JAMILLA</span>
                  <strong>Salviano</strong>
                  <small>LIDERANÇA<br />QUE TRANSFORMA<br />REALIDADES.</small>
                </aside>
              </ScrollReveal>
            </div>
          ) : p.heroVariant === 'trilha' ? (
            <div className="wrap trilha-hero__grid">
              <ScrollReveal className="trilha-hero__copy">
                <Eyebrow>{p.eyebrow}</Eyebrow>
                <h1><span>Pare de liderar</span><span>no <em>achismo.</em></span></h1>
                <p>{p.intro}</p>
                <Cta href={primaryHref}>{primaryAction}</Cta>
              </ScrollReveal>
              <ScrollReveal className="trilha-hero__visual" delay={120} variant="image">
                <span className="trilha-hero__arc" aria-hidden="true" />
                <span className="trilha-hero__arc-glow" aria-hidden="true" />
                <Image className="trilha-hero__portrait" fill priority sizes="(max-width: 900px) 100vw, 48vw" src={p.image} alt="Jamilla Salviano sentada" />
                <aside className="trilha-hero__signature" aria-hidden="true">
                  <span>Jamilla</span>
                  <strong>Salviano</strong>
                  <small>Liderança que transforma realidades.</small>
                </aside>
                <span className="trilha-hero__side-words" aria-hidden="true">Pessoas.<br />Método.<br />Resultados.</span>
              </ScrollReveal>
              <ul className="trilha-hero__benefits">
                {trilhaHeroBenefits.map(([Icon, text]) => { const BenefitIcon = Icon as typeof Target; return <li key={text}><BenefitIcon size={30} strokeWidth={1.5} /><span>{text}</span></li>; })}
              </ul>
            </div>
          ) : (
          <>
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
          </>
          )}
        </Hero>

        {p.heroVariant === 'talks' && p.editorialShowcase ? (
          <section className="section talks-showcase" aria-label="Clareza, estratégia e coragem">
            <div className="wrap">
              <div className="talks-showcase__composition">
                {p.editorialShowcase.images.map((image, index) => (
                  <figure
                    className={`talks-showcase__image talks-showcase__image--${index + 1}`}
                    key={image.src}
                  >
                    <Image
                      fill
                      sizes="(max-width: 760px) 78vw, 29vw"
                      src={image.src}
                      alt={image.alt ?? `Jamilla Salviano — ${image.label}`}
                    />
                    <figcaption>{image.label}</figcaption>
                  </figure>
                ))}
                <h2 className="talks-showcase__words" aria-live="polite">
                  {p.editorialShowcase.words.map((word, index) => (
                    <span key={word} style={{ animationDelay: `${index * 3}s` }}>
                      {word}
                    </span>
                  ))}
                </h2>
              </div>
            </div>
          </section>
        ) : null}

        {p.heroVariant === 'trilha' ? (
          <>
            <section className="trilha-live-note" aria-label="Imersão ao vivo da Trilha da Liderança">
              <MonitorPlay size={24} aria-hidden="true" />
              <div><strong>Imersão ao vivo pelo Google Meet</strong><span>Data, horário e duração serão confirmados nesta página assim que estiverem definidos.</span></div>
            </section>
            <section className="section trilha-details" aria-labelledby="trilha-o-que-e">
              <div className="wrap">
                <SectionHeader eyebrow="Trilha da Liderança" title={<><span id="trilha-o-que-e">Uma formação prática para liderar com mais clareza.</span> <em>Sem achismo.</em></>} />
                <div className="trilha-details__grid">
                  <article className="trilha-detail-card"><h3>O que é</h3><p>Um percurso direto para gestores escolares reconhecerem padrões, organizarem decisões e aplicarem ferramentas de liderança na rotina.</p></article>
                  <article className="trilha-detail-card"><h3>Para quem é</h3><p>Para gestores, coordenadores e profissionais da educação que precisam conduzir pessoas e situações reais com mais segurança.</p></article>
                  <article className="trilha-detail-card"><h3>O que você aprende</h3><ul>{p.items.map((item) => <li key={item}>{item}</li>)}</ul></article>
                  <article className="trilha-detail-card"><h3>O que você recebe</h3><ul>{p.formats.map((item) => <li key={item}>{item}</li>)}<li>Imersão ao vivo pelo Google Meet, com dados a confirmar.</li></ul></article>
                  <article className="trilha-detail-card"><h3>Dificuldades que poderá superar</h3><ul><li>Repetição de conversas sem mudança prática.</li><li>Insegurança para delegar, cobrar e tomar decisões.</li><li>Conflitos e padrões de comportamento difíceis de interpretar.</li></ul></article>
                  <article className="trilha-detail-card"><h3>Investimento</h3><p className="offer-price">R$ 37,90</p><p>Condições e acesso conforme a confirmação no checkout.</p></article>
                </div>
              </div>
            </section>
          </>
        ) : null}

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

        {p.heroVariant === 'talks' ? <>
          <section className="section talks-gallery-section surface-paper" aria-labelledby="palestras-galeria-title">
            <div className="wrap">
              <ScrollReveal>
                <SectionHeader eyebrow="Palestras na prática" title={<><span id="palestras-galeria-title">Presença que se transforma em</span> <em>movimento.</em></>} />
              </ScrollReveal>
              {p.showcase ? <TalksGallery items={p.showcase.images.map((image) => ({ ...image, alt: image.alt ?? `Jamilla Salviano em ${image.label.toLowerCase()}` }))} /> : null}
            </div>
          </section>
          <section className="section talks-authority" aria-labelledby="quem-e-jamilla">
            <div className="wrap talks-authority__grid">
              <ScrollReveal className="talks-authority__visual" variant="image">
                <figure className="talks-authority__photo">
                  <Image
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1050px) 42vw, 38vw"
                    src="/images/jamilla-mentora.webp"
                    alt="Jamilla Salviano em retrato profissional"
                  />
                </figure>
                <span aria-hidden="true">Educação · Liderança</span>
              </ScrollReveal>

              <div className="talks-authority__content">
                <ScrollReveal>
                  <Eyebrow>Quem é Jamilla Salviano</Eyebrow>
                  <h2 id="quem-e-jamilla">
                    Experiência na escola. <em>Autoridade para falar sobre liderança.</em>
                  </h2>
                </ScrollReveal>
                <ScrollReveal className="talks-authority__intro" delay={70}>
                  <p>
                    Professora e especialista em Gestão Escolar, Jamilla Salviano
                    construiu sua trajetória vivendo de perto os desafios da
                    liderança na educação.
                  </p>
                  <p>
                    Atuou como professora, coordenadora, supervisora e diretora de
                    escola pública de grande porte. Hoje é assessora e consultora
                    educacional, mentora de gestores escolares e palestrante em
                    liderança escolar.
                  </p>
                </ScrollReveal>

                <div className="talks-authority__credentials" aria-label="Credenciais de Jamilla Salviano">
                  {talksCredentials.map((credential, index) => (
                    <ScrollReveal delay={110 + index * 45} key={credential}>
                      <div className="talks-authority__credential">
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <strong>{credential}</strong>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                <div className="talks-authority__highlights">
                  <ScrollReveal delay={120}>
                    <article>
                      <BookOpenCheck size={25} strokeWidth={1.35} aria-hidden="true" />
                      <p>Autora do livro</p>
                      <h3>O Inimigo Oculto da Gestão Escolar</h3>
                    </article>
                  </ScrollReveal>
                  <ScrollReveal delay={180}>
                    <article>
                      <Compass size={25} strokeWidth={1.35} aria-hidden="true" />
                      <p>Criadora do</p>
                      <h3>Método GPS da Liderança Escolar</h3>
                    </article>
                  </ScrollReveal>
                </div>

                <ScrollReveal delay={220}>
                  <Cta href="/contato" className="talks-authority__cta">
                    Leve Jamilla para o seu evento
                  </Cta>
                </ScrollReveal>
              </div>
            </div>
          </section>
          <section className="section talks-themes surface-paper">
            <div className="wrap talks-themes__inner">
              <div><Eyebrow>Temas de palestras</Eyebrow><h2>Conteúdos para o momento que sua escola está vivendo.</h2></div>
              <details className="talks-themes__disclosure">
                <summary>Ver temas de palestras <span aria-hidden="true">+</span></summary>
                <ul>{(p.showcase?.words?.length ? p.showcase.words : ['Temas em atualização pela Jamilla']).map((theme) => <li key={theme}>{theme}</li>)}</ul>
              </details>
            </div>
          </section>
        </> : p.showcase ? <section className="section talks-showcase"><div className="wrap"><div className="talks-showcase__composition">{p.showcase.images.map((image, index) => <figure className={`talks-showcase__image talks-showcase__image--${index + 1}`} key={image.src}><Image fill sizes="(max-width: 760px) 78vw, 29vw" src={image.src} alt={image.alt ?? `Jamilla Salviano em ${image.label.toLowerCase()}`} /><figcaption>{image.label}</figcaption></figure>)}<h2 className={p.showcase.words ? 'talks-showcase__words' : ''}>{(p.showcase.words ?? [p.showcase.title]).map((word, index) => <span key={word} style={{ animationDelay: `${index * 3}s` }}>{word}</span>)}</h2></div></div></section> : <section className="section product-content surface-paper">
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
