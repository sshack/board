import React from 'react';

const ConQuest365Section: React.FC = () => {
  return (
    <section className="w-full bg-gray-900 text-white px-6 md:px-16 py-16 space-y-8">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        ConQuesting 365
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
        <div className="flex-1 space-y-4">
          <p className="text-gray-400">
            Follow <span className="text-blue-500">@gamoneechelon</span> on
            Instagram to receive daily quest prompts starting on September 1st.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>
              Wanderlust travel inspiration driven by your favorite places of
              adventure.
            </li>
            <li>Enthusiasm-driven daily cosplay challenges.</li>
            <li>Skill-development quests (fit checks & more!).</li>
          </ul>
        </div>

        {/* Placeholder phone image */}
        <div className="flex-1 w-full h-80 bg-black rounded-lg" />
      </div>
    </section>
  );
};

export default ConQuest365Section;
