export default function LoreSection() {
  return (
    <>
      {/* Characters Section // Versão Desktop */}
      <div className="hidden pb-20 md:flex flex-col lg:flex-row gap-8 left-0">
        {/* Left Side - Characters Heading */}
        <div className="lg:w-1/4">
          <h2 className="text-[24px] leading-[40px] font-normal text-white mb-8">
            Skills
          </h2>
        </div>

        {/* Right Side - Three Cards */}
        <div className="w-[1279px] h-[568px] space-y-6 pt-2">
          {/* Card 1: Tons of Build Options */}
          <div className="w-[898px] h-[160px] rounded-2xl border border-[rgba(25,159,236,0.30)] overflow-hidden">
            <div className="flex h-full">
              {/* Visual Element - Flowchart */}
              <div
                className="w-[280px] h-[160px] bg-center bg-cover"
                style={{
                  backgroundImage: "url(/lp/lore1.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              {/* Text Content */}
              <div className="flex-1 h-[160px] p-6 bg-[#072231]">
                <h3 className="text-[18px] font-normal text-white mb-3">
                  Specialize in Anything
                </h3>
                <p className="text-[rgba(255,255,255,0.5)] w-[528px] text-[14px] leading-[20px]">
                  Earn skill ranks in everything from stealth and negotiations
                  to alchemy and basketweaving. Simply invest points into an
                  area of interest to raise your proficiency in it.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[898px] h-[180px] rounded-2xl border border-[rgba(25,159,236,0.30)] overflow-hidden">
            <div className="flex h-full">
              {/* Visual Element - Flowchart */}
              <div
                className="w-[280px] h-[180px] bg-center bg-cover"
                style={{
                  backgroundImage: "url(/lp/skills2.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              {/* Text Content */}
              <div className="flex-1 h-[180px] p-6 bg-[#072231]">
                <h3 className="text-[18px] font-normal text-white mb-3">
                  Negotiation-Based Challenges
                </h3>
                <p className="text-[rgba(255,255,255,0.5)] w-[528px] text-[14px] leading-[20px]">
                  Players are encouraged to lobby for bonuses based on
                  pertinent, synergistic skills. Have ranks in talking,
                  storytelling, and intimidation? Choose one skill to define
                  your overall approach to a challenge, and then explain how
                  your supplementary skills can help.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[898px] h-[180px] rounded-2xl border border-[rgba(25,159,236,0.30)] overflow-hidden">
            <div className="flex h-full">
              {/* Visual Element - Flowchart */}
              <div
                className="w-[280px] h-[180px] bg-center bg-cover"
                style={{
                  backgroundImage: "url(/lp/skills3.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              {/* Text Content */}
              <div className="flex-1 h-[180px] p-6 bg-[#072231]">
                <h3 className="text-[18px] font-normal text-white mb-3">
                  Robust Crafting and Performance Framework
                </h3>
                <p className="text-[rgba(255,255,255,0.5)] w-[528px] text-[14px] leading-[20px]">
                  Whether forging a sword to slay devils or performing for a Fae
                  Monarch, some moments deserve more than a basic skill check.
                  Anno Amagium’s Endeavor System brings high-stakes crafting and
                  performance to life with a risk-reward mechanic that makes
                  major efforts feel truly epic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Characters Section // Versão Mobile */}
      <div className="px-6 pt-20 flex flex-col w-full md:hidden">
        <h2 className="pb-4 text-[18px] leading-6 font-normal text-white">
          Skills
        </h2>

        {/* Card 1 */}
        <div className="flex flex-col w-full overflow-hidden md:hidden">
          <div className="flex flex-col h-full">
            <div className="w-full h-[160px] bg-[url('/lp/card-1-sk-mob.png')] rounded-2xl bg-center bg-cover bg-no-repeat"></div>
            <div className="flex pt-4 flex-col">
              <details className="group [&_summary::-webkit-details-marker]:hidden mb-7 group-open:mb-0">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="text-[16px] font-normal text-white">
                    Specialize in Anything
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
                    Earn skill ranks in everything from stealth and negotiations
                    to alchemy and basketweaving. Simply invest points into an
                    area of interest to raise your proficiency in it.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col w-full overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="w-full h-[160px] bg-[url('/lp/card-2-sk-mob.png')] rounded-2xl bg-center bg-cover bg-no-repeat"></div>
            <div className="flex pt-4 flex-col">
              <details className="group [&_summary::-webkit-details-marker]:hidden mb-7 group-open:mb-0">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="text-[16px] font-normal text-white">
                    Negotiation-Based Challenges
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
                    Players are encouraged to lobby for bonuses based on
                    pertinent, synergistic skills. Have ranks in talking,
                    storytelling, and intimidation? Choose one skill to define
                    your overall approach to a challenge, and then explain how
                    your supplementary skills can help.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col w-full overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="w-full h-[160px] bg-[url('/lp/card-3-sk-mob.png')] rounded-2xl bg-center bg-cover bg-no-repeat"></div>
            <div className="flex pt-4 flex-col">
              <details className="group [&_summary::-webkit-details-marker]:hidden mb-7 group-open:mb-0">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="max-w-[303px] text-[16px] font-normal text-white">
                    Robust Crafting and Performance Framework
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
                    Whether forging a sword to slay devils or performing for a
                    Fae Monarch, some moments deserve more than a basic skill
                    check. Anno Amagium’s Endeavor System brings high-stakes
                    crafting and performance to life with a risk-reward mechanic
                    that makes major efforts feel truly epic.
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
