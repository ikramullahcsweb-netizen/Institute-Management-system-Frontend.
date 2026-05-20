import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Head from '../Header/Header';
import { FaCreditCard, FaHistory, FaWallet } from 'react-icons/fa';

function StMain() {
  const navigator = useNavigate();

  const handleNavigationFlow = (route) => {
    toast.loading('Initializing portal connection...', {
      style: {
        background: '#0f172a',
        color: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #334155',
        fontSize: '12px',
        fontWeight: 'bold',
        textTransform: 'uppercase'
      },
    });

    setTimeout(() => {
      toast.dismiss();
      navigator(route);
    }, 1500);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12">
      <Head />
      <Toaster />

      {/* Main Responsive Canvas Layer with Left Sidebar Clearance Protection */}
      <div className="w-full max-w-[1100px] mx-auto px-4 pl-4 md:pl-[290px] mt-10 transition-all">
        
        {/* Dashboard Dynamic Branding Banner */}
        <div className="w-full bg-gradient-to-r from-[#AED5D9] to-[#577FAF] border border-slate-300 rounded-[24px] p-6 md:p-8 mb-10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
              <FaWallet className="text-slate-800" />
              <span>Student Remittance Desk</span>
            </h1>
            <p className="text-xs text-slate-800 font-bold mt-1 uppercase tracking-wider opacity-90">
              Manage fee invoices, real-time gateway payments, and transaction history profiles.
            </p>
          </div>
          <div className="bg-white/30 backdrop-blur-xs px-4 py-2 rounded-xl border border-white/20 self-start md:self-auto">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
              Session Status: Active
            </span>
          </div>
        </div>

        {/* Portal Entry Navigation Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card Module 01: Process Transaction */}
          <div className="bg-white border-2 border-slate-200 rounded-[22px] p-6 shadow-xs flex flex-col justify-between hover:border-[#577FAF] transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center border border-emerald-200 group-hover:scale-105 transition-transform">
                <FaCreditCard className="text-emerald-600 text-lg" />
              </div>
              <div>
                <h2 className="text-base font-black text-slate-800 uppercase tracking-wide">
                  Make an Online Payment
                </h2>
                <p className="text-[11px] text-slate-500 font-bold mt-1 uppercase tracking-normal leading-relaxed">
                  Deposit fee structures directly using encrypted electronic processing gateways safely.
                </p>
              </div>
            </div>
            
            <button
              type="button"
              onClick={() => handleNavigationFlow('/payonline')}
              className="w-full mt-8 bg-[#384D6C] hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] text-white text-xs font-black uppercase tracking-widest py-4 rounded-xl transition-all shadow-md group-hover:scale-[1.02]"
            >
              Execute Payment Node
            </button>
          </div>

          {/* Card Module 02: Ledger & History Tracing */}
          <div className="bg-white border-2 border-slate-200 rounded-[22px] p-6 shadow-xs flex flex-col justify-between hover:border-[#577FAF] transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-200 group-hover:scale-105 transition-transform">
                <FaHistory className="text-blue-600 text-lg" />
              </div>
              <div>
                <h2 className="text-base font-black text-slate-800 uppercase tracking-wide">
                  View Statements & Logs
                </h2>
                <p className="text-[11px] text-slate-500 font-bold mt-1 uppercase tracking-normal leading-relaxed">
                  Access archival records, view printable payment invoices, and check review logs.
                </p>
              </div>
            </div>
            
            <button
              type="button"
              onClick={() => handleNavigationFlow('/viewonline')}
              className="w-full mt-8 bg-[#384D6C] hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] text-white text-xs font-black uppercase tracking-widest py-4 rounded-xl transition-all shadow-md group-hover:scale-[1.02]"
            >
              Review Past Ledger
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default StMain;