import Image from 'next/image';

export default function NextLevel({}) {
  return (
    <section className="w-full bg-cover bg-center flex flex-col items-center justify-center gap-0 md:gap-8 relative overflow-hidden max-w-[1440px] mt-[60px] px-6 md:px-0">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-4 py-40 md:mt-0">
        <div className="flex flex-col items-start gap-4 order-2 md:order-1 w-full md:w-auto">
          <p className="text-2xl font-medium leading-10 tracking-tight">
            Claim Your First Reward Here
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            <div
              className="relative w-full md:w-[416px] h-[268px] shrink-0 rounded-2xl p-[0.5px] border"
              style={{ borderColor: 'var(--Transparent-secondary-T2-30)' }}
            >
              <div className="flex h-full w-full rounded-2xl bg-gray-800">
                <div className="flex flex-col justify-between p-6 flex-1 gap-4">
                  <p className="text-white text-lg font-medium leading-7">
                    Get the Epic Quest Tome — quest book packed with adventures
                    to choose from
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
              className="relative w-full md:w-[416px] h-[268px] shrink-0 rounded-2xl p-[0.5px] border"
              style={{ borderColor: 'var(--Transparent-secondary-T2-30)' }}
            >
              <div className="flex h-full w-full rounded-2xl bg-gray-800">
                <div className="flex flex-col justify-between p-6 flex-1 gap-4">
                  <p className="text-white text-lg font-medium leading-7">
                    Get the Epic Quest Tome — quest book packed with adventures
                    to choose from
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
      </div>
    </section>
  );
}
