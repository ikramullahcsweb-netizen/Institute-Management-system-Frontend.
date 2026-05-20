import React, { useState } from 'react';
import { FaHome, FaUserAlt, FaServer } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from "../../assets/crop logo.jfif";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => setMenu(false);

  return (
    <>
      <nav className='bg-gray-50 backdrop-blur-md w-full h-16 text-black fixed top-0 left-0 z-[100] flex items-center border-b border-gray-200'>
        <div className="max-w-7xl mx-auto w-full px-4 md:px-0 flex items-center justify-between">
          
         
          <img src={logo} alt="Logo" className='w-32 md:w-40 h-auto mix-blend-multiply flex-shrink-0' />

         
          <div className='hidden md:flex items-center gap-6 lg:gap-10'>
            <ul className='flex items-center gap-6 lg:gap-8'>
              <li><a href='#Home' className='hover:text-[#1a759f] font-bold text-sm transition-colors whitespace-nowrap'>HOME</a></li>
              <li><a href='#About' className='hover:text-[#1a759f] font-bold text-sm transition-colors whitespace-nowrap'>ABOUT</a></li>
              <li><a href='#Services' className='hover:text-[#1a759f] font-bold text-sm transition-colors whitespace-nowrap'>SERVICES</a></li>
              <li><a href='#Contact' className='hover:text-[#1a759f] font-bold text-sm transition-colors whitespace-nowrap'>CONTACT US</a></li>
            </ul></div>

            <div className='flex items-center gap-4 border-l border-gray-300 pl-6 flex-shrink-0'>
              {/* <button className='text-sm font-bold hover:text-[#1a759f] whitespace-nowrap'>LOGIN</button> */}
              <Link to="/login" className='text-sm font-bold hover:text-[#1a759f] whitespace-nowrap transition-colors'>
              LOGIN
            </Link>
              <button className='bg-gradient-to-r from-[#1a759f] to-[#52b69a] px-5 py-2 rounded-full text-sm font-bold text-white shadow-md active:scale-95 transition-all whitespace-nowrap'>
                SIGN UP
              </button>
            
          </div>

          {/* Mobile Toggle */}
          <div className='md:hidden cursor-pointer p-2' onClick={() => setMenu(true)}>
            <FiMenu size={28} className="text-[#1a759f]" />
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`fixed top-0 left-0 h-screen w-[280px] bg-white z-[120] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          menu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <img src={logo} alt="Logo" className='w-28' />
          <div onClick={closeMenu} className="cursor-pointer p-2 bg-gray-100 rounded-full">
            <FiX size={24} className="text-[#1a759f]" />
          </div>
        </div>
        
        <div className='flex flex-col p-8 gap-6'>
          <a href='#Home' onClick={closeMenu} className='hover:text-[#1a759f] flex items-center gap-4 font-bold text-lg text-slate-700 transition-all'>
            <FaHome className='text-[#1a759f]' size={22}/> HOME
          </a>
          <a href='#About' onClick={closeMenu} className='hover:text-[#1a759f] flex items-center gap-4 font-bold text-lg text-slate-700 transition-all'>
            <FaUserAlt className='text-[#1a759f]' size={20}/> ABOUT
          </a>
          <a href='#Services' onClick={closeMenu} className='hover:text-[#1a759f] flex items-center gap-4 font-bold text-lg text-slate-700 transition-all'>
            <FaServer className='text-[#1a759f]' size={20}/> SERVICES
          </a>

          <div className='flex flex-col gap-4 mt-10 pt-8 border-t border-gray-100'>
            <button className='w-full py-3 font-bold text-slate-700 border border-gray-200 rounded-xl active:bg-gray-50'>LOGIN</button>
            <button className='w-full py-3 bg-gradient-to-r from-[#1a759f] to-[#52b69a] text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all'>SIGN UP</button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menu && (
        <div onClick={closeMenu} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[110] md:hidden"></div>
      )}
    </>
  );
};

export default Navbar;
