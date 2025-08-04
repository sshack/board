import Footer from "@/components/LandingPage/Footer";
import SignUpSection from "@/components/LandingPage/SignUpSection";
import CardSections from "@/components/LandingPage/CardSections";
import RoleGames from "@/components/LandingPage/RoleGames";
import IntroductionGame from "@/components/LandingPage/IntroductionGame";

export default function UpdatesPage() {
  return (
    <main className="flex flex-col w-screen min-h-screen max-w-[1440px] mx-auto">
      <IntroductionGame />
      <RoleGames />
      <CardSections />
      <SignUpSection />
      <Footer />
    </main>
  );
}
