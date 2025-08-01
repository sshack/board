import React from 'react';

const SignUpSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-800 text-white px-6 md:px-16 py-16">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Form */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Join Our Party
            <br />
            Sign Up For Updates
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded bg-gray-900 text-white placeholder-gray-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded bg-gray-900 text-white placeholder-gray-500 focus:outline-none"
            />
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded font-semibold">
              Subscribe
            </button>
          </form>
        </div>

        {/* Preview feed placeholder */}
        <div className="w-full h-64 md:h-80 bg-black rounded-lg" />
      </div>
    </section>
  );
};

export default SignUpSection;
