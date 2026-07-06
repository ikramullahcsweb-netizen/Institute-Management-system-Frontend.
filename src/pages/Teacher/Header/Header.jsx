

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../NavBar/Nav'; 
import logo from '../../../../src/assets/crop logo.jfif';
import userpng from '../photos/User.png';

function Header() {
  const [name, setName] = useState("Loading...");

  useEffect(() => {
    axios.get('/teacherprofile')
      .then((res) => setName(res.data.name))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" bg-slate-50 flex">
      {/* Sidebar Component (Isme toggle logic pehle se hai) */}
      <Nav />

      {/* Main Content Area */}
      {/* md:pl-[260px] ka matlab hai desktop pe 260px jagah chhodo nav ke liye */}
      <div className="flex-1 w-full md:pl-[210px]  mx-auto"> 
        
        <main className="md:w-[99%] w-full px-2 py-1 md:px-0 ">
          {/* Profile Content Card */}
          <div className="bg-white px-6 py-2 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-5 md:pl-0 pl-5">
              {/* Profile Image */}
              <div className="h-12 md:w-auto w-38 overflow-hidden rounded-full border-2 border-gray-100 flex-shrink-0">
                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
              </div>
              
              {/* Name Display */}
              <div>
                <h2 className="text-xl font-black text-slate-800">Hello, {name}</h2>
                <p className="text-xs text-cyan-600 font-bold uppercase tracking-widest mt-0.5">Teacher</p>
              </div>
            </div>

            {/* User Icon/Display */}
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