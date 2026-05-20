import React, { useState } from "react";
import loginimg from "./photos/managerlogin.png";
import logofull from "./photos/logofull.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Forgetpasswordmanager() {
  const [username, setusername] = useState("");
  const [SecAnswer, setSecAnswer] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [rePassword, setrePassword] = useState("");

  const navigate = useNavigate();

  // Pure memory virtual submission sequence controller
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== rePassword) {
      toast.error("Passwords do not match");
      return;
    }

    const localSubmitPayload = {
      username,
      SecAnswer,
      newPassword,
    };

    console.log(
      "Password Mutation Virtual Token Dispatched:",
      localSubmitPayload,
    );
    toast.success(
      "Security configuration verified. Credentials mutated successfully!",
    );

    // Direct link to dashboard logging fallback route
    navigate("/managerlogin");
  };

  return (
    <main className="w-full min-h-screen bg-slate-50 flex font-sans">
      {/* Structural Left Panel: Graphics & Branding Asset Vector Cover */}
      <div className="hidden lg:block lg:w-1/2 relative bg-[#13293d] overflow-hidden">
        <div className="absolute inset-0 bg-[#13293d]/40 backdrop-blur-xs z-10" />
        <img
          src={loginimg}
          alt="Authentication Visual context template"
          className="w-full h-full object-cover object-center absolute inset-0 transform scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-12 left-12 right-12 z-20 text-white">
          <p className="text-xs font-black tracking-widest uppercase text-[#10a1b6] mb-2">
            Internal Management Gateway
          </p>
          <h2 className="text-3xl font-black uppercase tracking-tight max-w-md">
            Secured Node Portal Entry
          </h2>
        </div>
      </div>

      {/* Structural Right Panel: Operations Reset Input Canvas Desk */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 md:px-16 py-12 bg-slate-50">
        <div className="w-full max-w-[460px] bg-white border-2 border-slate-200 rounded-[32px] p-8 md:p-10 shadow-sm">
          {/* Brand Identity Identifier Node */}
          <div className="flex flex-col items-center text-center mb-8">
            <img
              src={logofull}
              alt="System Branding Logo Header"
              className="h-12 w-auto mb-6 object-contain"
            />
            <h1 className="text-xl font-black text-[#13293d] tracking-tight uppercase mb-2">
              Trouble Logging In?
            </h1>
            <p className="text-xs text-gray-500 font-medium leading-relaxed px-2">
              Please declare your manager account token details and pass your
              security verification phrase boundaries to alter active
              credentials.
            </p>
          </div>

          {/* Core Interactive Credentials Modification Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input Wrapper Field 1 */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="username"
                className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1"
              >
                Account Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your registered username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                required
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-xs outline-none transition-all font-medium text-gray-800"
              />
            </div>

            {/* Input Wrapper Field 2 */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="securityans"
                className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1 leading-normal"
              >
                Security Question:{" "}
                <span className="text-slate-600 font-extrabold normal-case text-xs block mt-0.5">
                  What city were you born in?
                </span>
              </label>
              <input
                type="text"
                id="securityans"
                placeholder="Enter your security answer phrase"
                value={SecAnswer}
                onChange={(e) => setSecAnswer(e.target.value)}
                required
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-xs outline-none transition-all text-gray-800"
              />
            </div>

            {/* Input Wrapper Field 3 */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1"
              >
                New Target Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Configure complex security phrase"
                value={newPassword}
                onChange={(e) => setnewPassword(e.target.value)}
                required
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-xs outline-none transition-all font-mono tracking-widest text-gray-800"
              />
            </div>

            {/* Input Wrapper Field 4 */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="repassword"
                className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1"
              >
                Re-enter Password Verification
              </label>
              <input
                type="password"
                id="repassword"
                placeholder="Confirm password token match"
                value={rePassword}
                onChange={(e) => setrePassword(e.target.value)}
                required
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-xs outline-none transition-all font-mono tracking-widest text-gray-800"
              />
            </div>

            {/* Actions Control Deck Elements */}
            <div className="pt-4 flex flex-col gap-3">
              <button
                type="submit"
                className="w-full bg-[#13293d] hover:bg-[#10a1b6] text-white font-black text-xs uppercase tracking-wider py-3 rounded-xl transition-colors shadow-xs"
              >
                Reset Your Password
              </button>

              <a
                href="/managerlogin"
                className="text-center text-xs text-gray-400 font-medium hover:text-[#13293d] transition-colors mt-2"
              >
                Already recovered access parameters?{" "}
                <b className="text-[#10a1b6] underline">Log IN</b>
              </a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Forgetpasswordmanager;
