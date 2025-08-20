import Image from "next/image";
import Link from "next/link";
import Arrow from "../icons/arrow";

export default function DragonCon({}) {
  return (
    <>
      {/*Versão Desktop*/}
      <div className="hidden md:flex px-6 w-full md:p-20 justify-center items-center">
        <div className="relative rounded-xl w-full md:w-[1280px] h-full md:h-[496px] bg-[url('/lp/bgDragonConMobile.png')] md:bg-[url('/lp/bgDragonConDesktop.png')] bg-cover">
          <div className="pt-[200px] md:p-10 md:pt-10 z-40 h-full">
            <div className="hidden md:flex items-start justify-start flex-row mb-10 md:mb-0">
              <p className="text-[#199FEC] text-16px font-normal">
                Begin your adventure here!
              </p>
            </div>
            <div className="flex flex-col md:flex-col items-start justify-between w-full ">
              <div className="w-full md:w-auto md:max-w-[536px] md:pt-32 text-left md:flex md:flex-col md:h-full md:justify-between">
                <div className="md:hidden mb-4 md:mb-0">
                  <p className="text-[#199FEC] text-16px font-normal">
                    Begin your adventure here!
                  </p>
                </div>
                <h1 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[48px] md:mb-5 font-semibold tracking-[-1.12px] md:tracking-[-1.76px] text-white">
                  Welcome DragonCon 2025
                </h1>
                {/* Mobile copy */}
                <p className="text-[14px] text-white lg:text-[20px] leading-[28px] font-medium tracking-[-0.8px] w-full pb-6 md:hidden">
                  ConQuesting is a free live questing experience in the form of
                  a cosplay-focused photo-scavenger hunt. It is held in Atlanta
                  at DragonCon annually. Select your quests, snap your pics, and
                  get your loot!
                </p>
                {/* Desktop copy */}
                <p className="hidden md:block text-[16px] leading-6 font-normal tracking-[-0.64px] w-full mb-4">
                  ConQuesting is a free live questing experience in the form of
                  a cosplay-focused photo-scavenger hunt. It is held in Atlanta
                  at DragonCon annually. Select your quests, snap your pics, and
                  get your loot!
                </p>
              </div>
              <div className="hidden md:flex items-center text-[14px] leading-[28px] font-medium">
                <span className="inline-flex items-center">
                  Assemble your party
                </span>
                <span className="inline-flex items-center justify-center mx-3 lg:mx-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    className="w-2 h-2 shrink-0"
                  >
                    <path
                      d="M7.5 3.22427C8.16667 3.56904 8.16667 4.43096 7.5 4.77573L1.5 7.87866C0.833334 8.22343 6.63909e-07 7.79247 5.6647e-07 7.10293L1.33333 4L-3.10479e-07 0.897075C-4.07918e-07 0.207535 0.833333 -0.223427 1.5 0.121343L7.5 3.22427Z"
                      fill="#199FEC"
                    />
                  </svg>
                </span>
                <span className="inline-flex items-center">
                  Select your quests
                </span>
                <span className="inline-flex items-center justify-center mx-3 lg:mx-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    className="w-2 h-2 shrink-0"
                  >
                    <path
                      d="M7.5 3.22427C8.16667 3.56904 8.16667 4.43096 7.5 4.77573L1.5 7.87866C0.833334 8.22343 6.63909e-07 7.79247 5.6647e-07 7.10293L1.33333 4L-3.10479e-07 0.897075C-4.07918e-07 0.207535 0.833333 -0.223427 1.5 0.121343L7.5 3.22427Z"
                      fill="#199FEC"
                    />
                  </svg>
                </span>
                <span className="inline-flex items-center">
                  Save your spots
                </span>
                <span className="inline-flex items-center justify-center mx-3 lg:mx-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    className="w-2 h-2 shrink-0"
                  >
                    <path
                      d="M7.5 3.22427C8.16667 3.56904 8.16667 4.43096 7.5 4.77573L1.5 7.87866C0.833334 8.22343 6.63909e-07 7.79247 5.6647e-07 7.10293L1.33333 4L-3.10479e-07 0.897075C-4.07918e-07 0.207535 0.833333 -0.223427 1.5 0.121343L7.5 3.22427Z"
                      fill="#199FEC"
                    />
                  </svg>
                </span>
                <span className="inline-flex items-center">
                  Claim your loot
                </span>
              </div>
              <Link
                href="/conquesting"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#199FEC] text-white text-[18px] px-6 md:px-6 py-3 rounded-full font-normal w-full md:w-[200px] mt-10 md:my-10 "
              >
                Go Conquesting
              </Link>
            </div>
          </div>
          <div className="absolute left-5 top-8 md:left-auto md:top-1/2 -translate-y-1/2 translate-x-[872px] w-[180px] h-[180px]">
            <div className="relative w-full h-full">
              <Image
                src="/lp/conquesting-logo.png"
                alt="Conquesting Logo"
                fill
                sizes="(max-width: 768px) 128px, 180px"
                className="object-contain items-center justify-center"
              />
            </div>
          </div>
        </div>
      </div>
      {/*Versão Mobile*/}
      <div className="w-full px-6 md:p-20 flex justify-center items-center md:hidden">
        <div className="relative rounded-xl w-full md:w-[1280px] h-full md:h-[496px] bg-[url('/lp/bgDragonConMobile.png')] md:bg-[url('/lp/bgDragonConDesktop.png')] bg-cover">
          <div className="p-6 pt-[200px] md:p-10 md:pt-10 z-40 h-full">
            <div className="hidden md:flex items-start justify-start flex-row mb-10">
              <p className="text-[#199FEC] text-16px font-normal">
                Begin your adventure here!
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between w-full">
              <div className="w-full md:w-auto md:max-w-[580px] space-y-3 text-left order-2 md:order-1 md:flex md:flex-col md:h-full md:justify-between">
                <div className="md:hidden mb-5">
                  <p className="text-[#199FEC] text-[14px] md:text-[16px] font-normal">
                    Begin your adventure here!
                  </p>
                </div>
                <h1 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[48px] lg:leading-[60px] font-semibold tracking-[-1.12px] md:tracking-[-1.76px] text-white">
                  Welcome
                  <br className="md:hidden" />
                  <span className="md:hidden"> </span>DragonCon 2025
                </h1>
                {/* Mobile copy */}
                <p className="text-[14px] leading-5 font-normal w-full pb-5 md:hidden">
                  ConQuesting is a cosplay-focused photo-scavenger hunt where
                  you earn free rewards by tracking down cosplays from your
                  favorite fandoms. Prizes include badge ribbons, pins, and
                  digital TTRPG rulebooks.
                </p>
                {/* Desktop copy */}
                <p className="hidden md:block text-[18px] lg:text-[20px] leading-[28px] font-medium tracking-[-0.8px] w-full md:max-w-xl pb-6 md:pb-0">
                  ConQuesting is a free live questing experience in the form of
                  a cosplay-focused photo-scavenger hunt. It is held in Atlanta
                  at DragonCon annually. Select your quests, snap your pics, and
                  get your loot!
                </p>

                <div className="hidden md:flex flex-wrap items-center gap-x-3 gap-y-2 text-[18px] leading-[28px] font-medium w-full">
                  <span className="inline-flex items-center whitespace-nowrap">
                    Assemble your party
                    <Arrow className="mx-2" />
                  </span>
                  <span className="inline-flex items-center whitespace-nowrap">
                    Select your quests
                    <Arrow className="mx-2" />
                  </span>
                  <span className="inline-flex items-center whitespace-nowrap">
                    Save your spots
                    <Arrow className="mx-2" />
                  </span>
                  <span className="inline-flex items-center whitespace-nowrap">
                    Claim your loot
                  </span>
                </div>
                {/*Button Mobile*/}
                <div className="flex w-full md:hidden">
                  <Link
                    href="/conquesting"
                    rel="noopener noreferrer"
                    className="bg-[#199FEC] rounded-full w-full text-center px-6 py-3 text-[16px] leading-6"
                  >
                    Go ConQuesting
                  </Link>
                </div>

                {/*Button Desktop*/}
                <Link
                  href="/conquesting"
                  rel="noopener noreferrer"
                  className="hidden bg-[#199FEC] w-full md:block text-white text-[18px] px-6 md:px-6 py-3 rounded-full md:font-medium md:w-[200px] md:mt-4"
                >
                  Go ConQuesting
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute left-5 top-8 md:left-auto md:right-0 md:top-1/2 md:-translate-y-1/2 w-[128px] h-[128px] md:w-[180px] md:h-[180px]">
            <div className="relative w-full h-full">
              <Image
                src="/lp/conquesting-logo.png"
                alt="Conquesting Logo"
                fill
                sizes="(max-width: 768px) 128px, 180px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
