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
        <div className="flex flex-col rounded-2xl w-full h-full overflow-hidden bg-[url('/lp/anno-amagium-mob.png')] bg-cover bg-center pt-16 items-center">
          <div className="flex items-center justify-center">
            <div className="relative w-full flex mb-6">
              <img
                src="/lp/anno-amagium-product-mob.png"
                className="items-center justify-center"
              />
              <img
                src="/lp/anno-amagium-logo.png"
                alt=""
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col pt-12 pb-10">
            <img
              src="/lp/titleAmmo.png"
              alt="ANNO AMAGIUM"
              className="w-[260px] mb-1"
            />
            <img
              src="/lp/the-roleplaying-game.png"
              alt="ANNO AMAGIUM"
              className="w-[260px] mb-1"
            />

            <p className="pt-5 text-white/90 text-[14px] leading-[22px] max-w-[300px] mb-6">
              A true, next-gen tabletop RPG, Anno Amagium: The Roleplaying Game
              is based on the Anno Amagium Universe, with over five years of
              stories, worldbuilding, and mechanical development.
            </p>

            <button className="w-full px-6 py-3 rounded-full bg-white text-black leading-6 font-normal text-[16px]">
              Subscribe to our waiting list
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
