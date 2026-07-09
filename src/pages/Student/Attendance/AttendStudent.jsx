import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Head from '../Header/Header';
import API from '../../../api';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function AttendStudent() {
  const [attendances,  setAttendances]  = useState([]);
  const [dateFilter,   setDateFilter]   = useState('');
  const [classFilter,  setClassFilter]  = useState('');
  const [studentName,  setStudentName]  = useState('');
  const [studentId,    setStudentId]    = useState('');
  const [loading,      setLoading]      = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        // Step 1: student profile se stdid aur name lo
        const profileRes = await API.get('/api/v1/studentprofile');
        const d = profileRes.data?.data || profileRes.data;
        const myStdid = d.stdid || '';
        setStudentId(myStdid);
        setStudentName(d.name || '');

        // Step 2: sab attendance records lo
        const attRes = await API.get('/api/attendance/attendancemark');
        const all = attRes.data?.data || attRes.data || [];
        // Step 3: sirf apni attendance filter karo
        setAttendances(Array.isArray(all) ? all.filter(a => a.studentId === myStdid) : []);
      } catch (err) {
        console.error('Attendance fetch error:', err);
        toast.error('Attendance load nahi ho saki');
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  // Client-side filter
  const filteredAttendances = attendances.filter(a =>
    (classFilter ? (a.classId || '').toLowerCase().includes(classFilter.toLowerCase()) : true) &&
    (dateFilter  ? (a.date || '').includes(dateFilter) : true)
  );

  // PDF generate
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Attendance Report', 14, 16);
    doc.text(`Student: ${studentName} (${studentId})`, 14, 24);
    doc.autoTable({
      head: [['Class ID', 'Subject', 'Teacher ID', 'Date', 'Time']],
      body: filteredAttendances.map(a => [
        a.classId || '—',
        a.subject  || '—',
        a.teacherId || '—',
        a.date     || '—',
        a.time     || '—',
      ]),
      startY: 30,
    });
    doc.save('my_attendance_report.pdf');
  };

  return (
    <div>
      <Head />

      <div className="max-w-4xl mx-auto px-4 mt-6 md:ml-[270px] pb-12">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-black text-[#063a67]">My Attendance</h2>
            <p className="text-xs text-gray-400 font-semibold mt-0.5">
              {studentName && `Student: ${studentName} · ID: ${studentId}`}
            </p>
          </div>
          <button
            onClick={generatePDF}
            className="bg-[#384D6C] hover:bg-[#283952] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all"
          >
            Download PDF
          </button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <input
            type="text"
            placeholder="Search by Class ID..."
            value={classFilter}
            onChange={e => setClassFilter(e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-xl font-semibold text-sm text-gray-700 focus:outline-none focus:border-[#384D6C]"
          />
          <input
            type="date"
            value={dateFilter}
            onChange={e => setDateFilter(e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-xl font-semibold text-sm text-gray-700 focus:outline-none focus:border-[#384D6C]"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          <div className="bg-white border-2 border-gray-100 rounded-[16px] p-4 text-center shadow-sm">
            <p className="text-2xl font-black text-[#384D6C]">{attendances.length}</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">Total Classes</p>
          </div>
          <div className="bg-white border-2 border-gray-100 rounded-[16px] p-4 text-center shadow-sm">
            <p className="text-2xl font-black text-emerald-600">{filteredAttendances.length}</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">Filtered</p>
          </div>
          <div className="bg-white border-2 border-gray-100 rounded-[16px] p-4 text-center shadow-sm col-span-2 sm:col-span-1">
            <p className="text-2xl font-black text-blue-600">
              {attendances.length > 0 ? Math.round((attendances.length / attendances.length) * 100) : 0}%
            </p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">Attendance</p>
          </div>
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex items-center gap-3 text-gray-400 font-semibold py-8">
            <div className="w-4 h-4 border-2 border-gray-300 border-t-[#384D6C] rounded-full animate-spin" />
            Loading attendance records...
          </div>
        ) : (
          <div className="bg-white border-2 border-gray-100 rounded-[20px] shadow-sm overflow-hidden">
            <div className="overflow-x-auto max-h-[400px] overflow-y-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead className="bg-[#384D6C] text-white font-black uppercase tracking-wider sticky top-0">
                  <tr>
                    <th className="px-4 py-3.5">Class ID</th>
                    <th className="px-4 py-3.5">Subject</th>
                    <th className="px-4 py-3.5">Teacher ID</th>
                    <th className="px-4 py-3.5">Date</th>
                    <th className="px-4 py-3.5">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700 font-medium">
                  {filteredAttendances.length > 0 ? (
                    filteredAttendances.map((a, i) => (
                      <tr key={a._id || i} className="hover:bg-slate-50/80 transition-colors">
                        <td className="px-4 py-3 font-bold text-[#384D6C]">{a.classId || '—'}</td>
                        <td className="px-4 py-3">
                          <span className="bg-purple-50 text-purple-700 border border-purple-100 px-2 py-0.5 rounded font-bold text-[11px] uppercase">
                            {a.subject || '—'}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-mono text-slate-500">{a.teacherId || '—'}</td>
                        <td className="px-4 py-3 text-slate-500">{a.date || '—'}</td>
                        <td className="px-4 py-3 text-[#10a1b6] font-bold">{a.time || '—'}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="px-4 py-10 text-center text-gray-400 font-semibold">
                        No attendance records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AttendStudent;
