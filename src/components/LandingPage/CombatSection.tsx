export default function LoreSection() {
  return (
    <>
      {/* Characters Section // Version Desktop */}
      <div className="hidden pb-20 md:flex flex-col lg:flex-row gap-8 left-0">
        {/* Left Side - Characters Heading */}
        <div className="lg:w-1/4">
          <h2 className="text-[24px] leading-[40px] font-normal text-white mb-8">
            Combat
          </h2>
        </div>

        {/* Right Side - Three Cards */}
        <div className="w-[1279px] h-[580px] space-y-6 pt-2">
          {/* Card 1: Tons of Build Options */}
          <div className="w-[898px] h-[200px] rounded-2xl border border-[rgba(25,159,236,0.30)] overflow-hidden">
            <div className="flex h-full">
              {/* Visual Element - Flowchart */}
              <div
                className="w-[280px] h-[200px] bg-center bg-cover"
                style={{
                  backgroundImage: "url(/lp/lore2.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              {/* Text Content */}
              <div className="flex-1 h-[200px] p-6 bg-[#072231]">
                <h3 className="text-[18px] font-normal text-white mb-3">
                  Momentum Matters
                </h3>
                <p className="text-[rgba(255,255,255,0.5)] w-[528px] text-[14px] leading-[20px]">
                  Combat is driven by strategic decisions and seasoned with RNG
                  designed to champion improvisation over rote strategies or
                  optimized ability rotations. The impact of successes and
                  failures persist from turn to turn, buffing certain stats to
                  the detriment of others, encouraging players to make tactical
                  pivots mid-fight.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[898px] h-[200px] rounded-2xl border border-[rgba(25,159,236,0.30)] overflow-hidden">
            <div className="flex h-full">
              {/* Visual Element - Flowchart */}
              <div
                className="w-[280px] h-[200px] bg-center bg-cover"
                style={{
                  backgroundImage: "url(/lp/combat2.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              {/* Text Content */}
              <div className="flex-1 h-[200px] p-6 bg-[#072231]">
                <h3 className="text-[18px] font-normal text-white mb-3">
                  A Multitude of Spells
                </h3>
                <p className="text-[rgba(255,255,255,0.5)] w-[528px] text-[14px] leading-[20px]">
                  Anno Amagium maximizes its magical premise with hundreds of
                  spells to explore. Beyond classics like telekinesis, elemental
                  magic, and summoning, you’ll wield egregoric magic (holy and
                  infernal), qi-based martial arts, spell-hacking, and abilities
                  drawn from real-world traditions like totemism, animism,
                  occultism, and chaos magic.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[898px] h-[132px] rounded-2xl border border-[rgba(25,159,236,0.30)] overflow-hidden">
            <div className="flex h-full">
              {/* Visual Element - Flowchart */}
              <div
                className="w-[280px] h-[132px] bg-center bg-cover"
                style={{
                  backgroundImage: "url(/lp/combat3.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              {/* Text Content */}
              <div className="flex-1 h-[132px] p-6 bg-[#072231]">
                <h3 className="text-[18px] font-normal text-white mb-3">
                  Enormous Turn-to-Turn Optionality with Ridiculous Combos
                </h3>
                <p className="text-[rgba(255,255,255,0.5)] w-[528px] text-[14px] leading-[20px]">
                  Action Point-based play allows characters to seamlessly string
                  together movement, skills, physical attacks, and spell casting
                  in a single turn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Characters Section // Versão Mobile */}
      <div className="px-6 pt-20 flex flex-col w-full">
        <h2 className="pb-4 text-[18px] leading-6 font-normal text-white">
          Combat
        </h2>

        {/* Card 1 */}
        <div className="flex flex-col w-full overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="w-full h-[160px] bg-[url('/lp/card-1-com-mob.png')] rounded-2xl bg-center bg-cover bg-no-repeat"></div>
            <div className="flex pt-4 flex-col">
              <details className="group [&_summary::-webkit-details-marker]:hidden mb-7 group-open:mb-0">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="text-[16px] font-normal text-white">
                    Momentum Matters
                  </h3>
                  <svg
                    className="w-5 h-5 text-white transition-transform duration-300 group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="overflow-hidden transition-all duration-300 max-h-0 group-open:max-h-96 group-open:mt-2">
                  <p className="text-[rgba(255,255,255,0.5)] text-[14px] leading-[20px] pb-7">
                    Combat is driven by strategic decisions and seasoned with
                    RNG designed to champion improvisation over rote strategies
                    or optimized ability rotations. The impact of successes and
                    failures persist from turn to turn, buffing certain stats to
                    the detriment of others, encouraging players to make
                    tactical pivots mid-fight.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col w-full overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="w-full h-[160px] bg-[url('/lp/card-2-com-mob.png')] rounded-2xl bg-center bg-cover bg-no-repeat"></div>
            <div className="flex pt-4 flex-col">
              <details className="group [&_summary::-webkit-details-marker]:hidden mb-7 group-open:mb-0">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="text-[16px] font-normal text-white">
                    A Multitude of Spells
                  </h3>
                  <svg
                    className="w-5 h-5 text-white transition-transform duration-300 group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="overflow-hidden transition-all duration-300 max-h-0 group-open:max-h-96 group-open:mt-2">
                  <p className="text-[rgba(255,255,255,0.5)] text-[14px] leading-[20px] pb-7">
                    Anno Amagium maximizes its magical premise with hundreds of
                    spells to explore. Beyond classics like telekinesis,
                    elemental magic, and summoning, you’ll wield egregoric magic
                    (holy and infernal), qi-based martial arts, spell-hacking,
                    and abilities drawn from real-world traditions like
                    totemism, animism, occultism, and chaos magic.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col w-full overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="w-full h-[160px] bg-[url('/lp/card-3-com-mob.png')] rounded-2xl bg-center bg-cover bg-no-repeat"></div>
            <div className="flex pt-4 flex-col">
              <details className="group [&_summary::-webkit-details-marker]:hidden mb-7 group-open:mb-0">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="max-w-[303px] text-[16px] font-normal text-white">
                    Enormous Turn-to-Turn Optionality with Ridiculous Combos
                  </h3>
                  <svg
                    className="w-5 h-5 text-white transition-transform duration-300 group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="overflow-hidden transition-all duration-300 max-h-0 group-open:max-h-96 group-open:mt-2">
                  <p className="text-[rgba(255,255,255,0.5)] text-[14px] leading-[20px] pb-7">
                    Create a character that reflects your identity and
                    playstyle. Choose from 11 backgrounds, 200+ curricula, 100
                    traits, 24 ability refinements, and 41 weapon types—at
                    launch, with more added regularly.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
