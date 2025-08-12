'use client';

import HeroSection from '../../components/LandingPage/HeroSection';
import ClaimSection from '../../components/LandingPage/ClaimSection';
import HowItWorksSection from '../../components/LandingPage/HowItWorksSection';
import OtherRewardsSection from '../../components/LandingPage/OtherRewardsSection';
import FAQSection from '../../components/LandingPage/FAQSection';
import LegacySection from '../../components/LandingPage/LegacySection';
import ConQuest365Section from '../../components/LandingPage/ConQuest365Section';
import SignUpSection from '../../components/LandingPage/SignUpSection';
import Conquestcards from '../../components/LandingPage/ConquestCards';

export default function ConquestingPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <HeroSection />
      <HowItWorksSection />
      <OtherRewardsSection />
      <Conquestcards />
      <FAQSection />
      <LegacySection />
      <ConQuest365Section />
      <SignUpSection />
    </main>
  );
}
