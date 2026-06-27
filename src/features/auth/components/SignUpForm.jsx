import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";
import google from "../../../assets/google-pic.svg";
import { signupUser } from "../services/auth.service"
 
const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    mobile_no: "",
    password: ""
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("Creating account...");
    setIsError(false);

    try {
      await signupUser(formData);
      setMsg("Account Created Successfully! Redirecting...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setIsError(true);
      setMsg(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = "w-full h-11 pl-11 pr-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/40 focus:ring-2 focus:ring-blue-500/40 outline-none transition-all text-sm";
  const iconStyle = "absolute left-4 top-1/2 -translate-y-1/2 text-white/40";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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

      <button 
        type="submit" 
        disabled={loading}
        className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black transition-all disabled:opacity-50"
      >
        {loading ? "PROCESSING..." : "CREATE ACCOUNT"}
      </button>

      {msg && (
        <p className={`text-center text-sm font-bold mt-2 ${isError ? "text-red-400" : "text-blue-400"}`}>
          {msg}
        </p>
      )}

      <div className="flex items-center py-2 opacity-20">
        <div className="flex-grow border-t border-white"></div>
        <span className="mx-2 text-[10px] text-white font-bold">OR</span>
        <div className="flex-grow border-t border-white"></div>
      </div>

      <button type="button" className="w-full h-12 bg-white text-slate-950 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-95">
        <img src={google} alt="google" className="w-5 h-5" />
        <span>Continue with Google</span>
      </button>
    </form>
  );
};

export default SignUpForm;   










// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";
// import google from "../../../assets/google-pic.svg";
// import { signupUser } from "../services/auth.service"
 
// const SignUpForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email_address: "",
//     mobile_no: "",
//     password: ""
//   });
  
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [msg, setMsg] = useState("");
//   const [isError, setIsError] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMsg("Creating account...");
//     setIsError(false);

//     try {
//       await signupUser(formData);
//       setMsg("Account Created Successfully! Redirecting...");
//       setTimeout(() => navigate("/login"), 2000);
//     } catch (err) {
//       setIsError(true);
//       setMsg(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const inputStyle = "w-full h-11 pl-11 pr-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/40 focus:ring-2 focus:ring-blue-500/40 outline-none transition-all text-sm";
//   const iconStyle = "absolute left-4 top-1/2 -translate-y-1/2 text-white/40";

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="relative">
//           <User className={iconStyle} size={18} />
//           <input name="first_name" type="text" placeholder="First Name" onChange={handleChange} required className={inputStyle} />
//         </div>
//         <div className="relative">
//           <User className={iconStyle} size={18} />
//           <input name="last_name" type="text" placeholder="Last Name" onChange={handleChange} required className={inputStyle} />
//         </div>
//       </div>

//       <div className="relative">
//         <Mail className={iconStyle} size={18} />
//         <input name="email_address" type="email" placeholder="Email" onChange={handleChange} required className={inputStyle} />
//       </div>

//       <div className="relative">
//         <Phone className={iconStyle} size={18} />
//         <input name="mobile_no" type="tel" placeholder="Phone" onChange={handleChange} required className={inputStyle} />
//       </div>

//       <div className="relative">
//         <Lock className={iconStyle} size={18} />
//         <input name="password" type={showPassword ? "text" : "password"} placeholder="Password" onChange={handleChange} required className={inputStyle} />
//         <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
//           {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//         </button>
//       </div>

//       <button 
//         type="submit" 
//         disabled={loading}
//         className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black transition-all disabled:opacity-50"
//       >
//         {loading ? "PROCESSING..." : "CREATE ACCOUNT"}
//       </button>

//       {msg && (
//         <p className={`text-center text-sm font-bold mt-2 ${isError ? "text-red-400" : "text-blue-400"}`}>
//           {msg}
//         </p>
//       )}

//       <div className="flex items-center py-2 opacity-20">
//         <div className="flex-grow border-t border-white"></div>
//         <span className="mx-2 text-[10px] text-white font-bold">OR</span>
//         <div className="flex-grow border-t border-white"></div>
//       </div>

//       <button type="button" className="w-full h-12 bg-white text-slate-950 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-95">
//         <img src={google} alt="google" className="w-5 h-5" />
//         <span>Continue with Google</span>
//       </button>
//     </form>
//   );
// };

// export default SignUpForm;   
