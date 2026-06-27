// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import toast, { Toaster } from 'react-hot-toast';
// import Swal from 'sweetalert2';
// import Head from '../Header/Header';
// import { FaMoneyBillWave, FaCheckCircle, FaTimesCircle, FaClock, FaTrashAlt } from 'react-icons/fa';

// function StViewCash() {
//   const navigator = useNavigate();

//   // Pure Local Mock Static Dataset Structure Models Matrix for Cash Payments
//   const [cashpayments, setCashPayments] = useState([
//     {
//       _id: "6623f99bc9a8a220af9d001",
//       itnumber: "IT23004512",
//       studentname: "Ikram Khan",
//       description: "MERN Stack On-Campus Registration Token",
//       date: "2026-05-10",
//       amount: "15000.00",
//       status: "Approved"
//     },
//     {
//       _id: "6623f99bc9a8a220af9d002",
//       itnumber: "IT23004512",
//       studentname: "Ikram Khan",
//       description: "Tailwind UI Components Lab Assessment Fee",
//       date: "2026-05-18",
//       amount: "5000.00",
//       status: "Pending"
//     },
//     {
//       _id: "6623f99bc9a8a220af9d003",
//       itnumber: "IT23004512",
//       studentname: "Ikram Khan",
//       description: "Video-Sharing App Pipeline Deployment Cost",
//       date: "2026-04-22",
//       amount: "8500.00",
//       status: "Rejected"
//     }
//   ]);

//   // Client-Side Dynamic State Mutation Handler
//   const handleDelete = (id) => {
//     setCashPayments(prev => prev.filter(item => item._id !== id));
//   };

//   const handleSubmit = (id) => {
//     Swal.fire({
//       title: "Delete Payment",
//       text: "Are you sure you want to delete the Payment Record?",
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, proceed!",
//       cancelButtonText: "Cancel",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         handleDelete(id); 
//         Swal.fire({
//           title: "Payment is Deleted",
//           icon: "success",
//         });
//         handleClick2();
//       } else {
//         Swal.fire({
//           title: "Changes are Canceled",
//           icon: "error",
//         });
//       }
//     });
//   };

//   const handleClick2 = () => {
//     toast.loading('Payment is Deleting...', {
//       style: {
//         background: '#0f172a',
//         color: '#ffffff',
//         borderRadius: '12px',
//         border: '1px solid #334155',
//       },
//     });

//     setTimeout(() => {
//       toast.dismiss();
//       setTimeout(() => {
//         toast.success('Payment is Deleted!', {
//           style: {
//             background: '#28a745',
//             color: '#ffffff',
//             borderRadius: '12px',
//           },
//           duration: 2000,
//         });
//         setTimeout(() => {
//           navigator('/viewonline');
//         }, 2500); 
//       }, 2500); 
//     }, 5000); 
//   };

//   return (
//     <div className="w-full bg-slate-50 min-h-screen pb-20">
//       <Head />
//       <Toaster />

//       {/* Responsive Structural Frame with Dashboard Layout Alignment */}
//       <div className="w-full max-w-[1400px] mx-auto px-4 pl-4 md:pl-[290px] mt-8 transition-all">
        
//         {/* Module Header Banner Board */}
//         <div className="w-full bg-gradient-to-r from-[#C9E8EA] to-[#a7dadc] border-2 border-slate-900 rounded-[22px] p-6 text-center shadow-sm mb-8">
//           <h1 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
//             My Cash Payment Records (Static Mode)
//           </h1>
//         </div>

//         {/* Navigation Controls Context Row */}
//         <div className="flex flex-wrap gap-3 mb-8">
//           <Link to={'/viewonline'}>
//             <button type="button" className="bg-[#384D6C] hover:bg-gradient-to-r hover:from-[#25c481] hover:to-[#25b7c4] text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-xl border-2 border-slate-900 transition-all shadow-sm hover:scale-[1.04]">
//               Online Channel
//             </button>
//           </Link>

//           <Link to={'/viewbank'}>
//             <button type="button" className="bg-[#384D6C] hover:bg-gradient-to-r hover:from-[#25c481] hover:to-[#25b7c4] text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-xl border-2 border-slate-900 transition-all shadow-sm hover:scale-[1.04]">
//               Bank Direct Settlement
//             </button>
//           </Link>
          
//           <button type="button" className="bg-white text-slate-900 text-xs font-black uppercase tracking-wider px-7 py-3 rounded-xl border-2 border-slate-900 cursor-default shadow-sm">
//             Physical Cash Receipt
//           </button>
//         </div>

//         {/* Responsive Table Card Shield */}
//         <div className="w-full bg-white border-2 border-slate-900 rounded-[20px] shadow-md overflow-hidden">
//           <div className="w-full overflow-x-auto block">
//             <table className="w-full border-collapse text-left min-w-[900px]">
              
//               {/* Header Grid System */}
//               <thead>
//                 <tr className="bg-[#384D6C] border-b-2 border-slate-900">
//                   <th className="p-4 text-xs font-black text-white uppercase tracking-wider">IT Number</th>
//                   <th className="p-4 text-xs font-black text-white uppercase tracking-wider">Student Name</th>
//                   <th className="p-4 text-xs font-black text-white uppercase tracking-wider">Description Context</th>
//                   <th className="p-4 text-xs font-black text-white uppercase tracking-wider">Value Timestamp</th>
//                   <th className="p-4 text-xs font-black text-white uppercase tracking-wider">Quantum Amount</th>
//                   <th className="p-4 text-xs font-black text-white uppercase tracking-wider text-center">Audit Status</th>
//                   <th className="p-4 text-xs font-black text-white uppercase tracking-wider text-center">Operation</th>
//                 </tr>
//               </thead>

//               {/* Data Rows Iterator Matrix */}
//               <tbody className="divide-y divide-slate-200">
//                 {cashpayments.map((cash) => (
//                   <tr key={cash._id} className="hover:bg-slate-50/80 transition-colors">
//                     <td className="p-4 text-sm font-bold text-slate-800 whitespace-nowrap">{cash.itnumber}</td>
//                     <td className="p-4 text-sm font-bold text-slate-700">{cash.studentname}</td>
//                     <td className="p-4 text-sm text-slate-600 max-w-[280px] truncate">{cash.description}</td>
//                     <td className="p-4 text-sm font-medium text-slate-600 whitespace-nowrap">{cash.date}</td>
//                     <td className="p-4 text-sm font-black text-slate-900 whitespace-nowrap">Rs. {cash.amount}</td>
                    
//                     {/* Visual Status Chips Badge Generator */}
//                     <td className="p-4 text-center whitespace-nowrap">
//                       {cash.status === 'Approved' && (
//                         <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-300 text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
//                           <FaCheckCircle className="text-[10px]" /> Approved
//                         </span>
//                       )}
//                       {cash.status === 'Rejected' && (
//                         <span className="inline-flex items-center gap-1 bg-rose-50 text-rose-700 border border-rose-300 text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
//                           <FaTimesCircle className="text-[10px]" /> Rejected
//                         </span>
//                       )}
//                       {cash.status === 'Pending' && (
//                         <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-300 text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
//                           <FaClock className="text-[10px]" /> Pending
//                         </span>
//                       )}
//                     </td>

//                     {/* Operational Record Destruct Control Action */}
//                     <td className="p-4 text-center whitespace-nowrap">
//                       <button 
//                         type="button" 
//                         onClick={() => handleSubmit(cash._id)}
//                         className="inline-flex items-center gap-1 bg-[#4a2032] hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] text-white text-xs font-bold px-4 py-2 rounded-lg border border-slate-950 shadow-sm transition-all hover:scale-[1.03]"
//                       >
//                         <FaTrashAlt className="text-[11px]" />
//                         <span>Delete</span>
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>

//             </table>
//           </div>

//           {/* Fallback Display Block for Empty Cash Arrays */}
//           {cashpayments.length === 0 && (
//             <div className="w-full p-12 text-center border-t border-slate-200 bg-slate-50/50">
//               <FaMoneyBillWave className="mx-auto text-slate-300 text-4xl mb-3" />
//               <p className="text-slate-500 font-bold text-sm uppercase tracking-wide">
//                 No physical cash ledger vouchers listed for this profile account.
//               </p>
//             </div>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// }

// export default StViewCash;

import React, { useEffect, useState } from 'react';
import{Link} from 'react-router-dom';
import './stviewcash.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Head from '../Header/Header';


function StViewCash() {

  const[cashpayments , setCashPayments] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/studentprofile')
      .then((res) => {
        const itnum = res.data.stdid;
        axios.get('/displaycash')
          .then((res) => {
            const paymentitnumber = res.data.filter(payment => payment.itnumber === itnum );
            setCashPayments(paymentitnumber);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/deletecash/' + id)
      .then((res) => {
       
      })
      .catch((err) => console.error(err));
  }
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
        handleDelete(id); // Call handleDelete function with payment ID
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
        background: 'black', // Customize the background color
        color: '#ffffff', // Customize the text color
        borderRadius: '10px', // Add border radius
        border: '2px solid #ffffff', // Add border
      },
    });
  
    setTimeout(() => {
      toast.dismiss();
      setTimeout(() => {
        toast.success('Payment is Deleted!', {
          style: {
            background: '#28a745', // Green background color
            color: '#ffffff', // White text color
            borderRadius: '10px', // Rounded corners
            border: '2px solid #ffffff', // White border
          },
          duration: 2000, // Display duration in milliseconds (3 seconds)
          iconTheme: {
            primary: '#ffffff', // White icon color
            secondary: '#28a745', // Green icon color
          },
        });
        setTimeout(() => {
          navigator('/viewonline');
        }, 2500); // Wait for 2 seconds after displaying success toast before navigating
      }, 2500); // Wait for 2 seconds after dismissing loading toast before displaying success toast
    }, 5000); // Wait for 5 seconds before dismissing loading toast
  };

  return (
    <div>
      <Head/>
      <Toaster/>
      <div className='bodyvc'>
      <h1 className='h1vc'><br/>My Payments</h1>
     
 
      <Link to = {'/viewonline'} >
      <button type="submit" name="online" className="buttonvc1">Online</button>
      </Link>
      <br />
      <Link to = {'/viewbank'} >
      <button type="submit" name="bank" className="buttonvc2">Bank</button>
      </Link>
      <br />
      <button type="submit" name="cash" className="buttonvc3">Cash</button>
      <br />
      <div className="tbl-headervc">
        <table className='tabletc'>
          <thead>
            <tr>
              <th className='thvc'>IT Number</th>
              <th className='thvc'>Student Name</th>
              <th className='thvc'>Description</th>
              <th className='thvc'>Date</th>
              <th className='thvc'>Amount</th>
              <th className='thvc'>Status</th>
              <th className='thvc'>Action</th>
              
            </tr>
          </thead>
        </table >
      </div>
      <div className="tbl-contentvc">
        <table className='tabletc'>
          <tbody>

          {cashpayments.map((cash) =>(

            <tr>
              <td className='tdvc'>{cash.itnumber}</td>
              <td className='tdvc'>{cash.studentname}</td>
              <td className='tdvc'>{cash.description}</td>
              <td className='tdvc'>{cash.date}</td>
              <td className='tdvc'>{cash.amount}</td>
              <td className='tdvc' style={{ color: cash.status === 'Approved' ? 'green' : cash.status === 'Rejected' ? 'red' : cash.status === 'Pending' ? 'blue' : 'inherit' }}>{cash.status}</td>

              <td className='tdvc'>
                <input className="buttonvc6" type="button" name="delete" value="Delete"   onClick={() => handleSubmit(cash._id)} />
              </td>
            </tr>

          ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default StViewCash
