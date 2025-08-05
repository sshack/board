export default function IntroductionGame() {
  return (
    <section className="w-full bg-black text-white py-20 relative overflow-hidden">
      <div
        className="relative w-full h-[726px]"
        style={{
          backgroundImage: "url('/lp/foundAmmo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradiente inferior para resolver o efeito de corte */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 1) 100%)",
          }}
        />

        {/* Conteúdo do lado esquerdo */}
        <div className="absolute top-0 left-0 px-20 z-20 max-w-2xl">
          <img
            src="/lp/trbe.png"
            alt="ANNO AMAGIUM"
            className="pt-20"
            style={{ maxWidth: "400px" }}
          />

          {/* Game Title */}
          <img
            src="/lp/titleAmmo.png"
            alt="ANNO AMAGIUM"
            className="pt-[81px]"
            style={{ maxWidth: "400px" }}
          />

          {/* Game Type */}
          <img
            src="/lp/text2.png"
            alt="ANNO AMAGIUM"
            className="pt-2"
            style={{ maxWidth: "400px", height: "45px" }}
          />

          {/* Description */}
          <p className="pt-6 w-[552px] text-white text-[18px] leading-relaxed mb-8">
            A true, next-gen tabletop RPG, Anno Amagium: The Roleplaying Game is
            based on the Anno Amagium Universe, with over five years of stories,
            worldbuilding, and mechanical development.
          </p>

          {/* Call to Action Button */}
          <button className="bg-white text-black px-8 py-4 rounded-full font-normal">
            Subscribe to our waiting list
          </button>
        </div>

        <img
          src="/lp/screenshotAmoo.png"
          alt="Screenshot"
          className="absolute bottom-0 right-0 h-[650px] w-[800px]"
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center py-20">
        <div className="text-[24px] text-white mb-8 text-center">
          <h3>Start Exploring the Anno Amagium Universe with our Rule Books</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
          {/* Card 1 */}
          <div
            className="flex flex-col justify-between bg-[linear-gradient(111deg,rgba(25,159,236,0.10)_0.9%,rgba(25,159,236,0.55)_100%)] rounded-[12px] p-6 relative overflow-hidden"
            style={{ width: "416px", height: "240px" }}
          >
            <div>
              <h4 className="text-white text-lg font-semibold mb-2">
                Get “Anno Amagium: <br />
                The RPG – Universe Guide and Lore”
              </h4>
              <p className="text-[rgba(255,255,255,0.7)] text-sm mb-4">
                by following us on Instagram
              </p>
            </div>
            <button className="bg-[#199FEC] text-white text-[16px] px-6 py-2 rounded-full font-semibold w-fit">
              Follow
            </button>
            <img
              src="/lp/poster.png"
              alt="Anno Amagium Book"
              className="w-[169px] h-[206px] absolute bottom-[-90px] right-0 rotate-[-20deg] pointer-events-none"
            />
            <img
              src="/lp/instagram-icon.png"
              alt="Instagram"
              className="w-8 absolute top-4 right-4 pointer-events-none"
            />
          </div>
          {/* Card 2 */}
          <div
            className="flex flex-col justify-between bg-[linear-gradient(111deg,rgba(25,159,236,0.10)_0.9%,rgba(25,159,236,0.55)_100%)] rounded-[12px] p-6 relative overflow-hidden"
            style={{ width: "416px", height: "240px" }}
          >
            <div>
              <h4 className="text-white text-lg font-semibold mb-2">
                Get “Anno Amagium: <br />
                The RPG - Character Creation and Advancement”
              </h4>
              <p className="text-[rgba(255,255,255,0.7)] text-sm mb-4">
                by signing up for our mailing list
              </p>
            </div>
            <button className="bg-[#199FEC] text-white text-[16px] px-6 py-2 rounded-full font-semibold w-fit">
              Follow
            </button>
            <img
              src="/lp/poster.png"
              alt="Anno Amagium Book"
              className="w-[169px] h-[206px] absolute bottom-[-90px] right-0 rotate-[-20deg] pointer-events-none"
            />
            <img
              src="/lp/mail-icon.png"
              alt="Mail"
              className="w-8 absolute top-4 right-4 pointer-events-none"
            />
          </div>
          {/* Card 3 */}
          <div
            className="flex flex-col justify-between bg-[linear-gradient(111deg,rgba(25,159,236,0.10)_0.9%,rgba(25,159,236,0.55)_100%)] rounded-[12px] p-6 relative overflow-hidden"
            style={{ width: "416px", height: "240px" }}
          >
            <div>
              <h4 className="text-white text-lg font-semibold mb-2">
                Get “Anno Amagium: <br />
                The RPG - Character Creation and Advancement”
              </h4>
              <p className="text-[rgba(255,255,255,0.7)] text-sm mb-4">
                by signing up for our mailing list
              </p>
            </div>
            <button className="bg-[#199FEC] text-white text-[16px] px-6 py-2 rounded-full font-semibold w-fit">
              Sign Up
            </button>
            <img
              src="/lp/poster.png"
              alt="Anno Amagium Book"
              className="w-[169px] h-[206px] absolute bottom-[-90px] right-0 rotate-[-20deg] pointer-events-none"
            />
            <img
              src="/lp/mail-icon.png"
              alt="Mail"
              className="w-8 absolute top-4 right-4 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
