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
      <div className="flex flex-col items-start md:items-center justify-center w-full gap-4">
        <p className="md:hidden inline-flex items-center justify-center px-3 py-1 rounded-full bg-[var(--Secondary-S500,#199FEC)] text-white text-[16px] leading-none font-semibold self-start shadow-sm">
          Beta
        </p>

        <h1 className="text-white text-[56px] leading-[64px] font-semibold tracking-[-2.4px] mb-4 relative text-left md:text-center">
          Early Access Features
          <p
            className="hidden md:inline-flex absolute -right-6 top-1 items-center justify-center px-3 py-1 rounded-full bg-[var(--Secondary-S500,#199FEC)] text-white text-[16px] leading-none font-semibold z-10 shadow-sm"
            style={{ transform: 'rotate(14.367deg)' }}
          >
            Beta
          </p>
        </h1>

        <div className="flex flex-wrap items-center gap-2 lg:gap-3 text-[16px] leading-[24px] font-normal self-start md:self-center text-left md:text-center">
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
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center gap-4 w-full">
            <div
              className="p-[1px] rounded-[20px] w-full md:w-[522px] justify-self-stretch"
              style={{
                background:
                  'linear-gradient(130deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
              }}
            >
              <div
                className="rounded-[20px] md:mt-0 mt-0 mx-auto overflow-hidden h-full flex flex-col"
                style={{ backgroundColor: 'rgb(4 25 36)' }}
              >
                <div
                  className="w-full h-[248px] bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/lp/MapGame.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
                <div className="flex flex-col p-6 gap-2">
                  <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-semibold">
                    The Depth of Crunch with Digital Convenience
                  </h1>
                  <p className="text-[rgba(255,255,255,0.5)] leading-[22px]">
                    Digital tools unlock new TTRPG features like Dynamic Smart
                    Character Sheets and streamline complex systems with
                    automated mechanics and digital maps.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="p-[1px] rounded-[20px] w-full md:w-[522px]"
              style={{
                background:
                  'linear-gradient(45deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
              }}
            >
              <div
                className="rounded-[20px] mx-auto overflow-hidden h-full flex flex-col"
                style={{ backgroundColor: 'rgb(4 25 36)' }}
              >
                <div
                  className="w-full h-[248px] bg-cover bg-right bg-no-repeat"
                  style={{
                    backgroundImage: "url('/lp/Remotely.png')",
                  }}
                />
                <div className="flex flex-col p-6 gap-2">
                  <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-normal">
                    Play Fully Remotely or In-Person with Digital Elements
                  </h1>
                  <p className="text-[rgba(255,255,255,0.5)] text-[14px] leading-[22px]">
                    Play remotely with a global community or gather in person
                    with real dice, miniatures, and your favorite maps.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="p-[1px] rounded-[20px] w-full md:w-[522px] h-full"
              style={{
                background:
                  'linear-gradient(300deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
              }}
            >
              <div
                className="rounded-[20px] mx-auto overflow-hidden h-full flex flex-col"
                style={{ backgroundColor: 'rgb(4 25 36)' }}
              >
                <div className="w-full h-[248px] relative overflow-hidden">
                  <Image
                    src="/lp/NewPerson.png"
                    alt="New Person"
                    width={1200}
                    height={600}
                    quality={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col p-6 gap-2">
                  <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-semibold">
                    Ever-Improving Experiences
                  </h1>
                  <p className="text-[rgba(255,255,255,0.5)] leading-[22px]">
                    We’ll expand our titles with free maps, campaign ideas, and
                    in-game content— including new illustrations, spell icons,
                    weapon art, and more.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="p-[1px] rounded-[20px] w-full md:w-[522px] h-full bg-pink-700"
              // style={{
              //   background:
              //     'linear-gradient(210deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
              // }}
            >
              <div
                className="rounded-[20px] mx-auto overflow-hidden h-full flex flex-col"
                style={{ backgroundColor: 'rgb(4 25 36)' }}
              >
                <div className="w-full h-[248px] relative overflow-hidden">
                  <Image
                    src="/lp/CreatorPartnership.png"
                    alt="CreatorPartnership"
                    width={1200}
                    height={600}
                    quality={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col p-6 gap-2">
                  <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-semibold">
                    Commitment to Craftsmanship
                  </h1>
                  <p className="text-[rgba(255,255,255,0.5)] leading-[22px]">
                    Echelon vows to champion creators with our content from art
                    and authorship, to game design and user-experience
                    interfaces. We welcome our players to use any tools that
                    suit their needs, but our official content will always be
                    100% handcrafted by real meatba—Err, humans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
