import React, { useState } from "react";
import { User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";
import google from "../../assets/google-pic.svg";
import { loginUser } from "../../services/api"

const SignUpForm = ({ onSubmit, msg, navigate }) => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e, formData) => {
  e.preventDefault();
  setMsg("Creating account...");

  try {
    const data = await signupUser(formData); // API function call
    setMsg("Account Created Successfully! 🎉");
    console.log("Success:", data);
    
    // 2 second baad login page par bhej dein
    setTimeout(() => navigate("/login"), 2000);
  } catch (err) {
    setMsg(err.message); // Server wala error message yahan dikhayega
  }
};

  const inputStyle = "w-full h-11 pl-11 pr-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/40 focus:ring-2 focus:ring-blue-500/40 outline-none transition-all text-sm";
  const iconStyle = "absolute left-4 top-1/2 -translate-y-1/2 text-white/40";

  return (
    <form onSubmit={(e) => onSubmit(e, formData)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <User className={iconStyle} size={18} />
          <input name="first_name" type="text" placeholder="First Name" onChange={handleChange} required className={inputStyle} />
        </div>
        <div className="relative">
          <User className={iconStyle} size={18} />
          <input name="last_name" type="text" placeholder="Last Name" onChange={handleChange} required className={inputStyle} />
        </div>
      </div>

      <div className="relative">
        <Mail className={iconStyle} size={18} />
        <input name="email_address" type="email" placeholder="Email" onChange={handleChange} required className={inputStyle} />
      </div>

      <div className="relative">
        <Phone className={iconStyle} size={18} />
        <input name="mobile_no" type="tel" placeholder="Phone" onChange={handleChange} required className={inputStyle} />
      </div>

      <div className="relative">
        <Lock className={iconStyle} size={18} />
        <input name="password" type={showPassword ? "text" : "password"} placeholder="Password" onChange={handleChange} required className={inputStyle} />
        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>

      <button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black transition-all">
        CREATE ACCOUNT
      </button>

      {msg && <p className="text-center text-sm font-bold text-blue-400">{msg}</p>}

      <button type="button" className="w-full h-12 bg-white text-slate-950 rounded-2xl font-bold flex items-center justify-center gap-3">
        <img src={google} alt="google" className="w-5 h-5" />
        <span>Google</span>
      </button>
    </form>
  );
};

export default SignUpForm;