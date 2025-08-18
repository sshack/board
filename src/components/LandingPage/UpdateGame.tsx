import React from "react";
import Image from "next/image";
import Header from "./Header";

const UpdateGame = () => {
  return (
    <section className="bg-black w-full bg-[url('/lp/Update/bgroleplay.png')] bg-cover bg-center text-white mb-40 pt-20 md:pt-36 relative">
      <div className="pointer-events-none flex !w-full h-[2500px] absolute bottom-0 z-0 bg-gradient-to-t from-black to-transparent md:h-40" />
      <div className="max-w-[1280px] mx-auto pt-20 md:pt-40 sm:px-6 md:px-0 z-10 relative">
        {/* Título */}
        <h2 className="px-6 text-[40px] leading-[48px] md:text-center sm:text-[36px] md:text-[56px] md:leading-[64px] font-semibold mb-12 md:mb-32">
          Stay on top of <br className="md:hidden" />
          the latest game <br className="hidden md:block" /> updates, news,{" "}
          <br className="md:hidden" /> and reveals right here.
        </h2>

        {/* Cards */}
        <div className="px-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 z-10">
          {/* Card 1 */}
          <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden">
            <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
              <Image
                src="/lp/Update/cardUpdate001.png"
                alt="Anno Amagium"
                width={400}
                height={248}
                className="w-full h-full"
              />
            </div>
            <div className="p-4 md:w-[400px] md:h-[224px] md:p-6">
              <p className="text-sm text-gray-400">
                Hank Whitson • Aug 22, 2024 • 2 min read
              </p>
              <h3 className="text-[18px] md:text-[20px] text-white mt-2 mb-1">
                Introducing Anno Amagium Role Playing Game!
              </h3>
              <p className="text-sm md:text-[16px] text-gray-300">
                A true, next-gen tabletop RPG, Anno Amagium: The Roleplaying
                Game is based on the Anno Amagium Universe...
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden">
            <div className="w-full h-[200px] md:h-[248px] relative overflow-hidden">
              <Image
                src="/lp/Update/cardUpdate002.png"
                alt="Echelon"
                width={450}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-6 z-10">
              <p className="text-sm text-gray-400">
                Hank Whitson • Aug 22, 2024 • 2 min read
              </p>
              <h3 className="text-[18px] md:text-lg font-semibold mt-2 mb-1">
                Introducing Echelon!
              </h3>
              <p className="text-sm text-gray-300">
                A platform for online/hybrid (digitally augmented) tabletop
                gaming and digitally publishing original RPG systems...
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden">
            <div
              className="w-full h-[200px] md:h-[248px] flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundImage: "url('/lp/Update/fundo2last.png')",
                backgroundSize: "200% 100%",
                backgroundPosition: "left center",
              }}
            >
              <Image
                src="/lp/Update/conquesting-logo.png"
                alt="DragonCon"
                width={100}
                height={100}
                className="flex items-center justify-center object-cover"
              />
            </div>
            <div className="p-4 md:p-6">
              <p className="text-sm text-gray-400">
                Hank Whitson • Aug 22, 2024 • 2 min read
              </p>
              <h3 className="text-[18px] md:text-lg font-semibold mt-2 mb-1">
                Find Us on DragonCon!
              </h3>
              <p className="text-sm text-gray-300">
                Friends. Gamers. Fellow adventurers. We bid you fond greetings
                and a warm welcome to Echelon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateGame;
