import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Head from '../Header/Header';

function AdMain() {
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
        navigator('/adgenerate');
      }, 0);
    }, 2000);
  };

  return (
    <div className="font-sans">
      <Head />
      <Toaster />
      <div className="flex justify-center items-center mt-[30px] ml-[200px] scale-90">
        <form className="w-[950px] h-[550px] bg-gradient-to-r from-[#aed5d9] to-[#577faf] ml-2.5 p-2.5 rounded-[20px] border-2 border-black">
          <button
            type="button"
            className="text-white ml-[350px] mt-[250px] cursor-pointer bg-[#384D6C] text-center rounded-[15px] px-[50px] py-[11px] outline-none transition-all duration-250 text-xl font-bold border-3 border-white hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] hover:scale-105"
            onClick={handleClick2}
          >
            Generate Reports
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdMain;