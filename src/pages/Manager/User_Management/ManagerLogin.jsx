// import React, { useState } from "react";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import loginimg from "./photos/managerlogin.png";
// import logofull from "../../../assets/step2 scientist logo.jpeg";

// function ManagerLogin() {
//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     username: "",
//     password: "",
//   });

//   // Localized static verification event interception layout handler
//   const loginManager = async (e) => {
//     e.preventDefault();
//     const { username, password } = data;

//     if (!username || !password) {
//       toast.error("Please fill in all mandatory credentials fields.");
//       return;
//     }

//     console.log("Mock Login Token Emitted onto Environment Matrix Container:", {
//       username,
//     });
//     toast.success(
//       "Identity verified! Redirecting to secure operational node...",
//     );

//     // Reset state inputs and fallback to routing tree dashboard view
//     setData({ username: "", password: "" });
//     navigate("/managerprofile");
//   };

//   return (
//     <main className="w-full min-h-screen bg-slate-50 flex font-sans">
//       {/* Structural Left Panel: Graphics Backdrop Cover Sheet Banner */}
//       <div className="hidden lg:block lg:w-1/2 relative bg-[#13293d] overflow-hidden">
//         <div className="absolute inset-0 bg-[#13293d]/40 backdrop-blur-xs z-10" />
//         <img
//           src={loginimg}
//           alt="Royal Academy Admin Complex Visual Reference"
//           className="w-full h-full object-cover object-center absolute inset-0 transform scale-105 transition-transform duration-700"
//         />
//         <div className="absolute bottom-12 left-12 right-12 z-20 text-white">
//           <p className="text-xs font-black tracking-widest uppercase text-[#10a1b6] mb-2">
//             Academic Operations Center
//           </p>
//           <h2 className="text-3xl font-black uppercase tracking-tight max-w-sm">
//             Step 2 scientist Administrative Gateway
//           </h2>
//         </div>
//       </div>

//       {/* Structural Right Panel: Operational Login Input Canvas Workspace */}
//       <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 md:px-16 py-12 bg-slate-50">
//         <div className="w-full max-w-[460px] bg-white border-2 border-slate-200 rounded-[32px] p-8 md:p-10 shadow-sm">
//           {/* Institution Header Brand Element Identity Block */}
//           <div className="flex flex-col items-center text-center mb-8">
//             <img
//               src={logofull}
//               alt="Royal Academy Authorized Institutional Logo"
//               className="h-30 w-30 mb-6 object-contain "
//             />
//             <h1 className="text-xl font-black text-[#13293d] tracking-tight uppercase">
//               Welcome to Royal Academy
//             </h1>
//             <p className="text-xs text-[#10a1b6] font-black uppercase tracking-widest mt-1">
//               Manager Session Portal
//             </p>
//           </div>

//           {/* Security Verification Framework Interaction Entry Point */}
//           <form onSubmit={loginManager} className="space-y-5">
//             {/* Username Vector Group Input Layout Layer */}
//             <div className="flex flex-col gap-1">
//               <label
//                 htmlFor="username"
//                 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1"
//               >
//                 Operator Username
//               </label>
//               <input
//                 type="text"
//                 id="username"
//                 placeholder="Enter admin system identifier"
//                 value={data.username}
//                 onChange={(e) => setData({ ...data, username: e.target.value })}
//                 required
//                 className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-xs outline-none transition-all font-medium text-gray-800"
//               />
//             </div>

//             {/* Password Vector Group Input Layout Layer */}
//             <div className="flex flex-col gap-1">
//               <div className="flex justify-between items-center px-1">
//                 <label
//                   htmlFor="password"
//                   className="text-[10px] font-bold text-gray-400 uppercase tracking-wider"
//                 >
//                   Access Key Password
//                 </label>
//                 <a
//                   href="/managerforgetpassword"
//                   className="text-[10px] font-bold text-[#10a1b6] hover:text-[#13293d] transition-colors underline uppercase tracking-tight"
//                 >
//                   Forgot Password?
//                 </a>
//               </div>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Enter account verification token string"
//                 value={data.password}
//                 onChange={(e) => setData({ ...data, password: e.target.value })}
//                 required
//                 className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-xs outline-none transition-all font-mono tracking-widest text-gray-800"
//               />
//             </div>

//             {/* Interactive Control Submission Anchor Panel */}
//             <div className="pt-4">
//               <button
//                 type="submit"
//                 className="w-full bg-[#13293d] hover:bg-[#10a1b6] text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-sm"
//               >
//                 Authenticate & Access Dashboard
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default ManagerLogin;



// import React, { useState } from "react";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import loginimg from "./photos/managerlogin.png";
// import logofull from "../../../assets/step2 scientist logo.jpeg";

// function ManagerLogin() {
//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     email_address: "",
//     password: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const loginManager = async (e) => {
//     e.preventDefault();
//     const { email_address, password } = data;

//     if (!email_address || !password) {
//       toast.error("Please fill in all mandatory credentials fields.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email_address, password }),
//       });

//       const resBody = await response.json();

//       if (!response.ok) {
//         throw new Error(resBody.message || "Authentication failed");
//       }

//       const responseData = resBody.data; 
//       const loggedInUser = responseData?.user;

//       if (loggedInUser && loggedInUser.role === "manager") {
//         toast.success("Identity verified! Redirecting to secure operational node...");
        
//         localStorage.setItem("token", responseData.accessToken);
        
//         setData({ email_address: "", password: "" });
//         setTimeout(() => navigate("/managerprofile"), 1500);
//       } else {
//         toast.error("Access Denied: You are not authorized as a Manager.");
//       }
//     } catch (err) {
//       toast.error(err.message || "Something went wrong. Check backend connections.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="w-full min-h-screen bg-slate-50 flex font-sans">
//       <div className="hidden lg:block lg:w-1/2 relative bg-[#13293d] overflow-hidden">
//         <div className="absolute inset-0 bg-[#13293d]/40 backdrop-blur-xs z-10" />
//         <img
//           src={loginimg}
//           alt="Royal Academy Admin Complex Visual Reference"
//           className="w-full h-full object-cover object-center absolute inset-0 transform scale-105 transition-transform duration-700"
//         />
//         <div className="absolute bottom-12 left-12 right-12 z-20 text-white">
//           <p className="text-xs font-black tracking-widest uppercase text-[#10a1b6] mb-2">
//             Academic Operations Center
//           </p>
//           <h2 className="text-3xl font-black uppercase tracking-tight max-w-sm">
//             Step 2 scientist Administrative Gateway
//           </h2>
//         </div>
//       </div>

//       <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 md:px-16 py-12 bg-slate-50">
//         <div className="w-full max-w-[460px] bg-white border-2 border-slate-200 rounded-[32px] p-8 md:p-10 shadow-sm">
//           <div className="flex flex-col items-center text-center mb-8">
//             <img
//               src={logofull}
//               alt="Royal Academy Authorized Institutional Logo"
//               className="h-30 w-30 mb-6 object-contain"
//             />
//             <h1 className="text-xl font-black text-[#13293d] tracking-tight uppercase">
//               Welcome to Royal Academy
//             </h1>
//             <p className="text-xs text-[#10a1b6] font-black uppercase tracking-widest mt-1">
//               Manager Session Portal
//             </p>
//           </div>

//           <form onSubmit={loginManager} className="space-y-5">
//             <div className="flex flex-col gap-1">
//               <label htmlFor="email_address" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">
//                 Operator Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email_address"
//                 placeholder="Enter admin email identifier"
//                 value={data.email_address}
//                 onChange={(e) => setData({ ...data, email_address: e.target.value })}
//                 required
//                 className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-xs outline-none transition-all font-medium text-gray-800"
//               />
//             </div>

//             <div className="flex flex-col gap-1">
//               <div className="flex justify-between items-center px-1">
//                 <label htmlFor="password" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
//                   Access Key Password
//                 </label>
//                 <a href="/managerforgetpassword" className="text-[10px] font-bold text-[#10a1b6] hover:text-[#13293d] transition-colors underline uppercase tracking-tight">
//                   Forgot Password?
//                 </a>
//               </div>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Enter account verification token string"
//                 value={data.password}
//                 onChange={(e) => setData({ ...data, password: e.target.value })}
//                 required
//                 className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-xs outline-none transition-all font-mono tracking-widest text-gray-800"
//               />
//             </div>

//             <div className="pt-4">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#13293d] hover:bg-[#10a1b6] text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-sm disabled:opacity-50"
//               >
//                 {loading ? "Authenticating Operator..." : "Authenticate & Access Dashboard"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default ManagerLogin;




import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import loginimg from "./photos/managerlogin.png";
import logofull from "../../../assets/step2 scientist logo.jpeg";

function ManagerLogin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email_address: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const loginManager = async (e) => {
    e.preventDefault();
    const { email_address, password } = data;

    if (!email_address || !password) {
      toast.error("Please fill in all mandatory credentials fields.");
      return;
    }

    setLoading(true);
    console.log("🚀 Login request sent for:", email_address);

    try {
      // API call to backend
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email_address, password }),
      });

      const resBody = await response.json();
      console.log("📡 Backend Response:", resBody);

      if (!response.ok) {
        throw new Error(resBody.message || "Authentication failed on server");
      }

      // ApiResponse structure se data extract karna
      const responseData = resBody.data; 
      const loggedInUser = responseData?.user;

      if (loggedInUser && loggedInUser.role === "manager") {
        toast.success("Identity verified! Redirecting to dashboard...");
        
        // Token save karein
        localStorage.setItem("token", responseData.accessToken);
        
        setData({ email_address: "", password: "" });
        
        setTimeout(() => {
          navigate("/managerprofile");
        }, 1500);
      } else {
        toast.error(`Access Denied: You are logged in as ${loggedInUser?.role || 'user'}, not a Manager.`);
      }
    } catch (err) {
      console.error(" Login Error:", err);
      toast.error(err.message || "Connection Error: Cannot connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full min-h-screen bg-slate-50 flex font-sans">
      {/* Graphic Left Panel */}
      <div className="hidden lg:block lg:w-1/2 relative bg-[#13293d] overflow-hidden">
        <div className="absolute inset-0 bg-[#13293d]/40 backdrop-blur-xs z-10" />
        <img
          src={loginimg}
          alt="Royal Academy Admin Complex"
          className="w-full h-full object-cover object-center absolute inset-0 transform scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-12 left-12 right-12 z-20 text-white">
          <p className="text-xs font-black tracking-widest uppercase text-[#10a1b6] mb-2">
            Academic Operations Center
          </p>
          <h2 className="text-3xl font-black uppercase tracking-tight max-w-sm">
            Step 2 scientist Administrative Gateway
          </h2>
        </div>
      </div>

      {/* Input Right Panel */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 md:px-16 py-12 bg-slate-50">
        <div className="w-full max-w-[460px] bg-white border-2 border-slate-200 rounded-[32px] p-8 md:p-10 shadow-sm">
          <div className="flex flex-col items-center text-center mb-8">
            <img
              src={logofull}
              alt="Royal Academy Logo"
              className="h-30 w-30 mb-6 object-contain"
            />
            <h1 className="text-xl font-black text-[#13293d] tracking-tight uppercase">
              Welcome to Royal Academy
            </h1>
            <p className="text-xs text-[#10a1b6] font-black uppercase tracking-widest mt-1">
              Manager Session Portal
            </p>
          </div>

          <form onSubmit={loginManager} className="space-y-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="email_address" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">
                Operator Email Address
              </label>
              <input
                type="email"
                id="email_address"
                placeholder="Enter admin email identifier"
                value={data.email_address}
                onChange={(e) => setData({ ...data, email_address: e.target.value })}
                required
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-xs outline-none transition-all font-medium text-gray-800"
              />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center px-1">
                <label htmlFor="password" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Access Key Password
                </label>
                <a href="/managerforgetpassword" className="text-[10px] font-bold text-[#10a1b6] hover:text-[#13293d] transition-colors underline uppercase tracking-tight">
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                placeholder="Enter account verification token string"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                required
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-xs outline-none transition-all font-mono tracking-widest text-gray-800"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#13293d] hover:bg-[#10a1b6] text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-sm disabled:opacity-50"
              >
                {loading ? "Authenticating Operator..." : "Authenticate & Access Dashboard"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default ManagerLogin;