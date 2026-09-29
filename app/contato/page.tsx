import type { Metadata } from 'next';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Eyebrow, Footer, Header, WhatsAppButton } from '@/components/site';
import { ContactForm } from './contact-form';
import styles from './page.module.css';
import { whatsappUrl } from './whatsapp';

export const metadata: Metadata = {
  title: 'Contato | Jamilla Salviano',
  description:
    'Converse com a equipe de Jamilla Salviano sobre formações, palestras, mentorias e soluções para sua instituição.',
  alternates: { canonical: '/contato' },
  openGraph: {
    title: 'Contato | Jamilla Salviano',
    description:
      'Conte o momento da sua equipe, escola ou instituição e encontre o caminho mais adequado.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.section}>
          <span className={styles.arcLeft} aria-hidden="true" />
          <span className={styles.arcRight} aria-hidden="true" />
          <span className={styles.decorLine} aria-hidden="true" />

          <div className={styles.layout}>
            <div className={styles.intro}>
              <Eyebrow>Contato</Eyebrow>
              <h1>
                <span>Uma conversa primeiro.</span>
                <em>O formato certo depois.</em>
              </h1>
              <p className={styles.lead}>
                Conte o momento da sua equipe, escola ou instituição. A partir
                dele, identificamos a experiência que faz mais sentido.
              </p>

              <div className={styles.contactRule} aria-hidden="true" />

              <div className={styles.directContact}>
                <span className={styles.contactIcon} aria-hidden="true">
                  <MessageCircle size={25} strokeWidth={1.55} />
                </span>
                <div className={styles.contactCopy}>
                  <small>Canal direto</small>
                  <strong>WhatsApp</strong>
                  <span>Atendimento mediante mensagem.</span>
                </div>
                <a
                  className={styles.whatsappCta}
                  href={whatsappUrl(
                    'Olá! Vim pelo site e gostaria de conversar com a equipe da Jamilla Salviano.',
                  )}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Conversar agora</span>
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
