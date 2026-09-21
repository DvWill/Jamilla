import type { Metadata } from 'next';
import { DM_Sans, Cormorant_Garamond } from 'next/font/google';
import { RouteScrollReset } from '@/components/route-scroll-reset';
import './globals.css';

const sans = DM_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
});
const serif = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight:['400','500','600','700'],
});

export const metadata: Metadata = {
  title: 'Jamilla Salviano | Liderança, Educação e Gestão',
  description:'Formação, método e experiências para líderes e instituições que querem transformar equipes.',
  icons: {
    icon: '/favicon.svg?v=2',
    shortcut: '/favicon.svg?v=2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${sans.variable} ${serif.variable}`}>
        <RouteScrollReset />
        {children}
      </body>
    </html>
  );
}
