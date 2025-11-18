'use client';

import { useState, useEffect } from 'react';

type JobItem = {
  id: string;
  title: string;
  brief: string;
  fullDescription: string;
  email?: string;
  emailSubject?: string;
  requirements?: string[];
  type: 'opportunity' | 'position';
  showSalaryExpectations?: boolean;
};

export default function NextMember() {
  const [selectedItem, setSelectedItem] = useState<JobItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const scrollToSubscribe = () => {
    const el = document.getElementById('subscribe-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen]);

  const opportunities: JobItem[] = [
    {
      id: 'ttrpg-creators',
      title: 'Independent TTRPG Creators',
      brief: 'Build games from scratch or adapt existing homebrews',
      fullDescription: `If you have a Custom Campaign that you either built from scratch or homebrewed so aggressively that it is meaningfully distinct from its source material, we want to hear from you. We aren't ready to begin adapting games just yet, but we want to start conversations with interested collaborators now.

Talk about your mechanics (in as much detail as you feel comfortable with), describe your system's setting or unique narrative opportunities, share stories from your table... Anything goes.`,
      email: 'Hank.Whitson@ToWhitVentures.com',
      emailSubject: 'Original Game: [Your Title Here]',
      type: 'opportunity',
      showSalaryExpectations: false,
    },
    {
      id: 'patrons-angels',
      title: 'Patrons, Angels, and Investors',
      brief: 'Long-term investment opportunity in tabletop gaming',
      fullDescription: `We are seeking funds to recruit a team of intrepid adventurers fit for slaying figurative dragons. In return, we can offer equity in To Whit Ventures. This is a long-term investment opportunity with the potential to redefine how tabletop games are played and published online.`,
      email: 'Hank.Whitson@ToWhitVentures.com',
      emailSubject: 'Investment Opportunity',
      type: 'opportunity',
      showSalaryExpectations: false,
    },
  ];

  const openings: JobItem[] = [
    {
      id: 'benevolent-master',
      title: 'Benevolent Master of Coin',
      brief: 'Financial expert to manage our treasury',
      fullDescription: `We are seeking an experienced economancer. A mage with a mind for money who craves fiscal and creative enrichment. This role revolves around strategic financial planning, budget management, and economic puzzle solving. We need someone who is genuinely excited by the prospect of making a quality online gaming platform that is also fair toward its userbase, and we realize that is an enormous undertaking. Phrased differently… "Likely Fat Coinpurse, but Courage Required Ahead."

All applicants must have a good grasp on the gaming industry as a whole, and at least a passing familiarity with current titles and trends. An ideal candidate will have prior experience with startup finances and work history in the gaming space specifically. In addition to the standard application materials, please add two additional paragraphs to your cover letter. In the first, briefly discuss why this project is particular interest to you. In the second, please discuss a gaming monetization model that you appreciate.`,
      requirements: [
        'A brief 3-paragraph cover letter',
        'Your current resume',
        'Links to pertinent portfolios or content channels',
      ],
      email: 'Careers@ToWhitVentures.com',
      emailSubject: 'CFO',
      type: 'position',
      showSalaryExpectations: true,
    },
    {
      id: 'fullstack-engineer',
      title: 'Full-Stack Software Engineer',
      brief: 'Next.js & Node.js wizard for our gaming platform',
      fullDescription: `We're seeking a talented full-stack engineer to help build the next generation of online tabletop gaming. You'll work with our modern tech stack including Next.js 15, Node.js, AWS, and PostgreSQL to create seamless experiences for players and game masters alike.

The ideal candidate has experience with React/Next.js, TypeScript, server-side rendering, API design, and database optimization. Experience with real-time applications and gaming platforms is a huge plus.`,
      requirements: [
        'Portfolio of Next.js/React projects',
        'Examples of Node.js APIs you have built',
        'Brief description of your experience with AWS and PostgreSQL',
        'Your current resume',
      ],
      email: 'Careers@ToWhitVentures.com',
      emailSubject: 'Full-Stack Engineer',
      type: 'position',
      showSalaryExpectations: true,
    },
    {
      id: 'game-developer',
      title: 'Game Developer - Pixi.js Specialist',
      brief: 'Create immersive 2D gaming experiences',
      fullDescription: `Join us in building incredible browser-based tabletop experiences using Pixi.js. You'll be responsible for implementing game mechanics, animations, and interactive elements that bring tabletop games to life in the digital realm.

Strong JavaScript/TypeScript skills and experience with Pixi.js or similar 2D rendering libraries required. Understanding of game development patterns, performance optimization, and multiplayer synchronization is essential.`,
      requirements: [
        'Portfolio showcasing Pixi.js or Canvas/WebGL projects',
        'Code samples demonstrating clean architecture',
        'Your approach to performance optimization',
        'Current resume with game development experience',
      ],
      email: 'Careers@ToWhitVentures.com',
      emailSubject: 'Game Developer',
      type: 'position',
      showSalaryExpectations: true,
    },
    {
      id: 'backend-engineer',
      title: 'Backend Engineer - AWS & PostgreSQL',
      brief: 'Build scalable infrastructure for millions of players',
      fullDescription: `We need a backend engineer who can architect and maintain robust, scalable systems on AWS. You'll work with PostgreSQL, design RESTful and WebSocket APIs, implement game state management, and ensure our platform can handle the demands of real-time multiplayer gaming.

Experience with AWS services (EC2, RDS, Lambda, S3), PostgreSQL optimization, Node.js, and real-time systems required. Knowledge of game backend architecture and session management is a plus.`,
      requirements: [
        'Examples of scalable systems you have built',
        'Your experience with AWS services and PostgreSQL',
        'Approach to handling real-time multiplayer challenges',
        'Current resume',
      ],
      email: 'Careers@ToWhitVentures.com',
      emailSubject: 'Backend Engineer',
      type: 'position',
      showSalaryExpectations: true,
    },
    {
      id: 'veteran-game-masters',
      title: 'Veteran Game Masters',
      brief: 'Talented storytellers to run our game and provide feedback',
      fullDescription: `We need talented storytellers to run our game, provide early impressions, and contribute feedback. We will get you the earliest possible access to Anno Amagium's public alpha, and regular updates on game development. You must be a veteran of many TTRPG campaigns, both as a player and the game master. Total time spent on a campaign is difficult to quantify, especially when measuring time at the table versus research, versus prep work, but we are looking for true masters in the sense of "I have been doing this for over ten-thousand hours."

Use "Game Master" in the subject line of your email. In addition to the standard application materials, please include 5 questions about Anno Amagium's core rules, and 5 questions about its lore.`,
      requirements: [
        'A brief cover letter discussing your GM experience',
        'Your current resume',
        "5 questions about Anno Amagium's core rules",
        "5 questions about Anno Amagium's lore",
      ],
      email: 'Careers@ToWhitVentures.com',
      emailSubject: 'Game Master',
      type: 'position',
      showSalaryExpectations: true,
    },
    {
      id: 'content-creators',
      title: 'Tabletop Content Creators, Streamers, and Tastemakers',
      brief: 'Spread the word about our game through your content',
      fullDescription: `Wanted: Talented Streamer or Similar to play our game and spread the word. We will get you the earliest possible access to Anno Amagium's public alpha and regular info updates on game development. Applicants must be polite, professional, and make awesome content. Candidates with at least one year of regular updates in their respective field are preferred.

Use "Content Creator" in the subject line of your email. In addition to your normal materials, please share your engagement numbers, links to your channels, and an example of what you feel is your finest TTRPG content.`,
      requirements: [
        'Your current resume',
        'Engagement numbers and channel statistics',
        'Links to your content channels',
        'Example of your finest TTRPG content',
      ],
      email: 'Careers@ToWhitVentures.com',
      emailSubject: 'Content Creator',
      type: 'position',
      showSalaryExpectations: true,
    },
    {
      id: 'digital-cartographers',
      title: 'Digital Cartographers and Battle Map Creators',
      brief: 'Create maps for battle, exploration, and traditional cartography',
      fullDescription: `We need a talented mapwright to… make maps. Lots of maps. Mostly for battle and exploration, but a smattering of traditional cartography as well. Ideal candidates will have the ability to create excellent art that matches the game's established aesthetic, in a variety of modern and fantastic settings.

Include "Cartographer" in the subject of your email.`,
      requirements: [
        'Portfolio of map work',
        'Your current resume',
        'Examples demonstrating various styles and settings',
      ],
      email: 'Careers@ToWhitVentures.com',
      emailSubject: 'Cartographer',
      type: 'position',
      showSalaryExpectations: true,
    },
    {
      id: 'icon-tokens-wizard',
      title: 'Icon & Tokens Wizard',
      brief: 'Create character portraits, spell effects, and item icons',
      fullDescription: `An endless supply of small images showing everything from character portraits, to spell effects, to weapon and item icons, tailored to the game's unique aesthetic.

Include "Icon Artist" in the subject line of your email.`,
      requirements: [
        'Portfolio showcasing icon and token work',
        'Your current resume',
        'Examples of various icon styles',
      ],
      email: 'Careers@ToWhitVentures.com',
      emailSubject: 'Icon Artist',
      type: 'position',
      showSalaryExpectations: true,
    },
  ];

  // Pagination logic
  const itemsPerPage = 4;
  const totalPages = Math.ceil(openings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOpenings = openings.slice(startIndex, endIndex);

  const allItems: JobItem[] = [...opportunities, ...openings];

  const handleOpenModal = (item: JobItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <>
      <div className="bg-black p-6 w-full md:bg-transparent py-10 md:py-0 flex justify-center md:mb-20">
        <div className="h-full w-full md:max-w-[1280px] md:w-full md:min-h-[640px] bg-[url('/lp/NextMember/are-you-our-next-team-member-mob-bg.png')] md:bg-[url('/lp/NextMember/fundoRecrutamento.png')] relative bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden">
          <div className="flex flex-col px-6 pt-[272px] md:py-12 md:px-12 md:pt-12">
            {/* Header */}
            <div className="mb-8">
              <p className="text-[#199FEC] text-sm font-medium mb-4">
                Are you our next team member?
              </p>
              <h2 className="text-[28px] leading-9 tracking-[-1.12px] md:text-[44px] font-semibold md:leading-[48px] text-white md:tracking-[-1.76px] md:max-w-[671px]">
                We're looking for creative minds to help us build the ultimate
                online gaming platform.
              </h2>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 pb-8">
              {/* Opportunities Column */}
              <div className="space-y-6">
                <h3 className="text-[#199FEC] text-lg md:text-xl font-semibold uppercase tracking-wide">
                  Opportunities
                </h3>

                <div className="space-y-4">
                  {opportunities.map((item) => (
                    <div
                      key={item.id}
                      className="group cursor-pointer transition-transform hover:translate-x-1"
                      onClick={() => handleOpenModal(item)}
                    >
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#199FEC] mr-3 transform rotate-45 mt-1.5 flex-shrink-0"></div>
                        <div className="flex-1">
                          <span className="text-white font-medium text-[15px] md:text-[16px] group-hover:text-[#199FEC] transition-colors">
                            {item.title}
                          </span>
                          <p className="text-gray-400 text-[13px] md:text-[14px] mt-1">
                            {item.brief}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#199FEC]/10 rounded-lg p-4 border border-[#199FEC]/30">
                  <p className="text-white text-[13px] md:text-[14px] font-medium mb-2">
                    <span className="text-[#199FEC]">
                      Note for Creative Applicants:
                    </span>
                  </p>
                  <p className="text-gray-300 text-[12px] md:text-[13px]">
                    If you are interested in applying—especially for creative
                    positions—we strongly recommend serious applicants
                    familiarize themselves with Anno Amagium's first two rule
                    books:
                  </p>
                  <div className="mt-2 space-y-1">
                    <a
                      href="https://storage.googleapis.com/gondola-public-bucket/anno_amagium_rpg_book_core_rules.pdf"
                      className="text-white underline text-[12px] md:text-[13px] hover:text-[#199FEC] transition-colors block"
                    >
                      Core Rules
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1bzw_WEk0VuvAndhqMKhxXf3EWMJBSU7e/view"
                      className="text-white underline text-[12px] md:text-[13px] hover:text-[#199FEC] transition-colors block"
                    >
                      Universe Guide & Lore
                    </a>
                  </div>
                </div>

                <p className="text-gray-300 text-[13px] md:text-[14px] italic">
                  All of the following listings are open to remote work, though
                  being close to the Los Angeles area is a plus.
                </p>
              </div>

              {/* Openings Column */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-[#199FEC] text-lg md:text-xl font-semibold uppercase tracking-wide">
                    Openings
                  </h3>

                  {/* Pagination controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentPage(1)}
                      className={`px-3 py-1 rounded text-sm transition-colors ${
                        currentPage === 1
                          ? 'bg-[#199FEC] text-white'
                          : 'bg-transparent text-gray-400 hover:text-white border border-gray-600 hover:border-[#199FEC]'
                      }`}
                    >
                      1
                    </button>
                    <button
                      onClick={() => setCurrentPage(2)}
                      className={`px-3 py-1 rounded text-sm transition-colors ${
                        currentPage === 2
                          ? 'bg-[#199FEC] text-white'
                          : 'bg-transparent text-gray-400 hover:text-white border border-gray-600 hover:border-[#199FEC]'
                      }`}
                    >
                      2
                    </button>
                  </div>
                </div>

                <div className="space-y-4 min-h-[320px]">
                  {currentOpenings.map((item) => (
                    <div
                      key={item.id}
                      className="group cursor-pointer transition-transform hover:translate-x-1"
                      onClick={() => handleOpenModal(item)}
                    >
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#199FEC] mr-3 transform rotate-45 mt-1.5 flex-shrink-0"></div>
                        <div className="flex-1">
                          <span className="text-white font-medium text-[15px] md:text-[16px] group-hover:text-[#199FEC] transition-colors">
                            {item.title}
                          </span>
                          <p className="text-gray-400 text-[13px] md:text-[14px] mt-1">
                            {item.brief}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-300 text-[13px] md:text-[14px]">
                  If you feel qualified for one or more of the positions, please
                  apply to the role that you feel is the best possible fit for
                  your skill set.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-6 md:mt-8 pb-8 md:pb-12">
              <p className="text-white text-[14px] md:text-[15px] mb-4">
                Interested? Join our mailing list to receive an update when we
                are ready to hire!
              </p>
              <button
                onClick={scrollToSubscribe}
                className="w-full md:w-auto bg-[#199FEC] text-white py-3 px-8 rounded-full text-[16px] hover:bg-[#0094d4] transition-colors"
              >
                Join our Mailing List
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-6"
          onClick={handleCloseModal}
          style={{ position: 'fixed' }}
        >
          <div
            className="bg-gradient-to-br from-[#0E3045] to-[#001824] border border-[#199FEC]/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[#199FEC] text-sm font-medium uppercase tracking-wide">
                    {selectedItem.type === 'opportunity'
                      ? 'Opportunity'
                      : 'Open Position'}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mt-2">
                    {selectedItem.title}
                  </h3>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-white transition-colors text-3xl leading-none p-1 -mt-2 -mr-2"
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                {selectedItem.brief && (
                  <p className="text-[#199FEC] text-lg border-l-4 border-[#199FEC] pl-4">
                    {selectedItem.brief}
                  </p>
                )}

                <div className="text-gray-300 text-[15px] md:text-[16px] leading-relaxed whitespace-pre-line">
                  {selectedItem.fullDescription}
                </div>

                {selectedItem.requirements && (
                  <div className="bg-black/30 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3 text-lg">
                      In addition to the requested materials relating to
                      specific positions, please include:
                    </h4>
                    <ul className="space-y-2">
                      {selectedItem.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-[#199FEC] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-[15px]">
                            {req}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Salary Expectations Note - Only show if showSalaryExpectations is true */}
                {selectedItem.showSalaryExpectations !== false && (
                  <div className="bg-[#199FEC]/10 rounded-lg p-4 border border-[#199FEC]/30">
                    <p className="text-[#199FEC] text-[13px] md:text-[14px] font-medium">
                      Be sure to specify your hourly rate or other salary
                      expectations.
                    </p>
                  </div>
                )}

                {/* Contact Section - Updated Email Button */}
                {(selectedItem.email || selectedItem.type === 'position') && (
                  <div className="border-t border-gray-700 pt-6">
                    <p className="text-gray-300 text-[15px] mb-4">
                      {selectedItem.type === 'opportunity'
                        ? 'Interested? Send us your information:'
                        : 'Ready to apply? Send your application to:'}
                    </p>
                    <div className="bg-gradient-to-r from-[#0E3045] to-[#001824] p-6 rounded-lg border border-[#199FEC]/30">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#199FEC]/20 rounded-full flex items-center justify-center">
                            <svg
                              className="w-5 h-5 text-[#199FEC]"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-white font-medium">
                              Careers@ToWhitVentures.com
                            </p>
                            <p className="text-gray-400 text-sm">
                              Subject:{' '}
                              {selectedItem.emailSubject || 'Application'}
                            </p>
                          </div>
                        </div>
                        <a
                          href={`mailto:${
                            selectedItem.email || 'Careers@ToWhitVentures.com'
                          }?subject=${encodeURIComponent(
                            selectedItem.emailSubject || 'Application'
                          )}`}
                          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#199FEC] to-[#0094d4] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                        >
                          <span>Send Application</span>
                          <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
