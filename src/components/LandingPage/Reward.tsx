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
              className="p-[1px] rounded-xl w-full md:flex-1 md:w-[416px] h-[270px]"
              style={{
                background: 'linear-gradient(rgba(25, 159, 236, 0.30))',
              }}
            >
              <div className="relative w-full h-[268px] shrink-0 rounded-xl bg-black overflow-hidden">
                <div
                  className="flex h-full w-full rounded-xl"
                  style={{
                    background:
                      'var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))',
                  }}
                >
                  <div className="w-2/3 relative flex flex-col justify-between pr-2 p-6 gap-4">
                    <div className="z-10 flex flex-col items-start gap-2">
                      <p className="text-white text-lg font-medium leading-7">
                        Get the Epic Quest Tome — quest book packed with
                        adventures to choose from
                      </p>
                    </div>

                    <button className="btn w-fit">Download as PDF</button>
                  </div>

                  <div className="absolute right-0 bg-cover bg-center w-1/2 h-full bg-[url('/lp/follow-001.png')] rounded-r-2xl shrink-0"></div>
                </div>
              </div>
            </div>
            <div
              className="p-[1px] rounded-xl w-full md:flex-1 md:w-[416px] h-[270px]"
              style={{
                background: 'linear-gradient(rgba(25, 159, 236, 0.30))',
              }}
            >
              <div className="relative w-full h-[268px] shrink-0 rounded-xl bg-black overflow-hidden">
                <div
                  className="flex h-full w-full rounded-xl"
                  style={{
                    background:
                      'var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))',
                  }}
                >
                  <div className="w-2/3 relative flex flex-col justify-between pr-2 p-6 gap-4">
                    <div className="z-10 flex flex-col items-start gap-2">
                      <p className="text-white text-lg font-medium leading-7">
                        Anno Amagium: The RPG - Core Rules
                      </p>
                    </div>

                    <button className="btn w-fit">Download as PDF</button>
                  </div>

                  <div className="absolute right-0 bg-cover bg-center w-1/2 h-full bg-[url('/lp/follow-001.png')] rounded-r-2xl shrink-0"></div>
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
            <div
              className="p-[1px] rounded-xl w-full md:flex-1 md:w-[416px] h-[128px]"
              style={{
                background:
                  'linear-gradient(130deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
              }}
            >
              <div className="relative w-full h-[128px] shrink-0 rounded-xl bg-black overflow-hidden">
                <div
                  className="flex h-full w-full rounded-xl"
                  style={{
                    background:
                      'var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))',
                  }}
                >
                  <div className="w-full relative flex flex-col justify-between pr-2 p-6 gap-4">
                    <div className="z-10 flex flex-col items-start gap-2">
                      <p className="text-white text-sm font-medium leading-5 max-w-[50%] line-clamp-2">
                        Follow us on Instagram for more loot and quests!
                      </p>
                    </div>

                    <button className="btn w-fit">Follow</button>
                  </div>

                  <img
                    src="/lp/instagram.svg"
                    alt="Instagram"
                    className="absolute bottom-0 right-4 h-full w-auto"
                  />
                </div>
              </div>
            </div>

            <div
              className="p-[1px] rounded-xl w-full md:flex-1 md:w-[416px] h-[128px]"
              style={{
                background:
                  'linear-gradient(130deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
              }}
            >
              <div className="relative w-full h-[128px] shrink-0 rounded-xl bg-black overflow-hidden">
                <div
                  className="flex h-full w-full rounded-xl"
                  style={{
                    background:
                      'var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))',
                  }}
                >
                  <div className="w-full relative flex flex-col justify-between pr-2 p-6 gap-4">
                    <div className="z-10 flex flex-col items-start gap-2">
                      <p className="text-white text-sm font-medium leading-5 max-w-[50%] line-clamp-2">
                        Join the ConQuesting community on the Echelon Discord
                        Server
                      </p>
                    </div>

                    <button className="btn w-fit">Follow</button>
                  </div>

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
      </div>

      {/*VERSÃO MOBILE*/}
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-6 md:hidden bg-pink-900">
        <div className="flex w-full flex-col items-start">
          <p className="text-[28px] font-medium leading-9 tracking-[-1.12px]">
            Useful Links
          </p>
          <div
            className="p-[1px] rounded-xl w-full h-32 mt-6"
            style={{
              background:
                'linear-gradient(130deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
            }}
          >
            <div className="relative w-full h-full shrink-0 rounded-xl bg-black overflow-hidden">
              <div
                className="flex h-full w-full rounded-xl"
                style={{
                  background:
                    'var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))',
                }}
              >
                <div className="w-full relative flex flex-col justify-between p-4 gap-4">
                  <p className="text-white text-sm font-medium leading-5 max-w-[70%]">
                    Follow us on Instagram for more loot and quests!
                  </p>
                  <button className="btn w-fit">Follow</button>
                </div>
                <img
                  src="/lp/instagram.svg"
                  alt="Instagram"
                  className="absolute bottom-0 right-4 h-full w-auto"
                />
              </div>
            </div>
          </div>

          <div
            className="p-[1px] rounded-xl w-full h-[144px] mt-6"
            style={{
              background:
                'linear-gradient(130deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
            }}
          >
            <div className="relative w-full h-full shrink-0 rounded-xl bg-black overflow-hidden">
              <div
                className="flex h-full w-full rounded-xl"
                style={{
                  background:
                    'var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))',
                }}
              >
                <div className="w-full relative flex flex-col justify-between p-4 gap-4">
                  <p className="text-white text-sm font-medium leading-5 max-w-[70%]">
                    Join the ConQuesting community on the Echelon Discord Server
                  </p>
                  <button className="btn w-fit">Join</button>
                </div>
                <img
                  src="/lp/discord.svg"
                  alt="Discord"
                  className="absolute bottom-0 right-4 h-full w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start w-full pt-[52px]">
          <p className="text-[28px] font-medium leading-9 tracking-[-1.12px] pb-6">
            Claim Your First Reward Here
          </p>
          <div className="flex flex-col items-center justify-between w-full gap-4">
            <div
              className="p-[1px] rounded-xl w-full h-[211px]"
              style={{
                background: 'linear-gradient(rgba(25, 159, 236, 0.30))',
              }}
            >
              <div className="relative w-full h-[209px] shrink-0 rounded-xl bg-black overflow-hidden">
                <div
                  className="flex h-full w-full rounded-xl"
                  style={{
                    background:
                      'var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))',
                  }}
                >
                  <div className="w-2/3 relative flex flex-col justify-between p-4 gap-4">
                    <p className="text-white text-[16px] font-medium leading-6">
                      Get the Epic Quest Tome — quest book packed with
                      adventures to choose from
                    </p>
                    <button className="btn w-fit">Download as PDF</button>
                  </div>
                  <div className="absolute right-0 bg-cover bg-right w-1/2 h-full bg-[url('/lp/card-mob-poster.png')] shrink-0"></div>
                </div>
              </div>
            </div>

            <div
              className="p-[1px] rounded-xl w-full h-[132px]"
              style={{
                background: 'linear-gradient(rgba(25, 159, 236, 0.30))',
              }}
            >
              <div className="relative w-full h-[130px] shrink-0 rounded-xl bg-black overflow-hidden">
                <div
                  className="flex h-full w-full rounded-xl"
                  style={{
                    background:
                      'var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))',
                  }}
                >
                  <div className="w-2/3 relative flex flex-col justify-between p-4 gap-4">
                    <p className="text-white text-[16px] font-medium leading-6">
                      Anno Amagium: The RPG - Core Rules
                    </p>
                    <button className="btn w-fit">Download as PDF</button>
                  </div>
                  <div className="absolute right-0 bg-cover bg-right w-1/2 h-full bg-[url('/lp/card-mob-poster-02.png')] shrink-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
