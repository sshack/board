import Image from 'next/image';

const Arrow: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    className="shrink-0 fill-[#199FEC]"
  >
    <path d="M7.5 3.22427C8.16667 3.56904 8.16667 4.43096 7.5 4.77573L1.5 7.87866C0.833334 8.22343 6.63909e-07 7.79247 5.6647e-07 7.10293L1.33333 4L-3.10479e-07 0.897075C-4.07918e-07 0.207535 0.833333 -0.223427 1.5 0.121343L7.5 3.22427Z" />
  </svg>
);

export default function NextLevel({}) {
  return (
    <section className="w-full bg-cover bg-center flex flex-col items-center justify-center gap-0 md:gap-8 relative overflow-hidden max-w-[1440px] my-[60px] px-6 md:px-0">
      <div className="flex flex-col  items-center justify-center w-full gap-1">
        <h1 className="text-white text-[56px] leading-[64px] font-semibold tracking-[-2.4px] mb-4">
          {' '}
          Next-Level Features
        </h1>

        <p className="text-[16px] leading-[24px] font-normal text-[#199FEC]">
          The next chapter of Echelon is already being written{' '}
          <a className="cursor-auto text-white ">
            {' '}
            — here’s a glimpse into what’s to come.
          </a>
        </p>
      </div>

      <div className="w-full flex flex-col items-center justify-start mt-20">
        <div className="flex flex-col items-center justify-center gap-6 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-[1062px] gap-4">
            <div className="w-full self-stretch flex flex-col items-center justify-center gap-3">
              <div
                className="w-full min-h-[320] flex items-center justify-center rounded-2xl mx-auto"
                style={{ backgroundColor: 'rgb(4 25 36)' }}
              >
                1
              </div>

              <div
                className="w-full min-h-[240px] flex items-center justify-center rounded-2xl mx-auto"
                style={{ backgroundColor: 'rgb(4 25 36)' }}
              >
                2
              </div>

              <div
                className="w-full min-h-[350px] md:h-full flex items-center justify-center rounded-2xl mx-auto"
                style={{ backgroundColor: 'rgb(4 25 36)' }}
              >
                3
              </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center gap-3">
              <div
                className="w-full h-[468px] flex items-start justify-start rounded-lg mx-auto"
                style={{ backgroundColor: 'rgb(4 25 36)' }}
              >
                4
              </div>

              <div
                className="w-full h-[488px] flex items-start justify-start rounded-lg mx-auto"
                style={{ backgroundColor: 'rgb(4 25 36)' }}
              >
                5
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
