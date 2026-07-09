import React, { useState, useEffect } from "react";
import Nav from "../NavBar/Nav";
import API from "../../../api";
import userpng from "../photos/User.png";
import logo from "../../../assets/step2 scientist logo.jpeg";

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
        setName(fullName || '');
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="bg-slate-50 flex font-sans">
      <Nav />
      <div className="flex-1 md:ml-[190px]">
        <main className="w-full px-3 sm:px-4 lg:px-6 py-4">
          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 md:gap-5">
              <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-gray-100 flex-shrink-0">
                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-800 m-0">
                  Hello, {name || '...'}
                </h2>
                <p className="text-xs text-cyan-600 font-bold uppercase tracking-widest mt-0.5 m-0">
                  Administrator
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
