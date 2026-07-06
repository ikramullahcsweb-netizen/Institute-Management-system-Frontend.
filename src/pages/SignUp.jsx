
import React from "react";
import loginbg from "../../src/assets/office image.avif"; 
import { useNavigate } from "react-router-dom";
import google from "../../src/assets/google-pic.svg";
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import API from "../api";

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
