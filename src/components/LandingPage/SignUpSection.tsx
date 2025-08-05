import React from 'react';

const SignUpSection: React.FC = () => {
  return (
    <section className="w-[1280px] flex justify-center items-center h-[695px] bg-black text-white mx-auto">
      {/* Gradient border wrapper */}
      <div
        className="p-[1px] rounded-[20px]"
        style={{
          background:
            'linear-gradient(90deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
        }}
      >
        <div
          className="bg-black mx-auto grid md:grid-cols-2 p-20 items-center overflow-hidden rounded-[20px]"
          style={{
            backgroundImage: 'url(/lp/fundo2last.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Form */}
          <div className="space-y-20">
            <h2 className="font-semibold text-[56px] leading-[64px] tracking-[-2.24px]">
              Join Our Party
              <br />
              Sign Up For Updates
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-[448px] px-4 py-3 rounded-[8px] bg-[rgba(255,255,255,0.15)]  text-white placeholder-gray-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-[448px] rounded-[8px] px-4 py-3 bg-[rgba(255,255,255,0.15)]  text-white placeholder-gray-500 focus:outline-none"
              />
              <button className="w-[448px] roudend-full bg-white text-black text-[16px] px-4 py-3 rounded-full">
                Subscribe
              </button>
            </form>
          </div>
          <div
            className="w-[798px] h-[532px]"
            style={{
              backgroundImage: 'url(/lp/fundo1last.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          {/* End of grid content */}
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
