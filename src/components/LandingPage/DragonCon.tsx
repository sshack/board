import Image from 'next/image';
import Link from 'next/link';
import Arrow from '../icons/arrow';

export default function DragonCon({}) {
  return (
    <>
      {/*Versão Desktop*/}
      <div className="hidden lg:flex px-6 w-full lg:p-20 justify-center items-center">
        <div className="relative rounded-xl w-full lg:w-[1280px] h-full lg:h-[496px] bg-[url('/lp/bgDragonConMobile.png')] lg:bg-[url('/lp/bgDragonConDesktop.png')] bg-cover">
          <div className="pt-[200px] lg:p-10 lg:pt-10 z-40 h-full">
            <div className="hidden lg:flex items-start justify-start flex-row mb-10 lg:mb-0">
              <p className="text-[#199FEC] text-16px font-normal">
                Begin your adventure here!
              </p>
            </div>
            <div className="flex flex-col lg:flex-col items-start justify-between w-full ">
              <div className="w-full lg:w-auto lg:max-w-[536px] lg:pt-32 text-left lg:flex lg:flex-col lg:h-full lg:justify-between">
                <div className="lg:hidden mb-4 lg:mb-0">
                  <p className="text-[#199FEC] text-16px font-normal">
                    Begin your adventure here!
                  </p>
                </div>
                <h1 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-[48px] lg:mb-5 font-semibold tracking-[-1.12px] sm:tracking-[-1.3px] md:tracking-[-1.5px] lg:tracking-[-1.76px] text-white">
                  Welcome DragonCon 2025
                </h1>
                {/* Mobile copy */}
                <p className="text-[14px] text-white lg:text-[20px] leading-[28px] font-medium tracking-[-0.8px] w-full pb-6 lg:hidden">
                  ConQuesting is a free live questing experience in the form of
                  a cosplay-focused photo-scavenger hunt. It is held in Atlanta
                  at DragonCon annually. Select your quests, snap your pics, and
                  get your loot!
                </p>
                {/* Desktop copy */}
                <p className="hidden lg:block text-[16px] leading-6 font-normal tracking-[-0.64px] w-full mb-4">
                  ConQuesting is a free live questing experience in the form of
                  a cosplay-focused photo-scavenger hunt. It is held in Atlanta
                  at DragonCon annually. Select your quests, snap your pics, and
                  get your loot!
                </p>
              </div>
              <div className="hidden lg:flex items-center text-[14px] leading-[28px] font-medium">
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
                className="bg-[#199FEC] text-white text-[18px] px-6 lg:px-6 py-3 rounded-full font-normal w-full lg:w-[200px] mt-10 lg:my-10 "
              >
                Go Conquesting
              </Link>
            </div>
          </div>
          <div className="absolute left-5 top-8 lg:left-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-[872px] w-[180px] h-[180px]">
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
      <div className="w-full px-6 lg:p-20 flex justify-center items-center lg:hidden">
        <div className="relative rounded-xl w-full lg:w-[1280px] h-full lg:h-[496px] bg-[url('/lp/bgDragonConMobile.png')] lg:bg-[url('/lp/bgDragonConDesktop.png')] bg-cover">
          <div className="p-6 pt-[200px] lg:p-10 lg:pt-10 z-40 h-full">
            <div className="hidden lg:flex items-start justify-start flex-row mb-10">
              <p className="text-[#199FEC] text-16px font-normal">
                Begin your adventure here!
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between w-full">
              <div className="w-full lg:w-auto lg:max-w-[580px] space-y-3 text-left order-2 lg:order-1 lg:flex lg:flex-col lg:h-full lg:justify-between">
                <div className="lg:hidden mb-5">
                  <p className="text-[#199FEC] text-[14px] lg:text-[16px] font-normal">
                    Begin your adventure here!
                  </p>
                </div>
                <h1 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-[48px] xl:leading-[60px] font-semibold tracking-[-1.12px] sm:tracking-[-1.3px] md:tracking-[-1.5px] lg:tracking-[-1.76px] text-white">
                  Welcome
                  <br className="lg:hidden" />
                  <span className="lg:hidden"> </span>DragonCon 2025
                </h1>
                {/* Mobile copy */}
                <p className="text-[14px] leading-5 font-normal w-full pb-5 lg:hidden">
                  ConQuesting is a cosplay-focused photo-scavenger hunt where
                  you earn free rewards by tracking down cosplays from your
                  favorite fandoms. Prizes include badge ribbons, pins, and
                  digital TTRPG rulebooks.
                </p>
                {/* Desktop copy */}
                <p className="hidden lg:block text-[18px] lg:text-[20px] leading-[28px] font-medium tracking-[-0.8px] w-full lg:max-w-xl pb-6 lg:pb-0">
                  ConQuesting is a free live questing experience in the form of
                  a cosplay-focused photo-scavenger hunt. It is held in Atlanta
                  at DragonCon annually. Select your quests, snap your pics, and
                  get your loot!
                </p>

                <div className="hidden lg:flex flex-wrap items-center gap-x-3 gap-y-2 text-[18px] leading-[28px] font-medium w-full">
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
                <div className="flex w-full lg:hidden">
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
                  className="hidden bg-[#199FEC] w-full lg:block text-white text-[18px] px-6 lg:px-6 py-3 rounded-full lg:font-medium lg:w-[200px] lg:mt-4"
                >
                  Go ConQuesting
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute left-5 top-8 lg:left-auto lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-[128px] h-[128px] lg:w-[180px] lg:h-[180px]">
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
