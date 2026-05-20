import React, { useState } from 'react';
import userpng from './photos/User.png';
import { useNavigate, Link } from 'react-router-dom';
import Head from '../Header/Header';
import Swal from 'sweetalert2';
import { FaUserCheck, FaTimesCircle, FaUserCircle, FaEnvelope, FaPhoneAlt, FaBookOpen, FaQuestionCircle } from 'react-icons/fa';

function TeacherProfileEdit() {
  const navigate = useNavigate();    
  
  // Front-end state fields tracking dynamic form values (Pre-filled with mockup data)
  const [name, setName] = useState("Prof. Asif Khan");
  const [teid] = useState("TCH-2026-88");
  const [username, setUsername] = useState("asif_khan99");
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState("asif.khan@royalacademy.edu");
  const [contactnumber, setContactnumber] = useState("03001234567");
  const [subject, setSubject] = useState("Mathematics");
  const [secanswer, setSecAnswer] = useState("Peshawar");

  const updateStudent = (e) => {
    e.preventDefault();
    
    // Front-end local reactive array simulation wrapper
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Teacher details updated successfully! (Simulated)',
      confirmButtonColor: '#483EA8',
      confirmButtonText: 'OK'
    }).then(() => {
      navigate('/teacherprofile');
    });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <Head />

      {/* Main Form Dashboard Section with Fixed Sidebar Clearance Padding */}
      <div className="w-full max-w-[1100px] mx-auto px-4 pl-4 md:pl-[290px] pr-4 mt-8 transition-all">
        
        {/* Step 2 Color Theme Secondary Header Panel */}
        <div className="w-full bg-[#C9E8EA] border border-slate-200 rounded-[20px] p-5 mb-6 flex justify-between items-center shadow-xs">
          <div>
            <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
              <FaUserCircle className="text-slate-700" />
              <span>Edit User Profile</span>
            </h1>
            <p className="text-[11px] text-slate-600 font-bold mt-0.5 uppercase tracking-wide">
              Modify your personal credentials and contact settings information below.
            </p>
          </div>
        </div>

        {/* Core Form Input Fields Deck Container Wrapper */}
        <div className="bg-white border-2 border-slate-200 rounded-[22px] p-6 sm:p-8 shadow-sm">
          
          {/* Identity Info Static Card Area row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left bg-slate-50 border border-slate-200/80 rounded-2xl p-5 mb-8">
            <div className="w-20 h-20 rounded-full border-2 border-[#483EA8] p-1 bg-white">
              <img src={userpng} alt='Logo Identity Profile' className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="space-y-0.5">
              <h2 className="text-lg font-black text-slate-800">{name || "Instructor Account"}</h2>
              <p className="text-xs font-bold text-slate-400">ID: {teid}</p>
              <span className="inline-block mt-1 bg-purple-50 text-[#483EA8] text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded">
                Editing Status Mode
              </span>
            </div>
          </div>

          {/* Form Content Block Controls Grid */}
          <form onSubmit={updateStudent} className="space-y-6">
            
            {/* Row 1: Structural Info Grid (Full Name, Username, Gender Selection) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-[11px] font-black text-[#667A8A] uppercase tracking-wider">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold outline-none focus:border-[#483EA8] focus:bg-white transition-all text-slate-700" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="username" className="text-[11px] font-black text-[#667A8A] uppercase tracking-wider">
                  Username
                </label>
                <input 
                  type="text" 
                  id="username" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#483EA8] focus:bg-white transition-all text-slate-700" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-black text-[#667A8A] uppercase tracking-wider">
                  Gender
                </label>
                <div className="flex items-center gap-6 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 h-[42px]">
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-700 cursor-pointer">
                    <input 
                      type="radio" 
                      name="gender" 
                      value="Male" 
                      className="accent-[#483EA8]"
                      checked={gender === 'Male'} 
                      onChange={(e) => setGender(e.target.value)} 
                    />
                    <span>Male</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-700 cursor-pointer">
                    <input 
                      type="radio" 
                      name="gender" 
                      value="Female" 
                      className="accent-[#483EA8]"
                      checked={gender === 'Female'} 
                      onChange={(e) => setGender(e.target.value)} 
                    />
                    <span>Female</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-2"></div>

            {/* Row 2: Communication Data Fields (Email, Phone) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[11px] font-black text-[#667A8A] uppercase tracking-wider flex items-center gap-1.5">
                  <FaEnvelope className="text-slate-400" />
                  <span>Email Address</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#483EA8] focus:bg-white transition-all text-slate-700" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="cnumber" className="text-[11px] font-black text-[#667A8A] uppercase tracking-wider flex items-center gap-1.5">
                  <FaPhoneAlt className="text-slate-400" />
                  <span>Phone Number</span>
                </label>
                <input 
                  type="number" 
                  id="cnumber" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#483EA8] focus:bg-white transition-all text-slate-700" 
                  value={contactnumber} 
                  onChange={(e) => setContactnumber(e.target.value)}
                />
              </div>
            </div>

            <div className="border-t border-slate-100 pt-2"></div>

            {/* Row 3: Academic Subject Department Parameter */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-[11px] font-black text-[#667A8A] uppercase tracking-wider flex items-center gap-1.5">
                <FaBookOpen className="text-slate-400" />
                <span>Subject Department</span>
              </label>
              <input 
                type="text" 
                id="subject" 
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#483EA8] focus:bg-white transition-all text-slate-700 max-w-md" 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="border-t border-slate-100 pt-2"></div>

            {/* Row 4: Security Matrix Key Box Selection Input Field */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="qans" className="text-[11px] font-black text-[#667A8A] uppercase tracking-wider flex items-center gap-1.5">
                <FaQuestionCircle className="text-slate-400" />
                <span>Security Question - What city were you born in?</span>
              </label>
              <input 
                type="text" 
                id="qans" 
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#483EA8] focus:bg-white transition-all text-slate-700 max-w-md" 
                value={secanswer} 
                onChange={(e) => setSecAnswer(e.target.value)}
              />
            </div>

            <div className="border-t border-slate-100 pt-4"></div>

            {/* Form System Submission & Reset Routing Buttons Layout panel */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button 
                type="submit"
                className="bg-[#483EA8] hover:bg-[#392f8a] text-white text-xs font-black py-3 px-6 rounded-xl flex items-center gap-2 uppercase tracking-wider transition-colors shadow-xs"
              >
                <FaUserCheck className="text-[14px]" />
                <span>Save Changes</span>
              </button>

              <Link to='/teacherprofile'>
                <button 
                  type="button"
                  className="bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-black py-3 px-6 rounded-xl flex items-center gap-2 uppercase tracking-wider transition-colors"
                >
                  <FaTimesCircle className="text-[14px]" />
                  <span>Cancel</span>
                </button>
              </Link>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}

export default TeacherProfileEdit;