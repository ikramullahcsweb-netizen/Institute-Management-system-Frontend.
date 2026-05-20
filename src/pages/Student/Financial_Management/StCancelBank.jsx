import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Head from '../Header/Header';
import { FaReceipt, FaUser, FaRegIdCard, FaUniversity, FaFileInvoiceDollar, FaCalendarAlt, FaCoins, FaTimesCircle, FaCheckCircle } from 'react-icons/fa';

function StCancelBank() {
  const { id } = useParams();
  const navigator = useNavigate();

  // Pure Local Mock Static Datasets Engine Matrix matching your pipeline schemas
  const mockBankPayments = {
    "6623f99bc9a8a220af9d001": {
      itnumber: "IT23004512",
      accountname: "Ikram Khan",
      accountnumber: "PK72HABB0000123456789",
      bankname: "Habib Bank Limited (HBL)",
      description: "MERN Stack Premium Course Installment 1",
      date: "2026-05-10",
      amount: "15000",
    },
    "6623f99bc9a8a220af9d002": {
      itnumber: "IT23004512",
      accountname: "Ikram Khan",
      accountnumber: "PK12UNIL0000987654321",
      bankname: "United Bank Limited (UBL)",
      description: "Tailwind UI Layout Components Lab Access",
      date: "2026-05-18",
      amount: "5000",
    }
  };

  // Component Form Input States Managed Dynamically via Mock Data Matrix
  const [itnumber, setItnumber] = useState('');
  const [accountname, setAccountName] = useState('');
  const [accountnumber, setAccountnumber] = useState('');
  const [bankname, setBankName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState('75500'); // Seed Static Wallet Balance Base Value

  // Load target static transaction details based on Route Param ID
  useEffect(() => {
    // Fallback default target layout if provided URL param matching breaks
    const selectedPayment = mockBankPayments[id] || mockBankPayments["6623f99bc9a8a220af9d001"];
    
    if (selectedPayment) {
      setItnumber(selectedPayment.itnumber);
      setAccountName(selectedPayment.accountname);
      setAccountnumber(selectedPayment.accountnumber);
      setBankName(selectedPayment.bankname);
      setDescription(selectedPayment.description);
      setDate(selectedPayment.date);
      setAmount(selectedPayment.amount);
    }
  }, [id]);

  // Pure Mock Logic Simulation handling arithmetic balance changes
  const updatewallet = () => {
    const updatedAmount = parseInt(balance) + parseInt(amount || 0);
    setBalance(updatedAmount.toString());
    console.log(`Static Balance updated successfully inside state matrix to: Rs. ${updatedAmount}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Cancel Payment",
      text: "Are you sure you want to cancel the payment?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#384D6C",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, proceed!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        updatewallet();
        Swal.fire({
          title: "Payment is Canceled",
          text: "The invoice amount has been successfully voided.",
          icon: "success",
          confirmButtonColor: "#384D6C"
        });
        handleClick2();
      } else {
        Swal.fire({
          title: "Changes are Canceled",
          icon: "error",
          confirmButtonColor: "#384D6C"
        });
      }
    });
  };

  const handleClick2 = () => {
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
          navigator('/viewbank');
        }, 2500);
      }, 2500);
    }, 5000);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigator('/viewbank');
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12">
      <Head />
      <Toaster />

      {/* Main Responsive Canvas Layer with Left Sidebar Clearance Protection */}
      <div className="w-full max-w-[1000px] mx-auto px-4 pl-4 md:pl-[290px] mt-8 transition-all">
        
        {/* Step 2 Consistent Visual Layout Brand Header Block (#C9E8EA Base) */}
        <div className="w-full bg-[#C9E8EA] border-2 border-slate-900 rounded-[20px] p-5 mb-8 flex items-center justify-between shadow-xs">
          <div>
            <h1 className="text-xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
              <FaReceipt className="text-slate-800" />
              <span>Void Bank Invoice Log</span>
            </h1>
            <p className="text-[11px] text-slate-700 font-bold mt-0.5 uppercase tracking-wide">
              Review ledger parameters and request secure direct balance restitution reversal.
            </p>
          </div>
        </div>

        {/* Core Financial Form Box Container Wrapper */}
        <div className="bg-white border-2 border-slate-900 rounded-[22px] shadow-sm overflow-hidden">
          
          {/* Subsystem Descriptive Ribbon Section Header */}
          <div className="bg-slate-50 border-b-2 border-slate-900 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#384D6C]" />
              <h2 className="text-xs font-black text-slate-800 uppercase tracking-widest">
                Payment Verification Matrix (Current Wallet Base: Rs. {balance})
              </h2>
            </div>
            <span className="text-[10px] bg-amber-50 text-amber-800 border border-amber-300 font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
              Static Sandbox Mode
            </span>
          </div>

          {/* Core Form Component Engine */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* IT Number Field Node */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <FaRegIdCard className="text-slate-400 text-xs" /> Student IT Number
                </label>
                <input 
                  type="text" 
                  readOnly 
                  value={itnumber} 
                  className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-4 py-3 text-xs font-bold text-slate-800 uppercase tracking-wide focus:outline-none cursor-not-allowed"
                />
              </div>

              {/* Account Name Field Node */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <FaUser className="text-slate-400 text-xs" /> Bank Account Name
                </label>
                <input 
                  type="text" 
                  readOnly 
                  value={accountname} 
                  className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-4 py-3 text-xs font-bold text-slate-800 uppercase tracking-wide focus:outline-none cursor-not-allowed"
                />
              </div>

              {/* Account Number Field Node */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <FaFileInvoiceDollar className="text-slate-400 text-xs" /> Account / Card Digit Sequence
                </label>
                <input 
                  type="text" 
                  readOnly 
                  value={accountnumber} 
                  className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-4 py-3 text-xs font-mono font-bold text-slate-800 tracking-wide focus:outline-none cursor-not-allowed"
                />
              </div>

              {/* Bank Name Field Node */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <FaUniversity className="text-slate-400 text-xs" /> Clearing Bank Institution
                </label>
                <input 
                  type="text" 
                  readOnly 
                  value={bankname} 
                  className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-4 py-3 text-xs font-bold text-slate-800 uppercase tracking-wide focus:outline-none cursor-not-allowed"
                />
              </div>

              {/* Description Field Node */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <FaReceipt className="text-slate-400 text-xs" /> Remittance Core Description
                </label>
                <input 
                  type="text" 
                  readOnly 
                  value={description} 
                  className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-4 py-3 text-xs font-bold text-slate-700 focus:outline-none cursor-not-allowed"
                />
              </div>

              {/* Date Field Node */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <FaCalendarAlt className="text-slate-400 text-xs" /> Ledger Transaction Date
                </label>
                <input 
                  type="date" 
                  readOnly 
                  value={date} 
                  className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-4 py-3 text-xs font-bold text-slate-700 focus:outline-none cursor-not-allowed"
                />
              </div>

              {/* Amount Field Node */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <FaCoins className="text-slate-400 text-xs" /> Statement Amount (PKR)
                </label>
                <input 
                  type="text" 
                  readOnly 
                  value={amount ? `Rs. ${parseInt(amount).toLocaleString('en-US')}.00` : ''} 
                  className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-4 py-3 text-xs font-black text-slate-900 focus:outline-none cursor-not-allowed"
                />
              </div>

            </div>

            {/* Core Operational CTA Controls Footer Section */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-3">
              
              <button
                type="button"
                onClick={handleCancel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-black uppercase tracking-wider px-6 py-3.5 rounded-xl border-2 border-slate-900 transition-all shadow-xs"
              >
                <FaTimesCircle className="text-slate-500 text-sm" />
                <span>Abort Action</span>
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#384D6C] hover:bg-slate-900 text-white text-[11px] font-black uppercase tracking-wider px-8 py-3.5 rounded-xl border-2 border-slate-950 transition-all shadow-md"
              >
                <FaCheckCircle className="text-sm" />
                <span>Confirm Void & Refund</span>
              </button>

            </div>

          </form>

        </div>
      </div>
    </div>
  );
}

export default StCancelBank;