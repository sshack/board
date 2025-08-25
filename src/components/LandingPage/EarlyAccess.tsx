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

export default function EarlyAccess({}) {
  return (
    <section className="w-full bg-cover bg-center flex flex-col items-center justify-center gap-0 md:gap-8 relative overflow-hidden max-w-[1440px] my-[60px] px-6 md:px-0">
      <div className="flex flex-col items-start md:items-center justify-center w-full">
        <p className="md:hidden inline-flex items-center justify-center px-3 py-1 rounded-full bg-[var(--Secondary-S500,#199FEC)] text-white text-[16px] leading-none font-semibold self-start shadow-sm mb-4">
          Beta
        </p>

        <div className="relative flex">
          <p className="text-white text-[40px] leading-[48px] tracking-[-1.6px] md:text-[56px]  md:leading-[64px] font-semibold md:tracking-[-2.4px] text-left md:text-center mb-[28px]">
            Early Access Features
          </p>
          <span className="absolute top-1 -right-6 hidden md:inline-flex items-center justify-center px-3 py-1 rounded-full bg-[var(--Secondary-S500,#199FEC)] text-white text-[16px] leading-none font-semibold shadow-sm transform rotate-6">
            Beta
          </span>
        </div>

        {/*Versão Desktop*/}
        <div className="hidden md:flex flex-wrap items-center gap-2 lg:gap-3 text-[14px] leading-[20px] font-normal self-start md:self-center text-left md:text-center mb-2">
          <span className="text-[#199FEC]">Free Seems Fair</span>
          <Arrow />
          <span>
            Betas are for figuring things out, and not everything will work
            correctly.{" "}
          </span>
        </div>
        <p className="hidden md:flex text-[16px] leading-[24px] font-normal self-start md:self-center text-left md:text-center">
          You are doing us a favor by playing. We want to make our trial run as
          accessible as possible,{" "}
          <a className="cursor-auto text-[#199FEC]">
            {" "}
            so the first beta test will be 100% on us.
          </a>
        </p>

        {/*Versão Mobile*/}
        <div className="md:hidden">
          <p className="text-white text-[14px] leading-5">
            <span className="inline-flex items-center gap-2 align-middle">
              <span className="text-[#199FEC] font-medium">
                Free Seems Fair
              </span>
              <Arrow />
            </span>{" "}
            Betas are for figuring things out, and not everything will work
            correctly. You are doing us a favor by playing. We want to make our
            trial run as accessible as possible, so the first beta test will be
            100% on us.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-20 md:w-[1062px]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
          <div className="flex flex-col items-center justify-center gap-4 w-full md:flex-1">
            <div
              className="p-[1px] rounded-[20px] w-full"
              style={{
                background:
                  "linear-gradient(130deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)",
              }}
            >
              <div
                className="h-[420px] md:h-[370px] flex items-center justify-center rounded-[20px] md:mt-0 mt-0 mx-auto overflow-hidden"
                style={{ backgroundColor: "rgb(4 25 36)" }}
              >
                <div className="relative w-full h-full rounded-[20px]">
                  {/* Mobile/Small screens layout - image above text */}
                  <div className="md:hidden flex h-full w-full flex-col">
                    <div className="h-1/2 w-full bg-no-repeat bg-top bg-cover bg-[url(/lp/MapGameMobile.png)]" />
                    <div className="hidden sm:block h-[5%]" />
                    <div className="h-1/2 flex flex-col gap-2 p-5 justify-end">
                      <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-semibold">
                        The Depth of Crunch with Digital Convenience
                      </h1>
                      <p className="text-[rgba(255,255,255,0.5)] leading-[22px]">
                        Digital tools unlock new TTRPG features like Dynamic
                        Smart Character Sheets and streamline complex systems
                        with automated mechanics and digital maps.
                      </p>
                    </div>
                  </div>

                  {/* Desktop and up - keep original layout */}
                  <div className="hidden md:flex w-full h-full">
                    <div
                      className="flex flex-col bg-cover bg-center w-full h-full rounded-[20px] p-5 gap-2"
                      style={{
                        backgroundImage: "url('/lp/MapGame.png')",
                        backgroundSize: "contain",
                        backgroundPosition: "bottom",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-semibold">
                        The Depth of Crunch with Digital Convenience
                      </h1>
                      <p className="text-[rgba(255,255,255,0.5)] leading-[22px]">
                        Digital tools unlock new TTRPG features like Dynamic
                        Smart <br />
                        Character Sheets and streamline complex systems with
                        automated <br />
                        mechanics and digital maps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="p-[1px] rounded-[20px] w-full"
              style={{
                background:
                  "linear-gradient(300deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)",
              }}
            >
              <div
                className="flex items-center justify-center rounded-[20px] mx-auto overflow-hidden h-[350px] md:h-[262px]"
                style={{ backgroundColor: "rgb(4 25 36)" }}
              >
                <div className="flex items-center justify-center relative w-full h-full rounded-[20px]">
                  <div className="md:hidden flex h-full w-full flex-col">
                    <div className="h-1/2 w-full bg-no-repeat bg-top bg-cover bg-[url(/lp/NewPersonMobile.png)]" />
                    <div className="hidden sm:block h-[5%]" />
                    <div className="h-1/2 flex flex-col gap-2 p-5 justify-end">
                      <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-semibold">
                        Ever-Improving Experiences
                      </h1>
                      <p className="text-[rgba(255,255,255,0.5)] leading-[22px]">
                        We’ll expand our titles with free maps, campaign ideas,
                        and in-game content—including new illustrations, spell
                        icons, weapon art, and more.
                      </p>
                    </div>
                  </div>

                  {/* Desktop and up */}
                  <div className="hidden md:flex relative w-full md:h-auto md:bg-[url(/lp/NewPerson.png)] md:bg-no-repeat md:bg-right md:bg-[length:50%_auto] md:pr-[50%]">
                    <div className="flex flex-col gap-2 p-5 md:h-auto justify-center">
                      <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-semibold">
                        Ever-Improving Experiences
                      </h1>
                      <p className="text-[rgba(255,255,255,0.5)] leading-[22px]">
                        We’ll expand our titles with free maps, campaign ideas,
                        and in-game content—including new illustrations, spell
                        icons, weapon art, and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 w-full md:flex-1">
            <div
              className="p-[1px] rounded-[20px] w-full"
              style={{
                background:
                  "linear-gradient(45deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)",
              }}
            >
              <div
                className="flex items-center justify-center rounded-[20px] mx-auto overflow-hidden h-[350px] md:h-[316px]"
                style={{ backgroundColor: "rgb(4 25 36)" }}
              >
                <div className="flex items-center justify-center relative w-full h-full rounded-[20px]">
                  {/* Mobile/Small screens layout */}
                  <div className="md:hidden flex h-full w-full flex-col">
                    <div className="h-1/2 w-full bg-no-repeat bg-top bg-cover bg-[url(/lp/RemotelyMobile.png)]" />
                    <div className="hidden sm:block h-[5%]" />
                    <div className="h-1/2 flex flex-col gap-2 p-5 justify-end">
                      <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-normal">
                        Play Fully Remotely or In-Person with Digital Elements
                      </h1>
                      <p className="text-[rgba(255,255,255,0.5)] text-[14px] leading-[22px]">
                        Play remotely with a global community or gather in
                        person with real dice, miniatures, and your favorite
                        maps.
                      </p>
                    </div>
                  </div>

                  {/* Desktop and up */}
                  <div className="hidden h-full md:flex relative w-full md:h-full md:bg-[url(/lp/Remotely.png)] md:bg-no-repeat md:bg-right md:bg-[length:50%_auto] md:pr-[50%]">
                    <div className="flex flex-col gap-2 p-5 md:h-auto justify-center">
                      <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-semibold">
                        Play Fully Remotely or In-Person with Digital Elements
                      </h1>
                      <p className="text-[rgba(255,255,255,0.5)] leading-[22px]">
                        Play remotely with a global community or gather in
                        person with real dice, miniatures, and your favorite
                        maps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="p-[1px] rounded-[20px] w-full"
              style={{
                background:
                  "linear-gradient(210deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)",
              }}
            >
              <div
                className="flex items-center justify-center rounded-[20px] mx-auto overflow-hidden h-[450px] md:h-[316px]"
                style={{ backgroundColor: "rgb(4 25 36)" }}
              >
                <div className="flex items-center justify-center relative w-full h-full rounded-[20px]">
                  {/* Mobile/Small screens layout */}
                  <div className="md:hidden flex h-full w-full flex-col">
                    <div className="h-1/2 w-full bg-no-repeat bg-top bg-cover bg-[url(/lp/CreatorPartnershipMobile.png)]" />
                    <div className="hidden sm:block h-[5%]" />
                    <div className="h-1/2 flex flex-col gap-2 p-5 justify-end">
                      <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-semibold">
                        Commitment to Craftsmanship
                      </h1>
                      <p className="text-[rgba(255,255,255,0.5)] leading-[22px]">
                        Echelon vows to champion creators with our content from
                        art and authorship, to game design and user-experience
                        interfaces. We welcome our players to use any tools that
                        suit their needs, but our official content will always
                        be 100% handcrafted by real meatba—Err, humans.
                      </p>
                    </div>
                  </div>

                  {/* Desktop and up */}
                  <div className="hidden md:flex relative w-full md:h-auto md:bg-[url(/lp/CreatorPartnership.png)] md:bg-no-repeat md:bg-right md:bg-[length:33.333%_auto] md:pr-[33.333%]">
                    <div className="flex flex-col gap-2 p-5 md:h-auto justify-center">
                      <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-semibold">
                        Commitment to Craftsmanship
                      </h1>
                      <p className="text-[rgba(255,255,255,0.5)] leading-[22px]">
                        Echelon vows to champion creators with our content from
                        art and authorship, to game design and user-experience
                        interfaces. We welcome our players to use any tools that
                        suit their needs, but our official content will always
                        be 100% handcrafted by real meatba—Err, humans.
                      </p>
                    </div>
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
