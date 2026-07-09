

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import userpng from "./photos/User.png";
import toast from "react-hot-toast";
import Head from "../Header/Header";
import Swal from "sweetalert2";

function AddManager() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    contactnumber: "",
    SecAnswer: "",
    password: "",
    repassword: "",
  });

  const resetForm = () => {
    setData({
      name: "",
      username: "",
      email: "",
      contactnumber: "",
      SecAnswer: "",
      password: "",
      repassword: "",
    });
  };

  const addManager = async (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.password) {
      toast.error("Please enter all mandatory fields.");
      return;
    }

    if (data.password !== data.repassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          first_name: data.name,
          last_name: "",
          email_address: data.email,
          mobile_no: data.contactnumber,
          password: data.password,
          SecAnswer: data.SecAnswer,
          role: "manager",
        },
        { withCredentials: true }
      );

      resetForm();

      await Swal.fire({
        icon: "success",
        title: "Success",
        text: res.data?.message || "Manager registered successfully!",
        confirmButtonColor: "#063a67",
        confirmButtonText: "Great",
      });

      navigate("/adminprofile");
    } catch (error) {
      console.error(error);
      const errMsg =
        error.response?.data?.message || "Could not register manager.";

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
    <div className="min-h-screen bg-gray-50">
      <Head />

      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 lg:py-8 md:ml-[90px] flex justify-center">
        <div className="w-full max-w-[900px] bg-white rounded-[20px] border-2 border-gray-100 shadow-xl p-4 sm:p-6 lg:p-8 transition-all">
          <div className="mb-6">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#063a67] m-0 tracking-tight">
              Add Campus Manager
            </p>
            <p className="text-[11px] sm:text-xs text-gray-400 font-semibold tracking-wider mt-1 uppercase">
              Establish Operational Management Clearance
            </p>
            <div className="w-full h-[3px] bg-gradient-to-r from-[#063a67] to-[#e6eff6] mt-3 rounded-full"></div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 p-4 bg-[#e6eff6] rounded-xl border border-blue-100 mb-8">
            <div className="bg-white p-2 rounded-full border border-gray-200 shadow-sm">
              <img
                src={userpng}
                alt="Manager Avatar"
                className="w-[55px] h-[55px] object-contain"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-bold text-[#063a67] m-0">
                Management Control Block
              </p>
              <p className="text-xs text-gray-500 m-0">
                Create supervisor accounts to maintain data tracking pipelines
              </p>
            </div>
          </div>

          <form onSubmit={addManager} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label className="block text-[14px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Full Name *
                </label>
                <input
                  type="text"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  placeholder="Enter full real name"
                  required
                />
              </div>

              <div>
                <label className="block text-[14px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Username
                </label>
                <input
                  type="text"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
                  value={data.username}
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
                  }
                  placeholder="Optional username"
                />
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-100 my-2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label className="block text-[14px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  placeholder="manager@s2s.edu.com"
                  required
                />
              </div>

              <div>
                <label className="block text-[14px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  value={data.contactnumber}
                  onChange={(e) =>
                    setData({ ...data, contactnumber: e.target.value })
                  }
                  placeholder="Phone sequence"
                />
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-100 my-2"></div>

            <div>
              <label className="block text-[14px] font-bold text-[#063a67] mb-1.5 uppercase tracking-wide bg-blue-50/50 p-2 rounded-lg border border-blue-100/40">
                Security Challenge: What city were you born in? *
              </label>
              <input
                type="text"
                className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
                value={data.SecAnswer}
                onChange={(e) =>
                  setData({ ...data, SecAnswer: e.target.value })
                }
                placeholder="Verification baseline metric token"
                required
              />
            </div>

            <div className="w-full h-[1px] bg-gray-100 my-2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label className="block text-[14px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Password *
                </label>
                <input
                  type="password"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  placeholder="••••••••"
                  required
                />
              </div>

              <div>
                <label className="block text-[14px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Re-enter Password *
                </label>
                <input
                  type="password"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
                  value={data.repassword}
                  onChange={(e) =>
                    setData({ ...data, repassword: e.target.value })
                  }
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-gray-100 mt-8">
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
                to={"/adminprofile"}
                className="w-full sm:w-auto no-underline"
              >
                <button
                  type="button"
                  disabled={loading}
                  className="w-full sm:w-auto text-gray-500 cursor-pointer bg-gray-100 hover:bg-gray-200 text-center rounded-xl px-10 py-3.5 outline-none transition-all duration-200 text-[16px] font-bold border-none disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddManager;