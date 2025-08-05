import React from 'react';
import Footer from '@/components/LandingPage/Footer';
import SignUpSection from '@/components/LandingPage/SignUpSection';
import CardSections from '@/components/LandingPage/CardSections';
import TeamPerson from '@/components/LandingPage/TeamPerson';
import Header from '@/components/LandingPage/Header';
import About from '@/components/LandingPage/About';

export default function GamesPage() {
  return (
    <main className="flex flex-col w-screen min-h-screen max-w-[1440px] mx-auto">
      <Header />
      <TeamPerson />
      <About />
      <CardSections />
      <SignUpSection />
      <Footer />
    </main>
  );
}
