import React, { useState } from 'react';
import Nav from '../NavBar/Nav';
import logo from '../photos/logofull.png';
import userpng from '../photos/User.png';

function Header() {
  // Pure Local Mock Static Profile State Data Model Matrix
  const [name] = useState("Ikram Khan");
  const [grade] = useState("A+");

  return (
    <div className="w-full bg-white border-b border-slate-200">
      {/* Top Global Navigation Core Component */}
      <Nav />
      
      {/* Main Responsive Canvas Layer 
        - Default mobile padding: px-4
        - Desktop sidebar offset padding: md:pl-[290px] (Sidebar adjustment cushion)
      */}
      <div className="w-full max-w-[1400px] mx-auto px-4 pl-4 md:pl-[290px] py-4 transition-all">
        
        <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 md:p-5 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Left Box Side: App Brand Platform Logo */}
            <div className="flex items-center justify-center sm:justify-start min-w-[120px]">
              <img 
                src={logo} 
                alt="logo" 
                className="h-10 md:h-12 object-contain"
              />
            </div>

            {/* Central Box Side: Student Context Credentials Data Meta */}
            <div className="text-center sm:text-left flex-1">
              <p className="text-sm md:text-base text-slate-800 font-medium leading-relaxed">
                Hello, <span className="font-extrabold text-slate-900">{name}</span>
                <br />
                <span className="inline-flex items-center text-xs font-bold text-[#384D6C] bg-[#C9E8EA] px-2.5 py-0.5 rounded-md mt-1 uppercase tracking-wide">
                  Grade {grade}
                </span>
                <span className="text-xs text-slate-500 font-semibold block sm:inline sm:ml-2 mt-0.5 sm:mt-0">
                  | Academic Student Profile
                </span>
              </p>
            </div>

            {/* Right Box Side: Secure Identity Avatar Image Node */}
            <div className="flex items-center justify-center">
              <div className="relative p-1 bg-white border border-slate-300 rounded-full shadow-xs">
                <img 
                  src={userpng} 
                  alt="User Avatar" 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover bg-slate-100"
                />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" title="Static Engine Active" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;