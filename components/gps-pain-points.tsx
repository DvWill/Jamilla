'use client';

import { useState } from 'react';
import { ChevronDown, Flame } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';
import styles from './gps-landing.module.css';

const mainPainPoints = [
  { title: 'Sobrecarga', description: 'Sente que carrega a escola inteira nas costas.' },
  { title: 'Modo reativo', description: 'Vive apagando incêndios e nunca consegue pensar estrategicamente.' },
  { title: 'Cobrança', description: 'Tem dificuldade de cobrar a equipe sem se sentir culpado.' },
  { title: 'Conversas difíceis', description: 'Evita conversas importantes por medo de conflito.' },
  { title: 'Equipe resistente', description: 'Enfrenta professores resistentes, desmotivados ou que não cumprem combinados.' },
  { title: 'Fofocas e panelinhas', description: 'Precisa lidar com fofocas, panelinhas e jogos de poder.' },
  { title: 'Perda de autoridade', description: 'Sente que perdeu autoridade diante da equipe.' },
  { title: 'Centralização', description: 'Centraliza tudo porque não consegue delegar.' },
  { title: 'Reuniões improdutivas', description: 'Faz reuniões que não geram mudança ou resultado.' },
];

const extraPainPoints = [
  'Dificuldade para lidar com famílias difíceis.',
  'Não sabe equilibrar acolhimento e cobrança.',
  'Sente-se sozinho na tomada de decisões.',
  'Leva os problemas da escola para casa.',
  'Está emocionalmente esgotado.',
  'Sabe que precisa mudar sua forma de liderar, mas não sabe por onde começar.',
];

export function GPSPainPoints() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="dores" className={`${styles.section} ${styles.painSection}`}>
      <div className={`${styles.wrap} ${styles.painInner}`}>
        <div className={styles.painHeading}>
          <p className={styles.eyebrow}>Isso acontece com você?</p>
          <h2>Você não precisa continuar apagando incêndios.</h2>
          <p>O GPS foi pensado para gestores que vivem desafios como estes todos os dias.</p>
        </div>
        <div className={styles.painGrid}>
          {mainPainPoints.map((item, index) => (
            <ScrollReveal className={styles.painCard} delay={index * 35} key={item.title}><Flame aria-hidden="true" /><h3>{item.title}</h3><p>{item.description}</p></ScrollReveal>
          ))}
        </div>
        <button type="button" className={styles.painMoreButton} aria-expanded={showMore} aria-controls="outros-desafios" onClick={() => setShowMore((current) => !current)}>
          {showMore ? 'Ocultar outros desafios' : 'Ver outros desafios'}
          <ChevronDown aria-hidden="true" data-open={showMore} />
        </button>
        <div id="outros-desafios" className={styles.painExtra} data-open={showMore} aria-hidden={!showMore}>
          <div>{extraPainPoints.map((item) => <p key={item}>{item}</p>)}</div>
        </div>
      </div>
    </section>
  );
}
