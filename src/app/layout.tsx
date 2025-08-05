import { Metadata } from 'next';
import { Cormorant, Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/LandingPage/Header';

const cormorant = Cormorant({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anno',
  description: '',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className={`${cormorant.className} ${inter.className}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
