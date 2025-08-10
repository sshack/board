import Image from 'next/image';
import React from 'react';
import Arrow from '../icons/arrow';

const HeroSection: React.FC = () => {
  return (
    <>
      <section
        className="w-full bg-cover bg-center bg-gray-900 text-white flex flex-col md:px-20 gap-8 pt-20 md:pt-36"
        style={{ backgroundImage: `url('/lp/fundoHeroSection.png')` }}
      >
        <div className="flex items-start z-0 justify-start flex-row gap-[12px] px-[40px]">
          <span className="text-[rgba(255,255,255,0.5)] text-16px font-normal">
            Home
          </span>
          <svg
            className="justify-center items-center text-center flex"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 12"
            fill="none"
          >
            <path
              d="M10.9764 10.0006L6.85156 5.87577L8.03008 4.69727L13.3334 10.0006L8.03008 15.3038L6.85156 14.1253L10.9764 10.0006Z"
              fill="white"
              fillOpacity="0.5"
            />
          </svg>
          <span className="text-[16px]">ConQuesting</span>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
          <div className="w-full md:w-2/3 space-y-4 text-left order-2 md:order-1">
            <h1 className="text-[48px] lg:text-[124px] leading-[56px] lg:leading-[108px] font-bold tracking-[-2px] lg:tracking-[-7.44px]">
              Start Your <br className="hidden md:block" /> ConQuest
            </h1>
            <p className="text-[18px] lg:text-[20px] leading-[28px] font-medium tracking-[-0.8px] w-full md:max-w-xl">
              ConQuesting is a free questing experience in the format of a
              cosplay-focused scavenger hunt. Instead of DragonCon normally,
              select your quests, save your places, and get your loot!
            </p>
            <div className="flex flex-wrap items-center gap-2 lg:gap-3 text-[18px] leading-[28px] font-medium">
              <span>Assemble your party</span>
              <Arrow />
              <span>Select your quests</span>
              <Arrow />
              <span>Save your spots</span>
              <Arrow />
              <span>Claim your loot</span>
            </div>
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
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-4 py-40 md:mt-0">
          <div className="flex flex-col items-start gap-4 order-2 md:order-1 w-full md:w-auto">
            <p className="text-2xl font-medium leading-10 tracking-tight">
              Claim Your First Reward Here
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
              <div
                className="relative w-full md:w-[416px] h-[268px] shrink-0 rounded-2xl border"
                style={{
                  borderColor:
                    'var(--Transparent-secondary-T2-30, rgba(25, 159, 236, 0.30))',
                }}
              >
                <div
                  className="flex h-full w-full rounded-2xl"
                  style={{
                    background:
                      'var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))',
                  }}
                >
                  <div className="flex flex-col justify-between p-6 flex-1 gap-4">
                    <p className="text-white text-lg font-medium leading-7">
                      Get the Epic Quest Tome — quest book packed with
                      adventures to choose from
                    </p>
                    <button className="btn w-fit">Download as PDF</button>
                  </div>

                  <div className="relative w-32 h-full rounded-r-2xl shrink-0">
                    <Image
                      src="/lp/poster.png"
                      alt="ConQuest Poster"
                      width={108}
                      height={132}
                      className="absolute inset-0 object-contain m-auto"
                    />
                  </div>
                </div>
              </div>
              <div
                className="relative w-full md:w-[416px] h-[268px] shrink-0 rounded-2xl border"
                style={{
                  borderColor:
                    'var(--Transparent-secondary-T2-30, rgba(25, 159, 236, 0.30))',
                }}
              >
                <div
                  className="flex h-full w-full rounded-2xl"
                  style={{
                    background:
                      'var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))',
                  }}
                >
                  <div className="flex flex-col justify-between p-6 flex-1 gap-4">
                    <p className="text-white text-lg font-medium leading-7">
                      Get the Epic Quest Tome — quest book packed with
                      adventures to choose from
                    </p>
                    <button className="btn w-fit">Download as PDF</button>
                  </div>

                  <div className="relative w-32 h-full  rounded-r-2xl shrink-0">
                    <Image
                      src="/lp/poster.png"
                      alt="ConQuest Poster"
                      width={108}
                      height={132}
                      className="absolute inset-0 object-contain m-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-4 order-1 md:order-2">
            <p className="text-2xl font-medium leading-10 tracking-tight">
              Useful Links
            </p>
            <div className="flex flex-col items-center justify-between w-full gap-3">
              <div className="relative h-[128px] w-full rounded-2xl p-[0.5px]">
                <div
                  className="relative flex flex-col justify-between h-full w-full rounded-2xl p-6"
                  style={{
                    background:
                      'var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))',
                  }}
                >
                  <p className="text-white text-sm font-medium leading-5 max-w-[50%] line-clamp-2">
                    Follow us on Instagram for more loot and quests!
                  </p>
                  <button className="btn w-fit">Follow</button>
                  <img
                    src="/lp/instagram.svg"
                    alt="Instagram"
                    className="absolute bottom-0 right-4 h-full w-auto"
                  />
                </div>
              </div>
              <div className="relative h-[128px] w-full rounded-2xl p-[0.5px]">
                <div
                  className="relative flex flex-col justify-between h-full w-full rounded-2xl p-6"
                  style={{
                    background:
                      'var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))',
                  }}
                >
                  <p className="text-white text-sm font-medium leading-5 max-w-[50%] line-clamp-2">
                    Join the ConQuesting community on the Echelon Discord Server
                  </p>
                  <button className="btn w-fit">Follow</button>
                  <img
                    src="/lp/discord.svg"
                    alt="Discord"
                    className="absolute bottom-0 right-4 h-full w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
