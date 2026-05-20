import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userpng from "./photos/User.png";
import Head from "../Header/Header";

function AdminProfile() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contactnumber, setContactnumber] = useState("");
  const [secanswer, setSecAnswer] = useState("");

  useEffect(() => {
    // LocalStorage Static Validation Fallback Stream
    try {
      const savedAdmin = localStorage.getItem("s2s_admin_profile");
      if (savedAdmin) {
        const adminData = JSON.parse(savedAdmin);
        setName(adminData.name);
        setUsername(adminData.username);
        setEmail(adminData.email);
        setContactnumber(adminData.contactnumber);
        setSecAnswer(adminData.SecAnswer);
      } else {
        // Instantiating institutional default state values if record stream is empty
        setName("Super Administrator");
        setUsername("admin");
        setEmail("admin@step2scientist.com");
        setContactnumber("+92 300 1234567");
        setSecAnswer("Peshawar");
      }
    } catch (error) {
      console.error("Local client memory load corruption:", error);
    }
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <Head />

      {/* Main Wrapper Layout Engine Layer */}
      <div className="ml-[290px] pt-8 px-8 pb-12 flex justify-center">
        <div className="w-full max-w-[1000px] bg-white rounded-[24px] border-2 border-gray-100 shadow-xl p-8 transition-all">
          {/* Top Action Ribbon Component Block */}
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between pb-6 border-b-2 border-gray-100 gap-6">
            {/* Profile Entity Identity Section */}
            <div className="flex items-center gap-4">
              <div className="p-1.5 bg-gradient-to-tr from-[#063a67] to-blue-400 rounded-full shadow-md">
                <img
                  src={userpng}
                  alt="Admin Core Badge"
                  className="w-[65px] h-[65px] bg-white rounded-full p-1 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-black text-[#063a67] m-0 tracking-tight">
                  {name || "Loading Name..."}
                </h1>
                <span className="inline-block mt-1 px-2.5 py-0.5 bg-red-100 border border-red-200 text-red-700 font-extrabold text-[10px] tracking-widest uppercase rounded-md">
                  System Administrator
                </span>
              </div>
            </div>

            {/* Responsive Fast-Action Module Router Navigation Links */}
            <div className="flex flex-wrap gap-2.5">
              <Link to="/searchusersadmin" className="no-underline">
                <button className="cursor-pointer bg-gray-100 text-gray-700 hover:bg-[#063a67] hover:text-white px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all border-none outline-none shadow-sm">
                  🔍 Search Users
                </button>
              </Link>
              <Link to="/addteacher" className="no-underline">
                <button className="cursor-pointer bg-gray-100 text-gray-700 hover:bg-[#063a67] hover:text-white px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all border-none outline-none shadow-sm">
                  ➕ Add Teacher
                </button>
              </Link>
              <Link to="/addmanager" className="no-underline">
                <button className="cursor-pointer bg-gray-100 text-gray-700 hover:bg-[#063a67] hover:text-white px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all border-none outline-none shadow-sm">
                  💼 Add Manager
                </button>
              </Link>
              <Link to="/addadmin" className="no-underline">
                <button className="cursor-pointer bg-gray-100 text-gray-700 hover:bg-[#063a67] hover:text-white px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all border-none outline-none shadow-sm">
                  🛡️ Add Admin
                </button>
              </Link>
              <Link to="/adgenerateuser" className="no-underline">
                <button className="cursor-pointer bg-[#063a67] text-white hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all border-none outline-none shadow-md">
                  📊 Generate Report
                </button>
              </Link>
            </div>
          </div>

          {/* Operational Core Profile Parameter Visualisation Fields */}
          <div className="mt-8 space-y-6">
            {/* Data Metric Row 1: Full Name and Username Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[13px] font-extrabold text-gray-400 uppercase tracking-wider mb-2">
                  Full Legal Identity Name
                </label>
                <div className="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-xl font-bold text-gray-800 text-[15px] shadow-inner">
                  {name || "—"}
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-extrabold text-gray-400 uppercase tracking-wider mb-2">
                  Administrative User Handle
                </label>
                <div className="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-xl font-mono font-bold text-[#063a67] text-[15px] shadow-inner">
                  {username || "—"}
                </div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-100 my-2"></div>

            {/* Data Metric Row 2: Communication Coordinates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[13px] font-extrabold text-gray-400 uppercase tracking-wider mb-2">
                  Secure Electronic Mail Endpoint
                </label>
                <div className="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-xl font-semibold text-gray-700 text-[15px] shadow-inner">
                  {email || "—"}
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-extrabold text-gray-400 uppercase tracking-wider mb-2">
                  Direct Contact Mobile Digits
                </label>
                <div className="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-xl font-semibold text-gray-700 text-[15px] shadow-inner">
                  {contactnumber || "—"}
                </div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-100 my-2"></div>

            {/* Data Metric Row 3: Account Verification Infrastructure Token */}
            <div>
              <label className="block text-[13px] font-extrabold text-gray-400 uppercase tracking-wider mb-2">
                Account Cryptography Guard Challenge Question:{" "}
                <span className="text-gray-500 font-semibold italic">
                  What city were you born in?
                </span>
              </label>
              <div className="w-full p-4 border-2 border-gray-100 bg-blue-50/40 rounded-xl font-bold text-[#063a67] text-[15px] shadow-inner border-l-4 border-l-[#063a67]">
                {secanswer || "—"}
              </div>
            </div>
          </div>

          {/* Security Compliance System Integrity Footer Stamp */}
          <div className="mt-12 text-center border-t border-gray-100 pt-5">
            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest m-0">
              Operational Infrastructure Super Admin Profile Token Verified
              Locally
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminProfile;
