import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import Head from "../Header/Header";

function UpdateManager() {
  const { id } = useParams();
  const navigator = useNavigate();

  // Unified component states initialized with mock target placeholder layout data
  const [TeacherName, setEnterTeacherName] = useState("");
  const [TeacherID, setEnterTeacherID] = useState("");
  const [SubjectName, setEnetrSubjectName] = useState("");
  const [Grade, setEnterGrade] = useState("");
  const [AttendStudents, setEnterEnrollStudent] = useState("");
  const [FreeCardAmount, setEnterFreeCardAmount] = useState("");
  const [InstitutePayment, setEnterInstitutePayment] = useState("");
  const [MonthlySalary, setEnterMonthelySalary] = useState("");
  const [DateValue, setEnetrDate] = useState("");

  // Simulating clientside data load from standard workspace ledger arrays
  useEffect(() => {
    // Automatic fallback structure simulator corresponding to passed param key
    console.log(`Mocking local data extraction engine context for key: ${id}`);

    setEnterTeacherName("Dr. Asim");
    setEnterTeacherID("T-901");
    setEnetrSubjectName("Advanced Physics");
    setEnterGrade("11");
    setEnterEnrollStudent("52");
    setEnterFreeCardAmount("2000.00");
    setEnterInstitutePayment("5000.00");
    setEnterMonthelySalary("45000.00");
    setEnetrDate("12/05/26");
  }, [id]);

  // Toast completion transition workflow timeline
  const handleToastSequence = () => {
    toast.loading("Saving local field alterations...", {
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
        toast.success("Salary configuration updated locally!", {
          style: {
            background: "#10a1b6",
            color: "#ffffff",
            borderRadius: "12px",
          },
          duration: 2000,
        });
        setTimeout(() => {
          // Navigates directly back to management dashboard stack view
          navigator("/managersalary");
        }, 2200);
      }, 500);
    }, 3000);
  };

  // Safe client interceptor logic execution framework
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Update Salary Profile",
      text: "Are you sure you want to persist these modifications inside local memory tables?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#10a1b6",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Yes, commit changes!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Output mock log confirmation array matrix safely to device terminal console
        console.log("Local Update Matrix Saved:", {
          id,
          TeacherName,
          TeacherID,
          SubjectName,
          Grade,
          AttendStudents,
          FreeCardAmount,
          InstitutePayment,
          MonthlySalary,
          DateValue,
        });

        Swal.fire({
          title: "Salary Is Updated",
          text: "State payload configurations updated inside local variables workflow grid.",
          icon: "success",
          confirmButtonColor: "#13293d",
        });
        handleToastSequence();
      } else {
        Swal.fire({
          title: "Update Discarded",
          text: "Alteration execution pipelines cancelled safely.",
          icon: "error",
          confirmButtonColor: "#13293d",
        });
      }
    });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans">
      <Head />
      <Toaster position="top-right" />

      <div className="w-full max-w-[700px] mx-auto px-4 mt-8">
        {/* Step 2 Consistent Profile Header Identity View */}
        <div className="border-b-2 border-gray-200 pb-4 mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
              Modify Salary Entry
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              Re-adjust and audit individual staff compensation allocations
              securely
            </p>
          </div>
          <span className="bg-[#10a1b6] text-white px-2.5 py-1 rounded-md text-[10px] font-black tracking-widest font-mono shadow-xs">
            EDIT MODE
          </span>
        </div>

        {/* Operational Workspace View Entry Box Sheet */}
        <div className="bg-white border-2 border-slate-200 rounded-[24px] shadow-sm p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Row 1: Primary Instructor Identity String inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Teacher Name
                </label>
                <input
                  type="text"
                  placeholder="Instructor Name"
                  value={TeacherName}
                  pattern="[A-Za-z\s]+"
                  required
                  className="w-full bg-white border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2 text-sm outline-none transition-all font-medium text-gray-800"
                  onChange={(e) => setEnterTeacherName(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Teacher ID
                </label>
                <input
                  type="text"
                  placeholder="System ID Reference"
                  value={TeacherID}
                  required
                  className="w-full bg-white border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2 text-sm outline-none transition-all font-mono text-gray-700"
                  onChange={(e) => setEnterTeacherID(e.target.value)}
                />
              </div>
            </div>

            {/* Row 2: Subject Track Assignment Data Layer inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Subject Name
                </label>
                <input
                  type="text"
                  placeholder="Course Category Name"
                  value={SubjectName}
                  pattern="[A-Za-z\s]+"
                  required
                  className="w-full bg-white border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2 text-sm outline-none transition-all text-gray-700"
                  onChange={(e) => setEnetrSubjectName(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Target Grade Frame
                </label>
                <input
                  type="text"
                  placeholder="Class Range e.g. 10"
                  value={Grade}
                  pattern="[0-9]+"
                  required
                  className="w-full bg-white border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2 text-sm outline-none transition-all font-mono"
                  onChange={(e) => setEnterGrade(e.target.value)}
                />
              </div>
            </div>

            {/* Row 3: Class Numeric Parameters Field Matrix inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-100 pt-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Attending Students
                </label>
                <input
                  type="text"
                  placeholder="Active count"
                  value={AttendStudents}
                  pattern="[0-9]+"
                  required
                  className="w-full bg-white border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2 text-sm outline-none transition-all font-mono"
                  onChange={(e) => setEnterEnrollStudent(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Free Card Value
                </label>
                <input
                  type="text"
                  placeholder="0.00"
                  value={FreeCardAmount}
                  pattern="\d+(\.\d{2})?"
                  required
                  className="w-full bg-white border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2 text-sm outline-none transition-all font-mono"
                  onChange={(e) => setEnterFreeCardAmount(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Institute Split
                </label>
                <input
                  type="text"
                  placeholder="0.00"
                  value={InstitutePayment}
                  pattern="\d+(\.\d{2})?"
                  required
                  className="w-full bg-white border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2 text-sm outline-none transition-all font-mono"
                  onChange={(e) => setEnterInstitutePayment(e.target.value)}
                />
              </div>
            </div>

            {/* Row 4: Valuation Yield Outcomes Results Panel inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600 text-[#10a1b6]">
                  Net Monthly Salary
                </label>
                <input
                  type="text"
                  placeholder="Calculated Sum"
                  value={MonthlySalary}
                  pattern="\d+(\.\d{2})?"
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 text-[#10a1b6] font-black rounded-xl px-4 py-2 text-sm outline-none focus:border-[#10a1b6]"
                  onChange={(e) => setEnterMonthelySalary(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Effective Date
                </label>
                <input
                  type="text"
                  placeholder="DD/MM/YY"
                  value={DateValue}
                  pattern="(0[1-9]|1[0-9]|2[0-9]|3[0-1])/(0[1-9]|1[0-2])/\d{2}"
                  required
                  className="w-full bg-white border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2 text-sm outline-none transition-all font-mono text-gray-700"
                  onChange={(e) => setEnetrDate(e.target.value)}
                />
              </div>
            </div>

            {/* Bottom Actions Framework Form Controller Alignment Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-slate-100">
              <button
                type="button"
                className="w-full sm:w-1/3 bg-slate-100 hover:bg-slate-200 text-gray-600 font-bold text-sm py-2.5 rounded-xl transition-all order-2 sm:order-1"
                onClick={() => navigator("/managersalary")}
              >
                Back To Ledger
              </button>
              <button
                type="submit"
                className="w-full sm:w-2/3 bg-[#10a1b6] hover:bg-[#13293d] text-white font-bold text-sm uppercase tracking-wider py-2.5 rounded-xl transition-all shadow-md order-1 sm:order-2"
              >
                Apply Adjustments
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateManager;
