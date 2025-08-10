import SignUpSection from "@/components/LandingPage/SignUpSection";
import CardSections from "@/components/LandingPage/CardSections";
import RoleGames from "@/components/LandingPage/RoleGames";
import IntroductionGame from "@/components/LandingPage/IntroductionGame";
import CreateExp from "@/components/LandingPage/CreateExp";
import ConQuestingCard from "@/components/LandingPage/ConQuestingCard";
import AnnoCards from "@/components/LandingPage/AnnoCards";
export default function UpdatesPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <CreateExp />
      <ConQuestingCard />
      <IntroductionGame />
      <AnnoCards />
      <RoleGames />
      <CardSections />
      <SignUpSection />
    </main>
  );
}
