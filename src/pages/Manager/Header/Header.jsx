import React, { useState, useEffect } from "react";
import Nav from "../NavBar/Nav";
import API from "../../../api";
import logo from "../../../assets/step2 scientist logo.jpeg";
import userpng from "../photos/User.png";

function Header() {
  const [name, setName] = useState('');

  useEffect(() => {
    // localStorage se seedha name lo
    const stored = localStorage.getItem('user');
    if (stored) {
      try {
        const user = JSON.parse(stored);
        const fullName = `${user?.first_name || ''} ${user?.last_name || ''}`.trim();
        if (fullName) { setName(fullName); return; }
      } catch { /* ignore */ }
    }
    // Fallback: API se fetch karo
    API.get('/api/auth/profile')
      .then(res => {
        const d = res.data?.data || res.data;
        const fullName = `${d.first_name || ''} ${d.last_name || ''}`.trim();
        setName(fullName || d.name || '');
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Nav />
      <div className="w-full md:pl-[250px] flex flex-col min-w-0">
        <div className="w-full px-3 sm:px-6 lg:px-8 mt-16 md:mt-4">
          <div className="w-full max-w-full bg-white border-2 border-[#384D6C]/30 rounded-[16px] sm:rounded-3xl p-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between shadow-sm overflow-hidden">

            {/* Logo */}
            <div className="flex items-center justify-center sm:justify-start shrink-0">
              <img src={logo} alt="Logo" className="w-20 sm:w-32 h-14 sm:h-20 object-contain" />
            </div>

            {/* Name */}
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-end border-t border-[#384D6C]/10 sm:border-t-0 pt-3 sm:pt-0 min-w-0">
              <div className="text-center sm:text-right min-w-0">
                <h1 className="text-base sm:text-2xl font-black text-[#384D6C] tracking-tight truncate">
                  Hello, {name || '...'}
                </h1>
                <p className="text-xs sm:text-base font-bold text-[#1DB6D9] uppercase tracking-wider mt-0.5">
                  Manager
                </p>
              </div>
              <img src={userpng} alt="user avatar" className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[#384D6C] object-cover shrink-0" />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
