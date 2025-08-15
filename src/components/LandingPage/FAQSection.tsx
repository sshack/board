import React, { useState } from "react";

const faqs = [
  {
    q: "Can I do more than one quest?",
    a: "We hope you will do as many quests as you want! But once you and your party members have received one of each reward type, we have to reserve some loot for other adventurers.",
  },
  {
    q: "Can I use my own cosplays to complete quests?",
    a: "Absolutely, creativity is encouraged.",
  },
  {
    q: "What are Mystery Quests?",
    a: "Mysterious quests with unknown rewards—complete to find out!",
  },
  {
    q: "What's the Secret Loot?",
    a: "If we told you, it wouldn't be secret.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/*VERSÃO DESKTOP*/}
      <section className="hidden max-w-[1440px] w-full md:block bg-black text-white px-4 md:px-0 py-16">
        <h2 className="text-[44px] font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto w-full">
          {faqs.map((item, idx) => (
            <div key={item.q} className="group relative">
              <div className="mx-auto w-full max-w-4xl px-4 md:px-8">
                <button
                  className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className="font-normal text-[20px]">{item.q}</span>
                  <span className="ml-4 text-2xl transition-transform duration-200">
                    {openIndex === idx ? "↑" : "↓"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === idx
                      ? "max-h-40 opacity-100 pb-2"
                      : "max-h-0 opacity-0 py-0"
                  }`}
                >
                  <p className="text-[rgba(255,255,255,0.7)] text-base text-[16px] mb-[28px]">
                    {item.a}
                  </p>
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
                style={{
                  background:
                    "var(--Radial, radial-gradient(50% 50% at 50% 50%, #F45111 0%, #DA5A2B 33%, #199FEC 68.5%, #000 100%))",
                }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </section>

      {/*VERSÃO MOBILE*/}
      <section className="w-full bg-black text-white px-4 md:hidden">
        <div className="w-full mx-auto">
          <h2 className="text-[28px] font-normal leading-9 tracking-[-1.12px] pb-10">
            Frequently <br /> Asked Questions
          </h2>

          <div className="border-t border-[#2A4152]/60">
            {faqs.map((item, idx) => (
              <div key={item.q} className="border-b border-[#2A4152]/60">
                <button
                  className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className="font-normal text-[20px]">{item.q}</span>
                  <span
                    className={`ml-4 text-2xl transition-transform duration-200 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    openIndex === idx
                      ? "grid-rows-[1fr] opacity-100 pb-6"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[rgba(255,255,255,0.7)] text-[16px] leading-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
