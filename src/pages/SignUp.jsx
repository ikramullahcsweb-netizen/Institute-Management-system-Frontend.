import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SignUpForm from "../features/auth/components/SignUpForm"
import loginbg from "../assets/institue image.avif";

const SignUp = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const handleSignUp = async (e, formData) => {
    e.preventDefault();
    setMsg("Creating account...");
  
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden p-4 mt-15">
      <div className="absolute inset-0 z-0">
        <img src={loginbg} alt="bg" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-slate-600/50 backdrop-blur-[0px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="relative z-20 w-full max-w-140 h-auto bg-white/2 backdrop-blur-2xl p-8 md:p-12 rounded-[3rem] border border-white/10"
      >
        <h1 className="text-4xl font-black text-white text-center mb-8">Sign Up</h1>
        <SignUpForm onSubmit={handleSignUp} msg={msg} navigate={navigate} />
        
        <p className="text-center text-sm text-white/40 mt-6">
          Already a member? 
          <button onClick={() => navigate("/login")} className="text-blue-400 font-black ml-2">Sign In</button>
        </p>
      </motion.div>
    </section>
  );
};

export default SignUp;