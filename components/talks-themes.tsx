import { ChevronDown } from 'lucide-react';
import { Cta, Eyebrow } from './site';

const themes = [
  {
    title: 'Liderança sem autoritarismo',
    description:
      'Como construir autoridade, respeito e influência sem transformar a gestão em um ambiente de medo.',
  },
  {
    title: 'Conflitos que ninguém quer enfrentar',
    description:
      'Como agir diante de resistência, fofocas, panelinhas e comportamentos difíceis.',
  },
  {
    title: 'O inimigo oculto da gestão escolar',
    description:
      'Os comportamentos e padrões silenciosos que prejudicam equipes, relações e resultados.',
  },
  {
    title: 'Feedback que gera mudança',
    description:
      'Como transformar conversas difíceis em alinhamento, responsabilização e desenvolvimento.',
  },
  {
    title: 'Do gestor sobrecarregado ao líder estratégico',
    description:
      'Como reduzir a centralização, organizar prioridades e construir uma equipe mais responsável.',
  },
];

export function TalksThemes({ contactHref }: { contactHref: string }) {
  return (
    <section className="section talks-themes surface-paper" aria-labelledby="talks-themes-title">
      <div className="wrap talks-themes__inner">
        <div className="talks-themes__intro">
          <Eyebrow>Temas de palestras</Eyebrow>
          <h2 id="talks-themes-title">
            Conteúdos para o momento que sua escola está vivendo.
          </h2>
          <p>
            Abra cada tema para conhecer o ponto de partida da conversa. O
            conteúdo pode ser contextualizado para o seu evento.
          </p>
        </div>
        <div className="talks-themes__list">
          {themes.map((theme, index) => (
            <details className="talks-theme" key={theme.title}>
              <summary>
                <span className="talks-theme__number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <strong>{theme.title}</strong>
                <ChevronDown size={20} aria-hidden="true" />
              </summary>
              <p>{theme.description}</p>
            </details>
          ))}
          <div className="talks-themes__contact">
            <div>
              <strong>Precisa de um tema personalizado para o seu evento?</strong>
              <span>Conte o contexto da sua instituição e vamos conversar.</span>
            </div>
            <Cta href={contactHref}>Falar com Jamilla</Cta>
          </div>
        </div>
      </div>
    </section>
  );
}
