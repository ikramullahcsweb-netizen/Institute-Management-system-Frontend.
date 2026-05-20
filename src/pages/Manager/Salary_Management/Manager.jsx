import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import Head from "../Header/Header";

function Manager() {
  const navigator = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Pure Local Mock Data state mapping (Replaces server user arrays)
  const [users, setUsers] = useState([
    {
      _id: "sal_001",
      TeacherName: "Dr. Asim",
      TeacherID: "T-901",
      SubjectName: "Advanced Physics",
      Grade: "11",
      AttendStudents: "52",
      FreeCardAmount: "2000",
      InstitutePayment: "5000",
      MonthlySalary: "45000.00",
      Date: "12/05/26",
      upload_paymentFiles: "pay_receipt_asim.pdf",
    },
    {
      _id: "sal_002",
      TeacherName: "Prof. Sana",
      TeacherID: "T-904",
      SubjectName: "Organic Chemistry",
      Grade: "10",
      AttendStudents: "40",
      FreeCardAmount: "0",
      InstitutePayment: "4000",
      MonthlySalary: "36000.00",
      Date: "15/05/26",
      upload_paymentFiles: "pay_receipt_sana.pdf",
    },
    {
      _id: "sal_003",
      TeacherName: "Sir Zeeshan",
      TeacherID: "T-909",
      SubjectName: "Calculus & Matrices",
      Grade: "11",
      AttendStudents: "65",
      FreeCardAmount: "3500",
      InstitutePayment: "6500",
      MonthlySalary: "55000.00",
      Date: "16/05/26",
      upload_paymentFiles: "pay_receipt_zeeshan.pdf",
    },
  ]);

  // Synchronous internal deletion filter logic
  const executeLocalDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
  };

  // Live clientside target matching logic
  const filteredUsers = users.filter((user) => {
    return user.TeacherName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Toast animation pipeline workflow triggers
  const handleToastSequence = () => {
    toast.loading("Salary record removing locally...", {
      style: {
        background: "#13293d",
        color: "#ffffff",
        borderRadius: "12px",
        border: "1px solid #e11d48",
      },
    });

    setTimeout(() => {
      toast.dismiss();
      setTimeout(() => {
        toast.success("Salary history dropped successfully!", {
          style: {
            background: "#e11d48",
            color: "#ffffff",
            borderRadius: "12px",
          },
          duration: 2000,
        });
        setTimeout(() => {
          navigator("/homemain");
        }, 2200);
      }, 500);
    }, 2500);
  };

  // Intercepting prompt matrix
  const handleSubmit = (id) => {
    Swal.fire({
      title: "Delete Payment",
      text: "Are you sure you want to delete the Payment Record?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        executeLocalDelete(id);
        Swal.fire({
          title: "Payment Is Dropped",
          text: "The targeted ledger item was cleaned from virtual arrays.",
          icon: "success",
          confirmButtonColor: "#10a1b6",
        });
        handleToastSequence();
      } else {
        Swal.fire({
          title: "Changes Canceled",
          text: "Action aborted securely.",
          icon: "error",
          confirmButtonColor: "#13293d",
        });
      }
    });
  };

  // Mock workspace view generator file proxy
  const showFile = (fileName) => {
    alert(
      `Mock File Handler: Opening target payload document framework context window for "${fileName}"`,
    );
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans">
      <Head />
      <Toaster position="top-right" />

      <div className="w-full max-w-[1400px] mx-auto px-4 mt-8">
        {/* Dynamic Context Identity Header */}
        <div className="border-b-2 border-gray-200 pb-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
              Salary Ledger Console
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              Verify active record matrices, audit payments and structure
              modifications
            </p>
          </div>

          {/* Realtime Local Filtering Search Field Input */}
          <div className="relative w-full sm:w-72">
            <input
              type="search"
              className="w-full bg-white border-2 border-slate-200 focus:border-[#10a1b6] text-sm rounded-xl pl-10 pr-4 py-2 outline-none transition-all text-gray-700"
              placeholder="Filter by teacher name..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Data Deck Layout Table Canvas wrapper */}
        <div className="bg-white border-2 border-slate-200 rounded-[24px] overflow-hidden shadow-xs">
          <div className="overflow-x-auto w-full">
            <table className="w-full min-w-[1100px] border-collapse text-left">
              {/* Header Segment Grid mapping */}
              <thead>
                <tr className="bg-[#13293d] text-white border-b border-slate-200">
                  <th className="py-4 px-5 text-xs font-black uppercase tracking-wider">
                    Teacher Name
                  </th>
                  <th className="py-4 px-4 text-xs font-black uppercase tracking-wider">
                    Teacher ID
                  </th>
                  <th className="py-4 px-4 text-xs font-black uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="py-4 px-4 text-xs font-black uppercase tracking-wider text-center">
                    Grade
                  </th>
                  <th className="py-4 px-4 text-xs font-black uppercase tracking-wider text-center">
                    Students
                  </th>
                  <th className="py-4 px-4 text-xs font-black uppercase tracking-wider text-right">
                    Free Cards
                  </th>
                  <th className="py-4 px-4 text-xs font-black uppercase tracking-wider text-right">
                    Inst. Share
                  </th>
                  <th className="py-4 px-4 text-xs font-black uppercase tracking-wider text-right text-[#10a1b6]">
                    Net Salary
                  </th>
                  <th className="py-4 px-4 text-xs font-black uppercase tracking-wider text-center">
                    Date
                  </th>
                  <th className="py-4 px-5 text-xs font-black uppercase tracking-wider text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              {/* Data Body Matrix Mapping */}
              <tbody className="divide-y divide-slate-100 font-medium text-sm text-gray-700">
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((salary) => (
                    <tr
                      key={salary._id}
                      className="hover:bg-slate-50/80 transition-colors"
                    >
                      <td className="py-4 px-5 font-bold text-gray-900">
                        {salary.TeacherName}
                      </td>
                      <td className="py-4 px-4 text-xs font-mono font-bold text-slate-500">
                        {salary.TeacherID}
                      </td>
                      <td className="py-4 px-4 text-xs text-slate-600">
                        {salary.SubjectName}
                      </td>
                      <td className="py-4 px-4 text-xs text-center font-bold">
                        <span className="bg-slate-100 px-2 py-0.5 rounded text-gray-700">
                          G-{salary.Grade}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center font-mono">
                        {salary.AttendStudents}
                      </td>
                      <td className="py-4 px-4 text-right font-mono text-gray-500">
                        Rs {salary.FreeCardAmount}
                      </td>
                      <td className="py-4 px-4 text-right font-mono text-gray-500">
                        Rs {salary.InstitutePayment}
                      </td>
                      <td className="py-4 px-4 text-right font-mono font-black text-[#10a1b6]">
                        Rs {salary.MonthlySalary}
                      </td>
                      <td className="py-4 px-4 text-xs text-center text-gray-500 font-mono">
                        {salary.Date}
                      </td>

                      {/* Operational Controls Matrix Deck */}
                      <td className="py-4 px-5">
                        <div className="flex items-center justify-center gap-2">
                          <Link to={`/updatesal/${salary._id}`}>
                            <button className="bg-slate-100 hover:bg-[#13293d] text-[#13293d] hover:text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-colors border border-slate-200">
                              Update
                            </button>
                          </Link>
                          <button
                            className="bg-slate-100 hover:bg-[#10a1b6] text-gray-700 hover:text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-colors border border-slate-200"
                            onClick={() => showFile(salary.upload_paymentFiles)}
                          >
                            View File
                          </button>
                          <button
                            className="bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-colors border border-rose-100"
                            onClick={() => handleSubmit(salary._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="10"
                      className="py-12 text-center text-sm font-medium text-gray-400 uppercase tracking-wider"
                    >
                      No matching instructor registries located inside active
                      memory array.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manager;
