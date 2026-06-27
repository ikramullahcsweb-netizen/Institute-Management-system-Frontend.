import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import axios from "axios";
import Head from "../Header/Header";

function Manager() {
  const navigator = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchSalaries();
  }, []);

  const fetchSalaries = async () => {
    try {
      const res = await axios.get("http://localhost:5000/displaySalaries");
      setUsers(res.data);
    } catch (error) {
      toast.error("Failed to fetch salary records");
    }
  };

  const handleToastSequence = () => {
    toast.loading("Salary record removing...", {
      style: { background: "#13293d", color: "#ffffff", borderRadius: "12px" },
    });

    setTimeout(() => {
      toast.dismiss();
      setTimeout(() => {
        toast.success("Salary history dropped successfully!", {
          style: { background: "#28a745", color: "#ffffff", borderRadius: "12px" },
          iconTheme: { primary: "#ffffff", secondary: "#28a745" },
        });
        setTimeout(() => {
          navigator("/homemain");
        }, 2500);
      }, 500);
    }, 5000);
  };

  const deleteSalary = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/deleteSalary/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      handleToastSequence();
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  const handleSubmit = (id) => {
    Swal.fire({
      title: "Delete Payment",
      text: "Are you sure you want to delete the Payment Record?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e11d48",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSalary(id);
      }
    });
  };

  const showFile = (fileName) => {
    window.open(`http://localhost:5000/files3/${fileName}`, "_blank", "noreferrer");
  };

  const filteredUsers = users.filter((user) =>
    user.TeacherName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans">
      <Head />
      <Toaster position="top-right" />

      <div className="w-full max-w-[1400px] mx-auto px-4 mt-8">
        <div className="border-b-2 border-gray-200 pb-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">Salary Ledger Console</h1>
            <p className="text-xs text-gray-500 font-medium">Verify active record matrices and audit payments.</p>
          </div>

          <div className="relative w-full sm:w-72">
            <input
              type="search"
              className="w-full bg-white border-2 border-slate-200 rounded-xl pl-10 pr-4 py-2 outline-none"
              placeholder="Filter by teacher name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-[24px] overflow-hidden shadow-xs">
          <div className="overflow-x-auto w-full">
            <table className="w-full min-w-[1100px] text-left">
              <thead>
                <tr className="bg-[#13293d] text-white">
                  <th className="py-4 px-5 text-xs font-black uppercase">Teacher Name</th>
                  <th className="py-4 px-4 text-xs font-black uppercase">Teacher ID</th>
                  <th className="py-4 px-4 text-xs font-black uppercase">Subject</th>
                  <th className="py-4 px-4 text-xs font-black uppercase text-right">Net Salary</th>
                  <th className="py-4 px-5 text-xs font-black uppercase text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredUsers.map((salary) => (
                  <tr key={salary._id} className="hover:bg-slate-50">
                    <td className="py-4 px-5 font-bold">{salary.TeacherName}</td>
                    <td className="py-4 px-4 font-mono text-xs text-slate-500">{salary.TeacherID}</td>
                    <td className="py-4 px-4 text-xs">{salary.SubjectName}</td>
                    <td className="py-4 px-4 text-right font-black text-[#10a1b6]">Rs {salary.MonthlySalary}</td>
                    <td className="py-4 px-5">
                      <div className="flex justify-center gap-2">
                        <Link to={`/updatesal/${salary._id}`} className="bg-slate-100 text-xs font-bold py-1.5 px-3 rounded-lg border">Update</Link>
                        <button onClick={() => showFile(salary.upload_paymentFiles)} className="bg-slate-100 text-xs font-bold py-1.5 px-3 rounded-lg border">View File</button>
                        <button onClick={() => handleSubmit(salary._id)} className="bg-rose-50 text-rose-600 text-xs font-bold py-1.5 px-3 rounded-lg border">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manager;