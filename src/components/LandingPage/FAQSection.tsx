import React, { useState } from 'react';

const faqs = [
  {
    q: 'Can I do more than one quest?',
    a: "We hope you will do as many quests as you want! But once you and your party members have received one of each reward type, we have to reserve some loot for other adventurers.",
  },
  {
    q: 'Can I use my own cosplays to complete quests?',
    a: 'Absolutely, creativity is encouraged.',
  },
  {
    q: 'What are Mystery Quests?',
    a: 'Mysterious quests with unknown rewards—complete to find out!',
  },
  {
    q: "What's the Secret Loot?",
    a: "If we told you, it wouldn't be secret.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-black text-white px-4 md:px-0 py-16">
      <h2 className="text-[44px] md:text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto divide-y divide-[#2A4152]">
        {faqs.map((item, idx) => (
          <div key={item.q} className="group">
            <button
              className="w-full flex justify-between items-center py-6 px-4 md:px-8 text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="font-normal text-[20px]">{item.q}</span>
              <span className="ml-4 text-2xl transition-transform duration-200">
                {openIndex === idx ? '↑' : '↓'}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 px-4 md:px-8 ${
                openIndex === idx ? 'max-h-40 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'
              }`}
            >
              <p className="text-[rgba(255,255,255,0.7)] text-base text-[16px]">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
