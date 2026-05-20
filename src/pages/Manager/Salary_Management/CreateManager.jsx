import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import Head from "../Header/Header";

function CreateManager() {
  const navigator = useNavigate();

  // Pure Static Local Mock Data (No Database endpoints required)
  const [teachersList] = useState([
    { name: "Dr. Asim", teid: "T-901", subject: "Advanced Physics" },
    { name: "Prof. Sana", teid: "T-904", subject: "Organic Chemistry" },
    { name: "Sir Zeeshan", teid: "T-909", subject: "Calculus & Matrices" },
  ]);

  // Component State Variables
  const [teacher, setTeacher] = useState("");
  const [TeacherID, setTeacherID] = useState("");
  const [SubjectName, setSubjectName] = useState("");
  const [Grade, setGrade] = useState("");
  const [AttendStudents, setAttendStudents] = useState("");
  const [subjectfee, setSubjectfee] = useState("1000"); // Standardized fallback value
  const [FreeCardAmount, setFreeCardAmount] = useState("");
  const [InstitutePayment, setInstitutePayment] = useState("");
  const [MonthlySalary, setMonthlySalary] = useState("");
  const [DateValue, setDateValue] = useState("");
  const [uploadPaymentFiles, setUploadPaymentFiles] = useState(null);

  // Synchronous client-side relational profile mapper
  useEffect(() => {
    if (teacher) {
      const selectedTeacher = teachersList.find((t) => t.name === teacher);
      if (selectedTeacher) {
        setSubjectName(selectedTeacher.subject);
        setTeacherID(selectedTeacher.teid);
      }
    } else {
      setTeacherID("");
      setSubjectName("");
    }
  }, [teacher, teachersList]);

  // Client-Side Arithmetic Calculation Engine
  const calculateMonthlySalary = () => {
    const studentsCount = parseFloat(AttendStudents) || 0;
    const feeFactor = parseFloat(subjectfee) || 1000;
    const freeCards = parseFloat(FreeCardAmount) || 0;
    const instituteCut = parseFloat(InstitutePayment) || 0;

    // Computational Formula: (Students * Fee) - (Deductions + Shares)
    const computedSalary =
      studentsCount * feeFactor - (freeCards + instituteCut);
    setMonthlySalary(computedSalary.toFixed(2));
    toast.success("Salary calculations synced!", { id: "calc-sync" });
  };

  // Toast progression animation workflow simulator
  const handleToastSequence = () => {
    toast.loading("Salary is processing locally...", {
      style: {
        background: "#13293d",
        color: "#ffffff",
        borderRadius: "12px",
        border: "1px solid #10a1b6",
      },
    });

    setTimeout(() => {
      toast.dismiss();
      setTimeout(() => {
        toast.success("Salary processing completed!", {
          style: {
            background: "#10a1b6",
            color: "#ffffff",
            borderRadius: "12px",
          },
          duration: 2000,
        });
        setTimeout(() => {
          navigator("/homemain");
        }, 2200);
      }, 500);
    }, 3000);
  };

  // Pure Local Submission Framework Simulation
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!MonthlySalary) {
      Swal.fire({
        title: "Calculation Missing",
        text: "Please trigger the 'Calculate' engine before file logging execution.",
        icon: "warning",
        confirmButtonColor: "#13293d",
      });
      return;
    }

    const mockPayload = {
      TeacherName: teacher,
      TeacherID,
      SubjectName,
      Grade,
      AttendStudents,
      subjectfee,
      FreeCardAmount,
      InstitutePayment,
      MonthlySalary,
      Date: DateValue,
      fileName: uploadPaymentFiles ? uploadPaymentFiles.name : null,
    };

    console.log("Static Local Payload Created:", mockPayload);

    Swal.fire({
      title: "Salary is Confirmed",
      text: "Data logged successfully inside the user workspace view.",
      icon: "success",
      confirmButtonColor: "#10a1b6",
    });

    handleToastSequence();
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans">
      <Head />
      <Toaster position="top-right" />

      <div className="w-full max-w-[700px] mx-auto px-4 mt-8">
        {/* Step 2 Brand Header Segment */}
        <div className="border-b-2 border-gray-200 pb-4 mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
              Payroll Management
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              Generate local structural salary vouchers for active staff members
            </p>
          </div>
          <span className="bg-[#13293d] text-[#10a1b6] px-3 py-1 rounded-md text-[10px] font-black tracking-widest uppercase font-mono">
            UI-Static
          </span>
        </div>

        {/* Core Workspace Registry Card */}
        <div className="bg-white border-2 border-slate-200 rounded-[24px] shadow-sm p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Row 1: Teacher Selector Field */}
            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs font-bold uppercase tracking-wider text-gray-600"
                htmlFor="teacherDropdown"
              >
                Teacher Name
              </label>
              <div className="relative">
                <select
                  id="teacherDropdown"
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all appearance-none text-gray-800 font-medium cursor-pointer"
                  required
                  value={teacher}
                  onChange={(e) => setTeacher(e.target.value)}
                >
                  <option value="">Select Target Instructor</option>
                  {teachersList.map((t, idx) => (
                    <option key={idx} value={t.name}>
                      {t.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
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

            {/* Row 2: Read-Only Meta Data Strings Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 border border-slate-100 p-4 rounded-xl">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Assigned Teacher ID
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none text-gray-500 font-medium cursor-not-allowed"
                  value={TeacherID}
                  readOnly
                  placeholder="Auto-assigned ID"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Course / Subject Track
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none text-gray-500 font-medium cursor-not-allowed"
                  value={SubjectName}
                  readOnly
                  placeholder="Auto-assigned Subject"
                />
              </div>
            </div>

            {/* Row 3: Class Specs inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-bold uppercase tracking-wider text-gray-600"
                  htmlFor="gradeSelector"
                >
                  Target Grade Frame
                </label>
                <div className="relative">
                  <select
                    id="gradeSelector"
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all appearance-none text-gray-800 font-medium cursor-pointer"
                    required
                    onChange={(e) => setGrade(e.target.value)}
                  >
                    <option value="">Select Grade</option>
                    {["6", "7", "8", "9", "10", "11"].map((g) => (
                      <option key={g} value={g}>
                        Grade {g}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
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

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-bold uppercase tracking-wider text-gray-600"
                  htmlFor="subfee"
                >
                  Per Subject Fee (Rs)
                </label>
                <input
                  type="text"
                  id="subfee"
                  className="w-full bg-white border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2 text-sm outline-none transition-all"
                  value={subjectfee}
                  required
                  onChange={(e) => setSubjectfee(e.target.value)}
                />
              </div>
            </div>

            {/* Row 4: Operational Numerical Metrics Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-100 pt-4">
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-bold uppercase tracking-wider text-gray-600"
                  htmlFor="attendStudents"
                >
                  Attending Students
                </label>
                <input
                  type="number"
                  id="attendStudents"
                  placeholder="e.g. 45"
                  className="w-full bg-white border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2 text-sm outline-none transition-all"
                  required
                  onChange={(e) => setAttendStudents(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-bold uppercase tracking-wider text-gray-600"
                  htmlFor="freeCardAmount"
                >
                  Free Card Cost
                </label>
                <input
                  type="number"
                  id="freeCardAmount"
                  placeholder="0.00"
                  className="w-full bg-white border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2 text-sm outline-none transition-all"
                  required
                  onChange={(e) => setFreeCardAmount(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-bold uppercase tracking-wider text-gray-600"
                  htmlFor="institutePayment"
                >
                  Institute Share
                </label>
                <input
                  type="number"
                  id="institutePayment"
                  placeholder="0.00"
                  className="w-full bg-white border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2 text-sm outline-none transition-all"
                  required
                  onChange={(e) => setInstitutePayment(e.target.value)}
                />
              </div>
            </div>

            {/* Calculation Trigger Deck */}
            <div className="flex justify-end pt-1">
              <button
                type="button"
                className="w-full sm:w-auto bg-[#13293d] hover:bg-[#1f4364] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-xl transition-all shadow-sm"
                onClick={calculateMonthlySalary}
              >
                Calculate Net Remuneration
              </button>
            </div>

            {/* Row 5: Financial Metrics Validation Outputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Calculated Net Salary (Rs)
                </label>
                <input
                  type="text"
                  placeholder="0.00"
                  className="w-full bg-slate-50 border-2 border-slate-200 text-[#10a1b6] font-black rounded-xl px-4 py-2 text-sm outline-none cursor-not-allowed"
                  value={MonthlySalary}
                  readOnly
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-bold uppercase tracking-wider text-gray-600"
                  htmlFor="date"
                >
                  Date Entry
                </label>
                <input
                  type="text"
                  id="date"
                  placeholder="DD/MM/YY"
                  pattern="(0[1-9]|1[0-9]|2[0-9]|3[0-1])/(0[1-9]|1[0-2])/\d{2}"
                  className="w-full bg-white border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2 text-sm outline-none transition-all font-mono"
                  required
                  onChange={(e) => setDateValue(e.target.value)}
                />
              </div>
            </div>

            {/* Row 6: Static File Input Stream Container */}
            <div className="flex flex-col gap-2 bg-slate-50 p-4 border border-slate-100 rounded-xl">
              <label
                className="text-xs font-bold uppercase tracking-wider text-gray-600"
                htmlFor="fileInput"
              >
                Upload Signed Document Proof
              </label>
              <input
                id="fileInput"
                type="file"
                accept=".pdf, .png, .jpg, .jpeg"
                className="text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#10a1b6]/10 file:text-[#10a1b6] hover:file:bg-[#10a1b6]/20 cursor-pointer"
                required
                onChange={(e) => setUploadPaymentFiles(e.target.files[0])}
              />
            </div>

            {/* Bottom Form Actions Grid */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                className="w-full sm:w-1/3 bg-slate-100 hover:bg-slate-200 text-gray-600 font-bold text-sm py-2.5 rounded-xl transition-all order-2 sm:order-1"
                onClick={() => navigator("/homemain")}
              >
                Back Dashboard
              </button>
              <button
                type="submit"
                className="w-full sm:w-2/3 bg-[#10a1b6] hover:bg-[#13293d] text-white font-bold text-sm uppercase tracking-wider py-2.5 rounded-xl transition-all shadow-md order-1 sm:order-2"
              >
                Confirm & Submit Salary
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateManager;
