import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import {
  Header,
  Footer,
  WhatsAppButton,
  Eyebrow,
  Cta,
} from '@/components/site';
const solutions = [
  {
    n: '01',
    title: 'Trilha da Liderança',
    text: 'Formação prática para desenvolver sua liderança no dia a dia.',
    href: '/trilha-da-lideranca',
    tone: 'wine',
  },
  {
    n: '02',
    title: 'RESET',
    text: 'Mentoria para reorganizar a forma de liderar pessoas e equipes.',
    href: '/reset',
    tone: 'navy',
  },
  {
    n: '03',
    title: 'Palestras',
    text: 'Conversas que provocam reflexão, movimento e mudança nas instituições.',
    href: '/palestras',
    tone: 'red',
  },
  {
    n: '04',
    title: 'ATA Inteligente',
    text: 'Registros claros para decisões que não podem se perder.',
    href: '/ata-inteligente',
    tone: 'cream',
  },
];
export default function Home() {
  return (
    <>
      <Header />
      <main className="home-ref">
        <section className="hero navy-section">
          <div className="hero-grid wrap">
            <div className="hero-copy">
              <Eyebrow>Liderança • Educação • Gestão</Eyebrow>
              <h1>
                Transformar uma escola começa por quem <em>lidera pessoas.</em>
              </h1>
              <p>
                Formação, método e experiências para líderes que querem conduzir
                equipes com mais clareza, coragem e propósito.
              </p>
              <div className="button-row">
                <Cta href="#solucoes">Conheça o trabalho</Cta>
                <Cta href="/contato" ghost>
                  Fale com a Jamilla
                </Cta>
              </div>
              <div className="hero-notes">
                <span>
                  <strong>20+</strong> anos de experiência
                </span>
                <span>
                  <strong>Método</strong> para a vida real
                </span>
                <span>
                  <strong>Pessoas</strong> no centro da gestão
                </span>
              </div>
            </div>
            <div className="hero-art">
              <div className="hero-rings" aria-hidden="true" />
              <div className="photo-window hero-photo">
                <img
                  src="/images/jamilla-navy-smile.webp"
                  alt="Jamilla Salviano"
                />
              </div>
              <blockquote>“Liderança também é cuidado.”</blockquote>
              <span className="vertical-type">
                JAMILLA SALVIANO — LIDERANÇA ESCOLAR
              </span>
              <b>01</b>
            </div>
          </div>
        </section>
        <section className="manifesto cream-section section">
          <div className="wrap split">
            <div>
              <Eyebrow>Manifesto</Eyebrow>
              <h2>
                Uma escola nunca vai além da <em>liderança</em> que a conduz.
              </h2>
            </div>
            <div className="prose">
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
            </div>
          </div>
        </section>
        <section className="section about-home">
          <div className="wrap editorial-grid">
            <div className="photo-frame">
              <img
                src="/images/jamilla-cream.webp"
                alt="Jamilla Salviano em ambiente profissional"
              />
            </div>
            <div>
              <Eyebrow>Sobre Jamilla</Eyebrow>
              <h2>
                Mais do que falar sobre liderança, Jamilla vive os desafios de
                quem lidera.
              </h2>
              <p>
                Seu trabalho nasce da experiência com educação, gestão e
                desenvolvimento humano. Uma abordagem que une profundidade,
                linguagem direta e ferramentas que cabem na vida real.
              </p>
              <div className="stats">
                <div>
                  <strong>20+</strong>
                  <span>anos de experiência</span>
                </div>
                <div>
                  <strong>Método</strong>
                  <span>aplicável à rotina</span>
                </div>
                <div>
                  <strong>Pessoas</strong>
                  <span>no centro da gestão</span>
                </div>
              </div>
              <Cta href="/sobre" dark>
                Conheça a trajetória
              </Cta>
            </div>
            <blockquote className="about-quote">
              “Liderar é criar as condições para que pessoas boas façam ainda
              melhor.”
              <small>Jamilla Salviano</small>
            </blockquote>
          </div>
        </section>
        <section className="section problem navy-section">
          <div className="wrap">
            <div className="split">
              <div>
                <Eyebrow>O ponto de virada</Eyebrow>
                <h2>Talvez o problema não esteja na sua equipe.</h2>
              </div>
              <p className="statement">
                Talvez esteja na forma como ela está sendo <em>conduzida.</em>
              </p>
            </div>
            <div className="problem-list">
              {[
                'Equipe desmotivada',
                'Retrabalho constante',
                'Conflitos evitados',
                'Comunicação falha',
                'Reuniões improdutivas',
                'Dificuldade em delegar',
                'Decisões improvisadas',
                'Falta de clareza',
              ].map((x, i) => (
                <div key={x}>
                  <small>{String(i + 1).padStart(2, '0')}</small>
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section method cream-section">
          <div className="wrap">
            <Eyebrow>O método</Eyebrow>
            <div className="split">
              <h2>
                Liderança não é improviso.
                <br />
                <em>É método.</em>
              </h2>
              <p>
                Um percurso que transforma intenção em direção e direção em
                movimento coletivo.
              </p>
            </div>
            <div className="method-row">
              {[
                'Clareza',
                'Método',
                'Comunicação',
                'Responsabilidade',
                'Gestão',
                'Cultura',
              ].map((x, i) => (
                <div key={x}>
                  <small>0{i + 1}</small>
                  <strong>{x}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="solucoes" className="section solutions navy-section">
          <div className="wrap">
            <Eyebrow>Soluções</Eyebrow>
            <h2>
              Um trabalho. Diferentes caminhos para{' '}
              <em>transformar lideranças.</em>
            </h2>
            <div className="solution-grid">
              {solutions.map((s) => (
                <Link
                  className={`solution ${s.tone}`}
                  href={s.href}
                  key={s.title}
                >
                  <small>{s.n}</small>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span>
                    Conhecer <ArrowUpRight size={18} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="feature wine-section">
          <div className="wrap feature-grid">
            <div>
              <Eyebrow>Formação</Eyebrow>
              <h2>
                Pare de liderar no <em>achismo.</em>
              </h2>
              <p>
                Aprenda a diagnosticar padrões, conduzir conversas e transformar
                problemas em um plano de ação.
              </p>
              <div className="tag-row">
                {[
                  'Comunicação',
                  'Delegação',
                  'Conflitos',
                  'Produtividade',
                  'Decisão',
                ].map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
              <Cta href="/trilha-da-lideranca">Explorar a Trilha</Cta>
            </div>
            <div className="photo-window feature-photo">
              <img
                src="/images/jamilla-mentora.webp"
                alt="Jamilla Salviano na Trilha da Liderança"
              />
            </div>
          </div>
        </section>
        <section className="section reset-preview navy-section">
          <div className="wrap">
            <Eyebrow>Experiência RESET</Eyebrow>
            <h2>
              Antes de transformar sua equipe,{' '}
              <em>transforme a maneira como você lidera.</em>
            </h2>
            <div className="reset-formats">
              <span>Mentoria individual</span>
              <span>Líder + equipe</span>
              <span>Palestra ou treinamento</span>
            </div>
            <Cta href="/reset">Conheça o RESET</Cta>
          </div>
        </section>
        <section className="section talks cream-section">
          <div className="wrap split">
            <div>
              <Eyebrow>Palestras</Eyebrow>
              <h2>
                Algumas conversas mudam <em>equipes inteiras.</em>
              </h2>
              <Cta href="/palestras" dark>
                Convidar Jamilla
              </Cta>
            </div>
            <div className="talk-topics">
              {[
                'Gestores escolares',
                'Coordenadores',
                'Diretores',
                'Equipes pedagógicas',
                'Instituições de ensino',
              ].map((x, i) => (
                <div key={x}>
                  <small>0{i + 1}</small>
                  {x}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section ata">
          <div className="wrap ata-grid">
            <div>
              <Eyebrow>Mini curso</Eyebrow>
              <h2>
                Decisões importantes merecem <em>registros claros.</em>
              </h2>
              <p>
                Da anotação solta a um documento que organiza decisões,
                compromissos e responsabilidades.
              </p>
              <Cta href="/ata-inteligente" dark>
                Conheça o ATA Inteligente
              </Cta>
            </div>
            <div className="before-after">
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
            </div>
          </div>
        </section>
        <section className="section authority impact-band">
          <div className="wrap authority-grid">
            <div className="authority-copy">
              <Eyebrow>Impacto</Eyebrow>
              <h2>
                Histórias reais. <em>Transformações possíveis.</em>
              </h2>
            </div>
            <div className="collage">
              <img
                src="/images/jamilla-red.webp"
                alt="Jamilla em traje vermelho"
              />
              <img
                src="/images/jamilla-editorial-bw.webp"
                alt="Retrato editorial de Jamilla"
              />
              <img
                src="/images/jamilla-diagnostico.webp"
                alt="Jamilla em ambiente de trabalho"
              />
            </div>
          </div>
        </section>
        <section className="final-cta home-final">
          <div className="final-photo">
            <img
              src="/images/jamilla-diagnostico.webp"
              alt="Jamilla em ambiente de liderança"
            />
          </div>
          <div className="wrap final-copy">
            <Eyebrow>Próximo passo</Eyebrow>
            <h2>A próxima transformação pode começar por uma conversa.</h2>
            <p>Conte o momento da sua equipe, escola ou instituição.</p>
            <Cta href="/contato">Conversar com Jamilla</Cta>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
