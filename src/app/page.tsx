import EarlyAccess from '@/components/LandingPage/EarlyAccess';
import HomeSection from '@/components/LandingPage/HomeSection';
import SignUpSection from '@/components/LandingPage/SignUpSection';
import CardSections from '@/components/LandingPage/CardSections';
import RolePlayGameHome from '@/components/LandingPage/RolePlayGameHome';
import NextLevel from '@/components/LandingPage/NextLevel';
import DragonCon from '../components/LandingPage/DragonCon';

export default function HomePage() {
  return (
    <main className="flex flex-col w-full max-w-[1440px]">
      <HomeSection />
      {/* <DragonCon />
      <EarlyAccess />
      <NextLevel />
      <RolePlayGameHome />
      <CardSections />
      <SignUpSection /> */}
    </main>
  );
}
