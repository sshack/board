import Image from "next/image";
import React from "react";
import Arrow from "../icons/arrow";
import Reward from "./Reward";

const HeroSection: React.FC = () => {
  return (
    <>
      {/*VERSÃO DESKTOP*/}
      <section
        className="hidden w-full bg-cover bg-center bg-gray-900 text-white md:flex flex-col md:px-20 gap-8 pt-20 md:pt-36"
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
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[18px] leading-[28px] font-medium">
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
      </section>

      {/*VERSÃO MOBILE*/}
      <section className="w-full h-[880px] bg-[url('/lp/fundoHeroSection-mob.png')] bg-cover bg-center bg-gray-900 text-white flex flex-col md:px-20 gap-8 pt-20 md:pt-36 md:hidden">
        <div className="flex items-start z-0 justify-start flex-row gap-3 px-6">
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
          <div className="w-full md:w-2/3 text-left order-2 px-[22px] pt-[39px]">
            <h1 className="text-[60px] lg:text-[124px] leading-[56px] lg:leading-[108px] font-bold tracking-[-2px] lg:tracking-[-7.44px]">
              Start Your <br className="hidden md:block" /> ConQuest
            </h1>
            <p className="text-[20px] leading-7 font-medium tracking-[-0.8px] w-full md:max-w-xl pt-6">
              ConQuesting is a cosplay-focused photo-scavenger hunt where you
              earn free rewards by tracking down cosplays from your favorite
              fandoms. Prizes include badge ribbons, pins, and digital TTRPG
              rulebooks.
            </p>
            <div className="pt-9 w-full flex flex-col items-start text-[16px] leading-6 font-normal">
              <div className="flex flex-col items-center gap-x-4 gap-y-2 w-full">
                <div className="flex">
                  <span className="inline-flex items-center whitespace-nowrap">
                    Assemble your party
                    <Arrow className="mx-2" />
                  </span>
                  <span className="inline-flex items-center whitespace-nowrap">
                    Select your quests
                    <Arrow className="mx-2" />
                  </span>
                </div>
                <div className="flex">
                  <span className="inline-flex items-center whitespace-nowrap">
                    Snap your pics
                    <Arrow className="mx-2" />
                  </span>
                  <span className="inline-flex items-center whitespace-nowrap">
                    Save your spots
                  </span>
                </div>
              </div>
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
      </section>
      <Reward />
    </>
  );
};

export default HeroSection;
