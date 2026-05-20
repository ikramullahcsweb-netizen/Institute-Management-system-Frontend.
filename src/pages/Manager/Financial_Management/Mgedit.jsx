import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import Head from "../Header/Header";
import logo from "../../../assets/step2 scientist logo.jpeg";

function Mgedit() {
  const { id } = useParams();
  const navigate = useNavigate();

  // STATIC DATA
  const paymentData = [
    {
      id: "1",
      itnumber: "IT123456",
      description: "React Class",
      date: "2026-05-13",
      amount: "5000",
      type: "Online",
      status: "Pending",
    },
    {
      id: "2",
      itnumber: "IT654321",
      description: "Node Course",
      date: "2026-05-14",
      amount: "3000",
      type: "Bank",
      status: "Approved",
    },
  ];

  const [itnumber, setItnumber] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  // LOAD STATIC DATA
  useEffect(() => {
    const payment = paymentData.find((item) => item.id === id);

    if (payment) {
      setItnumber(payment.itnumber);
      setDescription(payment.description);
      setDate(payment.date);
      setAmount(payment.amount);
      setType(payment.type);
      setStatus(payment.status);
    }
  }, [id]);

  // SAVE
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Update Payment",
      text: "Save changes?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#1DB6D9",
      cancelButtonColor: "#7ED957",
      confirmButtonText: "Save",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success("Payment Updated");

        setTimeout(() => {
          navigate("/managerfinancial");
        }, 1500);
      }
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-4">
      <Head />
      <Toaster />

      {/* LOGO */}
      <div className="flex justify-center">
        <div className="w-[200px] h-[200px] rounded-full border-4 border-[#1DB6D9] flex items-center justify-center">
          <img src={logo} alt="logo" className="w-36" />
        </div>
      </div>

      {/* TITLE */}
      <div className="max-w-5xl mx-auto mt-3 bg-[#DDF7F8] border border-black rounded-2xl py-3">
        <h1 className="text-center text-3xl font-bold text-[#1DB6D9]">
          Edit Payment
        </h1>
      </div>

      {/* FORM */}
      <div className="max-w-5xl mx-auto mt-4">
        <form
          onSubmit={handleSubmit}
          className="bg-[#DDF7F8] border border-black rounded-2xl p-5"
        >
          {/* IT NUMBER */}
          <div className="mb-4">
            <label className="block text-lg font-bold mb-2">IT Number</label>

            <input
              type="text"
              value={itnumber}
              onChange={(e) => setItnumber(e.target.value)}
              className="w-full border border-black rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#1DB6D9]"
            />
          </div>

          {/* DESCRIPTION */}
          <div className="mb-4">
            <label className="block text-lg font-bold mb-2">Description</label>

            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-black rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#1DB6D9]"
            />
          </div>

          {/* DATE */}
          <div className="mb-4">
            <label className="block text-lg font-bold mb-2">Date</label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-black rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#1DB6D9]"
            />
          </div>

          {/* AMOUNT */}
          <div className="mb-4">
            <label className="block text-lg font-bold mb-2">Amount</label>

            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border border-black rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#1DB6D9]"
            />
          </div>

          {/* TYPE */}
          <div className="mb-4">
            <label className="block text-lg font-bold mb-2">Type</label>

            <input
              type="text"
              readOnly
              value={type}
              className="w-full border border-black rounded-xl p-3 bg-white"
            />
          </div>

          {/* STATUS */}
          <div className="mb-5">
            <label className="block text-lg font-bold mb-2">Status</label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-black rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#1DB6D9]"
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-[#384D6C] hover:bg-[#1DB6D9] text-white py-3 rounded-xl font-bold transition-all"
            >
              Save
            </button>

            <button
              type="button"
              onClick={() => navigate("/managerfinancial")}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Mgedit;
