import type { Metadata } from 'next';
import './globals.css';
import Menu from '@/componentes/Menu';
import Footer from '@/componentes/Footer';

export const metadata: Metadata = {
  title: 'Marketing Altuori',
  description:
    'Marketing Altuori: Agência de marketing digital especializada em estratégias inovadoras que aumentam a visibilidade e o engajamento da sua marca. Transforme seu negócio com nossas soluções personalizadas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
