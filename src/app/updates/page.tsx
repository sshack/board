"use client";

import CardSections from "@/components/LandingPage/CardSections";
import SignUpSection from "../../components/LandingPage/SignUpSection";
import UpdateGame from "../../components/LandingPage/UpdateGame";

export default function ConquestingPage() {
  return (
    <main className="flex flex-col w-screen min-h-screen items-center justify-center">
      <UpdateGame />
      <CardSections />
      <SignUpSection />
    </main>
  );
}
