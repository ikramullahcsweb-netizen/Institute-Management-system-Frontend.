import React, { useState } from 'react';
import user from './photos/User.png';
import { Link } from 'react-router-dom';
import Head from '../Header/Header';
import { FaUserEdit, FaUserCircle, FaEnvelope, FaPhoneAlt, FaBookOpen, FaQuestionCircle } from 'react-icons/fa';

function TeacherProfile() {
  // Front-end state preview layout render karne ke liye complete static template mockup data
  const [name] = useState("Prof. Asif Khan");
  const [teid] = useState("TCH-2026-88");
  const [username] = useState("asif_khan99");
  const [email] = useState("asif.khan@royalacademy.edu");
  const [contactnumber] = useState("+92 300 1234567");
  const [gender] = useState("Male");
  const [subject] = useState("Mathematics");
  const [secanswer] = useState("Peshawar");

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <Head />

      {/* Main Structural Container Section with Sidebar Clearance Margin Padding */}
      <div className="w-full max-w-[1100px] mx-auto px-4 pl-4 md:pl-[290px] pr-4 mt-8 transition-all">
        
        {/* Component Title Dashboard Header Box */}
        <div className="w-full bg-[#C9E8EA] border border-slate-200 rounded-[20px] p-5 mb-6 flex justify-between items-center shadow-xs">
          <div>
            <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
              <FaUserCircle className="text-slate-700" />
              <span>User Profile</span>
            </h1>
            <p className="text-[11px] text-slate-600 font-bold mt-0.5 uppercase tracking-wide">
              Manage and view your instructor credential details.
            </p>
          </div>
        </div>

        {/* Core Profile Card Widget Container Element */}
        <div className="bg-white border-2 border-slate-200 rounded-[22px] p-6 sm:p-8 shadow-sm space-y-8">
          
          {/* Top Row: User Avatar Media Badge and Identity Controls Segment */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6 bg-slate-50 border border-slate-200/80 rounded-2xl p-5">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-20 h-20 rounded-full border-2 border-[#483EA8] p-1 bg-white">
                <img src={user} alt='User Identity Avatar' className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="space-y-0.5">
                <h2 className="text-lg font-black text-slate-800">{name}</h2>
                <p className="text-xs font-bold text-slate-400">ID: {teid}</p>
                <span className="inline-block mt-1 bg-purple-50 text-[#483EA8] text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded">
                  Teacher Account
                </span>
              </div>
            </div>

            {/* Edit Interface Redirect Button Layout Link */}
            <div className="w-full sm:w-auto">
              <Link to='/teacherprofileedit' className="block w-full text-center">
                <button className="w-full sm:w-auto bg-[#483EA8] hover:bg-[#392f8a] text-white text-xs font-black py-3 px-6 rounded-xl flex items-center justify-center gap-2 uppercase tracking-wider transition-colors shadow-xs">
                  <FaUserEdit className="text-[14px]" />
                  <span>Edit Profile</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Primary Form Layout Fields Deck Grid Structure */}
          <div className="space-y-5">
            
            {/* Identity Group Area Grid Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-black text-[#667A8A] uppercase tracking-wider">
                  Full Name
                </label>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700">
                  {name}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-black text-[#667A8A] uppercase tracking-wider">
                  Username
                </label>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700">
                  {username}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-black text-[#667A8A] uppercase tracking-wider">
                  Gender
                </label>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700">
                  {gender}
                </div>
              </div>
            </div>

            {/* Divider Border Accent Section Line */}
            <div className="border-t border-slate-100 pt-2"></div>

            {/* Contact Information Communication Channel Blocks Grid Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-black text-[#667A8A] uppercase tracking-wider flex items-center gap-1.5">
                  <FaEnvelope className="text-slate-400" />
                  <span>Email Address</span>
                </label>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700">
                  {email}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-black text-[#667A8A] uppercase tracking-wider flex items-center gap-1.5">
                  <FaPhoneAlt className="text-slate-400" />
                  <span>Phone Number</span>
                </label>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700">
                  {contactnumber}
                </div>
              </div>
            </div>

            {/* Divider Border Accent Section Line */}
            <div className="border-t border-slate-100 pt-2"></div>

            {/* Core Department Academic Assignment Parameters Row */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-black text-[#667A8A] uppercase tracking-wider flex items-center gap-1.5">
                <FaBookOpen className="text-slate-400" />
                <span>Subject Department</span>
              </label>
              <div className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-[#483EA8] bg-purple-50/30 max-w-xs">
                {subject}
              </div>
            </div>

            {/* Divider Border Accent Section Line */}
            <div className="border-t border-slate-100 pt-2"></div>

            {/* Identity Security Verification Matrix Key Box */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-black text-[#667A8A] uppercase tracking-wider flex items-center gap-1.5">
                <FaQuestionCircle className="text-slate-400" />
                <span>Security Question - What city were you born in?</span>
              </label>
              <div className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-600">
                {secanswer}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default TeacherProfile;