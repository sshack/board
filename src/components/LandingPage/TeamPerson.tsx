import React from 'react';
import { teamMembers } from '@/utils/mocks';

const TeamPerson: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-black bg-[url('/lp/bgroleplay.png')] bg-cover bg-center relative overflow-hidden pt-20 md:pt-36">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
            backgroundSize: '20px 20px',
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="mb-20">
          <div className="text-center mb-36 mt-10">
            <h1 className="text-[56px] md:text-5xl font-bold text-white mb-4">
              Meet the people who <br />
              make Echelon's magic happen
            </h1>
            <p className="text-[20px] text-white mx-auto">
              Meet our diverse team of world-class creators, designers, and
              problem solvers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-[#0B1C2C] rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 flex flex-wrap">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 flex items-center justify-center"
                        >
                          <svg
                            className="w-4 h-4 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-[244px] h-[244px] object-cover shadow-md"
                      />
                    ) : member.placeholder ? (
                      <div className="w-32 h-32 rounded-full bg-gray-300 shadow-md flex items-center justify-center">
                        <span className="text-gray-600 text-sm font-medium text-center px-2">
                          {member.placeholder}
                        </span>
                      </div>
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-gray-300 shadow-md flex items-center justify-center">
                        <span className="text-gray-600 text-2xl">?</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-gray-900 pt-16 p-6">
                  <h3 className="text-white text-[20px] mb-2">{member.name}</h3>

                  <p className="text-[#199FEC] text-[14px]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mb-20">
          <div
            className="w-[1280px] h-[496px] relative bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden"
            style={{ backgroundImage: `url('/lp/fundoRecrutamento.png')` }}
          >
            <div className="py-12 flex items-center justify-between px-12">
              <div>
                <p className="text-[#3b82f6] text-sm font-medium mb-20">
                  Are you our next team member?
                </p>

                <h2 className="text-[44px] w-[700px] font-bold text-white mb-6 leading-tight">
                  We're looking for creative minds to help us build the ultimate
                  online gaming platform.
                </h2>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#3b82f6] mr-3 transform rotate-45"></div>
                    <span className="text-[#199FEC] text-[14px]">
                      Character and Creature Concept Artist
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#3b82f6] mr-3 transform rotate-45"></div>
                    <span className="text-[#199FEC] text-[14px]">
                      2D Level Designer - Battle Map Creator
                    </span>
                  </div>
                </div>

                <button className="bg-[#199FEC] text-white py-3 px-8 rounded-full text-[16px]">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPerson;
