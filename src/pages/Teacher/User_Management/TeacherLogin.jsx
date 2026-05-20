import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import loginimg from './photos/teacherlogin.png';
import logofull from './photos/logofull.png';

function TeacherLogin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  const loginTeacher = (e) => {
    e.preventDefault();
    const { username, password } = data;

    if (!username || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    // Pure static dashboard validation interface simulation
    toast.success("Logged in successfully! (Simulated)");
    navigate('/teacherprofile');
  };

  return (
    <main className="w-full min-h-screen bg-slate-50 flex flex-col md:flex-row">
      
      {/* Left side panel: Interface Mockup Design Graphics Section */}
      <div className="hidden md:flex md:w-1/2 bg-slate-100 items-center justify-center relative overflow-hidden pl-4 md:pl-[60px]">
        <img 
          src={loginimg} 
          alt='loginimage' 
          className="w-full h-full object-cover max-h-screen" 
        />
      </div>

      {/* Right side panel: Credentials Entry Input Box Container Wrapper */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 sm:px-12 lg:px-20 py-12 pl-4 md:pl-[60px] transition-all">
        <div className="w-full max-w-[460px] space-y-8 text-center">
          
          {/* Institution Header Logo Media Element */}
          <div className="flex justify-center">
            <img src={logofull} alt='loginimage' className="h-16 object-contain" />
          </div>

          {/* Step 2 Subordinate Context Heading Info Box */}
          <div className="bg-[#C9E8EA] border border-slate-200 rounded-[20px] p-5 text-center shadow-xs">
            <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">
              Welcome to Royal Academy
            </h2>
            <p className="text-xs text-slate-600 font-black mt-1 uppercase tracking-wider">
              Teacher Login Portal
            </p>
          </div>

          {/* Interactive Core Input Form Panel */}
          <form onSubmit={loginTeacher} className="space-y-4 text-left">
            
            {/* Identity Username Input Block */}
            <div className="bg-slate-100/80 border border-slate-200 rounded-xl p-4 flex flex-col gap-1">
              <label htmlFor="username" className="text-[11px] font-black text-[#667A8A] uppercase tracking-wider">
                Username
              </label>
              <input 
                type="text" 
                id="username" 
                required
                placeholder="Enter your username" 
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#483EA8] transition-colors" 
                value={data.username} 
                onChange={(e) => setData({...data, username: e.target.value})}
              />
            </div>     

            {/* Account Protected Password Entry Row */}
            <div className="bg-slate-100/80 border border-slate-200 rounded-xl p-4 flex flex-col gap-1">
              <label htmlFor="password" className="text-[11px] font-black text-[#667A8A] uppercase tracking-wider">
                Password
              </label>
              <input 
                type="password" 
                id="password" 
                required
                placeholder="Enter your password" 
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#483EA8] transition-colors" 
                value={data.password} 
                onChange={(e) => setData({...data, password: e.target.value})}
              />
            </div>           

            {/* Helper Reference Routing Links Subpanel */}
            <div className="flex justify-end px-1">
              <Link 
                to='/teacherforgetpassword' 
                className="text-xs text-slate-500 hover:text-[#483EA8] font-bold transition-colors underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Form System Dispatch Submission Controllers */}
            <div className="pt-4 space-y-4">
              <button 
                type="submit"  
                className="w-full bg-[#483EA8] hover:bg-[#392f8a] text-white text-xs font-black py-3.5 px-4 rounded-xl uppercase tracking-wider transition-colors shadow-sm text-center block"
              >
                Login
              </button>

              <div className="text-center pt-2">
                <Link 
                  to='/adminmanagerlogin' 
                  className="inline-block bg-slate-200 hover:bg-slate-300 text-slate-700 text-[11px] font-black py-2.5 px-5 rounded-lg uppercase tracking-widest transition-colors"
                >
                  Manager/Admin Login
                </Link>
              </div>
            </div>

          </form>
        </div>
      </div>

    </main>
  );
}

export default TeacherLogin;