

import React, { useState } from 'react';
import {FaHome, FaUserAlt, FaServer, FaPhone,} from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/crop logo.jfif';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => setMenu(false);

  const navLinks = [
    {
      name: 'ABOUT',
      href: '#About',
      icon: <FaUserAlt size={20} />,
    },
    {
      name: 'SERVICES',
      href: '#Services',
      icon: <FaServer size={20} />,
    },
    {
      name: 'CONTACT',
      href: '#Contact',
      icon: <FaPhone size={20} />,
    },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 z-[100] w-full h-16 bg-gray-50 border-b border-gray-200 shadow-sm backdrop-blur-md flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-32 md:w-40 h-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `font-bold text-sm transition-all duration-200 hover:text-[#1a759f] hover:scale-105 ${
                      isActive ? 'text-[#1a759f]' : 'text-slate-700'
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
                    className="font-bold text-sm transition-all duration-200 hover:text-[#1a759f] hover:scale-105 text-slate-700"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 border-l border-gray-300 pl-6">
              <Link
                to="/login"
                className="text-sm font-bold text-slate-700 hover:text-[#1a759f] transition-colors"
              >
                LOGIN
              </Link>

              <Link
                to="/signup"
                className="bg-gradient-to-r from-[#1a759f] to-[#52b69a] px-5 py-2 rounded-full text-sm font-bold text-white shadow-md hover:scale-105 active:scale-95 transition-all"
              >
                SIGN UP
              </Link>
            </div>
          </div>

          <button
            onClick={() => setMenu(true)}
            className="md:hidden p-2"
          >
            <FiMenu size={28} className="text-[#1a759f]" />
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-screen w-[280px] bg-white 
          
          
  shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          menu ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <img src={logo} alt="Logo" className="w-28" />

          <button
            onClick={closeMenu}
            className="p-2 rounded-full bg-gray-100"
          >
            <FiX size={24} className="text-[#1a759f]" />
          </button>
        </div>

        <div className="flex flex-col p-8 gap-6">
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `flex items-center gap-4 font-bold text-lg transition-all duration-200 hover:text-[#1a759f] ${
                isActive ? 'text-[#1a759f]' : 'text-slate-700'
              }`
            }
          >
            <span className="text-[#1a759f]">
              <FaHome size={20} />
            </span>
            HOME
          </NavLink>

          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={closeMenu}
              className="flex items-center gap-4 font-bold text-lg transition-all duration-200 hover:text-[#1a759f] text-slate-700"
            >
              <span className="text-[#1a759f]">{link.icon}</span>
              {link.name}
            </a>
          ))}

          <div className="flex flex-col gap-4 mt-10 pt-8 border-t border-gray-100">
            <Link
              to="/login"
              onClick={closeMenu}
              className="w-full py-3 text-center font-bold text-slate-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
            >
              LOGIN
            </Link>

            <Link
              to="/signup"
              onClick={closeMenu}
              className="w-full py-3 text-center bg-gradient-to-r from-[#1a759f] to-[#52b69a] text-white font-bold rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
            >
              SIGN UP
            </Link>
          </div>
        </div>
      </div>

      {menu && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
        />
      )}
    </>
  );
};

export default Navbar;

