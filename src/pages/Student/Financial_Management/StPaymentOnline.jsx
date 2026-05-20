import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Head from '../Header/Header';
import { FaGlobe, FaIdCard, FaReceipt, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';

function StPaymentOnline() {
  const navigator = useNavigate();

  // Pure Static Mock States for Sandbox UI Modeling
  const [stuid] = useState('STU-99402'); // Mock Student ID
  const [subname] = useState('Advanced Web Engineering (MERN Stack)'); // Mock Subject Name
  const [subamount] = useState('12,500'); // Mock Course Fee
  const [date, setDate] = useState('');

  // Localized Automated Execution Date Assigning
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (mm < 10) mm = '0' + mm;
    if (dd < 10) dd = '0' + dd;

    const formattedDate = yyyy + '-' + mm + '-' + dd;
    setDate(formattedDate);
  }, []);

  // Sandbox Transaction Process Simulation Notification
  const handleClick2 = () => {
    toast.loading('Initiating secure gateway handshake...', {
      style: {
        background: '#0f172a',
        color: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #334155',
      },
    });
  
    setTimeout(() => {
      toast.dismiss();
      setTimeout(() => {
        toast.success('Digital Wallet Settled Successfully!', {
          style: {
            background: '#28a745',
            color: '#ffffff',
            borderRadius: '12px',
          },
          duration: 2000,
        });
        setTimeout(() => {
          navigator('/test'); // Keeping navigational UX active
        }, 2500); 
      }, 500); 
    }, 2000); 
  };

  const handleStaticSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Confirm Electronic Payment",
      text: "Do you want to authorize this mock wallet checkout transaction?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#384D6C",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, authorize!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Wallet Token Dispatched",
          text: "Mock balance synchronized successfully.",
          icon: "success",
          confirmButtonColor: "#384D6C"
        });
        handleClick2();
      } else {
        Swal.fire({
          title: "Transaction Revoked",
          icon: "error",
          confirmButtonColor: "#384D6C"
        });
      }
    });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans antialiased">
      <Head />
      <Toaster />

      {/* Main Structural Wrapper Frame */}
      <div className="w-full max-w-[1100px] mx-auto px-4 lg:pl-[290px] mt-8 transition-all">
        
        {/* Component Header Presentation Layer */}
        <div className="w-full bg-gradient-to-r from-[#AED5D9] to-[#577FAF] border-2 border-slate-900 rounded-[24px] p-6 text-center shadow-sm mb-6">
          <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
            Remittance Settlement Form
          </h1>
          <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mt-1">
            Online Gateway Sandbox Blueprint Mode
          </p>
        </div>

        {/* Dynamic Route View Tabs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button 
            type="button" 
            className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-900 text-xs font-black uppercase tracking-wider px-8 py-3 rounded-xl cursor-default"
          >
            Online Gateway
          </button>
          <Link to="/paybank/mock-id" className="w-full sm:w-auto">
            <button 
              type="button" 
              className="w-full sm:w-auto bg-[#384D6C] hover:bg-gradient-to-r hover:from-[#25c481] hover:to-[#25b7c4] text-white text-xs font-black uppercase tracking-wider px-8 py-3 rounded-xl transition-all shadow-sm hover:scale-[1.03]"
            >
              Bank Deposit System
            </button>
          </Link>
        </div>

        {/* Core Gateway Mock Input Terminal */}
        <div className="w-full bg-gradient-to-b from-[#C9E8EA] to-[#b8dedf] border-2 border-slate-900 rounded-[26px] p-6 md:p-10 shadow-md">
          <form onSubmit={handleStaticSubmit} className="space-y-6">
            
            <div className="border-b border-slate-400/50 pb-4 mb-6">
              <h2 className="text-lg font-black text-slate-800 uppercase tracking-wide flex items-center gap-2">
                <FaGlobe className="text-slate-700" />
                <span>Encrypted Electronic Transaction Details</span>
              </h2>
            </div>

            {/* Field Node: Student Identity Card Vector */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-950 uppercase tracking-wider flex items-center gap-1">
                <FaIdCard className="text-slate-700 text-[10px]" /> Student IT Identification Number
              </label>
              <input
                type="text"
                value={stuid}
                readOnly
                className="w-full px-4 py-3 bg-white/60 border border-slate-900 rounded-xl font-bold text-slate-800 focus:outline-none text-sm cursor-not-allowed"
              />
            </div>

            {/* Field Node: Course Descriptive Title */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-950 uppercase tracking-wider flex items-center gap-1">
                <FaReceipt className="text-slate-700 text-[10px]" /> Fee Processing Description Narrative
              </label>
              <input
                type="text"
                value={subname}
                readOnly
                className="w-full px-4 py-3 bg-white/60 border border-slate-900 rounded-xl font-bold text-slate-800 focus:outline-none text-sm cursor-not-allowed"
              />
            </div>

            {/* Field Node: Static Date Generator */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-950 uppercase tracking-wider flex items-center gap-1">
                <FaCalendarAlt className="text-slate-700 text-[10px]" /> Verification Settlement Timestamp
              </label>
              <input 
                type="date" 
                value={date} 
                readOnly 
                className="w-full px-4 py-3 bg-white/60 border border-slate-900 rounded-xl font-bold text-slate-800 focus:outline-none text-sm cursor-not-allowed"
              />
            </div>

            {/* Field Node: Financial Currency Display */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-950 uppercase tracking-wider flex items-center gap-1">
                <FaDollarSign className="text-slate-700 text-[10px]" /> Calculated Fee Quantum (PKR)
              </label>
              <input 
                type="text"
                value={`PKR ${subamount}`}
                readOnly
                className="w-full px-4 py-3 bg-white/60 border border-slate-900 rounded-xl font-black text-slate-900 focus:outline-none text-sm cursor-not-allowed"
              />
            </div>

            {/* Terms Consensus Checkpoint */}
            <div className="flex items-start gap-3 bg-white/40 p-4 rounded-xl border border-slate-300/60 pt-6">
              <input 
                type="checkbox" 
                id="terms" 
                required
                className="w-4 h-4 rounded border-slate-900 text-cyan-600 focus:ring-cyan-500 mt-0.5 cursor-pointer"
              />
              <label htmlFor="terms" className="text-xs font-black text-slate-950 uppercase tracking-tight cursor-pointer selection:bg-transparent">
                I accept the institutional digital transaction rules and authorization parameters.
              </label>
            </div>

            {/* Submit Wire Control Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-[#384D6C] hover:bg-[#25b7c4] text-white text-sm font-black uppercase tracking-widest py-4 rounded-xl border-2 border-slate-900 transition-all shadow-md hover:scale-[1.01]"
              >
                Execute Sandbox Payment
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default StPaymentOnline;