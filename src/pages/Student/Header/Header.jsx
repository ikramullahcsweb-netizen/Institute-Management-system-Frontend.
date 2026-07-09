import React, { useState, useEffect } from 'react';
import Nav from '../NavBar/Nav';
import API from '../../../api';
import logo from '../../../assets/crop logo.jfif';
import userpng from '../photos/User.png';

function Header() {
  const [name, setName]   = useState('');
  const [grade, setGrade] = useState('');

  useEffect(() => {
    // localStorage se seedha name lo
    const stored = localStorage.getItem('user');
    if (stored) {
      try {
        const user = JSON.parse(stored);
        if (user?.name) { setName(user.name); }
        if (user?.grade) { setGrade(user.grade); return; }
      } catch { /* ignore */ }
    }
    // Fallback: API se fetch karo
    API.get('/api/v1/studentprofile')
      .then(res => {
        const d = res.data?.data || res.data;
        setName(d.name   || '');
        setGrade(d.grade || '');
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="w-full bg-white border-b border-slate-200">
      <Nav />
      <div className="w-full max-w-[1400px] mx-auto px-4 py-4 md:pl-[290px] transition-all">
        <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 md:p-5 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            {/* Logo */}
            <div className="flex items-center justify-center sm:justify-start min-w-[120px]">
              <img src={logo} alt="logo" className="h-10 md:h-12 object-contain" />
            </div>

            {/* Name + Grade */}
            <div className="text-center sm:text-left flex-1">
              <p className="text-sm md:text-base text-slate-800 font-medium leading-relaxed">
                Hello, <span className="font-extrabold text-slate-900">{name || '...'}</span>
                <br />
                <span className="inline-flex items-center text-xs font-bold text-[#384D6C] bg-[#C9E8EA] px-2.5 py-0.5 rounded-md mt-1 uppercase tracking-wide">
                  Grade {grade || '—'}
                </span>
                <span className="text-xs text-slate-500 font-semibold block sm:inline sm:ml-2 mt-0.5 sm:mt-0">
                  | Academic Student Profile
                </span>
              </p>
            </div>

            {/* Avatar */}
            <div className="flex items-center justify-center">
              <div className="relative p-1 bg-white border border-slate-300 rounded-full shadow-xs">
                <img
                  src={userpng}
                  alt="User Avatar"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover bg-slate-100"
                />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
