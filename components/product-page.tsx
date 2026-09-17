import { Header, Footer, WhatsAppButton, Eyebrow, Cta } from './site';
import { CircleCheck } from 'lucide-react';
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
export function ProductPage(p: Props) {
  return (
    <>
      <Header />
      <main className={`product-page ${p.theme}`}>
        <section className="product-hero">
          <div className="wrap product-hero-grid">
            <div>
              <Eyebrow>{p.eyebrow}</Eyebrow>
              <h1>
                {p.title}
                <em>{p.accent}</em>
              </h1>
              <p>{p.intro}</p>
              <Cta href={p.checkoutHref ?? '/contato'}>
                {p.checkoutHref ? 'Quero me inscrever' : 'Quero saber mais'}
              </Cta>
            </div>
            <div className="photo-window product-photo">
              <img src={p.image} alt="Jamilla Salviano" />
            </div>
          </div>
        </section>
        <section className="section cream-section">
          <div className="wrap split">
            <div>
              <Eyebrow>O desafio</Eyebrow>
              <h2>{p.problem}</h2>
            </div>
            <p className="prose">
              Liderança consistente nasce quando intenção encontra método. Esta
              experiência foi desenhada para traduzir desafios reais em
              conversas, decisões e práticas possíveis.
            </p>
          </div>
        </section>
        <section className="section product-content">
          <div className="wrap">
            <Eyebrow>O que você encontra</Eyebrow>
            <h2>
              Clareza para agir.
              <br />
              <em>Método para sustentar.</em>
            </h2>
            <div className="content-grid">
              {p.items.map((x, i) => (
                <div key={x}>
                  <small>0{i + 1}</small>
                  <h3>{x}</h3>
                  <p>
                    Conceitos objetivos, provocações e aplicação conectada ao
                    cotidiano da liderança.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section navy-section">
          <div className="wrap">
            <Eyebrow>Formatos</Eyebrow>
            <h2>Uma experiência que respeita o seu contexto.</h2>
            <div className="reset-formats">
              {p.formats.map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>
        </section>
        <section className="section cream-section">
          <div className="wrap split">
            <div>
              <Eyebrow>Com Jamilla Salviano</Eyebrow>
              <h2>
                Experiência prática em educação, liderança e gestão de pessoas.
              </h2>
            </div>
            <div>
              <p className="prose">
                Uma condução humana, direta e comprometida com transformações
                que continuam depois do encontro.
              </p>
              <Cta href="/sobre" dark>
                Conheça Jamilla
              </Cta>
            </div>
          </div>
        </section>
        {p.offer && (
          <section className="offer-section navy-section">
            <div className="wrap offer-box">
              {p.offer.meta && (
                <div className="offer-meta">
                  {p.offer.meta.map((item) => (
                    <div key={item.label}>
                      <small>{item.label}</small>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>
              )}
              <div className="offer-main">
                {p.offer.bullets && (
                  <ul>
                    {p.offer.bullets.map((item) => (
                      <li key={item}>
                        <CircleCheck size={20} /> {item}
                      </li>
                    ))}
                  </ul>
                )}
                <p className="offer-price">{p.offer.price}</p>
                {p.offer.note && <p className="offer-note">{p.offer.note}</p>}
                <a className="offer-button" href={p.checkoutHref}>
                  {p.offer.button}
                </a>
                <small className="offer-safe">
                  Pagamento seguro pela plataforma Kiwify.
                </small>
              </div>
            </div>
          </section>
        )}
        <section className="final-cta">
          <div className="wrap">
            <Eyebrow>Vamos conversar</Eyebrow>
            <h2>{p.cta}</h2>
            <Cta href={p.checkoutHref ?? '/contato'}>
              {p.checkoutHref ? 'Garantir minha vaga' : 'Falar com Jamilla'}
            </Cta>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
