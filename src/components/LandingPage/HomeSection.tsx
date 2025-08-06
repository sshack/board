import Image from 'next/image';
import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <>
      <section
        className="w-full bg-cover bg-center bg-gray-900 text-white flex flex-col gap-8 relative overflow-hidden pt-20 md:pt-36 max-w-[1440px]"
        style={{ backgroundImage: `url('/lp/fundoHeroSection.png')` }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
          <div className="w-full space-y-8 text-left z-20 px-6 md:px-8">
            <h1 className="text-[48px] lg:text-[124px] leading-[56px] lg:leading-[108px] font-bold tracking-[-2px] lg:tracking-[-7.44px]">
              Game. On.
              <br className="hidden md:block" /> Echelon.
            </h1>
            <p className="text-[18px] lg:text-[20px] leading-[28px] pb-10 font-medium tracking-[-0.8px] w-full md:max-w-xl">
              A platform for online/hybrid (digitally augmented) tabletop gaming
              and digitally publishing original RPG systems.
            </p>
          </div>

          <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 md:right-0 md:left-auto md:translate-x-0 w-full md:w-[500px] h-auto z-0">
            <Image
              src="/lp/DasdhbordGame.png"
              alt="Echelon Logo"
              width={1034}
              height={605}
              quality={100}
              className="h-auto max-h-[800px]"
            />
          </div>

          <div className="md:hidden w-full md:w-[500px] h-auto z-0 ml-10 relative">
            <Image
              src="/lp/DasdhbordGame.png"
              alt="Echelon Logo"
              width={1034}
              height={605}
              quality={100}
              className="h-auto max-h-[800px]"
            />
            <div className="pointer-events-none flex w-full h-20 absolute bottom-0 z-10 bg-gradient-to-t from-black to-transparent" />
          </div>
        </div>

        <div className="px-6 md:px-8 pb-6 z-20">
          <button className="bg-[#ffff] text-black text-[18px] px-8 py-3 rounded-full font-medium w-full md:w-[290px]">
            Sign up for our mailing list
          </button>
        </div>

        <div className="pointer-events-none flex w-full h-8 md:h-28 absolute bottom-0 z-10 bg-gradient-to-t from-black to-transparent" />
      </section>
    </>
  );
};

export default HomeSection;
