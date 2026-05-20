import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/api";
import googleIcon from "../../assets/google-pic.svg";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react"; // Modern Icons

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ Email: "", Password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginUser(formData);
      console.log("Login Success:", data);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-5">
      <div className="mb-2">
        <h1 className="text-4xl font-black text-white md:text-slate-900 tracking-tighter">
          Login
        </h1>
        <p className="text-sm text-white/70 md:text-gray-500 mt-2 font-medium">
          Access your Step2Scientist portal
        </p>
      </div>

      
      <div className="relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
          <Mail size={18} />
        </div>
        <input
          name="Email"
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
          className="w-full h-12 pl-12 pr-4 bg-white/10 md:bg-white border border-white/20 md:border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white md:text-slate-900"
        />
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
          <Lock size={18} />
        </div>
        <input
          name="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onChange={handleChange}
          required
          className="w-full h-12 pl-12 pr-12 bg-white/10 md:bg-white border border-white/20 md:border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white md:text-slate-900"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {error && <p className="text-red-400 text-xs font-bold bg-red-500/10 p-2 rounded-lg border border-red-500/20">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full h-12 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {loading ? "Verifying..." : (
          <>
            <span>Login</span>
            <LogIn size={18} />
          </>
        )}
      </button>

      <div className="flex items-center my-1">
        <div className="flex-grow border-t border-white/10 md:border-gray-100"></div>
        <span className="mx-4 text-xs text-white/40 md:text-gray-400 font-bold uppercase">OR</span>
        <div className="flex-grow border-t border-white/10 md:border-gray-100"></div>
      </div>

      <button
        type="button"
        className="flex items-center justify-center gap-3 w-full h-12 rounded-xl border border-white/20 md:border-gray-200 bg-white/5 md:bg-white hover:bg-white/10 md:hover:bg-gray-50 transition-all font-medium text-white md:text-slate-700"
      >
        <img src={googleIcon} alt="google" className="w-5 h-5" />
        <span>Continue with Google</span>
      </button>

      <p className="text-center text-sm text-white/60 md:text-gray-500 mt-2">
        Don't have an account? 
        <button 
          onClick={() => navigate("/signup")} 
          className="text-blue-400 md:text-blue-600 font-bold ml-1 hover:underline"
        >
          Sign up
        </button>
      </p>
    </form>
  );
};

export default LoginForm;