// import React, { useState } from 'react';
// import { FaHome, FaUserAlt, FaServer } from 'react-icons/fa';
// import { FiLogOut, FiUserPlus, FiMenu, FiX } from 'react-icons/fi';
// import logo from "../../assets/crop logo.jfif"

// const Navbar = () => {
//   const [menu, setMenu] = useState(false);

//   return (
//     <nav className='bg-gray-50 md:top-0 w-full h-15 text-black fixed top-0 left-0 z-50 flex items-center justify-between lg:px-20 px-6 border-t md:border-b md:border-t-0 border-[#1a759f]/40  mx-auto'>
      
//      <img src={logo} alt="" className='w-40 h-15  mix-blend-multiply' />
      

     
//       <ul className={`${menu ? "flex" : "hidden"} md:flex md:static fixed top-20 left-4 right-4 md:bg-transparent bg-gray-300 rounded-2xl flex-col md:flex-row items-center md:gap-8 gap-6 py-8 md:py-0 border md:border-none border-[#1a759f]/30`}>
//         <a href='#Home' onClick={() => setMenu(false)} className='hover:text-[#76c893] flex items-center gap-2 font-bold text-sm'>
//           <FaHome className='md:hidden text-[#76c893]' size={20}/> HOME
//         </a>
//         <a href='#About' onClick={() => setMenu(false)} className='hover:text-[#76c893] flex items-center gap-2 font-bold text-sm'>
//           <FaUserAlt className='md:hidden text-[#76c893]' size={18}/> ABOUT
//         </a>
//         <a href='#Services' onClick={() => setMenu(false)} className='hover:text-[#76c893] flex items-center gap-2 font-bold text-sm'>
//           <FaServer className='md:hidden text-[#76c893]' size={18}/> SERVICES
//         </a>
        
//         <div className='flex flex-col md:flex-row items-center gap-4 border-t md:border-l border-white/10 pt-6 md:pt-0 md:pl-6 w-full md:w-auto'>
//           <button className='text-sm font-bold hover:text-[#76c893]'>LOGIN</button>
//           <button className='bg-gradient-to-r from-[#1a759f] to-[#52b69a] px-6 py-2 rounded-full text-sm font-bold text-black w-[80%] md:w-auto'>SIGN UP</button>
//         </div>
//       </ul>

//       <div className='md:hidden' onClick={() => setMenu(!menu)}>
//         {menu ? <FiX size={28} className="text-[#76c893]" /> : <FiMenu size={28} className="text-[#76c893]" />}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { FaHome, FaUserAlt, FaServer } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from "../../assets/crop logo.jfif";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => setMenu(false);

  return (
    <>
      
      <nav className='bg-gray-50 w-full h-16 text-black fixed top-0 left-0 z-[100] flex items-center justify-between lg:px-20 px-6 border-b border-[#1a759f]/20 mx-auto'>
        <img src={logo} alt="Logo" className='w-32 md:w-40 h-14 mix-blend-multiply' />

        <ul className='hidden md:flex items-center gap-10'>
          <a href='#Home' className='hover:text-[#1a759f] font-bold text-sm transition-colors'>HOME</a>
          <a href='#About' className='hover:text-[#1a759f] font-bold text-sm transition-colors'>ABOUT</a>
          <a href='#Services' className='hover:text-[#1a759f] font-bold text-sm transition-colors'>SERVICES</a>
           <a href='#Contact' className='hover:text-[#1a759f] font-bold text-sm transition-colors'>CONTACT US</a></ul>
          <div className='flex items-center gap-6 border-l border-gray-300 pl-6'>
            <button className='text-sm font-bold  hover:text-[#1a759f] px-6 py-2 rounded-3xl'>LOGIN</button>
            <button className='bg-gradient-to-r from-[#1a759f] to-[#52b69a] px-6 py-2 rounded-full text-sm font-bold text-white shadow-md'>SIGN UP</button>
          </div>
        

        <div className='md:hidden cursor-pointer' onClick={() => setMenu(true)}>
          <FiMenu size={28} className="text-[#1a759f]" />
        </div>
      </nav>

    
      <div 
        className={`fixed top-0 left-0 h-screen w-[80%] bg-white z-[120] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          menu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <img src={logo} alt="Logo" className='w-28 mix-blend-multiply' />
          
          
          <div onClick={closeMenu} className="cursor-pointer p-2 bg-gray-100 rounded-full">
            <FiX size={24} className="text-[#1a759f]" />
          </div>
        </div>
        
    
        <div className='flex flex-col p-8 gap-6'>
          <a href='#Home' onClick={closeMenu} className='hover:text-[#1a759f] flex items-center gap-4 font-bold text-lg text-slate-700'>
            <FaHome className='text-[#1a759f]' size={22}/> HOME
          </a>
          <a href='#About' onClick={closeMenu} className='hover:text-[#1a759f] flex items-center gap-4 font-bold text-lg text-slate-700'>
            <FaUserAlt className='text-[#1a759f]' size={20}/> ABOUT
          </a>
          <a href='#Services' onClick={closeMenu} className='hover:text-[#1a759f] flex items-center gap-4 font-bold text-lg text-slate-700'>
            <FaServer className='text-[#1a759f]' size={20}/> SERVICES
          </a>

        
          <div className='flex flex-col gap-4 mt-10 pt-8 border-t border-gray-100'>
            <button className='w-full py-3 font-bold text-slate-700 border border-gray-200 rounded-xl'>LOGIN</button>
            <button className='w-full py-3 bg-gradient-to-r from-[#1a759f] to-[#52b69a] text-white font-bold rounded-xl shadow-lg'>SIGN UP</button>
          </div>
        </div>
      </div>

      
      {menu && (
        <div 
          onClick={closeMenu} 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[110] md:hidden"
        ></div>
      )}
    </>
  );
};

export default Navbar;


