import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import Head from "../Header/Header";

const SubjectView = () => {
  // Static mock array simulating local dashboard database tokens
  const [subjects, setSubjects] = useState([
    { _id: "s1", sbid: "SUB-101", subjectname: "Advanced Mathematics", grade: "Grade 10", teid: "TCH-012", teachername: "Asif Ali", amount: "4500" },
    { _id: "s2", sbid: "SUB-102", subjectname: "Organic Chemistry", grade: "Grade 11", teid: "TCH-019", teachername: "Zainab Khan", amount: "5000" },
    { _id: "s3", sbid: "SUB-103", subjectname: "Quantum Physics", grade: "Grade 12", teid: "TCH-004", teachername: "Dr. Kamran", amount: "5500" }
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDeleteSubject = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#10a1b6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Local structural state update without hitting any backend route
        setSubjects((prev) => prev.filter((subject) => subject._id !== id));
        toast.success("Subject deleted from frontend registry!");
      }
    });
  };

  const filteredSubjects = subjects.filter((subject) => {
    const search = searchTerm.toLowerCase();
    return (
      (subject.sbid && subject.sbid.toLowerCase().includes(search)) ||
      (subject.subjectname && subject.subjectname.toLowerCase().includes(search)) ||
      (subject.grade && subject.grade.toString().toLowerCase().includes(search)) ||
      (subject.teid && subject.teid.toLowerCase().includes(search)) ||
      (subject.teachername && subject.teachername.toLowerCase().includes(search))
    );
  });

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      <Head />

      <div className="w-full max-w-[1100px] mx-auto px-4 mt-6 pl-40">
        <div className="border-b-2 border-gray-200 pb-4 mb-6">
          <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
            View All Classes
          </h1>
          <p className="text-xs text-gray-500 font-medium">
            Manage academic subjects, teacher assignments, and fees (Frontend Mode)
          </p>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-[20px] shadow-sm overflow-hidden p-5">
          <input
            type="text"
            className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all mb-4"
            placeholder="Search by Teacher ID, Name, Grade, Subject ID, or Subject Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="overflow-x-auto border border-slate-100 rounded-xl">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-slate-50 text-gray-600 uppercase font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Subject ID</th>
                  <th className="p-3">Subject Name</th>
                  <th className="p-3">Grade</th>
                  <th className="p-3">Teacher ID</th>
                  <th className="p-3">Teacher Name</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-gray-700">
                {filteredSubjects.length > 0 ? (
                  filteredSubjects.map((subject) => (
                    <tr
                      key={subject._id}
                      className="hover:bg-slate-50/80 transition-colors"
                    >
                      <td className="p-3 font-semibold text-[#13293d]">
                        {subject.sbid}
                      </td>
                      <td className="p-3 font-medium">{subject.subjectname}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 bg-slate-100 rounded text-gray-600 font-bold">
                          {subject.grade}
                        </span>
                      </td>
                      <td className="p-3 text-gray-500">{subject.teid}</td>
                      <td className="p-3 font-medium">{subject.teachername}</td>
                      <td className="p-3 font-semibold text-emerald-600">
                        Rs. {subject.amount}
                      </td>
                      <td className="p-3 text-center">
                        <button
                          className="bg-red-50 hover:bg-red-600 text-red-600 hover:text-white font-bold px-3 py-1.5 rounded-lg border border-red-200 hover:border-red-600 transition-colors shadow-xs"
                          onClick={() => handleDeleteSubject(subject._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="p-8 text-center text-gray-400 font-medium"
                    >
                      No matching classes or subjects found.
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
};

export default SubjectView;