'use client';

import HeroSection from '../../components/LandingPage/HeroSection';
import ClaimSection from '../../components/LandingPage/ClaimSection';
import HowItWorksSection from '../../components/LandingPage/HowItWorksSection';
import OtherRewardsSection from '../../components/LandingPage/OtherRewardsSection';
import FAQSection from '../../components/LandingPage/FAQSection';
import LegacySection from '../../components/LandingPage/LegacySection';
import ConQuest365Section from '../../components/LandingPage/ConQuest365Section';
import SignUpSection from '../../components/LandingPage/SignUpSection';
import Footer from '../../components/LandingPage/Footer';

export default function ConquestingPage() {
  return (
    <main className="flex flex-col w-screen min-h-screen bg-gray-900 max-w-[1440px] mx-auto">
      <HeroSection />
      <HowItWorksSection />
      <OtherRewardsSection />
      <FAQSection />
      <LegacySection />
      <ConQuest365Section />
      <SignUpSection />
      <Footer/>
    </main>
  );
}
