'use client';

import CardSections from '@/components/LandingPage/CardSections';
import SignUpSection from '../../components/LandingPage/SignUpSection';
import UpdateGame from '../../components/LandingPage/UpdateGame';

export default function ConquestingPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <UpdateGame />
      <CardSections />
      <SignUpSection />
    </main>
  );
}
