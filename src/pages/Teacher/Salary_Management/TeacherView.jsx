import React, { useState } from 'react';
import Head from '../Header/Header';
import { FaWallet, FaUserTie, FaCalendarAlt, FaLayerGroup, FaBookOpen } from 'react-icons/fa';

function TeacherView() {
  // Pure Static Local Sandbox Repository Array for Salary Parameters 
  const [teachers] = useState([
    {
      TeacherName: 'Miss Fatima',
      TeacherID: 'TID-409',
      SubjectName: 'Computer Science',
      setEnterGrade: 'Grade 10 (Advanced)',
      AttendStudents: 42,
      FreeCardAmount: 'Rs. 4,500',
      InstitutePayment: 'Rs. 15,000',
      MonthlySalary: 'Rs. 78,500',
      Date: '2026-05-01'
    },
    {
      TeacherName: 'Miss Fatima',
      TeacherID: 'TID-409',
      SubjectName: 'Computer Science',
      setEnterGrade: 'Grade 11 (Core)',
      AttendStudents: 38,
      FreeCardAmount: 'Rs. 3,000',
      InstitutePayment: 'Rs. 12,500',
      MonthlySalary: 'Rs. 72,000',
      Date: '2026-04-01'
    }
  ]);

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20 font-sans antialiased">
      {/* Universal Portal Navbar Header */}
      <Head />

      {/* Main Structural Wrapper Container - Left sidebar padding offset integrated */}
      <div className="w-full max-w-[1200px] mx-auto px-4 lg:pl-[290px] mt-8 space-y-6">
        
        {/* Module Title Deck Segment */}
        <div className="border-b-2 border-slate-200 pb-3">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2.5">
            <FaWallet className="text-[#384D6C]" /> My Salary Ledgers & Payout Profiles
          </h2>
          <div className="h-1 w-16 bg-[#384D6C] rounded-full mt-1.5" />
        </div>

        {/* Responsive Table Wrapper Frame */}
        <div className="bg-white border-2 border-slate-900 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              
              {/* Table Head Deck */}
              <thead>
                <tr className="bg-[#384D6C] border-b-2 border-slate-900 text-white">
                  <th className="p-4 text-[11px] font-black uppercase tracking-wider whitespace-nowrap flex items-center gap-1.5">
                    <FaUserTie className="text-slate-300" /> Instructor
                  </th>
                  <th className="p-4 text-[11px] font-black uppercase tracking-wider whitespace-nowrap">ID Token</th>
                  <th className="p-4 text-[11px] font-black uppercase tracking-wider whitespace-nowrap">
                    <span className="flex items-center gap-1.5"><FaBookOpen className="text-slate-300" /> Subject</span>
                  </th>
                  <th className="p-4 text-[11px] font-black uppercase tracking-wider whitespace-nowrap">
                    <span className="flex items-center gap-1.5"><FaLayerGroup className="text-slate-300" /> Grade Level</span>
                  </th>
                  <th className="p-4 text-[11px] font-black uppercase tracking-wider whitespace-nowrap text-center">Active Enrolls</th>
                  <th className="p-4 text-[11px] font-black uppercase tracking-wider whitespace-nowrap text-right">Free Card Ded.</th>
                  <th className="p-4 text-[11px] font-black uppercase tracking-wider whitespace-nowrap text-right">Inst. Shared Fee</th>
                  <th className="p-4 text-[11px] font-black uppercase tracking-wider whitespace-nowrap text-right text-emerald-300">Net Disbursed</th>
                  <th className="p-4 text-[11px] font-black uppercase tracking-wider whitespace-nowrap text-center">
                    <span className="flex items-center justify-center gap-1.5"><FaCalendarAlt className="text-slate-300" /> Release Date</span>
                  </th>
                </tr>
              </thead>

              {/* Table Body Rows Container */}
              <tbody className="divide-y divide-slate-200 bg-white">
                {teachers.length > 0 ? (
                  teachers.map((teacher, index) => (
                    <tr 
                      key={index} 
                      className="hover:bg-slate-50 transition-colors group font-bold text-xs text-slate-800"
                    >
                      <td className="p-4 font-black text-slate-900 whitespace-nowrap">{teacher.TeacherName}</td>
                      <td className="p-4 font-mono text-slate-500 whitespace-nowrap">{teacher.TeacherID}</td>
                      <td className="p-4 whitespace-nowrap">{teacher.SubjectName}</td>
                      <td className="p-4 whitespace-nowrap">
                        <span className="bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-700">
                          {teacher.setEnterGrade}
                        </span>
                      </td>
                      <td className="p-4 text-center whitespace-nowrap font-mono text-slate-600">{teacher.AttendStudents}</td>
                      <td className="p-4 text-right whitespace-nowrap text-rose-600 font-mono">{teacher.FreeCardAmount}</td>
                      <td className="p-4 text-right whitespace-nowrap text-slate-600 font-mono">{teacher.InstitutePayment}</td>
                      <td className="p-4 text-right whitespace-nowrap text-emerald-700 text-sm font-black font-mono bg-emerald-50/50 group-hover:bg-emerald-50 transition-colors">
                        {teacher.MonthlySalary}
                      </td>
                      <td className="p-4 text-center whitespace-nowrap font-mono text-slate-500">{teacher.Date}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="p-12 text-center text-slate-400 italic text-xs font-bold">
                      No payroll distribution logs registered matching current token session properties.
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
}

export default TeacherView;