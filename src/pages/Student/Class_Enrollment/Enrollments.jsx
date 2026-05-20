import React, { useState } from 'react';
import Head from '../Header/Header';
import { toast, Toaster } from 'react-hot-toast';
import { FaUserPlus, FaBookOpen, FaIdCard, FaChalkboardTeacher, FaWallet } from 'react-icons/fa';

function Enrollments() {
  // Functional standard mock architecture state arrays matching production schemas
  const [subjects] = useState([
    { sbid: 'SBJ-991', subjectname: 'Advanced React Frontend Optimization', teachername: 'Prof. Junaid Khan', teid: 'TCH-882', amount: 'Rs. 4,500', grade: 'A+' },
    { sbid: 'SBJ-442', subjectname: 'Node.js Core Architecture Design', teachername: 'Dr. Maria Bilal', teid: 'TCH-114', amount: 'Rs. 5,000', grade: 'A' },
    { sbid: 'SBJ-108', subjectname: 'MongoDB Enterprise Pipeline Aggregations', teachername: 'Engr. Asif Mahmood', teid: 'TCH-309', amount: 'Rs. 4,200', grade: 'B+' },
    { sbid: 'SBJ-753', subjectname: 'Tailwind UI/UX Responsive Engineering', teachername: 'Dr. Maria Bilal', teid: 'TCH-114', amount: 'Rs. 3,800', grade: 'A-' }
  ]);

  const [enrolledIds, setEnrolledIds] = useState([]);

  const enrollStudent = (sbid, subjectName) => {
    if (enrolledIds.includes(sbid)) {
      toast.error(`REGISTRATION DENIED: You are already enrolled in ${subjectName.toUpperCase()}.`, {
        style: {
          fontSize: '11px',
          fontWeight: '700',
          letterSpacing: '0.04em',
          borderRadius: '12px',
          border: '1px solid #ef4444'
        }
      });
      return;
    }

    // Direct immutable operational mutation append logic
    setEnrolledIds([...enrolledIds, sbid]);
    toast.success(`CONGRATULATIONS: Enrolled successfully in ${subjectName.toUpperCase()}!`, {
      style: {
        fontSize: '11px',
        fontWeight: '700',
        letterSpacing: '0.04em',
        borderRadius: '12px',
        border: '1px solid #22c55e'
      }
    });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12">
      <Toaster position="top-right" />
      <Head />

      {/* Core Adaptive Main Grid Canvas with Responsive Left Sidebar Clearance Protection */}
      <div className="w-full max-w-[1250px] mx-auto px-4 pl-4 md:pl-[290px] mt-8 transition-all">
        
        {/* Step 2 Consistent Visual Layout Brand Header Element Deck */}
        <div className="w-full bg-[#C9E8EA] border border-slate-200 rounded-[20px] p-5 mb-8 flex items-center justify-between shadow-xs">
          <div>
            <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
              <FaBookOpen className="text-slate-700" />
              <span>Course Enrolment Catalog</span>
            </h1>
            <p className="text-[11px] text-slate-600 font-bold mt-0.5 uppercase tracking-wide">
              Browse available academic streams, review institutional tuition rates, and register immediate entry lines.
            </p>
          </div>
        </div>

        {/* Core Institutional Table Data Base Container Frame */}
        <div className="bg-white border-2 border-slate-200 rounded-[22px] shadow-xs overflow-hidden">
          
          {/* Subsystem Descriptive Ribbon Section */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#483EA8]" />
            <h2 className="text-xs font-black text-slate-800 uppercase tracking-widest">
              Available Academic Streams Directory
            </h2>
          </div>

          <div className="p-6">
            <div className="w-full overflow-x-auto border border-slate-100 rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-[10px] font-black text-[#667A8A] uppercase tracking-wider border-b border-slate-200">
                    <th className="px-6 py-4"><span className="flex items-center gap-1.5"><FaIdCard className="text-slate-400" /> Class ID</span></th>
                    <th className="px-6 py-4"><span className="flex items-center gap-1.5"><FaBookOpen className="text-slate-400" /> Course Name & Discipline</span></th>
                    <th className="px-6 py-4"><span className="flex items-center gap-1.5"><FaChalkboardTeacher className="text-slate-400" /> Assigned Faculty Academic</span></th>
                    <th className="px-6 py-4"><span className="flex items-center gap-1.5"><FaWallet className="text-slate-400" /> Standard Course Fee</span></th>
                    <th className="px-6 py-4 text-center">Registration Action</th>
                  </tr>
                </thead>
                
                <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-700">
                  {subjects.map((subject) => {
                    const isRegistered = enrolledIds.includes(subject.sbid);
                    return (
                      <tr key={subject.sbid} className="hover:bg-slate-50/70 transition-colors">
                        
                        {/* Unique Module Key Tracking Block column */}
                        <td className="px-6 py-4 text-[#483EA8] font-black tracking-wide uppercase">
                          {subject.sbid}
                        </td>
                        
                        {/* Core Subject Title Row */}
                        <td className="px-6 py-4 text-slate-900 font-bold uppercase tracking-tight">
                          {subject.subjectname}
                        </td>
                        
                        {/* Instructor Identity Data Mapping Element */}
                        <td className="px-6 py-4 text-slate-600 font-medium">
                          {subject.teachername}
                        </td>
                        
                        {/* Course Financial Cost Column Row Value */}
                        <td className="px-6 py-4 font-mono font-bold text-slate-500">
                          {subject.amount}
                        </td>
                        
                        {/* Interaction Control Command Button Center Cell */}
                        <td className="px-6 py-4 text-center">
                          <button
                            type="button"
                            disabled={isRegistered}
                            onClick={() => enrollStudent(subject.sbid, subject.subjectname)}
                            className={`text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-xl inline-flex items-center gap-1.5 transition-all shadow-xs ${
                              isRegistered 
                                ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-not-allowed shadow-none' 
                                : 'bg-[#483EA8] hover:bg-[#392f8a] text-white'
                            }`}
                          >
                            <FaUserPlus className="text-[11px]" />
                            <span>{isRegistered ? 'Enrolled ✔' : 'Enroll Now'}</span>
                          </button>
                        </td>

                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Enrollments;