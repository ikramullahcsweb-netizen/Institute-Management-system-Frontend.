import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import Head from "../Header/Header";
import logo from "../../../assets/step2 scientist logo.jpeg";

function MgPayment() {
  const navigate = useNavigate();

  const [itnumber, setItnumber] = useState("");
  const [studentname, setStudentname] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const status = "Pending";
  const type = "Cash";

  // AUTO DATE
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (mm < 10) mm = "0" + mm;
    if (dd < 10) dd = "0" + dd;

    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const paymentData = {
      itnumber,
      studentname,
      description,
      date,
      amount,
      status,
      type,
    };

    console.log(paymentData);

    Swal.fire({
      title: "Confirm Payment",
      text: "Are you sure?",
      icon: "question",
      confirmButtonColor: "#1DB6D9",
      cancelButtonColor: "#384D6C",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success("Payment Added");

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
          Payment Form
        </h1>
      </div>

      {/* FORM */}
      <div className="max-w-5xl mx-auto mt-4">
        <form
          onSubmit={handleSubmit}
          className="bg-[#DDF7F8] border border-black rounded-2xl p-6"
        >
          <div className="mb-4">
            <label className="block font-bold mb-2">IT Number</label>

            <input
              type="text"
              placeholder="SID123456"
              value={itnumber}
              onChange={(e) => setItnumber(e.target.value)}
              className="w-full border border-black rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#1DB6D9]"
            />
          </div>

          <div className="mb-4">
            <label className="block font-bold mb-2">Student Name</label>

            <input
              type="text"
              placeholder="Enter Name"
              value={studentname}
              onChange={(e) => setStudentname(e.target.value)}
              className="w-full border border-black rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#1DB6D9]"
            />
          </div>

          <div className="mb-4">
            <label className="block font-bold mb-2">Description</label>

            <input
              type="text"
              placeholder="Class Name"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-black rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#1DB6D9]"
            />
          </div>

          <div className="mb-4">
            <label className="block font-bold mb-2">Date</label>

            <input
              type="date"
              value={date}
              readOnly
              className="w-full border border-black rounded-xl p-3 bg-white"
            />
          </div>

          <div className="mb-5">
            <label className="block font-bold mb-2">Amount</label>

            <input
              type="text"
              placeholder="00.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border border-black rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#1DB6D9]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#384D6C] hover:bg-[#1DB6D9] text-white text-xl font-bold py-4 rounded-2xl border-2 border-black transition-all hover:scale-[1.02]"
          >
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default MgPayment;
