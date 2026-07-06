import React from 'react';
import { Link } from 'react-router-dom';
import loginimg from '../assets/girl-liptop.jpg';
import logofull from '../assets/step2 scientist logo.jpeg';
import logo from '../assets/crop logo.jfif';

function SignupSelection() {
  return (
    <main className="w-full  bg-slate-50 flex items-start justify-center p-4 mt-20 mb-5  font-sans ">
      <div className="w-full max-w-[1000px] bg-white border-2 border-slate-200 rounded-[24px] shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center ">

        <div className="w-full h-full bg-slate-100 hidden md:flex items-center justify-center p-8">
          <img
            src={loginimg}
            alt="signup decoration panel"
            className="w-full max-w-[400px] h-auto object-contain object-center transition-transform duration-300 hover:scale-102"
          />
        </div>

        <div className="w-full p-8 sm:p-12 flex flex-col items-center text-center">
          <div className="flex justify-center gap-3 items-center mb-4">
            <img
              src={logofull}
              alt="Step 2 Scientist logo"
              className="h-16 w-auto object-contain"
            />
            <img
              src={logo}
              alt="Royal Academy branding logo"
              className="h-16 w-auto object-contain rounded-full"
            />
          </div>

          <h1 className="text-xl font-black text-[#13293d] tracking-tight uppercase mb-8">
            Welcome to step to scientist
          </h1>

          <div className="w-full max-w-[320px] grid grid-cols-2 gap-3">
            <Link to="/managersignup" className="w-full">
              <button
                type="button"
                className="w-full bg-[#10a1b6] hover:bg-[#0e8a9c] text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-sm transition-all duration-200 uppercase tracking-wider active:scale-[0.98]"
              >
                Manager
              </button>
            </Link>

            <Link to="/adminsignup" className="w-full">
              <button
                type="button"
                className="w-full bg-[#063a67] hover:bg-[#13293d] text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-sm transition-all duration-200 uppercase tracking-wider active:scale-[0.98]"
              >
                Admin
              </button>
            </Link>

            <Link to="/teacherregister" className="w-full">
              <button
                type="button"
                className="w-full bg-[#1b7a3d] hover:bg-[#155c2e] text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-sm transition-all duration-200 uppercase tracking-wider active:scale-[0.98]"
              >
                Teacher
              </button>
            </Link>

            <Link to="/studentregister" className="w-full">
              <button
                type="button"
                className="w-full bg-[#a15c10] hover:bg-[#8a4d0e] text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-sm transition-all duration-200 uppercase tracking-wider active:scale-[0.98]"
              >
                Student
              </button>
            </Link>
          </div>

        </div>

      </div>
    </main>
  );
}

export default SignupSelection;