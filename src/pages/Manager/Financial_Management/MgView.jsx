import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import Head from "../Header/Header";
import logo from "../../../assets/step2 scientist logo.jpeg";

function MgView() {
  const navigate = useNavigate();

  // STATIC DATA
  const [payments, setPayments] = useState([
    {
      _id: "1",
      itnumber: "SID123456",
      description: "React Course",
      date: "2026-05-15",
      amount: "5000",
      type: "Cash",
      status: "Pending",
    },
    {
      _id: "2",
      itnumber: "SID654321",
      description: "Node Course",
      date: "2026-05-14",
      amount: "3000",
      type: "Online",
      status: "Approved",
    },
    {
      _id: "3",
      itnumber: "SID789456",
      description: "UI UX Class",
      date: "2026-05-13",
      amount: "4500",
      type: "Bank",
      status: "Rejected",
    },
  ]);

  // DELETE
  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Payment",
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1DB6D9",
      cancelButtonColor: "#384D6C",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedPayments = payments.filter((item) => item._id !== id);

        setPayments(updatedPayments);

        toast.success("Payment Deleted");

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
      <div className="max-w-7xl mx-auto mt-3 bg-[#DDF7F8] border border-black rounded-2xl py-3">
        <h1 className="text-center text-3xl font-bold text-[#1DB6D9]">
          Student Payments
        </h1>
      </div>

      {/* TABLE */}
      <div className="max-w-7xl mx-auto mt-5 overflow-x-auto border border-black rounded-2xl">
        <table className="w-full">
          <thead className="bg-[#384D6C] text-white">
            <tr>
              <th className="p-4 text-left">IT Number</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Edit</th>
              <th className="p-4 text-left">Delete</th>
            </tr>
          </thead>

          <tbody className="bg-[#DDF7F8]">
            {payments.map((payment) => (
              <tr key={payment._id} className="border-b-2 border-[#384D6C]">
                <td className="p-4 font-bold">{payment.itnumber}</td>

                <td className="p-4 font-bold">{payment.description}</td>

                <td className="p-4 font-bold">{payment.date}</td>

                <td className="p-4 font-bold">Rs {payment.amount}</td>

                <td className="p-4 font-bold">{payment.type}</td>

                <td
                  className={`p-4 font-bold ${
                    payment.status === "Approved"
                      ? "text-green-600"
                      : payment.status === "Rejected"
                        ? "text-red-600"
                        : "text-blue-600"
                  }`}
                >
                  {payment.status}
                </td>

                <td className="p-4">
                  <Link to={`/editmanager/${payment._id}`}>
                    <button className="bg-green-700 hover:bg-[#1DB6D9] text-white px-5 py-2 rounded-xl border border-black font-bold transition-all">
                      Edit
                    </button>
                  </Link>
                </td>

                <td className="p-4">
                  <button
                    onClick={() => handleDelete(payment._id)}
                    className="bg-red-700 hover:bg-red-500 text-white px-5 py-2 rounded-xl border border-black font-bold transition-all"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MgView;
