import { ProductPage } from '@/components/product-page';
export const metadata = {
  title: 'Palestras para Gestores Escolares | Jamilla Salviano',
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
            src: '/images/jamilla-navy.webp',
            label: 'Clareza para pensar',
            alt: 'Jamilla Salviano em retrato de roupa azul',
          },
          {
            src: '/images/jamilla-mentora.webp',
            label: 'Coragem para decidir',
            alt: 'Jamilla Salviano sentada em retrato editorial',
          },
          {
            src: '/images/jamilla-cream.webp',
            label: 'Estratégia para agir',
            alt: 'Jamilla Salviano em retrato com blazer claro',
          },
        ],
      }}
      showcase={{
        title: 'Presença',
        images: [
          { src: '/images/palestras-hero-background.jpeg', label: 'Imagem de palco disponível no projeto', alt: 'Palco de uma palestra disponível nos materiais da Jamilla Salviano' },
          { src: '/images/links-stage-bg.jpeg', label: 'Apresentação para uma plateia', alt: 'Jamilla Salviano em uma apresentação para uma plateia' },
          { src: '/images/jamilla-palestras.png', label: 'Material visual da página de palestras', alt: 'Jamilla Salviano em material visual da página de palestras' },
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
      formats={[
        'Palestra presencial',
        'Encontro para lideranças',
        'Trilha para instituições',
      ]}
      cta="A próxima transformação pode começar por uma conversa."
    />
  );
}
