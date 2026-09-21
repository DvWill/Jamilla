import type { Metadata } from 'next';
import { GPSLanding } from '@/components/gps-landing';

export const metadata: Metadata = {
  title: 'GPS 5.0 | Gestão Escolar e Liderança | Jamilla Salviano',
  description: 'Formação completa para gestores escolares que querem desenvolver liderança, estratégia, gestão de equipes e resultados.',
  alternates: { canonical: '/gps-5-0' },
  openGraph: {
    title: 'GPS 5.0 | Gestão Escolar e Liderança | Jamilla Salviano',
    description: 'Formação completa para gestores escolares que querem desenvolver liderança, estratégia, gestão de equipes e resultados.',
    type: 'website',
  },
};

export default function GPSPage() {
  return <GPSLanding />;
}
