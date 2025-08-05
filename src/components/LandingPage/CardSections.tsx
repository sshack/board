import Image from 'next/image';

const CardSections = () => {
  return (
    <div className="flex flex-row justify-center gap-4 py-10 items-center">
      <div className="relative w-[632px] h-[730px] rounded-2xl bg-surface-primary flex flex-col items-center justify-center text-center p-6 overflow-hidden">
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
          className="relative z-10 rounded-md mb-6"
        />
        <div className="text-[44px] leading-[49px]">
          <h2 className="font-semibold text-white mb-2">
            Join the{' '}
            <span className="text-[#00B4FF]">ConQuesting community</span> on the
            Echelon Discord Server
          </h2>
        </div>
        <button className="mt-6 px-6 py-2 rounded-full bg-[#00B4FF] text-white font-medium hover:bg-[#0094d4] transition">
          Join community
        </button>
      </div>

      <div className="relative w-[632px] h-[730px] rounded-2xl bg-surface-primary flex flex-col items-center justify-center text-center p-6 overflow-hidden">
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
          className="relative z-10 rounded-md mb-6"
        />
        <div className="text-[44px] leading-[48px]">
          <h2 className="font-semibold text-white mb-2">
            Follow us on Instagram for{' '}
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

export default CardSections;
