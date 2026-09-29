import type { Metadata } from 'next';
import HomePage from '@/components/home-page';

export const metadata: Metadata = {
  title: 'Jamilla Salviano | Liderança, Educação e Gestão',
  description:
    'Formações, palestras e soluções para gestores escolares que querem liderar pessoas com clareza, método e humanidade.',
  alternates: { canonical: '/inicio' },
  openGraph: {
    title: 'Jamilla Salviano | Liderança, Educação e Gestão',
    description:
      'Educação, liderança e transformação de equipes.',
    type: 'website',
  },
};

export default HomePage;
