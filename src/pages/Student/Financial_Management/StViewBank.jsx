import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Head from '../Header/Header';
import { FaUniversity, FaCheckCircle, FaTimesCircle, FaClock, FaEye, FaEdit, FaTrashAlt, FaBan } from 'react-icons/fa';

function StViewBank() {
  const navigator = useNavigate();

  // Pure Local Mock Static Dataset Structure Models Matrix
  const [bankpayments, setBankPayments] = useState([
    {
      _id: "6623e88bc9a8a220af8c001",
      itnumber: "IT23004512",
      accountname: "Ikram Khan",
      accountnumber: "0134567890123",
      bankname: "Habib Bank Limited (HBL)",
      description: "MERN Stack Premium Bundle Fee",
      date: "2026-05-15",
      amount: "45000.00",
      upload_files: "receipt_01.pdf",
      status: "Approved"
    },
    {
      _id: "6623e88bc9a8a220af8c002",
      itnumber: "IT23004512",
      accountname: "Ikram Khan",
      accountnumber: "5012345678901",
      bankname: "Meezan Bank",
      description: "UI/UX Tailwind Design Modules Shifting",
      date: "2026-05-19",
      amount: "12000.00",
      upload_files: "receipt_02.png",
      status: "Pending"
    },
    {
      _id: "6623e88bc9a8a220af8c003",
      itnumber: "IT23004512",
      accountname: "Ikram Khan",
      accountnumber: "0234110987654",
      bankname: "Allied Bank (ABL)",
      description: "Cloud Architecture Deployment Pipeline",
      date: "2026-04-10",
      amount: "28000.00",
      upload_files: "receipt_03.pdf",
      status: "Rejected"
    },
    {
      _id: "6623e88bc9a8a220af8c004",
      itnumber: "IT23004512",
      accountname: "Ikram Khan",
      accountnumber: "2001457896321",
      bankname: "Bank Alfalah",
      description: "Advanced Backend API Query Testing",
      date: "2026-05-20",
      amount: "15000.00",
      upload_files: "receipt_04.jpg",
      status: "Pending"
    }
  ]);

  // Client-Side Dynamic State Mutation Mutation Handler
  const handleDelete = (id) => {
    // Dynamic filtration override without touching standard network endpoints
    setBankPayments(prev => prev.filter(item => item._id !== id));
  };

  const handleSubmit = (id) => {
    Swal.fire({
      title: "Delete Payment",
      text: "Are you sure you want to delete the Payment Record?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id); 
        Swal.fire({
          title: "Payment is Deleted",
          icon: "success",
        });
        handleClick2();
      } else {
        Swal.fire({
          title: "Changes are Canceled",
          icon: "error",
        });
      }
    });
  };

  const handleClick2 = () => {
    toast.loading('Payment is Deleting...', {
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
        toast.success('Payment is Deleted!', {
          style: {
            background: '#28a745',
            color: '#ffffff',
            borderRadius: '12px',
          },
          duration: 2000,
        });
        setTimeout(() => {
          navigator('/viewonline');
        }, 2500); 
      }, 2500); 
    }, 5000); 
  };

  // Localized Anchor Framework Simulator
  const showFile = (upload_files) => {
    alert(`Static Environment Mode: Launching File System Emulator for attachment reference: ${upload_files}`);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      <Head />
      <Toaster />

      {/* Responsive Canvas Layout Frame with Dynamic Sidebar Cushion */}
      <div className="w-full max-w-[1400px] mx-auto px-4 pl-4 md:pl-[290px] mt-8 transition-all">
        
        {/* Module Header Banner Board */}
        <div className="w-full bg-gradient-to-r from-[#C9E8EA] to-[#a7dadc] border-2 border-slate-900 rounded-[22px] p-6 text-center shadow-sm mb-8">
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
            My Settlement Statements (Static Engine Enabled)
          </h1>
        </div>

        {/* Navigation Controls Context Row */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Link to={'/viewonline'}>
            <button type="button" className="bg-[#384D6C] hover:bg-gradient-to-r hover:from-[#25c481] hover:to-[#25b7c4] text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-xl border-2 border-slate-900 transition-all shadow-sm hover:scale-[1.04]">
              Online Channel
            </button>
          </Link>
          
          <button type="button" className="bg-white text-slate-900 text-xs font-black uppercase tracking-wider px-7 py-3 rounded-xl border-2 border-slate-900 cursor-default shadow-sm">
            Bank Direct Settlement
          </button>

          <Link to={'/viewcash'}>
            <button type="button" className="bg-[#384D6C] hover:bg-gradient-to-r hover:from-[#25c481] hover:to-[#25b7c4] text-white text-xs font-black uppercase tracking-wider px-7 py-3 rounded-xl border-2 border-slate-900 transition-all shadow-sm hover:scale-[1.04]">
              Physical Cash Receipt
            </button>
          </Link>
        </div>

        {/* Encapsulated Dense Responsive Ledger Table Wrapper */}
        <div className="w-full bg-white border-2 border-slate-900 rounded-[20px] shadow-md overflow-hidden">
          <div className="w-full overflow-x-auto block">
            <table className="w-full border-collapse text-left min-w-[1100px]">
              
              {/* Header Grid Architecture Row */}
              <thead>
                <tr className="bg-[#384D6C] border-b-2 border-slate-900">
                  <th className="p-4 text-xs font-black text-white uppercase tracking-wider">Transaction Identification</th>
                  <th className="p-4 text-xs font-black text-white uppercase tracking-wider">Account Title Name</th>
                  <th className="p-4 text-xs font-black text-white uppercase tracking-wider">Account Pointer Number</th>
                  <th className="p-4 text-xs font-black text-white uppercase tracking-wider">Bank Institution</th>
                  <th className="p-4 text-xs font-black text-white uppercase tracking-wider">Description Context</th>
                  <th className="p-4 text-xs font-black text-white uppercase tracking-wider">Value Timestamp</th>
                  <th className="p-4 text-xs font-black text-white uppercase tracking-wider">Quantum Amount</th>
                  <th className="p-4 text-xs font-black text-white uppercase tracking-wider text-center">Attachment file</th>
                  <th className="p-4 text-xs font-black text-white uppercase tracking-wider text-center">Audit Status</th>
                  <th className="p-4 text-xs font-black text-white uppercase tracking-wider text-center" colSpan="3">Operation Core Actions</th>
                </tr>
              </thead>

              {/* Data Table Matrix Layer */}
              <tbody className="divide-y divide-slate-200">
                {bankpayments.map((bank) => (
                  <tr key={bank._id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 text-sm font-bold text-slate-800 whitespace-nowrap">{bank.itnumber}</td>
                    <td className="p-4 text-sm font-bold text-slate-700 max-w-[180px] truncate">{bank.accountname}</td>
                    <td className="p-4 text-sm font-semibold text-slate-600 tracking-wider whitespace-nowrap">{bank.accountnumber}</td>
                    <td className="p-4 text-sm font-bold text-slate-700">{bank.bankname}</td>
                    <td className="p-4 text-sm text-slate-600 max-w-[200px] truncate">{bank.description}</td>
                    <td className="p-4 text-sm font-medium text-slate-600 whitespace-nowrap">{bank.date}</td>
                    <td className="p-4 text-sm font-black text-slate-900 whitespace-nowrap">Rs. {bank.amount}</td>
                    
                    {/* View Document Execution Control Link */}
                    <td className="p-4 text-center whitespace-nowrap">
                      <button 
                        type="button" 
                        onClick={() => showFile(bank.upload_files)}
                        className="inline-flex items-center gap-1.5 bg-[#4a2032] hover:bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-lg border border-slate-950 shadow-sm transition-all hover:scale-[1.03]"
                      >
                        <FaEye className="text-[11px]" />
                        <span>View doc</span>
                      </button>
                    </td>

                    {/* Status Structural Badges Engine */}
                    <td className="p-4 text-center whitespace-nowrap">
                      {bank.status === 'Approved' && (
                        <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-300 text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                          <FaCheckCircle className="text-[10px]" /> Approved
                        </span>
                      )}
                      {bank.status === 'Rejected' && (
                        <span className="inline-flex items-center gap-1 bg-rose-50 text-rose-700 border border-rose-300 text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                          <FaTimesCircle className="text-[10px]" /> Rejected
                        </span>
                      )}
                      {bank.status === 'Pending' && (
                        <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-300 text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                          <FaClock className="text-[10px]" /> Pending
                        </span>
                      )}
                    </td>

                    {/* Transaction Lifecycle Invalidation Handler (Cancel) */}
                    <td className="p-2 text-center whitespace-nowrap">
                      {bank.status !== 'Approved' && bank.status !== 'Rejected' ? (
                        <Link to={`/cancelbank/${bank._id}`}>
                          <button type="button" className="inline-flex items-center gap-1 bg-[#136845] hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] text-white text-xs font-bold px-3 py-2 rounded-lg border border-slate-950 shadow-sm transition-all hover:scale-[1.03]">
                            Cancel
                          </button>
                        </Link>
                      ) : (
                        <button type="button" disabled className="inline-flex items-center gap-1 bg-slate-100 text-slate-400 text-xs font-bold px-3 py-2 rounded-lg border border-slate-200 cursor-not-allowed opacity-60">
                          <FaBan className="text-[10px]" /> Cancel
                        </button>
                      )}
                    </td>

                    {/* Operational State Mutation Controls (Edit) */}
                    <td className="p-2 text-center whitespace-nowrap">
                      <Link to={`/editbank/${bank._id}`}>
                        <button type="button" className="inline-flex items-center gap-1 bg-[#132c51] hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] text-white text-xs font-bold px-3 py-2 rounded-lg border border-slate-950 shadow-sm transition-all hover:scale-[1.03]">
                          <FaEdit className="text-[11px]" />
                          <span>Edit</span>
                        </button>
                      </Link>
                    </td>

                    {/* Operational Record Destruct Control Terminal (Delete) */}
                    <td className="p-2 pr-4 text-center whitespace-nowrap">
                      <button 
                        type="button" 
                        onClick={() => handleSubmit(bank._id)}
                        className="inline-flex items-center gap-1 bg-[#4a2032] hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] text-white text-xs font-bold px-3 py-2 rounded-lg border border-slate-950 shadow-sm transition-all hover:scale-[1.03]"
                      >
                        <FaTrashAlt className="text-[11px]" />
                        <span>Delete</span>
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
          
          {/* Fallback Display Block for Empty Datasets */}
          {bankpayments.length === 0 && (
            <div className="w-full p-12 text-center border-t border-slate-200 bg-slate-50/50">
              <FaUniversity className="mx-auto text-slate-300 text-4xl mb-3" />
              <p className="text-slate-500 font-bold text-sm uppercase tracking-wide">
                No institutional bank deposit records cataloged for this account.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default StViewBank;