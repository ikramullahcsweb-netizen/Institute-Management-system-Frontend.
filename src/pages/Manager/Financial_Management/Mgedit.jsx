import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import axios from "axios";
import Head from "../Header/Header";
import logo from "../../../assets/step2 scientist logo.jpeg";

function Mgedit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const API_URL = ""; // Vite proxy use karta hai

  const [formData, setFormData] = useState({
    itnumber: "",
    description: "",
    date: "",
    amount: "",
    type: "",
    status: "",
  });

  // Backend se specific payment fetch karna
  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/payments/getpayment/${id}`, { withCredentials: true });
        // Date format fix karne ke liye agar database ISO string bhej raha ho
        const data = res.data;
        if (data.date) data.date = data.date.split('T')[0];
        setFormData(data);
      } catch (err) {
        toast.error("Failed to load payment details");
      }
    };
    fetchPayment();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Update Payment",
      text: "Save changes to database?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#1DB6D9",
      cancelButtonColor: "#d33",
      confirmButtonText: "Save",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Update request
          await axios.put(`${API_URL}/updatepayment/${id}`, formData);
          toast.success("Payment Updated Successfully");
          setTimeout(() => navigate("/managerfinancial"), 1000);
        } catch (err) {
          toast.error("Error updating payment");
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-6">
      <Head />
      <Toaster />

      {/* Logo & Header */}
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#1DB6D9] flex items-center justify-center overflow-hidden">
          <img src={logo} alt="logo" className="w-24 md:w-32" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto bg-[#DDF7F8] border border-black rounded-2xl py-3 mb-6">
        <h1 className="text-center text-2xl md:text-3xl font-bold text-[#1DB6D9]">Edit Payment</h1>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-[#DDF7F8] border border-black rounded-2xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="IT Number" name="itnumber" value={formData.itnumber} onChange={handleChange} />
          <InputField label="Description" name="description" value={formData.description} onChange={handleChange} />
          <InputField label="Amount" name="amount" value={formData.amount} onChange={handleChange} />
          <div className="flex flex-col">
            <label className="font-bold mb-1">Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} className="border border-black rounded-xl p-3" />
          </div>
        </div>

        <div className="mt-4">
          <label className="font-bold mb-1 block">Status</label>
          <select name="status" value={formData.status} onChange={handleChange} className="w-full border border-black rounded-xl p-3">
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="flex gap-4 mt-8">
          <button type="submit" className="flex-1 bg-[#384D6C] text-white py-3 rounded-xl font-bold hover:bg-[#1DB6D9]">Save</button>
          <button type="button" onClick={() => navigate("/managerfinancial")} className="flex-1 bg-red-600 text-white py-3 rounded-xl font-bold">Cancel</button>
        </div>
      </form>
    </div>
  );
}

// Reusable Input Component for cleaner code
const InputField = ({ label, name, value, onChange }) => (
  <div className="flex flex-col">
    <label className="font-bold mb-1">{label}</label>
    <input type="text" name={name} value={value} onChange={onChange} className="border border-black rounded-xl p-3 outline-none" />
  </div>
);

export default Mgedit;