// import React from 'react';
// import {
//   FaHome,
//   FaUserGraduate, FaChalkboardTeacher, FaClipboardCheck, FaMoneyBill} from 'react-icons/fa';

// import logo from '../../assets/step2 logo.jfif';

// const Sidebar = () => {
//   return (
//     <aside className="w-62 min-h-screen bg-white shadow-xl hidden md:flex flex-col border-r border-[#d9f3f4]">

//       <div className="h-20  flex items-center justify-center border-b border-[#d9f3f4]">
//         <img
//           src={logo}
//           alt="Logo"
//           className="w-36 h-auto -ml-20"
//         />
//       </div>

//       <nav className="flex flex-col gap-3 p-4">

//         <a
//           href="#"
//           className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[#7ed957] to-[#1e88c8] text-white font-semibold shadow-md"
//         >
//           <FaHome />
//           Dashboard
//         </a>

//         <a
//           href="#"
//           className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#f4fdfd] hover:text-[#1e88c8] font-semibold text-slate-700 transition-all duration-200"
//         >
//           <FaUserGraduate />
//           Students
//         </a>

//         <a
//           href="#"
//           className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#f4fdfd] hover:text-[#1e88c8] font-semibold text-slate-700 transition-all duration-200"
//         >
//           <FaChalkboardTeacher />
//           Teachers
//         </a>

//         <a
//           href="#"
//           className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#f4fdfd] hover:text-[#1e88c8] font-semibold text-slate-700 transition-all duration-200"
//         >
//           <FaClipboardCheck />
//           Attendance
//         </a>

//         <a
//           href="#"
//           className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#f4fdfd] hover:text-[#1e88c8] font-semibold text-slate-700 transition-all duration-200"
//         >
//           <FaMoneyBill />
//           Fees
//         </a>

//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

import React from 'react';
import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaMoneyBill,
} from 'react-icons/fa';

import { NavLink } from 'react-router-dom';
import logo from '../../assets/step2 scientist logo.jpeg';

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-white shadow-xl hidden md:flex flex-col border-r border-[#d9f3f4]">

      <div className="h-20 flex items-center justify-center border-b border-[#d9f3f4]">
        <img
          src={logo}
          alt="Logo"
          className="w-20 h-auto"
        />
      </div>

      <nav className="flex flex-col gap-3 p-4">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
              isActive
                ? 'bg-gradient-to-r from-[#7ed957] to-[#1e88c8] text-white shadow-md'
                : 'text-slate-700 hover:bg-[#f4fdfd] hover:text-[#1e88c8]'
            }`
          }
        >
          <FaHome />
          Dashboard
        </NavLink>

        <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
              isActive
                ? 'bg-gradient-to-r from-[#7ed957] to-[#1e88c8] text-white shadow-md'
                : 'text-slate-700 hover:bg-[#f4fdfd] hover:text-[#1e88c8]'
            }`
          }
        >
          <FaUserGraduate />
          Students
        </NavLink>

        <NavLink
          to="/teachers"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
              isActive
                ? 'bg-gradient-to-r from-[#7ed957] to-[#1e88c8] text-white shadow-md'
                : 'text-slate-700 hover:bg-[#f4fdfd] hover:text-[#1e88c8]'
            }`
          }
        >
          <FaChalkboardTeacher />
          Teachers
        </NavLink>

        <NavLink
          to="/attendance"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
              isActive
                ? 'bg-gradient-to-r from-[#7ed957] to-[#1e88c8] text-white shadow-md'
                : 'text-slate-700 hover:bg-[#f4fdfd] hover:text-[#1e88c8]'
            }`
          }
        >
          <FaClipboardCheck />
          Attendance
        </NavLink>

        <NavLink
          to="/fees"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
              isActive
                ? 'bg-gradient-to-r from-[#7ed957] to-[#1e88c8] text-white shadow-md'
                : 'text-slate-700 hover:bg-[#f4fdfd] hover:text-[#1e88c8]'
            }`
          }
        >
          <FaMoneyBill />
          Fees
        </NavLink>

      </nav>

    </aside>
  );
};

export default Sidebar;