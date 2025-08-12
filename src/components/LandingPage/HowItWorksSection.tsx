import React from 'react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="w-full bg-cover bg-center flex flex-col items-center justify-center gap-0 md:gap-8 relative overflow-hidden max-w-[1440px] px-6 md:px-0">
      <div className="flex flex-col space-y-2 items-center">
        <h2 className="text-[56px] md:text-4xl font-bold text-center leading-[64px]">
          How Does This Work?
        </h2>
        <p className="text-center text-[#199FEC] text-[18px] leading-[28px]">
          ConQuesting is easy. Follow these three steps.
        </p>
      </div>

      <div className="flex flex-col space-y-4 items-center w-full rounded-2xl">
        <div className="flex flex-col md:flex-row justify-between items-stretch overflow-hidden w-full max-w-[1064px] rounded-2xl border border-[#199fec4d] bg-[#199fec26]">
          <div className="h-[200px] md:h-[440px] w-full md:w-[50%] flex justify-center items-center bg-[url('/lp/mapMobile.png')] md:bg-[url('/lp/map.png')] bg-contain md:bg-cover bg-top md:bg-center bg-no-repeat"></div>

          <div className="md:h-[440px] w-full md:w-[50%] flex flex-col justify-end md:justify-center items-start p-8">
            <h3 className="text-white text-[44px] font-bold mb-2 leading-tight">
              Receive a Mystery <br /> Quest Scroll
            </h3>
            <p className="text-[rgba(255,255,255,0.5)] mb-6">
              Or select a fan-specific quest from our Epic Quest Tome
            </p>
            <button className="bg-[#199FEC] text-white text-[16px] px-6 py-3 rounded-full font-semibold w-full md:w-auto whitespace-nowrap">
              Download Epic Quest Tome
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4 items-center">
        <div className="flex flex-col md:flex-row justify-between items-stretch w-full max-w-[1064px]">
          {/* Bloco da direita */}
          <div className="h-[440px] w-full md:w-[50%] flex flex-col justify-center items-start p-8 bg-[#199fec26]">
            <h3 className="text-white text-[44px] font-bold mb-2 leading-tight">
              Complete your quest
            </h3>
            <p className="text-[rgba(255,255,255,0.5)] text-base mb-6 leading-[28px]">
              Usually by snapping a picture of a specific cosplayer—with their
              consent, of course
            </p>
          </div>
          {/* Bloco da esquerda */}
          <div className="h-[440px] w-full md:w-[50%] flex justify-center items-center bg-[url('/lp/map2.png')] bg-cover bg-center"></div>
        </div>
      </div>

      <div className="flex flex-col space-y-4 items-center">
        <div className="flex flex-col md:flex-row justify-between items-stretch w-full max-w-[1064px]">
          {/* Bloco da esquerda */}
          <div className="h-[440px] w-full md:w-[50%] flex justify-center items-center bg-[url('/lp/map3.png')] bg-cover bg-center"></div>
          {/* Bloco da direita */}
          <div
            className="h-[440px] w-full md:w-[50%] flex flex-col justify-center items-start bg-transparent p-8"
            style={{ background: 'rgba(25, 159, 236, 0.15)' }}
          >
            <h3 className="text-white text-[40px] font-bold mb-2 leading-tight">
              Return to the Quest Giver to claim your badge ribbons...{' '}
              <span className="text-[#199FEC]">and other possible rewards</span>
            </h3>
            <p className="text-[rgba(255,255,255,0.5)] text-base mb-6 leading-[28px]">
              Where we go from there is up to you. We can part ways. The story
              ends. You wake up in your bed and believe… whatever you want to
              believe. Or you stay in wonderland, and we show you how deep this
              rabbit hole goes…
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
