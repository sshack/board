import React from "react";
import CharactersSection from "./CharactersSection";
import LoreSection from "./LoreSection";
import CombatSection from "./CombatSection";
import SkillsSection from "./SkillsSection";
export default function RoleGames() {
  return (
    <div
      className="w-[1440px] h-[3120px] relative overflow-hidden"
      style={{
        backgroundImage: `url(/lp/fundoSectionGamesRole.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-[80px] container mx-auto pr-10 py-20 relative">
        {/* Header Section */}
        <div className=" mb-32">
          <h1 className="text-[56px] font-semibold text-white mb-6 font-sans">
            Anno Amagium the Roleplaying Game
          </h1>
          <p className="text-[16px]  text-white leading-relaxed max-w-[850px]">
            <span className="text-[#199FEC]">
              A next generation TTRPG with entirely new game systems
            </span>{" "}
            specifically developed to bring a distinctive, lore-rich universe to
            life. Become a heroic battle mage and explore an alternate version
            of contemporary Earth as seen through a looking glass of ubiquitous
            magic.
          </p>
        </div>

        {/* Characters Section */}
        <CharactersSection />
        <LoreSection />
        <CombatSection />
        <SkillsSection />
      </div>
    </div>
  );
}
