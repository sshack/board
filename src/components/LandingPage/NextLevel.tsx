import Image from 'next/image';

const Arrow: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    className="shrink-0 fill-[#199FEC]"
  >
    <path d="M7.5 3.22427C8.16667 3.56904 8.16667 4.43096 7.5 4.77573L1.5 7.87866C0.833334 8.22343 6.63909e-07 7.79247 5.6647e-07 7.10293L1.33333 4L-3.10479e-07 0.897075C-4.07918e-07 0.207535 0.833333 -0.223427 1.5 0.121343L7.5 3.22427Z" />
  </svg>
);

export default function NextLevel({}) {
  return (
    <section className="w-full bg-cover bg-center flex flex-col items-center justify-center gap-0 md:gap-8 relative overflow-hidden max-w-[1440px] my-[60px] px-6 md:px-0">
      <div className="flex flex-col items-start md:items-center justify-center w-full">
        <p className="md:hidden inline-flex items-center justify-center px-3 py-1 rounded-full bg-[var(--Secondary-S500,#199FEC)] text-white text-[16px] leading-none font-semibold self-start shadow-sm mb-4">
          Beta
        </p>
        <div className="relative">
          <p className="text-white text-[56px] leading-[64px] font-semibold tracking-[-2.4px] text-left md:text-center mb-[28px]">
            Next-Level Features
          </p>
          <span className="absolute min-w-[100px] top-1 -right-16 px-3 hidden md:inline-flex items-center justify-center py-1 rounded-full bg-[var(--Secondary-S500,#199FEC)] text-white text-[16px] leading-none font-semibold shadow-sm transform rotate-6">
            After launch
          </span>
        </div>

        <p className="text-[16px] leading-[24px] font-normal text-[#199FEC]">
          The next chapter of Echelon is already being written{' '}
          <a className="cursor-auto text-white ">
            {' '}
            — here’s a glimpse into what’s to come.
          </a>
        </p>
      </div>

      <div className="w-full flex flex-col items-center justify-start mt-20">
        <div className="flex flex-col items-center justify-center gap-6 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-[1062px] gap-4">
            <div className="w-full self-stretch flex flex-col items-center justify-center gap-3">
              <div
                className="p-[1px] rounded-[20px] w-full"
                style={{
                  background:
                    'linear-gradient(130deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
                }}
              >
                <div
                  className="w-full h-[480px] md:h-full flex items-center justify-center rounded-[20px] mx-auto overflow-hidden"
                  style={{ backgroundColor: 'rgb(4 25 36)' }}
                >
                  <div className="relative w-full h-full rounded-[20px]">
                    {/* Mobile layout: image top, text bottom */}
                    <div className="md:hidden flex h-full w-full flex-col">
                      <div className="flex-1 w-full bg-no-repeat bg-top bg-cover bg-[url('/lp/MoneyMobile.png')]" />
                      <div className="flex-1 flex flex-col gap-2 p-5 justify-end">
                        <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-semibold">
                          Flexible Pricing
                        </h1>
                        <p className="text-[rgba(255,255,255,0.5)] text-[14px] leading-[22px]">
                          We are still working on price points, but we plan on
                          using a Seat-based system. We hope to launch with a
                          F2P option providing limited storage and accommodating
                          small sessions. Basic subscribers will enjoy increased
                          storage and can join any campaign. Professional
                          subscribers can host seats for up to 8 player
                          characters simultaneously.
                        </p>
                      </div>
                    </div>

                    {/* Desktop and up: text left, image right */}
                    <div className="hidden md:flex relative w-full h-full md:bg-[url(/lp/Money.png)] md:bg-no-repeat md:bg-right md:bg-[length:40%_auto] md:pr-[40%]">
                      <div className="flex flex-col gap-2 p-5 md:h-auto justify-center">
                        <h1 className="text-[20px] leading-[24px] tracking-[-0.8px] font-semibold">
                          Flexible Pricing
                        </h1>
                        <p className="text-[rgba(255,255,255,0.5)] text-[14px] leading-[22px]">
                          We are still working on price points, but we plan on
                          using a Seat-based system. We hope to launch with a
                          F2P option providing limited storage and accommodating
                          small sessions. Basic subscribers will enjoy increased
                          storage and can join any campaign. Professional
                          subscribers can host seats for up to 8 player
                          characters simultaneously.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="p-[1px] rounded-[20px] w-full"
                style={{
                  background:
                    'linear-gradient(300deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
                }}
              >
                <div
                  className="w-full min-h-[240px] flex items-center justify-center rounded-[20px] mx-auto overflow-hidden"
                  style={{ backgroundColor: 'rgb(4 25 36)' }}
                >
                  2
                </div>
              </div>

              <div
                className="p-[1px] rounded-[20px] w-full"
                style={{
                  background:
                    'linear-gradient(45deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
                }}
              >
                <div
                  className="w-full min-h-[350px] md:h-full flex items-center justify-center rounded-[20px] mx-auto overflow-hidden"
                  style={{ backgroundColor: 'rgb(4 25 36)' }}
                >
                  3
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center gap-3">
              <div
                className="p-[1px] rounded-[20px] w-full"
                style={{
                  background:
                    'linear-gradient(210deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
                }}
              >
                <div
                  className="w-full h-[468px] flex items-start justify-start rounded-[20px] mx-auto overflow-hidden"
                  style={{ backgroundColor: 'rgb(4 25 36)' }}
                >
                  4
                </div>
              </div>

              <div
                className="p-[1px] rounded-[20px] w-full"
                style={{
                  background:
                    'linear-gradient(130deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
                }}
              >
                <div
                  className="w-full h-[488px] flex items-start justify-start rounded-[20px] mx-auto overflow-hidden"
                  style={{ backgroundColor: 'rgb(4 25 36)' }}
                >
                  5
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
