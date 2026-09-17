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
      image="/images/jamilla-red.webp"
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
