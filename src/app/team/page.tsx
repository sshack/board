import About from "@/components/LandingPage/About";
import CardSections from "@/components/LandingPage/CardSections";
import SignUpSection from "@/components/LandingPage/SignUpSection";
import TeamPerson from "@/components/LandingPage/TeamPerson";

export default function GamesPage() {
  return (
    <main className="flex flex-col w-screen min-h-screen max-w-[1440px] mx-auto">
      <TeamPerson />
      <About />
      <CardSections />
      <SignUpSection />
    </main>
  );
}
