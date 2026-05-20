import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Head from '../Header/Header';
import { FaUniversity, FaUser, FaFileInvoice, FaCalendarAlt, FaDollarSign, FaCloudUploadAlt } from 'react-icons/fa';

function StPaymentBank() {
  const navigator = useNavigate();

  // Pure Static Sandbox States for Frontend Mockup Representation
  const [idnumber] = useState('STU-99402'); // Mock Student ID
  const [subname] = useState('Advanced Web Engineering (MERN Stack)'); // Mock Course Narrative
  const [subamount] = useState('12,500'); // Mock Fee Amount
  const [date, setDate] = useState('');

  // Static Date Initialization
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

  // Pure Interactive Simulation Alerts (No backend APIs triggered)
  const handleClick2 = () => {
    toast.loading('Simulating payment validation...', {
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
        toast.success('Mockup Transaction Processed!', {
          style: {
            background: '#28a745',
            color: '#ffffff',
            borderRadius: '12px',
          },
          duration: 2000,
        });
        setTimeout(() => {
          navigator('/test'); // Redirect logic preserved for flow visualization
        }, 2500);
      }, 500);
    }, 2000);
  };

  const handleStaticSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Confirm Payment (Mock)",
      text: "Do you want to simulate this bank deposit validation?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#384D6C",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, simulate!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Mockup Data Dispatched",
          text: "Simulation confirmed successfully.",
          icon: "success",
          confirmButtonColor: "#384D6C"
        });
        handleClick2();
      } else {
        Swal.fire({
          title: "Simulation Aborted",
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

      {/* Main Structural Container Frame */}
      <div className="w-full max-w-[1100px] mx-auto px-4 lg:pl-[290px] mt-8 transition-all">
        
        {/* Component Module Header Banner */}
        <div className="w-full bg-gradient-to-r from-[#AED5D9] to-[#577FAF] border-2 border-slate-900 rounded-[24px] p-6 text-center shadow-sm mb-6">
          <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
            Remittance Settlement Form
          </h1>
          <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mt-1">Static Sandbox Blueprint Mode</p>
        </div>

        {/* Navigation Tab Anchors */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link to="/payonline/mock-id" className="w-full sm:w-auto">
            <button 
              type="button" 
              className="w-full sm:w-auto bg-[#384D6C] hover:bg-gradient-to-r hover:from-[#25c481] hover:to-[#25b7c4] text-white text-xs font-black uppercase tracking-wider px-8 py-3 rounded-xl transition-all shadow-sm hover:scale-[1.03]"
            >
              Online Gateway
            </button>
          </Link>
          <button 
            type="button" 
            className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-900 text-xs font-black uppercase tracking-wider px-8 py-3 rounded-xl cursor-default"
          >
            Bank Deposit System
          </button>
        </div>

        {/* Transaction Mockup Matrix Display */}
        <div className="w-full bg-gradient-to-b from-[#C9E8EA] to-[#b8dedf] border-2 border-slate-900 rounded-[26px] p-6 md:p-10 shadow-md">
          <form onSubmit={handleStaticSubmit} className="space-y-6">
            
            <div className="border-b border-slate-400/50 pb-4 mb-6">
              <h2 className="text-lg font-black text-slate-800 uppercase tracking-wide flex items-center gap-2">
                <FaUniversity className="text-slate-700" />
                <span>Verification & Deposit Details</span>
              </h2>
            </div>

            {/* Field Instance: Student Identity (Static Sandbox) */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-950 uppercase tracking-wider flex items-center gap-1">
                <FaUser className="text-slate-700 text-[10px]" /> Student IT Identification Number
              </label>
              <input
                type="text"
                value={idnumber}
                readOnly
                className="w-full px-4 py-3 bg-white/60 border border-slate-900 rounded-xl font-bold text-slate-800 focus:outline-none text-sm cursor-not-allowed"
              />
            </div>

            {/* Field Instance: Account Depositor Title Name Input */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-950 uppercase tracking-wider">
                Account Holder Name <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter complete depositor name"
                required
                className="w-full px-4 py-3 bg-white border border-slate-900 rounded-xl text-slate-900 placeholder-slate-500 font-bold focus:outline-none focus:ring-4 focus:ring-cyan-400 transition-all text-sm"
              />
            </div>

            {/* Field Instance: Bank Account String Input */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-950 uppercase tracking-wider">
                Bank Account Number / IBAN <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter complete numerical account sequence"
                required
                className="w-full px-4 py-3 bg-white border border-slate-900 rounded-xl text-slate-900 placeholder-slate-500 font-bold focus:outline-none focus:ring-4 focus:ring-cyan-400 transition-all text-sm"
              />
            </div>

            {/* Field Instance: Corporate Financial Bank Name Input */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-950 uppercase tracking-wider">
                Financial Institution (Bank Name) <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Allied Bank, HBL, Meezan Bank"
                required
                className="w-full px-4 py-3 bg-white border border-slate-900 rounded-xl text-slate-900 placeholder-slate-500 font-bold focus:outline-none focus:ring-4 focus:ring-cyan-400 transition-all text-sm"
              />
            </div>

            {/* Field Instance: Course Context Description (Static Sandbox) */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-950 uppercase tracking-wider flex items-center gap-1">
                <FaFileInvoice className="text-slate-700 text-[10px]" /> Transaction Remittance Narrative
              </label>
              <input
                type="text"
                value={subname}
                readOnly
                className="w-full px-4 py-3 bg-white/60 border border-slate-900 rounded-xl font-bold text-slate-800 focus:outline-none text-sm cursor-not-allowed"
              />
            </div>

            {/* Field Instance: Timestamp (Static Sandbox) */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-950 uppercase tracking-wider flex items-center gap-1">
                <FaCalendarAlt className="text-slate-700 text-[10px]" /> Automated Verification Timestamp
              </label>
              <input
                type="date"
                value={date}
                readOnly
                className="w-full px-4 py-3 bg-white/60 border border-slate-900 rounded-xl font-bold text-slate-800 focus:outline-none text-sm cursor-not-allowed"
              />
            </div>

            {/* Field Instance: Currency Quantum (Static Sandbox) */}
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

            {/* Mock Binary File Selector */}
            <div className="w-full bg-slate-50 border-2 border-dashed border-slate-400 rounded-2xl p-6 text-center mt-8 hover:bg-slate-100/50 transition-colors">
              <div className="flex flex-col items-center justify-center gap-2">
                <FaCloudUploadAlt className="text-slate-500 text-3xl animate-pulse" />
                <span className="text-xs font-black text-slate-700 uppercase tracking-wider">
                  Upload Scanned Deposit Slip Receipt
                </span>
                <span className="text-[10px] text-slate-500 font-bold uppercase">
                  Supported extensions: PDF, PNG, JPG, JPEG
                </span>
                <input
                  type="file"
                  accept=".pdf, .png, .jpg, .jpeg"
                  required
                  className="mt-3 block mx-auto text-xs font-bold text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-black file:uppercase file:bg-slate-900 file:text-white hover:file:bg-slate-800 cursor-pointer"
                />
              </div>
            </div>

            {/* Terms Consensus Box */}
            <div className="flex items-start gap-3 bg-white/40 p-4 rounded-xl border border-slate-300/60 mt-6">
              <input
                type="checkbox"
                id="terms"
                required
                className="w-4 h-4 rounded border-slate-900 text-cyan-600 focus:ring-cyan-500 mt-0.5 cursor-pointer"
              />
              <label htmlFor="terms" className="text-xs font-black text-slate-950 uppercase tracking-tight cursor-pointer selection:bg-transparent">
                I hereby state that the statement and uploaded slip documents are legit and true to my knowledge.
              </label>
            </div>

            {/* Submission Simulator Trigger */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#384D6C] hover:bg-[#25b7c4] text-white text-sm font-black uppercase tracking-widest py-4 rounded-xl border-2 border-slate-900 transition-all shadow-md hover:scale-[1.01]"
              >
                Dispatch Remittance Node (Simulation)
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default StPaymentBank;