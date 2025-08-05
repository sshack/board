import EarlyAccess from "@/components/LandingPage/EarlyAccess";
import Footer from "@/components/LandingPage/Footer";
import HomeSection from "@/components/LandingPage/HomeSection";
import SignUpSection from "@/components/LandingPage/SignUpSection";
import CardSections from "@/components/LandingPage/CardSections";
import RolePlayGameHome from "@/components/LandingPage/RolePlayGameHome";
import NextLevel from "@/components/LandingPage/NextLevel";

export default function HomePage() {
  return (
    <main className="flex flex-col w-screen min-h-screen max-w-[1440px] mx-auto">
      <HomeSection />
      <EarlyAccess />
      <NextLevel />
      <RolePlayGameHome />
      <CardSections />
      <SignUpSection />
      <Footer />
    </main>
  );
}
