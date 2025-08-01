import React from 'react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      title: 'Receive a Mystery Quest Scroll',
      description: 'An ancient scroll to spark your next Epic Quest Tales.',
    },
    {
      title: 'Complete your quest',
      description:
        'Usually by performing a series of specific cosplay-worthy tasks.',
    },
    {
      title: 'Return and claim rewards',
      description:
        'Bring back your scroll to get badge ribbons and other possible rewards.',
    },
  ];

  return (
    <section className="w-full bg-gray-900 text-white px-6 md:px-16 py-16 space-y-8">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        How Does This Work?
      </h2>
      <p className="text-center text-gray-400">
        ConQuesting is easy. Follow these three steps.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.title}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col gap-4"
          >
            <div className="h-32 bg-black rounded" />
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-400 flex-1">{step.description}</p>
            <button className="self-start bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">
              Download Your Quest Scroll
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
