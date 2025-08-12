import React from 'react';

const OtherRewardsSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white px-4 py-12">
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 max-w-[1200px] mx-auto">
        {/* Texto à esquerda */}
        <div className="flex flex-col space-y-6 max-w-[576px] flex-1">
          <div>
            <h2 className="text-[44px] md:text-4xl font-bold">
              What are the{' '}
              <span className="text-blue-500">other possible rewards</span>?
            </h2>
          </div>
          <div>
            <p className="text-[19px] text-white">
              The greatest kind of rewards. Books of sorcery and adventure.
              Gaming grimoires. Digital copies of TTRPG rulebooks—yours to keep,
              free of charge. Don’t believe us? Consider the following a down
              payment for your heroic deeds…
            </p>
          </div>
        </div>
        {/* Bloco azul à direita */}
        <div
          className="h-[326px] w-full md:w-[634px] flex rounded-[12px] mt-8 md:mt-0 overflow-hidden"
          style={{
            background:
              'linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%)',
          }}
        >
          {/* Conteúdo do bloco azul, se houver */}
          <div className="flex flex-col justify-between p-8 w-full">
            <div>
              <h3 className="text-white font-normal text-[32px] mb-4">
                Anno Amagium:
                <br />
                The RPG - Core Rules
              </h3>
              <button className="bg-[#199FEC] text-white text-[16px] px-6 py-2 rounded-full font-semibold">
                Download
              </button>
            </div>
            <img
              src="/lp/poster.png"
              alt="Anno Amagium Book"
              className="w-[140px] bottom-0 right-0 md:static md:w-[191px] md:h-[233px] md:ml-auto md:mr-0 self-end"
              style={{ transform: 'rotate(-20deg)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherRewardsSection;
