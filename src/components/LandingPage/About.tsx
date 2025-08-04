import React from "react";

export default function About() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(/lp/fundoSectionTeam.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 py-16 mt-20 relative z-10">
        {/* Top Section - Echelon */}
        <div className="text-center mb-64">
          <h1 className="text-[56px] md:text-6xl font-semibold text-white mb-4 leading-[64px] font-sans">
            Curious about Echelon? <br /> We're happy to chat. Email us at{" "}
            <br />
            <span className="text-[#FC5212]"> info@gameonechelon.com</span>
          </h1>
        </div>

        {/* Bottom Section - ToWhitVentures */}
        <div className="w-[1280px] h-[448px] mx-auto flex">
          <div
            className="flex rounded-2xl p-8 md:p-12 shadow-2xl w-full h-full"
            style={{
              backgroundImage: `url(/lp/want-to-work-with-echelon-bg.png)`,
            }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center justify-center w-full h-full">
              {/* Left Side - Text Content */}
              <div className="space-y-12">
                <p className="text-[#199FEC] text-[16px]">
                  Want to work with us?
                </p>
                <h2 className="text-[44px] md:text-4xl leading-[48px] font-semibold text-white font-sans">
                  Check Out <br /> ToWhitVentures.com
                </h2>
                <p className="text-[14px] w-[400px] leading-[20px] font-sans text-[rgba(255,255,255,0.5)]">
                  A game development and publishing company with a primary focus
                  on digital adaptations and augmentations of Table Top
                  Role-Playing Games (TTRPGs).
                </p>
                <button className="bg-white text-black px-8 py-3 rounded-full text-[16px]">
                  Visit ToWhitVentures Website
                </button>
              </div>

              <div
                className="relative w-[536px] h-[322px]"
                style={{
                  backgroundImage: `url(/lp/towhitventures-website-img.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
