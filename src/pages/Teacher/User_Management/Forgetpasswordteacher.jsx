import React, { useState } from 'react';
import loginimg from './photos/teacherlogin.png';
import logofull from './photos/logofull.png';
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

function Forgetpasswordteacher() {
  const [username, setusername] = useState("");
  const [SecAnswer, setSecAnswer] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [rePassword, setrePassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== rePassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    // Front-end state mockup validation success preview simulation
    toast.success("Password reset successfully! (Simulated)");
    navigate("/teacherlogin");
  };

  return (
    <main className="w-full min-h-screen bg-slate-50 flex flex-col md:flex-row">
      
      {/* Left side column panel: Form Visual Graphic Illustration Cover */}
      <div className="hidden md:flex md:w-1/2 bg-slate-100 items-center justify-center relative overflow-hidden pl-4 md:pl-[60px]">
        <img 
          src={loginimg} 
          alt='loginimage' 
          className="w-full h-full object-cover max-h-screen" 
        />
      </div>

      {/* Right side column panel: Interactive Password Reset Dashboard Form Wrapper */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 sm:px-12 lg:px-20 py-12 pl-4 md:pl-[60px] transition-all">
        <div className="w-full max-w-[460px] space-y-8 text-center">
          
          {/* Platform Branding Logo */}
          <div className="flex justify-center">
            <img src={logofull} alt='logoimage' className="h-16 object-contain" />
          </div>

          {/* Step 2 Color Theme Warning Header Context Board */}
          <div className="bg-[#C9E8EA] border border-slate-200 rounded-[20px] p-5 text-center shadow-xs">
            <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">
              Trouble Login?
            </h2>
            <p className="text-xs text-slate-600 font-bold mt-1.5 leading-relaxed">
              Please enter your username and answer the security question in the fields below to continue.
            </p>
          </div>

          {/* Main User Credentials Reset Input Interface Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            
            {/* Username Entry Block */}
            <div className="bg-slate-100/80 border border-slate-200 rounded-xl p-4 flex flex-col gap-1">
              <label htmlFor="username" className="text-[11px] font-black text-[#667A8A] uppercase tracking-wider">
                Username
              </label>
              <input 
                type="text" 
                id="username" 
                required
                placeholder="Enter your username" 
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#483EA8] transition-colors" 
                value={username} 
                onChange={(e) => setusername(e.target.value)}
              />
            </div>  

            {/* Security Verification Input Segment */}
            <div className="bg-slate-100/80 border border-slate-200 rounded-xl p-4 flex flex-col gap-1">
              <label htmlFor="securityans" className="text-[11px] font-black text-[#667A8A] uppercase tracking-wider leading-tight">
                Security Question - What city were you born in?
              </label>
              <input 
                type="text" 
                id="securityans" 
                required
                placeholder="Enter your answer" 
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#483EA8] transition-colors" 
                value={SecAnswer} 
                onChange={(e) => setSecAnswer(e.target.value)}
              />
            </div>

            {/* New Password Key Field */}
            <div className="bg-slate-100/80 border border-slate-200 rounded-xl p-4 flex flex-col gap-1">
              <label htmlFor="password" className="text-[11px] font-black text-[#667A8A] uppercase tracking-wider">
                New Password
              </label>
              <input 
                type="password" 
                id="password" 
                required
                placeholder="Enter your new password" 
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#483EA8] transition-colors" 
                value={newPassword} 
                onChange={(e) => setnewPassword(e.target.value)}
              />
            </div>

            {/* Re-enter Password Confirmation Box */}
            <div className="bg-slate-100/80 border border-slate-200 rounded-xl p-4 flex flex-col gap-1">
              <label htmlFor="repassword" className="text-[11px] font-black text-[#667A8A] uppercase tracking-wider">
                Re-enter Password
              </label>
              <input 
                type="password" 
                id="repassword" 
                required
                placeholder="Enter your password again" 
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#483EA8] transition-colors" 
                value={rePassword} 
                onChange={(e) => setrePassword(e.target.value)}
              />
            </div>

            {/* Primary System Processing Form Action Controls Buttons */}
            <div className="pt-4 space-y-4">
              <button 
                type="submit"
                className="w-full bg-[#483EA8] hover:bg-[#392f8a] text-white text-xs font-black py-3.5 px-4 rounded-xl uppercase tracking-wider transition-colors shadow-sm text-center block"
              >
                Reset Your Password
              </button>

              <div className="text-center">
                <Link to="/teacherlogin" className="text-xs text-slate-500 hover:text-slate-700 font-bold transition-colors">
                  Already have an Account? <span className="text-[#483EA8] underline">Log IN</span>
                </Link>
              </div>
            </div>

          </form>

        </div>
      </div>

    </main>
  );
}

export default Forgetpasswordteacher;