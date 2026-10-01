import { ProductPage } from '@/components/product-page';

export const metadata = {
  title: 'ATA Inteligente | Minicurso com Jamilla Salviano',
  description:
    'Aprenda a preparar registros claros, organizar reuniões e documentar decisões sem começar cada ata do zero.',
  alternates: { canonical: '/ata-inteligente' },
  openGraph: {
    title: 'ATA Inteligente | Jamilla Salviano',
    description:
      'Modelos e orientações práticas para registros escolares mais claros e organizados.',
    type: 'website' as const,
  },
};
export default function Page() {
  return (
    <ProductPage
      theme="navy"
      heroVariant="ata"
      eyebrow="Mini curso ATA Inteligente"
      title="Não deixe sua gestão vulnerável ao "
      accent="‘ninguém me avisou’."
      intro="Aprenda a registrar reuniões, acordos e conversas difíceis com clareza, objetividade e segurança."
      image="/images/jamilla-ata-section.png"
      problem="Improvisar uma ata pode comprometer decisões importantes da gestão."
      items={[
        'Manual estratégico de ata',
        'Modelos para situações escolares',
        'Registro de ocorrências',
        'Conversas com responsáveis',
        'Mediação de conflitos',
        'Checklist de revisão',
      ]}
      itemDescriptions={[
        'Entenda o que precisa constar em uma ata para registrar decisões com clareza e objetividade.',
        'Ganhe um ponto de partida para situações recorrentes da rotina escolar.',
        'Organize fatos, encaminhamentos e responsabilidades sem depender apenas da memória.',
        'Registre conversas importantes com linguagem clara e uma sequência compreensível.',
        'Documente acordos e encaminhamentos para reduzir ruídos depois da conversa.',
        'Revise o documento antes de finalizar e evite lacunas que podem gerar dúvidas.',
      ]}
      formats={['Aulas diretas', 'Modelos editáveis', 'Consulta vitalícia']}
      formatDescriptions={[
        'Conteúdo objetivo para aprender sem perder tempo com teoria desconectada.',
        'Estruturas que evitam começar um registro do zero.',
        'Acesso ao conteúdo para consultar quando uma nova situação surgir.',
      ]}
      challengeDescription="Sem um registro claro, acordos se perdem, responsabilidades ficam vagas e a gestão precisa reconstruir conversas importantes. A ATA Inteligente organiza esse processo com orientação e modelos práticos."
      primaryAction="Quero o ATA Inteligente"
      finalAction="Quero acessar o minicurso"
      cta={<>Pare de depender da memória ou do improviso para registrar <em>decisões.</em></>}
      checkoutHref="https://pay.kiwify.com.br/UinkB7z"
      offer={{
        bullets: [
          'Videoaulas práticas',
          'Modelos editáveis para situações reais',
          'Checklist de revisão',
          'Acesso vitalício',
        ],
        price: 'R$ 97,90 à vista ou 12x de R$ 10,13',
        note: 'Acesso liberado após a confirmação do pagamento.',
        button: 'Quero o minicurso agora',
      }}
    />
  );
}
