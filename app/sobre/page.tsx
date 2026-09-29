import type { Metadata } from 'next';
import Image from 'next/image';
import {
  BookOpenCheck,
  BriefcaseBusiness,
  Compass,
  GraduationCap,
  Mic2,
  School,
  UsersRound,
} from 'lucide-react';
import {
  Cta,
  Eyebrow,
  FinalCta,
  Footer,
  Header,
  Hero,
  SectionHeader,
  WhatsAppButton,
} from '@/components/site';
import { ScrollReveal } from '@/components/scroll-reveal';

export const metadata: Metadata = {
  title: 'Sobre Jamilla Salviano | Liderança e Educação',
  description:
    'Conheça a trajetória de Jamilla Salviano como professora, gestora, consultora, mentora, palestrante e autora na educação.',
  alternates: { canonical: '/sobre' },
  openGraph: {
    title: 'Quem é Jamilla Salviano',
    description:
      'Experiência na escola transformada em método, formação e liderança.',
    type: 'profile',
  },
};

const formation = [
  'Gestão Escolar',
  'Supervisão Escolar',
  'Docência do Ensino Superior',
  'Orientação Escolar',
];

const career = [
  { role: 'Professora', description: 'A sala de aula como origem de uma trajetória conectada à realidade da educação.' },
  { role: 'Coordenadora', description: 'Acompanhamento de pessoas, processos pedagógicos e desafios do cotidiano escolar.' },
  { role: 'Supervisora', description: 'Visão ampliada sobre trabalho coletivo, alinhamento e desenvolvimento profissional.' },
  { role: 'Diretora', description: 'Experiência na condução de uma escola pública de grande porte.' },
];

const currentWork = [
  { icon: BriefcaseBusiness, title: 'Assessoria e consultoria', description: 'Leitura de contexto e orientação para instituições educacionais.' },
  { icon: UsersRound, title: 'Mentoria de gestores', description: 'Desenvolvimento de lideranças que precisam conduzir pessoas, decisões e conflitos.' },
  { icon: Mic2, title: 'Palestras', description: 'Conversas sobre liderança escolar que conectam reflexão e realidade prática.' },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="about-page">
        <Hero className="about-hero">
          <div className="about-hero__texture" aria-hidden="true" />
          <div className="wrap about-hero__grid">
            <ScrollReveal className="about-hero__copy">
              <Eyebrow>Quem é Jamilla Salviano</Eyebrow>
              <h1>
                Experiência na escola.<br />
                <em>Direção para quem lidera.</em>
              </h1>
              <p>
                Professora, gestora, consultora, mentora e palestrante. Uma
                trajetória construída dentro da educação e transformada em
                caminhos práticos para outras lideranças.
              </p>
              <div className="button-row">
                <Cta href="/links">Conheça os projetos</Cta>
                <Cta href="/contato" ghost>Converse com Jamilla</Cta>
              </div>
            </ScrollReveal>
            <ScrollReveal className="about-hero__visual" delay={120} variant="image">
              <span className="about-hero__orbit" aria-hidden="true" />
              <figure className="about-hero__portrait">
                <Image fill priority sizes="(max-width: 900px) 100vw, 42vw" src="/images/jamilla-cream.webp" alt="Retrato profissional de Jamilla Salviano" />
              </figure>
              <span className="about-hero__note" aria-hidden="true">Educação · liderança · gestão</span>
            </ScrollReveal>
          </div>
        </Hero>

        <section className="section surface-cream about-story">
          <div className="wrap split split--trajectory">
            <ScrollReveal>
              <SectionHeader eyebrow="Trajetória" title="Da prática escolar nasceu uma forma mais humana e consciente de liderar." />
            </ScrollReveal>
            <ScrollReveal className="prose prose--rule" delay={100}>
              <p>Jamilla Salviano construiu sua experiência profissional vivendo diferentes perspectivas da escola: ensinando, coordenando, supervisionando e dirigindo uma escola pública de grande porte.</p>
              <p>Essa trajetória sustenta uma atuação que não separa gestão de pessoas. Cada formação, mentoria ou palestra parte de desafios reconhecíveis para criar mudanças possíveis no cotidiano.</p>
            </ScrollReveal>
          </div>
        </section>

        <section className="section about-formation surface-paper" aria-labelledby="formacao-title">
          <div className="wrap about-formation__grid">
            <ScrollReveal className="about-formation__visual" variant="image">
              <Image fill sizes="(max-width: 800px) 100vw, 38vw" src="/images/jamilla-mentora.webp" alt="Jamilla Salviano em retrato profissional" />
            </ScrollReveal>
            <div>
              <ScrollReveal>
                <Eyebrow>Formação</Eyebrow>
                <h2 id="formacao-title">Especialização que amplia o olhar sobre a escola.</h2>
                <p className="about-section-lead">Professora especialista em campos que conectam gestão, aprendizagem, acompanhamento e formação de profissionais.</p>
              </ScrollReveal>
              <div className="about-badges" aria-label="Especializações">
                {formation.map((item, index) => (
                  <ScrollReveal delay={index * 55} key={item}>
                    <span><GraduationCap size={18} aria-hidden="true" />{item}</span>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section about-career" aria-labelledby="experiencia-title">
          <div className="wrap">
            <ScrollReveal>
              <SectionHeader eyebrow="Experiência" title={<><span id="experiencia-title">Quatro lugares de atuação.</span> <em>Uma visão integrada da educação.</em></>} />
            </ScrollReveal>
            <div className="about-career__grid">
              {career.map((item, index) => (
                <ScrollReveal delay={index * 70} key={item.role}>
                  <article>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <School size={23} aria-hidden="true" />
                    <h3>{item.role}</h3>
                    <p>{item.description}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-current surface-cream" aria-labelledby="atuacao-title">
          <div className="wrap">
            <ScrollReveal>
              <SectionHeader eyebrow="Atuação atual" title={<><span id="atuacao-title">Conhecimento que encontra</span> <em>pessoas e instituições.</em></>} />
            </ScrollReveal>
            <div className="about-current__grid">
              {currentWork.map(({ icon: Icon, title, description }, index) => (
                <ScrollReveal delay={index * 80} key={title}>
                  <article>
                    <Icon size={28} strokeWidth={1.4} aria-hidden="true" />
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-legacy surface-paper" aria-label="Livro e Método GPS">
          <div className="wrap about-legacy__grid">
            <ScrollReveal>
              <article>
                <BookOpenCheck size={31} strokeWidth={1.3} aria-hidden="true" />
                <Eyebrow>Autora</Eyebrow>
                <h2>O Inimigo Oculto da Gestão Escolar</h2>
                <p>Um livro que coloca em perspectiva comportamentos e padrões silenciosos capazes de comprometer relações, equipes e resultados.</p>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={90}>
              <article>
                <Compass size={31} strokeWidth={1.3} aria-hidden="true" />
                <Eyebrow>Criadora do método</Eyebrow>
                <h2>GPS da Liderança Escolar</h2>
                <p>Uma proposta para ajudar gestores a construir mais clareza, posicionamento, estratégia e consistência na condução da escola.</p>
                <Cta href="/gps-5-0" dark>Conhecer o Método GPS</Cta>
              </article>
            </ScrollReveal>
          </div>
        </section>

        <FinalCta action="Conhecer projetos e formações" href="/links" eyebrow="Próximo passo" title="Encontre o caminho que conversa com o seu momento." description="Conheça as formações, palestras e iniciativas de Jamilla Salviano." variant="wine" />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
