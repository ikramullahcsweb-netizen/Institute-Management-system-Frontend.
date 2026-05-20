
import React from "react";
import { motion } from "framer-motion";
import loginbg from "../assets/institue image.avif";
import LoginForm from "../features/auth/LoginForm";

const Login = () => {
  return (
    <section className="relative min-h-screen w-full  flex items-center justify-center overflow-hidden my-3">
      
      <div className="absolute inset-0 z-0">
        <img
          src={loginbg}
          alt="login-background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
      </div>

      <div className="absolute inset-6 border-2 border-white/20 rounded-[2rem] pointer-events-none z-10"></div>

      <div className="absolute top-12 left-12 z-20 hidden md:block">
        <h2 className="text-white font-black text-2xl tracking-tighter">
          STEP2<span className="text-blue-400">SCIENTIST</span>
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 w-full max-w-[450px] mx-4"
      >
        {/* <div className="bg-gray-500  backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/20 shadow-2xl"> */}
        <div  className="md:w-[35vw] w-full mt-20 mb-5 bg-gray-50 rounded-3xl flex items-center justify-center p-8 lg:p-16 z-10 shadow-xl">
        
          <LoginForm />
        </div>
      </motion.div>

      <div className="absolute bottom-12 text-center z-20 w-full">
        <p className="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase">
          Empowering the next generation
        </p>
      </div>

    </section>
  );
};

export default Login;