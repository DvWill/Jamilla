import type { Metadata } from 'next';
import { Eyebrow, Footer, Header, WhatsAppButton } from '@/components/site';

export const metadata: Metadata = {
  title: 'Contato | Jamilla Salviano',
};

const interests = [
  'Trilha da Liderança',
  'RESET',
  'Palestra',
  'ATA Inteligente',
  'Outro',
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="contact-page">
        <section className="section">
          <div className="wrap contact-grid">
            <div>
              <Eyebrow>Contato</Eyebrow>
              <h1>
                Uma conversa primeiro.
                <br />
                <em>O formato certo depois.</em>
              </h1>
              <p>
                Conte o momento da sua equipe, escola ou instituição. A partir
                dele, identificamos a experiência que faz mais sentido.
              </p>
              <div className="contact-note">
                <small>Canal direto</small>
                <strong>WhatsApp</strong>
                <span>Atendimento mediante mensagem.</span>
              </div>
            </div>

            <form>
              <label>
                Nome
                <input name="nome" placeholder="Seu nome" />
              </label>
              <div className="form-row">
                <label>
                  WhatsApp
                  <input name="whatsapp" placeholder="(00) 00000-0000" />
                </label>
                <label>
                  E-mail
                  <input
                    name="email"
                    type="email"
                    placeholder="voce@email.com"
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Instituição
                  <input name="instituicao" />
                </label>
                <label>
                  Cargo
                  <input name="cargo" />
                </label>
              </div>
              <fieldset>
                <legend>Tenho interesse em</legend>
                {interests.map((interest) => (
                  <label className="check" key={interest}>
                    <input name="interesse" type="checkbox" value={interest} />
                    {interest}
                  </label>
                ))}
              </fieldset>
              <label>
                Mensagem
                <textarea
                  name="mensagem"
                  rows={5}
                  placeholder="Conte brevemente o seu momento."
                />
              </label>
              <button type="submit">Enviar mensagem →</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
