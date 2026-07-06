import React, { useState } from "react";
import loginimg from "./photos/managerlogin.png";
import logo from '../../../../src/assets/crop logo.jfif';
import logofull from "../../../assets/step2 scientist logo.jpeg";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Forgetpasswordmanager() {
  const [username, setusername] = useState("");
  const [SecAnswer, setSecAnswer] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [rePassword, setrePassword] = useState("");

  const navigate = useNavigate();

  // Backend Integration: handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== rePassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      // Backend request to your specific route
      const response = await axios.post("http://localhost:3000/managerforgetpassword", {
        username,
        SecAnswer,
        newPassword,
      });

      if (response.status === 200) {
        toast.success("Security configuration verified. Credentials updated!");
        navigate("/managerlogin");
      }
    } catch (error) {
      console.error("Password reset error:", error);
      toast.error(error.response?.data?.message || "Failed to reset password. Please verify your details.");
    }
  };

  return (
    <main className="w-full min-h-screen bg-slate-50 flex font-sans">
      {/* Left Panel */}
      <div className="hidden lg:block lg:w-1/2 relative bg-[#13293d] overflow-hidden">
        <div className="absolute inset-0 bg-[#13293d]/40 backdrop-blur-xs z-10" />
        <img
          src={loginimg}
          alt="Authentication Visual"
          className="w-full h-full object-cover object-center absolute inset-0"
        />
       
        <div className="absolute bottom-12 left-12 right-12 z-20 text-white">
          <p className="text-xs font-black tracking-widest uppercase text-[#10a1b6] mb-2">Internal Management Gateway</p>
          <h2 className="text-3xl font-black uppercase tracking-tight">Secured Node Portal Entry</h2>
        </div>
      </div>

      {/* Right Panel: Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 md:px-16 py-12 bg-slate-50">
        <div className="w-full max-w-[460px] bg-white border-2 border-slate-200 rounded-[32px] p-8 md:p-10 shadow-sm">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex">
            <img src={logofull} alt="Logo" className="h-20 w-auto mb-6 object-contain" />
            <img src={logo} alt="Logo" className="h-17 w-auto mb-6 object-contain" /> </div>
            <h1 className="text-xl font-black text-[#13293d] tracking-tight uppercase mb-2">Trouble Logging In?</h1>
          </div>

          <form onSubmit={handleSubmit}  style={{ margin: 0 }} className="space-y-4">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">Account Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                required
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-xs outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">Security Answer (City of Birth)</label>
              <input
                type="text"
                value={SecAnswer}
                onChange={(e) => setSecAnswer(e.target.value)}
                required
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-xs outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setnewPassword(e.target.value)}
                required
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-xs outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">Re-enter Password</label>
              <input
                type="password"
                value={rePassword}
                onChange={(e) => setrePassword(e.target.value)}
                required
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-xs outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#13293d] hover:bg-[#10a1b6] text-white font-black text-xs uppercase tracking-wider py-3 rounded-xl transition-colors shadow-xs mt-4"
            >
              Reset Your Password
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Forgetpasswordmanager;