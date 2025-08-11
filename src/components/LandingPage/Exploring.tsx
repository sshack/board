import Image from 'next/image';

export default function NextLevel({}) {
  return (
    <section className="w-full bg-cover bg-center flex flex-col items-center justify-center gap-0 md:gap-8 relative overflow-hidden max-w-[1440px] px-6 md:px-0">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-4 py-40 md:mt-0">
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
                  'linear-gradient(300deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
              }}
            >
              <div
                className="relative w-full h-[268px] shrink-0 rounded-xl border bg-black"
                style={{
                  borderColor:
                    'var(--Transparent-secondary-T2-30, rgba(25, 159, 236, 0.30))',
                }}
              >
                <div
                  className="flex h-full w-full rounded-xl"
                  style={{
                    background:
                      'var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))',
                  }}
                >
                  <div className="flex flex-col justify-between p-6 flex-1 gap-4">
                    <div className="flex flex-col items-start gap-2">
                      <p className="text-white text-lg font-medium leading-7">
                        Get “Anno Amagium: The RPG - Core Rules”
                      </p>
                      <p className="text-white/50 text-[14px] font-medium leading-5">
                        by following us on Instagram
                      </p>
                    </div>

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
            </div>
            <div
              className="p-[1px] rounded-xl w-full md:flex-1"
              style={{
                background:
                  'linear-gradient(300deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
              }}
            >
              <div
                className="relative w-full h-[268px] shrink-0 rounded-xl border bg-black"
                style={{
                  borderColor:
                    'var(--Transparent-secondary-T2-30, rgba(25, 159, 236, 0.30))',
                }}
              >
                <div
                  className="flex h-full w-full rounded-xl"
                  style={{
                    background:
                      'var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))',
                  }}
                >
                  <div className="flex flex-col justify-between p-6 flex-1 gap-4">
                    <div className="flex flex-col items-start gap-2">
                      <p className="text-white text-lg font-medium leading-7">
                        Get “Anno Amagium: The RPG - Universe Guide and Lore”
                      </p>
                      <p className="text-white/50 text-[14px] font-medium leading-5">
                        by following us on Instagram
                      </p>
                    </div>

                    <button className="btn w-fit">Follow</button>
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

            <div
              className="p-[1px] rounded-xl w-full md:flex-1"
              style={{
                background:
                  'linear-gradient(300deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
              }}
            >
              <div
                className="relative w-full h-[268px] shrink-0 rounded-xl border bg-black"
                style={{
                  borderColor:
                    'var(--Transparent-secondary-T2-30, rgba(25, 159, 236, 0.30))',
                }}
              >
                <div
                  className="flex h-full w-full rounded-xl"
                  style={{
                    background:
                      'var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))',
                  }}
                >
                  <div className="flex flex-col justify-between p-6 flex-1 gap-4">
                    <div className="flex flex-col items-start gap-2">
                      <p className="text-white text-lg font-medium leading-7">
                        Get “Anno Amagium: The RPG - Core Rules”
                      </p>
                      <p className="text-white/50 text-[14px] font-medium leading-5">
                        by following us on Instagram
                      </p>
                    </div>

                    <button className="btn w-fit">Follow</button>
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
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-start justify-between gap-12">
          <div className="flex flex-col items-start justify-between gap-6">
            <p>Digital TTRPG Publishing</p>
            <p>
              In the future, we plan to offer digital adaptation and publishing
              services for original tabletop RPGs. Meet with us for a
              consultation to build your game, share it with the world, and get
              paid when people download your books.
            </p>
          </div>
          <button className="btn w-fit">Follow</button>
        </div>
        <div className="flex flex-row items-start justify-between gap-8">
          <div className="w-[224px] h-[272px] bg-[url(/lp/exploring1.png)]" />
          <div className="w-[224px] h-[272px] bg-[url(/lp/exploring2.png)]" />
          <div className="w-[224px] h-[272px] bg-[url(/lp/exploring1.png)]" />
        </div>
      </div>
    </section>
  );
}
