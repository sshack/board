export default function LoreSection() {
  return (
    <>
      {/* Characters Section */}
      <div className="pb-20 flex flex-col lg:flex-row gap-8 left-0">
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
    </>
  );
}
