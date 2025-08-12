import { Metadata } from 'next';
import { Cormorant, Inter } from 'next/font/google';
import Header from '../components/LandingPage/Header';
import './globals.css';
import Footer from '../components/LandingPage/Footer';

const cormorant = Cormorant({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anno',
  description: '',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className="max-w-[100vw] overflow-x-hidden">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body
        className={`${cormorant.className} ${inter.className} w-full max-w-[100vw] overflow-x-hidden`}
      >
        <Header />
        <main className="w-full overflow-x-hidden px-0 md:px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
