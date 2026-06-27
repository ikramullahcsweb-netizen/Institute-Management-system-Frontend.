import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "../Header/Header";
import jsPDF from "jspdf";
import "jspdf-autotable";

const BASE_URL = "http://localhost:3000";
const API_BASE = `${BASE_URL}/api`;

function AttendTeacher() {
  const [classFilter, setClassFilter] = useState("");
  const [studentFilter, setStudentFilter] = useState("");
  const [attendances, setAttendances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = () => {
    setLoading(true);
    axios
      .get(`${API_BASE}/attendance/attendancemark`, { withCredentials: true })
      .then((res) => {
        setAttendances(res.data.data || []);
        setError("");
      })
      .catch((err) => {
        console.error("Error fetching attendance:", err);
        setError("Attendance records load nahi ho sakay. Dobara koshish karein.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleClassFilter = (e) => setClassFilter(e.target.value);
  const handleStudentFilter = (e) => setStudentFilter(e.target.value);

  const filteredAttendances = attendances.filter(
    (attendance) =>
      (attendance.classId || "").toLowerCase().includes(classFilter.toLowerCase()) &&
      (attendance.studentId || "").toLowerCase().includes(studentFilter.toLowerCase()),
  );

  const generateFilteredPDF = () => {
    const doc = new jsPDF();
    doc.text("Filtered CS Department Attendance Report", 10, 10);
    doc.autoTable({
      head: [["Course / Lab ID", "CS Student Roll No", "Date", "Timestamp"]],
      body: filteredAttendances.map((att) => [att.classId, att.studentId, att.date || "-", att.time || "-"]),
      startY: 20,
    });
    doc.save("filtered_cs_attendance.pdf");
  };

  const generateAllPDF = () => {
    const doc = new jsPDF();
    doc.text("All CS Department Attendance Report", 10, 10);
    doc.autoTable({
      head: [["Course / Lab ID", "CS Student Roll No", "Date", "Timestamp"]],
      body: attendances.map((att) => [att.classId, att.studentId, att.date || "-", att.time || "-"]),
      startY: 20,
    });
    doc.save("all_cs_attendance.pdf");
  };

  return (
    <main className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      <Head />
      <div className="w-full max-w-[1250px] mx-auto px-4 mt-6 md:pl-[260px] transition-all duration-300">
        <div className="border-b-2 border-gray-200 pb-4 mb-6">
          <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
            CS Attendance Terminal
          </h1>
          <p className="text-xs text-gray-500 font-medium">
            Monitor and track computer science lectures & lab registries
          </p>
        </div>

        <div className="w-full bg-white border-2 border-slate-200 rounded-[20px] shadow-sm overflow-hidden">
          <div className="bg-slate-50 px-6 py-4 border-b-2 border-slate-200 text-center text-sm font-black text-[#384D6C] uppercase tracking-wider">
            View CS Course Lectures & Lab Attendance Matrix
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all text-gray-800 font-medium"
                placeholder="Search by CS Course (e.g., CS-301, Machine Learning)"
                value={classFilter}
                onChange={handleClassFilter}
              />
              <input
                type="text"
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all text-gray-800 font-medium"
                placeholder="Search by Roll No (e.g., CS-2026-)"
                value={studentFilter}
                onChange={handleStudentFilter}
              />
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-bold flex items-center justify-between">
                <span>{error}</span>
                <button onClick={fetchAttendance} className="ml-3 underline font-black">
                  Retry
                </button>
              </div>
            )}

            <div className="overflow-x-auto border border-slate-200 rounded-xl mb-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead className="bg-slate-50 text-gray-600 uppercase font-bold border-b border-slate-200">
                  <tr>
                    <th scope="col" className="p-3.5">Course / Lab Module</th>
                    <th scope="col" className="p-3.5">CS Student Roll No</th>
                    <th scope="col" className="p-3.5">Date Signature</th>
                    <th scope="col" className="p-3.5">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-gray-700 font-medium">
                  {loading && (
                    <tr>
                      <td colSpan="4" className="p-8 text-center text-gray-400 font-bold">
                        Loading attendance records...
                      </td>
                    </tr>
                  )}

                  {!loading &&
                    filteredAttendances.map((attendance) => (
                      <tr key={attendance._id} className="hover:bg-slate-50/60 transition-colors">
                        <td className="p-3.5 font-bold text-[#13293d]">{attendance.classId}</td>
                        <td className="p-3.5">
                          <span className="px-2 py-0.5 bg-[#C9E8EA]/60 text-[#384D6C] rounded font-bold">
                            {attendance.studentId}
                          </span>
                        </td>
                        <td className="p-3.5 text-gray-500">{attendance.date || "-"}</td>
                        <td className="p-3.5 text-gray-500">{attendance.time || "-"}</td>
                      </tr>
                    ))}

                  {!loading && filteredAttendances.length === 0 && (
                    <tr>
                      <td colSpan="4" className="p-8 text-center text-gray-400 font-bold">
                        No computing logging profiles matched the search criteria filter.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
              <button
                type="button"
                className="w-full sm:w-auto bg-[#10a1b6] hover:bg-[#128a9c] text-white text-xs font-bold py-2.5 px-5 rounded-xl shadow-xs transition-all uppercase tracking-wider"
                onClick={generateFilteredPDF}
              >
                Download Filtered Report
              </button>
              <button
                type="button"
                className="w-full sm:w-auto bg-[#384D6C] hover:bg-[#2b3c54] text-white text-xs font-bold py-2.5 px-5 rounded-xl shadow-xs transition-all uppercase tracking-wider"
                onClick={generateAllPDF}
              >
                Download All Entries
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AttendTeacher;