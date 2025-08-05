import React from 'react';
import Image from 'next/image';
import Header from './Header';

const UpdateGame = () => {
  return (
    <section className="bg-black w-[1440px] text-white px-6 mb-20">
      <div className="max-w-[1280px] mx-auto pt-40">
        {/* Título */}
        <h2 className="text-center text-[56px] leading-[64px] font-semibold mb-32">
          Stay on top of the latest game <br />
          updates, news, and reveals right here.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#0B1C2C] rounded-lg overflow-hidden">
            <div className="w-full h-[248px] overflow-hidden">
              <Image
                src="/lp/cardUpdate001.png"
                alt="Anno Amagium"
                width={400}
                height={248}
                className="w-full h-full object-cover object-[center_top]"
              />
            </div>
            <div className="w-[400px] h-[224px] p-6">
              <p className="text-sm text-gray-400">
                Hank Whitson • Aug 22, 2024 • 2 min read
              </p>
              <h3 className="text-[20px] text-white mt-2 mb-1">
                Introducing Anno Amagium Role Playing Game!
              </h3>
              <p className="text-[16px] text-gray-300">
                A true, next-gen tabletop RPG, Anno Amagium: The Roleplaying
                Game is based on the Anno Amagium Universe...
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0B1C2C] rounded-lg overflow-hidden">
            <div className="w-full h-[248px] relative overflow-hidden">
              <Image
                src="/lp/cardUpdate002.png"
                alt="Echelon"
                width={450}
                height={300}
                className="w-full h-full"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-400">
                Hank Whitson • Aug 22, 2024 • 2 min read
              </p>
              <h3 className="text-lg font-semibold mt-2 mb-1">
                Introducing Echelon!
              </h3>
              <p className="text-sm text-gray-300">
                A platform for online/hybrid (digitally augmented) tabletop
                gaming and digitally publishing original RPG systems...
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0B1C2C] rounded-lg overflow-hidden">
            <div
              className="w-full h-[248px] flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundImage: "url('/lp/fundo2last.png')",
                backgroundSize: '200% 100%',
                backgroundPosition: 'left center',
              }}
            >
              <Image
                src="/lp/conquesting-logo.png"
                alt="DragonCon"
                width={120}
                height={120}
                className="flex items-center justify-center object-cover object-[center_top]"
              />
              <div className="absolute top-0 left-0 w-full h-2" />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-400">
                Hank Whitson • Aug 22, 2024 • 2 min read
              </p>
              <h3 className="text-lg font-semibold mt-2 mb-1">
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
