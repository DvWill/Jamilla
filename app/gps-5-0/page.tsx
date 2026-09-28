import type { Metadata } from 'next';
import { GPSLanding } from '@/components/gps-landing';

export const metadata: Metadata = {
  title: 'Método GPS da Liderança Escolar | Jamilla Salviano',
  description: 'Formação para gestores escolares que querem liderar com clareza, método, firmeza e humanidade.',
  alternates: { canonical: '/gps-5-0' },
  openGraph: {
    title: 'Método GPS da Liderança Escolar | Jamilla Salviano',
    description: 'Formação para gestores escolares que querem liderar com clareza, método, firmeza e humanidade.',
    type: 'website',
  },
};

export default function GPSPage() {
  return <GPSLanding />;
}
