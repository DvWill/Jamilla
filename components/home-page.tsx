import { ArrowUpRight, Lightbulb, Target, UsersRound } from 'lucide-react';
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
} from '@/components/site';
import { ScrollReveal } from '@/components/scroll-reveal';

const solutions = [
  {
    index: '01',
    title: 'Trilha da Liderança',
    text: 'Formação prática para desenvolver sua liderança no dia a dia.',
    href: '/trilha-da-lideranca',
    tone: 'wine',
    icon: 'book',
  },
  {
    index: '02',
    title: 'RESET',
    text: 'Mentoria para reorganizar a forma de liderar pessoas e equipes.',
    href: '/reset',
    tone: 'navy',
    icon: 'target',
  },
  {
    index: '03',
    title: 'Palestras',
    text: 'Conversas que provocam reflexão, movimento e mudança nas instituições.',
    href: '/palestras',
    tone: 'wine',
    icon: 'message',
  },
  {
    index: '04',
    title: 'ATA Inteligente',
    text: 'Registros claros para decisões que não podem se perder.',
    href: '/ata-inteligente',
    tone: 'paper',
    icon: 'file',
  },
] as const;

const painPoints = [
  'Equipe desmotivada',
  'Retrabalho constante',
  'Conflitos evitados',
  'Comunicação falha',
  'Reuniões improdutivas',
  'Dificuldade em delegar',
  'Decisões improvisadas',
  'Falta de clareza',
];

const method = [
  'Clareza',
  'Método',
  'Comunicação',
  'Responsabilidade',
  'Gestão',
  'Cultura',
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="home-page">
        <Hero className="home-hero">
          <div className="home-hero__texture" aria-hidden="true" />
          <div className="wrap home-hero__grid">
            <div className="home-hero__copy">
              <ScrollReveal>
                <Eyebrow>Liderança • Educação • Gestão</Eyebrow>
              </ScrollReveal>
              <ScrollReveal delay={55}>
                <h1>
                  Transformar uma escola começa por quem{' '}
                  <em>lidera pessoas.</em>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={120}>
                <p>
                  Formação, método e experiências para líderes que querem
                  conduzir equipes com mais clareza, coragem e propósito.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={180}>
                <div className="button-row">
                  <Cta href="#solucoes">Conheça o trabalho</Cta>
                  <Cta href="/contato" ghost>
                    Fale com a Jamilla
                  </Cta>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={230}>
                <div
                  className="hero-notes"
                  aria-label="Diferenciais de Jamilla Salviano"
                >
                  <span>
                    <strong>20+</strong>
                    <small>Anos de experiência</small>
                  </span>
                  <span>
                    <strong>Método</strong>
                    <small>Para a vida real</small>
                  </span>
                  <span>
                    <strong>Pessoas</strong>
                    <small>No centro da gestão</small>
                  </span>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal
              className="home-hero__visual"
              delay={120}
              variant="image"
            >
              <span
                className="hero-orbit hero-orbit--large"
                aria-hidden="true"
              />
              <span
                className="hero-orbit hero-orbit--small"
                aria-hidden="true"
              />
              <figure className="home-hero__portrait">
                <Image
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 48vw"
                  src="/images/jamilla-navy-smile.webp"
                  alt="Jamilla Salviano"
                />
              </figure>
              <blockquote>“Liderança também é cuidado.”</blockquote>
              <span className="hero-vertical-note" aria-hidden="true">
                Jamilla Salviano — Liderança Escolar
              </span>
            </ScrollReveal>
          </div>
        </Hero>

        <section className="section surface-cream manifesto-section">
          <div className="wrap split split--manifesto">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Manifesto"
                title={
                  <>
                    Uma escola nunca vai além da <em>liderança</em> que a
                    conduz.
                  </>
                }
              />
            </ScrollReveal>
            <ScrollReveal className="prose prose--rule" delay={100}>
              <p>
                Liderar uma escola é organizar o presente sem perder de vista as
                pessoas, a cultura e o futuro. É dar nome aos desafios e criar
                condições para que cada profissional saiba como contribuir.
              </p>
              <p>
                Quando a liderança encontra clareza e método, a instituição
                deixa de reagir a urgências e passa a construir transformações
                sustentáveis.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="section home-about surface-paper">
          <div className="wrap home-about__grid">
            <ScrollReveal className="home-about__copy" variant="left">
              <SectionHeader
                eyebrow="Sobre Jamilla"
                title="Mais do que falar sobre liderança, Jamilla vive os desafios de quem lidera."
              />
              <p>
                Seu trabalho nasce da experiência com educação, gestão e
                desenvolvimento humano. Uma abordagem que une profundidade,
                linguagem direta e ferramentas que cabem na vida real.
              </p>
              <div className="stats">
                <div>
                  <strong>20+</strong>
                  <span>Anos de experiência</span>
                </div>
                <div>
                  <strong>Método</strong>
                  <span>Aplicável à rotina</span>
                </div>
                <div>
                  <strong>Pessoas</strong>
                  <span>No centro da gestão</span>
                </div>
              </div>
              <Cta href="/sobre" dark>
                Conheça a trajetória
              </Cta>
            </ScrollReveal>
            <ScrollReveal
              className="home-about__photo"
              delay={80}
              variant="image"
            >
              <figure className="editorial-photo">
                <Image
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                  src="/images/jamilla-cream.webp"
                  alt="Jamilla Salviano em ambiente profissional"
                />
              </figure>
            </ScrollReveal>
            <ScrollReveal className="home-about__quote" delay={160}>
              <blockquote>
                “Liderar é criar as condições para que pessoas boas façam ainda
                melhor.”
                <small>Jamilla Salviano</small>
              </blockquote>
            </ScrollReveal>
          </div>
        </section>

        <section className="section problem-section">
          <div className="wrap">
            <div className="split split--problem">
              <ScrollReveal>
                <SectionHeader
                  eyebrow="O ponto de virada"
                  title="Talvez o problema não esteja na sua equipe."
                />
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="statement">
                  Talvez esteja na forma como ela está sendo <em>conduzida.</em>
                </p>
              </ScrollReveal>
            </div>
            <div className="problem-grid">
              {painPoints.map((point, index) => (
                <ScrollReveal delay={index * 42} key={point}>
                  <div className="problem-card">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <p>{point}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section method-section surface-cream">
          <div className="wrap">
            <ScrollReveal className="split split--method">
              <SectionHeader
                eyebrow="O método"
                title={
                  <>
                    Liderança não é improviso.
                    <br />
                    <em>É método.</em>
                  </>
                }
              />
              <p className="prose">
                Um percurso que transforma intenção em direção e direção em
                movimento coletivo.
              </p>
            </ScrollReveal>
            <div className="method-grid">
              {method.map((item, index) => (
                <ScrollReveal delay={index * 58} key={item}>
                  <div>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{item}</strong>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="solucoes" className="section solutions-section">
          <div className="wrap">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Soluções"
                title={
                  <>
                    Um trabalho. Diferentes caminhos para{' '}
                    <em>transformar lideranças.</em>
                  </>
                }
              />
            </ScrollReveal>
            <div className="solution-grid">
              {solutions.map((solution, index) => (
                <ScrollReveal delay={index * 75} key={solution.title}>
                  <EditorialCard
                    className={`solution-card solution-card--${solution.tone}`}
                    description={solution.text}
                    href={solution.href}
                    icon={solution.icon}
                    index={solution.index}
                    title={solution.title}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section feature-section">
          <div className="wrap feature-grid">
            <ScrollReveal className="feature-section__copy" variant="left">
              <SectionHeader
                eyebrow="Formação"
                title={
                  <>
                    Pare de liderar no <em>achismo.</em>
                  </>
                }
              />
              <p>
                Aprenda a diagnosticar padrões, conduzir conversas e transformar
                problemas em um plano de ação.
              </p>
              <div className="tag-row" aria-label="Temas da formação">
                {[
                  'Comunicação',
                  'Delegação',
                  'Conflitos',
                  'Produtividade',
                  'Decisão',
                ].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <Cta href="/trilha-da-lideranca">Explorar a Trilha</Cta>
            </ScrollReveal>
            <ScrollReveal
              className="feature-section__visual"
              delay={80}
              variant="image"
            >
              <figure className="feature-photo">
                <Image
                  fill
                  sizes="(max-width: 900px) 100vw, 34vw"
                  src="/images/jamilla-mentora.webp"
                  alt="Jamilla Salviano na Trilha da Liderança"
                />
              </figure>
            </ScrollReveal>
          </div>
        </section>

        <section className="section reset-preview-section">
          <div className="wrap">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Experiência RESET"
                title={
                  <>
                    Antes de transformar sua equipe,{' '}
                    <em>transforme a maneira como você lidera.</em>
                  </>
                }
              />
            </ScrollReveal>
            <div className="format-grid format-grid--compact">
              {[
                'Mentoria individual',
                'Líder + equipe',
                'Palestra ou treinamento',
              ].map((format, index) => {
                const icons = [UsersRound, Target, Lightbulb];
                const Icon = icons[index];
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
            <ScrollReveal delay={190}>
              <Cta href="/reset">Conheça o RESET</Cta>
            </ScrollReveal>
          </div>
        </section>

        <section className="section talks-section surface-paper">
          <div className="wrap split split--talks">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Palestras"
                title={
                  <>
                    Algumas conversas mudam <em>equipes inteiras.</em>
                  </>
                }
              />
              <Cta href="/palestras" dark>
                Convidar Jamilla
              </Cta>
            </ScrollReveal>
            <div className="talk-topics">
              {[
                'Gestores escolares',
                'Coordenadores',
                'Diretores',
                'Equipes pedagógicas',
                'Instituições de ensino',
              ].map((topic, index) => (
                <ScrollReveal delay={index * 55} key={topic}>
                  <div>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {topic}
                    <ArrowUpRight aria-hidden="true" size={17} />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section ata-section surface-cream">
          <div className="wrap ata-grid">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Mini curso"
                title={
                  <>
                    Decisões importantes merecem <em>registros claros.</em>
                  </>
                }
              />
              <p>
                Da anotação solta a um documento que organiza decisões,
                compromissos e responsabilidades.
              </p>
              <Cta href="/ata-inteligente" dark>
                Conheça o ATA Inteligente
              </Cta>
            </ScrollReveal>
            <ScrollReveal className="before-after" delay={90} variant="right">
              <div>
                <small>Antes</small>
                <ul>
                  <li>Anotações confusas</li>
                  <li>Informações perdidas</li>
                  <li>Decisões sem responsáveis</li>
                </ul>
              </div>
              <div>
                <small>Depois</small>
                <ul>
                  <li>Estrutura clara</li>
                  <li>Registro profissional</li>
                  <li>Responsabilidades definidas</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="section impact-section">
          <div className="wrap impact-grid">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Impacto"
                title={
                  <>
                    Histórias reais. <em>Transformações possíveis.</em>
                  </>
                }
              />
            </ScrollReveal>
            <ScrollReveal className="collage" delay={90} variant="image">
              <span className="collage__image">
                <Image
                  fill
                  sizes="(max-width: 900px) 30vw, 15vw"
                  src="/images/jamilla-red.webp"
                  alt="Jamilla em traje vermelho"
                />
              </span>
              <span className="collage__image">
                <Image
                  fill
                  sizes="(max-width: 900px) 35vw, 19vw"
                  src="/images/jamilla-editorial-bw.webp"
                  alt="Retrato editorial de Jamilla"
                />
              </span>
              <span className="collage__image">
                <Image
                  fill
                  sizes="(max-width: 900px) 30vw, 15vw"
                  src="/images/jamilla-diagnostico.webp"
                  alt="Jamilla em ambiente de trabalho"
                />
              </span>
            </ScrollReveal>
          </div>
        </section>

        <FinalCta
          action="Conversar com Jamilla"
          description="Conte o momento da sua equipe, escola ou instituição."
          imageAlt="Jamilla em ambiente de liderança"
          imageSrc="/images/jamilla-diagnostico.webp"
          eyebrow="Próximo passo"
          title="A próxima transformação pode começar por uma conversa."
          variant="navy"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
