import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import loginimg from './photos/studentlogin.png';
import logofull from '../../../../src/assets/step2 scientist logo.jpeg';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';

function StudentLogin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '', 
    password: ''
  });

  const loginStudent = async (e) => {
    e.preventDefault();
    
    if (!data.email || !data.password) {
      toast.error("Please enter your email and password.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/v1/studentlogin', {
        email: data.email,
        password: data.password
      });
      
      // Success toast hata diya hai, ab sirf dashboard par le jayega
      if (response.data) {
        navigate('/studentdashboard');
      }
    } catch (error) {
      // Sirf error show hogi
      toast.error(error.response?.data?.message || "Login failed. Check your email/password.");
    }
  };

  return (
    <main className="w-full min-h-screen bg-slate-50 flex items-stretch font-sans antialiased">
      {/* Left Panel */}
      <div className="hidden lg:block lg:w-[45%] xl:w-[50%] bg-slate-900 relative h-screen sticky top-0">
        <img src={loginimg} alt="Banner" className="w-full h-full object-cover opacity-85" />
      </div>

      {/* Right Scrollable Panel */}
      <div className="w-full lg:w-[55%] xl:w-[50%] flex flex-col justify-center items-center px-4 py-12 md:p-16">
        <div className="w-full max-w-[480px] space-y-8">
          
          {/* Logo and Text Section */}
          <div className="text-center space-y-3 flex flex-col items-center">
            <img src={logofull} alt="Step 2 Scientist Logo" className="h-20 w-auto object-contain" />
            <div className="space-y-1">
              <h2 className="text-2xl font-black tracking-tight text-slate-900 uppercase">Student Portal</h2>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Empowering the next generation of scientists.
              </p>
            </div>
          </div>

          <form onSubmit={loginStudent} className="space-y-4">
            <div className="bg-white border-2 border-slate-900 rounded-2xl p-5 space-y-4 shadow-sm">
              <div className="space-y-1">
                <label className="text-[11px] font-black uppercase text-slate-700 flex items-center gap-1.5">
                  <FaEnvelope className="text-slate-400 text-xs" /> Email Address
                </label>
                <input 
                  type="email" 
                  className="w-full bg-slate-50 border-2 rounded-xl px-4 py-3" 
                  value={data.email} 
                  onChange={(e) => setData({...data, email: e.target.value})} 
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-black uppercase text-slate-700 flex items-center gap-1.5">
                  <FaLock className="text-slate-400 text-xs" /> Password
                </label>
                <input 
                  type="password" 
                  className="w-full bg-slate-50 border-2 rounded-xl px-4 py-3" 
                  value={data.password} 
                  onChange={(e) => setData({...data, password: e.target.value})} 
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-[#5D7285] hover:bg-slate-800 text-white font-black uppercase py-4 rounded-xl flex items-center justify-center gap-2">
              <FaSignInAlt /> Login
            </button>

            <div className="text-center">
              <Link to="/register" className="text-xs font-bold text-slate-500 hover:text-slate-900 uppercase underline">
                New Student? Register here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default StudentLogin;