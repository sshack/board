"use client";
import React from "react";
import { teamMembers } from "@/utils/mocks";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TeamPerson: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[url('/lp/TeamPerson/bg-img-mob-001.png')] md:bg-[url('/lp/Update/bgroleplay.png')] bg-cover bg-center relative overflow-hidden">
      <div className="pointer-events-none flex !w-full h-80 absolute bottom-0 z-0 bg-gradient-to-t from-black to-transparent" />
      <div className="relative z-10 container mx-auto md:px-4">
        <div className="mb-20">
          <div className="mt-[160px] md:mt-[220px] px-6 md:text-center md:mb-36">
            <h1 className=" text-[40px] leading-[48px] tracking-[-1.6px] md:text-[56px] md:leading-[64px] md:tracking-[-2.24px] font-semibold text-white mb-[25px]">
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
                    <div className=" bg-[#0B1C2C] rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
                      <div className="relative flex items-center justify-center h-[308px]">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover shadow-md"
                          />
                        ) : (
                          <div className="w-[300px] h-[300px] rounded-full bg-gray-300 shadow-md flex items-center justify-center">
                            <span className="text-gray-600 text-2xl">?</span>
                          </div>
                        )}
                      </div>
                      <div className="h-full w-full bg-gray-900 px-5 pt-5 ">
                        <h3 className="text-white text-[20px]">
                          {member.name}
                        </h3>
                        <p className="text-[#199FEC] text-[14px]">
                          {member.role}
                        </p>
                        <div className="mt-5  space-y-2 flex flex-col pb-5">
                          <div className=" flex text-white text-[14px] gap-2">
                            <p className="text-[#199FEC]">Location:</p>
                            <span className="break-words">
                              {member.location}
                            </span>
                          </div>
                          <div className="flex text-white text-[14px] gap-2">
                            <p>
                              <span className="text-[#199FEC]">Expertise:</span>{" "}
                              {member.expertise}
                            </p>
                          </div>
                          <div className="text-white text-[14px]">
                            <p>
                              <span className="text-[#199FEC]">Fun Fact:</span>{" "}
                              {member.funFact}
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
                <div key={member.id} className="group">
                  <div className="rounded-xl p-[1px] h-[340px] bg-gradient-to-br from-[#199FEC]/20 to-[#00B4FF]/10 group-hover:from-[#199FEC]/70 group-hover:to-[#00B4FF]/40 transition-all duration-300">
                    <div className="relative h-full rounded-xl overflow-hidden bg-[#0B1C2C]">
                      <div className="h-48 bg-[#0B1C2C] flex items-center justify-center overflow-hidden">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="absolute inset-0 w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                          />
                        ) : (
                          <div className="w-32 h-32 rounded-full bg-gray-300 shadow-md flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                            <span className="text-gray-600 text-2xl">?</span>
                          </div>
                        )}
                      </div>

                      <div className="bg-[#0A2435] h-full  mt-10 py-5 px-6 transition-opacity duration-300 group-hover:opacity-0">
                        <h3 className="text-white text-[20px]">
                          {member.name}
                        </h3>
                        <p className="text-[#199FEC] text-[14px]">
                          {member.role}
                        </p>
                      </div>

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent via-[#0B1C2C]/80 to-[#0B1C2C]" />
                        <div className="relative ">
                          <div className="h-full w-full bg-white/5 px-5 py-4 flex flex-col">
                            <h3 className="text-white text-[18px] leading-none mb-2">
                              {member.name}
                            </h3>
                            <p className="text-[#199FEC] text-[14px] leading-none">
                              {member.role}
                            </p>
                          </div>
                          <div className="h-full pb-5 flex flex-col px-5 pt-6 space-y-3">
                            <div>
                              <div className="text-[#199FEC] text-[14px]">
                                Location
                              </div>
                              <div className="text-white text-[14px]">
                                {member.location}
                              </div>
                            </div>
                            <div>
                              <div className="text-[#199FEC] text-[14px]">
                                Expertise
                              </div>
                              <div className="text-white text-[14px]">
                                {member.expertise}
                              </div>
                            </div>
                            <div>
                              <div className="text-[#199FEC] text-[14px]">
                                Fun Fact
                              </div>
                              <div className="text-white text-[14px]">
                                {member.funFact}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPerson;
