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

export default function EarlyAccess({}) {
  return (
    <section className="bg-black">
      <div className="flex flex-col  items-center justify-center w-full gap-1">
        <h1 className="text-white text-[56px] leading-[64px] font-semibold tracking-[-2.4px] mb-4">
          {" "}
          Early Access Features
        </h1>

        <div className="flex flex-wrap items-center gap-2 lg:gap-3 text-[16px] leading-[24px] font-normal ">
          <span className="text-[#199FEC]">Assemble your party</span>
          <Arrow />
          <span>
            Betas are for figuring things out, and not everything will work
            correctly.{" "}
          </span>
        </div>
        <p className="text-[16px] leading-[24px] font-normal">
          You are doing us a favor by playing. We want to make our trial run as
          accessible as possible,{" "}
          <a className="cursor-auto text-[#199FEC]">
            {" "}
            so the first beta test will be 100% on us.
          </a>
        </p>
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-20">
        <div className="flex flex-col items-center justify-center gap-6 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
            <div className="flex flex-col items-center justify-center gap-3 px-4">
              <div
                className="w-[522px] h-[370px] flex items-center justify-center rounded-lg md:mt-0 mt-0 mx-auto"
                style={{ backgroundColor: "rgb(4 25 36)" }}
              >
                <div
                  className="flex flex-col  bg-cover bg-center w-full h-full rounded-lg p-5 gap-2 "
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
                    Digital tools unlock new TTRPG features like Dynamic Smart{" "}
                    <br />
                    Character Sheets and streamline complex systems with
                    automated <br />
                    mechanics and digital maps.
                  </p>
                </div>
              </div>

              <div
                className="w-[522px] h-[262px] flex items-center justify-center rounded-lg mx-auto"
                style={{ backgroundColor: "rgb(4 25 36)" }}
              >
                <div className="flex flex-row gap-1 items-center justify-center">
                  <div className="flex flex-col gap-2 p-5">
                    <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-semibold">
                      Ever-Improving Experiences
                    </h1>
                    <p className="text-[rgba(255,255,255,0.5)] leading-[22px]">
                      We’ll expand our titles with free maps, campaign ideas,
                      and in-game content—including new illustrations, spell
                      icons, weapon art, and more.
                    </p>
                  </div>

                  <div>
                    <Image
                      src="/lp/NewPerson.png"
                      alt="New Person"
                      width={1400}
                      height={1400}
                      quality={100}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 px-4">
              <div
                className="w-[522px] h-[316px] flex items-center justify-center rounded-lg mx-auto"
                style={{ backgroundColor: "rgb(4 25 36)" }}
              >
                <div className="flex flex-row gap-1 items-center justify-center">
                  <div className="flex flex-col gap-2 p-5">
                    <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-semibold">
                      Play Fully Remotely or In-Person with Digital Elements
                    </h1>
                    <p className="text-[rgba(255,255,255,0.5)] leading-[22px]">
                      Play remotely with a global community or gather in person
                      with real dice, miniatures, and your favorite maps.
                    </p>
                  </div>

                  <div>
                    <Image
                      src="/lp/Remotely.png"
                      alt="Remote"
                      width={1200}
                      height={1200}
                      quality={100}
                      className="object-cover"
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
