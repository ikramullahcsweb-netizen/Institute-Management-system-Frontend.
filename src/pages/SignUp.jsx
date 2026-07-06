











// import React from "react";
// import loginbg from "../../src/assets/office image.avif"; 
// import { useNavigate } from "react-router-dom";
// import google from "../../src/assets/google-pic.svg";
// import { useState } from "react";
// import { useGoogleLogin } from "@react-oauth/google";

// const SignUp = () => {
//   const navigate = useNavigate();
  
//   // 💡 State mein saare fields ko define kar diya taaki input controlled rahe aur data sahi jaye
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email_address: "",
//     mobile_no: "",
//     password: "",
//     role: "" 
//   });
  
//   const [showPassword, setShowPassword] = useState(false);
//   const [msg, setMsg] = useState("");
//   const [isError, setIsError] = useState(false); // Error color dynamic karne ke liye

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // 📝 NORMAL SIGNUP
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // 🚨 Validation: Agar role select nahi kiya toh rok dein
//     if (!formData.role) {
//       setIsError(true);
//       setMsg("Please select a Role / Room before signing up!");
//       return;
//     }

//     setMsg("Creating account...");
//     setIsError(false);

//     // 🔥 FIXED: Server main file ke mutabik port 5000 aur route path match kar diya
//     const url = `http://localhost:3000/api/auth/register`;

//     fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Registration failed. Please check your network or fields.");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setIsError(false);
//         setMsg("Account Created Successfully!");
//         console.log("API Success:", data);
//         setTimeout(() => navigate("/login"), 2000);
//       })
//       .catch((error) => {
//         console.error("Chain Error:", error);
//         setIsError(true);
//         setMsg("Network error: Server unreachable or Email already exists.");
//       });
//   };

//   // 🌐 GOOGLE SIGNUP
//   const signUpWithGoogle = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       // 🚨 Validation: Google auth se pehle bhi role select hona lazmi hai
//       if (!formData.role) {
//         setIsError(true);
//         setMsg("Please select a Role / Room FIRST, then click Login with Google!");
//         return;
//       }

//       setMsg("Processing Google Authentication...");
//       setIsError(false);
      
//       // 🔥 FIXED: Correct backend URL + Sending token along with the selected role
//       fetch(`http://localhost:5000/api/auth/google-auth`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ 
//           token: tokenResponse.access_token,
//           role: formData.role // Role database mein bhej rahe hain
//         }),
//       })
//         .then((res) => {
//           if (res.ok) {
//             return res.json().then((data) => {
//               setIsError(false);
//               setMsg("Google Authentication Successful!");
//               console.log("Google Auth Success:", data);
//               setTimeout(() => navigate("/"), 1500);
//             });
//           } else {
//             setIsError(true);
//             setMsg("Google Authentication failed on server.");
//           }
//         })
//         .catch((err) => {
//           console.error("Google Fetch Error:", err);
//           setIsError(true);
//           setMsg("Server connection error during Google Auth.");
//         });
//     },
//     onError: () => {
//       setIsError(true);
//       setMsg("Google Authentication aborted.");
//     },
//   });

//   return (
//     <section 
//       className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat p-4"
//       style={{ backgroundImage: `url(${loginbg})` }}
//     >
//       <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-2xl mt-15">
//         <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900">Sign Up</h1>
//             <p className="text-sm font-medium text-gray-500 mt-1">Sign up your account</p>
//           </div>

//           {/* First Name & Last Name */}
//           <div className="flex gap-3">
//             <div className="relative w-1/2">
//               <input
//                 name="first_name"
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 required
//                 className="w-full h-10 px-3 text-stone-800 border border-gray-300 text-sm rounded-md focus:outline-none focus:border-blue-500"
//               />
//               <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                 </svg>
//               </div>
//             </div>
//             <div className="relative w-1/2">
//               <input
//                 name="last_name"
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={handleChange}
//                 className="w-full h-10 px-3 text-stone-800 border border-gray-300 text-sm rounded-md focus:outline-none focus:border-blue-500"
//               />
//               <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           {/* Email Address */}
//           <div className="relative w-full">
//             <input
//               name="email_address"
//               type="email"
//               placeholder="Email Address"
//               onChange={handleChange}
//               required
//               className="w-full h-10 pl-3 pr-10 text-stone-800 border border-gray-300 text-sm rounded-md focus:outline-none focus:border-blue-500"
//             />
//             <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//               <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//             </div>
//           </div>

//           {/* Phone Number */}
//           <div className="relative w-full">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <span className="text-stone-400 text-sm font-medium">+202</span>
//             </div>
//             <input
//               name="mobile_no"
//               type="tel"
//               placeholder="Phone Number"
//               onChange={handleChange}
//               className="w-full h-10 pl-14 pr-10 text-stone-800 border border-gray-300 text-sm rounded-md focus:outline-none focus:border-blue-500"
//             />
//             <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//               <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//               </svg>
//             </div>
//           </div>

//           {/* Role/Room Selection */}
//           <div className="relative w-full">
//             <select
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               required
//               className="w-full h-10 px-3 pr-10 text-stone-800 border border-gray-300 text-sm rounded-md focus:outline-none focus:border-blue-500 bg-white cursor-pointer appearance-none"
//             >
//               <option value="" disabled hidden>Select Role / Room</option>
//               {/* <option value="student">Student</option>
//               <option value="teacher">Teacher</option> */}
//               <option value="manager">Manager</option>
//               <option value="admin">Admin</option>

//             </select>
//             <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
//               <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
//                 <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//               </svg>
//             </div>
//           </div>

//           {/* Password */}
//           <div className="relative w-full">
//             <input
//               name="password"
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter Password"
//               onChange={handleChange}
//               required
//               className="w-full h-10 pl-3 pr-10 text-stone-800 border border-gray-300 text-sm rounded-md focus:outline-none focus:border-blue-500"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-stone-800 focus:outline-none"
//             >
//               {showPassword ? (
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
//                 </svg>
//               ) : (
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                 </svg>
//               )}
//             </button>
//           </div>

//           <button
//             type="submit"
//             className="w-full h-10 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition mt-1"
//           >
//             Sign Up
//           </button>

//           {/* Dynamic color status message */}
//           {msg && (
//             <p className={`text-center text-sm font-bold mt-1 ${isError ? "text-red-500" : "text-blue-600"}`}>
//               {msg}
//             </p>
//           )}

//           <div className="flex gap-2 justify-center text-center text-sm text-gray-600 mt-1">
//             <p>Already have an account?</p>
//             <button
//               type="button"
//               className="text-[#1688B5] hover:underline cursor-pointer"
//               onClick={() => navigate("/login")}
//             >
//               Sign in
//             </button>
//           </div>

//           {/* Divider */}
//           <div className="flex items-center py-1">
//             <div className="flex-grow border-t border-gray-300"></div>
//             <span className="mx-3 text-xs text-gray-400">or</span>
//             <div className="flex-grow border-t border-gray-300"></div>
//           </div>

//           {/* Google Login Button */}
//           <button
//             type="button"
//             onClick={() => signUpWithGoogle()}
//             className="flex items-center justify-center gap-2 w-full h-10 rounded-md text-gray-700 hover:bg-gray-50 font-medium border border-gray-200 cursor-pointer text-sm"
//           >
//             <img src={google} className="w-4 h-4" alt="google logo" />
//             <p>Login with Google</p>
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default SignUp;






import React from "react";
import loginbg from "../../src/assets/office image.avif"; 
import { useNavigate } from "react-router-dom";
import google from "../../src/assets/google-pic.svg";
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import API from "./api"; // 👈 Shortcut API instance connect kiya (Path zaroor verify kar lein)

const SignUp = () => {
  const navigate = useNavigate();
  
  // 💡 State mein saare fields ko define kar diya taaki input controlled rahe aur data sahi jaye
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    mobile_no: "",
    password: "",
    role: "" 
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState("");
  const [isError, setIsError] = useState(false); // Error color dynamic karne ke liye

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 📝 NORMAL SIGNUP
  const handleSubmit = (e) => {
    e.preventDefault();

    // 🚨 Validation: Agar role select nahi kiya toh rok dein
    if (!formData.role) {
      setIsError(true);
      setMsg("Please select a Role / Room before signing up!");
      return;
    }

    setMsg("Creating account...");
    setIsError(false);

    // 🔥 FIXED: Custom API wrapper se automatic base URL picked up ho jayega
    API.post("/api/auth/register", formData)
      .then((response) => {
        setIsError(false);
        setMsg("Account Created Successfully!");
        console.log("API Success:", response.data);
        setTimeout(() => navigate("/login"), 2000);
      })
      .catch((error) => {
        console.error("Chain Error:", error);
        setIsError(true);
        setMsg(error.response?.data?.message || "Network error: Server unreachable or Email already exists.");
      });
  };

  // 🌐 GOOGLE SIGNUP
  const signUpWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // 🚨 Validation: Google auth se pehle bhi role select hona lazmi hai
      if (!formData.role) {
        setIsError(true);
        setMsg("Please select a Role / Room FIRST, then click Login with Google!");
        return;
      }

      setMsg("Processing Google Authentication...");
      setIsError(false);
      
      // 🔥 FIXED: Fetch hata kar Axios-based API call lagayi jo session allow karegi
      API.post("/api/auth/google-auth", { 
        token: tokenResponse.access_token,
        role: formData.role // Role database mein bhej rahe hain
      })
        .then((res) => {
          setIsError(false);
          setMsg("Google Authentication Successful!");
          console.log("Google Auth Success:", res.data);
          setTimeout(() => navigate("/"), 1500);
        })
        .catch((err) => {
          console.error("Google Fetch Error:", err);
          setIsError(true);
          setMsg(err.response?.data?.message || "Google Authentication failed on server.");
        });
    },
    onError: () => {
      setIsError(true);
      setMsg("Google Authentication aborted.");
    },
  });

  return (
    <section 
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat p-4"
      style={{ backgroundImage: `url(${loginbg})` }}
    >
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-2xl mt-15">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Sign Up</h1>
            <p className="text-sm font-medium text-gray-500 mt-1">Sign up your account</p>
          </div>

          {/* First Name & Last Name */}
          <div className="flex gap-3">
            <div className="relative w-1/2">
              <input
                name="first_name"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                required
                className="w-full h-10 px-3 text-stone-800 border border-gray-300 text-sm rounded-md focus:outline-none focus:border-blue-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div className="relative w-1/2">
              <input
                name="last_name"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                className="w-full h-10 px-3 text-stone-800 border border-gray-300 text-sm rounded-md focus:outline-none focus:border-blue-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Email Address */}
          <div className="relative w-full">
            <input
              name="email_address"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
              className="w-full h-10 pl-3 pr-10 text-stone-800 border border-gray-300 text-sm rounded-md focus:outline-none focus:border-blue-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Phone Number */}
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-stone-400 text-sm font-medium">+202</span>
            </div>
            <input
              name="mobile_no"
              type="tel"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full h-10 pl-14 pr-10 text-stone-800 border border-gray-300 text-sm rounded-md focus:outline-none focus:border-blue-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
          </div>

          {/* Role/Room Selection */}
          <div className="relative w-full">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full h-10 px-3 text-stone-800 border border-gray-300 text-sm rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md text-sm transition-all"
          >
            Create Account
          </button>

          {/* Google Button */}
          <button 
            type="button"
            onClick={() => signUpWithGoogle()}
            className="w-full h-10 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-all text-sm font-medium text-gray-700"
          >
            <img src={google} alt="google" className="w-5 h-5" />
            Sign Up with Google
          </button>

          <p className="text-center text-xs text-gray-500">
            Already have an account? <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/login")}>Login</span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
