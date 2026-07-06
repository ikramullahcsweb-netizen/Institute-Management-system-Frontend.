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

    toast.success("Logged in successfully!");
    navigate('/teacherprofile');
  };

  return (
    <main className="w-full h-screen flex font-sans overflow-hidden bg-slate-50">
      
      {/* LEFT PANEL: Sticky Image with Text Overlay */}
      <div className="hidden md:block w-1/2 h-screen sticky top-0 bg-[#13293d] relative">
        <img 
          src={loginimg} 
          alt='Teacher Login' 
          className="w-full h-full object-cover" 
        />
        
        <div className="absolute inset-0 bg-black/30 z-10" />

        <div className="absolute bottom-12 left-12 z-20 text-white">
          <p className="text-xs font-bold tracking-widest uppercase text-[#10a1b6] mb-2">
            Academic Operations Center
          </p>
          <h2 className="text-3xl font-black uppercase leading-tight max-w-[400px]">
            Royal Academy Teacher Portal
          </h2>
        </div>
      </div>

      {/* RIGHT PANEL: Scrollable Form Section */}
      <div className="flex-1 h-screen overflow-y-auto flex items-center justify-center p-6">
        
        <form 
          onSubmit={loginTeacher} 
          className="w-full max-w-[400px] bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <img src={logofull} alt="Logo" className="h-16 w-auto object-contain mb-6" />
            <h1 className="text-xl font-bold text-slate-800">Welcome Back</h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">
              Sign in to access your dashboard
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-5 w-full">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Username</label>
              <input 
                type="text" 
                placeholder="Enter your username" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#10a1b6] transition-all" 
                value={data.username} 
                onChange={(e) => setData({...data, username: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Password</label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#10a1b6] transition-all" 
                value={data.password} 
                onChange={(e) => setData({...data, password: e.target.value})}
                required
              />
            </div>

            <div className="flex justify-end">
              <Link 
                to='/teacherforgetpassword' 
                className="text-[10px] text-slate-500 hover:text-[#10a1b6] font-bold uppercase tracking-widest underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button 
              type="submit" 
              className="w-full bg-slate-800 hover:bg-[#10a1b6] text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all shadow-md active:scale-[0.98] mt-2"
            >
              Login
            </button>

            <div className="text-center pt-2">
              <Link 
                to='/adminmanagerlogin' 
                className="text-[10px] text-slate-400 hover:text-slate-600 font-bold uppercase tracking-widest transition-all"
              >
                Manager/Admin Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default TeacherLogin;