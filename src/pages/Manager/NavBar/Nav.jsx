// // import React, { useState } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import {
// //   Home,
// //   BookOpen,
// //   Users,
// //   GraduationCap,
// //   CreditCard,
// //   CalendarDays,
// //   ClipboardCheck,
// //   MessageSquare,
// //   User,
// //   Wallet,
// //   LogOut,
// //   Menu,
// //   X
// // } from "lucide-react";

// // function Nav() {
// //   const location = useLocation();
// //   const [isOpen, setIsOpen] = useState(false); // Mobile tracking drawer state

// //   const menuItems = [
// //     { name: "Dashboard", path: "/", icon: <Home size={20} /> },
// //     { name: "My Classes", path: "/requestedadditionalclasses", icon: <BookOpen size={20} /> },
// //     { name: "Enrollments", path: "/ManagerEnroll", icon: <Users size={20} /> },
// //     { name: "Subject", path: "/SubjectView", icon: <GraduationCap size={20} /> },
// //     { name: "Payment", path: "/managerfinancial", icon: <CreditCard size={20} /> },
// //     { name: "TimeTable", path: "/Manager/Timetable", icon: <CalendarDays size={20} /> },
// //     { name: "Attendance", path: "/Attend", icon: <ClipboardCheck size={20} /> },
// //     { name: "Feedbacks", path: "/ManagerFeedback", icon: <MessageSquare size={20} /> },
// //     { name: "Profile", path: "/managerprofile", icon: <User size={20} /> },
// //     { name: "Salary", path: "/homemain", icon: <Wallet size={20} /> },
// //   ];

// //   const handleLogout = () => {
// //     window.location.href = "/";
// //   };

// //   return (
// //     <>
// //       {/* FLOATING MOBILE BURGER TRIGGER BUTTON */}
// //       <button
// //         onClick={() => setIsOpen(!isOpen)}
// //         className="md:hidden fixed top-6 left-4 z-50 p-2.5 bg-[#384D6C] text-white rounded-xl shadow-md hover:bg-[#2b3c54] transition-all "
// //       >
// //         {isOpen ? <X size={22} /> : <Menu size={22} />}
// //       </button>

// //       {/* OVERLAY GLASS BACKGROUND SHADE (Mobile view drawer modal cleaner) */}
// //       {isOpen && (
// //         <div
// //           className="md:hidden fixed inset-0 bg-black/40 z-40 backdrop-blur-xs transition-opacity"
// //           onClick={() => setIsOpen(false)}
// //         />
// //       )}

     
// //       <div
// //         className={`fixed top-0 left-0 h-screen w-[260px] bg-white border-r-2 border-[#384D6C]/20 flex flex-col justify-between px-4 py-6 shadow-xl z-40 transition-transform duration-300 ease-in-out
// //           ${isOpen ? "translate-x-0" : "-translate-x-full"} 
// //           md:translate-x-0`}
// //       >
// //         {/* TOP BRANDING APP CONTROLLER */}
// //         <div>
// //           <h1 className="text-3xl font-black text-center text-[#384D6C] tracking-wider mb-8 uppercase mt-14 md:mt-0">
// //             LMS
// //           </h1>

// //           <div className="flex flex-col gap-1.5 overflow-y-auto max-h-[calc(100vh-180px)] pr-1">
// //             {menuItems.map((item, index) => (
// //               <Link
// //                 key={index}
// //                 to={item.path}
// //                 onClick={() => setIsOpen(false)}
// //                 className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200
// //                   ${
// //                     location.pathname === item.path
// //                       ? "bg-[#384D6C] text-white shadow-sm"
// //                       : "text-[#384D6C] hover:bg-[#C9E8EA]/60"
// //                   }`}
// //               >
// //                 {item.icon}
// //                 <span>{item.name}</span>
// //               </Link>
// //             ))}
// //           </div>
// //         </div>

// //         {/* LOGOUT SECURE ACTION MODULE */}
// //         <div className="pt-4 border-t border-[#384D6C]/10 bg-white">
// //           <button
// //             onClick={handleLogout}
// //             className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-3.5 rounded-xl shadow-sm transition-all duration-200 uppercase tracking-wider"
// //           >
// //             <LogOut size={18} />
// //             Logout
// //           </button>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default Nav;



// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   Home,
//   BookOpen,
//   Users,
//   GraduationCap,
//   CreditCard,
//   CalendarDays,
//   ClipboardCheck,
//   MessageSquare,
//   User,
//   Wallet,
//   LogOut,
// } from "lucide-react";

// function Nav() {
//   const location = useLocation();

//   const menuItems = [
//     { name: "Dashboard", path: "/", icon: <Home size={20} /> },
//     { name: "My Classes", path: "/requestedadditionalclasses", icon: <BookOpen size={20} /> },
//     { name: "Enrollments", path: "/ManagerEnroll", icon: <Users size={20} /> },
//     { name: "Subject", path: "/SubjectView", icon: <GraduationCap size={20} /> },
//     { name: "Payment", path: "/managerfinancial", icon: <CreditCard size={20} /> },
//     { name: "TimeTable", path: "/Manager/Timetable", icon: <CalendarDays size={20} /> },
//     { name: "Attendance", path: "/Attend", icon: <ClipboardCheck size={20} /> },
//     { name: "Feedbacks", path: "/ManagerFeedback", icon: <MessageSquare size={20} /> },
//     { name: "Profile", path: "/managerprofile", icon: <User size={20} /> },
//     { name: "Salary", path: "/homemain", icon: <Wallet size={20} /> },
//   ];

//   const handleLogout = () => {
//     window.location.href = "/";
//   };

//   return (
//     <div className="fixed top-0 left-0 h-screen w-[250px] bg-white border-r-2 border-[#384D6C] flex flex-col justify-between px-4 py-6 shadow-lg z-50">
//       {/* TOP BRANDING ROW */}
//       <div>
//         <h1 className="text-3xl font-bold text-center text-[#384D6C] mb-3">
//           LMS
//         </h1>

//         {/* NAVIGATION LINKS CONTAINER */}
//         <div className="flex flex-col ">
//           {menuItems.map((item, index) => (
//             <Link
//               key={index}
//               to={item.path}
//               className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-[16px] font-semibold transition-all duration-300
//                 ${
//                   location.pathname === item.path
//                     ? "bg-[#384D6C] text-white shadow-sm"
//                     : "text-[#384D6C] hover:bg-[#C9E8EA]"
//                 }`}
//             >
//               {item.icon}
//               <span>{item.name}</span>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* LOGOUT INTERFACE CONTAINER */}
//       <div>
//         <button
//           onClick={handleLogout}
//           className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-2xl transition-all duration-300"
//         >
//           <LogOut size={20} />
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Nav;



import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  BookOpen,
  Users,
  GraduationCap,
  CreditCard,
  CalendarDays,
  ClipboardCheck,
  MessageSquare,
  User,
  Wallet,
  LogOut,
  Menu,
  X,
} from "lucide-react";

function Nav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Mobile drawer state

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <Home size={20} /> },
    { name: "My Classes", path: "/requestedadditionalclasses", icon: <BookOpen size={20} /> },
    { name: "Enrollments", path: "/ManagerEnroll", icon: <Users size={20} /> },
    { name: "Subject", path: "/SubjectView", icon: <GraduationCap size={20} /> },
    { name: "Payment", path: "/managerfinancial", icon: <CreditCard size={20} /> },
    { name: "TimeTable", path: "/Manager/Timetable", icon: <CalendarDays size={20} /> },
    { name: "Attendance", path: "/Attend", icon: <ClipboardCheck size={20} /> },
    { name: "Feedbacks", path: "/ManagerFeedback", icon: <MessageSquare size={20} /> },
    { name: "Profile", path: "/managerprofile", icon: <User size={20} /> },
    { name: "Salary", path: "/homemain", icon: <Wallet size={20} /> },
  ];

  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <>
      {/* MOBILE HAMBURGER / CLOSE TOGGLE BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-[60] p-2.5 bg-[#384D6C] text-white rounded-xl shadow-md hover:bg-[#2b3c54] transition-all"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* MOBILE OVERLAY BACKDROP (tap to close) */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-50 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR ITSELF */}
      <div
        className={`fixed top-0 left-0 h-screen w-[250px] bg-white border-r-2 border-[#384D6C] flex flex-col justify-between px-4 py-6 shadow-lg z-50 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0`}
      >
        {/* TOP BRANDING ROW */}
        <div>
          <h1 className="text-xl font-bold text-center text-[#384D6C] mb-3 mt-10 md:mt-0 text-start ">
            LMS (MANAGER )
          </h1>

          {/* NAVIGATION LINKS CONTAINER */}
          <div className="flex flex-col gap-1 overflow-y-auto max-h-[calc(100vh-180px)] pr-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-[16px] font-semibold transition-all duration-300
                  ${
                    location.pathname === item.path
                      ? "bg-[#384D6C] text-white shadow-sm"
                      : "text-[#384D6C] hover:bg-[#C9E8EA]"
                  }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* LOGOUT INTERFACE CONTAINER */}
        <div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-2xl transition-all duration-300"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav;