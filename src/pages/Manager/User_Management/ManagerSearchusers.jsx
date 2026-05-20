import React, { useEffect, useState } from 'react';
import Head from '../Header/Header';

function ManagerSearchusers() {
  const [student, setStudent] = useState([]); 
  const [teacher, setTeacher] = useState([]); 
  const [searchstudent, setSearchStudent] = useState('');
  const [searchteacher, setSearchTeacher] = useState('');
  
  // Bypassing active axios network calls to inject static placeholder matrix rows
  useEffect(() => {
    console.log("Constructing static student operational payload...");
    setStudent([
      { stdid: "STD-041", name: "Ahmed Khan", email: "ahmed@example.com", contactnumber: "03001112233", grade: "Grade 10", username: "ahmed10", gender: "Male", parentname: "Tariq Khan", parentphonenumber: "03211112233", SecAnswer: "Peshawar" },
      { stdid: "STD-082", name: "Zainab Fatima", email: "zainab@example.com", contactnumber: "03334445566", grade: "Grade 11", username: "zainab_f", gender: "Female", parentname: "Muhammad Ali", parentphonenumber: "03454445566", SecAnswer: "Islamabad" }
    ]);

    console.log("Constructing static teacher operational payload...");
    setTeacher([
      { teid: "TCH-012", name: "Sir Asif", email: "asif@royalacademy.edu", contactnumber: "03129998877", username: "asif_math", gender: "Male", subject: "Mathematics", SecAnswer: "Lahore" },
      { teid: "TCH-019", name: "Miss Ayesha", email: "ayesha@royalacademy.edu", contactnumber: "03228887766", username: "ayesha_sci", gender: "Female", subject: "General Science", SecAnswer: "Karachi" }
    ]);
  }, []);

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans">
      <Head />
      
      {/* Central Content Area Canvas Viewport */}
      <div className="w-full max-w-[1200px] mx-auto px-4 mt-8 space-y-12">
        
        {/* ========================================================================= */}
        {/* STUDENT METRICS & GRID DIRECTORY PANEL */}
        {/* ========================================================================= */}
        <div className="bg-white border-2 border-slate-200 rounded-[24px] p-6 shadow-sm">
          
          {/* Header Action Control Layout Area */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-5 mb-6">
            <div>
              <h2 className="text-xl font-black text-[#13293d] uppercase tracking-tight">Student Records</h2>
              <p className="text-xs text-gray-400 font-medium mt-0.5">Filter and examine registered academic learners directory tokens</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <span className="bg-slate-100 text-[#13293d] text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl border border-slate-200 text-center flex items-center justify-center whitespace-nowrap">
                Total Count: <b className="text-[#10a1b6] ml-1.5 text-sm">{student.length}</b>
              </span>
              <div className="relative w-full sm:w-64">
                <input 
                  type="text" 
                  placeholder="Search student by name..." 
                  onChange={(e) => setSearchStudent(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl pl-4 pr-10 py-2 text-xs font-medium outline-none transition-all text-gray-800"
                />
              </div>
            </div>
          </div>

          {/* Table Element Content Container Viewport Block */}
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl max-h-[260px] overflow-y-auto shadow-inner bg-slate-50">
            <table className="w-full border-collapse text-left text-xs min-w-[1100px]">
              <thead className="bg-[#13293d] text-white font-black uppercase tracking-wider sticky top-0 z-10 shadow-sm">
                <tr>
                  <th className="px-4 py-3.5">Student ID</th>
                  <th className="px-4 py-3.5">Student Name</th>
                  <th className="px-4 py-3.5">Email Parameters</th>
                  <th className="px-4 py-3.5">Phone Contact</th>
                  <th className="px-4 py-3.5">Grade</th>
                  <th className="px-4 py-3.5">Username Token</th>
                  <th className="px-4 py-3.5">Gender</th>
                  <th className="px-4 py-3.5">Parent Identity</th>
                  <th className="px-4 py-3.5">Parent Phone</th>
                  <th className="px-4 py-3.5">Security Phrase</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-gray-700 bg-white">
                {student
                  .filter((item) => searchstudent.toLowerCase() === '' ? item : item.name.toLowerCase().includes(searchstudent.toLowerCase()))
                  .map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-4 py-3 font-mono font-bold text-slate-900">{item.stdid}</td>
                      <td className="px-4 py-3 font-bold text-[#13293d]">{item.name}</td>
                      <td className="px-4 py-3 text-slate-500">{item.email}</td>
                      <td className="px-4 py-3 font-mono">{item.contactnumber}</td>
                      <td className="px-4 py-3"><span className="bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded text-[10px] uppercase">{item.grade}</span></td>
                      <td className="px-4 py-3 font-mono text-gray-500">{item.username}</td>
                      <td className="px-4 py-3">{item.gender}</td>
                      <td className="px-4 py-3 font-semibold">{item.parentname}</td>
                      <td className="px-4 py-3 font-mono">{item.parentphonenumber}</td>
                      <td className="px-4 py-3 text-[#10a1b6] font-bold">{item.SecAnswer}</td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


        {/* ========================================================================= */}
        {/* TEACHER METRICS & GRID DIRECTORY PANEL */}
        {/* ========================================================================= */}
        <div className="bg-white border-2 border-slate-200 rounded-[24px] p-6 shadow-sm">
          
          {/* Header Action Control Layout Area */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-5 mb-6">
            <div>
              <h2 className="text-xl font-black text-[#13293d] uppercase tracking-tight">Faculty Directory</h2>
              <p className="text-xs text-gray-400 font-medium mt-0.5">Filter and examine registered institutional educators matrix</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <span className="bg-slate-100 text-[#13293d] text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl border border-slate-200 text-center flex items-center justify-center whitespace-nowrap">
                Total Count: <b className="text-[#10a1b6] ml-1.5 text-sm">{teacher.length}</b>
              </span>
              <div className="relative w-full sm:w-64">
                <input 
                  type="text" 
                  placeholder="Search faculty by name..." 
                  onChange={(e) => setSearchTeacher(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl pl-4 pr-10 py-2 text-xs font-medium outline-none transition-all text-gray-800"
                />
              </div>
            </div>
          </div>

          {/* Table Element Content Container Viewport Block */}
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl max-h-[260px] overflow-y-auto shadow-inner bg-slate-50">
            <table className="w-full border-collapse text-left text-xs min-w-[1000px]">
              <thead className="bg-[#13293d] text-white font-black uppercase tracking-wider sticky top-0 z-10 shadow-sm">
                <tr>
                  <th className="px-4 py-3.5">Teacher ID</th>
                  <th className="px-4 py-3.5">Faculty Name</th>
                  <th className="px-4 py-3.5">Email Parameters</th>
                  <th className="px-4 py-3.5">Phone Contact</th>
                  <th className="px-4 py-3.5">Username Token</th>
                  <th className="px-4 py-3.5">Gender</th>
                  <th className="px-4 py-3.5">Assigned Subject</th>
                  <th className="px-4 py-3.5">Security Phrase</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-gray-700 bg-white">
                {teacher
                  .filter((item) => searchteacher.toLowerCase() === '' ? item : item.name.toLowerCase().includes(searchteacher.toLowerCase()))
                  .map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-4 py-3 font-mono font-bold text-slate-900">{item.teid}</td>
                      <td className="px-4 py-3 font-bold text-[#13293d]">{item.name}</td>
                      <td className="px-4 py-3 text-slate-500">{item.email}</td>
                      <td className="px-4 py-3 font-mono">{item.contactnumber}</td>
                      <td className="px-4 py-3 font-mono text-gray-500">{item.username}</td>
                      <td className="px-4 py-3">{item.gender}</td>
                      <td className="px-4 py-3"><span className="bg-purple-50 text-purple-700 font-bold px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wide">{item.subject}</span></td>
                      <td className="px-4 py-3 text-[#10a1b6] font-bold">{item.SecAnswer}</td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ManagerSearchusers;