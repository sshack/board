import React from "react";
import Image from "next/image";
import Header from "../../components/LandingPage/Header";
import { url } from "inspector";

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

const EchelonIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="18"
    viewBox="0 0 17 18"
    fill="none"
  >
    <mask id="path-1-inside-1_2278_707" fill="white">
      <path d="M10.709 3.10901C13.5285 4.01498 15.57 6.65758 15.5703 9.77795L15.5615 10.1393C15.4965 11.4204 15.0867 12.6109 14.4238 13.6198H16.0234V15.8795H10.709V14.0114C12.2515 13.2279 13.3096 11.6265 13.3096 9.77795C13.3092 7.9298 12.2512 6.32989 10.709 5.54651V3.10901ZM6.63086 5.44495C4.97416 6.18513 3.81967 7.84609 3.81934 9.77795C3.81934 11.71 4.97402 13.3716 6.63086 14.1119V15.8795H1.10938V13.6198H2.70703C1.98217 12.5165 1.55959 11.1966 1.55957 9.77795C1.55988 6.58035 3.70297 3.88499 6.63086 3.04553V5.44495ZM9.24121 5.08167C9.02015 5.05005 8.79424 5.03288 8.56445 5.03284C8.33383 5.03284 8.10659 5.04987 7.88477 5.08167V1.57678H9.24121V5.08167Z" />
    </mask>
    <path
      d="M10.709 3.10901C13.5285 4.01498 15.57 6.65758 15.5703 9.77795L15.5615 10.1393C15.4965 11.4204 15.0867 12.6109 14.4238 13.6198H16.0234V15.8795H10.709V14.0114C12.2515 13.2279 13.3096 11.6265 13.3096 9.77795C13.3092 7.9298 12.2512 6.32989 10.709 5.54651V3.10901ZM6.63086 5.44495C4.97416 6.18513 3.81967 7.84609 3.81934 9.77795C3.81934 11.71 4.97402 13.3716 6.63086 14.1119V15.8795H1.10938V13.6198H2.70703C1.98217 12.5165 1.55959 11.1966 1.55957 9.77795C1.55988 6.58035 3.70297 3.88499 6.63086 3.04553V5.44495ZM9.24121 5.08167C9.02015 5.05005 8.79424 5.03288 8.56445 5.03284C8.33383 5.03284 8.10659 5.04987 7.88477 5.08167V1.57678H9.24121V5.08167Z"
      fill="white"
    />
    <path
      d="M10.709 3.10901L10.877 2.58611L10.1598 2.35564V3.10901H10.709ZM15.5703 9.77795L16.1195 9.79131L16.1195 9.7779L15.5703 9.77795ZM15.5615 10.1393L16.1101 10.1671L16.1104 10.1599L16.1106 10.1526L15.5615 10.1393ZM14.4238 13.6198L13.9648 13.3182L13.4058 14.169H14.4238V13.6198ZM16.0234 13.6198H16.5727V13.0705H16.0234V13.6198ZM16.0234 15.8795V16.4287H16.5727V15.8795H16.0234ZM10.709 15.8795H10.1598V16.4287H10.709V15.8795ZM10.709 14.0114L10.4603 13.5217L10.1598 13.6743V14.0114H10.709ZM13.3096 9.77795L13.8588 9.77795L13.8588 9.77786L13.3096 9.77795ZM10.709 5.54651H10.1598V5.88355L10.4603 6.03619L10.709 5.54651ZM6.63086 5.44495L6.8549 5.94641L7.18009 5.80112V5.44495H6.63086ZM3.81934 9.77795L3.2701 9.77786V9.77795H3.81934ZM6.63086 14.1119H7.18009V13.7558L6.85494 13.6105L6.63086 14.1119ZM6.63086 15.8795V16.4287H7.18009V15.8795H6.63086ZM1.10938 15.8795H0.560142V16.4287H1.10938V15.8795ZM1.10938 13.6198V13.0705H0.560142V13.6198H1.10938ZM2.70703 13.6198V14.169H3.72505L3.16606 13.3182L2.70703 13.6198ZM1.55957 9.77795L1.01034 9.7779L1.01034 9.77796L1.55957 9.77795ZM6.63086 3.04553H7.18009V2.3167L6.47949 2.51757L6.63086 3.04553ZM9.24121 5.08167L9.16345 5.62537L9.79044 5.71503V5.08167H9.24121ZM8.56445 5.03284L8.56457 4.4836H8.56445V5.03284ZM7.88477 5.08167H7.33553V5.71523L7.96269 5.62534L7.88477 5.08167ZM7.88477 1.57678V1.02755H7.33553V1.57678H7.88477ZM9.24121 1.57678H9.79044V1.02755H9.24121V1.57678ZM10.709 3.10901L10.541 3.63191C13.1402 4.4671 15.0208 6.90336 15.0211 9.77801L15.5703 9.77795L16.1195 9.7779C16.1192 6.4118 13.9168 3.56285 10.877 2.58611L10.709 3.10901ZM15.5703 9.77795L15.0212 9.7646L15.0125 10.1259L15.5615 10.1393L16.1106 10.1526L16.1194 9.79131L15.5703 9.77795ZM15.5615 10.1393L15.013 10.1114C14.9531 11.2921 14.5757 12.3884 13.9648 13.3182L14.4238 13.6198L14.8828 13.9213C15.5978 12.8333 16.0399 11.5488 16.1101 10.1671L15.5615 10.1393ZM14.4238 13.6198V14.169H16.0234V13.6198V13.0705H14.4238V13.6198ZM16.0234 13.6198H15.4742V15.8795H16.0234H16.5727V13.6198H16.0234ZM16.0234 15.8795V15.3303H10.709V15.8795V16.4287H16.0234V15.8795ZM10.709 15.8795H11.2582V14.0114H10.709H10.1598V15.8795H10.709ZM10.709 14.0114L10.9577 14.501C12.6771 13.6277 13.8588 11.8415 13.8588 9.77795H13.3096H12.7603C12.7603 11.4115 11.8259 12.828 10.4603 13.5217L10.709 14.0114ZM13.3096 9.77795L13.8588 9.77786C13.8584 7.71458 12.6767 5.92998 10.9577 5.05683L10.709 5.54651L10.4603 6.03619C11.8258 6.7298 12.7601 8.14502 12.7603 9.77805L13.3096 9.77795ZM10.709 5.54651H11.2582V3.10901H10.709H10.1598V5.54651H10.709ZM6.63086 5.44495L6.40682 4.94349C4.55966 5.76876 3.27048 7.62145 3.2701 9.77786L3.81934 9.77795L4.36857 9.77805C4.36887 8.07073 5.38866 6.6015 6.8549 5.94641L6.63086 5.44495ZM3.81934 9.77795H3.2701C3.2701 11.9346 4.5595 13.7879 6.40678 14.6134L6.63086 14.1119L6.85494 13.6105C5.38855 12.9552 4.36857 11.4854 4.36857 9.77795H3.81934ZM6.63086 14.1119H6.08163V15.8795H6.63086H7.18009V14.1119H6.63086ZM6.63086 15.8795V15.3303H1.10938V15.8795V16.4287H6.63086V15.8795ZM1.10938 15.8795H1.65861V13.6198H1.10938H0.560142V15.8795H1.10938ZM1.10938 13.6198V14.169H2.70703V13.6198V13.0705H1.10938V13.6198ZM2.70703 13.6198L3.16606 13.3182C2.49808 12.3015 2.10882 11.0859 2.1088 9.77795L1.55957 9.77795L1.01034 9.77796C1.01036 11.3073 1.46625 12.7315 2.24801 13.9213L2.70703 13.6198ZM1.55957 9.77795L2.1088 9.77801C2.10909 6.83212 4.08336 4.34728 6.78223 3.57349L6.63086 3.04553L6.47949 2.51757C3.32257 3.42269 1.01067 6.32859 1.01034 9.7779L1.55957 9.77795ZM6.63086 3.04553H6.08163V5.44495H6.63086H7.18009V3.04553H6.63086ZM9.24121 5.08167L9.31897 4.53796C9.07356 4.50287 8.82168 4.48366 8.56457 4.4836L8.56445 5.03284L8.56434 5.58207C8.76681 5.58211 8.96675 5.59723 9.16345 5.62537L9.24121 5.08167ZM8.56445 5.03284V4.4836C8.3068 4.4836 8.05351 4.50263 7.80684 4.53799L7.88477 5.08167L7.96269 5.62534C8.15967 5.59711 8.36086 5.58207 8.56445 5.58207V5.03284ZM7.88477 5.08167H8.434V1.57678H7.88477H7.33553V5.08167H7.88477ZM7.88477 1.57678V2.12601H9.24121V1.57678V1.02755H7.88477V1.57678ZM9.24121 1.57678H8.69198V5.08167H9.24121H9.79044V1.57678H9.24121Z"
      fill="white"
      mask="url(#path-1-inside-1_2278_707)"
    />
  </svg>
);

const metallicGradient = `conic-gradient(
  from 0deg,
  /* Bottom-Right 45° → Blue 0.4 */
  rgba(25, 159, 236, 0.4)   0%,
  rgba(25, 159, 236, 0.4)  16.7%,

  /* Bottom-Left 135° → Black */
  rgba(244, 81, 17, 0.8)      33.3%,
  rgba(25, 159, 236, 0.4)      50%,

  /* Top-Left 225° → Orange 0.8 */
  rgba(25, 159, 236, 0.4)   62.5%,

  /* Top-Center 250–290° → Blue 0.6 (≈30% width of top border) */
  rgba(25, 159, 236, 0.6)  69.4%,
  rgba(25, 159, 236, 0.6)  80.6%,

  /* Top-Right 315° → Orange 0.8 */
  rgba(244, 81, 17, 0.8)   87.5%,

  /* Loop back to starting color */
  rgba(25, 159, 236, 0.6) 100%
)`;

const HomeSection: React.FC = () => {
  return (
    <>
      <section
        className="w-full bg-cover bg-center bg-gray-900 text-white flex flex-col gap-8"
        style={{ backgroundImage: `url('/lp/fundoHeroSection.png')` }}
      >
        <Header />

        <div className="pl-20 flex flex-col md:flex-row items-center justify-between w-full gap-8">
          <div className="w-full space-y-8 text-left order-2 md:order-1">
            <h1 className="text-[48px] lg:text-[124px] leading-[56px] lg:leading-[108px] font-bold tracking-[-2px] lg:tracking-[-7.44px]">
              Game. On.
              <br className="hidden md:block" /> Echelon.
            </h1>
            <p className="text-[18px] lg:text-[20px] leading-[28px] pb-10 font-medium tracking-[-0.8px] w-full md:max-w-xl">
              A platform for online/hybrid (digitally augmented) tabletop gaming
              and digitally publishing original RPG systems.
            </p>

            <button className="bg-[#ffff] text-black text-[18px] px-8 py-3 rounded-full font-medium">
              Sign up for our mailing list
            </button>
          </div>

          <div className="w-full  flex order-1 md:order-2">
            <div className="flex items-center">
              <Image
                src="/lp/DasdhbordGame.png"
                alt="Echelon Logo"
                width={1034}
                height={605}
                quality={100}
                className="h-auto pr-[-80px]"
                style={{
                  maxHeight: "1200px",
                  paddingRight: "-80px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>

        <div className="w-full p-20 flex justify-center items-center">
          <div className="rounded-xl w-[1280px] h-[496px] bg-[url('/lp/fundoHeroSection.png')] bg-[background-position:center_90%] bg-cover ">
            <div className="p-10">
              <div className="flex items-start justify-start flex-row mb-10">
                <p className="text-[#199FEC] text-16px font-normal">
                  Begin your adventure here!
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between w-full ">
                <div className="w-full md:w-2/3 space-y-4 text-left order-2 md:order-1">
                  <h1 className="text-[44px]  leading-[48px] lg:leading-[108px] font-semibold tracking-[-1.76px]">
                    Welcome DragonCon 2025
                  </h1>
                  <p className="text-[18px] lg:text-[20px] leading-[28px] font-medium tracking-[-0.8px] w-full md:max-w-xl">
                    ConQuesting is a free live questing experience in the form
                    of a cosplay-focused photo-scavenger hunt. It is held in
                    Atlanta at DragonCon annually. Select your quests, snap your
                    pics, and get your loot!
                  </p>
                  <div className="flex flex-wrap items-center gap-2 lg:gap-3 text-[14px] leading-[28px] font-medium ">
                    <span>Assemble your party</span>
                    <Arrow />
                    <span>Select your quests</span>
                    <Arrow />
                    <span>Save your spots</span>
                    <Arrow />
                    <span>Claim your loot</span>
                  </div>

                  <button className="bg-[#199FEC] text-white text-[18px] px-6 py-3 rounded-full font-medium">
                    ConQuesting
                  </button>
                </div>

                <div className="w-full md:w-1/3 flex justify-center items-start order-1 md:order-2">
                  <Image
                    src="/lp/conquesting-logo.png"
                    alt="Conquesting Logo"
                    width={180}
                    height={180}
                    className="shrink-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
