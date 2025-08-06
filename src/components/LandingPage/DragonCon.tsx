import Image from 'next/image';
import Arrow from '../icons/arrow';

export default function DragonCon({}) {
  return (
    <div className="w-full md:p-20 flex justify-center items-center">
      <div className="rounded-xl w-full md:w-[1280px] h-full md:h-[496px] bg-[url('/lp/fundoHeroSection.png')] bg-[background-position:center_90%] bg-cover ">
        <div className="p-6 md:p-10">
          <div className="hidden md:flex items-start justify-start flex-row mb-10">
            <p className="text-[#199FEC] text-16px font-normal">
              Begin your adventure here!
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between w-full ">
            <div className="w-full md:w-2/3 space-y-4 text-left order-2 md:order-1">
              <div className="md:hidden mb-4">
                <p className="text-[#199FEC] text-16px font-normal">
                  Begin your adventure here!
                </p>
              </div>
              <h1 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[48px] lg:leading-[108px] font-semibold tracking-[-1.12px] md:tracking-[-1.76px] text-white">
                Welcome
                <br className="md:hidden" />
                <span className="md:hidden"> </span>DragonCon 2025
              </h1>
              <p className="text-[18px] lg:text-[20px] leading-[28px] font-medium tracking-[-0.8px] w-full md:max-w-xl pb-6 md:pb-0">
                ConQuesting is a free live questing experience in the form of a
                cosplay-focused photo-scavenger hunt. It is held in Atlanta at
                DragonCon annually. Select your quests, snap your pics, and get
                your loot!
              </p>
              <div className="hidden md:flex flex-wrap items-center gap-2 lg:gap-3 text-[14px] leading-[28px] font-medium ">
                <span>Assemble your party</span>
                <Arrow />
                <span>Select your quests</span>
                <Arrow />
                <span>Save your spots</span>
                <Arrow />
                <span>Claim your loot</span>
              </div>

              <button className="bg-[#199FEC] text-white text-[18px] px-6 md:px-6 py-3 rounded-full font-medium w-full md:w-auto mt-10 md:mt-4">
                ConQuesting
              </button>
            </div>

            <div className="w-full md:w-1/3 flex justify-start md:justify-center items-start order-1 md:order-2 mb-6 md:mb-0">
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
  );
}
