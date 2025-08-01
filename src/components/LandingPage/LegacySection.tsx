import React from 'react';

const LegacySection: React.FC = () => {
  const points = [
    "We've held ConQuesting in Atlanta at DragonCon since 2016, expanding yearly in scope with epic tales.",
    "Starting with embroidered hand-sewn trinkets and candy prizes, we've since expanded to digital prizes, social quests, quests of artistry, intrigue, research opportunities, and we've done it all without losing anything along the way.",
    'This year we will be handing out 600 Mystery Quest Scrolls over the course of con, each comprising 120 different quests.',
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-6 md:px-16 py-16 space-y-12">
      <div className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold">
          ConQuesting\'s Legacy
        </h2>
        <ul className="space-y-4 list-disc list-inside text-gray-300">
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
      <p className="text-center text-gray-500">
        This year? The end of DragonCon is just the beginning…
      </p>
    </section>
  );
};

export default LegacySection;
