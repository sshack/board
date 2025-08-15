import Image from "next/image";
import Link from "next/link";
import { Navigate } from "react-big-calendar";

export default function ConQuestingCard({}) {
  return (
    <>
      <div className="px-6 w-full md:p-20 flex justify-center items-center">
        <div className="relative rounded-xl w-full md:w-[1280px] h-full md:h-[496px] bg-[url('/lp/bgDragonConMobile.png')] md:bg-[url('/lp/bgDragonConDesktop.png')] bg-cover">
          <div className="p-6 pt-[200px] md:p-10 md:pt-10 z-40 h-full">
            <div className="hidden md:flex items-start justify-start flex-row mb-10">
              <p className="text-[#199FEC] text-16px font-normal">
                Begin your adventure here!
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between w-full ">
              <div className="w-full md:w-auto md:max-w-[580px] space-y-4 text-left order-2 md:order-1 md:flex md:flex-col md:h-full md:justify-between">
                <div className="md:hidden mb-4">
                  <p className="text-[#199FEC] text-16px font-normal">
                    Begin your adventure here!
                  </p>
                </div>
                <h1 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[48px] lg:leading-[60px] font-semibold tracking-[-1.12px] md:tracking-[-1.76px] text-white">
                  ConQuesting
                </h1>
                {/* Mobile copy */}
                <p className="text-[14px] lg:text-[20px] leading-[28px] font-medium tracking-[-0.8px] w-full pb-6 md:hidden">
                  ConQuesting is a cosplay-focused photo-scavenger hunt where
                  you earn free rewards by tracking down cosplays from your
                  favorite fandoms. Prizes include badge ribbons, pins, and
                  digital TTRPG rulebooks.
                </p>
                {/* Desktop copy */}
                <p className="hidden md:block text-[18px] lg:text-[20px] leading-[28px] font-medium tracking-[-0.8px] w-full md:max-w-xl pb-6 md:pb-0">
                  ConQuesting is a cosplay-focused photo-scavenger hunt where
                  you earn free rewards by tracking down cosplays from your
                  favorite fandoms. Prizes include badge ribbons, pins, and
                  digital TTRPG rulebooks.
                </p>
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
                  className="bg-[#199FEC] text-white text-[18px] px-6 md:px-6 py-3 rounded-full font-medium w-full md:w-[200px] mt-10 md:mt-4
"
                >
                  Go Conquesting 123123
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
      <div className="w-full h-full mt-10 bottom-0 bg-[#FC5212] md:hidden">
        <div className="p-3 text-[16px] text-white font-normal leading-6 flex flex-col text-center items-center justify-center h-full">
          <p>
            Introducing Our New Game <br />
            Beta Begins Q4 2025
          </p>
        </div>
      </div>
    </>
  );
}
