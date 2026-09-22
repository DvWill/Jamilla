import { ProductPage } from '@/components/product-page';
export const metadata = { title: 'ATA Inteligente | Jamilla Salviano' };
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
      formats={['Aulas diretas', 'Modelos editáveis', 'Consulta vitalícia']}
      cta="Pare de depender da memória ou do improviso para registrar decisões."
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
