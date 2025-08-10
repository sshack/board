import About from "@/components/LandingPage/About";
import CardSections from "@/components/LandingPage/CardSections";
import SignUpSection from "@/components/LandingPage/SignUpSection";
import TeamPerson from "@/components/LandingPage/TeamPerson";
import NextMember from "@/components/LandingPage/NextMember";

export default function GamesPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <TeamPerson />
      <NextMember />
      <About />
      <CardSections />
      <SignUpSection />
    </main>
  );
}
