import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import home from './navbar_images/Home.png';
import classes from './navbar_images/Class.png';
import pay from './navbar_images/Pay.png';
import profile from './navbar_images/Profile.png';
import wallet from './navbar_images/Wallet.png';
import logout from './navbar_images/Logout.png';

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Pure Frontend Session Management: Clears user states locally
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = '/';
  };

  // Helper function to dynamically add active state styling based on route
  const isActive = (path) => location.pathname === path;

  return (
    <div className="font-sans">
      <div className="fixed top-0 left-0 h-full w-[250px] bg-white border-r-2 border-gray-100 pt-[30px] px-5 z-50 shadow-sm flex flex-col justify-between">
        
        <div>
          {/* S2S Academy Identity Header Label */}
          <div className="mb-8 px-2">
            <h2 className="text-[#063a67] text-lg font-bold tracking-wider m-0 uppercase">S2S Portal</h2>
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mt-0.5">Management</p>
          </div>

          <ul className="list-none p-0 m-0 space-y-2">
            {/* Dashboard */}
            <li 
              className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 cursor-pointer group ${
                isActive('/adminprofile') ? 'bg-[#e6eff6] text-[#063a67]' : 'hover:bg-gray-50 text-gray-500'
              }`}
              onClick={() => navigate('/adminprofile')}
            >
              <img src={home} alt="home" className="w-[22px] h-[22px] object-contain transition-transform group-hover:scale-105" />
              <span className={`text-[16px] font-semibold tracking-wide ${isActive('/adminprofile') ? 'text-[#063a67]' : 'group-hover:text-[#063a67]'}`}>
                Dashboard
              </span>
            </li>

            {/* My Classes */}
            <li 
              className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 cursor-pointer group ${
                isActive('/adgenerateclass') ? 'bg-[#e6eff6] text-[#063a67]' : 'hover:bg-gray-50 text-gray-500'
              }`}
              onClick={() => navigate('/adgenerateclass')}
            >
              <img src={classes} alt="classes" className="w-[22px] h-[22px] object-contain transition-transform group-hover:scale-105" />
              <span className={`text-[16px] font-semibold tracking-wide ${isActive('/adgenerateclass') ? 'text-[#063a67]' : 'group-hover:text-[#063a67]'}`}>
                My Classes
              </span>
            </li>

            {/* Lesson Materials */}
            <li 
              className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 cursor-pointer group ${
                isActive('/adgenratelesson') ? 'bg-[#e6eff6] text-[#063a67]' : 'hover:bg-gray-50 text-gray-500'
              }`}
              onClick={() => navigate('/adgenratelesson')}
            >
              <img src={classes} alt="materials" className="w-[22px] h-[22px] object-contain transition-transform group-hover:scale-105" />
              <span className={`text-[16px] font-semibold tracking-wide ${isActive('/adgenratelesson') ? 'text-[#063a67]' : 'group-hover:text-[#063a67]'}`}>
                Lesson Materials
              </span>
            </li>

            {/* Payment */}
            <li 
              className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 cursor-pointer group ${
                isActive('/admain') ? 'bg-[#e6eff6] text-[#063a67]' : 'hover:bg-gray-50 text-gray-500'
              }`}
              onClick={() => navigate('/admain')}
            >
              <img src={pay} alt="payment" className="w-[22px] h-[22px] object-contain transition-transform group-hover:scale-105" />
              <span className={`text-[16px] font-semibold tracking-wide ${isActive('/admain') ? 'text-[#063a67]' : 'group-hover:text-[#063a67]'}`}>
                Payment
              </span>
            </li>

            {/* Profile */}
            <li 
              className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 cursor-pointer group ${
                isActive('/adminprofile-settings') ? 'bg-[#e6eff6] text-[#063a67]' : 'hover:bg-gray-50 text-gray-500'
              }`}
              onClick={() => navigate('/adminprofile')}
            >
              <img src={profile} alt="profile" className="w-[22px] h-[22px] object-contain transition-transform group-hover:scale-105" />
              <span className={`text-[16px] font-semibold tracking-wide ${isActive('/adminprofile-settings') ? 'text-[#063a67]' : 'group-hover:text-[#063a67]'}`}>
                Profile
              </span>
            </li>

            {/* Salary */}
            <li 
              className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 cursor-pointer group ${
                isActive('/adgenratesalry') ? 'bg-[#e6eff6] text-[#063a67]' : 'hover:bg-gray-50 text-gray-500'
              }`}
              onClick={() => navigate('/adgenratesalry')}
            >
              <img src={wallet} alt="salary" className="w-[22px] h-[22px] object-contain transition-transform group-hover:scale-105" />
              <span className={`text-[16px] font-semibold tracking-wide ${isActive('/adgenratesalry') ? 'text-[#063a67]' : 'group-hover:text-[#063a67]'}`}>
                Salary
              </span>
            </li>
          </ul>
        </div>

        {/* Step 2 Scientist High-Contrast Clean Logout UI Widget */}
        <div className="mb-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 bg-[#063a67] hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] text-white font-bold p-3 rounded-xl transition-all duration-250 cursor-pointer border-none shadow-sm hover:scale-[1.02] group"
          >
            <img src={logout} alt="logout" className="w-[20px] h-[20px] invert object-contain" />
            <span className="text-[15px] tracking-wide">Logout Portal</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default Nav;