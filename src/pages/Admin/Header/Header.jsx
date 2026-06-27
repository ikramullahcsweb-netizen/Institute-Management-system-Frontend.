
import React, { useState, useEffect } from "react";
import Nav from "../NavBar/Nav";
import userpng from "../photos/User.png";
import logo from "../../../assets/step2 scientist logo.jpeg";

function Header() {
  const [name, setName] = useState("Step 2 Scientist Admin");

  useEffect(() => {
    const storedName = localStorage.getItem("admin_name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <div className="font-sans w-full">
      <Nav />

      <div className="w-[93%] r-1 pl-65 mx-auto px-1 mt-4">
        <div className="bg-white p- md:p-6 rounded-[20px] border-2 border-[#10a1b6] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 max-h-16">
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Step 2 Scientist"
              className="h-[50px] w-auto object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-end gap-1">
            
              <div className="flex flex-col items-start">
                <span className="text-sm font-black text-gray-400 tracking-tight uppercase leading-none mb-1">
                  STEP
                </span>
                <div className="flex items-end gap-[2px] h-[10px] mb-[2px]">
                  <div className="w-[4px] h-[30%] bg-[#70c043] rounded-xs"></div>
                  <div className="w-[4px] h-[55%] bg-[#3fb47b] rounded-xs"></div>
                  <div className="w-[4px] h-[80%] bg-[#10a1b6] rounded-xs"></div>
                  <div className="w-[4px] h-[100%] bg-[#1b5592] rounded-xs"></div>
                </div>
              </div>
              <span className="text-3xl font-black text-[#10a1b6] italic leading-none mx-0.5">
                2
              </span>
              
              <span className="text-xl font-black tracking-tight text-[#13293d] uppercase leading-none relative">
                SCI<span className="text-[#10a1b6]">EN</span>TIST
              </span>
            </div>
          </div>

          <div className="lg:flex hidden text-center sm:text-left flex-grow sm:px-6">
            <h1 className="text-[#13293d] text-sm font-black m-0 tracking-tight">
              HELLO, <span className="text-[#10a1b6] uppercase">{name}</span>
            </h1>
            <p className="text-xs font-bold tracking-widest text-gray-500 uppercase m-0 mt-1">
              Authorized System Controller • Portal Admin
            </p>
          </div>

          <div className="flex-shrink-0">
            <img
              src={userpng}
              alt="User Avatar"
              className="w-13 h-13  rounded-full border-2 border-[#10a1b6] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
