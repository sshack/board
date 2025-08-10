"use client";
import React from "react";
import { teamMembers } from "@/utils/mocks";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TeamPerson: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[url('/lp/bg-img-mob-001.png')] md:bg-[url('/lp/bgroleplay.png')] bg-cover bg-center relative overflow-hidden pt-20 md:pt-36">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto md:px-4 py-16">
        <div className="mb-20">
          <div className="px-6 md:text-center mb-[] md:mb-36 mt-10">
            <h1 className=" text-[40px] leading-[48px] tracking-[-1.6px] md:text-[56px] md:text-5xl font-semibold text-white mb-4">
              Meet the people <br className="md:hidden" />
              who <br className="hidden md:block" />
              make <br className="md:hidden" /> Echelon's magic happen
            </h1>
            <p className="leading-7 tracking-[-0.8px] text-[20px] text-white mx-auto">
              Meet our diverse team of world- <br className="md:hidden" /> class
              creators, designers, and <br className="md:hidden" />
              problem solvers.
            </p>
          </div>
          <div className="max-w-7xl mx-auto">
            {/* Mobile: Carrossel */}
            <div className="md:hidden">
              <Swiper
                spaceBetween={16}
                slidesPerView={1.2}
                centeredSlides
                loop={true}
              >
                {teamMembers.map((member) => (
                  <SwiperSlide key={member.id} className="!h-auto pt-[88px]">
                    <div className=" bg-[#0B1C2C] rounded-2xl overflow-hidden shadow-lg h-[508px] flex flex-col">
                      <div className="relative flex items-center justify-center flex-shrink-0 h-[308px]">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-[308px] object-cover shadow-md"
                          />
                        ) : (
                          <div className="w-[300px] h-[300px] rounded-full bg-gray-300 shadow-md flex items-center justify-center">
                            <span className="text-gray-600 text-2xl">?</span>
                          </div>
                        )}
                      </div>
                      <div className="h-full bg-gray-900 pt-8 px-6">
                        <h3 className="text-white text-[20px]">
                          {member.name}
                        </h3>
                        <p className="text-[#199FEC] text-[14px]">
                          {member.role}
                        </p>
                        <div className="mt-5  space-y-2 flex flex-col">
                          <div className=" flex text-white text-[14px] gap-2">
                            <p className="text-[#199FEC]">Location:</p>
                            <span className="break-words">
                              {member.location}
                            </span>
                          </div>
                          <div className="flex text-white text-[14px] gap-2">
                            <p className="text-[#199FEC]">Expertise:</p>
                            <span className="break-words">
                              {member.expertise}
                            </span>
                          </div>
                          <div className="flex items-start justify-center bg-pink-950 text-white text-[14px] gap-2">
                            <p>
                              <p className="text-[#199FEC]">Fun Fact:</p>{" "}
                              aosdoaskdoa dasodkaosdkasd asdoaksdoa asdkoaksdoa
                              dasdokaksdoasd okdasos
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop: Grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-[#0B1C2C] rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="h-48 bg-gray-200 relative flex items-center justify-center">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-[244px] h-[244px] object-cover shadow-md"
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-gray-300 shadow-md flex items-center justify-center">
                        <span className="text-gray-600 text-2xl">?</span>
                      </div>
                    )}
                  </div>
                  <div className="bg-gray-900 pt-8 p-6 text-center">
                    <h3 className="text-white text-[20px] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#199FEC] text-[14px]">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-black p-6 md:bg-transparent py-10 md:py-0 flex justify-center md:mb-20">
          <div className="h-[748px] w-full md:w-[1280px] md:h-[496px] bg-[url('/lp/are-you-our-next-team-member-mob-bg.png')] md:bg-[url('/lp/fundoRecrutamento.png')] relative bg-cover bg-no-repeat rounded-2xl overflow-hidden">
            <div className="flex px-6 py-[300px] md:py-12 md:items-center md:justify-between md:px-12">
              <div>
                <p className="text-[#3b82f6] text-sm font-medium md:mb-20">
                  Are you our next team member?
                </p>

                <h2 className="pt-7 text-[28px] leading-9 md:pt-0 md:text-[44px] md:w-[700px] font-normal text-white mb-6 tracking-[-1.12px]">
                  We're looking for creative minds to help us build the ultimate
                  online gaming platform.
                </h2>

                <div className="space-y-3 pt-11 md:pt-0 md:pb-10">
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

                <div className="md:hidden pt-10">
                  <button className="md:hidden w-full bg-[#199FEC] text-white py-3 md:px-8 rounded-full text-[16px]">
                    Apply Now
                  </button>
                </div>

                <button className="hidden md:block bg-[#199FEC] text-white py-3 md:px-8 rounded-full text-[16px]">
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
