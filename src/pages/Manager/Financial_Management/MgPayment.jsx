import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import axios from "axios"; // Axios import kiya
import Head from "../Header/Header";
import logo from "../../../assets/step2 scientist logo.jpeg";

function MgPayment() {
  const navigate = useNavigate();
  const API_URL = ""; // Vite proxy use karta hai

  const [formData, setFormData] = useState({
    itnumber: "",
    studentname: "",
    description: "",
    amount: "",
    date: "",
    status: "Pending",
    type: "Cash",
  });

  // Auto Date
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setFormData((prev) => ({ ...prev, date: today }));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // SUBMIT (POST Request to /getcash)
  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Confirm Payment",
      text: "Are you sure you want to add this payment?",
      icon: "question",
      confirmButtonColor: "#1DB6D9",
      cancelButtonColor: "#384D6C",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.post(`${API_URL}/api/payments/createcash`, formData, { withCredentials: true });
          toast.success("Payment Added Successfully!");
          setTimeout(() => navigate("/managerfinancial"), 1500);
        } catch (err) {
          toast.error("Failed to add payment. Check server.");
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-4 md:px-8">
      <Head />
      <Toaster />

      {/* LOGO */}
      <div className="flex justify-center mb-6">
        <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full border-4 border-[#1DB6D9] flex items-center justify-center overflow-hidden">
          <img src={logo} alt="logo" className="w-24 md:w-36" />
        </div>
      </div>

      {/* TITLE */}
      <div className="max-w-3xl mx-auto bg-[#DDF7F8] border border-black rounded-2xl py-3">
        <h1 className="text-center text-2xl md:text-3xl font-bold text-[#1DB6D9]">Payment Form</h1>
      </div>

      {/* FORM */}
      <div className="max-w-3xl mx-auto mt-4">
        <form onSubmit={handleSubmit} className="bg-[#DDF7F8] border border-black rounded-2xl p-6 md:p-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput label="IT Number" name="itnumber" value={formData.itnumber} onChange={handleChange} placeholder="SID123456" />
            <FormInput label="Student Name" name="studentname" value={formData.studentname} onChange={handleChange} placeholder="Enter Name" />
            <FormInput label="Description" name="description" value={formData.description} onChange={handleChange} placeholder="Class Name" />
            <FormInput label="Amount" name="amount" value={formData.amount} onChange={handleChange} placeholder="00.00" type="number" />
          </div>

          <div className="mt-4 mb-6">
            <label className="block font-bold mb-2">Date</label>
            <input type="date" name="date" value={formData.date} readOnly className="w-full border border-black rounded-xl p-3 bg-gray-100" />
          </div>

          <button
            type="submit"
            className="w-full bg-[#384D6C] hover:bg-[#1DB6D9] text-white text-lg font-bold py-4 rounded-2xl border-2 border-black transition-all"
          >
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
}

// Reusable Input Component
const FormInput = ({ label, name, value, onChange, placeholder, type = "text" }) => (
  <div className="mb-2">
    <label className="block font-bold mb-1">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border border-black rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#1DB6D9]"
      required
    />
  </div>
);

export default MgPayment;