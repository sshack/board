import EarlyAccess from '@/components/LandingPage/EarlyAccess';
import HomeSection from '@/components/LandingPage/HomeSection';
import SignUpSection from '@/components/LandingPage/SignUpSection';
import CardSections from '@/components/LandingPage/CardSections';

import NextLevel from '@/components/LandingPage/NextLevel';
import DragonCon from '../components/LandingPage/DragonCon';
import TabletopGameplay from '../components/LandingPage/TabletopGameplay';
import IntroductionGame from '../components/LandingPage/IntroductionGame';
import Exploring from '../components/LandingPage/Exploring';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <HomeSection />
      {/* <DragonCon /> */}
      <EarlyAccess />
      <NextLevel />
      <TabletopGameplay />
      <IntroductionGame />
      <Exploring />
      <CardSections />
      <SignUpSection />
    </main>
  );
}
