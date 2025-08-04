type CharactersSectionProps = {
  className?: string;
};

export default function CharactersSection({
  className,
}: CharactersSectionProps) {
  return (
    <>
      {/* Characters Section */}
      <div className="pb-40 flex flex-col lg:flex-row gap-8 left-0">
        {/* Left Side - Characters Heading */}
        <div className="lg:w-1/4">
          <h2 className="text-[24px] leading-[40px] font-normal text-white mb-8">
            Characters
          </h2>
        </div>

        {/* Right Side - Three Cards */}
        <div className="w-[1279px] h-[516px] space-y-6 pt-2">
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
                  backgroundImage: "url(/lp/heroics-from-the-get-go-img.png)",
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
    </>
  );
}
