import Image from 'next/image';
import Link from 'next/link';
import Arrow from '../icons/arrow';

export default function DragonCon({}) {
  return (
    <div className="w-full px-6 md:p-20 flex justify-center items-center">
      <div className="relative rounded-xl w-full md:w-[1280px] h-full md:h-[496px] bg-[url('/lp/bgDragonConMobile.png')] md:bg-[url('/lp/bgDragonConDesktop.png')] bg-cover">
        <div className="p-6 pt-[200px] md:p-10 md:pt-10 z-40 h-full">
          <div className="hidden md:flex items-start justify-start flex-row mb-10">
            <p className="text-[#199FEC] text-16px font-normal">
              Begin your adventure here!
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="w-full md:w-auto md:max-w-[580px] space-y-4 text-left order-2 md:order-1 md:flex md:flex-col md:h-full md:justify-between">
              <div className="md:hidden mb-4">
                <p className="text-[#199FEC] text-16px font-normal">
                  Begin your adventure here!
                </p>
              </div>
              <h1 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[48px] lg:leading-[60px] font-semibold tracking-[-1.12px] md:tracking-[-1.76px] text-white">
                Welcome
                <br className="md:hidden" />
                <span className="md:hidden"> </span>DragonCon 2025
              </h1>
              {/* Mobile copy */}
              <p className="text-[18px] lg:text-[20px] leading-[28px] font-medium tracking-[-0.8px] w-full pb-6 md:hidden">
                ConQuesting is a cosplay-focused photo-scavenger hunt where you
                earn free rewards by tracking down cosplays from your favorite
                fandoms. Prizes include badge ribbons, pins, and digital TTRPG
                rulebooks.
              </p>
              {/* Desktop copy */}
              <p className="hidden md:block text-[18px] lg:text-[20px] leading-[28px] font-medium tracking-[-0.8px] w-full md:max-w-xl pb-6 md:pb-0">
                ConQuesting is a free live questing experience in the form of a
                cosplay-focused photo-scavenger hunt. It is held in Atlanta at
                DragonCon annually. Select your quests, snap your pics, and get
                your loot!
              </p>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[18px] leading-[28px] font-medium w-full">
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

              <Link
                href="/conquesting"
                rel="noopener noreferrer"
                className="bg-[#199FEC] text-white text-[18px] px-6 md:px-6 py-3 rounded-full font-medium w-full md:w-[200px] mt-10 md:mt-4"
              >
                Go Conquesting
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
  );
}
