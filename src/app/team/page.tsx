import About from '@/components/LandingPage/About';
import CardSections from '@/components/LandingPage/CardSections';
import SignUpSection from '@/components/LandingPage/SignUpSection';
import TeamPerson from '@/components/LandingPage/TeamPerson';

export default function GamesPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <TeamPerson />
      <About />
      <CardSections />
      <SignUpSection />
    </main>
  );
}
