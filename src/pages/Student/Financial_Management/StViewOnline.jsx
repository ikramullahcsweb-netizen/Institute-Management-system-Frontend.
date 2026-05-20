import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Head from '../Header/Header';
import { FaCheckCircle, FaTimesCircle, FaClock, FaTrashAlt, FaEdit, FaBan, FaGlobe } from 'react-icons/fa';

function StViewOnline() {
  const navigator = useNavigate();

  // Pure Local Mock Static Dataset Structure Models Matrix for Online Channels
  const [payments, setPayments] = useState([
    {
      _id: "6623fa9bc9a8a220af9e001",
      itnumber: "TXN-ONL-99812",
      description: "MERN Stack Premium Bundle Enrollment Fee",
      date: "2026-05-12",
      amount: "45000.00",
      status: "Approved"
    },
    {
      _id: "6623fa9bc9a8a220af9e002",
      itnumber: "TXN-ONL-99845",
      description: "Tailwind CSS Utility Shifting Lab Modules",
      date: "2026-05-19",
      amount: "12000.00",
      status: "Pending"
    },
    {
      _id: "6623fa9bc9a8a220af9e003",
      itnumber: "TXN-ONL-99877",
      description: "Cloud Integration & DevOps CI/CD Runtime",
      date: "2026-04-15",
      amount: "25000.00",
      status: "Rejected"
    }
  ]);

  // Client-Side Dynamic State Mutation Handler
  const handleDelete = (id) => {
    setPayments(prev => prev.filter(item => item._id !== id));
  };

  const handleSubmit = (id) => {
    Swal.fire({
      title: "Delete Payment",
      text: "Are you sure you want to delete the Payment Record?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3b82f6",
      cancelButtonColor: "#ef4444",
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
        background: '#1e293b',
        color: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #475569',
      },
    });

    setTimeout(() => {
      toast.dismiss();
      setTimeout(() => {
        toast.success('Payment is Deleted!', {
          style: {
            background: '#10b981',
            color: '#ffffff',
            borderRadius: '12px',
          },
          duration: 2000,
        });
        setTimeout(() => {
          navigator('/viewbank');
        }, 2500); 
      }, 2500); 
    }, 5000); 
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      <Head />
      <Toaster />

      {/* Main Container Frame with Dashboard Layout Side Alignment */}
      <div className="w-full max-w-[1400px] mx-auto px-4 pl-4 md:pl-[290px] mt-8 transition-all">
        
        {/* Step-2 Palette Title Banner Board (#C9E8EA Solid Block Setup) */}
        <div className="w-full bg-[#C9E8EA] border-2 border-slate-900 rounded-[20px] p-6 text-center shadow-sm mb-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            My Online Payment Gateways
          </h1>
        </div>

        {/* Navigation Channels Top Management Row */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button type="button" className="bg-white text-slate-900 text-xs font-bold uppercase tracking-wider px-7 py-3 rounded-xl border-2 border-slate-900 cursor-default shadow-sm">
            Online Channel
          </button>

          <Link to={'/viewbank'}>
            <button type="button" className="bg-[#384D6C] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl border-2 border-slate-900 transition-all shadow-sm hover:scale-[1.03]">
              Bank Direct Settlement
            </button>
          </Link>

          <Link to={'/viewcash'}>
            <button type="button" className="bg-[#384D6C] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl border-2 border-slate-900 transition-all shadow-sm hover:scale-[1.03]">
              Physical Cash Receipt
            </button>
          </Link>
        </div>

        {/* Fluent Responsive Clean Data Table Wrapper */}
        <div className="w-full bg-white border-2 border-slate-900 rounded-[15px] shadow-sm overflow-hidden">
          <div className="w-full overflow-x-auto block">
            <table className="w-full border-collapse text-left min-w-[950px]">
              
              {/* Table Top Base Grid Layout */}
              <thead>
                <tr className="bg-[#384D6C] border-b-2 border-slate-900">
                  <th className="p-4 text-xs font-bold text-white uppercase tracking-wider">Transaction ID</th>
                  <th className="p-4 text-xs font-bold text-white uppercase tracking-wider">Description Context</th>
                  <th className="p-4 text-xs font-bold text-white uppercase tracking-wider">Value Timestamp</th>
                  <th className="p-4 text-xs font-bold text-white uppercase tracking-wider">Quantum Amount</th>
                  <th className="p-4 text-xs font-bold text-white uppercase tracking-wider text-center">Audit Status</th>
                  <th className="p-4 text-xs font-bold text-white uppercase tracking-wider text-center" colSpan="3">Actions Suite</th>
                </tr>
              </thead>

              {/* Data Field Processing Matrix */}
              <tbody className="divide-y divide-slate-200">
                {payments.map((payment) => (
                  <tr key={payment._id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-4 text-sm font-bold text-slate-800 whitespace-nowrap">{payment.itnumber}</td>
                    <td className="p-4 text-sm text-slate-600 max-w-[320px] truncate">{payment.description}</td>
                    <td className="p-4 text-sm font-medium text-slate-600 whitespace-nowrap">{payment.date}</td>
                    <td className="p-4 text-sm font-black text-slate-900 whitespace-nowrap">Rs. {payment.amount}</td>
                    
                    {/* Visual Status Chips Engine */}
                    <td className="p-4 text-center whitespace-nowrap">
                      {payment.status === 'Approved' && (
                        <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-300 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                          <FaCheckCircle className="text-[10px]" /> Approved
                        </span>
                      )}
                      {payment.status === 'Rejected' && (
                        <span className="inline-flex items-center gap-1 bg-rose-50 text-rose-700 border border-rose-300 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                          <FaTimesCircle className="text-[10px]" /> Rejected
                        </span>
                      )}
                      {payment.status === 'Pending' && (
                        <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-300 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                          <FaClock className="text-[10px]" /> Pending
                        </span>
                      )}
                    </td>

                    {/* Operational Lifecycle Controller - Cancel */}
                    <td className="p-2 text-center whitespace-nowrap pl-4">
                      {payment.status !== 'Approved' && payment.status !== 'Rejected' ? (
                        <Link to={`/cancelonline/${payment._id}`}>
                          <button type="button" className="bg-[#136845] hover:bg-emerald-800 text-white text-xs font-bold px-3 py-2 rounded-lg border border-slate-950 shadow-sm transition-all hover:scale-[1.03]">
                            Cancel
                          </button>
                        </Link>
                      ) : (
                        <button type="button" disabled className="inline-flex items-center gap-1 bg-slate-100 text-slate-400 text-xs font-bold px-3 py-2 rounded-lg border border-slate-200 cursor-not-allowed opacity-60">
                          <FaBan className="text-[10px]" /> Cancel
                        </button>
                      )}
                    </td>

                    {/* Operational Lifecycle Controller - Edit */}
                    <td className="p-2 text-center whitespace-nowrap">
                      <Link to={`/editonline/${payment._id}`}>
                        <button type="button" className="inline-flex items-center gap-1 bg-[#132c51] hover:bg-slate-800 text-white text-xs font-bold px-3 py-2 rounded-lg border border-slate-950 shadow-sm transition-all hover:scale-[1.03]">
                          <FaEdit className="text-[11px]" />
                          <span>Edit</span>
                        </button>
                      </Link>
                    </td>

                    {/* Operational Lifecycle Controller - Delete */}
                    <td className="p-2 pr-4 text-center whitespace-nowrap">
                      <button 
                        type="button" 
                        onClick={() => handleSubmit(payment._id)}
                        className="inline-flex items-center gap-1 bg-[#4a2032] hover:bg-red-900 text-white text-xs font-bold px-3 py-2 rounded-lg border border-slate-950 shadow-sm transition-all hover:scale-[1.03]"
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

          {/* Fallback Screen for Empty State Arrays */}
          {payments.length === 0 && (
            <div className="w-full p-12 text-center border-t border-slate-200 bg-slate-50/50">
              <FaGlobe className="mx-auto text-slate-300 text-4xl mb-3" />
              <p className="text-slate-500 font-bold text-sm uppercase tracking-wide">
                No active online transactional records tracked for this pipeline profile.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default StViewOnline;