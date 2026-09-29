import { ProductPage } from '@/components/product-page';
import { whatsappUrl } from '@/lib/site-config';

export const metadata = {
  title: 'RESET | Liderança e Gestão de Pessoas | Jamilla Salviano',
  description:
    'Uma experiência para reconhecer padrões, reorganizar conversas e construir relações de trabalho mais saudáveis.',
  alternates: { canonical: '/reset' },
  openGraph: {
    title: 'Experiência RESET | Jamilla Salviano',
    description:
      'Reorganize a maneira como você lidera pessoas, acordos e relações.',
    type: 'website' as const,
  },
};
export default function Page() {
  return (
    <ProductPage
      theme="navy"
      eyebrow="Experiência RESET"
      title="Você precisa "
      accent="liderar pessoas."
      intro="Antes de transformar sua equipe, transforme a maneira como você lidera."
      image="/images/jamilla-reset-portrait.png"
      problem="Trabalhar mais não corrige uma liderança mal estruturada."
      items={[
        'Reconhecer padrões',
        'Escutar com intenção',
        'Sistematizar acordos',
        'Evoluir a comunicação',
        'Transformar a cultura',
        'Sustentar o movimento',
      ]}
      itemDescriptions={[
        'Perceba hábitos de liderança que alimentam sobrecarga, ruído e retrabalho.',
        'Escute para compreender o que está por trás das resistências, sem perder a direção.',
        'Transforme conversas em responsabilidades claras e compromissos que podem ser acompanhados.',
        'Escolha palavras, momento e postura para reduzir defensividade e aumentar entendimento.',
        'Construa novas referências de convivência e responsabilidade no cotidiano da equipe.',
        'Crie consistência para que a mudança não desapareça depois do primeiro movimento.',
      ]}
      formats={[
        'Mentoria RESET individual',
        'RESET líder + equipe',
        'Palestra ou treinamento',
      ]}
      formatDescriptions={[
        'Um olhar individual para padrões, decisões e posicionamento.',
        'Trabalho orientado para relações, acordos e dinâmicas da equipe.',
        'Uma experiência coletiva conectada ao contexto da instituição.',
      ]}
      challengeDescription="Quando conversas, acordos e expectativas não estão organizados, trabalhar mais costuma produzir apenas mais desgaste. O RESET ajuda a enxergar o padrão antes de escolher o próximo movimento."
      contactHref={whatsappUrl(
        'Olá! Gostaria de saber mais sobre a Experiência RESET.',
      )}
      primaryAction="Quero entender o RESET"
      finalAction="Conversar sobre o RESET"
      cta="Uma conversa primeiro. O formato certo depois."
      heroVariant="reset"
    />
  );
}
