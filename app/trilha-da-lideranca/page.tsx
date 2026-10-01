import { ProductPage } from '@/components/product-page';

export const metadata = {
  title: 'Trilha da Liderança | Imersão ao vivo com Jamilla Salviano',
  description:
    'Imersão ao vivo pelo Google Meet para gestores escolares que querem liderar pessoas com mais clareza, firmeza e segurança.',
  alternates: { canonical: '/trilha-da-lideranca' },
  openGraph: {
    title: 'Trilha da Liderança | Jamilla Salviano',
    description:
      'Formação prática e imersão ao vivo pelo Google Meet. Investimento: R$ 37,90.',
    type: 'website' as const,
  },
};
export default function Page() {
  return (
    <ProductPage
      theme="wine"
      eyebrow="Trilha da Liderança"
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
      itemDescriptions={[
        'Reconheça padrões de comportamento e descubra o que realmente está travando o avanço da equipe.',
        'Transforme orientações vagas em mensagens claras, acordos compreendidos e conversas que mobilizam.',
        'Pare de carregar tudo sozinho e aprenda a distribuir responsabilidades com clareza.',
        'Conduza conversas difíceis, reduza desgastes e aja antes que pequenos conflitos contaminem a equipe.',
        'Organize prioridades e tome decisões com mais critério, sem viver apenas reagindo às urgências.',
        'Saia da reflexão com próximos passos claros para aplicar na sua realidade escolar.',
      ]}
      formats={[
        'Conteúdo em vídeo',
        'Exercícios de aplicação',
        'Diagnóstico orientado',
      ]}
      formatDescriptions={[
        'Aulas diretas para construir repertório de liderança.',
        'Práticas para levar o conteúdo ao cotidiano da gestão.',
        'Leitura dos padrões que mais afetam sua forma de liderar.',
      ]}
      cta="Pare de repetir conversas. Comece a identificar padrões."
      primaryAction="Quero participar da Trilha"
      finalAction="Quero participar da Trilha"
      checkoutHref="https://pay.kiwify.com.br/ZrK7t7E"
      offer={{
        bullets: [
          'Imersão ao vivo pelo Google Meet',
          'Diagnóstico de liderança orientado',
          'Exercícios práticos de aplicação',
          'Plano de ação aplicável à sua realidade',
        ],
        meta: [
          { label: 'Imersão', value: 'Ao vivo pelo Google Meet' },
          { label: 'Data', value: 'A confirmar' },
          { label: 'Horário', value: 'A confirmar' },
        ],
        price: 'R$ 37,90',
        note: 'Garanta sua participação na imersão ao vivo e saia com orientações práticas para aplicar na sua realidade escolar.',
        button: 'Quero garantir minha vaga',
      }}
    />
  );
}
