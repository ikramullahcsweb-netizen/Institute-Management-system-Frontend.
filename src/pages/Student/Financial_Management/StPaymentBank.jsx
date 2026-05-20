import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Head from '../Header/Header';
import { FaUniversity, FaUser, FaFileInvoice, FaCalendarAlt, FaDollarSign, FaCloudUploadAlt } from 'react-icons/fa';

function StPaymentBank() {
  const status = 'Pending';
  const type = 'Bank';

  const [upload_files, setUpload_Files] = useState(null);
  const [, setItnumber] = useState('');
  const [accountname, setAccountname] = useState('');
  const [accountnumber, setAccountnumber] = useState('');
  const [bankname, setBankname] = useState('');
  const [, setDescription] = useState('');
  const [date, setDate] = useState('');
  const navigator = useNavigate();

  const [idnumber, setName] = useState('');
  const [subname, setSubName] = useState('');
  const [subamount, setSubAmount] = useState('');
  const { subid } = useParams();

  // Handle current date assignment
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

  // Fetch student profile identity
  useEffect(() => {
    axios.get('/studentprofile')
      .then((res) => {
        setName(res.data.stdid);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Fetch target invoice context parameters
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

  const submit = async (e) => {
    const formData = new FormData();
    formData.append('file', upload_files);
    formData.append('itnumber', idnumber);
    formData.append('accountname', accountname);
    formData.append('accountnumber', accountnumber);
    formData.append('bankname', bankname);
    formData.append('description', subname);
    formData.append('date', date);
    formData.append('amount', subamount);
    formData.append('status', status);
    formData.append('type', type);

    axios.post('http://localhost:5000/createbank', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(res => {
      console.log(res);
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

      {/* Main Container Layer with Responsive Left Sidebar Protection */}
      <div className="w-full max-w-[1100px] mx-auto px-4 pl-4 md:pl-[290px] mt-8 transition-all">
        
        {/* Component Module Header Section */}
        <div className="w-full bg-gradient-to-r from-[#AED5D9] to-[#577FAF] border-2 border-slate-900 rounded-[24px] p-6 text-center shadow-sm mb-6">
          <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
            Remittance Settlement Form
          </h1>
        </div>

        {/* Dynamic Route Segment Navigation Toggles */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link to={`/payonline/${subid}`} className="w-full sm:w-auto">
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

        {/* Encrypted Transaction Intake Matrix */}
        <div className="w-full bg-gradient-to-b from-[#C9E8EA] to-[#b8dedf] border-2 border-slate-900 rounded-[26px] p-6 md:p-10 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="border-b border-slate-400/50 pb-4 mb-6">
              <h2 className="text-lg font-black text-slate-800 uppercase tracking-wide flex items-center gap-2">
                <FaUniversity className="text-slate-700" />
                <span>Verification & Deposit Details</span>
              </h2>
            </div>

            {/* Input Node: Student IT Number */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-950 uppercase tracking-wider flex items-center gap-1">
                <FaUser className="text-slate-700 text-[10px]" /> Student IT Identification Number
              </label>
              <input
                type="text"
                name="itnum"
                value={idnumber}
                readOnly
                className="w-full px-4 py-3 bg-white/60 border border-slate-900 rounded-xl font-bold text-slate-800 focus:outline-none focus:bg-white focus:ring-4 focus:ring-cyan-400 transition-all text-sm"
              />
            </div>

            {/* Input Node: Account Depositor Name */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-950 uppercase tracking-wider">
                Account Holder Name <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                name="acname"
                placeholder="Enter complete depositor name"
                pattern="[A-Za-z\s]+"
                required
                onChange={(e) => setAccountname(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-900 rounded-xl text-slate-900 placeholder-slate-500 font-medium focus:outline-none focus:ring-4 focus:ring-cyan-400 transition-all text-sm"
              />
            </div>

            {/* Input Node: Bank Account Sequence */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-950 uppercase tracking-wider">
                Bank Account Number / IBAN <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                name="acnum"
                placeholder="Enter complete numerical account sequence"
                pattern="[0-9]+"
                required
                onChange={(e) => setAccountnumber(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-900 rounded-xl text-slate-900 placeholder-slate-500 font-medium focus:outline-none focus:ring-4 focus:ring-cyan-400 transition-all text-sm"
              />
            </div>

            {/* Input Node: Corporate Bank Name */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-950 uppercase tracking-wider">
                Financial Institution (Bank Name) <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                name="bname"
                placeholder="e.g. Allied Bank, HBL, Meezan Bank"
                pattern="[A-Za-z\s]+"
                required
                onChange={(e) => setBankname(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-900 rounded-xl text-slate-900 placeholder-slate-500 font-medium focus:outline-none focus:ring-4 focus:ring-cyan-400 transition-all text-sm"
              />
            </div>

            {/* Input Node: Structural Context/Description */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-950 uppercase tracking-wider flex items-center gap-1">
                <FaFileInvoice className="text-slate-700 text-[10px]" /> Transaction Remittance Narrative
              </label>
              <input
                type="text"
                name="descriptions"
                value={subname}
                readOnly
                className="w-full px-4 py-3 bg-white/60 border border-slate-900 rounded-xl font-bold text-slate-800 focus:outline-none text-sm"
              />
            </div>

            {/* Input Node: Documented Execution Date */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-950 uppercase tracking-wider flex items-center gap-1">
                <FaCalendarAlt className="text-slate-700 text-[10px]" /> Automated Verification Timestamp
              </label>
              <input
                type="date"
                name="dates"
                value={date}
                readOnly
                className="w-full px-4 py-3 bg-white/60 border border-slate-900 rounded-xl font-bold text-slate-800 focus:outline-none text-sm"
              />
            </div>

            {/* Input Node: Gross Currency Amount */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-950 uppercase tracking-wider flex items-center gap-1">
                <FaDollarSign className="text-slate-700 text-[10px]" /> Calculated Fee Quantum (PKR)
              </label>
              <input
                type="text"
                name="amounts"
                value={subamount}
                readOnly
                className="w-full px-4 py-3 bg-white/60 border border-slate-900 rounded-xl font-black text-slate-900 focus:outline-none text-sm"
              />
            </div>

            {/* Binary File/Slip Capture Terminal */}
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
                  id="fileInput"
                  type="file"
                  accept=".pdf, .png, .jpg, .jpeg"
                  required
                  onChange={(e) => setUpload_Files(e.target.files[0])}
                  className="mt-3 block mx-auto text-xs font-bold text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-black file:uppercase file:bg-slate-900 file:text-white hover:file:bg-slate-800 cursor-pointer"
                />
              </div>
            </div>

            {/* Terms and Agreements Protocol Validation */}
            <div className="flex items-start gap-3 bg-white/40 p-4 rounded-xl border border-slate-300/60 mt-6">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                value="accepted"
                required
                className="w-4 h-4 rounded border-slate-900 text-cyan-600 focus:ring-cyan-500 mt-0.5 cursor-pointer"
              />
              <label htmlFor="terms" className="text-xs font-black text-slate-950 uppercase tracking-tight cursor-pointer selection:bg-transparent">
                I hereby state that the statement and uploaded slip documents are legit and true to my knowledge.
              </label>
            </div>

            {/* Execution Core Trigger Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#384D6C] hover:bg-red-600 text-white text-sm font-black uppercase tracking-widest py-4 rounded-xl border-2 border-slate-900 transition-all shadow-md hover:scale-[1.01]"
              >
                Dispatch Remittance Node
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default StPaymentBank;