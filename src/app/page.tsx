import EarlyAccess from "@/components/LandingPage/EarlyAccess";
import Footer from "@/components/LandingPage/Footer";
import HomeSection from "@/components/LandingPage/HomeSection";

export default function HomePage() {
  return (
    <main className="flex flex-col w-screen min-h-screen bg-gray-900 max-w-[1440px] mx-auto">
      <HomeSection />
      <EarlyAccess />
      <Footer />
    </main>
  );
}
