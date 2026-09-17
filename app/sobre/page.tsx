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

export const metadata = {
  title: 'Sobre Jamilla Salviano | Liderança e Educação',
};

const principles = [
  ['Clareza antes da pressa', 'eye'],
  ['Conversa antes do ruído', 'message'],
  ['Responsabilidade sem autoritarismo', 'users'],
  ['Método sem perder humanidade', 'heart'],
  ['Cultura construída no cotidiano', 'chart'],
  ['Transformação que se sustenta', 'sprout'],
] as const;

export default function Page() {
  return (
    <>
      <Header />
      <main className="about-page">
        <Hero className="about-hero">
          <div className="about-hero__texture" aria-hidden="true" />
          <div className="wrap about-hero__grid">
            <ScrollReveal className="about-hero__copy">
              <Eyebrow>Sobre Jamilla</Eyebrow>
              <h1>
                Ela não fala apenas sobre <em>liderança.</em>
              </h1>
              <p>
                Jamilla vive os desafios de quem precisa organizar, decidir,
                comunicar e conduzir pessoas todos os dias.
              </p>
              <Cta href="/contato">Converse com Jamilla</Cta>
            </ScrollReveal>
            <ScrollReveal className="about-hero__visual" delay={120} variant="scale">
              <span className="about-hero__orbit" aria-hidden="true" />
              <figure className="about-hero__portrait">
                <Image
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 42vw"
                  src="/images/jamilla-cream.webp"
                  alt="Jamilla Salviano"
                />
              </figure>
              <span className="about-hero__note" aria-hidden="true">
                Pessoas · método · resultados
              </span>
            </ScrollReveal>
          </div>
        </Hero>

        <section className="section surface-cream trajectory-section">
          <div className="wrap split split--trajectory">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Trajetória"
                title="Experiência que virou método. Método que transforma equipes."
              />
            </ScrollReveal>
            <ScrollReveal className="prose prose--rule" delay={100}>
              <p>
                A atuação de Jamilla conecta educação, gestão e desenvolvimento
                humano. Sua abordagem parte do contexto real para criar mudanças
                possíveis, consistentes e sustentáveis.
              </p>
              <p>
                Os marcos detalhados de formação e carreira serão incluídos nesta
                página após a validação das informações oficiais.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="section principles-section surface-paper">
          <div className="wrap">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Princípios"
                title={
                  <>
                    Uma liderança que começa na forma de <em>ver pessoas.</em>
                  </>
                }
              />
            </ScrollReveal>
            <div className="content-grid">
              {principles.map(([principle, icon], index) => (
                <ScrollReveal delay={index * 60} key={principle}>
                  <EditorialCard
                    className="content-card"
                    icon={icon}
                    index={String(index + 1).padStart(2, '0')}
                    title={principle}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <FinalCta
          action="Ver soluções"
          href="/#solucoes"
          eyebrow="Trabalho"
          title="Conheça os caminhos para transformar sua liderança."
          variant="wine"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
