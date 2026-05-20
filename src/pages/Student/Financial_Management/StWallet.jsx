import React, { useState } from 'react';
import Head from '../Header/Header';
import { FaWallet, FaUserShield, FaIdCard, FaHashtag, FaCoins } from 'react-icons/fa';

function StWallet() {
  // Pure Local Mock Static Dataset Structure for Student Wallet Profile
  const [wallets] = useState([
    {
      stdid: "IT23004512",
      studentname: "Ikram Khan",
      walletid: "WLT-2026-99041",
      balance: "Rs. 75,500.00"
    }
  ]);

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      <Head />
      
      {/* Main Container Frame with Responsive Sidebar Cushion Layout */}
      <div className="w-full max-w-[1200px] mx-auto px-4 pl-4 md:pl-[290px] mt-8 transition-all">
        
        {/* Step-2 Palette Header Banner Block */}
        <div className="w-full bg-[#C9E8EA] border-2 border-slate-900 rounded-[20px] p-6 text-center shadow-sm mb-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 uppercase tracking-tight flex items-center justify-center gap-3">
            <FaWallet className="text-slate-800" />
            <span>My Central Wallet Dashboard</span>
          </h1>
        </div>

        {/* Dynamic Card Container Matrix */}
        <div className="w-full flex justify-center">
          {wallets.map((wallet, index) => (
            <div 
              key={index} 
              className="w-full max-w-[900px] bg-white border-2 border-slate-900 rounded-[22px] p-6 md:p-10 shadow-md transition-all hover:shadow-lg"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                
                {/* Field 1: Student ID */}
                <div className="w-full">
                  <label className="flex items-center gap-2 text-base font-bold text-slate-900 uppercase tracking-wider mb-2">
                    <FaIdCard className="text-[#384D6C]" />
                    <span>Student ID Number</span>
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border-2 border-slate-300 text-slate-800 font-bold text-base px-4 py-3.5 rounded-xl focus:outline-none cursor-not-allowed border-l-4 border-l-[#384D6C]" 
                    value={wallet.stdid} 
                    readOnly
                  />
                </div>

                {/* Field 2: Student Name */}
                <div className="w-full">
                  <label className="flex items-center gap-2 text-base font-bold text-slate-900 uppercase tracking-wider mb-2">
                    <FaUserShield className="text-[#384D6C]" />
                    <span>Student Title Name</span>
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border-2 border-slate-300 text-slate-800 font-bold text-base px-4 py-3.5 rounded-xl focus:outline-none cursor-not-allowed border-l-4 border-l-[#384D6C]" 
                    value={wallet.studentname} 
                    readOnly
                  />
                </div>

                {/* Field 3: Wallet Identifier */}
                <div className="w-full">
                  <label className="flex items-center gap-2 text-base font-bold text-slate-900 uppercase tracking-wider mb-2">
                    <FaHashtag className="text-[#384D6C]" />
                    <span>Wallet Secure Pointer</span>
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border-2 border-slate-300 text-slate-700 font-mono text-base px-4 py-3.5 rounded-xl focus:outline-none cursor-not-allowed border-l-4 border-l-[#384D6C]" 
                    value={wallet.walletid} 
                    readOnly
                  />
                </div>

                {/* Field 4: Available Ledger Balance */}
                <div className="w-full">
                  <label className="flex items-center gap-2 text-base font-bold text-slate-900 uppercase tracking-wider mb-2">
                    <FaCoins className="text-amber-500" />
                    <span>Quantum Ledger Balance</span>
                  </label>
                  <div className="relative rounded-xl shadow-sm">
                    <input 
                      type="text" 
                      className="w-full bg-emerald-50/60 border-2 border-emerald-400 text-emerald-800 font-black text-xl px-4 py-4 rounded-xl focus:outline-none cursor-not-allowed tracking-wide" 
                      value={wallet.balance} 
                      readOnly
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <span className="text-emerald-600 text-xs font-black uppercase tracking-widest bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-300">
                        Active
                      </span>
                    </div>
                  </div>
                </div>

              </form>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default StWallet;