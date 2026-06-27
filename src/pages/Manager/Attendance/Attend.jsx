import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Head from '../Header/Header';
import jsPDF from 'jspdf';

function Attend() {
  const [enrollments, setEnrollments] = useState([]);
  const [attendances, setAttendances] = useState([]);
  const [, setManagerName] = useState('');
  const [, setManagerUsername] = useState('');

  const [search, setSearch] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [todayDate, setTodayDate] = useState('');

  useEffect(() => {
    fetchEnrollments();
    fetchAttendances();
    fetchManagerDetails(); // Fetch manager details when component mounts
  }, []);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${month}/${day}/${year}`;
    setTodayDate(formattedDate);
  }, []);

  const fetchManagerDetails = async () => {
    try {
      const response = await axios.get('/managerdetails');
      setManagerName(response.data.name);
      setManagerUsername(response.data.username);
    } catch (error) {
      console.error('Error fetching manager details:', error);
      toast.error('Failed to fetch manager details');
    }
  };

  const fetchEnrollments = async () => {
    try {
      const response = await axios.get('/classenrollments');
      setEnrollments(response.data);
    } catch (error) {
      console.error('Error fetching enrollments:', error);
      toast.error('Failed to fetch enrollments');
    }
  };

  const fetchAttendances = async () => {
    try {
      const response = await axios.get('/attendancemark');
      setAttendances(response.data);
    } catch (error) {
      console.error('Error fetching attendances:', error);
      toast.error('Failed to fetch attendances');
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const markAttendance = async (enrollment) => {
    try {
      await axios.post('/attendancemark', {
        studentId: enrollment.studentId,
        classId: enrollment.classId,
        teacherId: enrollment.teacherid,
        subject: enrollment.subject
      });
      toast.success('Attendance marked successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error marking attendance:', error);
      toast.error('Failed to mark attendance');
    }
  };

  const handleDateFilter = (e) => {
    setDateFilter(e.target.value);
  };

  const filteredEnrollments = enrollments.filter((enrollment) =>
    Object.values(enrollment).some((value) =>
      typeof value === 'string' && value.toLowerCase().includes(search)
    )
  );

  const filteredAttendances = attendances.filter((attendance) =>
    dateFilter ? attendance.date.includes(dateFilter) : true
  );

  const handleClearAttendance = async () => {
    try {
      await axios.delete('/attendancemark/all');
      setAttendances([]);
      toast.success('Attendance cleared successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error clearing attendance:', error);
      toast.error('Failed to clear attendance');
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    doc.text('Attendance Report', 10, 10);
    doc.text(`Report Generated On:${formattedDate}`, 10, 40);

    let yPos = 50;
    doc.autoTable({
      head: [['Student ID', 'Class ID', 'Teacher ID', 'Subject', 'Grade']],
      body: filteredEnrollments.map(enrollment => [enrollment.studentId, enrollment.classId, enrollment.teacherid, enrollment.subject, enrollment.grade]),
      startY: yPos
    });

    yPos = doc.autoTable.previous.finalY + 10;
    doc.autoTable({
      head: [['Student ID', 'Class ID', 'Date', 'Time']],
      body: filteredAttendances.map(attendance => [attendance.studentId, attendance.classId, attendance.date, attendance.time]),
      startY: yPos
    });
    doc.save('attendance_report.pdf');
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      <Head />

      <div className="w-full max-w-[1100px] mx-auto px-4 mt-6">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b-2 border-gray-200 pb-4 mb-6 ">
          <div>
            <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">Attendance Management</h1>
            <p className="text-xs text-gray-500 font-medium">Mark, view, and extract management reports</p>
          </div>
          <button
            className="w-full sm:w-auto bg-[#10a1b6] hover:bg-[#0e8a9c] text-white text-sm font-bold py-2.5 px-5 rounded-xl shadow-sm transition-all duration-200"
            onClick={generatePDF}
          >
            Download PDF Report
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

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
                onChange={handleSearch}
              />

              <div className="overflow-x-auto max-h-[350px] overflow-y-auto border border-slate-100 rounded-xl">
                <table className="w-full text-left border-collapse text-xs">
                  <thead className="bg-slate-50 text-gray-600 uppercase font-bold sticky top-0 border-b border-slate-200">
                    <tr>
                      <th className="p-3">Student ID</th>
                      <th className="p-3">Class ID</th>
                      <th className="p-3">Teacher ID</th>
                      <th className="p-3">Subject</th>
                      <th className="p-3">Grade</th>
                      <th className="p-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-gray-700">
                    {filteredEnrollments.map((enrollment) => (
                      <tr key={enrollment._id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 font-semibold text-[#13293d]">{enrollment.studentId}</td>
                        <td className="p-3">{enrollment.classId}</td>
                        <td className="p-3">{enrollment.teacherid}</td>
                        <td className="p-3 font-medium">{enrollment.subject}</td>
                        <td className="p-3"><span className="px-2 py-0.5 bg-slate-100 rounded text-gray-600 font-bold">{enrollment.grade}</span></td>
                        <td className="p-3 text-center">
                          <button
                            className="bg-[#10a1b6] hover:bg-[#1b5592] text-white font-bold px-3 py-1.5 rounded-lg transition-colors shadow-xs"
                            onClick={() => markAttendance(enrollment)}
                          >
                            Mark
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-white border-2 border-slate-200 rounded-[20px] shadow-sm overflow-hidden">
              <div className="bg-slate-100 px-5 py-4 border-b border-slate-200">
                <h2 className="text-sm font-black text-[#13293d] uppercase tracking-wider">View Attendance Registry</h2>
              </div>

              <div className="p-5">
                <input
                  type="date"
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all mb-4 text-gray-600"
                  placeholder={todayDate}
                  value={dateFilter}
                  onChange={handleDateFilter}
                />

                <div className="overflow-x-auto max-h-[265px] overflow-y-auto border border-slate-100 rounded-xl">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead className="bg-slate-50 text-gray-600 uppercase font-bold sticky top-0 border-b border-slate-200">
                      <tr>
                        <th className="p-3">Student ID</th>
                        <th className="p-3">Class ID</th>
                        <th className="p-3">Date</th>
                        <th className="p-3">Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-gray-700">
                      {filteredAttendances.map((attendance) => (
                        <tr key={attendance._id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="p-3 font-semibold text-[#13293d]">{attendance.studentId}</td>
                          <td className="p-3">{attendance.classId}</td>
                          <td className="p-3 text-gray-500">{attendance.date}</td>
                          <td className="p-3 font-medium text-[#10a1b6]">{attendance.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <button
              className="w-full bg-red-50 hover:bg-red-100 border-2 border-dashed border-red-300 text-red-600 font-bold py-3 px-4 rounded-[16px] text-sm transition-all duration-200 uppercase tracking-wider"
              onClick={handleClearAttendance}
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