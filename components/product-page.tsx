import {
  ArrowUp,
  Brain,
  BookOpenCheck,
  CalendarDays,
  ChartNoAxesCombined,
  ClipboardCheck,
  CircleCheck,
  Compass,
  FileText,
  MessageCircle,
  MonitorPlay,
  ShieldCheck,
  Target,
  UsersRound,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import { type ReactNode } from 'react';
import {
  Cta,
  EditorialCard,
  Eyebrow,
  FinalCta,
  Footer,
  Header,
  Hero,
  SectionHeader,
} from './site';
import { ScrollReveal } from './scroll-reveal';
import { JamillaLibraryBooks } from './jamilla-library-books';
import { TalksGallery } from './talks-gallery';
import { TalksThemes } from './talks-themes';

type Props = {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  image: string;
  theme: 'wine' | 'navy' | 'red';
  problem: string;
  items: string[];
  itemDescriptions?: string[];
  formats: string[];
  formatDescriptions?: string[];
  cta: ReactNode;
  challengeDescription?: string;
  primaryAction?: string;
  contactHref?: string;
  finalAction?: string;
  heroVariant?: 'talks' | 'trilha' | 'reset' | 'ata';
  heroBackgroundImage?: string;
  heroBackgroundVideo?: string;
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
  [ChartNoAxesCombined, 'Aplicação prática', 'na sua liderança'],
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

const jamillaLibraryBooks = [
  { number: '09', shortTitle: 'Bullying na Escola', category: 'Prevenção e intervenção', title: 'Como acabar com o bullying na escola', description: 'Esse material ajuda gestores a lidar com um problema grave e recorrente nas escolas: o bullying e o cyberbullying. Com ele, o gestor poderá criar protocolos, planejar intervenções, adotar medidas preventivas e fortalecer uma cultura antibullying dentro da escola.', image: '/images/library-como-acabar-com-bullying.png', position: 1 },
  { number: '08', shortTitle: 'Guia Vol. 2', category: 'Liderança escolar', title: 'Guia para Gestores Escolares — Volume 2', description: 'Conteúdos práticos para fortalecer sua atuação, sua comunicação e sua tomada de decisão na liderança escolar.', image: '/images/library-guia-competencias.png', position: 2 },
  { number: '07', shortTitle: 'Formação Continuada', category: 'Reuniões que movem', title: 'Formação Continuada', description: 'Direcionamentos para desenvolver a equipe e transformar reuniões em momentos reais de crescimento.', image: '/images/library-formacao-continuada.png', position: 3 },
  { number: '06', shortTitle: 'Estrategista', category: 'Gestão com método', title: 'De Sobrevivente a Estrategista', description: 'Um caminho para parar de viver no improviso e começar a liderar com visão, organização e prioridade.', image: '/images/library-de-sobrevivente.png', position: 4 },
  { number: '01', shortTitle: 'Inimigo Oculto', category: 'Cultura e autoridade', title: 'O Inimigo Oculto da Gestão Escolar', description: 'Um material direto sobre cultura permissiva, fofocas, resistência, perda de autoridade e sabotadores invisíveis que travam a escola.', image: '/images/library-inimigo-oculto.png', position: 5, featured: true },
  { number: '10', shortTitle: 'Cérebro, Emoção & Liderança', category: 'Neurociência e liderança', title: 'Cérebro, Emoção & Liderança', description: 'Este e-book mostra como a liderança escolar pode motivar equipes com base em princípios da neurociência. Apresenta a relação entre cérebro, emoção e comportamento no ambiente escolar, trazendo reflexões e estratégias práticas para fortalecer o engajamento, a confiança e a cooperação da equipe. É um material para gestores que desejam liderar com mais inteligência, humanidade e intenção.', image: '/images/library-cerebro-emocao-lideranca.png', position: 6 },
  { number: '05', shortTitle: 'Três Venenos', category: 'Clima de equipe', title: 'Fofocas, Resistência e Desmotivação', description: 'Entenda e enfrente três venenos silenciosos que corroem a confiança, a energia e a colaboração da equipe escolar.', image: '/images/library-fofocas-resistencia.png', position: 7 },
  { number: '04', shortTitle: 'Anatomia do Feedback', category: 'Firmeza humana', title: 'Anatomia do Feedback', description: 'Um guia para dar devolutivas firmes, humanas e estratégicas sem transformar tudo em conflito.', image: '/images/library-anatomia-feedback.png', position: 8 },
  { number: '03', shortTitle: '60 Projetos', category: 'Mobilização escolar', title: '60 Projetos Escolares Prontos', description: 'Ideias práticas para movimentar a escola, envolver a comunidade e fortalecer o trabalho pedagógico.', image: '/images/library-60-projetos.png', position: 9 },
  { number: '02', shortTitle: 'IA para Gestores', category: 'Tempo e clareza', title: 'Guia de Inteligência Artificial para Gestores', description: 'Use IA na rotina da gestão escolar para organizar ideias, ganhar tempo e tomar decisões com mais repertório.', image: '/images/library-inteligencia-artificial.png', position: 10 },
];

const trilhaPainPoints = [
  'Você conversa, conversa e nada muda.',
  'Tem receio de cobrar e parecer autoritário.',
  'Algumas pessoas da equipe ignoram combinados.',
  'Você resolve problemas que deveriam ser resolvidos por outras pessoas.',
  'Tem dificuldade de entender por que alguns conflitos continuam voltando.',
  'Sente que está administrando problemas em vez de liderar pessoas.',
  'Termina o dia cansado, mas sem a sensação de que avançou.',
];

const trilhaReceives = [
  {
    icon: BookOpenCheck,
    title: 'Formação prática',
    description: 'Conteúdo direto para aplicar no cotidiano da liderança.',
  },
  {
    icon: Target,
    title: 'Diagnóstico de liderança',
    description:
      'Ajuda a reconhecer padrões e comportamentos que podem estar prejudicando a equipe.',
  },
  {
    icon: ClipboardCheck,
    title: 'Exercícios e ferramentas',
    description:
      'Atividades práticas para transformar conhecimento em ação.',
  },
  {
    icon: MonitorPlay,
    title: 'Imersão ao vivo',
    description:
      'Encontro pelo Google Meet para aprofundar conteúdos e situações reais da liderança.',
  },
];

export function ProductPage(p: Props) {
  const primaryHref = p.checkoutHref ?? p.contactHref ?? '/contato';
  const primaryAction =
    p.primaryAction ?? (p.checkoutHref ? 'Quero me inscrever' : 'Quero saber mais');
  const hasHeroBackdrop = Boolean(p.heroBackgroundImage || p.heroBackgroundVideo);

  return (
    <>
      <Header />
      <main
        className={`product-page product-page--${p.theme}${p.heroVariant === 'trilha' ? ' product-page--trilha' : ''}${p.heroVariant === 'reset' ? ' product-page--reset' : ''}${p.heroVariant === 'talks' ? ' product-page--talks' : ''}${p.heroVariant === 'ata' ? ' product-page--ata' : ''}`}
      >
        <Hero className={`product-hero${hasHeroBackdrop ? ' product-hero--with-background' : ''}${p.heroVariant === 'talks' ? ' product-hero--talks' : ''}${p.heroVariant === 'trilha' ? ' trilha-hero' : ''}${p.heroVariant === 'reset' ? ' reset-hero' : ''}${p.heroVariant === 'ata' ? ' ata-hero' : ''}`}>
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
                <div className="trilha-hero__event-meta" aria-label="Detalhes da imersão">
                  <span>Imersão ao vivo</span>
                  <strong>Google Meet</strong>
                  <b>R$ 37,90</b>
                </div>
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
          {hasHeroBackdrop ? <div className="product-hero__backdrop" aria-hidden="true">{p.heroBackgroundVideo ? <video autoPlay loop muted playsInline preload="metadata"><source src={p.heroBackgroundVideo} type="video/mp4" /></video> : <Image fill priority sizes="100vw" src={p.heroBackgroundImage!} alt="" />}</div> : null}
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
          {hasHeroBackdrop ? <div className="product-hero__topics" aria-label="Temas das palestras"><div className="product-hero__topics-track">{[...heroTopics, ...heroTopics].map((topic, index) => <span key={`${topic}-${index}`}>{topic}</span>)}</div></div> : null}
          </>
          )}
        </Hero>

        {p.heroVariant === 'trilha' && p.offer ? (
          <section className="trilha-priority-offer" aria-labelledby="trilha-priority-offer-title">
            <div className="wrap trilha-priority-offer__wrap">
              <ScrollReveal className="trilha-priority-offer__content" variant="scale">
                <span className="trilha-priority-offer__badge">Investimento especial</span>
                <h2 id="trilha-priority-offer-title">Transforme sua liderança escolar por apenas</h2>
                <div className="trilha-priority-offer__price-row">
                  <p className="trilha-priority-offer__price" aria-label={p.offer.price}>
                    <span>R$</span>
                    <strong>{p.offer.price.replace(/^R\$\s*/, '')}</strong>
                  </p>
                  <p className="trilha-priority-offer__live-access">
                    <CalendarDays aria-hidden="true" />
                    <span>acesso à imersão<br />ao vivo</span>
                  </p>
                </div>
                <div className="trilha-priority-offer__divider" aria-hidden="true" />
                <ul className="trilha-priority-offer__benefits" aria-label="Benefícios da inscrição">
                  <li><MonitorPlay aria-hidden="true" /><span>Imersão<br />ao vivo</span></li>
                  <li><Zap aria-hidden="true" /><span>Acesso<br />imediato</span></li>
                  <li><ShieldCheck aria-hidden="true" /><span>Pagamento<br />seguro</span></li>
                </ul>
                <Cta className="trilha-priority-offer__button" href={p.checkoutHref ?? primaryHref}>
                  {p.offer.button}
                </Cta>
                <small>🔒 Pagamento seguro pela plataforma Kiwify.</small>
              </ScrollReveal>
              <span className="trilha-priority-offer__rings" aria-hidden="true" />
            </div>
          </section>
        ) : null}

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
                <div className="trilha-details__intro">
                  <p>Um percurso direto para gestores, coordenadores e profissionais da educação reconhecerem padrões, organizarem decisões e conduzirem pessoas com mais segurança.</p>
                </div>
                <div className="trilha-modules">
                  {p.items.map((item, index) => (
                    <article className="trilha-module" key={item}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <h3>{item}</h3>
                      <p>{p.itemDescriptions?.[index]}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
            <section className="section trilha-pains surface-cream" aria-labelledby="trilha-dores-title">
              <div className="wrap">
                <SectionHeader eyebrow="Na prática" title={<span id="trilha-dores-title">Se você vive alguma dessas situações, essa Trilha foi criada para você.</span>} />
                <div className="trilha-pains__grid">
                  {trilhaPainPoints.map((pain, index) => (
                    <article key={pain}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <p>{pain}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
            <section className="section trilha-receives" aria-labelledby="trilha-recebe-title">
              <div className="wrap">
                <SectionHeader eyebrow="O que você recebe" title={<><span id="trilha-recebe-title">Conteúdo para entender.</span> <em>Ferramentas para agir.</em></>} />
                <div className="trilha-receives__grid">
                  {trilhaReceives.map(({ icon: Icon, title, description }) => (
                    <article key={title}>
                      <Icon size={28} strokeWidth={1.4} aria-hidden="true" />
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : null}

        {p.heroVariant !== 'trilha' ? <section className="section surface-cream product-challenge">
          <div className="wrap split split--challenge">
            <ScrollReveal>
              <SectionHeader eyebrow="O desafio" title={p.problem} />
            </ScrollReveal>
            <ScrollReveal className="prose product-challenge__copy" delay={100}>
              <p>
                {p.challengeDescription ??
                  'Liderança consistente nasce quando intenção encontra método. Esta experiência foi desenhada para traduzir desafios reais em conversas, decisões e práticas possíveis.'}
              </p>
            </ScrollReveal>
          </div>
        </section> : null}

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
                    Jamilla Salviano é professora especialista em Gestão Escolar,
                    Supervisão Escolar, Docência do Ensino Superior e Orientação
                    Escolar. Também atua como assessora e consultora educacional,
                    mentora de gestores e palestrante em liderança escolar.
                  </p>
                  <p>
                    Sua trajetória reúne atuação como professora, coordenadora,
                    supervisora e diretora de escola pública de grande porte — uma
                    experiência que aproxima cada palestra das situações reais
                    vividas por quem lidera na educação.
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
                  <Cta href={primaryHref} className="talks-authority__cta">
                    Leve Jamilla para o seu evento
                  </Cta>
                </ScrollReveal>
              </div>
            </div>
          </section>
          <section className="jamilla-library" aria-labelledby="biblioteca-jamilla-title">
            <div className="wrap jamilla-library__intro">
              <ScrollReveal>
                <Eyebrow>Biblioteca da Jamilla</Eyebrow>
                <h2 id="biblioteca-jamilla-title">
                  Conteúdos que formam,<br />
                  inspiram e transformam.
                </h2>
                <p>
                  Uma trajetória construída na educação também se transforma em conhecimento compartilhado.
                  Conheça livros e materiais desenvolvidos a partir da experiência prática em liderança,
                  gestão escolar e desenvolvimento de equipes.
                </p>
              </ScrollReveal>
            </div>
            <JamillaLibraryBooks books={jamillaLibraryBooks} />
            <div className="jamilla-library__hint" aria-hidden="true">
              <ArrowUp size={18} strokeWidth={1.5} />
              <span>Passe o mouse</span>
            </div>
          </section>
          <TalksThemes contactHref={primaryHref} />
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
                    description={p.itemDescriptions?.[index]}
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
                      {p.formatDescriptions?.[index] ? (
                        <small>{p.formatDescriptions[index]}</small>
                      ) : null}
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
              <Cta href="/links" dark>
                Conheça Jamilla
              </Cta>
            </ScrollReveal>
          </div>
        </section>

        {p.offer ? (
          <section className={`offer-section${p.heroVariant === 'ata' ? ' ata-offer-section' : ''}`}>
            <div className={`wrap offer-box${p.heroVariant === 'ata' ? ' ata-offer-box' : ''}`}>
              <ScrollReveal variant="scale">
                {p.heroVariant === 'ata' ? (
                  <div className="ata-offer-grid">
                    <div className="ata-offer-copy">
                      <span className="ata-offer-badge">Oferta especial</span>
                      <h2>Tudo o que você precisa para agir com mais segurança na gestão escolar.</h2>
                      {p.offer.bullets ? (
                        <ul className="ata-offer-benefits">
                          {p.offer.bullets.map((item) => (
                            <li key={item}>
                              <CircleCheck aria-hidden="true" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>

                    <aside className="ata-offer-card" aria-label="Investimento do minicurso">
                      <span>Investimento único</span>
                      <p className="ata-offer-price">R$ 97,90</p>
                      <p className="ata-offer-cash">à vista</p>
                      <p className="ata-offer-installments">ou <strong>12x de R$ 10,13</strong></p>
                      <p className="ata-offer-value">Menos de R$ 0,34 por dia para ter materiais práticos sempre à mão.</p>
                      <Cta className="ata-offer-button" href={p.checkoutHref ?? '/contato'}>
                        Quero garantir meu acesso
                      </Cta>
                      <div className="ata-offer-trust" aria-label="Informações de segurança da compra">
                        <span><ShieldCheck aria-hidden="true" />Pagamento seguro via Kiwify</span>
                        <span><CircleCheck aria-hidden="true" />Acesso liberado após a confirmação do pagamento</span>
                        <span><ShieldCheck aria-hidden="true" />Compra 100% segura</span>
                      </div>
                    </aside>
                  </div>
                ) : <>
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
                <div className={`offer-main${p.heroVariant === 'trilha' ? ' offer-main--trilha' : ''}`}>
                  {p.offer.bullets ? (
                    <div className={p.heroVariant === 'trilha' ? 'offer-inclusions offer-inclusions--trilha' : 'offer-inclusions'}>
                      {p.heroVariant === 'trilha' ? <p>Na sua inscrição, você recebe:</p> : null}
                      <ul>
                        {p.offer.bullets.map((item) => (
                          <li key={item}>
                            <CircleCheck size={19} aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {p.heroVariant === 'trilha' ? (
                    <div className="trilha-offer-decision">
                      <span className="trilha-offer-badge">Investimento especial</span>
                      <p className="trilha-offer-title">Transforme sua liderança escolar por apenas</p>
                      <p className="offer-price trilha-offer-price" aria-label={p.offer.price}>
                        <span>R$</span>
                        <strong>{p.offer.price.replace(/^R\$\s*/, '')}</strong>
                      </p>
                    </div>
                  ) : (
                    <p className="offer-price">{p.offer.price}</p>
                  )}
                  {p.offer.note ? <p className="offer-note">{p.offer.note}</p> : null}
                  <Cta className="offer-button" href={p.checkoutHref ?? '/contato'}>
                    {p.offer.button}
                  </Cta>
                  <small className="offer-safe">Pagamento seguro pela plataforma Kiwify.</small>
                </div>
                </>}
              </ScrollReveal>
            </div>
          </section>
        ) : null}

        <FinalCta
          action={p.finalAction ?? (p.checkoutHref ? 'Garantir minha vaga' : 'Falar com Jamilla')}
          href={primaryHref}
          title={p.cta}
          variant={p.heroVariant === 'ata' ? 'ata' : p.theme === 'navy' ? 'wine' : 'navy'}
        />
      </main>
      <Footer />
    </>
  );
}
