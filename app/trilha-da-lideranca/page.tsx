import { ProductPage } from '@/components/product-page';
export const metadata = { title: 'Trilha da Liderança | Jamilla Salviano' };
export default function Page() {
  return (
    <ProductPage
      theme="wine"
      eyebrow="Formação prática"
      title="Pare de liderar no "
      accent="achismo."
      intro="Aprenda a diagnosticar padrões, interpretar comportamentos e transformar problemas em um plano de ação."
      heroVariant="trilha"
      image="/images/trilha-hero-portrait.png"
      problem="Talvez o problema não seja apenas a sua equipe."
      items={[
        'Diagnóstico de liderança',
        'Comunicação que mobiliza',
        'Delegação e responsabilidade',
        'Gestão de conflitos',
        'Produtividade e decisão',
        'Plano de ação aplicável',
      ]}
      formats={[
        'Conteúdo em vídeo',
        'Exercícios de aplicação',
        'Diagnóstico orientado',
      ]}
      cta="Pare de repetir conversas. Comece a identificar padrões."
      checkoutHref="https://pay.kiwify.com.br/ZrK7t7E"
      offer={{
        meta: [
          { label: 'Imersão', value: 'Ao vivo pelo Google Meet' },
          { label: 'Data', value: 'A confirmar' },
          { label: 'Horário', value: 'A confirmar' },
        ],
        price: 'R$ 37,90',
        note: 'Condições e acesso conforme confirmação no checkout.',
        button: 'Quero participar da Trilha',
      }}
    />
  );
}
