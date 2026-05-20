import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Head from '../Header/Header';
import { FaUserCircle, FaEdit, FaUser, FaEnvelope, FaPhone, FaVenusMars, FaUserShield, FaCity, FaGraduationCap } from 'react-icons/fa';

function StudentProfile() {
  // Pure Static Local State Configuration (No API Dependencies)
  const [name] = useState('Ikram Khan');
  const [stdid] = useState('STD-2026-991');
  const [username] = useState('ikram_dev');
  const [email] = useState('ikram@royalacademy.edu');
  const [contactnumber] = useState('03001234567');
  const [gender] = useState('Male');
  const [parentname] = useState('Muhammad Khan');
  const [parentphonenumber] = useState('03337654321');
  const [secanswer] = useState('Peshawar');

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans antialiased">
      <Head />

      {/* Main Container with Layout Offset Side Buffer */}
      <div className="w-full max-w-[1300px] mx-auto px-4 pl-4 md:pl-[290px] mt-8 space-y-6">
        
        {/* Module Title Section */}
        <div className="border-b-2 border-slate-200 pb-3">
          <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight">
            User Profile
          </h2>
          <div className="h-1 w-16 bg-[#384D6C] rounded-full mt-1" />
        </div>

        {/* Profile Card Summary Plate */}
        <div className="bg-white border-2 border-slate-900 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left w-full sm:w-auto">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-slate-900 bg-slate-100 flex items-center justify-center text-[#384D6C] shrink-0">
              <FaUserCircle className="w-20 h-20 opacity-80" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                {name}
              </h3>
              <p className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 inline-block">
                ID: {stdid}
              </p>
              <p className="text-xs text-[#0C7FDA] font-bold tracking-wider uppercase flex items-center justify-center sm:justify-start gap-1">
                <FaGraduationCap className="text-sm" /> Registered Student
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto">
            <Link to="/studentprofileedit" className="block w-full text-center">
              <button className="w-full sm:w-auto bg-[#5D7285] hover:bg-[#4a5c6d] text-white text-xs font-black uppercase tracking-wider px-5 py-3 rounded-xl border border-slate-950 transition-colors flex items-center justify-center gap-1.5 shadow-sm mx-auto">
                <FaEdit /> Edit User Details
              </button>
            </Link>
          </div>

        </div>

        {/* Information Static Cards Grid Presentation */}
        <div className="bg-white border-2 border-slate-900 rounded-2xl p-5 md:p-8 space-y-6 shadow-sm">
          
          {/* Group 1: Primary Logs */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-[#384D6C] bg-slate-100 px-3 py-1 rounded-md w-fit border border-slate-200">
              Primary Credentials
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-500 tracking-wide flex items-center gap-1">
                  <FaUser className="text-xs text-slate-400" /> Full Name
                </label>
                <div className="w-full bg-[#EFF2F4] text-[#667A8A] font-bold text-xs rounded-xl px-4 py-3 border border-slate-200 shadow-inner">
                  {name}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-500 tracking-wide flex items-center gap-1">
                  <FaUser className="text-xs text-slate-400" /> Username
                </label>
                <div className="w-full bg-[#EFF2F4] text-[#667A8A] font-bold text-xs rounded-xl px-4 py-3 border border-slate-200 shadow-inner">
                  {username}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-500 tracking-wide flex items-center gap-1">
                  <FaVenusMars className="text-xs text-slate-400" /> Gender Identity
                </label>
                <div className="w-full bg-[#EFF2F4] text-[#667A8A] font-bold text-xs rounded-xl px-4 py-3 border border-slate-200 shadow-inner">
                  {gender}
                </div>
              </div>
            </div>
          </div>

          {/* Group 2: Contact Info */}
          <div className="space-y-4 pt-4 border-t border-dashed border-slate-200">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-[#384D6C] bg-slate-100 px-3 py-1 rounded-md w-fit border border-slate-200">
              Communication Links
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-500 tracking-wide flex items-center gap-1">
                  <FaEnvelope className="text-xs text-slate-400" /> Email Address
                </label>
                <div className="w-full bg-[#EFF2F4] text-[#667A8A] font-bold text-xs rounded-xl px-4 py-3 border border-slate-200 shadow-inner">
                  {email}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-500 tracking-wide flex items-center gap-1">
                  <FaPhone className="text-xs text-slate-400" /> Phone Number
                </label>
                <div className="w-full bg-[#EFF2F4] text-[#667A8A] font-bold text-xs rounded-xl px-4 py-3 border border-slate-200 shadow-inner">
                  {contactnumber}
                </div>
              </div>
            </div>
          </div>

          {/* Group 3: Family Loops */}
          <div className="space-y-4 pt-4 border-t border-dashed border-slate-200">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-[#384D6C] bg-slate-100 px-3 py-1 rounded-md w-fit border border-slate-200">
              Emergency Guardian Info
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-500 tracking-wide flex items-center gap-1">
                  <FaUserShield className="text-xs text-slate-400" /> Parent / Guardian Name
                </label>
                <div className="w-full bg-[#EFF2F4] text-[#667A8A] font-bold text-xs rounded-xl px-4 py-3 border border-slate-200 shadow-inner">
                  {parentname}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-500 tracking-wide flex items-center gap-1">
                  <FaPhone className="text-xs text-slate-400" /> Parent Phone Number
                </label>
                <div className="w-full bg-[#EFF2F4] text-[#667A8A] font-bold text-xs rounded-xl px-4 py-3 border border-slate-200 shadow-inner">
                  {parentphonenumber}
                </div>
              </div>
            </div>
          </div>

          {/* Group 4: Security Token */}
          <div className="space-y-2 pt-4 border-t border-dashed border-slate-200">
            <label className="text-xs font-black uppercase text-slate-500 tracking-wide flex items-center gap-1">
              <FaCity className="text-xs text-slate-400" /> Security Question Parameter
            </label>
            <div className="text-[10px] text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg max-w-fit font-bold uppercase tracking-wide">
              Security Question: What city were you born in?
            </div>
            <div className="w-full bg-[#EFF2F4] text-[#667A8A] font-bold text-xs rounded-xl px-4 py-3 border border-slate-200 shadow-inner">
              {secanswer}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default StudentProfile;