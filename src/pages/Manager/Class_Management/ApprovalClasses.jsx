import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Head from "../Header/Header";

function ApprovalClasses() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Pure frontend state placeholders (Bina backend fetch ke)
  const [teacher, setTeacher] = useState("Default Teacher");
  const [grade, setGrade] = useState("Grade 10");
  const [subject, setSubject] = useState("Physics");
  const [date1, setDate1] = useState("2026-05-20");
  const [date2, setDate2] = useState("2026-05-22");
  const [date3, setDate3] = useState("");
  const [date4, setDate4] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/requestedadditionalclasses");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Update Additional Class?",
      text: "Are you sure you want to proceed with these changes on frontend?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#10a1b6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Updated Successfully!",
          text: "Changes saved locally on frontend interface.",
          icon: "success",
          confirmButtonColor: "#10a1b6",
        });
        // Direct frontend routing without page crash or loading delays
        navigate("/requestedadditionalclasses");
      }
    });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      <Head />

      <div className="w-full max-w-[750px]  mx-auto px-4 mt-6">
        {/* Header Block Title Area */}
        <div className="border-b-2 border-gray-200 pb-4 mb-6 pl-100">
          <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
            Manage & Approve Class (UI Mode)
          </h1>
          <p className="text-xs text-gray-500 font-medium">
            Review scheduling criteria and alter status registries
          </p>
        </div>

        {/* Master Form Workspace Container */}
        <div className="bg-white border-2 border-slate-200 rounded-[20px] shadow-sm p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Teacher Input Field */}
            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs font-bold uppercase tracking-wider text-gray-600"
                htmlFor="teacherInput"
              >
                Teacher Name
              </label>
              <input
                type="text"
                id="teacherInput"
                pattern="[A-Za-z\s]+"
                required
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all text-gray-800 font-medium"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
              />
            </div>

            {/* Double Grid Layout (Grade & Subject) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-bold uppercase tracking-wider text-gray-600"
                  htmlFor="cgrade"
                >
                  Grade
                </label>
                <input
                  type="text"
                  id="cgrade"
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all text-gray-800 font-medium"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-bold uppercase tracking-wider text-gray-600"
                  htmlFor="csubject"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="csubject"
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all text-gray-800 font-medium"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
            </div>

            {/* Quad Grid Layout (All Tracking Dates Fields) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-[10px] font-black uppercase tracking-wider text-gray-500"
                  htmlFor="cdate1"
                >
                  Date 1
                </label>
                <input
                  type="text"
                  id="cdate1"
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-lg p-2.5 text-xs outline-none transition-all text-gray-700"
                  value={date1}
                  onChange={(e) => setDate1(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-[10px] font-black uppercase tracking-wider text-gray-500"
                  htmlFor="cdate2"
                >
                  Date 2
                </label>
                <input
                  type="text"
                  id="cdate2"
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-lg p-2.5 text-xs outline-none transition-all text-gray-700"
                  value={date2}
                  onChange={(e) => setDate2(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-[10px] font-black uppercase tracking-wider text-gray-500"
                  htmlFor="cdate3"
                >
                  Date 3
                </label>
                <input
                  type="text"
                  id="cdate3"
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-lg p-2.5 text-xs outline-none transition-all text-gray-700"
                  value={date3}
                  onChange={(e) => setDate3(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-[10px] font-black uppercase tracking-wider text-gray-500"
                  htmlFor="cdate4"
                >
                  Date 4
                </label>
                <input
                  type="text"
                  id="cdate4"
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-lg p-2.5 text-xs outline-none transition-all text-gray-700"
                  value={date4}
                  onChange={(e) => setDate4(e.target.value)}
                />
              </div>
            </div>

            {/* Status Management Dropdown Box */}
            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs font-bold uppercase tracking-wider text-gray-600"
                htmlFor="status"
              >
                Approval Status
              </label>
              <div className="relative">
                <select
                  id="status"
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all appearance-none text-gray-800 font-bold cursor-pointer"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Pending" className="text-amber-600 font-bold">
                    ⚠️ Pending
                  </option>
                  <option
                    value="Approved"
                    className="text-emerald-600 font-bold"
                  >
                    ✅ Approved
                  </option>
                  <option value="Rejected" className="text-red-600 font-bold">
                    ❌ Rejected
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Control Form Buttons Interface Actions */}
            <div className="flex flex-col sm:flex-row justify-end items-center gap-3 pt-4 border-t border-slate-100">
              <button
                className="w-full sm:w-auto order-2 sm:order-1 bg-slate-100 hover:bg-slate-200 text-gray-600 text-sm font-bold py-2.5 px-6 rounded-xl transition-all"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="w-full sm:w-auto order-1 sm:order-2 bg-[#10a1b6] hover:bg-[#1b5592] text-white text-sm font-bold py-2.5 px-8 rounded-xl shadow-md transition-all"
                type="submit"
              >
                Save Configurations
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ApprovalClasses;
