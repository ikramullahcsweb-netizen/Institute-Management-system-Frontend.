

import React from "react";
import Nav from "../NavBar/Nav"; 
import logo from "../../../assets/step2 scientist logo.jpeg";
import userpng from "../photos/User.png";

function Header() {
  const name = "Ikram Ullah";

  return (
    <>
      {/* 1. Left Side Sticky Sidebar */}
      <Nav />

      {/* 2. Right Side Content Layer Header */}
      
      <div className="w-full md:pl-[260px] flex flex-col min-w-0">
        <div className="w-full px-4 sm:px-6 lg:px-8 mt-4">
          <div className="w-full bg-white border-2 border-[#384D6C]/30 rounded-[20px] sm:rounded-3xl p-4 sm:px-6 flex flex-col sm:flex-row gap-4 items-center justify-between shadow-sm h-22">
            
            {/* BRANDING LOGO */}
            <div className="flex items-center justify-center sm:justify-start">
              <img 
                src={logo} 
                alt="Royal Academy" 
                className="w-28 sm:w-32 h-20 object-contain" 
              />
            </div>

            {/* MANAGER AVATAR INFO */}
            <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-end border-t border-[#384D6C]/10 sm:border-t-0 pt-3 sm:pt-0">
              <div className="text-center sm:text-right">
                <h1 className="text-xl sm:text-2xl font-black text-[#384D6C] tracking-tight">
                  Hello, {name}
                </h1>
                <p className="text-sm sm:text-base font-bold text-[#1DB6D9] uppercase tracking-wider mt-0.5">
                  Manager
                </p>
              </div>

              <img
                src={userpng}
                alt="user avatar"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#384D6C] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;