import Image from 'next/image';
import Link from 'next/link';

const CardSections = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-4 py-6 items-center px-6">
      {/* Card Discord */}
      <div className="md:pt-20 relative w-full md:w-[632px] md:pb-12 h-[550px] md:h-[730px] rounded-2xl bg-surface-primary flex flex-col items-center justify-end md:justify-between p-6 overflow-hidden">
        <img
          src="/lp/CardSection/lines.png"
          alt=""
          className="absolute top-0 left-0 w-full h-auto z-0 pointer-events-none"
        />
        <Image
          src="/lp/CardSection/maskDiscord.png"
          alt="Discord"
          width={500}
          height={366}
          className="hidden md:block z-10 rounded-md mb-6 w-[90%] max-w-[400px] h-auto"
        />
        <Image
          src="/lp/CardSection/maskDiscord.png"
          alt="Discord"
          width={400}
          height={400}
          className="absolute md:hidden top-1 -right-6 w-[80%] flex items-start h-auto rounded-md"
        />
        <div className="flex flex-col items-center justify-center">
          <div className="text-[28px] leading-[36px]  tracking-[-1.12px] md:text-[44px] md:leading-[49px] md:text-center relative z-10">
            <h2 className="font-semibold text-white mb-2">
              Join the{' '}
              <span className="text-[#00B4FF]">ConQuesting community</span> on
              the Echelon Discord <br className="md:hidden" /> Server
            </h2>
          </div>
          <Link
            href="https://discord.gg/8vg87vZyfS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-nowrap mt-6 px-6 w-full md:w-[170px] py-2 h-12 rounded-full bg-[#00B4FF] text-white font-medium hover:bg-[#0094d4] transition relative z-10 text-[16px] md:text-base flex items-center justify-center"
          >
            Join community
          </Link>
        </div>
      </div>

      {/* Card Instagram */}
      <div className="md:pt-20 relative w-full md:w-[632px] md:pb-12 h-[550px] md:h-[730px] rounded-2xl bg-surface-primary flex flex-col items-center justify-end md:justify-between p-6 overflow-hidden">
        <img
          src="/lp/CardSection/lines.png"
          alt=""
          className="absolute top-0 left-0 w-full h-auto z-0 pointer-events-none"
        />
        <Image
          src="/lp/CardSection/maskCell.png"
          alt="Instagram"
          width={234}
          height={402}
          className="hidden md:block z-10 rounded-md mb-6 w-fit h-[400px]"
        />
        <Image
          src="/lp/CardSection/maskCell.png"
          alt="Instagram"
          width={200}
          height={200}
          className="absolute w-fit h-[300px] top-5 left-[27%] -translate-x-1/2 z-10 rounded-md md:hidden"
        />
        <div className="flex flex-col items-center justify-center">
          <div className="text-[28px] leading-[36px] tracking-[-1.12px] md:text-[44px] md:leading-[49px] md:text-center relative z-10">
            <h2 className="font-semibold text-white mb-2">
              Follow us on Instagram for{' '}
              <span className="text-[#00B4FF]">
                more loot <br className="md:hidden" />
                and quests!
              </span>
            </h2>
          </div>
          <Link
            href="https://www.instagram.com/gameonechelon/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-nowrap mt-6 px-6 w-full md:w-[170px] py-2 h-12 rounded-full bg-[#00B4FF] text-white font-medium hover:bg-[#0094d4] transition relative z-10 text-[16px] md:text-base flex items-center justify-center"
          >
            Follow us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardSections;
