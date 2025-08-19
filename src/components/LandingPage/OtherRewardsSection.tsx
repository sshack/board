import React from "react";

const OtherRewardsSection: React.FC = () => {
  return (
    <section className="w-full text-white px-4 py-12 md:py-0">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-[72px] mx-auto">
        <div className="flex flex-col max-w-[576px] flex-1 space-y-4 md:space-y-6">
          <div>
            <h2 className="text-white font-semibold font-['Inter'] text-[40px] leading-[44px] tracking-[-1.6px] md:text-[44px] md:leading-[48px] md:tracking-[-1.76px]">
              What are the{" "}
              <span className="text-[#199FEC]">other possible rewards?</span>
            </h2>
          </div>
          <div>
            <p className="text-white font-normal font-['Inter'] text-[16px] leading-[24px] md:text-[18px] md:leading-[28px]">
              The greatest kind of rewards. Books of sorcery and adventure.
              Gaming grimoires. Digital copies of TTRPG rulebooks—yours to keep,
              free of charge. Don’t believe us? Consider the following a down
              payment for your heroic deeds…
            </p>
          </div>
        </div>

        <div
          className="p-[1px] rounded-[12px] w-full md:w-[634px] mt-8 md:mt-0"
          style={{
            background:
              "linear-gradient(300deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)",
          }}
        >
          <div
            className="relative w-full h-[326px] rounded-[12px] border bg-black overflow-hidden"
            style={{
              borderColor:
                "var(--Transparent-secondary-T2-30, rgba(25, 159, 236, 0.30))",
            }}
          >
            <div className="flex h-full w-full rounded-[12px] bg-[url('/lp/get-core-img.png')] bg-cover">
              <div className="flex flex-col justify-between p-8 w-full h-full">
                <div className="flex flex-col items-start justify-between h-full">
                  <h3 className="text-white font-normal text-[32px] mb-4">
                    Anno Amagium:
                    <br />
                    The RPG - Core Rules
                  </h3>
                  <button className="bg-[#199FEC] text-white text-[16px] px-6 py-2 rounded-full font-semibold">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherRewardsSection;
