import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import loginimg from './photos/studentlogin.png';
import logofull from './photos/logofull.png';
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaIdCard, FaLock } from 'react-icons/fa';

function StudentRegister() {
  const navigate = useNavigate();

  // Pure Static Identity Vector Generation Tools
  function getCurrentYear() {
    return new Date().getFullYear().toString().slice(-2);
  }

  function generateRandomNumber() {
    return Math.floor(1000 + Math.random() * 9000);
  }

  function generateStudentId() {
    const year = getCurrentYear();
    const randomNumber = generateRandomNumber();
    return `SID${year}${randomNumber}`;
  }

  function generateWalletId() {   
    const randomNumber = generateRandomNumber();
    return `WID${randomNumber}`;
  }

  // Unified Functional Component Forms Memory Hook
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

  // Sandboxed Registration Simulation Interceptor
  const registerStudent = (e) => {
    e.preventDefault();
    
    // Validate empty input fields
    if (!data.name || !data.email || !data.username || !data.password) {
      toast.error('Please fill out all mandatory identity fields.');
      return;
    }

    if (data.password !== data.repassword) {
      toast.error('Passwords do not match');
      return;
    }

    toast.success("Registration Cached Successfully (Sandbox State)!");
    
    // Reset framework memory stream array
    setData({
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
    
    navigate('/login');
  };

  return (
    <main className="w-full min-h-screen bg-slate-50 flex items-stretch font-sans antialiased">
      
      {/* Visual Creative Panel Slot - Hidden on smaller breakpoints */}
      <div className="hidden lg:block lg:w-[45%] xl:w-[50%] bg-slate-900 relative overflow-hidden">
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

      {/* Input Action Form Presentation Deck Container */}
      <div className="w-full lg:w-[55%] xl:w-[50%] flex flex-col justify-center items-center px-4 py-12 md:p-16 overflow-y-auto">
        <div className="w-full max-w-[480px] space-y-8">
          
          {/* Header Panel Branding Nodes */}
          <div className="text-center space-y-3 flex flex-col items-center">
            <div className="max-w-[200px] hover:scale-105 transition-transform duration-300">
              <img src={logofull} alt="Royal Academy Main Shield Seal" className="w-full h-auto object-contain" />
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
            
            {/* Input Element Field Component Grid Array Blocks */}
            <div className="bg-white border-2 border-slate-900 rounded-2xl p-5 md:p-6 space-y-4 shadow-sm">
              
              {/* Field: Full Name */}
              <div className="space-y-1">
                <label htmlFor="name" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                  <FaUser className="text-slate-400 text-xs" /> Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter your full name" 
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3 focus:outline-none transition-colors shadow-xs placeholder:text-slate-400 placeholder:font-medium" 
                  value={data.name} 
                  onChange={(e) => setData({...data, name: e.target.value})}
                />
              </div>

              {/* Field Group Array: Email and Mobile Connectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="email" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                    <FaEnvelope className="text-slate-400 text-xs" /> Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="name@academy.edu" 
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3 focus:outline-none transition-colors shadow-xs placeholder:text-slate-400 placeholder:font-medium" 
                    value={data.email} 
                    onChange={(e) => setData({...data, email: e.target.value})}
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contactnumber" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                    <FaPhone className="text-slate-400 text-xs" /> Contact Number
                  </label>
                  <input 
                    type="text" 
                    id="contactnumber" 
                    placeholder="03001234567" 
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3 focus:outline-none transition-colors shadow-xs placeholder:text-slate-400 placeholder:font-medium" 
                    value={data.contactnumber} 
                    onChange={(e) => setData({...data, contactnumber: e.target.value})} 
                  />
                </div>
              </div>

              {/* Field: Academic Grade Level Segment Custom Options */}
              <div className="space-y-1">
                <label htmlFor="grade" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                  <FaGraduationCap className="text-slate-400 text-sm" /> Academic Grade Level
                </label>
                <div className="relative">
                  <select 
                    id="grade" 
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3 focus:outline-none transition-colors shadow-xs appearance-none cursor-pointer" 
                    value={data.grade} 
                    onChange={(e) => setData({...data, grade: e.target.value})}
                  >
                    <option value="" className="font-medium text-slate-400">Select Enrolled Grade</option>
                    <option value="6"> (Middle Block)</option>
                    <option value="7">Grade 7 (Middle Block)</option>
                    <option value="8">Grade 8 (Middle Block)</option>
                    <option value="9">Grade 9 (Senior Metric)</option>
                    <option value="10">Grade 10 (Senior Metric)</option>
                    <option value="11">Grade 11 (Higher Secondary)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              {/* Field Group Array: Account Handle and Generated Token Node */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-dashed border-slate-200">
                <div className="space-y-1">
                  <label htmlFor="username" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                    <FaUser className="text-slate-400 text-xs" /> Account Username
                  </label>
                  <input 
                    type="text" 
                    id="username" 
                    placeholder="e.g. ikram_dev" 
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3 focus:outline-none transition-colors shadow-xs placeholder:text-slate-400 placeholder:font-medium" 
                    value={data.username} 
                    onChange={(e) => setData({...data, username: e.target.value})}
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="stdid" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                    <FaIdCard className="text-slate-400 text-xs" /> System Auto-ID
                  </label>
                  <input 
                    type="text" 
                    id="stdid" 
                    className="w-full bg-slate-100 border-2 border-slate-200 text-[#0C7FDA] font-mono font-black text-xs rounded-xl px-4 py-3 focus:outline-none cursor-not-allowed select-none shadow-inner" 
                    value={data.stdid} 
                    readOnly 
                  />
                </div>
              </div>

              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-dashed border-slate-200">
                <div className="space-y-1">
                  <label htmlFor="password" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                    <FaLock className="text-slate-400 text-xs" /> Password
                  </label>
                  <input 
                    type="password" 
                    id="password" 
                    placeholder="••••••••" 
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3 focus:outline-none transition-colors shadow-xs placeholder:text-slate-400" 
                    value={data.password} 
                    onChange={(e) => setData({...data, password: e.target.value})}
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="repassword" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                    <FaLock className="text-slate-400 text-xs" /> Re-Enter Security
                  </label>
                  <input 
                    type="password" 
                    id="repassword" 
                    placeholder="••••••••" 
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3 focus:outline-none transition-colors shadow-xs placeholder:text-slate-400" 
                    value={data.repassword} 
                    onChange={(e) => setData({...data, repassword: e.target.value})}
                  />
                </div>
              </div>

            </div>

            {/* Form Master Submit Processing Actions Handles */}
            <div className="space-y-4 pt-2">
              <button 
                type="submit" 
                className="w-full bg-[#5D7285] hover:bg-[#4a5c6d] text-white text-xs font-black uppercase tracking-widest py-4 rounded-xl border-2 border-slate-950 transition-colors shadow-xs active:scale-[0.99] transform"
              >
                Sign Up Enrolment Node
              </button>
              
              <div className="text-center">
                <a href="/login" className="inline-block group text-slate-600 hover:text-slate-900 transition-colors">
                  <p className="text-xs font-bold uppercase tracking-wide">
                    Already have an Account? <span className="text-[#0C7FDA] underline group-hover:text-[#0b6cbd] font-black">Log IN</span>
                  </p>
                </a>
              </div>
            </div>

          </form>

        </div>
      </div>

    </main>
  );
}

export default StudentRegister;