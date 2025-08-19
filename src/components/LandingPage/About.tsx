import React from "react";

export default function About() {
  return (
    <div className="bg-black md:bg-[url(/lp/About/fundoSectionTeam.png)] bg-cover bg-no-repeat bg-center w-full min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-6 py-16 mt-20 relative z-10">
        {/* Top Section - Echelon */}
        <div className="md:text-center mb-24 md:mb-[140px]">
          <h1 className="w-[327px] md:w-full text-[40px] leading-[48px] md:text-[56px] font-semibold text-white mb-4 md:leading-[64px] font-sans">
            Curious about Echelon? <br /> We're happy to{" "}
            <br className="md:hidden" />
            chat. Email us at <br />
            <span className="text-[#FC5212]">
              {" "}
              info@gameonech <br className="md:hidden " />
              elon.com
            </span>
          </h1>
        </div>

        {/* Bottom Section - ToWhitVentures */}
        <div className="w-full h-[627px] md:w-[1280px] md:h-[448px] mx-auto flex">
          <div className="relative bg-[url(/lp/About/aboutMob002.png)] md:bg-[url(/lp/About/want-to-work-with-echelon-bg.png)] bg-right flex rounded-2xl p-8 md:p-12 shadow-2xl w-full h-full overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 md:items-center md:justify-center w-full h-full">
              {/* Left Side - Text Content */}
              <div className="md:space-y-12">
                <p className="text-[#199FEC] text-sm md:text-[16px]">
                  Want to work with us?
                </p>
                <h2 className="pt-10 md:pt-0 leading-9 text-[28px] md:text-4xl md:leading-[48px] font-semibold text-white font-sans">
                  Check Out <br /> ToWhitVentures.com
                </h2>
                <p className="pt-2 md:pt-0 w-[279px] text-[14px] md:w-[400px] leading-[20px] font-sans text-[rgba(255,255,255,0.5)]">
                  A game development and publishing company with a primary focus
                  on digital adaptations and augmentations of Table Top
                  Role-Playing Games (TTRPGs).
                </p>
                <button className="hidden md:block bg-white text-black px-6 py-3 rounded-full text-[16px]">
                  Visit ToWhitVentures Website
                </button>
                <div className="pt-10 py-6 md:hidden">
                  <button className=" bg-white text-black px-6 py-3 rounded-full text-[16px]">
                    Visit ToWhitVentures Website
                  </button>
                </div>
              </div>

              <div className="w-full h-[211px] absolute bottom-6 bg-right bg-[url('/lp/About/aboutMob001.png')] bg-no-repeat right-0 md:hidden"></div>

              <div className="hidden md:block md:bg-[url(/lp/About/towhitventures-img.png)] bg-cover bg-center bg-no-repeat relative w-[536px] h-[322px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
