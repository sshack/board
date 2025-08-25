"use client";

export default function NextMember() {
  const scrollToSubscribe = () => {
    const el = document.getElementById("subscribe-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-black p-6 w-full md:bg-transparent py-10 md:py-0 flex justify-center md:mb-20">
      <div className="h-full w-full md:max-w-[1280px] md:w-full md:h-full bg-[url('/lp/NextMember/are-you-our-next-team-member-mob-bg.png')] md:bg-[url('/lp/NextMember/fundoRecrutamento.png')] relative bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden">
        <div className="flex px-6 pt-[272px] md:py-12 md:items-center md:justify-between md:px-12">
          <div>
            <p className="text-[#199FEC] text-sm font-medium md:mb-20">
              Are you our next team member?
            </p>

            <h2 className="pt-7 text-[28px] leading-9 tracking-[-1.12px] md:pt-0 md:text-[44px] md:w-[671px] font-semibold md:leading-[48px] text-white mb-6 md:tracking-[-1.76px]">
              We're looking for creative minds to help us build the ultimate
              online gaming platform.
            </h2>

            <div className="space-y-3 pt-11 md:pt-0 md:pb-10">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#3b82f6] mr-3 transform rotate-45"></div>
                <span className="text-[#199FEC] text-[14px] leading-5">
                  Character and Creature Concept Artist
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#3b82f6] mr-3 transform rotate-45"></div>
                <span className="text-[#199FEC] text-[14px]">
                  2D Level Designer - Battle Map Creator
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#3b82f6] mr-3 transform rotate-45"></div>
                <span className="text-[#199FEC] text-[14px]">
                  Campaign and Content Writer
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-white font-normal text-[14px]">
                  Interested? Join our mailing list to receive an update when we
                  are ready to hire!
                </span>
              </div>
            </div>

            <div className="md:hidden pt-10 pb-6">
              <button
                onClick={scrollToSubscribe}
                className="md:hidden w-full bg-[#199FEC] text-white py-3 md:px-8 rounded-full text-[16px]"
              >
                Join our Mailing List
              </button>
            </div>

            <button
              onClick={scrollToSubscribe}
              className="hidden md:block bg-[#199FEC] text-white py-3 md:px-8 rounded-full text-[16px]"
            >
              Join our Mailing List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
