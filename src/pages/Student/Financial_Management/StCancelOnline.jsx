import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Head from '../Header/Header';
import { FaTimesCircle, FaCheckCircle, FaReceipt, FaRegIdCard, FaFileAlt, FaCalendarAlt, FaCoins } from 'react-icons/fa';

function StCancelOnline() {
  const navigator = useNavigate();

  // Pure Clean Static Dashboard UI Data Metrics
  const itnumber = "IT20249811";
  const discription = "Advanced React Frontend Architecture Batch-A";
  const date = "2026-05-20";
  const amount = "12,500.00";

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Cancel Payment",
      text: "Are you sure you want to cancel the payment?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#483EA8",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, proceed!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Payment is Canceled",
          icon: "success",
          confirmButtonColor: "#483EA8"
        });
        handleToastFlow();
      } else {
        Swal.fire({
          title: "Changes are Canceled",
          icon: "error",
          confirmButtonColor: "#483EA8"
        });
      }
    });
  };

  const handleToastFlow = () => {
    toast.loading('Payment is canceling...', {
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
      setTimeout(() => {
        toast.success('Wallet is Updated!', {
          style: {
            background: '#10b981',
            color: '#ffffff',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 'bold',
            textTransform: 'uppercase'
          },
          duration: 2000,
          iconTheme: {
            primary: '#ffffff',
            secondary: '#10b981',
          },
        });
        setTimeout(() => {
          navigator('/viewonline');
        }, 2000);
      }, 1000);
    }, 2500);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigator('/viewonline');
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12">
      <Head />
      <Toaster />

      {/* Main Responsive Canvas Layer with Structural Left Sidebar Clearance Protection */}
      <div className="w-full max-w-[1000px] mx-auto px-4 pl-4 md:pl-[290px] mt-8 transition-all">
        
        {/* Consistent Visual Layout Brand Header Block */}
        <div className="w-full bg-[#C9E8EA] border border-slate-200 rounded-[20px] p-5 mb-8 flex items-center justify-between shadow-xs">
          <div>
            <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
              <FaReceipt className="text-slate-700" />
              <span>Cancel Gateway Payment</span>
            </h1>
            <p className="text-[11px] text-slate-600 font-bold mt-0.5 uppercase tracking-wide">
              Nullify online operational charges logs and instantly dispatch refund allocation resources safely.
            </p>
          </div>
        </div>

        {/* Core Financial Form Box Container Wrapper */}
        <div className="bg-white border-2 border-slate-200 rounded-[22px] shadow-xs overflow-hidden">
          
          {/* Subsystem Descriptive Ribbon Section Header */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#483EA8]" />
              <h2 className="text-xs font-black text-slate-800 uppercase tracking-widest">
                Digital Payment Audit Parameters
              </h2>
            </div>
            <span className="text-[10px] bg-red-50 text-red-700 border border-red-200 font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
              Secure Gateway
            </span>
          </div>

          {/* Core Form Component Engine */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* IT Number Field Node */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <FaRegIdCard className="text-slate-400 text-xs" /> Student IT Number Trace
                </label>
                <input 
                  type="text" 
                  readOnly 
                  value={itnumber} 
                  className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-600 uppercase tracking-wide focus:outline-none cursor-not-allowed"
                />
              </div>

              {/* Description Field Node */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <FaFileAlt className="text-slate-400 text-xs" /> Remittance Description
                </label>
                <input 
                  type="text" 
                  readOnly 
                  value={discription} 
                  className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-600 uppercase tracking-wide focus:outline-none cursor-not-allowed"
                />
              </div>

              {/* Date Field Node */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <FaCalendarAlt className="text-slate-400 text-xs" /> Transaction Timestamp Date
                </label>
                <input 
                  type="text" 
                  readOnly 
                  value={date} 
                  className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-600 focus:outline-none cursor-not-allowed"
                />
              </div>

              {/* Amount Field Node */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <FaCoins className="text-slate-400 text-xs" /> Charged Gateway Volume (PKR)
                </label>
                <input 
                  type="text" 
                  readOnly 
                  value={amount} 
                  className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-xs font-black text-slate-700 focus:outline-none cursor-not-allowed"
                />
              </div>

            </div>

            {/* Core Operational CTA Controls Footer Section */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
              
              <button
                type="button"
                onClick={handleCancel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-black uppercase tracking-wider px-6 py-3.5 rounded-xl border border-slate-300 transition-all group"
              >
                <FaTimesCircle className="text-slate-400 text-sm" />
                <span>Dismiss & Abort</span>
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#483EA8] hover:bg-[#392f8a] text-white text-[11px] font-black uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all shadow-md group"
              >
                <FaCheckCircle className="text-sm" />
                <span>Confirm Cancellation</span>
              </button>

            </div>

          </form>

        </div>
      </div>
    </div>
  );
}

export default StCancelOnline;