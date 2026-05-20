import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Head from '../Header/Header';

function AdminLessonReport() {
  const navigator = useNavigate();

  const handleClick2 = () => {
    toast.loading('loading...', {
      style: {
        background: 'black',
        color: '#ffffff',
        borderRadius: '10px',
        border: '2px solid #ffffff',
      },
    });
    
    setTimeout(() => {
      toast.dismiss();
      setTimeout(() => {
        // Step 2 Scientist Portal ke mutabiq lesson generation route
        navigator('/adgenratelesson');
      }, 0);
    }, 2000);
  };

  return (
    <div className="font-sans">
      {/* Step 2 Scientist Academy Header jisme logo aur admin profile shamil hai */}
      <Head />
      <Toaster />
      
      {/* Center aligned grid framework wrapper */}
      <div className="flex justify-center items-center mt-[30px] ml-[200px] scale-90">
        <form className="w-[950px] h-[550px] bg-gradient-to-r from-[#e6eff6] to-[#063a67] ml-2.5 p-2.5 rounded-[20px] border-2 border-black flex flex-col justify-center items-center">
          
          <h2 className="text-white text-3xl font-bold mb-6 tracking-wide drop-shadow-md">
            Step 2 Scientist — Lesson Logs
          </h2>

          <button
            type="button"
            className="text-white cursor-pointer bg-[#063a67] text-center rounded-[15px] px-[50px] py-[11px] outline-none transition-all duration-250 text-xl font-bold border-3 border-white hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] hover:scale-105 shadow-lg"
            onClick={handleClick2}
          >
            Generate Reports
          </button>
          
        </form>
      </div>
    </div>
  );
}

export default AdminLessonReport;