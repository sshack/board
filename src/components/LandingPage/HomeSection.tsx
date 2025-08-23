"use client";
import Image from "next/image";
import React from "react";

const HomeSection: React.FC = () => {
  const scrollToSubscribe = () => {
    const el = document.getElementById("subscribe-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/*Versão Desktop*/}
      <section className="hidden w-full bg-cover bg-center bg-[url('/lp/homeSectionBg.png')] bg-gray-900 text-white md:flex flex-col gap-8 relative overflow-hidden max-w-[1440px]">
        <div className=" flex flex-row items-center justify-between w-full gap-8">
          <div className="w-full space-y-8 text-left z-20 px-6 md:px-20 mt-[236px]">
            <h1 className="text-[60px] md:text-[124px] leading-[56px] lg:leading-[108px] font-bold tracking-[-2px] lg:tracking-[-7.44px]">
              Game. On.
              <br className="hidden md:block" /> Echelon.
            </h1>
            <p className="text-[18px] lg:text-[20px] leading-[28px] pb-[54px] font-medium tracking-[-0.8px] w-full md:max-w-xl">
              A platform for online/hybrid (digitally augmented) tabletop gaming
              and digitally publishing original RPG systems.
            </p>
          </div>
        </div>
        <div className="hidden md:block absolute -bottom-4 right-0 w-1/2">
          <Image
            src="/lp/DasdhbordGame.png"
            alt="Echelon Logo"
            width={2000}
            height={605}
            quality={100}
            className="h-auto max-h-[800px]"
          />
        </div>
        <div className="px-6 md:px-20 pb-6 z-20">
          <button
            onClick={scrollToSubscribe}
            className="bg-[#ffff] text-black text-[18px] px-8 py-3 rounded-full font-medium w-full md:w-[290px]"
          >
            Sign up for our mailing list
          </button>
        </div>

        <div className="pointer-events-none flex w-full h-8 md:h-28 absolute bottom-0 z-10 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/*Versão mobile*/}
      <section className="md:hidden relative w-full h-[780px] bg-cover bg-center bg-[url('/lp/fundo-mob-home.png')] text-white flex flex-col">
        <div className=" pt-32 flex flex-col w-full">
          <div className="w-full space-y-6 px-6">
            <h1 className="text-white font-semibold text-[60px] leading-[56px] tracking-[-3.6px]">
              Game. On. Echelon.
            </h1>
            <p className="text-white font-normal text-[20px] tracking-[-0.8px] leading-7">
              A platform for online/hybrid (digitally augmented) tabletop gaming
              and digitally publishing original RPG systems.
            </p>
          </div>
        </div>
        <div className="absolute left-1/2 w-full -translate-x-1/2 bottom-[59px]">
          <div className="flex items-center justify-center pt-[285px]">
            <button
              onClick={scrollToSubscribe}
              className="rounded-full flex bg-white text-black px-8 py-3"
            >
              Sign up for our mailing list
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
