// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './stviewonline.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import toast, { Toaster } from 'react-hot-toast';
// import Swal from 'sweetalert2';
// import Head from '../Header/Header';

// function StViewOnline() {
//   const [payments, setPayments] = useState([]);
//   const navigator = useNavigate();

//   useEffect(() => {
//     axios.get('/studentprofile')
//       .then((res) => {
//         const itnum = res.data.stdid;
//         axios.get('/displayonline')
//           .then((res) => {
//             const paymentitnumber = res.data.filter(payment => payment.itnumber === itnum );
//             setPayments(paymentitnumber);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const handleDelete = (id) => {
//     axios.delete('http://localhost:3000/deletepayment/' + id)
//       .then((res) => {
//         // Handle success if needed
//       })
//       .catch((err) => console.error(err));
//   }

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
//         handleDelete(id); // Call handleDelete function with payment ID
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
//         background: 'black',
//         color: '#ffffff',
//         borderRadius: '10px',
//         border: '2px solid #ffffff',
//       },
//     });

//     setTimeout(() => {
//       toast.dismiss();
//       setTimeout(() => {
//         toast.success('Payment is Deleted!', {
//           style: {
//             background: '#28a745',
//             color: '#ffffff',
//             borderRadius: '10px',
//             border: '2px solid #ffffff',
//           },
//           duration: 2000,
//           iconTheme: {
//             primary: '#ffffff',
//             secondary: '#28a745',
//           },
//         });
//         setTimeout(() => {
//           navigator('/viewbank');
//         }, 2500);
//       }, 2500);
//     }, 5000);
//   };

//   return (
//     <div>
//       <Head />
//       <Toaster />
//       <div className='bodyvo'>
//         <h1 className='h1vo'><br />My Payments</h1>
//         <button type="submit" name="online" className="buttonvo1">Online</button> <br />
//         <Link to={'/viewbank'} >
//           <button type="submit" name="bank" className="buttonvo2">Bank</button>
//         </Link>
//         <br />
//         <Link to={'/viewcash'} >
//           <button type="submit" name="cash" className="buttonvo3">Cash</button>
//         </Link>
//         <br />
//         <div className="tbl-headervo">
//           <table className='tablevo'>
//             <thead>
//               <tr>
//                 <th className='thvo'>Transactions ID</th>                
//                 <th className='thvo'>Description</th>
//                 <th className='thvo'>Date</th>
//                 <th className='thvo'>Amount</th>
//                 <th className='thvo'>Status</th>
//                 <th className='thvo'>Action</th>
//                 <th className='thvo'></th>
//                 <th className='thvo'></th>
//               </tr>
//             </thead>
//           </table>
//         </div>
//         <div className="tbl-contentvo">
//           <table className='tablevo'>
//             <tbody>
//               {payments.map((payment) => (
//                 <tr key={payment._id}>
//                   <td className='tdvo'>{payment.itnumber}</td>                  
//                   <td className='tdvo'>{payment.description}</td>
//                   <td className='tdvo4'>{payment.date}</td>
//                   <td className='tdvo5'>{payment.amount}</td>
//                   <td className='tdvo' style={{ color: payment.status === 'Approved' ? 'green' : payment.status === 'Rejected' ? 'red' : payment.status === 'Pending' ? 'blue' : 'inherit' }}>{payment.status}</td>
//                   <td className='tdvo'>
//                     {payment.status !== 'Approved' && payment.status !== 'Rejected' ? (
//                       <Link to={`/cancelonline/${payment._id}`} >
//                         <input className="buttonvo4" type="button" name="cancel" value="Cancel" />
//                       </Link>
//                     ) : (
//                       <input className="buttonvo7" type="button" name="cancel" value="Cancel" disabled />
//                     )}
//                   </td>
//                   <td className='tdvo'>
//                     <Link to={`/editonline/${payment._id}`} >
//                       <input className="buttonvo5" type="button" name="edit" value="Edit" />
//                     </Link>
//                   </td>
//                   <td className='tdvo'>
//                     <input className="buttonvo6" type="button" name="delete" value="Delete" onClick={() => handleSubmit(payment._id)} />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StViewOnline;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import toast, { Toaster } from 'react-hot-toast';
// import Swal from 'sweetalert2';
// import Head from '../Header/Header';

// function StViewOnline() {
//   const [payments, setPayments] = useState([]);
//   const navigator = useNavigate();

//   useEffect(() => {
//     axios.get('/studentprofile')
//       .then((res) => {
//         const itnum = res.data.stdid;
//         axios.get('/displayonline')
//           .then((res) => {
//             const paymentitnumber = res.data.filter(payment => payment.itnumber === itnum);
//             setPayments(paymentitnumber);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const handleDelete = (id) => {
//     axios.delete('http://localhost:3000/deletepayment/' + id)
//       .then((res) => {
//         // Handle success if needed
//       })
//       .catch((err) => console.error(err));
//   }

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
//         background: 'black',
//         color: '#ffffff',
//         borderRadius: '10px',
//         border: '2px solid #ffffff',
//       },
//     });

//     setTimeout(() => {
//       toast.dismiss();
//       setTimeout(() => {
//         toast.success('Payment is Deleted!', {
//           style: {
//             background: '#28a745',
//             color: '#ffffff',
//             borderRadius: '10px',
//             border: '2px solid #ffffff',
//           },
//           duration: 2000,
//           iconTheme: {
//             primary: '#ffffff',
//             secondary: '#28a745',
//           },
//         });
//         setTimeout(() => {
//           navigator('/viewbank');
//         }, 2500);
//       }, 2500);
//     }, 5000);
//   };

//   return (
//     <div>
//       <Head />
//       <Toaster />
//       <div className="md:ml-[240px] ml-0 mb-24 font-sans px-4 md:px-0">
//         <h1 className="no-underline text-black w-full md:w-[1350px] max-w-full h-auto md:h-[122px] bg-[#C9E8EA] rounded-[20px] text-center border-2 border-black mt-4 md:mt-0 flex items-center justify-center text-lg md:text-2xl font-bold py-6 md:py-0">
//           My Payments
//         </h1>

//         <div className="mt-2.5 flex flex-wrap gap-2">
//           <button
//             type="submit"
//             name="online"
//             className="text-black bg-white text-center rounded-xl px-6 md:px-[30px] py-[11px] outline-none transition-all duration-300 text-sm md:text-[15px] font-bold border-2 border-black cursor-pointer"
//           >
//             Online
//           </button>

//           <Link to={'/viewbank'}>
//             <button
//               type="submit"
//               name="bank"
//               className="text-white bg-[#384D6C] text-center rounded-xl px-6 md:px-[35px] py-[11px] outline-none transition-all duration-300 text-sm md:text-[15px] font-bold border-2 border-black cursor-pointer hover:bg-gradient-to-r hover:from-[#25c481] hover:to-[#25b7c4] hover:scale-[1.06]"
//             >
//               Bank
//             </button>
//           </Link>

//           <Link to={'/viewcash'}>
//             <button
//               type="submit"
//               name="cash"
//               className="text-white bg-[#384D6C] text-center rounded-xl px-6 md:px-[35px] py-[11px] outline-none transition-all duration-300 text-sm md:text-[15px] font-bold border-2 border-black cursor-pointer hover:bg-gradient-to-r hover:from-[#25c481] hover:to-[#25b7c4] hover:scale-[1.06]"
//             >
//               Cash
//             </button>
//           </Link>
//         </div>

//         <div className="overflow-x-auto w-full md:w-[1350px] max-w-full mt-5 border-2 border-black rounded-t-2xl bg-[#384D6C]">
//           <table className="w-full min-w-[900px] table-fixed border-collapse">
//             <thead>
//               <tr>
//                 <th className="px-4 md:px-5 py-[18px] text-left text-sm md:text-lg text-white font-bold">Transactions ID</th>
//                 <th className="px-4 md:px-5 py-[18px] text-left text-sm md:text-lg text-white font-bold">Description</th>
//                 <th className="px-4 md:px-5 py-[18px] text-left text-sm md:text-lg text-white font-bold">Date</th>
//                 <th className="px-4 md:px-5 py-[18px] text-left text-sm md:text-lg text-white font-bold">Amount</th>
//                 <th className="px-4 md:px-5 py-[18px] text-left text-sm md:text-lg text-white font-bold">Status</th>
//                 <th className="px-4 md:px-5 py-[18px] text-left text-sm md:text-lg text-white font-bold">Action</th>
//                 <th className="px-4 md:px-5 py-[18px] text-left text-sm md:text-lg text-white font-bold"></th>
//                 <th className="px-4 md:px-5 py-[18px] text-left text-sm md:text-lg text-white font-bold"></th>
//               </tr>
//             </thead>
//           </table>
//         </div>

//         <div





import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Head from '../Header/Header';

function StViewOnline() {
  const [payments, setPayments] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    axios.get('/studentprofile')
      .then((res) => {
        const itnum = res.data.stdid;
        axios.get('/displayonline')
          .then((res) => {
            const paymentitnumber = res.data.filter(payment => payment.itnumber === itnum);
            setPayments(paymentitnumber);
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
    axios.delete('http://localhost:3000/deletepayment/' + id)
      .then((res) => {
        // Handle success if needed
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
        background: 'black',
        color: '#ffffff',
        borderRadius: '10px',
        border: '2px solid #ffffff',
      },
    });

    setTimeout(() => {
      toast.dismiss();
      setTimeout(() => {
        toast.success('Payment is Deleted!', {
          style: {
            background: '#28a745',
            color: '#ffffff',
            borderRadius: '10px',
            border: '2px solid #ffffff',
          },
          duration: 2000,
          iconTheme: {
            primary: '#ffffff',
            secondary: '#28a745',
          },
        });
        setTimeout(() => {
          navigator('/viewbank');
        }, 2500);
      }, 2500);
    }, 5000);
  };

  return (
    <div>
      <Head />
      <Toaster />
      <div className="md:ml-[280px] ml-0 mb-24 font-sans px-4 md:px-0">
        <h1 className="no-underline text-black w-full md:w-[1350px] max-w-full h-auto md:h-[122px] bg-[#C9E8EA] rounded-[20px] text-center border-2 border-black mt-4 md:mt-0 flex items-center justify-center text-lg md:text-2xl font-bold py-6 md:py-0">
          My Payments
        </h1>

        <div className="mt-2.5 flex flex-wrap gap-2">
          <button
            type="submit"
            name="online"
            className="text-black bg-white text-center rounded-xl px-6 md:px-[30px] py-[11px] outline-none transition-all duration-300 text-sm md:text-[15px] font-bold border-2 border-black cursor-pointer"
          >
            Online
          </button>

          <Link to={'/viewbank'}>
            <button
              type="submit"
              name="bank"
              className="text-white bg-[#384D6C] text-center rounded-xl px-6 md:px-[35px] py-[11px] outline-none transition-all duration-300 text-sm md:text-[15px] font-bold border-2 border-black cursor-pointer hover:bg-gradient-to-r hover:from-[#25c481] hover:to-[#25b7c4] hover:scale-[1.06]"
            >
              Bank
            </button>
          </Link>

          <Link to={'/viewcash'}>
            <button
              type="submit"
              name="cash"
              className="text-white bg-[#384D6C] text-center rounded-xl px-6 md:px-[35px] py-[11px] outline-none transition-all duration-300 text-sm md:text-[15px] font-bold border-2 border-black cursor-pointer hover:bg-gradient-to-r hover:from-[#25c481] hover:to-[#25b7c4] hover:scale-[1.06]"
            >
              Cash
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto w-full md:w-[1350px] max-w-full mt-5 border-2 border-black rounded-t-2xl bg-[#384D6C]">
          <table className="w-full min-w-[900px] table-fixed border-collapse">
            <thead>
              <tr>
                <th className="px-4 md:px-5 py-[18px] text-left text-sm md:text-lg text-white font-bold">Transactions ID</th>
                <th className="px-4 md:px-5 py-[18px] text-left text-sm md:text-lg text-white font-bold">Description</th>
                <th className="px-4 md:px-5 py-[18px] text-left text-sm md:text-lg text-white font-bold">Date</th>
                <th className="px-4 md:px-5 py-[18px] text-left text-sm md:text-lg text-white font-bold">Amount</th>
                <th className="px-4 md:px-5 py-[18px] text-left text-sm md:text-lg text-white font-bold">Status</th>
                <th className="px-4 md:px-5 py-[18px] text-left text-sm md:text-lg text-white font-bold">Action</th>
                <th className="px-4 md:px-5 py-[18px] text-left text-sm md:text-lg text-white font-bold"></th>
                <th className="px-4 md:px-5 py-[18px] text-left text-sm md:text-lg text-white font-bold"></th>
              </tr>
            </thead>
          </table>
        </div>

        <div className="overflow-x-auto w-full md:w-[1350px] max-w-full h-[333px] border-2 border-black rounded-b-2xl">
          <table className="w-full min-w-[900px] table-fixed border-collapse">
            <tbody>
              {payments.map((payment) => (
                <tr key={payment._id}>
                  <td className="px-4 md:px-5 py-[18px] text-left text-sm md:text-[15px] text-black font-bold border-b-2 border-[#384D6C]">
                    {payment.itnumber}
                  </td>
                  <td className="px-4 md:px-5 py-[18px] text-left text-sm md:text-[15px] text-black font-bold border-b-2 border-[#384D6C]">
                    {payment.description}
                  </td>
                  <td className="px-4 md:px-5 py-[18px] text-left text-sm md:text-[15px] text-black font-bold border-b-2 border-[#384D6C]">
                    {payment.date}
                  </td>
                  <td className="px-4 md:px-[35px] py-[18px] text-left text-sm md:text-[15px] text-black font-bold border-b-2 border-[#384D6C]">
                    {payment.amount}
                  </td>
                  <td
                    className="px-4 md:px-5 py-[18px] text-left text-sm md:text-[15px] font-bold border-b-2 border-[#384D6C]"
                    style={{
                      color:
                        payment.status === 'Approved'
                          ? 'green'
                          : payment.status === 'Rejected'
                          ? 'red'
                          : payment.status === 'Pending'
                          ? 'blue'
                          : 'inherit',
                    }}
                  >
                    {payment.status}
                  </td>
                  <td className="px-4 md:px-5 py-[18px] text-left border-b-2 border-[#384D6C]">
                    {payment.status !== 'Approved' && payment.status !== 'Rejected' ? (
                      <Link to={`/cancelonline/${payment._id}`}>
                        <input
                          className="text-white bg-[#136845] text-center rounded-xl px-[15px] py-[10px] outline-none transition-all duration-300 text-sm md:text-[15px] font-bold border-2 border-black cursor-pointer hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] hover:scale-[1.06]"
                          type="button"
                          name="cancel"
                          value="Cancel"
                        />
                      </Link>
                    ) : (
                      <input
                        className="text-black bg-white text-center rounded-xl px-[15px] py-[10px] outline-none text-sm md:text-[15px] font-bold border-2 border-black"
                        type="button"
                        name="cancel"
                        value="Cancel"
                        disabled
                      />
                    )}
                  </td>
                  <td className="px-4 md:px-5 py-[18px] text-left border-b-2 border-[#384D6C]">
                    <Link to={`/editonline/${payment._id}`}>
                      <input
                        className="text-white bg-[#132c51] text-center rounded-xl px-[25px] py-[10px] outline-none transition-all duration-300 text-sm md:text-[15px] font-bold border-2 border-black cursor-pointer hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] hover:scale-[1.06]"
                        type="button"
                        name="edit"
                        value="Edit"
                      />
                    </Link>
                  </td>
                  <td className="px-4 md:px-5 py-[18px] text-left border-b-2 border-[#384D6C]">
                    <input
                      className="text-white bg-[#4a2032] text-center rounded-xl px-[15px] py-[10px] outline-none transition-all duration-300 text-sm md:text-[15px] font-bold border-2 border-black cursor-pointer hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] hover:scale-[1.06]"
                      type="button"
                      name="delete"
                      value="Delete"
                      onClick={() => handleSubmit(payment._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StViewOnline;