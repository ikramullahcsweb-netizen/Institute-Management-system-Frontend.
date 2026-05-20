import Nav from '../NavBar/Nav';
import logo from '../photos/logofull.png';
import userpng from '../photos/User.png';
import React, { useState, useEffect } from 'react';

function Header() {
  // STATIC STATE HOLDER FOR LOCAL WORKSPACE ALIGNMENT
  const [name, setName] = useState("Dr. Asim Khan");

  useEffect(() => {
    console.log("Header component initialized with static provider metadata layout.");
  }, []);

  return (
    <div className="w-full bg-white font-sans border-b border-slate-200 shadow-xs">
      {/* Existing Nav integration contextual reference wrapper */}
      <Nav />
      
      {/* MAIN HEADER WRAPPER GRID
        md:pl-[260px] is strictly matched to leave perfect clean structural buffer 
        for your static left-hand side workspace dashboard navigation panel.
      */}
      <div className="w-full md:pl-[260px] transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between">
          
          {/* Brand/Institution Asset Segment */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="logo" 
              className="h-10 w-auto object-contain max-w-[150px] sm:max-w-[200px]"
            />
          </div>

          {/* User Identity Matrix Frame Area (Right Hand Side) */}
          <div className="flex items-center gap-3 sm:gap-4 bg-slate-50 border border-slate-200 px-4 py-1.5 rounded-full">
            
            {/* Descriptive Profile Context Block */}
            <div className="text-right hidden sm:block">
              <p className="text-sm font-black text-[#13293d] tracking-tight leading-tight">
                Hello, {name}
              </p>
              <span className="text-[10px] font-bold text-[#10a1b6] tracking-widest uppercase">
                Faculty Teacher
              </span>
            </div>

            {/* Avatar Mask Layout Slot */}
            <div className="relative h-9 w-9 rounded-full overflow-hidden border-2 border-[#384D6C] bg-white flex items-center justify-center shadow-inner">
              <img 
                src={userpng} 
                alt="user profile picture logo avatar" 
                className="h-full w-full object-cover"
              />
            </div>

            {/* Micro Mobile Target Indicator label block */}
            <div className="text-left sm:hidden">
              <p className="text-xs font-black text-[#13293d] max-w-[90px] truncate">
                {name}
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Header;