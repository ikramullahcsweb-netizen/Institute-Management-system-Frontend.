


import React, { useState } from "react";
import API from "../../../api";
import { useNavigate, Link } from "react-router-dom";
import userpng from "./photos/User.png";
import toast from "react-hot-toast";
import Head from "../Header/Header";
import Nav from "../NavBar/Nav";
import Swal from "sweetalert2";

function AddTeacher() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function getCurrentYear() {
    return new Date().getFullYear().toString().slice(-2);
  }

  function generateRandomNumber() {
    return Math.floor(1000 + Math.random() * 9000);
  }

  function generateTeacherId() {
    const year = getCurrentYear();
    const randomNumber = generateRandomNumber();
    return `TID${year}${randomNumber}`;
  }

  const [data, setData] = useState({
    name: "",
    username: "",
    teid: generateTeacherId(),
    gender: "",
    email: "",
    contactnumber: "",
    subject: "",
    SecAnswer: "",
    password: "",
    repassword: "",
  });

  const resetForm = () => {
    setData({
      name: "",
      username: "",
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
      !data.username.trim() ||
      !data.email.trim() ||
      !data.gender ||
      !data.password ||
      !data.SecAnswer.trim()
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    if (data.password !== data.repassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await API.post(
        "/api/v1/teacherregister",
        {
          name: data.name.trim(),
          username: data.username.trim(),
          email: data.email.trim(),
          contactnumber: data.contactnumber.trim(),
          teid: data.teid,
          gender: data.gender,
          subject: data.subject.trim(),
          password: data.password,
          SecAnswer: data.SecAnswer.trim(),
        }
      );

      resetForm();

      await Swal.fire({
        icon: "success",
        title: "Success",
        text: "Teacher registered successfully in the system!",
        confirmButtonColor: "#063a67",
        confirmButtonText: "Continue",
      });

      navigate("/adminprofile");
    } catch (error) {
      console.error(error);
      const errMsg =
        error.response?.data?.message ||
        "Could not register teacher. Server error.";

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
    <main className="min-h-screen bg-gray-50 font-sans">
      <div className="flex w-full min-h-screen">
        <aside className="hidden md:block w-[290px] fixed left-0 top-0 h-screen z-40">
          <Nav />
        </aside>

        <div className="flex-1 w-full md:ml-[260px]">
          <Head />

          <div className="pt-4 px-3 sm:px-4 lg:px-8 pb-12 flex justify-center">
            <div className="w-full max-w-[900px] bg-white rounded-[20px] border-2 border-gray-100 shadow-xl p-4 sm:p-6 lg:p-8 transition-all">
              <div className="mb-6">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#063a67] m-0 tracking-tight">
                  Add Faculty Instructor
                </p>
                <p className="text-xs text-gray-400 font-semibold tracking-wider mt-1 uppercase">
                  Configure Academic Teaching Authority Profiles
                </p>
                <div className="w-full h-[3px] bg-gradient-to-r from-[#063a67] to-[#e6eff6] mt-3 rounded-full"></div>
              </div>

              <div className="flex items-center gap-5 p-4 bg-[#e6eff6] rounded-xl border border-blue-100 mb-8">
                <div className="bg-white p-2 rounded-full border border-gray-200 shadow-sm">
                  <img
                    src={userpng}
                    alt="Teacher Hub"
                    className="w-[55px] h-[55px] object-contain"
                  />
                </div>
                <div>
                  <p className="text-lg font-bold text-[#063a67] m-0">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[14px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
                      value={data.name}
                      onChange={(e) => setData({ ...data, name: e.target.value })}
                      placeholder="Instructor real name identity"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[14px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                      Username *
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
                      value={data.username}
                      onChange={(e) => setData({ ...data, username: e.target.value })}
                      placeholder="Account access login username"
                      required
                    />
                  </div>
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
                        value="Male"
                        className="w-4 h-4 accent-[#063a67]"
                        checked={data.gender === "Male"}
                        onChange={(e) => setData({ ...data, gender: e.target.value })}
                      />
                      <span>Male Faculty</span>
                    </label>

                    <label className="flex items-center gap-3 px-5 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 font-semibold text-gray-700 cursor-pointer select-none transition-all has-[:checked]:border-[#063a67] has-[:checked]:bg-[#e6eff6] has-[:checked]:text-[#063a67]">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        className="w-4 h-4 accent-[#063a67]"
                        checked={data.gender === "Female"}
                        onChange={(e) => setData({ ...data, gender: e.target.value })}
                      />
                      <span>Female Faculty</span>
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
                      className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
                      value={data.email}
                      onChange={(e) => setData({ ...data, email: e.target.value })}
                      placeholder="faculty@step2scientist.com"
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
                      placeholder="Mobile verification digits"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                    Assigned Subject Discipline
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
                    value={data.subject}
                    onChange={(e) => setData({ ...data, subject: e.target.value })}
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
                    className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
                    value={data.SecAnswer}
                    onChange={(e) => setData({ ...data, SecAnswer: e.target.value })}
                    placeholder="Verification answer mapping"
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
                      className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50"
                      value={data.password}
                      onChange={(e) => setData({ ...data, password: e.target.value })}
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
      </div>
    </main>
  );
}

export default AddTeacher;