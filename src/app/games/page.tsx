import SignUpSection from '@/components/LandingPage/SignUpSection';
import CardSections from '@/components/LandingPage/CardSections';
import RoleGames from '@/components/LandingPage/RoleGames';
import IntroductionGame from '@/components/LandingPage/IntroductionGame';
import CreateExp from '@/components/LandingPage/CreateExp';

export default function UpdatesPage() {
  return (
    <main className="flex flex-col justify-center min-h-screen w-full items-center">
      <CreateExp />
      <IntroductionGame />
      <RoleGames />
      <CardSections />
      <SignUpSection />
    </main>
  );
}
