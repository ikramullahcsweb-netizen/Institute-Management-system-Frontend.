import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import loginimg from './photos/managerlogin.png';

function AdminLogin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  const loginAdmin = async (e) => {
    e.preventDefault();
    const { username, password } = data;

    // Frontend Edge Authentication Logic
    if (!username || !password) {
      toast.error('Please fulfill all credentials parameters.');
      return;
    }

    try {
      // Temporary Hardcoded Secure Validation Matrix (Replace with LocalStorage check if desired)
      if (username === 'admin' && password === 'admin123') {
        toast.success('Authentication handshake clear! Welcome back.');
        setData({ username: '', password: '' });
        navigate('/adminprofile');
      } else {
        toast.error('Invalid administrative credentials. Identity verification failure.');
      }
    } catch (error) {
      console.error("Local authentication stream exception:", error);
      toast.error('An error occurred during local credential validation.');
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans flex items-center justify-center p-0 md:p-6">
      {/* Core Split-Screen Gateway Frame */}
      <div className="w-full max-w-[1100px] min-h-[650px] bg-white md:rounded-[24px] shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-gray-100">
        
        {/* Left Aspect: High-Fidelity Branding Vector Visual */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-[#063a67] to-[#12538c] p-12 relative text-white text-center">
          <div className="absolute inset-0 bg-blue-950/10 backdrop-blur-[2px]"></div>
          
          <div className="relative z-10 space-y-6 max-w-[400px]">
            <img 
              src={loginimg} 
              alt="Security Infrastructure Gateway" 
              className="w-full max-w-[280px] mx-auto drop-shadow-2xl animate-pulse [animation-duration:8s]" 
            />
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight m-0">Step 2 Scientist Academy</h2>
              <p className="text-blue-200/80 text-xs font-semibold uppercase tracking-widest mt-2">Central Management Control Node</p>
            </div>
          </div>
        </div>

        {/* Right Aspect: Core Interactive Passkey UI Block */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16 bg-white relative">
          
          {/* Header Layout Component */}
          <div className="mb-8 text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-[11px] font-bold text-[#063a67] tracking-wider uppercase mb-3">
              Security Clearance Portal
            </div>
            <h1 className="text-3xl font-black text-[#063a67] m-0 tracking-tight">Admin Gateway</h1>
            <p className="text-sm text-gray-400 font-medium mt-1">Provide cryptography credentials to sign into infrastructure dashboard</p>
          </div>

          {/* Form Action Controls */}
          <form onSubmit={loginAdmin} className="space-y-5">
            
            {/* Input Module: User Identity Signature */}
            <div className="space-y-1.5">
              <label htmlFor="username" className="block text-[12px] font-extrabold text-gray-700 uppercase tracking-wider">
                Username Identifier
              </label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                placeholder="Enter workspace handle" 
                className="w-full p-3.5 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50 text-[15px]"
                value={data.username} 
                onChange={(e) => setData({...data, username: e.target.value})}
                required
              />
            </div>

            {/* Input Module: Cipher Passkey Matrix */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-[12px] font-extrabold text-gray-700 uppercase tracking-wider">
                  Access Password
                </label>
                <Link 
                  to="/adminforgetpassword" 
                  className="text-[12px] font-bold text-[#063a67] hover:text-[#da4a0c] no-underline transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="••••••••" 
                className="w-full p-3.5 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50 text-[15px]"
                value={data.password} 
                onChange={(e) => setData({...data, password: e.target.value})}
                required
              />
            </div>

            {/* Operational Sign-In Execution Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full text-white cursor-pointer bg-[#063a67] text-center rounded-xl py-4 outline-none transition-all duration-200 text-[16px] font-extrabold hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] hover:scale-[1.01] shadow-lg border-none"
              >
                Sign In to System Terminal
              </button>
            </div>

          </form>

          {/* Institutional Integrity Stamp Footer */}
          <div className="mt-12 text-center md:text-left border-t border-gray-100 pt-5">
            <p className="text-[11px] text-gray-400 font-semibold m-0 uppercase tracking-widest">
              Protected by Step 2 Scientist Academy Security Architecture
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}

export default AdminLogin;