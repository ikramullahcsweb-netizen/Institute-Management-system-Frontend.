
import React from 'react';
import loginimg from '../assets/crop logo.jfif'; // Path auto-correct ho jayega agar sahi hai
import logofull from '../assets/crop logo.jfif';
import { Link } from 'react-router-dom';

// Component ka naam Capital letter se start hona chahiye (React standard)
function LoginSelection() {
  return (
    <main className="w-full min-h-screen bg-slate-50 flex justify-center px-4 md:px-8 ">
      {/* 🚀 Top margin (mt-12 mobile par, mt-24 tablet par, mt-32 desktop par) aur responsive container */}
      <div className="w-full max-w-5xl mt-16 md:mt-20 pt-30 lg:mt-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white border border-slate-200 p-6 md:p-10 rounded-[2.2rem] shadow-xl h-fit">
        
        {/* Left Side: Graphic / Image Box (Mobile par hide ho jayega, Tablet/Desktop par show hoga) */}
        <div className="hidden md:flex justify-center items-center w-full h-full max-h-[400px] overflow-hidden rounded-2xl bg-slate-100">
          <img 
            src={loginimg} 
            alt="loginimage" 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
          />
        </div>

        {/* Right Side: Login Portals Interactive Box */}
        <div className="flex flex-col items-center text-center w-full px-2 py-4">
          {/* Logo Section */}
          <img 
            src={logofull} 
            alt="logo" 
            className="h-24 w-24 md:h-28 md:w-28 object-contain mb-4 rounded-full shadow-sm" 
          />
          
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
            Welcome to
          </h2>
          <p className="text-sm md:text-base text-[#10a1b6] font-bold uppercase tracking-widest mt-1 mb-8">
            Step 2 Scientist
          </p>          
          
          {/* Action Buttons Routing Container */}
          <div className="w-full max-w-sm flex flex-col gap-4">
            
            {/* Manager Access Route Trigger */}
            <Link to="/managerlogin" className="w-full">
              <button 
                type="button" 
                className="w-full bg-[#13293d] hover:bg-[#10a1b6] text-white font-black text-xs md:text-sm uppercase tracking-wider py-4 rounded-xl transition-all shadow-sm active:scale-[0.98]"
              >
                💼 Manager Login
              </button>
            </Link>          
            
            {/* Admin Access Route Trigger */}
            <Link to="/adminlogin" className="w-full">
              <button 
                type="button" 
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-black text-xs md:text-sm uppercase tracking-wider py-4 rounded-xl transition-all shadow-sm active:scale-[0.98]"
              >
                 Admin Login
              </button>
            </Link> 

          </div>
        </div>

      </div>
    </main>
  );
}

export default LoginSelection;