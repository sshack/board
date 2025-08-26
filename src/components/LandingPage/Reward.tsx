import Image from "next/image";
import Link from "next/link";

export default function Reward() {
  return (
    <>
      {/*VERSÃO DESKTOP*/}
      <div className="hidden max-w-[1440px] md:flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-4 pt-[140px] md:mt-0">
        <div className="flex flex-col items-start gap-4 order-2 md:order-1 w-full md:w-auto">
          <p className="text-2xl font-medium leading-10 tracking-tight">
            Claim Your First Reward Here
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            <div
              className="p-[1px] rounded-xl w-full md:flex-1 md:w-[416px] h-[270px]"
              style={{
                background: "linear-gradient(rgba(25, 159, 236, 0.30))",
              }}
            >
              <div className="relative w-full h-[268px] shrink-0 rounded-xl bg-[url('/lp/get-the-epic-img.png')] bg-center bg-cover overflow-hidden">
                <div className="flex h-full w-full rounded-xl">
                  <div className="w-2/3 relative flex flex-col justify-between pr-2 p-6 gap-4">
                    <div className="z-10 flex flex-col items-start gap-2">
                      <p className="text-white text-lg font-medium leading-7">
                        Get the Epic Quest Tome — quest book packed with
                        adventures to choose from
                      </p>
                    </div>

                    <a
                      href="https://storage.googleapis.com/gondola-public-bucket/dragonCon_2025_epic_quest_tome.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn w-fit"
                    >
                      Download as PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="p-[1px] rounded-xl w-full md:flex-1 md:w-[416px] h-[270px]"
              style={{
                background: "linear-gradient(rgba(25, 159, 236, 0.30))",
              }}
            >
              <div className="relative w-full h-[268px] shrink-0 rounded-xl bg-[url('/lp/get-core-img.png')] bg-center bg-cover overflow-hidden">
                <div className="flex h-full w-full rounded-xl">
                  <div className="w-2/3 relative flex flex-col justify-between pr-2 p-6 gap-4">
                    <div className="z-10 flex flex-col items-start gap-2">
                      <p className="text-white text-lg font-medium leading-7">
                        Anno Amagium: The RPG - Core Rules
                      </p>
                    </div>

                    <a
                      href="https://storage.googleapis.com/gondola-public-bucket/anno_amagium_rpg_book_core_rules.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn w-fit"
                    >
                      Download as PDF
                    </a>
                  </div>
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
                  "linear-gradient(130deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)",
              }}
            >
              <div className="relative w-full h-[128px] shrink-0 rounded-xl bg-black overflow-hidden">
                <div
                  className="flex h-full w-full rounded-xl"
                  style={{
                    background:
                      "var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))",
                  }}
                >
                  <div className="w-full relative flex flex-col">
                    <div className="z-10 flex flex-col items-start px-5 pt-5 mb-4">
                      <p className="text-white text-sm font-medium leading-5 max-w-[60%]">
                        Follow us on Instagram for more loot and quests!
                      </p>
                    </div>
                    <div className="pb-5 px-5">
                      <Link
                        href="https://www.instagram.com/gameonechelon/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn w-fit py-2 px-4 rounded-full"
                      >
                        Follow
                      </Link>
                    </div>
                  </div>

                  <img
                    src="/lp/instagram.svg"
                    alt="Instagram"
                    className="absolute bottom-0 right-0 h-full w-auto"
                  />
                </div>
              </div>
            </div>

            <div
              className="p-[1px] rounded-xl w-full"
              style={{
                background:
                  "linear-gradient(130deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)",
              }}
            >
              <div className="relative w-full h-[128px] shrink-0 rounded-xl bg-black overflow-hidden">
                <div
                  className="flex h-full w-full rounded-xl"
                  style={{
                    background:
                      "var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))",
                  }}
                >
                  <div className="w-full relative flex flex-col">
                    <div className="pt-5 px-5 mb-4 z-10 flex flex-col items-start">
                      <p className="text-white text-sm font-medium leading-5 max-w-[60%] line-clamp-2">
                        Join the ConQuesting community on the Echelon Discord
                        Server
                      </p>
                    </div>
                    <div className="px-5 pb-5">
                      <Link
                        href="https://discord.gg/8vg87vZyfS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn w-fit py-2 px-4 rounded-full"
                      >
                        Join
                      </Link>
                    </div>
                  </div>

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
      </div>

      {/*VERSÃO MOBILE*/}
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-6 md:hidden">
        <div className="flex w-full flex-col items-start">
          <p className="text-[28px] font-medium leading-9 tracking-[-1.12px]">
            Useful Links
          </p>
          <div
            className="p-[1px] rounded-xl w-full h-32 mt-6"
            style={{
              background:
                "linear-gradient(130deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)",
            }}
          >
            <div className="relative w-full h-full shrink-0 rounded-xl bg-black overflow-hidden">
              <div
                className="flex h-full w-full rounded-xl"
                style={{
                  background:
                    "var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))",
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
                "linear-gradient(130deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)",
            }}
          >
            <div className="relative w-full h-full shrink-0 rounded-xl bg-black overflow-hidden">
              <div
                className="flex h-full w-full rounded-xl"
                style={{
                  background:
                    "var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))",
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
                background:
                  "linear-gradient(300deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)",
              }}
            >
              <div className="relative w-full h-[209px] shrink-0 rounded-xl bg-black overflow-hidden">
                <div
                  className="flex h-full w-full rounded-xl"
                  style={{
                    background:
                      "var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))",
                  }}
                >
                  <div className="w-2/3 relative flex flex-col justify-between p-4 gap-4">
                    <p className="text-white text-[16px] font-medium leading-6">
                      Get the Epic Quest Tome — quest book packed with
                      adventures to choose from
                    </p>
                    <a
                      href="https://storage.googleapis.com/gondola-public-bucket/dragonCon_2025_epic_quest_tome.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn w-fit"
                    >
                      Download as PDF
                    </a>
                  </div>
                  <div className="absolute right-0 bg-cover bg-right w-1/2 h-full bg-[url('/lp/card-mob-poster.png')] shrink-0"></div>
                </div>
              </div>
            </div>

            <div
              className="p-[1px] rounded-xl w-full h-full"
              style={{
                background:
                  "linear-gradient(45deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)",
              }}
            >
              <div className="relative w-full h-[132px] shrink-0 rounded-xl bg-black overflow-hidden">
                <div className="flex h-full w-full rounded-xl bg-[url('/lp/get-core-img.png')] bg-top bg-cover">
                  <div className="w-2/3 relative flex flex-col justify-between p-4 gap-4">
                    <p className="text-white text-[16px] font-medium leading-6">
                      Anno Amagium: <br />
                      The RPG - Core Rules
                    </p>
                    <a
                      href="https://storage.googleapis.com/gondola-public-bucket/anno_amagium_rpg_book_core_rules.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn w-fit"
                    >
                      Download as PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
