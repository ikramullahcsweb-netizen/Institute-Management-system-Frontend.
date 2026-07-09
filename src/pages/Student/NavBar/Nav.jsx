import React from 'react';
import { 
  FaThLarge, 
  FaChalkboardTeacher, 
  FaCreditCard, 
  FaCalendarAlt, 
  FaUserCheck, 
  FaComments, 
  FaRegCommentDots, 
  FaUserCircle, 
  FaWallet, 
  FaSignOutAlt 
} from 'react-icons/fa';

function Nav() {

  // Localized Client-Side Mock Session Destruction Flow
  const handleDeletetoken = () => {
    console.log("Static Sandbox Token Clearance: Dispatching direct root routing.");
    alert("Session cleared successfully! Redirecting execution thread to landing node.");
    window.location.href = '/';
  };

  const navigationLinks = [
    { label: "Dashboard",  path: "/StudentDashboard", icon: <FaThLarge /> },
    { label: "My Classes", path: "/Test",             icon: <FaChalkboardTeacher /> },
    { label: "Payment",    path: "/ViewOnline",       icon: <FaCreditCard /> },
    { label: "TimeTable",  path: "/StudentTimetable", icon: <FaCalendarAlt /> },
    { label: "Attendance", path: "/AttendStudent",    icon: <FaUserCheck /> },
    { label: "Q&A",        path: "/AddQuestion",      icon: <FaComments /> },
    { label: "Feedbacks",  path: "/Feedback",         icon: <FaRegCommentDots /> },
    { label: "Profile",    path: "/StudentProfile",   icon: <FaUserCircle /> },
    { label: "Wallet",     path: "/Wallet",           icon: <FaWallet /> },
  ];

  return (
    <>
      {/* Fixed Vertical Sidebar Scaffold Structure */}
      <div className="hidden md:flex fixed top-0 left-0 h-full w-[270px] bg-white border-r-2 border-slate-200 flex-col justify-between p-3 z-50 shadow-xs">
        
        {/* Top Control Links Array Tree Section */}
        <div className="w-full space-y-6">
          
          {/* Identity/System Label Context */}
          <div className="px-3 py-2 border-b-2 border-slate-100">
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">
              Navigation Module
            </span>
          </div>

          <ul className="w-full space-y-1.5 list-none m-0 p-0">
            {navigationLinks.map((link, index) => (
              <li key={index} className="w-full">
                <a 
                  href={link.path}
                  className="w-full flex items-center gap-3.5 px-4 py-3 rounded-xl font-sans text-sm font-bold text-slate-500 uppercase tracking-wide border-2 border-transparent transition-all duration-200 group hover:bg-[#C9E8EA] hover:text-slate-900 hover:border-slate-900"
                >
                  {/* Custom Styled Icons with dynamic hover color changes */}
                  <span className="text-lg text-slate-400 group-hover:text-[#384D6C] transition-colors">
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Lower Secure Exit Operational Action Core Block */}
        <div className="w-full pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={handleDeletetoken}
            className="w-full flex items-center justify-between gap-3 px-4 py-3.4 bg-slate-800 hover:bg-red-700 text-white rounded-xl border-2 border-slate-950 shadow-sm transition-all duration-200 group"
          >
            <div className="flex items-center gap-3">
              <FaSignOutAlt className="text-slate-400 group-hover:text-white transition-colors text-lg" />
              <span className="text-xs font-black uppercase tracking-widest">
                Exit Session
              </span>
            </div>
            <span className="text-[9px] font-extrabold bg-slate-900 px-2 py-0.5 rounded text-slate-400 uppercase tracking-wider group-hover:bg-red-950 group-hover:text-red-200">
              Void
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Responsive Header Ribbon Layout Backup Bar */}
      <div className="md:hidden w-full bg-white border-b-2 border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-40 shadow-xs">
        <span className="text-xs font-black text-slate-900 uppercase tracking-widest">
          Academic Portal
        </span>
        <button 
          onClick={handleDeletetoken}
          className="p-2 text-slate-700 hover:text-red-600 transition-colors"
          title="Logout Link Node"
        >
          <FaSignOutAlt className="text-lg" />
        </button>
      </div>
    </>
  );
}

export default Nav;