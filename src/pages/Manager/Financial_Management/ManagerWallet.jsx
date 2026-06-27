import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import logo from "../../../assets/step2 scientist logo.jpeg";

function ManagerWallet() {
  const navigate = useNavigate();
  const [itnumber, setItnumber] = useState("");
  const [walletData, setWalletData] = useState(null);
  const [date, setDate] = useState("");

  const API_URL = "http://localhost:3000";

  useEffect(() => {
    setDate(new Date().toISOString().split('T')[0]);
  }, []);

  // Update: /displaywallet route ke saath integration
  const handlesearch = async (e) => {
    e.preventDefault();
    try {
      // Backend route: /displaywallet/${itnumber}
      const res = await axios.get(`${API_URL}/displaywallet/${itnumber}`);
      setWalletData(res.data);
      toast.success("Wallet Found");
    } catch (err) {
      setWalletData(null);
      toast.error("Wallet Not Found or Error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Confirm Payment",
      text: "Are you sure you want to confirm?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#1DB6D9",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Confirm karne ke liye route
          await axios.post(`${API_URL}/displaywallet/confirm`, { 
            walletid: walletData.walletid 
          });
          toast.success("Wallet Confirmed");
          setTimeout(() => navigate("/managerfinancial"), 1500);
        } catch (err) {
          toast.error("Failed to confirm");
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <Toaster />
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#1DB6D9] flex items-center justify-center overflow-hidden">
            <img src={logo} alt="logo" className="w-24 md:w-28" />
          </div>
        </div>

        <div className="bg-[#DDF7F8] border border-black rounded-2xl py-3 mb-6">
          <h1 className="text-center text-2xl md:text-3xl font-bold text-[#1DB6D9]">Wallet</h1>
        </div>

        <form onSubmit={handlesearch} className="bg-[#DDF7F8] border border-black rounded-2xl p-6 mb-6">
          <label className="block text-lg font-bold mb-2">Enter IT Number</label>
          <input
            type="text"
            placeholder="SID123456"
            required
            value={itnumber}
            onChange={(e) => setItnumber(e.target.value)}
            className="w-full border border-black rounded-xl p-3 outline-none"
          />
          <button type="submit" className="w-full mt-4 bg-[#384D6C] text-white py-3 rounded-xl font-bold hover:bg-[#1DB6D9]">
            Search
          </button>
        </form>

        {walletData && (
          <form onSubmit={handleSubmit} className="bg-[#DDF7F8] border border-black rounded-2xl p-6 animate-fadeIn">
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2">Wallet ID</label>
              <input type="text" value={walletData.walletid} readOnly className="w-full border border-black rounded-xl p-3 bg-white" />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2">Date</label>
              <input type="date" value={date} readOnly className="w-full border border-black rounded-xl p-3 bg-white" />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2">Amount</label>
              <input type="text" value={walletData.balance} readOnly className="w-full border border-black rounded-xl p-3 bg-white" />
            </div>
            <button type="submit" className="w-full bg-[#384D6C] text-white py-3 rounded-xl font-bold hover:bg-red-600">
              Confirm
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ManagerWallet;