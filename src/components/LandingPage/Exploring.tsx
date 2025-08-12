"use client";

import { usePathname } from "next/navigation";

export default function Exploring({}) {
  const pathname = usePathname();
  const shouldRenderTtrpg = pathname !== "/games";
  return (
    <section className="w-full bg-cover bg-center flex flex-col items-center justify-center gap-0 md:gap-8 relative overflow-hidden max-w-[1440px] px-6 md:px-0 mb-[120px] md:mb-[180px]">
      <div
        className={`flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-4 pt-40 ${
          pathname === "/games" ? "pb-0" : "pb-40"
        } md:mt-0`}
      >
        <div className="flex flex-col items-start gap-4 md:gap-[28px] order-2 md:order-1 w-full md:w-auto">
          <div className="w-full flex items-center justify-start md:justify-center">
            <p className="text-white font-medium md:text-[24px] text-[18px] md:leading-[40px] leading-[24px] md:tracking-[-0.96px] tracking-[-0.72px] md:text-center text-left">
              Start Exploring the Anno Amagium Universe with our Rule Books
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
                        Get “Anno Amagium: The RPG - Core Rules”
                      </p>
                      <p className="text-white/50 text-[14px] font-medium leading-5">
                        by following us on Instagram
                      </p>
                    </div>

                    <button className="btn w-fit">Follow</button>
                  </div>

                  <div className="absolute right-0 bg-cover bg-center w-1/2 h-full bg-[url('/lp/follow-001.png')] rounded-r-2xl shrink-0"></div>
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

                  <div className="absolute right-0 bg-cover bg-center w-1/2 h-full bg-[url('/lp/follow-002.png')] rounded-r-2xl shrink-0"></div>
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

                    <div className="absolute right-0 bg-cover bg-center w-1/2 h-full bg-[url('/lp/sign-up-001.png')] rounded-r-2xl shrink-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {shouldRenderTtrpg && (
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-8 mt-12 md:mt-16">
          <div className="w-full md:w-auto order-1 md:order-2 grid grid-cols-3 gap-4 md:gap-8 justify-items-center">
            <div className="w-[112px] h-[136px] md:w-[224px] md:h-[272px] bg-[url(/lp/exploring1.png)] bg-cover bg-center rounded-xl" />
            <div className="w-[112px] h-[136px] md:w-[224px] md:h-[272px] bg-[url(/lp/exploring2.png)] bg-cover bg-center rounded-xl" />
            <div className="w-[112px] h-[136px] md:w-[224px] md:h-[272px] bg-[url(/lp/exploring1.png)] bg-cover bg-center rounded-xl" />
          </div>

          <div className="flex flex-col items-start gap-6 md:gap-8 md:min-w-[50%] md:flex-1 order-2 md:order-1">
            <p
              className="font-semibold text-[28px] md:text-[44px] leading-[36px] md:leading-[48px] tracking-[-1.12px] md:tracking-[-1.76px]"
              style={{ color: "var(--Secondary-S500, #199FEC)" }}
            >
              Digital <span className="text-white">TTRPG</span> Publishing
            </p>
            <p className="text-white font-medium text-[16px] md:text-[18px] leading-[24px] md:leading-[28px]">
              In the future, we plan to offer digital adaptation and publishing
              services for original tabletop RPGs. Meet with us for a
              consultation to build your game, share it with the world, and get
              paid when people download your books.
            </p>
            <button className="btn w-full md:hidden">
              Book a call with us
            </button>
            <button className="btn w-fit hidden md:inline-flex">Follow</button>
          </div>
        </div>
      )}
    </section>
  );
}
