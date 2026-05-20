import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// PNG Images imports
import home from './navbar_images/Home.png';
import classes from './navbar_images/Class.png';
import pay from './navbar_images/Pay.png';
import time from './navbar_images/Time.png';
import attendance from './navbar_images/Attendance.png';
import qa from './navbar_images/Qa.png';
import feedback from './navbar_images/Feedback.png';
import profile from './navbar_images/Profile.png';
import wallet from './navbar_images/Wallet.png';
import logout from './navbar_images/Logout.png';

function Nav() {
  const navigate = useNavigate();

  // Pure Static Logout handling simulation
  const handleStaticLogout = () => {
    // Bina kisi backend hit ke direct homepage ya login page par navigate karega
    window.location.href = '/';
  };

  // Centralized Navigation Matrix Array for ultra-clean code rendering
  const navLinks = [
    { name: 'Dashboard', path: '/', icon: home },
    { name: 'My Classes', path: '/viewclasses', icon: classes },
    { name: 'Lesson Material', path: '/myclasses', icon: classes },
    { name: 'Payment', path: '/teacherfinancial', icon: pay },
    { name: 'TimeTable', path: '/login', icon: time },
    { name: 'Attendance', path: '/AttendTeacher', icon: attendance },
    { name: 'Q&A', path: '/THQuestion', icon: qa },
    { name: 'Feedbacks', path: '/ViewTeacherFeedback', icon: feedback },
    { name: 'Profile', path: '/teacherprofile', icon: profile },
    { name: 'Salary', path: '/tesalaryview', icon: wallet },
  ];

  return (
    <div className="fixed top-0 left-0 h-full w-[260px] bg-white border-r border-slate-100 py-8 px-5 z-50 flex flex-col justify-between shadow-sm">
      
      {/* Upper Navigation Links Area */}
      <div className="w-full">
        <div className="mb-8 px-2">
          <span className="text-xs font-black text-[#483EA8] tracking-widest uppercase block">
            Academic Desk
          </span>
        </div>
        
        <ul className="space-y-1 w-full list-none p-0 m-0">
          {navLinks.map((link, index) => (
            <li key={index} className="w-full">
              <Link 
                to={link.path} 
                className="flex items-center gap-4 px-4 py-3 rounded-xl text-[#8A8A8A] font-semibold text-[15px] hover:bg-[#C6E6FF] hover:text-[#2F87D6] hover:font-bold transition-all group"
              >
                <img 
                  src={link.icon} 
                  alt={link.name} 
                  className="w-[22px] h-[22px] object-contain group-hover:scale-105 transition-transform" 
                />
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Static Logout Section */}
      <div className="w-full pt-4 border-t border-slate-50">
        <button 
          onClick={handleStaticLogout}
          className="w-full flex items-center gap-4 px-4 py-3.5 bg-[#667A8A] text-white font-bold text-[15px] rounded-xl hover:bg-slate-700 transition-colors shadow-xs"
        >
          <img 
            src={logout} 
            alt="logout" 
            className="w-[22px] h-[22px] object-contain brightness-0 invert" 
          />
          <span>Logout</span>
        </button>
      </div>

    </div>
  );
}

export default Nav;