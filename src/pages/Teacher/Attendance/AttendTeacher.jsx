import React, { useState, useEffect } from "react";
import Head from "../Header/Header";
import API from "../../../api";
import jsPDF from "jspdf";
import "jspdf-autotable";

function AttendTeacher() {
  const [classFilter,   setClassFilter]   = useState("");
  const [studentFilter, setStudentFilter] = useState("");
  const [attendances,   setAttendances]   = useState([]);
  const [teacherName,   setTeacherName]   = useState("");
  const [loading,       setLoading]       = useState(true);
  const [error,         setError]         = useState("");

  useEffect(() => {
    const fetchAll = async () => {
      try {
        // Step 1: Teacher profile se naam lo
        const profileRes = await API.get('/api/v1/teacherprofile');
        const d = profileRes.data?.data || profileRes.data;
        setTeacherName(d.name || '');

        // Step 2: Sab attendance records lo
        const attRes = await API.get('/api/attendance/attendancemark');
        const all = attRes.data?.data || attRes.data || [];
        setAttendances(Array.isArray(all) ? all : []);
        setError('');
      } catch (err) {
        console.error("Attendance fetch error:", err);
        setError("Attendance records load nahi ho sakay. Dobara koshish karein.");
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  const filteredAttendances = attendances.filter(a =>
    (a.classId   || '').toLowerCase().includes(classFilter.toLowerCase()) &&
    (a.studentId || '').toLowerCase().includes(studentFilter.toLowerCase())
  );

  const generateFilteredPDF = () => {
    const doc = new jsPDF();
    doc.text("Filtered Attendance Report", 10, 10);
    doc.text(`Teacher: ${teacherName}`, 10, 18);
    doc.autoTable({
      head: [["Class ID", "Student ID", "Subject", "Date", "Time"]],
      body: filteredAttendances.map(a => [
        a.classId   || '—',
        a.studentId || '—',
        a.subject   || '—',
        a.date      || '—',
        a.time      || '—',
      ]),
      startY: 25,
    });
    doc.save("filtered_attendance.pdf");
  };

  const generateAllPDF = () => {
    const doc = new jsPDF();
    doc.text("Full Attendance Report", 10, 10);
    doc.text(`Teacher: ${teacherName}`, 10, 18);
    doc.autoTable({
      head: [["Class ID", "Student ID", "Subject", "Date", "Time"]],
      body: attendances.map(a => [
        a.classId   || '—',
        a.studentId || '—',
        a.subject   || '—',
        a.date      || '—',
        a.time      || '—',
      ]),
      startY: 25,
    });
    doc.save("all_attendance.pdf");
  };

  return (
    <main className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      <Head />

      <div className="w-full max-w-[1250px] mx-auto px-4 mt-6 md:pl-[230px] transition-all">

        {/* Header */}
        <div className="border-b-2 border-gray-200 pb-4 mb-6">
          <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
            Attendance Records
          </h1>
          <p className="text-xs text-gray-500 font-medium">
            View and export student attendance records
          </p>
        </div>

        <div className="w-full bg-white border-2 border-slate-200 rounded-[20px] shadow-sm overflow-hidden">

          <div className="bg-slate-50 px-6 py-4 border-b-2 border-slate-200 text-center text-sm font-black text-[#384D6C] uppercase tracking-wider">
            Class Attendance Matrix
          </div>

          <div className="p-6">
            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all text-gray-800 font-medium"
                placeholder="Search by Class ID..."
                value={classFilter}
                onChange={e => setClassFilter(e.target.value)}
              />
              <input
                type="text"
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all text-gray-800 font-medium"
                placeholder="Search by Student ID..."
                value={studentFilter}
                onChange={e => setStudentFilter(e.target.value)}
              />
            </div>

            {/* Error */}
            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-bold flex items-center justify-between">
                <span>{error}</span>
                <button onClick={() => window.location.reload()} className="ml-3 underline font-black">Retry</button>
              </div>
            )}

            {/* Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-xl mb-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead className="bg-[#13293d] text-white uppercase font-black tracking-wider">
                  <tr>
                    <th className="px-4 py-3.5">Class ID</th>
                    <th className="px-4 py-3.5">Student ID</th>
                    <th className="px-4 py-3.5">Subject</th>
                    <th className="px-4 py-3.5">Date</th>
                    <th className="px-4 py-3.5">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-gray-700 font-medium bg-white">
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="p-8 text-center text-gray-400 font-bold">
                        Loading attendance records...
                      </td>
                    </tr>
                  ) : filteredAttendances.length > 0 ? (
                    filteredAttendances.map((a, i) => (
                      <tr key={a._id || i} className="hover:bg-slate-50/60 transition-colors">
                        <td className="px-4 py-3 font-bold text-[#13293d]">{a.classId || '—'}</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-0.5 bg-[#C9E8EA]/60 text-[#384D6C] rounded font-bold">
                            {a.studentId || '—'}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="bg-purple-50 text-purple-700 border border-purple-100 px-2 py-0.5 rounded font-bold text-[11px] uppercase">
                            {a.subject || '—'}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-500">{a.date || '—'}</td>
                        <td className="px-4 py-3 text-[#10a1b6] font-bold">{a.time || '—'}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="p-8 text-center text-gray-400 font-bold">
                        No attendance records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* PDF Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={generateFilteredPDF}
                className="w-full sm:w-auto bg-[#10a1b6] hover:bg-[#128a9c] text-white text-xs font-bold py-2.5 px-5 rounded-xl transition-all uppercase tracking-wider"
              >
                Download Filtered PDF
              </button>
              <button
                type="button"
                onClick={generateAllPDF}
                className="w-full sm:w-auto bg-[#384D6C] hover:bg-[#2b3c54] text-white text-xs font-bold py-2.5 px-5 rounded-xl transition-all uppercase tracking-wider"
              >
                Download All PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AttendTeacher;
