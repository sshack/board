export default function IntroductionGame() {
  return (
    <section className="w-full bg-black text-white md:py-20 relative overflow-hidden">
      {/*Versão Desktop*/}
      <div
        className="hidden md:block relative w-full h-[726px]"
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
        <div className="absolute top-0 left-0 p-12 z-20 max-w-2xl">
          {/* Release Information */}
          <p className="text-white text-[18px] mb-24">Beta Begins Q4 2025</p>

          {/* Game Title */}
          <img
            src="/lp/titleAmmo.png"
            alt="ANNO AMAGIUM"
            className=""
            style={{ maxWidth: "400px" }}
          />

          {/* Game Type */}
          <h2 className="text-[44px] text-white mb-6">The Roleplaying Game</h2>

          {/* Description */}
          <p className=" text-white text-[18px] leading-relaxed mb-8">
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

      {/*Versão Mobile*/}
      <div className="md:hidden w-full">
        <div className="relative mx-3 my-4 rounded-2xl overflow-hidden bg-[url('/lp/anno-amagium-mob.png')] bg-cover bg-center">
          <div className="absolute w-full pointer-events-none" />
          <div className="relative px-6 pt-8 pb-10">
            <div className="relative w-full flex mb-6">
              <img src="/lp/screenshotAmoo-mobile.png" alt="" className="" />
              <img
                src="/lp/badge-amagium.png"
                alt=""
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white"
              />
            </div>

            <div className="flex flex-col">
              <img
                src="/lp/titleAmmo.png"
                alt="ANNO AMAGIUM"
                className="w-[260px] mb-1"
              />
              <h2 className="text-white uppercase text-[18px] leading-[24px] tracking-[0.12em] font-semibold mb-4">
                The Roleplaying Game
              </h2>

              <p className="text-white/90 text-[14px] leading-[22px] max-w-[300px] mb-6">
                A true, next-gen tabletop RPG, Anno Amagium: The Roleplaying
                Game is based on the Anno Amagium Universe, with over five years
                of stories, worldbuilding, and mechanical development.
              </p>

              <button className="w-full max-w-[292px] h-[56px] rounded-full bg-white text-black text-[16px]">
                Subscribe to our waiting list
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
