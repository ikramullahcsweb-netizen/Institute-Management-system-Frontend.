

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import home from "./navbar_images/Home.png";
import classes from "./navbar_images/Class.png";
import pay from "./navbar_images/Pay.png";
import profile from "./navbar_images/Profile.png";
import wallet from "./navbar_images/Wallet.png";
import logout from "./navbar_images/Logout.png";

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
  };

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { path: "/adminprofile",      icon: home,    label: "Dashboard"       },
    { path: "/adgenerateclass",   icon: classes, label: "My Classes"      },
    { path: "/adminlessonreport", icon: classes, label: "Lesson Materials" },
    { path: "/admain",            icon: pay,     label: "Payment"         },
    { path: "/adminprofile",      icon: profile, label: "Profile"         },
    { path: "/adgeneratesalary",  icon: wallet,  label: "Salary"          },
  ];

  return (
    <div className="font-sans">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed top-3 right-2 z-[60] md:hidden bg-white border border-gray-200 shadow-md rounded-full p-1"
        aria-label="Open sidebar"
      >
        <svg
          className="w-4 h-4 text-[#063a67]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[240px] bg-white border-r-2 border-gray-100 pt-[30px] px-5 z-[55] shadow-sm flex flex-col justify-between transform transition-transform duration-300
        lg:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div>
          <div className="flex items-center justify-between mb-8 px-2">
            <div>
              <h2 className="text-[#063a67] text-lg font-bold tracking-wider m-0 uppercase">
                S2S Portal
              </h2>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mt-0.5">
                Management
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="md:hidden bg-gray-100 hover:bg-gray-200 rounded-full p-2"
              aria-label="Close sidebar"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="list-none p-0 m-0 space-y-2">
            {menuItems.map((item) => (
              <li
                key={item.path}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 cursor-pointer group ${
                  isActive(item.path)
                    ? "bg-[#e6eff6] text-[#063a67]"
                    : "hover:bg-gray-50 text-gray-500"
                }`}
                onClick={() => {
                  navigate(item.path);
                  setIsOpen(false);
                }}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-[22px] h-[22px] object-contain transition-transform group-hover:scale-105"
                />
                <span
                  className={`text-[16px] font-semibold tracking-wide ${
                    isActive(item.path)
                      ? "text-[#063a67]"
                      : "group-hover:text-[#063a67]"
                  }`}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

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