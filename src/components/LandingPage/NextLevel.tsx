import Image from "next/image";

const Arrow: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    className="shrink-0 fill-[#199FEC]"
  >
    <path d="M7.5 3.22427C8.16667 3.56904 8.16667 4.43096 7.5 4.77573L1.5 7.87866C0.833334 8.22343 6.63909e-07 7.79247 5.6647e-07 7.10293L1.33333 4L-3.10479e-07 0.897075C-4.07918e-07 0.207535 0.833333 -0.223427 1.5 0.121343L7.5 3.22427Z" />
  </svg>
);

export default function NextLevel({}) {
  return (
    <section className="mt-48 bg-black">
      <div className="flex flex-col  items-center justify-center w-full gap-1">
        <h1 className="text-white text-[56px] leading-[64px] font-semibold tracking-[-2.4px] mb-4">
          {" "}
          Next-Level Features
        </h1>

        <p className="text-[16px] leading-[24px] font-normal text-[#199FEC]">
          The next chapter of Echelon is already being written{" "}
          <a className="cursor-auto text-white ">
            {" "}
            — here’s a glimpse into what’s to come.
          </a>
        </p>
      </div>

      <div className="w-full flex flex-col items-center justify-start mt-20">
        <div className="flex flex-col items-center justify-center gap-6 w-full">
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 w-full">
            <div className="flex flex-col items-center justify-center gap-3 px-4">
              <div
                className="w-[525px] h-[320] flex items-center justify-center rounded-2xl mx-auto"
                style={{ backgroundColor: "rgb(4 25 36)" }}
              >
                <div className="flex flex-row gap-1 items-center justify-center">
                  <div className="flex flex-col gap-1  p-7">
                    <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-semibold">
                      Flexible Pricing
                    </h1>
                    <p className="text-[rgba(255,255,255,0.5)] text-[14px] leading-[22px]">
                      We are still working on price points, but we plan on using
                      a Seat-based system. We hope to launch with a F2P option
                      providing limited storage and accommodating small
                      sessions. Basic subscribers will enjoy increased storage
                      and can join any campaign. Professional subscribers can
                      host seats for up to 8 player characters simultaneously.
                    </p>
                  </div>

                  <div
                    className="h-full w-48 flex items-center justify-center"
                    style={{
                      backgroundImage: "url('/lp/Money.png')",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div
                      style={{ backgroundImage: "url('/lp/Money.png')" }}
                      className="h-[320px] w-[200px]"
                    />
                  </div>
                </div>
              </div>

              <div
                className="w-[525] h-[240px] flex items-center justify-center rounded-lg"
                style={{ backgroundColor: "rgb(4 25 36)" }}
              >
                <div className="flex flex-row items-center justify-center">
                  <div className="flex flex-col gap-2 p-7">
                    <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-normal">
                      Platform Wide Achievements
                    </h1>
                    <p className="text-[14px] text-[rgba(255,255,255,0.5)] leading-[20px]">
                      Show off your stats with platform-wide achievements and
                      game-specific achievements later on.
                    </p>
                  </div>

                  <div className="h-full w-[280px] flex items-end justify-end">
                    <div
                      style={{
                        backgroundImage: "url('/lp/achievements.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      className="w-[280px] h-[240px]"
                    />
                  </div>
                </div>
              </div>

              <div
                className="w-[525px] h-[360px] flex flex-col justify-center rounded-lg md:mt-0 mt-0 mx-auto p-7"
                style={{ backgroundColor: "rgb(4 25 36)" }}
              >
                <h1 className="text-[20px] leading-[20px] tracking-[-0.8px] font-normal pb-2">
                  An Expanding Catalog of Bespoke TTRPGS
                </h1>
                <p className="text-[rgba(255,255,255,0.5)] leading-[20px] text-[14px]">
                  A meticulously developed high fantasy follow-up to Anno
                  Amagium is already waiting in the wings and we are just
                  getting started. Got a game of your own? Let's talk!
                </p>

                <div className="flex flex-row gap-4">
                  <div
                    className="w-[143px] h-[172px] opacity-70 mt-[28px]"
                    style={{
                      backgroundImage: "url('/lp/CardHero1.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div
                    className="w-[143px] h-[172px] opacity-50 mt-[28px]"
                    style={{
                      backgroundImage: "url('/lp/CardHero1.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div
                    className="w-[143px] h-[172px] opacity-70 mt-[28px]"
                    style={{
                      backgroundImage: "url('/lp/CardHero1.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Outro lado  */}

            <div className="flex flex-col items-center justify-center gap-3 px-4">
              <div
                className="w-[522px] h-[468px] flex items-start justify-start rounded-lg mx-auto"
                style={{ backgroundColor: "rgb(4 25 36)" }}
              >
                <div className="flex flex-col gap-4 items-start justify-start w-full h-full ">
                  <div className="flex flex-row gap-1 justify-start w-full p-12">
                    <div className="flex flex-col gap-2">
                      <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-semibold">
                        Play Fully Remotely or In-Person with Digital Elements
                      </h1>
                      <p className="text-[rgba(255,255,255,0.5)] leading-[22px]">
                        Join a campaign that match your taste and schedule. GMs
                        set content, scope, and timing when creating campaigns,
                        and Echelon’s filters help you discover the perfect
                        fit—whether it’s a quick one-shot or an ongoing epic.
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex justify-end">
                    <Image
                      src="/lp/compaign.png"
                      alt="Remote"
                      width={360}
                      height={400}
                      quality={100}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div
                className="w-[522px] h-[488px] flex items-start justify-start rounded-lg mx-auto"
                style={{ backgroundColor: "rgb(4 25 36)" }}
              >
                <div className="flex flex-col gap-4 items-start justify-start w-full h-full ">
                  <div className="flex flex-row gap-1 justify-start w-full p-12">
                    <div className="flex flex-col gap-2">
                      <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-semibold">
                        Creator Marketplace
                      </h1>
                      <p className="text-[rgba(255,255,255,0.5)] leading-[22px]">
                        Do you like homebrews? Us too. Ever wished there was an
                        easy way to monetize your ferret-kin drunken fist
                        pyromancer? Whether you are a cartographer, a portrait
                        artist, a campaign author, mechanical theory-crafter, or
                        an all-in-one GM, it is our goal to support you.{" "}
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex justify-end">
                    <Image
                      src="/lp/marketplace.png"
                      alt="Marketplace"
                      width={500}
                      height={400}
                      quality={100}
                      className="object-contain w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
