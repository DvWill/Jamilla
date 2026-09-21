'use client';

import { type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './page.module.css';
import { WHATSAPP_URL } from './whatsapp';

const interests = [
  'Trilha da Liderança',
  'RESET',
  'Palestra',
  'ATA Inteligente',
  'Outro',
];

function fieldValue(formData: FormData, field: string) {
  const value = formData.get(field);
  return typeof value === 'string' && value.trim()
    ? value.trim()
    : 'Não informado';
}

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const selectedInterests = formData
      .getAll('interesse')
      .filter((interest): interest is string => typeof interest === 'string')
      .join(', ');
    const message = [
      'Olá, Jamilla! Gostaria de conversar.',
      '',
      `Nome: ${fieldValue(formData, 'nome')}`,
      `E-mail: ${fieldValue(formData, 'email')}`,
      `WhatsApp: ${fieldValue(formData, 'whatsapp')}`,
      `Instituição: ${fieldValue(formData, 'instituicao')}`,
      `Cargo: ${fieldValue(formData, 'cargo')}`,
      `Cidade: ${fieldValue(formData, 'cidade')}`,
      `Interesse: ${selectedInterests || 'Não informado'}`,
      `Mensagem: ${fieldValue(formData, 'mensagem')}`,
    ].join('\n');

    window.open(
      `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );
  }

  return (
    <form
      className={styles.formCard}
      id="formulario-contato"
      onSubmit={handleSubmit}
    >
      <div className={styles.formHeader}>
        <h2>Conte um pouco sobre o que você precisa.</h2>
        <p>Responderemos em breve, com todo o cuidado.</p>
      </div>

      <div className={styles.fieldsGrid}>
        <label>
          Nome
          <input name="nome" placeholder="Seu nome" />
        </label>
        <label>
          E-mail
          <input name="email" type="email" placeholder="seu@email.com" />
        </label>
        <label>
          WhatsApp
          <input name="whatsapp" placeholder="(00) 00000-0000" />
        </label>
        <label>
          Instituição
          <input
            name="instituicao"
            placeholder="Escola, empresa ou instituição"
          />
        </label>
        <label>
          Cargo
          <input name="cargo" placeholder="Seu cargo ou função" />
        </label>
        <label>
          Cidade
          <input name="cidade" placeholder="Sua cidade" />
        </label>
      </div>

      <fieldset className={styles.interests}>
        <legend>Tenho interesse em</legend>
        <div className={styles.interestOptions}>
          {interests.map((interest) => (
            <label className={styles.check} key={interest}>
              <input name="interesse" type="checkbox" value={interest} />
              <span>{interest}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className={styles.messageField}>
        Mensagem
        <textarea
          name="mensagem"
          rows={4}
          placeholder="Conte brevemente o seu momento ou dúvida..."
        />
      </label>

      <div className={styles.formActions}>
        <button type="submit">
          <span>Enviar mensagem</span>
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
