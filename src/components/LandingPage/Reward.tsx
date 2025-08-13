import Image from 'next/image';

export default function Reward() {
  return (
    <>
      {/*VERSÃO DESKTOP*/}
      <div className="hidden max-w-[1440px] md:flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-4 py-40 md:mt-0">
        <div className="flex flex-col items-start gap-4 order-2 md:order-1 w-full md:w-auto">
          <p className="text-2xl font-medium leading-10 tracking-tight">
            Claim Your First Reward Here
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            <div
              className="relative w-full md:w-[416px] h-[268px] shrink-0 rounded-2xl border"
              style={{
                borderColor:
                  'var(--Transparent-secondary-T2-30, rgba(25, 159, 236, 0.30))',
              }}
            >
              <div
                className="flex h-full w-full rounded-2xl"
                style={{
                  background:
                    'var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))',
                }}
              >
                <div className="flex flex-col justify-between p-6 flex-1 gap-4">
                  <p className="text-white text-lg font-medium leading-7">
                    Get the Epic Quest Tome — quest book packed with adventures
                    to choose from
                  </p>
                  <button className="btn w-fit">Download as PDF</button>
                </div>

                <div className="relative w-32 h-full rounded-r-2xl shrink-0">
                  <Image
                    src="/lp/poster.png"
                    alt="ConQuest Poster"
                    width={108}
                    height={132}
                    className="absolute inset-0 object-contain m-auto"
                  />
                </div>
              </div>
            </div>
            <div
              className="relative w-full md:w-[416px] h-[268px] shrink-0 rounded-2xl border"
              style={{
                borderColor:
                  'var(--Transparent-secondary-T2-30, rgba(25, 159, 236, 0.30))',
              }}
            >
              <div
                className="flex h-full w-full rounded-2xl"
                style={{
                  background:
                    'var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))',
                }}
              >
                <div className="flex flex-col justify-between p-6 flex-1 gap-4">
                  <p className="text-white text-lg font-medium leading-7">
                    Get the Epic Quest Tome — quest book packed with adventures
                    to choose from
                  </p>
                  <button className="btn w-fit">Download as PDF</button>
                </div>

                <div className="relative w-32 h-full  rounded-r-2xl shrink-0">
                  <Image
                    src="/lp/poster.png"
                    alt="ConQuest Poster"
                    width={108}
                    height={132}
                    className="absolute inset-0 object-contain m-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4 order-1 md:order-2">
          <p className="text-2xl font-medium leading-10 tracking-tight">
            Useful Links
          </p>
          <div className="flex flex-col items-center justify-between w-full gap-3">
            <div className="relative h-[128px] w-full rounded-2xl p-[0.5px]">
              <div
                className="relative flex flex-col justify-between h-full w-full rounded-2xl p-6"
                style={{
                  background:
                    'var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))',
                }}
              >
                <p className="text-white text-sm font-medium leading-5 max-w-[50%] line-clamp-2">
                  Follow us on Instagram for more loot and quests!
                </p>
                <button className="btn w-fit">Follow</button>
                <img
                  src="/lp/instagram.svg"
                  alt="Instagram"
                  className="absolute bottom-0 right-4 h-full w-auto"
                />
              </div>
            </div>
            <div className="relative h-[128px] w-full rounded-2xl p-[0.5px]">
              <div
                className="relative flex flex-col justify-between h-full w-full rounded-2xl p-6"
                style={{
                  background:
                    'var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))',
                }}
              >
                <p className="text-white text-sm font-medium leading-5 max-w-[50%] line-clamp-2">
                  Join the ConQuesting community on the Echelon Discord Server
                </p>
                <button className="btn w-fit">Follow</button>
                <img
                  src="/lp/discord.svg"
                  alt="Discord"
                  className="absolute bottom-0 right-4 h-full w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*VERSÃO MOBILE*/}
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-6 md:hidden ">
        <div className="flex w-full flex-col items-start">
          <p className="text-[28px] font-medium leading-9 tracking-[-1.12px]">
            Useful Links
          </p>
          <div className="bg-pink-500 p-[1px] rounded-xl">
            <div
              className="flex flex-col items-center justify-between w-full gap-4 pt-6 rounded-xl"
              style={{
                background:
                  'var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))',
              }}
            >
              <div className="rounded-xl w-full h-full relative">
                <div className="relative flex flex-col justify-between rounded-[12px] p-4 h-32 ">
                  <p className="text-white text-sm font-medium leading-5 pb-4">
                    Follow us on Instagram for more loot and quests!
                  </p>
                  <button className="btn w-fit">Follow</button>
                  <div className="w-1/3">
                    <img
                      src="/lp/instagram.svg"
                      alt="Instagram"
                      className="absolute bottom-0 right-0 h-full w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-full gap-4 pt-6">
            <div
              className="rounded-xl w-full h-full relative"
              style={{
                background:
                  'var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))',
              }}
            >
              <div className="relative flex flex-col justify-between rounded-[12px] p-4 h-[144px] ">
                <p className="text-white text-sm font-medium leading-5 pb-4">
                  Join the ConQuesting community on the Echelon Discord Server
                </p>
                <button className="btn w-fit">Join</button>
                <div className="w-1/3">
                  <img
                    src="/lp/discord.svg"
                    alt="Discord"
                    className="absolute bottom-0 right-0 h-full w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-full pt-[52px]">
          <p className="text-[28px] font-medium leading-9 tracking-[-1.12px] pb-6">
            Claim Your First Reward Here
          </p>
          <div className="flex flex-col items-center justify-between w-full gap-4">
            <div className="flex h-[211px] w-full bg-[url('/lp/card-mob-poster.png')] bg-left bg-no-repeat bg-cover rounded-[12px]">
              <div className="flex flex-col p-4 w-2/3 items-start justify-between">
                <p className="text-white text-[16px] font-medium leading-6 pb-4">
                  Get the Epic Quest Tome — quest book packed with adventures to
                  choose from
                </p>
                <button className="btn w-fit ">Download as PDF</button>
              </div>
            </div>

            <div className="flex h-[132px] w-full bg-[url('/lp/card-mob-poster-02.png')] bg-left bg-no-repeat bg-cover rounded-[12px]">
              <div className="flex flex-col p-4 w-2/3 items-start justify-between">
                <p className="text-white text-[16px] font-medium leading-6 pb-4">
                  Anno Amagium: The RPG - Core Rules
                </p>
                <button className="btn w-fit ">Download as PDF</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
