
// // // import React, { useState } from 'react';
// // // import { toast } from 'react-hot-toast';
// // // import { useNavigate, Link } from 'react-router-dom';
// // // import loginimg from './photos/teacherlogin.png';
// // // import logofull from '../../../../src/assets/step2 scientist logo.jpeg';
// // // import logo from '../../../../src/assets/crop logo.jfif';

// // // function TeacherLogin() {
// // //   const navigate = useNavigate();
// // //   const [data, setData] = useState({
// // //     username: '',
// // //     password: ''
// // //   });

// // //   const loginTeacher = (e) => {
// // //     e.preventDefault();
// // //     const { username, password } = data;

// // //     if (!username || !password) {
// // //       toast.error("Please fill in all fields");
// // //       return;
// // //     }

// // //     // Logic: InshaAllah yahan aap apni API call implement karenge
// // //     toast.success("Logged in successfully!");
// // //     navigate('/teacherprofile');
// // //   };

// // //   return (
// // //     <main className="w-full h-screen flex font-sans overflow-hidden bg-slate-50">
      
// // //       {/* LEFT PANEL: Sticky Image with Text Overlay */}
// // //       <div className="hidden md:block w-1/2 h-screen sticky top-0 bg-[#13293d] relative">
// // //         <img 
// // //           src={loginimg} 
// // //           alt='Teacher Login' 
// // //           className="w-full h-full object-cover" 
// // //         />
        
// // //         <div className="absolute inset-0 bg-black/30 z-10" />

// // //         <div className="absolute bottom-12 left-12 z-20 text-white">
// // //           <p className="text-xs font-bold tracking-widest uppercase text-[#10a1b6] mb-2">
// // //             Academic Operations Center
// // //           </p>
// // //           <h2 className="text-3xl font-black uppercase leading-tight max-w-[400px]">
// // //             Step 2 Scientist Teacher Portal
// // //           </h2>
// // //         </div>
// // //       </div>

// // //       {/* RIGHT PANEL: Scrollable Form Section */}
// // //       <div className="flex-1 h-screen overflow-y-auto flex items-center justify-center p-6">
        
// // //         <form 
// // //           onSubmit={loginTeacher} 
// // //           className="w-full max-w-[500px] bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
// // //         >
// // //           {/* Header with Both Logos */}
// // //           <div className="flex flex-col items-center text-center mb-8">
// // //             <div className="flex gap-2 items-center justify-center mb-6">
// // //               <img src={logofull} alt="Logo Full" className="h-16 w-auto object-contain" />
// // //               <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
// // //             </div>
// // //             <h1 className="text-xl font-bold text-slate-800">Welcome Back</h1>
// // //             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">
// // //               Sign in to access your dashboard
// // //             </p>
// // //           </div>

// // //           {/* Form Fields */}
// // //           <div className="space-y-5 w-full">
// // //             <div>
// // //               <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Username</label>
// // //               <input 
// // //                 type="text" 
// // //                 placeholder="Enter your username" 
// // //                 className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#10a1b6] transition-all" 
// // //                 value={data.username} 
// // //                 onChange={(e) => setData({...data, username: e.target.value})}
// // //                 required
// // //               />
// // //             </div>

// // //             <div>
// // //               <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Password</label>
// // //               <input 
// // //                 type="password" 
// // //                 placeholder="Enter your password" 
// // //                 className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#10a1b6] transition-all" 
// // //                 value={data.password} 
// // //                 onChange={(e) => setData({...data, password: e.target.value})}
// // //                 required
// // //               />
// // //             </div>

// // //             <div className="flex justify-end">
// // //               <Link 
// // //                 to='/teacherforgetpassword' 
// // //                 className="text-[10px] text-slate-500 hover:text-[#10a1b6] font-bold uppercase tracking-widest underline"
// // //               >
// // //                 Forgot Password?
// // //               </Link>
// // //             </div>

// // //             <button 
// // //               type="submit" 
// // //               className="w-full bg-slate-800 hover:bg-[#10a1b6] text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all shadow-md active:scale-[0.98] mt-2"
// // //             >
// // //               Login
// // //             </button>

// // //             <div className="text-center pt-2">
// // //               <Link 
// // //                 to='/adminmanagerlogin' 
// // //                 className="text-[10px] text-slate-400 hover:text-slate-600 font-bold uppercase tracking-widest transition-all"
// // //               >
// // //                 Manager/Admin Login
// // //               </Link>
// // //             </div>
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </main>
// // //   );
// // // }

// // // export default TeacherLogin;




// // import React, { useState } from 'react';
// // import { toast } from 'react-hot-toast';
// // import { useNavigate, Link } from 'react-router-dom';
// // import loginimg from './photos/teacherlogin.png';
// // import logofull from '../../../../src/assets/step2 scientist logo.jpeg';
// // import logo from '../../../../src/assets/crop logo.jfif';

// // function TeacherLogin() {
// //   const navigate = useNavigate();
// //   const [data, setData] = useState({
// //     username: '', // Note: Backend par agar email field hai, toh api call mein isey adjust kiya ja sakta hai
// //     password: ''
// //   });
// //   const [isLoading, setIsLoading] = useState(false);

// //   const loginTeacher = (e) => {
// //     e.preventDefault();
// //     const { username, password } = data;

// //     if (!username || !password) {
// //       toast.error("Please fill in all fields");
// //       return;
// //     }

// //     setIsLoading(true);
// //     const toastId = toast.loading("Authenticating...");

// //     fetch('http://localhost:3000/api/auth/teacherlogin', {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       credentials: 'include',
// //       body: JSON.stringify({ username, password })
// //     })
// //       .then((response) => {
// //         if (!response.ok) {
// //           return response.json().then((errData) => {
// //             throw new Error(errData?.message || 'Login failed');
// //           });
// //         }
// //         return response.json();
// //       })
// //       .then((resData) => {
// //         setIsLoading(false);
// //         toast.success(resData?.message || "Logged in successfully!", { id: toastId });
        
// //         // Agar aap login session token local storage mein save karte hain, toh yahan save karein:
// //         // localStorage.setItem('token', resData?.token);

// //         setTimeout(() => navigate('/teacherprofile'), 1000);
// //       })
// //       .catch((error) => {
// //         setIsLoading(false);
// //         toast.error(error.message || "Invalid credentials. Please try again.", { id: toastId });
// //       });
// //   };

// //   return (
// //     <main className="w-full h-screen flex font-sans overflow-hidden bg-slate-50">
      
// //       {/* LEFT PANEL: Sticky Image with Text Overlay */}
// //       <div className="hidden md:block w-1/2 h-screen sticky top-0 bg-[#13293d] relative">
// //         <img 
// //           src={loginimg} 
// //           alt='Teacher Login' 
// //           className="w-full h-full object-cover" 
// //         />
        
// //         <div className="absolute inset-0 bg-black/30 z-10" />

// //         <div className="absolute bottom-12 left-12 z-20 text-white">
// //           <p className="text-xs font-bold tracking-widest uppercase text-[#10a1b6] mb-2">
// //             Academic Operations Center
// //           </p>
// //           <h2 className="text-3xl font-black uppercase leading-tight max-w-[400px]">
// //             Step 2 Scientist Teacher Portal
// //           </h2>
// //         </div>
// //       </div>

// //       {/* RIGHT PANEL: Scrollable Form Section */}
// //       <div className="flex-1 h-screen overflow-y-auto flex items-center justify-center p-6">
        
// //         <form 
// //           onSubmit={loginTeacher} 
// //           className="w-full max-w-[500px] bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
// //         >
// //           {/* Header with Both Logos */}
// //           <div className="flex flex-col items-center text-center mb-8">
// //             <div className="flex gap-2 items-center justify-center mb-6">
// //               <img src={logofull} alt="Logo Full" className="h-16 w-auto object-contain" />
// //               <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
// //             </div>
// //             <h1 className="text-xl font-bold text-slate-800">Welcome Back</h1>
// //             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">
// //               Sign in to access your dashboard
// //             </p>
// //           </div>

// //           {/* Form Fields */}
// //           <div className="space-y-5 w-full">
// //             <div>
// //               <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Username</label>
// //               <input 
// //                 type="text" 
// //                 placeholder="Enter your username" 
// //                 className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#10a1b6] transition-all" 
// //                 value={data.username} 
// //                 onChange={(e) => setData({...data, username: e.target.value})}
// //                 disabled={isLoading}
// //                 required
// //               />
// //             </div>

// //             <div>
// //               <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Password</label>
// //               <input 
// //                 type="password" 
// //                 placeholder="Enter your password" 
// //                 className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#10a1b6] transition-all" 
// //                 value={data.password} 
// //                 onChange={(e) => setData({...data, password: e.target.value})}
// //                 disabled={isLoading}
// //                 required
// //               />
// //             </div>

// //             <div className="flex justify-end">
// //               <Link 
// //                 to='/teacherforgetpassword' 
// //                 className="text-[10px] text-slate-500 hover:text-[#10a1b6] font-bold uppercase tracking-widest underline"
// //               >
// //                 Forgot Password?
// //               </Link>
// //             </div>

// //             <button 
// //               type="submit" 
// //               disabled={isLoading}
// //               className="w-full bg-slate-800 hover:bg-[#10a1b6] text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all shadow-md active:scale-[0.98] mt-2 disabled:bg-slate-400 disabled:cursor-not-allowed"
// //             >
// //               {isLoading ? "Logging in..." : "Login"}
// //             </button>

// //             <div className="text-center pt-2">
// //               <Link 
// //                 to='/adminmanagerlogin' 
// //                 className="text-[10px] text-slate-400 hover:text-slate-600 font-bold uppercase tracking-widest transition-all"
// //               >
// //                 Manager/Admin Login
// //               </Link>
// //             </div>
// //           </div>
// //         </form>
// //       </div>
// //     </main>
// //   );
// // }

// // export default TeacherLogin;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import loginimg from './photos/teacherlogin.png';
// import logofull from '../../../../src/assets/step2 scientist logo.jpeg';
// import logo from '../../../../src/assets/crop logo.jfif';

// function TeacherLogin() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email_address: '', // Backend matching parameter
//     password: ''
//   });

//   const [msg, setMsg] = useState("");
//   const [isError, setIsError] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const loginTeacher = (e) => {
//     e.preventDefault();
//     const { email_address, password } = formData;

//     if (!email_address || !password) {
//       setIsError(true);
//       setMsg("Please fill in all fields.");
//       return;
//     }

//     setMsg("Checking credentials...");
//     setIsError(false);

//     // API hits your universal authentication route
//     fetch('http://localhost:3000/api/v1/teacherlogin', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       credentials: 'include',
//       body: JSON.stringify({
//         email_address: email_address.toLowerCase(),
//         password: password
//       })
//     })
//       .then((response) => {
//         if (!response.ok) {
//           return response.json().then((data) => {
//             throw new Error(data?.message || 'Login verification failed');
//           });
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setIsError(false);
//         setMsg(data?.message || "Logged in successfully!");
        
//         // Save access tokens to localStorage if needed
//         if (data?.data?.accessToken) {
//           localStorage.setItem('accessToken', data.data.accessToken);
//         }

//         setFormData({
//           email_address: '',
//           password: ''
//         });
//         setTimeout(() => navigate('/teacherprofile'), 1500);
//       })
//       .catch((error) => {
//         setIsError(true);
//         setMsg(error.message || "Invalid email or password. Please try again.");
//       });
//   };

//   return (
//     <main className="w-full h-screen flex font-sans overflow-hidden bg-slate-50">
      
//       {/* LEFT PANEL: Sticky Image with Text Overlay */}
//       <div className="hidden md:block w-1/2 h-screen sticky top-0 bg-[#13293d] relative">
//         <img 
//           src={loginimg} 
//           alt='Teacher Login' 
//           className="w-full h-full object-cover" 
//         />
//         <div className="absolute inset-0 bg-black/30 z-10" />
//         <div className="absolute bottom-12 left-12 z-20 text-white">
//           <p className="text-xs font-bold tracking-widest uppercase text-[#10a1b6] mb-2">
//             Academic Operations Center
//           </p>
//           <h2 className="text-3xl font-black uppercase leading-tight max-w-[400px]">
//             Step 2 Scientist Teacher Portal
//           </h2>
//         </div>
//       </div>

//       {/* RIGHT PANEL: Scrollable Form Section */}
//       <div className="flex-1 h-screen overflow-y-auto flex items-center justify-center p-6">
        
//         <form 
//           onSubmit={loginTeacher} 
//           className="w-full max-w-[500px] bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
//         >
//           {/* Header with Both Logos */}
//           <div className="flex flex-col items-center text-center mb-8">
//             <div className="flex gap-2 items-center justify-center mb-6">
//               <img src={logofull} alt="Logo Full" className="h-16 w-auto object-contain" />
//               <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
//             </div>
//             <h1 className="text-xl font-bold text-slate-800">Welcome Back</h1>
//             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">
//               Sign in to access your dashboard
//             </p>
//           </div>

//           {/* Dynamic Message Box - Matches TeacherRegister exactly */}
//           {msg && (
//             <div className={`p-4 rounded-xl text-xs font-bold uppercase tracking-wide text-center border-2 mb-4 ${
//               isError 
//                 ? 'bg-red-50 text-red-600 border-red-200' 
//                 : 'bg-emerald-50 text-emerald-600 border-emerald-200'
//             }`}>
//               {msg}
//             </div>
//           )}

//           {/* Form Fields */}
//           <div className="space-y-5 w-full">
//             <div>
//               <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Email Address</label>
//               <input 
//                 type="email" 
//                 name="email_address"
//                 placeholder="Enter your registered email" 
//                 className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#10a1b6] transition-all text-slate-900 font-bold" 
//                 value={formData.email_address} 
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Password</label>
//               <input 
//                 type="password" 
//                 name="password"
//                 placeholder="Enter your password" 
//                 className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#10a1b6] transition-all text-slate-900 font-bold" 
//                 value={formData.password} 
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="flex justify-end">
//               <Link 
//                 to='/teacherforgetpassword' 
//                 className="text-[10px] text-slate-500 hover:text-[#10a1b6] font-bold uppercase tracking-widest underline"
//               >
//                 Forgot Password?
//               </Link>
//             </div>

//             <button 
//               type="submit" 
//               className="w-full bg-slate-800 hover:bg-[#10a1b6] text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all shadow-md active:scale-[0.98] mt-2"
//             >
//               Login
//             </button>

//             <div className="text-center pt-2">
//               <Link 
//                 to='/adminmanagerlogin' 
//                 className="text-[10px] text-slate-400 hover:text-slate-600 font-bold uppercase tracking-widest transition-all"
//               >
//                 Manager/Admin Login
//               </Link>
//             </div>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// }

// export default TeacherLogin;

import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';

// Assets (Ensure paths are correct)
import loginimg from './photos/teacherlogin.png';
import logofull from '../../../../src/assets/step2 scientist logo.jpeg';
import logo from '../../../../src/assets/crop logo.jfif';

function TeacherLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginTeacher = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    const toastId = toast.loading("Authenticating...");

    try {
      const response = await fetch('http://localhost:3000/api/v1/teacherlogin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ 
          email: email.toLowerCase(), // Backend 'email' mang raha hai
          password 
        })
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData?.message || 'Login failed');
      }

      setIsLoading(false);
      toast.success(resData?.message || "Logged in successfully!", { id: toastId });

      // Agar token save karna ho
      if (resData?.data?.accessToken) {
        localStorage.setItem('accessToken', resData.data.accessToken);
      }

      setTimeout(() => navigate('/teacherprofile'), 1000);
      
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message || "Invalid credentials. Please try again.", { id: toastId });
    }
  };

  return (
    <main className="w-full h-screen flex font-sans overflow-hidden bg-slate-50">
      
      {/* LEFT PANEL */}
      <div className="hidden md:block w-1/2 h-screen sticky top-0 bg-[#13293d] relative">
        <img src={loginimg} alt='Teacher Login' className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute bottom-12 left-12 z-20 text-white">
          <p className="text-xs font-bold tracking-widest uppercase text-[#10a1b6] mb-2">Academic Operations Center</p>
          <h2 className="text-3xl font-black uppercase leading-tight max-w-[400px]">Step 2 Scientist Teacher Portal</h2>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 h-screen overflow-y-auto flex items-center justify-center p-6">
        <form 
          onSubmit={loginTeacher} 
          className="w-full max-w-[500px] bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex gap-2 items-center justify-center mb-6">
              <img src={logofull} alt="Logo Full" className="h-16 w-auto object-contain" />
              <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
            </div>
            <h1 className="text-xl font-bold text-slate-800">Welcome Back</h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">
              Sign in to access your dashboard
            </p>
          </div>

          <div className="space-y-5 w-full">
            {/* Email Field */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Email</label>
              <input 
                type="email" 
                name="email"
                placeholder="Enter your email" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#10a1b6] transition-all" 
                value={formData.email} 
                onChange={handleChange}
                disabled={isLoading}
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Password</label>
              <input 
                type="password" 
                name="password"
                placeholder="Enter your password" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#10a1b6] transition-all" 
                value={formData.password} 
                onChange={handleChange}
                disabled={isLoading}
                required
              />
            </div>

            <div className="flex justify-end">
              <Link to='/teacherforgetpassword' className="text-[10px] text-slate-500 hover:text-[#10a1b6] font-bold uppercase tracking-widest underline">
                Forgot Password?
              </Link>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-slate-800 hover:bg-[#10a1b6] text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all shadow-md active:scale-[0.98] mt-2 disabled:opacity-50"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>

            <div className="text-center pt-2">
              <Link to='/adminmanagerlogin' className="text-[10px] text-slate-400 hover:text-slate-600 font-bold uppercase tracking-widest transition-all">
                Manager/Admin Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default TeacherLogin;