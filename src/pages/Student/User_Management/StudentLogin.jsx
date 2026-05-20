import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import loginimg from './photos/studentlogin.png';
import logofull from './photos/logofull.png';
import { FaUser, FaLock, FaSignInAlt, FaQuestionCircle, FaUserPlus } from 'react-icons/fa';

function StudentLogin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  // Simulated Static Form Core Login Validation Pipeline
  const loginStudent = (e) => {
    e.preventDefault();
    const { username, password } = data;

    // Presence Constraint Fields Validation Checks
    if (!username || !password) {
      toast.error("Please insert your student credentials.");
      return;
    }

    // Static Sandbox Testing Route Access (Simulated Success Sequence)
    console.log("Static Verification Framework: Logging session data strings locally.");
    toast.success("Identity Verified successfully!");
    
    // Reset internal dynamic data structure hooks
    setData({ username: '', password: '' });
    
    // Immediate state dispatch dashboard route relocation
    navigate('/studentdashboard');
  };

  return (
    <div className="w-full min-h-screen bg-slate-100 flex items-center justify-center font-sans antialiased">
      {/* Neo-brutalist Container Frame Setup matching Step-2 Design Protocol */}
      <div className="w-full max-w-[1200px] min-h-[650px] bg-white rounded-3xl overflow-hidden border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] grid grid-cols-1 lg:grid-cols-2 m-4">
        
        {/* Left Side Column Grid Layer: Aesthetic Core Institutional Art Banner */}
        <div className="hidden lg:flex bg-[#C9E8EA] border-r-2 border-slate-900 items-center justify-center p-8 relative overflow-hidden">
          <img 
            src={loginimg} 
            alt="Student login portal conceptual identity graphics" 
            className="w-full max-w-md h-auto object-contain z-10 drop-shadow-md"
          />
          {/* Subtle Dynamic Geometric Background Framework Grid overlay */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        {/* Right Side Column Grid Layer: Dynamic Authentication Login Engine */}
        <div className="w-full flex flex-col justify-center p-6 sm:p-10 md:p-14 space-y-6">
          
          {/* Platform Identity Branding Token Node */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src={logofull} 
              alt="Royal Academy Academic Master Branding Logo" 
              className="h-10 md:h-12 object-contain"
            />
          </div>

          {/* Module Typography Heading Labels Meta Blocks */}
          <div className="text-center lg:text-left space-y-1.5">
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
              Welcome to Royal Academy
            </h1>
            <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wider">
              Enter your standard core authorization logs below.
            </p>
          </div>

          {/* Form Processing Block Canvas Area */}
          <form onSubmit={loginStudent} className="space-y-4">
            
            {/* Input Element Pipeline Segment: Username Input Wrapper */}
            <div className="space-y-1.5">
              <label htmlFor="username" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaUser className="text-[#384D6C] text-xs" /> 
                <span>Username Identifier</span>
              </label>
              <input 
                type="text" 
                id="username" 
                placeholder="Assign student system registration logs" 
                className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#384D6C] transition-colors shadow-xs"
                value={data.username} 
                onChange={(e) => setData({...data, username: e.target.value})} 
              />
            </div>

            {/* Input Element Pipeline Segment: Password Input Wrapper */}
            <div className="space-y-1.5">
              <label htmlFor="password" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaLock className="text-[#384D6C] text-xs" /> 
                <span>Confidential Security Key</span>
              </label>
              <input 
                type="password" 
                id="password" 
                placeholder="Enter password entry tokens" 
                className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#384D6C] transition-colors shadow-xs"
                value={data.password} 
                onChange={(e) => setData({...data, password: e.target.value})} 
              />
            </div>

            {/* Forget Password Access Anchor Node Link */}
            <div className="flex justify-end pt-1">
              <a 
                href="/studentforgetpassword" 
                className="inline-flex items-center gap-1 text-[11px] font-extrabold text-slate-500 uppercase tracking-wide hover:text-red-600 transition-colors"
              >
                <FaQuestionCircle className="text-xs" />
                <span>Forgot Password?</span>
              </a>
            </div>

            {/* Operational Form Dispatch Command Controls */}
            <div className="pt-3 space-y-4">
              <button 
                type="submit" 
                className="w-full bg-[#384D6C] hover:bg-[#2c3d56] text-white text-xs font-black uppercase tracking-widest py-4 px-4 rounded-xl border-2 border-slate-950 shadow-xs flex items-center justify-center gap-2 transition-transform active:scale-[0.99]"
              >
                <FaSignInAlt />
                <span>Access Student Account</span>
              </button>

              {/* Redirection Anchor Navigation Control link to Registration Module */}
              <a 
                href="/register" 
                className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-bold uppercase tracking-wider hover:text-slate-900 transition-colors py-1 group"
              >
                <FaUserPlus className="text-xs text-slate-400 group-hover:text-[#384D6C] transition-colors" />
                <span>New Student? <strong className="text-[#384D6C] underline">Register Profile Box</strong></span>
              </a>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
}

export default StudentLogin;