// import React, { useState } from "react";
// import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";
// import { loginUser } from "../services/auth.service";

// const LoginForm = ({ setMsg, setIsError, navigate }) => {
//   const [credentials, setCredentials] = useState({ username: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMsg("Checking credentials...");
//     setIsError(false);

//     try {
//       const data = await loginUser(credentials);
//       setMsg("Login Successful! Redirecting...");
     
//       localStorage.setItem("token", data.token);
      
//       setTimeout(() => navigate("/dashboard"), 2000);
//     } catch (err) {
//       setIsError(true);
//       setMsg(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const inputStyle = "w-full h-12 pl-12 pr- bg-white/10 border border-black rounded-2xl text-black placeholder:text-gray-900 focus:ring-1 focus:ring-blue-500/40 outline-none transition-all";
//   const iconStyle = "absolute left-4 top-1/2 -translate-y-1/2 text-gray-900";

//   return (
//     <form onSubmit={handleSubmit} className="space-y-5">
//       <div className="relative">
//         <Mail className={iconStyle} size={20} />
//         <input
//           name="username"
//           type="text"
//           placeholder="Username (e.g. email)"
//           onChange={handleChange}
//           required
//           className={inputStyle}
//         />
//       </div>

//       <div className="relative">
//         <Lock className={iconStyle} size={20} />
//         <input
//           name="password"
//           type={showPassword ? "text" : "password"}
//           placeholder="Password"
//           onChange={handleChange}
//           required
//           className={inputStyle}
//         />
//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//           className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-700"
//         >
//           {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//         </button>
//       </div>

//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black flex items-center justify-center gap-2 transition-all disabled:opacity-50"
//       >
//         {loading ? "LOGGING IN..." : "SIGN IN"}
//         <LogIn size={20} />
//       </button>
//     </form>
//   );
// };

// export default LoginForm;    


import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { loginUser } from "../services/auth.service";

const LoginForm = ({ setMsg, setIsError, navigate }) => {
  const [credentials, setCredentials] = useState({ email_address: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("Checking credentials...");
    setIsError(false);

    try {
      const data = await loginUser(credentials);
      setMsg("Login Successful! Redirecting...");
      
      localStorage.setItem("token", data.accessToken || data.data?.accessToken);
      
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (err) {
      setIsError(true);
      setMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = "w-full h-12 pl-12 pr-12 bg-white/10 border border-black rounded-2xl text-black placeholder:text-gray-900 focus:ring-1 focus:ring-blue-500/40 outline-none transition-all";
  const iconStyle = "absolute left-4 top-1/2 -translate-y-1/2 text-gray-900";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="relative">
        <Mail className={iconStyle} size={20} />
        <input
          name="email_address"
          type="email"
          placeholder="Email Address"
          value={credentials.email_address}
          onChange={handleChange}
          required
          className={inputStyle}
        />
      </div>

      <div className="relative">
        <Lock className={iconStyle} size={20} />
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
          className={inputStyle}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-700"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black flex items-center justify-center gap-2 transition-all disabled:opacity-50"
      >
        {loading ? "LOGGING IN..." : "SIGN IN"}
        <LogIn size={20} />
      </button>
    </form>
  );
};

export default LoginForm;