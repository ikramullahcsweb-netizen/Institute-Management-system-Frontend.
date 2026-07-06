import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import loginimg from './photos/studentlogin.png';
import logofull from '../../../assets/step2 scientist logo.jpeg';
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaIdCard, FaLock } from 'react-icons/fa';

function StudentRegister() {
  const navigate = useNavigate();

  // Generators for ID
  function generateStudentId() {
    const year = new Date().getFullYear().toString().slice(-2);
    return `SID${year}${Math.floor(1000 + Math.random() * 9000)}`;
  }

  function generateWalletId() { 
    return `WID${Math.floor(1000 + Math.random() * 9000)}`;
  }

  const [data, setData] = useState({
    name: '',
    email: '',
    contactnumber: '',
    grade: '',
    username: '',
    stdid: generateStudentId(),
    password: '',
    repassword: '',
    walletid: generateWalletId()
  });

  // API Submission Handler
  const registerStudent = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!data.name || !data.email || !data.username || !data.password) {
      toast.error('Please fill out all mandatory identity fields.');
      return;
    }

    if (data.password !== data.repassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      // API Call
      const response = await axios.post('http://localhost:3000/api/v1/studentregister', data);
      
      // Success Response
      toast.success(response.data.message || "Registration Successful!");
      
      // Navigate to login
      navigate('/login');
      
    } catch (error) {
      // Error Handling
      const errorMessage = error.response?.data?.message || "Something went wrong! Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <main className="w-full min-h-screen bg-slate-50 flex items-stretch font-sans antialiased">
      
      {/* Visual Creative Panel Slot - Sticky and Fixed */}
      <div className="hidden lg:block lg:w-[45%] xl:w-[50%] bg-slate-900 relative h-screen sticky top-0">
        <img 
          src={loginimg} 
          alt="Royal Academy Architecture Banner" 
          className="w-full h-full object-cover opacity-85 absolute inset-0 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent" />
        
        {/* Subtle Branding Watermark Overlap */}
        <div className="absolute bottom-12 left-12 right-12 text-white space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-[#0C7FDA] bg-white/10 px-3 py-1 rounded-md backdrop-blur-xs">
            Student Portal Matrix
          </span>
          <h1 className="text-3xl font-black uppercase tracking-tight leading-none text-slate-100">
            Shape Your Academic Footprint
          </h1>
          <p className="text-xs text-slate-300 font-medium">
            Join a system configured with utility dashboard architectures and global tracking.
          </p>
        </div>
      </div>

      {/* Input Action Form Presentation Deck Container - Scrollable */}
      <div className="w-full lg:w-[55%] xl:w-[50%] flex flex-col justify-center items-center px-4 py-12 md:p-16 overflow-y-auto max-h-screen bg-white">
        <div className="w-full max-w-[480px] space-y-8">
          
          {/* Header Panel Branding Nodes */}
          <div className="text-center space-y-3 flex flex-col items-center mt-30 md:mt-38">
            <div className="max-w-[200px] hover:scale-105 transition-transform duration-300">
              <img src={logofull} alt="Royal Academy Main Shield Seal" className="w-40 h-30 object-contain" />
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl font-black tracking-tight text-slate-900 uppercase">
                Create Account
              </h2>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Welcome to step 2 scientist
              </p>
            </div>
          </div>

          {/* Core Master Registry Node Handle */}
          <form onSubmit={registerStudent} className="space-y-4">
            
            <div className="bg-white border-2 border-slate-900 rounded-2xl p-5 md:p-6 space-y-4 shadow-sm">
              
              <div className="space-y-1">
                <label className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                  <FaUser className="text-slate-400 text-xs" /> Full Name
                </label>
                <input 
                  type="text" 
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3 focus:outline-none transition-colors shadow-xs" 
                  value={data.name} 
                  onChange={(e) => setData({...data, name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                    <FaEnvelope className="text-slate-400 text-xs" /> Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3 focus:outline-none transition-colors shadow-xs" 
                    value={data.email} 
                    onChange={(e) => setData({...data, email: e.target.value})}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                    <FaPhone className="text-slate-400 text-xs" /> Contact Number
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3 focus:outline-none transition-colors shadow-xs" 
                    value={data.contactnumber} 
                    onChange={(e) => setData({...data, contactnumber: e.target.value})} 
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                  <FaGraduationCap className="text-slate-400 text-sm" /> Academic Grade Level
                </label>
                <select 
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3 focus:outline-none transition-colors shadow-xs appearance-none cursor-pointer" 
                  value={data.grade} 
                  onChange={(e) => setData({...data, grade: e.target.value})}
                >
                  <option value="">Select Enrolled Grade</option>
                  <option value="6">database</option>
                  <option value="7">web development 7</option>
                  <option value="8">data science</option>
                  <option value="9">meachine learning</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-dashed border-slate-200">
                <div className="space-y-1">
                  <label className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                    <FaUser className="text-slate-400 text-xs" /> Account Username
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3 focus:outline-none transition-colors shadow-xs" 
                    value={data.username} 
                    onChange={(e) => setData({...data, username: e.target.value})}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                    <FaIdCard className="text-slate-400 text-xs" /> System Auto-ID
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-100 border-2 border-slate-200 text-[#0C7FDA] font-mono font-black text-xs rounded-xl px-4 py-3 focus:outline-none cursor-not-allowed select-none shadow-inner" 
                    value={data.stdid} 
                    readOnly 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-dashed border-slate-200">
                <div className="space-y-1">
                  <label className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                    <FaLock className="text-slate-400 text-xs" /> Password
                  </label>
                  <input 
                    type="password" 
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3 focus:outline-none transition-colors shadow-xs" 
                    value={data.password} 
                    onChange={(e) => setData({...data, password: e.target.value})}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                    <FaLock className="text-slate-400 text-xs" /> Re-Enter Security
                  </label>
                  <input 
                    type="password" 
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3 focus:outline-none transition-colors shadow-xs" 
                    value={data.repassword} 
                    onChange={(e) => setData({...data, repassword: e.target.value})}
                  />
                </div>
              </div>

            </div>

            <div className="space-y-4 pt-2">
              <button 
                type="submit" 
                className="w-full bg-[#5D7285] hover:bg-[#4a5c6d] text-white text-xs font-black uppercase tracking-widest py-4 rounded-xl border-2 border-slate-950 transition-colors shadow-xs active:scale-[0.99] transform"
              >
                Sign Up Enrolment Node
              </button>
            </div>
            <div className="flex gap-2 justify-center text-center text-sm text-gray-600 mt-1">
            <p>Already have an account?</p>
            <button
              type="button"
              className="text-[#1688B5] hover:underline cursor-pointer"
              onClick={() => navigate("/studentlogin")}
            >
              Sign in
            </button>
          </div>

          </form>
        </div>
      </div>
    </main>
  );
}

export default StudentRegister;