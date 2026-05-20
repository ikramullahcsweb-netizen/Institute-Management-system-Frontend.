import React, { useState, useEffect } from "react";
import Head from "../Header/Header";
import { toast } from "react-hot-toast";
import jsPDF from "jspdf";
import "jspdf-autotable"; // Ensure autoTable plugin is accessible
import { useNavigate } from "react-router-dom";

function ManagerEnroll() {
  const navigate = useNavigate();

  // Pure Static Local State Data Matrix (Bina database dependency ke)
  const [enrollments, setEnrollments] = useState([
    {
      _id: "e1",
      studentId: "Ikram_MERN",
      classId: "SB-101",
      teacherid: "T-901",
      subject: "Advanced Physics",
      grade: "10",
    },
    {
      _id: "e2",
      studentId: "Ali_Dev",
      classId: "SB-102",
      teacherid: "T-904",
      subject: "Organic Chemistry",
      grade: "11",
    },
    {
      _id: "e3",
      studentId: "Zain_React",
      classId: "SB-103",
      teacherid: "T-909",
      subject: "Calculus & Matrices",
      grade: "12",
    },
  ]);

  const [filteredEnrollments, setFilteredEnrollments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    studentId: "",
    classId: "",
    teacherId: "",
    subject: "",
    time: "",
    grade: "",
  });

  // Sync filtered layout initially
  useEffect(() => {
    setFilteredEnrollments(enrollments);
  }, [enrollments]);

  // Pure Frontend Local Filtering Deletion logic (No page reload required)
  const handleDelete = (id) => {
    setEnrollments((prev) =>
      prev.filter((enrollment) => enrollment._id !== id),
    );
    toast.success("Enrollment deleted successfully from local panel");
  };

  // Real-time reactive local data filter
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = enrollments.filter((enrollment) =>
      Object.values(enrollment).some((value) => {
        if (typeof value === "string") {
          return value.toLowerCase().includes(query);
        }
        return false;
      }),
    );
    setFilteredEnrollments(filtered);
  };

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);
  const handleenrollform = () => navigate("/EnrollmentForm");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Local state creation simulator
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEnrollment = {
      _id: `e_${Date.now()}`,
      studentId: formData.studentId,
      classId: formData.classId,
      teacherid: formData.teacherId,
      subject: formData.subject,
      grade: formData.grade,
    };

    setEnrollments((prev) => [...prev, newEnrollment]);
    setShowPopup(false);
    toast.success("Enrollment appended locally in view layout");

    // Clear state
    setFormData({
      studentId: "",
      classId: "",
      teacherId: "",
      subject: "",
      time: "",
      grade: "",
    });
  };

  // Native dynamic client PDF engine compiling local structural array
  const generatePDF = () => {
    const doc = new jsPDF();
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    doc.text("Enrollments Report", 10, 10);
    doc.text(`Report Generated On: ${formattedDate}`, 10, 20);
    doc.autoTable({
      head: [["Student ID", "Class ID", "Teacher ID", "Subject", "Grade"]],
      body: enrollments.map((enrollment) => [
        enrollment.studentId,
        enrollment.classId,
        enrollment.teacherid,
        enrollment.subject,
        enrollment.grade,
      ]),
      startY: 30,
    });
    doc.save("enrollments_report.pdf");
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      <Head />

      <div className="w-full max-w-[1100px] mx-auto px-4 mt-6">
        {/* Title Dashboard Section */}
        <div className="border-b-2 border-gray-200 pb-4 mb-6">
          <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
            Enrollments Registry Layout
          </h1>
          <p className="text-xs text-gray-500 font-medium font-mono">
            Mock Mode: Active Monitor and Registry Records Workspace
          </p>
        </div>

        {/* Control and Action bar panel rows */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          <div className="w-full md:w-2/3">
            <input
              type="text"
              placeholder="Search by Student ID, Class ID, Teacher ID or Subject..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full bg-white border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-xs outline-none transition-all text-gray-700 font-medium shadow-xs"
            />
          </div>
          <div className="w-full md:w-auto flex items-center justify-end gap-2 shrink-0">
            <button
              onClick={handleenrollform}
              className="flex-1 md:flex-none bg-[#10a1b6] hover:bg-[#158fa1] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-5 rounded-xl shadow-sm transition-all"
            >
              Add Enrollment
            </button>
            <button
              onClick={generatePDF}
              className="flex-1 md:flex-none bg-[#13293d] hover:bg-[#1b3a57] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-5 rounded-xl shadow-sm transition-all"
            >
              Download PDF
            </button>
          </div>
        </div>

        {/* Master Output Workspace Grid Core Table view layout */}
        <div className="bg-white border-2 border-slate-200 rounded-[20px] shadow-sm p-4 overflow-hidden">
          <div className="overflow-x-auto border border-slate-100 rounded-xl">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-slate-50 text-gray-600 uppercase font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3.5">Student ID</th>
                  <th className="p-3.5">Class ID</th>
                  <th className="p-3.5">Teacher ID</th>
                  <th className="p-3.5">Subject</th>
                  <th className="p-3.5">Grade</th>
                  <th className="p-3.5 text-center">Action Bar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-gray-700">
                {filteredEnrollments.map((enrollment) => (
                  <tr
                    key={enrollment._id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="p-3.5 font-bold text-gray-800">
                      {enrollment.studentId}
                    </td>
                    <td className="p-3.5 text-gray-500">
                      {enrollment.classId}
                    </td>
                    <td className="p-3.5 text-gray-500">
                      {enrollment.teacherid}
                    </td>
                    <td className="p-3.5 text-[#13293d] font-semibold">
                      {enrollment.subject}
                    </td>
                    <td className="p-3.5">
                      <span className="px-2.5 py-0.5 bg-slate-100 border border-slate-200 rounded-md font-black text-gray-600">
                        G-{enrollment.grade}
                      </span>
                    </td>
                    <td className="p-3.5 text-center">
                      <button
                        onClick={() => handleDelete(enrollment._id)}
                        className="bg-red-50 hover:bg-red-600 text-red-600 hover:text-white font-bold px-3 py-1.5 rounded-lg border border-red-200 hover:border-red-600 transition-colors shadow-2xs"
                      >
                        Delete Row
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredEnrollments.length === 0 && (
                  <tr>
                    <td
                      colSpan="6"
                      className="p-8 text-center text-gray-400 font-bold"
                    >
                      No matching records matching criteria found locally.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Legacy Popup Form Overlay (Simulator backup structure if triggered) */}
      {showPopup && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex justify-center items-center p-4 z-50">
          <div className="bg-white border-2 border-slate-300 w-full max-w-[450px] rounded-[24px] shadow-2xl p-6 relative">
            <span
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-red-500 font-bold cursor-pointer transition-colors"
              onClick={handleClosePopup}
            >
              &times;
            </span>

            <h2 className="text-md font-black text-[#13293d] uppercase tracking-wide border-b pb-2 mb-4">
              Quick Append Data
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase text-gray-500">
                  Student ID
                </label>
                <input
                  type="text"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase text-gray-500">
                  Class ID
                </label>
                <input
                  type="text"
                  name="classId"
                  value={formData.classId}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase text-gray-500">
                  Teacher ID
                </label>
                <input
                  type="text"
                  name="teacherId"
                  value={formData.teacherId}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase text-gray-500">
                  Subject Name
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold uppercase text-gray-500">
                    Grade
                  </label>
                  <input
                    type="number"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold uppercase text-gray-500">
                    Time / Schedule
                  </label>
                  <input
                    type="text"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  className="w-1/2 bg-slate-100 hover:bg-slate-200 text-gray-500 text-xs font-bold py-2 rounded-xl transition-all"
                  onClick={handleClosePopup}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-[#10a1b6] hover:bg-[#13293d] text-white text-xs font-bold py-2 rounded-xl shadow-md transition-all"
                >
                  Append Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManagerEnroll;
