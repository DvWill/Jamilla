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
      heroBackgroundImage="/images/palestras-hero-background.jpeg"
      showcase={{
        title: 'Presença',
        words: ['Presença', 'Clareza', 'Coragem', 'Estratégia'],
        images: [
          { src: '/images/jamilla-navy.webp', label: 'Clareza para pensar' },
          { src: '/images/jamilla-diagnostico.webp', label: 'Coragem para decidir' },
          { src: '/images/jamilla-cream.webp', label: 'Estratégia para agir' },
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
