import React from "react";
export default function RoleGames() {
  return (
    <div className="!bg-red-500 w-full md:h-[3120px] bg-black md:bg-[url('/lp/fundoSectionGamesRole.png')] bg-center bg-cover bg-no-repeat relative overflow-hidden">
      <div className="!bg-pink-100 px-6 md:px-[80px] container mx-auto pr-10 py-20 relative">
        {/* Gradiente de transição na parte superior */}
        <div
          className="absolute top-0 left-0 right-0 h-32 w-full"
          style={{
            background:
              "linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 1) 100%)",
            width: "100vw",
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
          }}
        />

        {/* Header Section */}
        <div className="bg-green-600 ">
          <h1 className="text-[40px] leading-[48px] tracking-[-1.6px] md:text-[56px] font-semibold text-white">
            Anno Amagium the Roleplaying Game
          </h1>
          <p className="pt-4 text-sm md:text-[16px]  text-white leading-relaxed md:max-w-[850px]">
            <span className="text-[#199FEC]">
              A next generation TTRPG with entirely new game systems
            </span>{" "}
            specifically developed to bring a distinctive, lore-rich universe to
            life. Become a heroic battle mage and explore an alternate version
            of contemporary Earth as seen through a looking glass of ubiquitous
            magic.
          </p>
        </div>
      </div>

      {/* Gradiente de transição para o fundo preto
      <div
        className="absolute bottom-0 left-0 right-0 h-32 w-full"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 1) 100%)",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
        }}
      /> */}
    </div>
  );
}
