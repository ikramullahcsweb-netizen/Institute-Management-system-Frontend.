
import React from 'react';
import { Link } from 'react-router-dom';
import loginimg from '../photos/managerlogin.png';
import logofull from '../../src/assets/crop logo.jfif';

function LoginSelection() {
  return (
    // 🚀 Tabdeeli: items-center ko items-start kiya aur top margin/padding (pt-16 md:pt-24 lg:pt-32) lagayi
    <main className="w-full min-h-screen bg-slate-50 flex items-start justify-center p-4 pt-16 md:pt-24  font-sans">
      <div className="w-full max-w-[1000px] bg-white border-2 border-slate-200 rounded-[24px] shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center">
        
        {/* Left Side: Illustration Panel */}
        <div className="w-full h-full bg-slate-100 hidden md:flex items-center justify-center p-8">
          <img 
            src={loginimg} 
            alt="login decoration panel" 
            className="w-full max-w-[400px] h-auto object-contain object-center transition-transform duration-300 hover:scale-102" 
          />
        </div>

        {/* Right Side: Interactive Action Portal */}
        <div className="w-full p-8 sm:p-12 flex flex-col items-center text-center">
          <img 
            src={logofull} 
            alt="Royal Academy branding logo" 
            className="h-16 w-auto object-contain mb-4 rounded-full" 
          />
          
          <h1 className="text-xl font-black text-[#13293d] tracking-tight uppercase mb-8">
            Welcome to step to scientist
          </h1>
          
          {/* Action Button Links Group */}
          <div className="w-full max-w-[320px] flex flex-col gap-4">
            <Link to="/managerlogin" className="w-full">
              <button 
                type="button" 
                className="w-full bg-[#10a1b6] hover:bg-[#0e8a9c] text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-sm transition-all duration-200 uppercase tracking-wider active:scale-[0.98]"
              >
                Manager Login
              </button>
            </Link>
            
            <Link to="/adminlogin" className="w-full">
              <button 
                type="button" 
                className="w-full bg-[#063a67] hover:bg-[#13293d] text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-sm transition-all duration-200 uppercase tracking-wider active:scale-[0.98]"
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