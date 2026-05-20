import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Head from "../Header/Header";
import logo from "../../../assets/step2 scientist logo.jpeg";

function MgMain() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    toast.loading("Loading...", {
      style: {
        background: "#384D6C",
        color: "#fff",
        borderRadius: "12px",
        border: "2px solid #1DB6D9",
      },
    });

    setTimeout(() => {
      toast.dismiss();
      navigate(path);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-4">
      <Head />
      <Toaster />

      <div className="flex justify-center">
        <div className="w-[200px] h-[200px] rounded-full border-4 border-[#1DB6D9] flex items-center justify-center">
          <img src={logo} alt="logo" className="w-36" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-3 bg-[#DDF7F8] border border-black rounded-2xl py-3">
        <h1 className="text-center text-3xl font-bold text-[#1DB6D9]">
          Financial Management
        </h1>
      </div>

      <div className="max-w-5xl mx-auto mt-4 bg-gradient-to-r from-[#AED5D9] to-[#577FAF] border border-black rounded-3xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            onClick={() => handleNavigation("/mgpay")}
            className="bg-[#384D6C] hover:bg-[#1DB6D9] text-white text-xl font-bold py-10 rounded-2xl border-2 border-white transition-all hover:scale-105"
          >
            Add Payment
          </button>

          <button
            onClick={() => handleNavigation("/mgview")}
            className="bg-[#384D6C] hover:bg-[#1DB6D9] text-white text-xl font-bold py-10 rounded-2xl border-2 border-white transition-all hover:scale-105"
          >
            View Payments
          </button>

          <button
            onClick={() => handleNavigation("/ManagerWallet")}
            className="bg-[#384D6C] hover:bg-[#1DB6D9] text-white text-xl font-bold py-10 rounded-2xl border-2 border-white transition-all hover:scale-105"
          >
            Top Up Wallet
          </button>
        </div>
      </div>
    </div>
  );
}

export default MgMain;
