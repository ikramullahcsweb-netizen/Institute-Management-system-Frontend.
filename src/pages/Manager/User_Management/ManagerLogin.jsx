
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// Assets
import logo from '../../../../src/assets/crop logo.jfif';
import loginimg from "./photos/managerlogin.png";
import logofull from "../../../assets/step2 scientist logo.jpeg";

function ManagerLogin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ 
    email_address: "", 
    password: "" 
  });

  const loginManager = async (e) => {
    e.preventDefault();

    if (!data.email_address || !data.password) {
      toast.error("Please fill in all mandatory credentials.");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/api/auth/managerlogin", {
        email_address: data.email_address,
        password: data.password,
      }, {
        withCredentials: true
      });

      if (res.data) {
        toast.success("Login Successful!");
        navigate("/managerdashboard");
      }
    } catch (error) {
      console.error("Login Error:", error);
      const errMsg = error.response?.data?.message || "Login failed. Check server connection.";
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full h-screen flex overflow-hidden font-sans bg-slate-50">
      
      {/* LEFT PANEL */}
      <div className="hidden md:block w-1/2 h-screen sticky top-0 bg-[#13293d] relative">
        <img src={loginimg} alt="Manager" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute bottom-12 left-12 z-20 text-white">
          <p className="text-xs font-bold tracking-widest uppercase text-[#10a1b6] mb-2">Academic Operations Center</p>
          <h2 className="text-3xl font-black uppercase leading-tight">Step 2 Scientist Administrative Gateway</h2>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 h-screen overflow-y-auto flex items-center justify-center p-6">
        
        {/* Form element mein onSubmit={loginManager} lagaya hai */}
        <form 
          onSubmit={loginManager} 
          className="w-full max-w-[400px] bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex gap-2 mb-6">
              <img src={logofull} alt="Logo" className="h-16 w-auto object-contain" />
              <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800">Welcome Back, Scientist</h1>
            <p className="text-[10px] text-[#10a1b6] font-bold uppercase tracking-widest mt-2">Manager Session Portal</p>
          </div>

          {/* Fields */}
          <div className="space-y-5 w-full">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Operator Email</label>
              <input 
                type="email" 
                placeholder="Enter manager email" 
                autoComplete="email"
                value={data.email_address} 
                onChange={(e) => setData({ ...data, email_address: e.target.value })} 
                required 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#10a1b6] transition-all" 
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5 ml-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Access Key</label>
                <a href="/managerforgetpassword" className="text-[10px] font-bold text-[#10a1b6] hover:underline">Forgot?</a>
              </div>
              <input 
                type="password" 
                placeholder="Enter password" 
                autoComplete="current-password"
                value={data.password} 
                onChange={(e) => setData({ ...data, password: e.target.value })} 
                required 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#10a1b6] transition-all" 
              />
            </div>

            <button 
              type="submit" 
              disabled={loading} 
              className="w-full bg-slate-800 hover:bg-[#10a1b6] text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all shadow-md active:scale-[0.98] disabled:opacity-50 mt-2"
            >
              {loading ? "Authenticating..." : "Authenticate & Access Dashboard"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default ManagerLogin;