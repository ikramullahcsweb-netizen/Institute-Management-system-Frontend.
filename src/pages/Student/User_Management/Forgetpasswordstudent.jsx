import React, { useState } from 'react';
import loginimg from './photos/studentlogin.png';
import logofull from './photos/logofull.png';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaUser, FaQuestionCircle, FaLock, FaKey, FaArrowLeft } from 'react-icons/fa';

function Forgetpasswordstudent() {
  const [username, setusername] = useState("");
  const [SecAnswer, setSecAnswer] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [rePassword, setrePassword] = useState("");

  const navigate = useNavigate();

  // Simulated Static Form Core Submission Thread
  const handleSubmit = (e) => {
    e.preventDefault();

    // Data Presence Guard checks
    if (!username || !SecAnswer || !newPassword || !rePassword) {
      toast.error("Please fill all security fields.");
      return;
    }

    if (newPassword !== rePassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Static Sandbox Simulation Loop Strategy
    toast.success("Security credentials approved!");
    toast.success("Password reset simulated in client state storage!");
    
    // Smooth navigation redirection dispatch
    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  return (
    <div className="w-full min-h-screen bg-slate-100 flex items-center justify-center font-sans antialiased">
      <div className="w-full max-w-[1200px] min-h-[650px] bg-white rounded-3xl overflow-hidden border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] grid grid-cols-1 lg:grid-cols-2 m-4">
        
        {/* Left Grid Side Container: High Fidelity System Banner Art */}
        <div className="hidden lg:flex bg-[#C9E8EA] border-r-2 border-slate-900 items-center justify-center p-8 relative overflow-hidden">
          <img 
            src={loginimg} 
            alt="Student authentication context illustration" 
            className="w-full max-w-md h-auto object-contain z-10 drop-shadow-md animate-fade-in"
          />
          {/* Ambient Blueprint Vector Grid Blocks */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        {/* Right Grid Side Container: Core Credentials Input Pipeline Form */}
        <div className="w-full flex flex-col justify-center p-6 sm:p-10 md:p-14 space-y-6">
          
          {/* System App Identity Brand Node Logo Branding */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src={logofull} 
              alt="Platform Logo Master File" 
              className="h-10 md:h-12 object-contain"
            />
          </div>

          {/* Module Heading Text Meta Description Group */}
          <div className="text-center lg:text-left space-y-1.5">
            <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight">
              Trouble Logging In?
            </h2>
            <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed max-w-sm mx-auto lg:mx-0">
              Please enter your registered username and match the security question answer signature to establish your new security token.
            </p>
          </div>

          {/* Functional Verification Submission Form Canvas */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Input Element: Student Username Field */}
            <div className="space-y-1">
              <label htmlFor="username" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaUser className="text-[#384D6C]" /> Username
              </label>
              <input 
                type="text" 
                id="username" 
                placeholder="Enter your system username" 
                className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 font-bold text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-[#384D6C] transition-colors shadow-xs"
                value={username} 
                onChange={(e) => setusername(e.target.value)}
              />
            </div>

            {/* Input Element: Preserved Structural Security Vault Question Answer */}
            <div className="space-y-1">
              <label htmlFor="securityans" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaQuestionCircle className="text-[#384D6C]" /> Security Question
              </label>
              <div className="text-[10px] text-amber-700 bg-amber-50 border border-amber-200 font-bold px-3 py-1.5 rounded-lg mb-1 uppercase tracking-wide">
                Challenge Prompt: What city were you born in?
              </div>
              <input 
                type="text" 
                id="securityans" 
                placeholder="Enter your confidential security answer string" 
                className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 font-bold text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-[#384D6C] transition-colors shadow-xs"
                value={SecAnswer} 
                onChange={(e) => setSecAnswer(e.target.value)}
              />
            </div>

            {/* Input Element: Secure Password String Input Slot */}
            <div className="space-y-1">
              <label htmlFor="password" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaLock className="text-[#384D6C]" /> New Account Password
              </label>
              <input 
                type="password" 
                id="password" 
                placeholder="Assign complex account alpha password strings" 
                className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 font-bold text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-[#384D6C] transition-colors shadow-xs"
                value={newPassword} 
                onChange={(e) => setnewPassword(e.target.value)}
              />
            </div>

            {/* Input Element: Verification Double Check Password Confirmation */}
            <div className="space-y-1">
              <label htmlFor="repassword" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaKey className="text-[#384D6C]" /> Re-Enter Account Password
              </label>
              <input 
                type="password" 
                id="repassword" 
                placeholder="Re-type system password precisely for confirmation mapping" 
                className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 font-bold text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-[#384D6C] transition-colors shadow-xs"
                value={rePassword} 
                onChange={(e) => setrePassword(e.target.value)}
              />
            </div>

            {/* Submit Action Block Controllers */}
            <div className="pt-2 space-y-3">
              <button 
                type="submit" 
                className="w-full bg-[#384D6C] hover:bg-[#2b3a52] text-white text-xs font-black uppercase tracking-widest py-3.5 px-4 rounded-xl border-2 border-slate-950 shadow-xs transition-transform active:scale-[0.99]"
              >
                Reset Your Password
              </button>

              {/* Secure Secondary Navigation Route Anchor Link */}
              <a 
                href="/login" 
                className="flex items-center justify-center gap-1 text-xs text-slate-500 font-bold uppercase tracking-wider hover:text-slate-900 transition-colors py-1 group"
              >
                <FaArrowLeft className="text-[10px] transform group-hover:-translate-x-0.5 transition-transform" />
                <span>Already have an Account? <strong className="text-[#384D6C] underline">Log IN</strong></span>
              </a>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Forgetpasswordstudent;