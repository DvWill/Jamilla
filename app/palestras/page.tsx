import { ProductPage } from '@/components/product-page';
import { whatsappUrl } from '@/lib/site-config';

export const metadata = {
  title: 'Palestras para Gestores Escolares | Jamilla Salviano',
  description:
    'Palestras sobre liderança, conflitos, feedback e gestão escolar conectadas à realidade de gestores e instituições.',
  alternates: { canonical: '/palestras' },
  openGraph: {
    title: 'Palestras para Gestores Escolares | Jamilla Salviano',
    description:
      'Leve para o seu evento uma conversa que une experiência na escola, método e aplicação prática.',
    type: 'website' as const,
  },
};
export default function Page() {
  return (
    <ProductPage
      theme="red"
      eyebrow="Palestras para gestores"
      title="Uma escola nunca vai além da "
      accent="liderança que a conduz."
      intro="Conversas que encontram o contexto real da escola e transformam reflexão em movimento."
      image="/images/jamilla-palestras-transparent.png"
      heroVariant="talks"
      heroBackgroundVideo="/videos/instituto-hero.mp4"
      editorialShowcase={{
        words: ['Clareza', 'Estratégia', 'Coragem'],
        images: [
          {
            src: '/images/palestras-estrategia-retrato-full.jpg',
            label: 'Clareza para pensar',
            alt: 'Jamilla Salviano conduzindo uma palestra',
          },
          {
            src: '/images/jamilla-mentora.webp',
            label: 'Coragem para decidir',
            alt: 'Jamilla Salviano sentada em retrato editorial',
          },
          {
            src: '/images/palestras-estrategia-palco.jpeg',
            label: 'Estratégia para agir',
            alt: 'Jamilla Salviano falando ao microfone em uma palestra',
          },
        ],
      }}
      showcase={{
        title: 'Presença',
        images: [
          { src: '/images/palestras-hero-background.jpeg', label: 'Imagem de palco disponível no projeto', alt: 'Palco de uma palestra disponível nos materiais da Jamilla Salviano' },
          { src: '/images/jamilla-palestra-palco-nova.jpeg', label: 'Apresentação para uma plateia', alt: 'Jamilla Salviano em uma apresentação para uma plateia' },
          { src: '/images/jamilla-palestra-auditorio.png', label: 'Material visual da página de palestras', alt: 'Jamilla Salviano em material visual da página de palestras' },
        ],
      }}
      problem="Preencher a agenda é fácil. Mudar uma realidade exige método."
      items={[
        'Gestão que mobiliza',
        'Comunicação e conflito',
        'Liderança emocional',
        'Cultura e responsabilidade',
        'Equipes pedagógicas',
        'Mudança na prática',
      ]}
      itemDescriptions={[
        'Autoridade, clareza e influência para conduzir pessoas sem recorrer ao medo.',
        'Conversas difíceis, resistência e ruídos que precisam ser enfrentados.',
        'Consciência emocional para decidir e se posicionar sob pressão.',
        'Acordos e comportamentos que constroem responsabilidade no cotidiano.',
        'Alinhamento entre liderança e trabalho pedagógico.',
        'Reflexão que se transforma em próximos passos possíveis.',
      ]}
      formats={[
        'Palestra presencial',
        'Encontro para lideranças',
        'Trilha para instituições',
      ]}
      formatDescriptions={[
        'Conteúdo presencial ajustado ao contexto e ao público do evento.',
        'Conversa direcionada a quem toma decisões e conduz equipes.',
        'Sequência formativa para aprofundar temas ao longo de mais de um encontro.',
      ]}
      challengeDescription="Uma palestra relevante não ocupa apenas um horário da agenda: ela nomeia problemas que a equipe reconhece, oferece novas perguntas e abre caminho para atitudes concretas."
      contactHref={whatsappUrl(
        'Olá! Gostaria de conversar sobre uma palestra com Jamilla Salviano.',
      )}
      primaryAction="Levar Jamilla para o meu evento"
      finalAction="Solicitar proposta"
      cta="A próxima transformação pode começar por uma conversa."
    />
  );
}
