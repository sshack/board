import Image from "next/image";

export default function Reward() {
  <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-4 py-40 md:mt-0">
    <div className="flex flex-col items-start gap-4 order-2 md:order-1 w-full md:w-auto">
      <p className="text-2xl font-medium leading-10 tracking-tight">
        Claim Your First Reward Here
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
        <div
          className="relative w-full md:w-[416px] h-[268px] shrink-0 rounded-2xl border"
          style={{
            borderColor:
              "var(--Transparent-secondary-T2-30, rgba(25, 159, 236, 0.30))",
          }}
        >
          <div
            className="flex h-full w-full rounded-2xl"
            style={{
              background:
                "var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))",
            }}
          >
            <div className="flex flex-col justify-between p-6 flex-1 gap-4">
              <p className="text-white text-lg font-medium leading-7">
                Get the Epic Quest Tome — quest book packed with adventures to
                choose from
              </p>
              <button className="btn w-fit">Download as PDF</button>
            </div>

            <div className="relative w-32 h-full rounded-r-2xl shrink-0">
              <Image
                src="/lp/poster.png"
                alt="ConQuest Poster"
                width={108}
                height={132}
                className="absolute inset-0 object-contain m-auto"
              />
            </div>
          </div>
        </div>
        <div
          className="relative w-full md:w-[416px] h-[268px] shrink-0 rounded-2xl border"
          style={{
            borderColor:
              "var(--Transparent-secondary-T2-30, rgba(25, 159, 236, 0.30))",
          }}
        >
          <div
            className="flex h-full w-full rounded-2xl"
            style={{
              background:
                "var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))",
            }}
          >
            <div className="flex flex-col justify-between p-6 flex-1 gap-4">
              <p className="text-white text-lg font-medium leading-7">
                Get the Epic Quest Tome — quest book packed with adventures to
                choose from
              </p>
              <button className="btn w-fit">Download as PDF</button>
            </div>

            <div className="relative w-32 h-full  rounded-r-2xl shrink-0">
              <Image
                src="/lp/poster.png"
                alt="ConQuest Poster"
                width={108}
                height={132}
                className="absolute inset-0 object-contain m-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex w-full flex-col items-start gap-4 order-1 md:order-2">
      <p className="text-2xl font-medium leading-10 tracking-tight">
        Useful Links
      </p>
      <div className="flex flex-col items-center justify-between w-full gap-3">
        <div className="relative h-[128px] w-full rounded-2xl p-[0.5px]">
          <div
            className="relative flex flex-col justify-between h-full w-full rounded-2xl p-6"
            style={{
              background:
                "var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))",
            }}
          >
            <p className="text-white text-sm font-medium leading-5 max-w-[50%] line-clamp-2">
              Follow us on Instagram for more loot and quests!
            </p>
            <button className="btn w-fit">Follow</button>
            <img
              src="/lp/instagram.svg"
              alt="Instagram"
              className="absolute bottom-0 right-4 h-full w-auto"
            />
          </div>
        </div>
        <div className="relative h-[128px] w-full rounded-2xl p-[0.5px]">
          <div
            className="relative flex flex-col justify-between h-full w-full rounded-2xl p-6"
            style={{
              background:
                "var(--bg-gradient-bottom-right, linear-gradient(111deg, rgba(25, 159, 236, 0.10) 0.9%, rgba(25, 159, 236, 0.55) 100%))",
            }}
          >
            <p className="text-white text-sm font-medium leading-5 max-w-[50%] line-clamp-2">
              Join the ConQuesting community on the Echelon Discord Server
            </p>
            <button className="btn w-fit">Follow</button>
            <img
              src="/lp/discord.svg"
              alt="Discord"
              className="absolute bottom-0 right-4 h-full w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </div>;
}
