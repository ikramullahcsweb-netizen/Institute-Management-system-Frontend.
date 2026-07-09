import React, { useState } from 'react';
import { Home as HomeIcon, Info, Server, PhoneCall, Menu, X, LogIn } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/crop logo.jfif';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => setMenu(false);

  const navLinks = [
    {
      name: 'ABOUT',
      href: '#About',
      icon: <Info className="w-5 h-5 text-brand-teal" />,
    },
    {
      name: 'SERVICES',
      href: '#Services',
      icon: <Server className="w-5 h-5 text-brand-teal" />,
    },
    {
      name: 'CONTACT',
      href: '#Contact',
      icon: <PhoneCall className="w-5 h-5 text-brand-teal" />,
    },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 z-[100] w-full h-16 bg-white/80 border-b border-slate-100 shadow-sm backdrop-blur-md flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 rounded-full border border-slate-200 object-contain"
            />
            <span className="font-extrabold text-lg text-slate-800 tracking-tight leading-none uppercase">
              Step 2 Scientist
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `font-bold text-xs tracking-wider transition-all duration-200 hover:text-brand-blue ${
                      isActive ? 'text-brand-blue' : 'text-slate-500'
                    }`
                  }
                >
                  HOME
                </NavLink>
              </li>

              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-bold text-xs tracking-wider transition-all duration-200 hover:text-brand-blue text-slate-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 border-l border-slate-200 pl-6">
              <Link
                to="/login"
                className="text-xs font-bold tracking-wider text-slate-500 hover:text-brand-blue transition-colors flex items-center gap-1.5"
              >
                <LogIn className="w-4 h-4" />
                LOGIN
              </Link>

              <Link
                to="/signup"
                className="bg-gradient-to-r from-brand-blue via-brand-teal to-brand-green px-5 py-2 rounded-full text-xs font-bold text-white shadow-md hover:shadow-brand-blue/20 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 transition-all cursor-pointer"
              >
                SIGN UP
              </Link>
            </div>
          </div>

          <button
            onClick={() => setMenu(true)}
            className="md:hidden p-2 text-brand-blue"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-[280px] bg-white z-[150]
        shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          menu ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8 h-8 rounded-full border border-slate-200" />
            <span className="font-extrabold text-sm text-slate-800 uppercase tracking-tight">Step 2 Scientist</span>
          </div>

          <button
            onClick={closeMenu}
            className="p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col p-6 gap-5">
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `flex items-center gap-4 font-bold text-sm tracking-wider transition-all duration-200 hover:text-brand-blue ${
                isActive ? 'text-brand-blue' : 'text-slate-500'
              }`
            }
          >
            <HomeIcon className="w-5 h-5 text-brand-blue" />
            HOME
          </NavLink>

          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={closeMenu}
              className="flex items-center gap-4 font-bold text-sm tracking-wider transition-all duration-200 hover:text-brand-blue text-slate-500"
            >
              {link.icon}
              {link.name}
            </a>
          ))}

          <div className="flex flex-col gap-3 mt-10 pt-6 border-t border-slate-100">
            <Link
              to="/login"
              onClick={closeMenu}
              className="w-full py-2.5 text-center font-bold text-slate-500 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-xs tracking-wider"
            >
              LOGIN
            </Link>

            <Link
              to="/signup"
              onClick={closeMenu}
              className="w-full py-2.5 text-center bg-gradient-to-r from-brand-blue via-brand-teal to-brand-green text-white font-bold rounded-xl shadow-lg hover:shadow-brand-blue/20 transition-all text-xs tracking-wider"
            >
              SIGN UP
            </Link>
          </div>
        </div>
      </div>

      {menu && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[120] md:hidden"
        />
      )}
    </>
  );
};

export default Navbar;
