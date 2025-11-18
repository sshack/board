import Image from 'next/image';
import Link from 'next/link';

const UpdateGame = () => {
  return (
    <section className="bg-black w-full bg-[url('/lp/Update/bgroleplay.png')] bg-cover bg-center text-white mb-40 relative">
      <div className="pointer-events-none flex !w-full h-[2500px] absolute bottom-0 z-0 bg-gradient-to-t from-black to-transparent md:h-40" />
      <div className="max-w-[1280px] mx-auto mt-[220px] sm:px-6 md:px-0 z-10 relative">
        {/* Título */}
        <h2 className="px-6 text-[40px] leading-[48px] md:text-center sm:text-[36px] md:text-[56px] md:leading-[64px] font-semibold mb-12 md:mb-32">
          Stay on top of <br className="md:hidden" />
          the latest game <br className="hidden md:block" /> updates, news,{' '}
          <br className="md:hidden" /> and reveals right here.
        </h2>

        {/* Cards */}
        <div className="px-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 z-10">
          {/* Card 1 */}
          <Link href="/updates/anno-amagium" className="block">
            <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform transition-all duration-500 ease-out">
              <div className="w-full h-[200px] md:h-[248px] overflow-hidden">
                <Image
                  src="/lp/Update/cardUpdate001.png"
                  alt="Anno Amagium"
                  width={400}
                  height={248}
                  className="w-full h-full"
                />
              </div>
              <div className="p-5 md:p-6">
                <p className="text-sm text-gray-400">
                  Hank Whitson • Aug 22, 2024 • 2 min read
                </p>
                <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                  Announcing Anno Amagium
                </h3>
                <p className="text-sm md:text-[16px] text-white/50 font-normal">
                  A true, next-gen tabletop RPG, Anno Amagium: The Roleplaying
                  Game is based on the Anno Amagium Universe, with over five
                  y...
                </p>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/updates/echelon" className="block">
            <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform transition-all duration-500 ease-out">
              <div className="w-full h-[200px] md:h-[248px] relative overflow-hidden">
                <Image
                  src="/lp/Update/cardUpdate002.png"
                  alt="Echelon"
                  width={450}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <p className="text-sm text-gray-400">
                  Hank Whitson • Aug 22, 2024 • 2 min read
                </p>
                <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                  A Cool Introduction to Echelon
                </h3>
                <p className="text-sm md:text-[16px] text-white/50 font-normal">
                  A platform for online/hybrid (digitally augmented) tabletop
                  gaming and digitally publishing original RPG systems.​ Betas
                  are for figuring things out, and not everything will w...
                </p>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/updates/conquesting" className="block">
            <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform transition-all duration-500 ease-out">
              <div className="w-full h-[200px] md:h-[248px]  bg-[url('/lp/Update/cardUpdate003.png')] bg-center bg-cover flex items-center justify-center relative overflow-hidden"></div>
              <div className="p-5 md:p-6">
                <p className="text-sm text-gray-400">
                  Hank Whitson • Aug 22, 2024 • 2 min read
                </p>
                <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                  Here We Go Questin&apos; Again
                </h3>
                <p className="text-sm md:text-[16px] text-white/50 font-normal">
                  Friends. Gamers. Fellow adventurers. We bid you fond greetings
                  and a warm welcome to Echelon. As it stands, this site is
                  merely the avatar of an idea. A promise of things to com...
                </p>
              </div>
            </div>
          </Link>
          {/* Card 4 */}
          <Link href="/updates/join-our-party" className="block">
            <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
              <div className="w-full h-[200px] md:h-[248px] relative overflow-hidden">
                <Image
                  src="/lp/join-cover.png"
                  alt="Echelon"
                  width={450}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <p className="text-sm text-gray-400">
                  Hank Whitson • Nov 18, 2024 • 2 min read
                </p>
                <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                  Join Our Party
                </h3>
                <p className="text-sm md:text-[16px] text-white/50 font-normal">
                  We are looking for a team to take on the world. Heroes wanted.
                </p>
              </div>
            </div>
          </Link>
          {/* Card 5 */}
          <Link href="/updates/eclipsing-escapism" className="block">
            <div className="bg-[#0B1C2C] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#0F2238] transition-all duration-500 ease-out hover:scale-[1.02] transform">
              <div className="w-full h-[200px] md:h-[248px]  bg-[url('/lp/eclipsing-cover.png')] bg-center bg-cover flex items-center justify-center relative overflow-hidden"></div>
              <div className="p-5 md:p-6">
                <p className="text-sm text-gray-400">
                  Hank Whitson • Nov 19, 2024 • 2 min read
                </p>
                <h3 className="text-[18px] md:text-[20px] text-white mt-5 md:mt-6 mb-1 font-normal">
                  Eclipsing Escapism
                </h3>
                <p className="text-sm md:text-[16px] text-white/50 font-normal">
                  Playing "Make Believe" means more than escaping real life. It
                  is the first step in actualizing your dreams.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpdateGame;
