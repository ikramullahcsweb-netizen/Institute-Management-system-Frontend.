import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../features/auth/components/LoginForm";
import loginbg from "../assets/institue image.avif";

const Login = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 z-0">
        <img src={loginbg} className="w-full h-full object-cover" alt="bg" />
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 mt-10 w-full max-w-md bg-white p-10 md:p-10 rounded-[2.2rem] shadow-2xl border border-white/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Welcome Back
          </h2>
          <p className="text-slate-500 font-medium mt-2">
            Sign in to your account
          </p>
        </div>

        {msg && (
          <div className={`p-4 rounded-2xl mb-6 text-center text-sm font-bold border ${
            isError 
              ? "bg-red-50 border-red-100 text-red-600" 
              : "bg-blue-50 border-blue-100 text-blue-600"
          }`}>
            {msg}
          </div>
        )}

        <LoginForm setMsg={setMsg} setIsError={setIsError} navigate={navigate} />

        <div className="text-center mt-8">
          <p className="text-slate-500 text-sm font-medium">
            Don't have an account? 
            <button 
              onClick={() => navigate("/signup")} 
              className="text-blue-600 font-bold ml-2 hover:underline transition-all"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;