import React from 'react';

const LegacySection: React.FC = () => {
  return (
    <section className="w-full text-white px-4 md:px-0 bg-cover py-16 flex flex-col items-center justify-center"
      style={{ backgroundImage: 'url(/lp/fundoLegacy.png)' }}
    >
      <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Title */}
        <div className="pr-16 first:w-[340px] py-40 flex-1 flex flex-col items-start md:items-start">
          <h2
            className="text-2xl md:text-[56px] font-bold mb-0 md:mb-0 text-left self-start leading-[1.05] tracking-normal md:tracking-tight ml-[-200px]"
            // Ajuste o valor de ml-[-24px] conforme necessário para alinhar mais à esquerda
          >
            ConQuesting&apos;s
            <br />
            Legacy
          </h2>
        </div>
        {/* Timeline */}
        <div className="py-40 flex-1 flex flex-col gap-16">
          {/* Item 1 */}
          <div className="flex flex-row items-start gap-6">
            <img
              src="/lp/legacy2.png"
              alt="Scrolls"
              className="w-[160px] h-[160px] rounded-lg bg-black object-cover"
            />
            <div className='w-[556px]'>
              <p className="text-[16px] text-[#A4A4B2] mb-2">
                We have held ConQuesting in Atlanta at DragonCon since 2016,
                aggressively innovating to ensure each year eclipses the preceding
                one.
              </p>
              <p className="text-[16px] text-[#A4A4B2] h-[112px] w-[550px]">
                Starting with randomized hand-rolled scrolls and candy pouches, we
                have since upgraded to digital tomes, added quest tiers of varying
                difficulty, repeat-completion rewards, and we did it all without
                losing anything along the way.
              </p>
            </div>
          </div>
          {/* Divider with dot */}
          <div className="flex items-center justify-center">
            <div className="flex-1 border-t border-dashed border-[#199FEC]"></div>
            <div className="w-3 h-3 bg-[#199FEC] rounded-full mx-4"></div>
            <div className="flex-1 border-t border-dashed border-[#199FEC]"></div>
          </div>
          {/* Item 2 */}
          <div className="flex flex-row items-start gap-6">
            <img
              src="/lp/legacy1.jpg"
              alt="Quest"
              className="w-[160px] h-[160px] rounded-lg object-cover"
            />
            <div className='w-[556px]'>
              <p className="text-[16px] text-[#A4A4B2] mb-2">
                This year we will be handing out 600 Mystery Quest Scrolls over the
                course of the con, each containing 1 of 200 distinct quests.
              </p>
              <p className="text-[16px] text-[#A4A4B2]  h-[112px] w-[550px]">
                If you prefer to take fate in your own hands, select an adventure
                from our ever-expanding Epic Quest Tome, boasting 100 pages of quests
                from the most prominent mainstays of popular culture to the nerdiest
                of niches. But speaking frankly, that’s all familiar territory for
                our seasoned veterans. Just more of the same.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-[740px]">
            <div className="flex-1 border-t border-dashed border-[#199FEC]"></div>
            <div className="w-3 h-3 bg-[#199FEC] rounded-full mx-4"></div>
            <div className="flex-1 border-t border-dashed border-[#199FEC]"></div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <p className="text-center text-white mt-5">
        <span className="text-white text">
          This year? The end of DragonCon is just the beginning…
        </span>
      </p>
    </section>
  );
};

export default LegacySection;
