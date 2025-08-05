import Image from 'next/image';
import Header from './Header';

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

export default function CreateExp() {
  return (
    <>
      <section className="w-[1440px]">
        <div className="w-full h-[1000px] bg-[url('/lp/bgroleplay.png')] bg-cover bg-center mb-20 overflow-hidden relative">
          <div className="w-full min-h-screen">
            <div className="w-full mx-auto px-8 flex flex-col items-center">
              {/* Main Statement */}
              <div className="text-center mb-12 pt-10">
                <h1 className="text-white text-[56px] font-normal leading-[64px]">
                  We create experiences
                  <br />
                  that redefine the ways people game
                  <br />
                  with each other IRL and online.
                </h1>
              </div>
              <div className="bg-[url('/lp/roleplay.png')] w-[1200px] h-[650px] items-center flex bg-cover"></div>
            </div>
          </div>

          {/* Gradiente do transparente para o preto */}
          <div
            className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 1) 100%)',
            }}
          ></div>
        </div>
        <div className="w-full p-10 flex justify-center items-center">
          <div className="rounded-xl w-[1280px] h-[496px] bg-[url('/lp/fundoHeroSection.png')] bg-[background-position:center_90%] bg-cover ">
            <div className="p-2 px-10">
              <div className="flex items-start justify-start flex-row mb-10">
                <p className="text-[#199FEC] text-[16px] font-normal">
                  Begin your adventure here!
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between w-full ">
                <div className="w-full md:w-2/3 space-y-8 text-left order-2 md:order-1">
                  <h1 className="text-[44px]  leading-[48px] lg:leading-[108px] font-semibold tracking-[-1.76px]">
                    ConQuesting
                  </h1>
                  <p className="text-[16px] lg:text-[20px] leading-[28px] font-normal tracking-[-0.8px] w-full md:max-w-xl">
                    ConQuesting is a free live questing experience in the form
                    of a cosplay-focused photo-scavenger hunt. It is held in
                    Atlanta at DragonCon annually. Select your quests, snap your
                    pics, and get your loot!
                  </p>
                  <div className="flex flex-wrap items-center gap-2 lg:gap-3 text-[14px] leading-[28px] font-normal ">
                    <span>Assemble your party</span>
                    <Arrow />
                    <span>Select your quests</span>
                    <Arrow />
                    <span>Save your spots</span>
                    <Arrow />
                    <span>Claim your loot</span>
                  </div>

                  <button className="bg-[#199FEC] text-white text-[18px] px-6 py-3 rounded-full font-medium">
                    ConQuesting
                  </button>
                </div>

                <div className="w-full md:w-1/3 flex justify-center items-start order-1 md:order-2">
                  <Image
                    src="/lp/conquesting-logo.png"
                    alt="Conquesting Logo"
                    width={180}
                    height={180}
                    className="shrink-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
