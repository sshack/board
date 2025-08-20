type CharactersSectionProps = {
  className?: string;
};

export default function CharactersSection({
  className,
}: CharactersSectionProps) {
  return (
    <>
      {/* Characters Section // Versão Desktop */}
      <div className="hidden md:flex pb-20 flex-col lg:flex-row left-0">
        {/* Left Side - Characters Heading */}
        <div className="">
          <h2 className="text-[24px] leading-[40px] font-normal text-white mb-8">
            Characters
          </h2>
        </div>

        {/* Right Side - Three Cards */}
        <div className="w-[1279px] h-[528px] space-y-6 pt-2 flex flex-col justify-end items-end">
          {/* Card 1: Tons of Build Options */}
          <div className="w-[898px] h-[160px] rounded-2xl border border-[rgba(25,159,236,0.30)] overflow-hidden">
            <div className="flex h-full">
              {/* Visual Element - Flowchart */}
              <div
                className="w-[280px] h-[160px] bg-center bg-cover"
                style={{
                  backgroundImage: "url(/lp/tons-of-build-options-img.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              {/* Text Content */}
              <div className="flex-1 h-[160px] p-6 bg-[#072231]">
                <h3 className="text-[18px] font-normal text-white mb-3">
                  Tons of Build Options
                </h3>
                <p className="text-[rgba(255,255,255,0.5)] w-[528px] text-[14px] leading-[20px]">
                  Create a character that reflects your identity and playstyle.
                  Choose from 11 backgrounds, 200+ curricula, 100 traits, 24
                  ability refinements, and 41 weapon types—at launch, with more
                  added regularly.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[898px] h-[160px] rounded-2xl border border-[rgba(25,159,236,0.30)] overflow-hidden">
            <div className="flex h-full">
              {/* Visual Element - Flowchart */}
              <div
                className="w-[280px] h-[160px] bg-center bg-cover"
                style={{
                  backgroundImage: "url(/lp/heroics-from-the-get-go-img.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              {/* Text Content */}
              <div className="flex-1 h-[160px] p-6 bg-[#072231]">
                <h3 className="text-[18px] font-normal text-white mb-3">
                  Heroics from the Get-Go
                </h3>
                <p className="text-[rgba(255,255,255,0.5)] w-[528px] text-[14px] leading-[20px]">
                  Forget killing rats in a basement. A Level
                  1 Anno Amagium character is comparable to a Level 5 character
                  in most other TTRPGs, ensuring you can reach meaningful stakes
                  and take on serious challenges right out of the gate.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[898px] h-[160px] rounded-2xl border border-[rgba(25,159,236,0.30)] overflow-hidden">
            <div className="flex h-full">
              {/* Visual Element - Flowchart */}
              <div
                className="w-[280px] h-[160px] bg-center bg-cover"
                style={{
                  backgroundImage: "url(/lp/modular-character.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              {/* Text Content */}
              <div className="flex-1 h-[160px] p-6 bg-[#072231]">
                <h3 className="text-[18px] font-normal text-white mb-3">
                  Modular Character Growth with Meaningful Milestones
                </h3>
                <p className="text-[rgba(255,255,255,0.5)] w-[528px] text-[14px] leading-[20px]">
                  Most “classless” game systems sacrifice satisfying power
                  surges in favor of incremental improvement. Anno Amagium is
                  built with both incremental growth and major level-ups in
                  mind. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Characters Section // Versão Mobile */}
      <div className="px-6 flex flex-col w-full md:hidden">
        <h2 className="pb-4 text-[18px] leading-6 font-normal text-white">
          Characters
        </h2>

        {/* Card 1 */}
        <div className="flex flex-col w-full overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="w-full h-[160px] bg-[url('/lp/card-1-cha-mob.png')] rounded-2xl bg-center bg-cover bg-no-repeat"></div>
            <div className="flex pt-4 flex-col">
              <details className="group [&_summary::-webkit-details-marker]:hidden mb-7 group-open:mb-0">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="text-[16px] font-normal text-white">
                    Tons of Build Options
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

        {/* Card 2 */}
        <div className="flex flex-col w-full overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="w-full h-[160px] bg-[url('/lp/card-2-cha-mob.png')] rounded-2xl bg-center bg-cover bg-no-repeat"></div>
            <div className="flex pt-4 flex-col">
              <details className="group [&_summary::-webkit-details-marker]:hidden mb-7 group-open:mb-0">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="text-[16px] font-normal text-white">
                    Heroics from the Get-Go
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
                    Forget killing rats in a basement. A Level
                    1 Anno Amagium character is comparable to a Level 5
                    character in most other TTRPGs, ensuring you can reach
                    meaningful stakes and take on serious challenges right out
                    of the gate.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col w-full overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="w-full h-[160px] bg-[url('/lp/card-3-cha-mob.png')] rounded-2xl bg-center bg-cover bg-no-repeat"></div>
            <div className="flex pt-4 flex-col">
              <details className="group [&_summary::-webkit-details-marker]:hidden mb-7 group-open:mb-0">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="max-w-[303px] text-[16px] font-normal text-white">
                    Modular Character Growth with Meaningful Milestones
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
                    Most “classless” game systems sacrifice satisfying power
                    surges in favor of incremental improvement. Anno Amagium is
                    built with both incremental growth and major level-ups in
                    mind. 
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
