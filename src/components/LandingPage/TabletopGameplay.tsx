export default function TabletopGameplay({}) {
  return (
    <section className="w-full bg-cover bg-center flex flex-col items-center justify-center gap-0 md:gap-8 relative overflow-hidden max-w-[1440px] my-[60px]">
      <div className="flex items-center justify-center bg-[url(/lp/fundoSectionTeam.png)] bg-cover bg-no-repeat bg-center w-full min-h-screen relative overflow-hidden px-6 md:px-0">
        <div className="w-full max-w-[900px] mx-auto flex flex-col items-start md:items-center justify-center text-left md:text-center px-4">
          <h1 className="text-white text-[40px] md:text-[56px] leading-[48px] md:leading-[64px] font-semibold tracking-[-1.6px] md:tracking-[-2.24px] mb-6 md:mb-[68px] text-left md:text-center">
            Hybrid Tabletop Gameplay
          </h1>

          <p className="text-white text-[18px] md:text-[24px] leading-[24px] md:leading-[40px] font-medium tracking-[-0.72px] md:tracking-[-0.96px] text-left md:text-center">
            We bring the{' '}
            <span className="text-[var(--Secondary-S500,#199FEC)]">speed</span>{' '}
            and
            <span className="text-[var(--Secondary-S500,#199FEC)]">
              {' '}
              mechanical depth
            </span>{' '}
            of a video game to the
            <span className="text-[var(--Secondary-S500,#199FEC)]">
              {' '}
              GM-led flexibility
            </span>{' '}
            and
            <span className="text-[var(--Secondary-S500,#199FEC)]">
              {' '}
              fun
            </span>{' '}
            of a traditional tabletop RPG.
          </p>

          <div className="w-[327px] h-[100px] md:w-[416px] md:h-[128px] bg-cover bg-center bg-[url('/lp/tabletopGameplay.png')] my-[28px] md:my-[48px] mx-0 md:mx-auto" />

          <p className="text-white text-[18px] md:text-[24px] leading-[24px] md:leading-[40px] font-medium tracking-[-0.72px] md:tracking-[-0.96px] text-left md:text-center">
            Our web apps speed up table math, automate custom dice rolls or card
            <br />
            draws, and enable dynamic character sheets with stats and status
            <br />
            effects that update on the fly.
          </p>
        </div>
      </div>
      <div className="w-full h-full mt-10 bottom-0 bg-[#FC5212]">
        <div className="p-3 text-[16px] text-white font-normal leading-6 flex flex-col text-center items-center justify-center h-full">
          <p>
            Introducing Our New Game <br />
            Beta Begins Q4 2025
          </p>
        </div>
      </div>
    </section>
  );
}
