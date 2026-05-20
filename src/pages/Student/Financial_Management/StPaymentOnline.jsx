import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Head from '../Header/Header';
import { FaGlobe, FaIdCard, FaReceipt, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';

function StPaymentOnline() {
  const status = 'Pending';
  const type = 'Online';

  const [date, setDate] = useState('');
  const navigator = useNavigate();

  const [stuid, setStudentid] = useState('');
  const [balance, setBalance] = useState('');
  const [walletId] = useState('6623e88bc9a8a220af8c0916'); 

  const [subname, setSubName] = useState('');
  const [subamount, setSubAmount] = useState('');
  const { subid } = useParams();

  // Fetch student identification details
  useEffect(() => {
    axios.get('/studentprofile')
      .then((res) => {
        setStudentid(res.data.stdid);            
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Fetch virtual decentralized ledger wallet context
  useEffect(() => {
    axios.get(`http://localhost:5000/getwallet/${walletId}`)
      .then((res) => {
        setBalance(res.data.balance);
      })
      .catch((err) => console.error(err));
  }, [walletId]);

  // Fetch localized transaction metadata parameters
  useEffect(() => {
    axios.get(`/getSubject/${subid}`)
      .then((res) => {
        setSubName(res.data.subjectname);
        setSubAmount(res.data.amount);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [subid]);

  // Initialize automated validation calendar timestamp
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

  const updateWallet = (updatedBalance) => {
    axios.put(`http://localhost:5000/updatewallet/${walletId}`, { balance: updatedBalance })
    .then(res => {
        console.log(res);
    })
    .catch(err => console.error(err));
  };

  const submit = (e) => {
    e.preventDefault();
    const paymentAmount = parseFloat(subamount); 
    const updatedBalance = parseFloat(balance) - paymentAmount; 
    
    axios.post('http://localhost:5000/createonline', {
        itnumber: stuid,
        description: subname,
        date: date,
        amount: paymentAmount,
        status: status,
        type: type
    })
    .then(res => {
        console.log(res);
        updateWallet(updatedBalance); 
    })
    .catch(err => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Confirm Payment",
      text: "Are you sure you want to proceed with the payment?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        submit(e); 
        Swal.fire({
          title: "Payment is Confirmed",
          icon: "success",
        });
        handleClick2();
      } else {
        Swal.fire({
          title: "Payment is Canceled",
          icon: "error",
        });
      }
    });
  };

  const handleClick2 = () => {
    toast.loading('Payment is processing...', {
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
        toast.success('Payment is completed!', {
          style: {
            background: '#28a745',
            color: '#ffffff',
            borderRadius: '12px',
          },
          duration: 2000,
        });
        setTimeout(() => {
          navigator('/test');
        }, 2500); 
      }, 2500); 
    }, 5000); 
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <Head />
      <Toaster />

      {/* Responsive Canvas Layout Frame with Dynamic Sidebar Cushion */}
      <div className="w-full max-w-[1100px] mx-auto px-4 pl-4 md:pl-[290px] mt-8 transition-all">
        
        {/* Component Header Banner Layer */}
        <div className="w-full bg-gradient-to-r from-[#AED5D9] to-[#577FAF] border-2 border-slate-900 rounded-[24px] p-6 text-center shadow-sm mb-6">
          <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
            Remittance Settlement Form
          </h1>
        </div>

        {/* Dynamic Route Segment Toggles */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button 
            type="button" 
            className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-900 text-xs font-black uppercase tracking-wider px-8 py-3 rounded-xl cursor-default"
          >
            Online Gateway
          </button>
          <Link to={`/paybank/${subid}`} className="w-full sm:w-auto">
            <button 
              type="button" 
              className="w-full sm:w-auto bg-[#384D6C] hover:bg-gradient-to-r hover:from-[#25c481] hover:to-[#25b7c4] text-white text-xs font-black uppercase tracking-wider px-8 py-3 rounded-xl transition-all shadow-sm hover:scale-[1.03]"
            >
              Bank Deposit System
            </button>
          </Link>
        </div>

        {/* Core Gateway Input Terminal */}
        <div className="w-full bg-gradient-to-b from-[#C9E8EA] to-[#b8dedf] border-2 border-slate-900 rounded-[26px] p-6 md:p-10 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="border-b border-slate-400/50 pb-4 mb-6">
              <h2 className="text-lg font-black text-slate-800 uppercase tracking-wide flex items-center gap-2">
                <FaGlobe className="text-slate-700" />
                <span>Encrypted Electronic Transaction Details</span>
              </h2>
            </div>

            {/* Input Node: Identification Structure */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-950 uppercase tracking-wider flex items-center gap-1">
                <FaIdCard className="text-slate-700 text-[10px]" /> Student IT Identification Number
              </label>
              <input
                type="text"
                name="itnum"
                value={stuid}
                readOnly
                className="w-full px-4 py-3 bg-white/60 border border-slate-900 rounded-xl font-bold text-slate-800 focus:outline-none text-sm"
              />
            </div>

            {/* Input Node: Transaction Narrative/Description */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-950 uppercase tracking-wider flex items-center gap-1">
                <FaReceipt className="text-slate-700 text-[10px]" /> Fee Processing Description Narrative
              </label>
              <input
                type="text"
                name="descriptions"
                value={subname}
                readOnly
                className="w-full px-4 py-3 bg-white/60 border border-slate-900 rounded-xl font-bold text-slate-800 focus:outline-none text-sm"
              />
            </div>

            {/* Input Node: Gateway Execution Date */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-950 uppercase tracking-wider flex items-center gap-1">
                <FaCalendarAlt className="text-slate-700 text-[10px]" /> Verification Settlement Timestamp
              </label>
              <input 
                type="date" 
                name="date" 
                value={date} 
                readOnly 
                className="w-full px-4 py-3 bg-white/60 border border-slate-900 rounded-xl font-bold text-slate-800 focus:outline-none text-sm"
              />
            </div>

            {/* Input Node: Currency Valuation Balance Quantum */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-950 uppercase tracking-wider flex items-center gap-1">
                <FaDollarSign className="text-slate-700 text-[10px]" /> Calculated Fee quantum (PKR)
              </label>
              <input 
                type="text"
                name="amounts"
                value={subamount}
                readOnly
                className="w-full px-4 py-3 bg-white/60 border border-slate-900 rounded-xl font-black text-slate-900 focus:outline-none text-sm"
              />
            </div>

            {/* Terms and Legal Protocol Acceptance Check */}
            <div className="flex items-start gap-3 bg-white/40 p-4 rounded-xl border border-slate-300/60 pt-6">
              <input 
                type="checkbox" 
                id="terms" 
                name="terms" 
                value="accepted" 
                required
                className="w-4 h-4 rounded border-slate-900 text-cyan-600 focus:ring-cyan-500 mt-0.5 cursor-pointer"
              />
              <label htmlFor="terms" className="text-xs font-black text-slate-950 uppercase tracking-tight cursor-pointer selection:bg-transparent">
                I accept the institutional digital transaction rules and authorization parameters.
              </label>
            </div>

            {/* Execution Dispatch Control Core Trigger */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-[#384D6C] hover:bg-red-600 text-white text-sm font-black uppercase tracking-widest py-4 rounded-xl border-2 border-slate-900 transition-all shadow-md hover:scale-[1.01]"
              >
                Pay Now
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default StPaymentOnline;