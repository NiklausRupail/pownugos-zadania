import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import '../styles/globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mikołaj Rup 4D',
  description: 'Oczywiście że robie lepsze strony od Pana'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pl' suppressHydrationWarning={true}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
