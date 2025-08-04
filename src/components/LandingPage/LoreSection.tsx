export default function LoreSection() {
  return (
    <>
      {/* Characters Section */}
      <div className="pb-20 flex flex-col lg:flex-row gap-8 left-0">
        {/* Left Side - Characters Heading */}
        <div className="lg:w-1/4">
          <h2 className="text-[24px] leading-[40px] font-normal text-white mb-8">
            Lore
          </h2>
        </div>

        {/* Right Side - Three Cards */}
        <div className="w-[1279px] h-[648px] space-y-6 pt-2">
          {/* Card 1: Tons of Build Options */}
          <div className="w-[898px] h-[200px] rounded-2xl border border-[rgba(25,159,236,0.30)] overflow-hidden">
            <div className="flex h-full">
              {/* Visual Element - Flowchart */}
              <div
                className="w-[280px] h-[200px] bg-center bg-cover"
                style={{
                  backgroundImage: "url(/lp/lore1.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              {/* Text Content */}
              <div className="flex-1 h-[200px] p-6 bg-[#072231]">
                <h3 className="text-[18px] font-normal text-white mb-3">
                  A Completely Fresh Yet Comfortably Familiar World of Magic
                </h3>
                <p className="text-[rgba(255,255,255,0.5)] w-[528px] text-[14px] leading-[20px]">
                  In Anno Amagium, everyone—children, elders, geniuses, and even
                  the mentally infirm—can cast spells to varying degrees. Magic
                  touches every object, tradition, and institution, drawing from
                  real-world lore and original worldbuilding. Yet the world’s
                  history mirrors real-world events and cultural touchstones,
                  offering newcomers a familiar foundation within a richly
                  magical setting.
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
                  backgroundImage: "url(/lp/lore2.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              {/* Text Content */}
              <div className="flex-1 h-[180px] p-6 bg-[#072231]">
                <h3 className="text-[18px] font-normal text-white mb-3">
                  3 Distinct Settings (to Start)
                </h3>
                <p className="text-[rgba(255,255,255,0.5)] w-[528px] text-[14px] leading-[20px]">
                  Take on global stakes as you explore the multi-tired
                  metropolis of New Amsterdam, defend the remote reaches of the
                  Republic of Texas in Dalhart, or uncover the sinister enigmas
                  of Arroyo, a wealthy suburb of Los Angeles. Each backdrop
                  boasts its own tone, storytelling opportunities, and regional
                  secrets.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[898px] h-[220px] rounded-2xl border border-[rgba(25,159,236,0.30)] overflow-hidden">
            <div className="flex h-full">
              {/* Visual Element - Flowchart */}
              <div
                className="w-[280px] h-[220px] bg-center bg-cover"
                style={{
                  backgroundImage: "url(/lp/lore3.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              {/* Text Content */}
              <div className="flex-1 h-[220px] p-6 bg-[#072231]">
                <h3 className="text-[18px] font-normal text-white mb-3">
                  Urban Fantasy Themes Meet Magipunk Tech
                </h3>
                <p className="text-[rgba(255,255,255,0.5)] w-[528px] text-[14px] leading-[20px]">
                  Step into the role of an amagiate peacekeeper—a hybrid
                  detective, monster hunter, and supernatural law enforcement
                  officer in an open fantasy universe where magic is
                  meticulously legislated and moderated through the use of
                  inhibitor tattoos and magic licenses. Deputize law-abiding
                  asfalis citizens who get caught up in larger-than-life
                  adventures, or cut desperate deals with criminal hedge-witches
                  to crack your case.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
