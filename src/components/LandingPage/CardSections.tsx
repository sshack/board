import React from "react";
import Image from "next/image";

const CardSections = () => {
  return (
    <div className="flex flex-row justify-center gap-4 py-10 items-center">
      {/* Card 1 */}
      <div className="w-[632px] h-[730px] rounded-lg bg-[#011627] flex flex-col items-center justify-center text-center p-6 overflow-hidden">
        <Image
          src="/lp/maskDiscord.png"
          alt="Discord"
          width={450}
          height={366}
          className="rounded-md mb-6"
        />
        <div className="text-[44px] leading-[49px]">
          <h2 className="font-semibold text-white mb-2">
            Join the{" "}
            <span className="text-[#00B4FF]">ConQuesting community</span> on the
            Echelon Discord Server
          </h2>
        </div>
        <button className="mt-6 px-6 py-2 rounded-full bg-[#00B4FF] text-white font-medium hover:bg-[#0094d4] transition">
          Join community
        </button>
      </div>

      {/* Card 2 */}
      <div className="w-[632px] h-[730px] rounded-lg bg-[#011627] flex flex-col items-center justify-center text-center p-6">
        <Image
          src="/lp/maskCell.png"
          alt="Instagram"
          width={500}
          height={500}
          className="rounded-md mb-6"
        />
        <div className="text-[44px] leading-[48px]">
          <h2 className="font-semibold text-white mb-2">
            Follow us on Instagram for{" "}
            <span className="text-[#00B4FF]">more loot and quests!</span>
          </h2>
        </div>
        <button className="mt-6 px-6 py-2 rounded-full bg-[#00B4FF] text-white font-medium hover:bg-[#0094d4] transition">
          Follow Us
        </button>
      </div>
    </div>
  );
};
1;

export default CardSections;
