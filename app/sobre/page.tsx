import {
  Header,
  Footer,
  WhatsAppButton,
  Eyebrow,
  Cta,
} from '@/components/site';
export const metadata = {
  title: 'Sobre Jamilla Salviano | Liderança e Educação',
};
export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="product-hero navy">
          <div className="wrap product-hero-grid">
            <div>
              <Eyebrow>Sobre Jamilla</Eyebrow>
              <h1>
                Ela não fala apenas sobre <em>liderança.</em>
              </h1>
              <p>
                Jamilla vive os desafios de quem precisa organizar, decidir,
                comunicar e conduzir pessoas todos os dias.
              </p>
              <Cta href="/contato">Converse com Jamilla</Cta>
            </div>
            <div className="photo-window product-photo">
              <img src="/images/jamilla-cream.webp" alt="Jamilla Salviano" />
            </div>
          </div>
        </section>
        <section className="section cream-section">
          <div className="wrap split">
            <div>
              <Eyebrow>Trajetória</Eyebrow>
              <h2>
                Experiência que virou método. Método que transforma equipes.
              </h2>
            </div>
            <div className="prose">
              <p>
                A atuação de Jamilla conecta educação, gestão e desenvolvimento
                humano. Sua abordagem parte do contexto real para criar mudanças
                possíveis, consistentes e sustentáveis.
              </p>
              <p>
                Os marcos detalhados de formação e carreira serão incluídos
                nesta página após a validação das informações oficiais.
              </p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <Eyebrow>Princípios</Eyebrow>
            <h2>
              Uma liderança que começa na forma de <em>ver pessoas.</em>
            </h2>
            <div className="content-grid">
              {[
                'Clareza antes da pressa',
                'Conversa antes do ruído',
                'Responsabilidade sem autoritarismo',
                'Método sem perder humanidade',
                'Cultura construída no cotidiano',
                'Transformação que se sustenta',
              ].map((x, i) => (
                <div key={x}>
                  <small>0{i + 1}</small>
                  <h3>{x}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="wrap">
            <Eyebrow>Trabalho</Eyebrow>
            <h2>Conheça os caminhos para transformar sua liderança.</h2>
            <Cta href="/#solucoes">Ver soluções</Cta>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
