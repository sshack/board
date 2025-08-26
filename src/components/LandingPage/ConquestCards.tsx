import React from "react";

const Conquestcards: React.FC = () => {
  return (
    <section className="w-full bg-cover bg-center flex flex-col items-center justify-center gap-0 md:gap-8 relative overflow-hidden max-w-[1440px] px-6 md:px-0 mb-[120px] md:mb-14">
      <div
        className={`flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-4 pt-40 md:mt-0`}
      >
        <div className="flex flex-col items-start gap-4 md:gap-[28px] order-2 md:order-1 w-full md:w-auto">
          <div className="w-full flex items-center justify-start md:justify-center">
            <p className="text-white font-medium md:text-[24px] text-[18px] md:leading-[40px] leading-[24px] md:tracking-[-0.96px] tracking-[-0.72px] md:text-center text-left">
              If you seek more forbidden manuals, undertake these additional
              tasks:
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch justify-between w-full gap-4">
            <div
              className="p-[1px] rounded-xl w-full md:flex-1"
              style={{
                background:
                  "linear-gradient(300deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)",
              }}
            >
              <div
                className="relative w-full h-[268px] shrink-0 rounded-xl border bg-black"
                style={{
                  borderColor:
                    "var(--Transparent-secondary-T2-30, rgba(25, 159, 236, 0.30))",
                }}
              >
                <div
                  className="flex h-full w-full rounded-xl"
                  style={{
                    background:
                      "var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))",
                  }}
                >
                  {/* bloco cinza: agora respeita w-2/3 */}
                  <div className="w-2/3 relative flex flex-col justify-between pr-2 p-6 gap-4">
                    <div className="z-10 flex flex-col items-start gap-2">
                      <p className="text-white text-lg font-medium leading-7">
                        Get “Anno Amagium: The RPG - Universe Guide and Lore”
                      </p>
                      <p className="text-white/50 text-[14px] font-medium leading-5">
                        by following us on Instagram
                      </p>
                    </div>

                    <button className="btn w-fit">Follow</button>
                  </div>

                  <div className="absolute right-0 bg-cover bg-center w-1/2 h-full bg-[url('/lp/follow-002.png')] bg-no-repeat rounded-r-2xl shrink-0"></div>
                </div>
              </div>
            </div>

            <div
              className="p-[1px] rounded-xl w-full md:flex-1"
              style={{
                background:
                  "linear-gradient(300deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)",
              }}
            >
              <div
                className="p-[1px] rounded-xl w-full md:flex-1"
                style={{
                  background:
                    "linear-gradient(300deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)",
                }}
              >
                <div
                  className="relative w-full h-[268px] shrink-0 rounded-xl border bg-black"
                  style={{
                    borderColor:
                      "var(--Transparent-secondary-T2-30, rgba(25, 159, 236, 0.30))",
                  }}
                >
                  <div
                    className="flex h-full w-full rounded-xl"
                    style={{
                      background:
                        "var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))",
                    }}
                  >
                    {/* bloco cinza: agora respeita w-2/3 */}
                    <div className="w-2/3 relative flex flex-col justify-between pr-2 p-6 gap-4">
                      <div className="z-10 flex flex-col items-start gap-2">
                        <p className="text-white text-lg font-medium leading-7">
                          Get “Anno Amagium: The RPG - Character Creation and
                          Advancement”
                        </p>
                        <p className="text-white/50 text-[14px] font-medium leading-5">
                          by signing up for our mailing list
                        </p>
                      </div>

                      <button className="btn w-fit">Follow</button>
                    </div>

                    <div className="absolute right-0 bg-cover bg-no-repeat bg-center w-1/2 h-full bg-[url('/lp/sign-up-001.png')] rounded-r-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="p-[1px] rounded-xl w-full md:flex-1"
              style={{
                background:
                  "linear-gradient(300deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)",
              }}
            >
              <div
                className="relative w-full h-[268px] shrink-0 rounded-xl border bg-black"
                style={{
                  borderColor:
                    "var(--Transparent-secondary-T2-30, rgba(25, 159, 236, 0.30))",
                }}
              >
                <div
                  className="hidden md:flex h-full w-full rounded-xl"
                  style={{
                    background:
                      "var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))",
                  }}
                >
                  {/* bloco cinza: agora respeita w-2/3 */}
                  <div className="w-2/3 relative flex flex-col justify-between pr-2 p-6 gap-4">
                    <div className="z-10 flex flex-col items-start gap-2">
                      <p className="text-white text-lg font-medium leading-7">
                        Do you have Secret Loot this year?
                      </p>
                      <p className="text-white/50 text-[14px] font-medium leading-5">
                        Post your quest pics or videos
                        <br />
                        with #conquesting and tag @gameonechelon to claim this
                        year's mystery swag.
                      </p>
                    </div>
                  </div>

                  <div className="absolute right-0 bg-cover bg-no-repeat bg-center w-1/2 h-full bg-[url('/lp/conquestingGameOnEchelon.png')]"></div>
                </div>

                {/*Versão Mobile*/}
                <div
                  className="flex flex-col h-full w-full rounded-xl relative overflow-hidden"
                  style={{
                    background:
                      "var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25,159,236,.10) .9%, rgba(25,159,236,.55) 100%))",
                  }}
                >
                  <div className="flex flex-col h-full w-full rounded-xl relative overflow-hidden bg-[url('/lp/conquestingTagMob.png')] bg-center bg-cover">
                    {/* pattern pontilhado (apenas visual) */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-30
                  bg-[radial-gradient(circle,_rgba(25,159,236,0.6)_1px,_transparent_1px)]
                  bg-[length:12px_12px]"
                    />

                    <div className="p-6 flex flex-col">
                      <div className="space-y-3">
                        <p className="text-white text-[18px] leading-6 font-normal tracking-[-1px]">
                          Do you have Secret Loot this year?
                        </p>
                        <p className="text-white/50 w-full text-[14px] font-normal">
                          Post your quest pics or videos with #conquesting and
                          tag @gameonechelon to claim this year's mystery swag.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conquestcards;
