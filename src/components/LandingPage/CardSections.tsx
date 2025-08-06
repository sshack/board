import Image from "next/image";

const CardSections = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-4 py-6 items-center px-4">
      {/* Card Discord */}
      <div className="md:pt-20 relative w-full md:w-[632px] md:pb-12 h-auto md:h-[730px] rounded-2xl bg-surface-primary flex flex-col items-center justify-between p-6 overflow-hidden">
        <img
          src="/lp/lines.png"
          alt=""
          className="absolute top-0 left-0 w-full h-auto z-0 pointer-events-none"
        />
        <Image
          src="/lp/maskDiscord.png"
          alt="Discord"
          width={450}
          height={366}
          className="relative z-10 rounded-md mb-6 w-[90%] max-w-[400px] h-auto"
        />
        <div className="flex flex-col items-center justify-center">
          <div className="text-[28px] leading-[32px] md:text-[44px] md:leading-[49px] md:text-center relative z-10">
            <h2 className="font-semibold text-white mb-2">
              Join the{" "}
              <span className="text-[#00B4FF]">ConQuesting community</span> on
              the Echelon Discord <br className="md:hidden" /> Server
            </h2>
          </div>
          <button className="text-nowrap mt-6 px-6 w-full md:w-[170px] py-2 h-12 rounded-full bg-[#00B4FF] text-white font-medium hover:bg-[#0094d4] transition relative z-10 text-[16px] md:text-base">
            Join community
          </button>
        </div>
      </div>

      {/* Card Instagram */}
      <div className="relative w-full md:w-[632px] h-auto md:h-[730px] rounded-2xl bg-surface-primary flex flex-col md:pt-20 md:items-center md:justify-between p-6 md:pb-12 overflow-hidden">
        <img
          src="/lp/lines.png"
          alt=""
          className="absolute top-0 left-0 w-full h-auto z-0 pointer-events-none"
        />
        <Image
          src="/lp/maskCell.png"
          alt="Instagram"
          width={500}
          height={500}
          className="relative z-10 rounded-md mb-6 w-[90%] max-w-[400px] h-auto items-center justify-center"
        />
        <div className="flex flex-col items-center justify-center">
          <div className="text-[28px] leading-[32px] md:text-[44px] md:leading-[48px] md:text-center relative z-10">
            <h2 className="font-semibold text-white mb-2">
              Follow us on <br /> Instagram for{" "}
              <span className="text-[#00B4FF]">
                more <br className="md:hidden" />
                loot <br className="hidden md:block" />
                and quests!
              </span>
            </h2>
          </div>
          <button className="mt-6 px-6 w-full md:w-[170px] py-2 h-12 rounded-full bg-[#00B4FF] text-white font-medium hover:bg-[#0094d4] transition relative z-10 text-[16px] md:text-base">
            Follow us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSections;
