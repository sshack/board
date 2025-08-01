import React from 'react';

const OtherRewardsSection: React.FC = () => {
  const extraTasks = [
    {
      title: 'Get Anno Armagium',
      description: 'The RPG - Ultimate Guide to Heroing',
    },
    {
      title: 'Read Anno Armagium',
      description: 'The RPG - Character Creation Manual',
    },
    { title: 'Do you have secret loot to share?', description: '???' },
  ];

  return (
    <section className="w-full bg-gray-800 text-white px-6 md:px-16 py-16 space-y-12">
      <div className="space-y-4 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          What are the{' '}
          <span className="text-blue-500">other possible rewards</span>?
        </h2>
        <p className="text-gray-400">
          The greatest kind of rewards: trinkets of mystery and adventure, badge
          ribbons, digital codes, and items of unknown origin.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-8">
        {/* Main reward card */}
        <div className="flex-1 bg-gray-900 p-6 rounded-lg border border-gray-700 flex flex-col gap-4">
          <div className="h-48 bg-black rounded" />
          <h3 className="text-xl font-semibold">
            Anno Amagium: The RPG - Core Rules
          </h3>
          <button className="self-start bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">
            Download
          </button>
        </div>

        {/* Extra tasks list */}
        <div className="flex-1 grid grid-cols-1 gap-6">
          {extraTasks.map((task) => (
            <div
              key={task.title}
              className="bg-gray-900 p-4 rounded-lg border border-gray-700"
            >
              <h4 className="font-medium text-white mb-1">{task.title}</h4>
              <p className="text-gray-400 text-sm">{task.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherRewardsSection;
