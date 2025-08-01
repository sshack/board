import React from 'react';

const ClaimSection: React.FC = () => {
  const cards = [
    {
      title: 'Get the Core Quest Team',
      description: 'Quest hints loaded with awesomeness to choose from',
    },
    { title: 'Anno Armagium', description: 'The RPG - Core Rules' },
    {
      title: 'Useful Links',
      description: 'Join the crew for more epic quests',
    },
  ];

  return (
    <section className="w-full bg-gray-800 text-white px-6 md:px-16 py-16 space-y-8">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Claim Your First Reward Here
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col justify-between bg-gray-900 p-6 rounded-lg border border-gray-700"
          >
            <div className="h-40 bg-black rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-400 mb-4 flex-1">{card.description}</p>
            <button className="self-start bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">
              Download as PDF
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClaimSection;
