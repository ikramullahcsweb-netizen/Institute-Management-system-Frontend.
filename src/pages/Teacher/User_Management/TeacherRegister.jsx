
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import loginimg from '../photos/teacherlogin.png';
// import logofull from '../../../../src/assets/step2 scientist logo.jpeg';
// import logo from '../../../../src/assets/crop logo.jfif';
// import { FaUser, FaLock, FaEnvelope, FaPhone, FaBook, FaIdCard, FaUserPlus, FaSignInAlt } from 'react-icons/fa';

// function TeacherRegister() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contactnumber: '',
//     teid: '',
//     gender: '',
//     subject: '',
//     password: ''
//   });

//   const [msg, setMsg] = useState("");
//   const [isError, setIsError] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const registerTeacher = (e) => {
//     e.preventDefault();
//     const { name, email, contactnumber, teid, gender, subject, password } = formData;

//     if (!name || !email || !contactnumber || !teid || !gender || !subject || !password) {
//       setIsError(true);
//       setMsg("Please fill in all fields.");
//       return;
//     }

//     setMsg("Creating account...");
//     setIsError(false);

//     fetch('http://localhost:3000/api/v1/teacherregister', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       credentials: 'include',
//       body: JSON.stringify({ ...formData, role: 'teacher' })
//     })
//       .then((response) => {
//         if (!response.ok) {
//           return response.json().then((data) => {
//             throw new Error(data?.message || 'Registration failed');
//           });
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setIsError(false);
//         setMsg(data?.message || "Account Created Successfully!");
//         setFormData({
//           name: '',
//           email: '',
//           contactnumber: '',
//           teid: '',
//           gender: '',
//           subject: '',
//           password: ''
//         });
//         setTimeout(() => navigate('/teacherlogin'), 1500);
//       })
//       .catch((error) => {
//         setIsError(true);
//         setMsg(error.message || "Registration failed. Email or Teacher ID may already be in use.");
//       });
//   };

//   return (
//     <div className="w-full min-h-screen bg-slate-100 flex items-center justify-center font-sans antialiased p-4">
//       <div className="w-full max-w-[1200px] min-h-[650px] bg-white rounded-3xl overflow-hidden border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] grid grid-cols-1 lg:grid-cols-2">

//         {/* Left Side: Aesthetic Banner */}
//         <div className="hidden lg:flex bg-[#DDEFE0] border-r-2 border-slate-900 items-center justify-center p-8 relative overflow-hidden">
//           <img
//             src={loginimg}
//             alt="Teacher portal"
//             className="w-full max-w-md h-auto object-contain z-10 drop-shadow-md"
//           />
//           <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
//         </div>

//         {/* Right Side: Register Form */}
//         <div className="w-full flex flex-col justify-center p-6 sm:p-10 md:p-14 space-y-6">

//           <div className="flex justify-center lg:justify-start gap-3 items-center">
//             <img src={logofull} alt="Logo Full" className="h-12 w-auto object-contain" />
//             <img src={logo} alt="Logo" className="h-12 w-auto object-contain rounded-full" />
//           </div>

//           <div className="text-center lg:text-left space-y-1.5">
//             <h1 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
//               Teacher Registration
//             </h1>
//             <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wider">
//               Create your teacher account
//             </p>
//           </div>

//           <form onSubmit={registerTeacher} className="space-y-4">

//             <div className="space-y-1.5">
//               <label className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
//                 <FaUser className="text-[#1b7a3d] text-xs" />
//                 <span>Full Name</span>
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your full name"
//                 className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#1b7a3d] transition-colors"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="space-y-1.5">
//               <label className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
//                 <FaEnvelope className="text-[#1b7a3d] text-xs" />
//                 <span>Email Address</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#1b7a3d] transition-colors"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-3">
//               <div className="space-y-1.5">
//                 <label className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
//                   <FaPhone className="text-[#1b7a3d] text-xs" />
//                   <span>Contact Number</span>
//                 </label>
//                 <input
//                   type="tel"
//                   name="contactnumber"
//                   placeholder="Phone number"
//                   className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#1b7a3d] transition-colors"
//                   value={formData.contactnumber}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="space-y-1.5">
//                 <label className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
//                   <FaIdCard className="text-[#1b7a3d] text-xs" />
//                   <span>Teacher ID</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="teid"
//                   placeholder="e.g. TE-1024"
//                   className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#1b7a3d] transition-colors"
//                   value={formData.teid}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-3">
//               <div className="space-y-1.5">
//                 <label className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
//                   <FaUser className="text-[#1b7a3d] text-xs" />
//                   <span>Gender</span>
//                 </label>
//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#1b7a3d] transition-colors cursor-pointer"
//                 >
//                   <option value="" disabled hidden>Select gender</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>

//               <div className="space-y-1.5">
//                 <label className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
//                   <FaBook className="text-[#1b7a3d] text-xs" />
//                   <span>Subject</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="subject"
//                   placeholder="e.g. Physics"
//                   className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#1b7a3d] transition-colors"
//                   value={formData.subject}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="space-y-1.5">
//               <label className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
//                 <FaLock className="text-[#1b7a3d] text-xs" />
//                 <span>Password</span>
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Create a password"
//                 className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#1b7a3d] transition-colors"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </div>

//             {/* Dynamic on-page status message */}
//             {msg && (
//               <p className={`text-center text-sm font-bold ${isError ? "text-red-500" : "text-[#1b7a3d]"}`}>
//                 {msg}
//               </p>
//             )}

//             <div className="pt-3 space-y-4">
//               <button
//                 type="submit"
//                 className="w-full bg-[#1b7a3d] hover:bg-[#155c2e] text-white text-xs font-black uppercase tracking-widest py-4 px-4 rounded-xl border-2 border-slate-950 shadow-xs flex items-center justify-center gap-2 transition-transform active:scale-[0.99]"
//               >
//                 <FaUserPlus />
//                 <span>Create Account</span>
//               </button>

//               <Link
//                 to="/teacherlogin"
//                 className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-bold uppercase tracking-wider hover:text-slate-900 transition-colors py-1 group"
//               >
//                 <FaSignInAlt className="text-xs text-slate-400 group-hover:text-[#1b7a3d] transition-colors" />
//                 <span>Already have an account? <strong className="text-[#1b7a3d] underline">Login here</strong></span>
//               </Link>
//             </div>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TeacherRegister;





// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import userpng from "./photos/User.png";
// import toast from "react-hot-toast";
// import Head from "../Header/Header";
// import Swal from "sweetalert2";

// function AddTeacher() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   function getCurrentYear() {
//     return new Date().getFullYear().toString().slice(-2);
//   }

//   function generateRandomNumber() {
//     return Math.floor(1000 + Math.random() * 9000);
//   }

//   function generateTeacherId() {
//     const year = getCurrentYear();
//     const randomNumber = generateRandomNumber();
//     return `TID${year}${randomNumber}`;
//   }

//   const [data, setData] = useState({
//     name: "",
//     teid: generateTeacherId(),
//     gender: "",
//     email: "",
//     contactnumber: "",
//     subject: "",
//     SecAnswer: "",
//     password: "",
//     repassword: "",
//   });

//   const resetForm = () => {
//     setData({
//       name: "",
//       teid: generateTeacherId(),
//       gender: "",
//       email: "",
//       contactnumber: "",
//       subject: "",
//       SecAnswer: "",
//       password: "",
//       repassword: "",
//     });
//   };

//   const addTeacher = async (e) => {
//     e.preventDefault();

//     if (!data.name || !data.email || !data.gender || !data.password) {
//       toast.error("Please fulfill all critical layout parameters");
//       return;
//     }

//     if (data.password !== data.repassword) {
//       toast.error("Passwords do not match");
//       return;
//     }

//     setLoading(true);

//     try {
//       await axios.post(
//         "http://localhost:3000/api/v1/teacherregister",
//         {
//           name: data.name,
//           email: data.email,
//           contactnumber: data.contactnumber,
//           teid: data.teid,
//           gender: data.gender,
//           subject: data.subject,
//           password: data.password,
//           SecAnswer: data.SecAnswer,
//         },
//         { withCredentials: true }
//       );

//       resetForm();

//       await Swal.fire({
//         icon: "success",
//         title: "Success",
//         text: "Teacher registered successfully in the system!",
//         confirmButtonColor: "#063a67",
//         confirmButtonText: "Continue",
//       });

//       navigate("/adminprofile");
//     } catch (error) {
//       console.error(error);
//       const errMsg =
//         error.response?.data?.message ||
//         "Could not register teacher. Email or Teacher ID may already be in use.";

//       await Swal.fire({
//         icon: "error",
//         title: "Registration Failed",
//         text: errMsg,
//         confirmButtonColor: "#063a67",
//         confirmButtonText: "Acknowledge",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gray-50 font-sans">
//       <Head />

//       <div className="ml-[290px] pt-8 px-8 pb-12 flex justify-center">
//         <div className="w-full max-w-[900px] bg-white rounded-[20px] border-2 border-gray-100 shadow-xl p-8 transition-all">
//           <div className="mb-6">
//             <p className="text-3xl font-extrabold text-[#063a67] m-0 tracking-tight">
//               Add Faculty Instructor
//             </p>
//             <p className="text-xs text-gray-400 font-semibold tracking-wider mt-1 uppercase">
//               Configure Academic Teaching Authority Profiles
//             </p>
//             <div className="w-full h-[3px] bg-gradient-to-r from-[#063a67] to-[#e6eff6] mt-3 rounded-full"></div>
//           </div>

//           <div className="flex items-center gap-5 p-4 bg-[#e6eff6] rounded-xl border border-blue-100 mb-8">
//             <div className="bg-white p-2 rounded-full border border-gray-200 shadow-sm">
//               <img src={userpng} alt="Teacher Hub" className="w-[55px] h-[55px] object-contain" />
//             </div>
//             <div>
//               <p className="text-lg font-bold text-[#063a67] m-0">Faculty Personnel Record</p>
//               <p className="text-xs text-gray-500 m-0">
//                 System ID token allocated natively on template generation lifecycle
//               </p>
//             </div>
//           </div>

//           <form onSubmit={addTeacher} className="space-y-6">
//             <div>
//               <label className="block text-[14px] font-bold text-[#063a67] mb-1.5 uppercase tracking-wide">
//                 Teacher System ID
//               </label>
//               <input
//                 type="text"
//                 className="w-full p-3 border-2 border-gray-200 rounded-xl font-mono font-bold tracking-wider text-[#063a67] bg-blue-50/40 select-none cursor-not-allowed outline-none"
//                 value={data.teid}
//                 readOnly
//               />
//             </div>

//             <div className="w-full h-[1px] bg-gray-100 my-2"></div>

//             <div>
//               <label className="block text-[14px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
//                 Full Name *
//               </label>
//               <input
//                 type="text"
//                 className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
//                 value={data.name}
//                 onChange={(e) => setData({ ...data, name: e.target.value })}
//                 placeholder="Instructor real name identity"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-[14px] font-bold text-gray-700 mb-2 uppercase tracking-wide">
//                 Gender Classification *
//               </label>
//               <div className="flex flex-wrap gap-4">
//                 <label className="flex items-center gap-3 px-5 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 font-semibold text-gray-700 cursor-pointer select-none transition-all has-[:checked]:border-[#063a67] has-[:checked]:bg-[#e6eff6] has-[:checked]:text-[#063a67]">
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="male"
//                     className="w-4 h-4 accent-[#063a67]"
//                     checked={data.gender === "male"}
//                     onChange={(e) => setData({ ...data, gender: e.target.value })}
//                   />
//                   <span>Male Faculty</span>
//                 </label>

//                 <label className="flex items-center gap-3 px-5 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 font-semibold text-gray-700 cursor-pointer select-none transition-all has-[:checked]:border-[#063a67] has-[:checked]:bg-[#e6eff6] has-[:checked]:text-[#063a67]">
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="female"
//                     className="w-4 h-4 accent-[#063a67]"
//                     checked={data.gender === "female"}
//                     onChange={(e) => setData({ ...data, gender: e.target.value })}
//                   />
//                   <span>Female Faculty</span>
//                 </label>
//               </div>
//             </div>

//             <div className="w-full h-[1px] bg-gray-100 my-2"></div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-[14px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
//                   value={data.email}
//                   onChange={(e) => setData({ ...data, email: e.target.value })}
//                   placeholder="faculty@step2scientist.com"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-[14px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
//                   Phone Number
//                 </label>
//                 <input
//                   type="number"
//                   className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
//                   value={data.contactnumber}
//                   onChange={(e) => setData({ ...data, contactnumber: e.target.value })}
//                   placeholder="Mobile verification digits"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-[14px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
//                 Assigned Subject Discipline
//               </label>
//               <input
//                 type="text"
//                 className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
//                 value={data.subject}
//                 onChange={(e) => setData({ ...data, subject: e.target.value })}
//                 placeholder="e.g. Organic Chemistry, Quantum Physics"
//               />
//             </div>

//             <div className="w-full h-[1px] bg-gray-100 my-2"></div>

//             <div>
//               <label className="block text-[14px] font-bold text-[#063a67] mb-1.5 uppercase tracking-wide bg-blue-50/50 p-2 rounded-lg border border-blue-100/40">
//                 Security Challenge: What city were you born in? *
//               </label>
//               <input
//                 type="text"
//                 className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
//                 value={data.SecAnswer}
//                 onChange={(e) => setData({ ...data, SecAnswer: e.target.value })}
//                 placeholder="Verification answer mapping"
//                 required
//               />
//             </div>

//             <div className="w-full h-[1px] bg-gray-100 my-2"></div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-[14px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
//                   Account Password *
//                 </label>
//                 <input
//                   type="password"
//                   className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
//                   value={data.password}
//                   onChange={(e) => setData({ ...data, password: e.target.value })}
//                   placeholder="••••••••"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-[14px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
//                   Confirm Passkey Check *
//                 </label>
//                 <input
//                   type="password"
//                   className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
//                   value={data.repassword}
//                   onChange={(e) => setData({ ...data, repassword: e.target.value })}
//                   placeholder="••••••••"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-gray-100 mt-8">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-full sm:w-auto text-white text-center rounded-xl px-10 py-3.5 outline-none transition-all duration-200 text-[16px] font-bold shadow-md border-none ${
//                   loading
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-[#063a67] cursor-pointer hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] hover:scale-105"
//                 }`}
//               >
//                 {loading ? "Adding..." : "Add User"}
//               </button>

//               <Link to={"/adminprofile"} className="w-full sm:w-auto no-underline">
//                 <button
//                   type="button"
//                   disabled={loading}
//                   className="w-full sm:w-auto text-gray-500 cursor-pointer bg-gray-100 hover:bg-gray-200 text-center rounded-xl px-10 py-3.5 outline-none transition-all duration-200 text-[16px] font-bold border-none disabled:cursor-not-allowed"
//                 >
//                   Cancel
//                 </button>
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default AddTeacher;



import React, { useMemo, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Head from "../Header/Header";
import userpng from "./photos/User.png";

function AddTeacher() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const generateTeacherId = () => {
    const year = new Date().getFullYear().toString().slice(-2);
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    return `TID${year}${randomNumber}`;
  };

  const initialData = useMemo(
    () => ({
      name: "",
      teid: generateTeacherId(),
      gender: "",
      email: "",
      contactnumber: "",
      subject: "",
      SecAnswer: "",
      password: "",
      repassword: "",
    }),
    []
  );

  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setData({
      name: "",
      teid: generateTeacherId(),
      gender: "",
      email: "",
      contactnumber: "",
      subject: "",
      SecAnswer: "",
      password: "",
      repassword: "",
    });
  };

  const addTeacher = async (e) => {
    e.preventDefault();

    if (
      !data.name.trim() ||
      !data.email.trim() ||
      !data.gender ||
      !data.SecAnswer.trim() ||
      !data.password ||
      !data.repassword
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    if (data.password !== data.repassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        "http://localhost:3000/api/v1/teacherregister",
        {
          name: data.name.trim(),
          email: data.email.trim(),
          contactnumber: data.contactnumber.trim(),
          teid: data.teid,
          gender: data.gender,
          subject: data.subject.trim(),
          password: data.password,
          SecAnswer: data.SecAnswer.trim(),
        },
        { withCredentials: true }
      );

      await Swal.fire({
        icon: "success",
        title: "Success",
        text: "Teacher registered successfully in the system!",
        confirmButtonColor: "#063a67",
        confirmButtonText: "Continue",
      });

      resetForm();
      navigate("/adminprofile");
    } catch (error) {
      const errMsg =
        error.response?.data?.message ||
        "Could not register teacher. Email or Teacher ID may already be in use.";

      await Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: errMsg,
        confirmButtonColor: "#063a67",
        confirmButtonText: "Acknowledge",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans w-full overflow-x-hidden">
      <Head />

      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
        <div className="w-full lg:ml-[290px] lg:w-[calc(100%-290px)]">
          <div className="w-full bg-white rounded-[20px] border-2 border-gray-100 shadow-xl p-4 sm:p-6 lg:p-8">
            <div className="mb-6">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#063a67] m-0 tracking-tight">
                Add Faculty Instructor
              </p>
              <p className="text-xs text-gray-400 font-semibold tracking-wider mt-1 uppercase">
                Configure Academic Teaching Authority Profiles
              </p>
              <div className="w-full h-[3px] bg-gradient-to-r from-[#063a67] to-[#e6eff6] mt-3 rounded-full"></div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-4 bg-[#e6eff6] rounded-xl border border-blue-100 mb-8">
              <div className="bg-white p-2 rounded-full border border-gray-200 shadow-sm">
                <img
                  src={userpng}
                  alt="Teacher Hub"
                  className="w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] object-contain"
                />
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-[#063a67] m-0">
                  Faculty Personnel Record
                </p>
                <p className="text-xs text-gray-500 m-0">
                  System ID token allocated natively on template generation lifecycle
                </p>
              </div>
            </div>

            <form onSubmit={addTeacher} className="space-y-6">
              <div>
                <label className="block text-[14px] font-bold text-[#063a67] mb-1.5 uppercase tracking-wide">
                  Teacher System ID
                </label>
                <input
                  type="text"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl font-mono font-bold tracking-wider text-[#063a67] bg-blue-50/40 select-none cursor-not-allowed outline-none"
                  value={data.teid}
                  readOnly
                />
              </div>

              <div className="w-full h-[1px] bg-gray-100 my-2"></div>

              <div>
                <label className="block text-[14px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
                  value={data.name}
                  onChange={handleChange}
                  placeholder="Instructor real name"
                  required
                />
              </div>

              <div>
                <label className="block text-[14px] font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Gender Classification *
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-3 px-5 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 font-semibold text-gray-700 cursor-pointer select-none transition-all has-[:checked]:border-[#063a67] has-[:checked]:bg-[#e6eff6] has-[:checked]:text-[#063a67]">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="w-4 h-4 accent-[#063a67]"
                      checked={data.gender === "male"}
                      onChange={handleChange}
                    />
                    <span>Male</span>
                  </label>

                  <label className="flex items-center gap-3 px-5 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 font-semibold text-gray-700 cursor-pointer select-none transition-all has-[:checked]:border-[#063a67] has-[:checked]:bg-[#e6eff6] has-[:checked]:text-[#063a67]">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="w-4 h-4 accent-[#063a67]"
                      checked={data.gender === "female"}
                      onChange={handleChange}
                    />
                    <span>Female</span>
                  </label>
                </div>
              </div>

              <div className="w-full h-[1px] bg-gray-100 my-2"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[14px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
                    value={data.email}
                    onChange={handleChange}
                    placeholder="faculty@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="contactnumber"
                    className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
                    value={data.contactnumber}
                    onChange={handleChange}
                    placeholder="Mobile number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[14px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Assigned Subject Discipline
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
                  value={data.subject}
                  onChange={handleChange}
                  placeholder="e.g. Organic Chemistry, Quantum Physics"
                />
              </div>

              <div className="w-full h-[1px] bg-gray-100 my-2"></div>

              <div>
                <label className="block text-[14px] font-bold text-[#063a67] mb-1.5 uppercase tracking-wide bg-blue-50/50 p-2 rounded-lg border border-blue-100/40">
                  Security Challenge: What city were you born in? *
                </label>
                <input
                  type="text"
                  name="SecAnswer"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
                  value={data.SecAnswer}
                  onChange={handleChange}
                  placeholder="Verification answer"
                  required
                />
              </div>

              <div className="w-full h-[1px] bg-gray-100 my-2"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[14px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                    Account Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
                    value={data.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                    Confirm Passkey Check *
                  </label>
                  <input
                    type="password"
                    name="repassword"
                    className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
                    value={data.repassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6 border-t border-gray-100 mt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full sm:w-auto text-white text-center rounded-xl px-10 py-3.5 outline-none transition-all duration-200 text-[16px] font-bold shadow-md border-none ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#063a67] cursor-pointer hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] hover:scale-105"
                  }`}
                >
                  {loading ? "Adding..." : "Add User"}
                </button>

                <Link
                  to="/adminprofile"
                  className="w-full sm:w-auto no-underline text-center text-gray-500 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-xl px-10 py-3.5 outline-none transition-all duration-200 text-[16px] font-bold"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AddTeacher;