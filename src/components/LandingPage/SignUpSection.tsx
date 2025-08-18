"use client";
import React, { useState } from "react";

const SignUpSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Please provide both name and email.");
      return;
    }
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const res = await fetch("/api/submit-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setMessage("Thanks for joining!");
        setName("");
        setEmail("");
      } else {
        setError(data.message || "Something went wrong, please try again.");
      }
    } catch {
      setError("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-cover bg-center flex flex-col items-center justify-center gap-0 md:gap-8 relative overflow-hidden max-w-[1440px] my-[60px] px-6 md:px-0">
      {/* Gradient border wrapper */}
      <div
        className="p-[1px] rounded-[20px] w-full max-w-[500px] md:max-w-full"
        style={{
          background:
            "linear-gradient(90deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)",
        }}
      >
        <div className="bg-[url('/lp/SignUpSection/join-our-party-bg-mob.png')] h-[760px] bg-cover bg-center grid md:bg-[url('/lp/SignUpSection/fundo2last.png')] grid-cols-1 md:grid-cols-2 p-6 md:p-20 items-center rounded-[20px] md:overflow-hidden md:w-full">
          {/* Form */}
          <div className="flex pt-16 md:pt-0 flex-col justify-start md:justify-center items-center h-full space-y-10 md:space-y-20 w-full">
            <h2 className="font-semibold text-[32px] leading-[40px] tracking-[-1px] md:text-[56px] md:leading-[64px] md:tracking-[-2.24px]">
              Join Our Party
              <br />
              Sign Up For Updates
            </h2>
            <form
              className="space-y-4 w-full flex flex-col items-center"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Full Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full max-w-[448px] px-4 py-3 rounded-[8px] bg-[rgba(255,255,255,0.15)] text-white placeholder-gray-500 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full max-w-[448px] rounded-[8px] px-4 py-3 bg-[rgba(255,255,255,0.15)] text-white placeholder-gray-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full max-w-[448px] bg-white text-black text-[16px] px-4 py-3 rounded-full disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Subscribe"}
              </button>
              {message && (
                <p className="text-green-500 text-center">{message}</p>
              )}
              {error && <p className="text-red-500 text-center">{error}</p>}
            </form>
          </div>

          {/* Image */}
          <div
            className="hidden md:block w-[798px] h-[532px]"
            style={{
              backgroundImage: "url(/lp/SignUpSection/fundo1last.png)",
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
