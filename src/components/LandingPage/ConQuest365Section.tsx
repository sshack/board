import React from "react";

const dailyQuests = [
  {
    icon: "/lp/trophy-icon.png",
    text: "expressions of nerdy passion (show us your favorite piece of superhero merch)",
  },
  {
    icon: "/lp/art-icon.png",
    text: "whimsical artistry (doodle a cat's face)",
  },
  {
    icon: "/lp/sword-icon.png",
    text: "adventuresome absurdity (find a stick suitable for swordplay)",
  },
  {
    icon: "/lp/heart-icon.png",
    text: "bite-sized acts of benevolence (help a housemate with a chore)",
  },
  {
    icon: "/lp/book-icon.png",
    text: "manageable ways to level up IRL (read at least 30 pages of something you find interesting or enriching!)",
  },
];

const ConQuest365Section: React.FC = () => {
  return (
    <>
      {/*Versão Desktop*/}
      <section className="hidden w-full bg-black text-white px-4 md:px-0 py-16">
        <h2 className="text-[56px] md:text-4xl font-bold text-center mb-12">
          ConQuesting 365
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Texto à esquerda */}
          <div className="flex-1 flex flex-col items-start">
            <p className="text-white text-[29px] mb-6 leading-[44px]">
              Follow @gameonechelon on Instagram to receive daily quest prompts
              starting on September 1st.
            </p>
            <div className="flex flex-col">
              <span className="flex flex-col font-semibold mb-2">
                Daily quests will include
              </span>
              <ul className="flex flex-col space-y-3">
                <li className="flex items-start gap-3 text-gray-200 text-base">
                  <img
                    src="/lp/icon2.svg"
                    alt="Trophy Icon"
                    className="w-[28px] h-[28px]"
                  />
                  <span className="text-[#A4A4B2] text-[16px]">
                    {dailyQuests[0].text}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-200 text-base">
                  <img
                    src="/lp/icon3.svg"
                    alt="Trophy Icon"
                    className="w-[28px] h-[28px]"
                  />
                  <span className="text-[#A4A4B2] text-[16px]">
                    {dailyQuests[1].text}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-200 text-base">
                  <img
                    src="/lp/icon4.svg"
                    alt="Trophy Icon"
                    className="w-[28px] h-[28px]"
                  />
                  <span className="text-[#A4A4B2] text-[16px]">
                    {dailyQuests[2].text}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-200 text-base">
                  <img
                    src="/lp/icon1.svg"
                    alt="Trophy Icon"
                    className="w-[28px] h-[28px]"
                  />
                  <span className="text-[#A4A4B2] text-[16px]">
                    {dailyQuests[3].text}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-200 text-base">
                  <img
                    src="/lp/icon5.svg"
                    alt="Trophy Icon"
                    className="w-[28px] h-[28px] "
                  />
                  <span className="text-[#A4A4B2] text-[16px]">
                    {dailyQuests[4].text}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Imagem do celular à direita */}
          <div className="flex-1 flex items-center justify-center overflow-hidden">
            <div
              className="w-[500px] h-[500px] rounded-xl flex items-center justify-center"
              style={{
                backgroundImage: "url(/lp/link2.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Versão Mobile*/}

      <section className="w-full bg-black  text-white md:hidden mb-[120px]">
        <h2 className="text-[40px] leading-[48px] tracking-[-1.6px] font-semibold pb-9 text-center">
          ConQuesting 365
        </h2>
        <div className="flex items-center justify-center px-6 pb-12 overflow-hidden">
          <div className="w-full h-[327px] bg-[url('/lp/365-mob.png')] bg-center bg-cover bg-no-repeat px-6"></div>
        </div>
        <div className="flex flex-col ">
          {/* Texto à esquerda */}
          <div className="flex flex-col items-start px-6">
            <p className="text-white text-[24px] leading-8 tracking-[-0.96px] pb-10">
              Follow @gameonechelon on Instagram to receive daily quest prompts
              starting on September 1st.
            </p>
            <div className="flex flex-col">
              <span className="flex flex-col font-normal text-[18px]  leading-6 tracking-[-0.72px] mb-[20px]">
                Daily quests will include
              </span>
              <ul className="flex flex-col space-y-5">
                <li className="flex items-start gap-3 text-gray-200 text-base">
                  <img
                    src="/lp/icon2.svg"
                    alt="Trophy Icon"
                    className="w-[28px] h-[28px]"
                  />
                  <span className="text-[#A4A4B2] text-[16px]">
                    {dailyQuests[0].text}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-200 text-base">
                  <img
                    src="/lp/icon3.svg"
                    alt="Trophy Icon"
                    className="w-[28px] h-[28px]"
                  />
                  <span className="text-[#A4A4B2] text-[16px]">
                    {dailyQuests[1].text}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-200 text-base">
                  <img
                    src="/lp/icon4.svg"
                    alt="Trophy Icon"
                    className="w-[28px] h-[28px]"
                  />
                  <span className="text-[#A4A4B2] text-[16px]">
                    {dailyQuests[2].text}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-200 text-base">
                  <img
                    src="/lp/icon1.svg"
                    alt="Trophy Icon"
                    className="w-[28px] h-[28px]"
                  />
                  <span className="text-[#A4A4B2] text-[16px]">
                    {dailyQuests[3].text}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-200 text-base">
                  <img
                    src="/lp/icon5.svg"
                    alt="Trophy Icon"
                    className="w-[28px] h-[28px] "
                  />
                  <span className="text-[#A4A4B2] text-[16px]">
                    {dailyQuests[4].text}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Imagem do celular à direita */}
        </div>
      </section>
    </>
  );
};

export default ConQuest365Section;
