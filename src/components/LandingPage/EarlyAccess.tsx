import Image from 'next/image';

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
      <div className="flex flex-col items-start md:items-center justify-center w-full">
        {/* Mobile Beta (under md) */}
        <p className="md:hidden inline-flex items-center justify-center px-3 py-1 rounded-full bg-[var(--Secondary-S500,#199FEC)] text-white text-[16px] leading-none font-semibold self-start shadow-sm mb-4">
          Beta
        </p>

        {/* Desktop Beta (md and up) placed above heading, not tilted */}
        <p className="hidden md:inline-flex items-center justify-center px-3 py-1 rounded-full bg-[var(--Secondary-S500,#199FEC)] text-white text-[16px] leading-none font-semibold self-center shadow-sm mb-4">
          Beta
        </p>

        {/* Big text as a single <p> */}
        <p className="text-white text-[56px] leading-[64px] font-semibold tracking-[-2.4px] text-left md:text-center mb-[28px]">
          Early Access Features
        </p>

        <div className="flex flex-wrap items-center gap-2 lg:gap-3 text-[16px] leading-[24px] font-normal self-start md:self-center text-left md:text-center mb-2">
          <span className="text-[#199FEC]">Assemble your party</span>
          <Arrow />
          <span>
            Betas are for figuring things out, and not everything will work
            correctly.{' '}
          </span>
        </div>
        <p className="text-[16px] leading-[24px] font-normal self-start md:self-center text-left md:text-center">
          You are doing us a favor by playing. We want to make our trial run as
          accessible as possible,{' '}
          <a className="cursor-auto text-[#199FEC]">
            {' '}
            so the first beta test will be 100% on us.
          </a>
        </p>
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
          <div className="flex flex-col items-center justify-center gap-4">
            <div
              className="p-[1px] rounded-[20px] w-[522px]"
              style={{
                background:
                  'linear-gradient(130deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
              }}
            >
              <div
                className="h-[370px] flex items-center justify-center rounded-[20px] md:mt-0 mt-0 mx-auto"
                style={{ backgroundColor: 'rgb(4 25 36)' }}
              >
                <div
                  className="flex flex-col  bg-cover bg-center w-full h-full rounded-[20px] p-5 gap-2 "
                  style={{
                    backgroundImage: "url('/lp/MapGame.png')",
                    backgroundSize: 'contain',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-semibold">
                    The Depth of Crunch with Digital Convenience
                  </h1>
                  <p className="text-[rgba(255,255,255,0.5)] leading-[22px]">
                    Digital tools unlock new TTRPG features like Dynamic Smart{' '}
                    <br />
                    Character Sheets and streamline complex systems with
                    automated <br />
                    mechanics and digital maps.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="p-[1px] rounded-[20px] w-[522px]"
              style={{
                background:
                  'linear-gradient(300deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
              }}
            >
              <div
                className="h-[262px] flex items-center justify-center rounded-[20px] mx-auto"
                style={{ backgroundColor: 'rgb(4 25 36)' }}
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
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div
              className="p-[1px] rounded-[20px] w-[522px]"
              style={{
                background:
                  'linear-gradient(45deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
              }}
            >
              <div
                className="h-[316px] flex items-center justify-center rounded-[20px] mx-auto overflow-hidden"
                style={{ backgroundColor: 'rgb(4 25 36)' }}
              >
                <div className="flex flex-row gap-1 items-center justify-center w-full">
                  <div className="flex-1 min-w-0 flex flex-col p-7">
                    <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-normal">
                      Play Fully Remotely or In-Person with Digital Elements
                    </h1>
                    <p className="text-[rgba(255,255,255,0.5)] text-[14px] leading-[22px]">
                      Play remotely with a global community or gather in person
                      with real dice, miniatures, and your favorite maps.
                    </p>
                  </div>

                  <div
                    className="h-[316px] w-[240px] shrink-0 bg-cover bg-right bg-no-repeat"
                    style={{
                      backgroundImage: "url('/lp/Remotely.png')",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div
              className="p-[1px] rounded-[20px] w-[522px]"
              style={{
                background:
                  'linear-gradient(210deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
              }}
            >
              <div
                className="h-[316px] flex items-center justify-center rounded-[20px] mx-auto"
                style={{ backgroundColor: 'rgb(4 25 36)' }}
              >
                <div className="flex flex-row gap-4 items-center justify-center">
                  <div className="flex flex-col gap-3 p-5">
                    <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-semibold">
                      Commitment to Craftsmanship
                    </h1>
                    <p className="text-[rgba(255,255,255,0.5)] leading-[22px]">
                      Echelon vows to champion creators with our content from
                      art and authorship, to game design and user-experience
                      interfaces. We welcome our players to use any tools that
                      suit their needs, but our official content will always be
                      100% handcrafted by real meatba—Err, humans.
                    </p>
                  </div>

                  <div>
                    <Image
                      src="/lp/CreatorPartnership.png"
                      alt="CreatorPartnership"
                      width={1400}
                      height={1400}
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
