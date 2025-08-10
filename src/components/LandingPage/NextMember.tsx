export default function NextMember() {
  return (
    <div className="bg-black p-6 md:bg-transparent py-10 md:py-0 flex justify-center md:mb-20">
      <div className="h-[748px] w-full md:w-[1280px] md:h-[496px] bg-[url('/lp/are-you-our-next-team-member-mob-bg.png')] md:bg-[url('/lp/fundoRecrutamento.png')] relative bg-cover bg-no-repeat rounded-2xl overflow-hidden">
        <div className="flex px-6 py-[300px] md:py-12 md:items-center md:justify-between md:px-12">
          <div>
            <p className="text-[#3b82f6] text-sm font-medium md:mb-20">
              Are you our next team member?
            </p>

            <h2 className="pt-7 text-[28px] leading-9 md:pt-0 md:text-[44px] md:w-[700px] font-normal text-white mb-6 tracking-[-1.12px]">
              We're looking for creative minds to help us build the ultimate
              online gaming platform.
            </h2>

            <div className="space-y-3 pt-11 md:pt-0 md:pb-10">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#3b82f6] mr-3 transform rotate-45"></div>
                <span className="text-[#199FEC] text-[14px]">
                  Character and Creature Concept Artist
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#3b82f6] mr-3 transform rotate-45"></div>
                <span className="text-[#199FEC] text-[14px]">
                  2D Level Designer - Battle Map Creator
                </span>
              </div>
            </div>

            <div className="md:hidden pt-10">
              <button className="md:hidden w-full bg-[#199FEC] text-white py-3 md:px-8 rounded-full text-[16px]">
                Apply Now
              </button>
            </div>

            <button className="hidden md:block bg-[#199FEC] text-white py-3 md:px-8 rounded-full text-[16px]">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
