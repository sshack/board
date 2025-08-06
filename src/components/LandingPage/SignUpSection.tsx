import React from "react";

const SignUpSection: React.FC = () => {
  return (
    <section className="w-full md:w-[1360px] flex justify-center items-center min-h-screen  text-white mx-auto px-4 md:py-0">
      {/* Gradient border wrapper */}
      <div
        className="p-[1px] rounded-[20px] w-full max-w-[500px] md:max-w-full"
        style={{
          background:
            "linear-gradient(90deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)",
        }}
      >
        <div className="bg-[url('/lp/join-our-party-bg-mob.png')] h-[760px] bg-cover bg-center grid md:bg-[url('/lp/fundo2last.png')] grid-cols-1 md:grid-cols-2 p-6 md:p-20 items-center rounded-[20px] md:overflow-hidden md:w-full">
          {/* Form */}
          <div className="flex pt-16 md:pt-0 flex-col justify-start md:justify-center items-center h-full space-y-10 md:space-y-20 w-full">
            <h2 className="font-semibold text-[32px] leading-[40px] tracking-[-1px] md:text-[56px] md:leading-[64px] md:tracking-[-2.24px]">
              Join Our Party
              <br />
              Sign Up For Updates
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name*"
                className="w-full max-w-[448px] px-4 py-3 rounded-[8px] bg-[rgba(255,255,255,0.15)] text-white placeholder-gray-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full max-w-[448px] rounded-[8px] px-4 py-3 bg-[rgba(255,255,255,0.15)] text-white placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full max-w-[448px] bg-white text-black text-[16px] px-4 py-3 rounded-full"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Image */}
          <div
            className="hidden md:block w-[798px] h-[532px]"
            style={{
              backgroundImage: "url(/lp/fundo1last.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
