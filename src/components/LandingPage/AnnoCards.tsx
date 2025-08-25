export default function AnnoCards() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20">
      <div className="text-[24px] text-white mb-8 text-center">
        <h3>Start Exploring the Anno Amagium Universe with our Rule Books</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
        {/* Card 1 */}
        <div
          className="flex flex-col justify-between bg-[linear-gradient(111deg,rgba(25,159,236,0.10)_0.9%,rgba(25,159,236,0.55)_100%)] rounded-[12px] p-6 relative overflow-hidden"
          style={{ width: '416px', height: '240px' }}
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
          style={{ width: '416px', height: '240px' }}
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
          style={{ width: '416px', height: '240px' }}
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
  );
}
