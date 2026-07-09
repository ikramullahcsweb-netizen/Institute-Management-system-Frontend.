import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Head from '../Header/Header';
import API from '../../../api';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function Attend() {
  const [enrollments,  setEnrollments]  = useState([]);
  const [attendances,  setAttendances]  = useState([]);
  const [search,       setSearch]       = useState('');
  const [dateFilter,   setDateFilter]   = useState('');
  const [loading,      setLoading]      = useState(true);

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    setLoading(true);
    try {
      const [enrollRes, attRes] = await Promise.all([
        API.get('/api/enrollments/classenrollments'),
        API.get('/api/attendance/attendancemark'),
      ]);
      const enroll = enrollRes.data?.data || enrollRes.data || [];
      const attend = attRes.data?.data    || attRes.data    || [];
      setEnrollments(Array.isArray(enroll) ? enroll : []);
      setAttendances(Array.isArray(attend) ? attend : []);
    } catch (err) {
      console.error('Fetch error:', err);
      toast.error('Data load nahi ho saka');
    } finally {
      setLoading(false);
    }
  };

  const markAttendance = async (enrollment) => {
    try {
      await API.post('/api/attendance/attendancemark', {
        studentId: enrollment.studentId,
        classId:   enrollment.classId,
        teacherId: enrollment.teacherid,
        subject:   enrollment.subject,
      });
      toast.success('Attendance marked!');
      fetchAll();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Mark karna fail ho gaya');
    }
  };

  const handleClearAttendance = async () => {
    if (!window.confirm('Are you sure you want to clear all attendance?')) return;
    try {
      // Delete one by one since there's no bulk delete route
      await Promise.all(attendances.map(a => API.delete(`/api/attendance/attendancemark/${a._id}`)));
      setAttendances([]);
      toast.success('Attendance cleared!');
    } catch (err) {
      toast.error('Clear karna fail ho gaya');
    }
  };

  const filteredEnrollments = enrollments.filter(e =>
    Object.values(e).some(v => typeof v === 'string' && v.toLowerCase().includes(search.toLowerCase()))
  );

  const filteredAttendances = attendances.filter(a =>
    dateFilter ? (a.date || '').includes(dateFilter) : true
  );

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Attendance Report', 14, 16);
    doc.autoTable({
      head: [['Student ID', 'Class ID', 'Subject', 'Date', 'Time']],
      body: filteredAttendances.map(a => [a.studentId, a.classId, a.subject, a.date, a.time]),
      startY: 22,
    });
    doc.save('attendance_report.pdf');
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      <Head />

      <div className="w-full max-w-[1100px] mx-auto px-4 mt-6 md:pl-[260px]">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b-2 border-gray-200 pb-4 mb-6">
          <div>
            <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">Attendance Management</h1>
            <p className="text-xs text-gray-500 font-medium">Mark, view, and export attendance reports</p>
          </div>
          <button onClick={generatePDF} className="bg-[#10a1b6] hover:bg-[#0e8a9c] text-white text-sm font-bold py-2.5 px-5 rounded-xl shadow-sm transition-all">
            Download PDF Report
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Mark Attendance */}
          <div className="lg:col-span-7 bg-white border-2 border-slate-200 rounded-[20px] shadow-sm overflow-hidden">
            <div className="bg-slate-100 px-5 py-4 border-b border-slate-200">
              <h2 className="text-sm font-black text-[#13293d] uppercase tracking-wider">Mark Student Attendance</h2>
            </div>
            <div className="p-5">
              <input
                type="text"
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all mb-4"
                placeholder="Search by ID, name or subject..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <div className="overflow-x-auto max-h-[350px] overflow-y-auto border border-slate-100 rounded-xl">
                <table className="w-full text-left border-collapse text-xs">
                  <thead className="bg-[#13293d] text-white uppercase font-black sticky top-0">
                    <tr>
                      <th className="p-3">Student ID</th>
                      <th className="p-3">Class ID</th>
                      <th className="p-3">Subject</th>
                      <th className="p-3">Grade</th>
                      <th className="p-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-gray-700">
                    {loading ? (
                      <tr><td colSpan="5" className="p-6 text-center text-gray-400">Loading...</td></tr>
                    ) : filteredEnrollments.length > 0 ? (
                      filteredEnrollments.map(e => (
                        <tr key={e._id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="p-3 font-semibold text-[#13293d]">{e.studentId}</td>
                          <td className="p-3">{e.classId}</td>
                          <td className="p-3 font-medium">{e.subject}</td>
                          <td className="p-3"><span className="px-2 py-0.5 bg-slate-100 rounded text-gray-600 font-bold">{e.grade}</span></td>
                          <td className="p-3 text-center">
                            <button
                              onClick={() => markAttendance(e)}
                              className="bg-[#10a1b6] hover:bg-[#1b5592] text-white font-bold px-3 py-1.5 rounded-lg transition-colors"
                            >
                              Mark
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr><td colSpan="5" className="p-6 text-center text-gray-400">No enrollments found.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* View Attendance */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-white border-2 border-slate-200 rounded-[20px] shadow-sm overflow-hidden">
              <div className="bg-slate-100 px-5 py-4 border-b border-slate-200">
                <h2 className="text-sm font-black text-[#13293d] uppercase tracking-wider">View Attendance Registry</h2>
              </div>
              <div className="p-5">
                <input
                  type="date"
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all mb-4 text-gray-600"
                  value={dateFilter}
                  onChange={e => setDateFilter(e.target.value)}
                />
                <div className="overflow-x-auto max-h-[265px] overflow-y-auto border border-slate-100 rounded-xl">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead className="bg-[#13293d] text-white uppercase font-black sticky top-0">
                      <tr>
                        <th className="p-3">Student ID</th>
                        <th className="p-3">Class ID</th>
                        <th className="p-3">Date</th>
                        <th className="p-3">Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-gray-700">
                      {filteredAttendances.length > 0 ? (
                        filteredAttendances.map(a => (
                          <tr key={a._id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="p-3 font-semibold text-[#13293d]">{a.studentId}</td>
                            <td className="p-3">{a.classId}</td>
                            <td className="p-3 text-gray-500">{a.date}</td>
                            <td className="p-3 font-medium text-[#10a1b6]">{a.time}</td>
                          </tr>
                        ))
                      ) : (
                        <tr><td colSpan="4" className="p-6 text-center text-gray-400">No records found.</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <button
              onClick={handleClearAttendance}
              className="w-full bg-red-50 hover:bg-red-100 border-2 border-dashed border-red-300 text-red-600 font-bold py-3 px-4 rounded-[16px] text-sm transition-all uppercase tracking-wider"
            >
              Clear Attendance Registry
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Attend;
