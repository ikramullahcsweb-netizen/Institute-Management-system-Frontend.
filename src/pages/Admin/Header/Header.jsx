
import React, { useState, useEffect } from "react";
import axios from "axios";
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
    <div className="bg-slate-50 flex font-sans">
      {/* <aside className="hidden lg:block w-[210px] fixed left-0 top-0 h-screen z-40"> */}
        <Nav />
      {/* </aside> */}

      <div className="flex-1 md:ml-[190px] ">
        <main className="w-full px-3 sm:px-4 lg:px-6 py-4">
          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 md:gap-5">
              <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-gray-100 flex-shrink-0">
                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
              </div>

              <div>
                <h2 className="text-xl font-black text-slate-800 m-0">
                  Hello, {name}
                </h2>
                <p className="text-xs text-cyan-600 font-bold uppercase tracking-widest mt-0.5 m-0">
                  Teacher
                </p>
              </div>
            </div>

            <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-cyan-500 flex-shrink-0">
              <img src={userpng} alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Header;