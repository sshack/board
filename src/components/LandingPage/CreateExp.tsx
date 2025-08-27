import Image from 'next/image';
import Header from './Header';

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

export default function CreateExp() {
  return (
    <>
      <section className="w-full">
        <div className="pt-20 w-full lg:h-[1000px] bg-[url('/lp/games-main-bg.png')] bg-cover bg-center lg:pb-0 overflow-hidden relative">
          <div className="w-full">
            <div className="w-full mx-auto px-6 lg:px-8 flex flex-col items-center pb-10">
              {/* Main Statement */}
              <div className="text-center pt-16 pb-14">
                <h1 className="text-white text-[40px] sm:text-[44px] md:text-[48px] lg:text-[56px] tracking-[-1.6px] sm:tracking-[-1.8px] md:tracking-[-2px] lg:tracking-[-2.24px] leading-[48px] sm:leading-[52px] md:leading-[56px] lg:leading-[64px] font-semibold">
                  We create experiences
                  <br className="hidden lg:block" /> that redefine the ways
                  people game
                  <br className="hidden lg:block" /> with each other IRL and
                  online.
                </h1>
              </div>
              <div className="w-full max-w-[1200px]">
                <Image
                  src="/lp/game-details-product-screen-mob-img.png"
                  alt="Game experience"
                  width={1200}
                  height={650}
                  className="w-full h-auto lg:hidden"
                />
                <Image
                  src="/lp/roleplay.png"
                  alt="Game experience"
                  width={1200}
                  height={650}
                  className="w-full h-auto hidden lg:block"
                />
              </div>
            </div>
          </div>

          {/* Gradiente do transparente para o preto */}
          <div
            className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none z-0"
            style={{
              background:
                'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 1) 100%)',
            }}
          ></div>
        </div>
      </section>
    </>
  );
}
