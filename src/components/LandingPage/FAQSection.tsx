import React from 'react';

const faqs = [
  {
    q: 'Can I do more than one quest?',
    a: 'Yes! You are welcome to try as many as you want! Just be sure you and party members have the stamina to do other adventures.',
  },
  {
    q: 'Can I use my own cosplay to complete quests?',
    a: 'Absolutely, creativity is encouraged.',
  },
  {
    q: 'What are Mystery Quests?',
    a: 'Mysterious quests with unknown rewards—complete to find out!',
  },
  {
    q: 'What is the Secret Loot?',
    a: "If we told you, it wouldn't be secret.",
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-900 text-white px-6 md:px-16 py-16 space-y-8">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="bg-gray-800 rounded-lg border border-gray-700"
          >
            <summary className="cursor-pointer py-4 px-6 font-medium text-lg flex justify-between items-center">
              {item.q}
            </summary>
            <div className="px-6 pb-4 text-gray-400">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
