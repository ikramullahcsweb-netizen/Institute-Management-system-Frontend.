import React, { useState } from 'react';
import Head from '../Header/Header';
import { toast, Toaster } from 'react-hot-toast';
import { FaGraduationCap, FaTrashAlt, FaCreditCard, FaChalkboardTeacher, FaBook, FaIdBadge } from 'react-icons/fa';

function MyClass() {
  // Core front-end functional mock dataset mapping architectural schemas
  const [enrolledClasses, setEnrolledClasses] = useState([
    { _id: 'en-101', classId: 'CLS-402', teacherid: 'TCH-882', subject: 'Advanced Full Stack Architecture', time: 'Prof. Junaid Khan' },
    { _id: 'en-102', classId: 'CLS-209', teacherid: 'TCH-114', subject: 'Automated Backend Scaling Matrix', time: 'Dr. Maria Bilal' },
    { _id: 'en-103', classId: 'CLS-771', teacherid: 'TCH-309', subject: 'Data Engineering & Pipeline Ops', time: 'Prof. Junaid Khan' }
  ]);

  const handlePaymentGateway = () => {
    toast.error("SYSTEM NOTIFICATION: Digital payment portal sync functions are currently disabled.", {
      style: {
        fontSize: '11px',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        borderRadius: '12px',
        border: '1px solid #ef4444'
      }
    });
  };

  const unenrollFromClass = (id, subjectName) => {
    // Immediate state mutation update following clean UX paradigms
    const updatedClasses = enrolledClasses.filter(enrollment => enrollment._id !== id);
    setEnrolledClasses(updatedClasses);
    toast.success(`SUCCESSFULLY UNENROLLED FROM: ${subjectName.toUpperCase()}`, {
      style: {
        fontSize: '11px',
        fontWeight: '700',
        letterSpacing: '0.05em',
        borderRadius: '12px',
        border: '1px solid #22c55e'
      }
    });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12">
      <Toaster position="top-right" />
      <Head />

      {/* Main Responsive Grid Canvas with Fixed Left Sidebar Protection Guard */}
      <div className="w-full max-w-[1250px] mx-auto px-4 pl-4 md:pl-[290px] mt-8 transition-all">
        
        {/* Step 2 Themed Dashboard Structural Main Banner Row */}
        <div className="w-full bg-[#C9E8EA] border border-slate-200 rounded-[20px] p-5 mb-8 flex items-center justify-between shadow-xs">
          <div>
            <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
              <FaGraduationCap className="text-slate-700" />
              <span>Academic Cohort Enrolments</span>
            </h1>
            <p className="text-[11px] text-slate-600 font-bold mt-0.5 uppercase tracking-wide">
              Manage current registration pipelines, drop class allocations, and track instructor data logs.
            </p>
          </div>
        </div>

        {/* Core Matrix Component Frame */}
        <div className="bg-white border-2 border-slate-200 rounded-[22px] shadow-xs overflow-hidden">
          
          {/* Subsection Structural Identification Ribbon Header */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#483EA8]" />
            <h2 className="text-xs font-black text-slate-800 uppercase tracking-widest">
              Your Registered Class Registry
            </h2>
          </div>

          <div className="p-6">
            {enrolledClasses.length > 0 ? (
              <div className="w-full overflow-x-auto border border-slate-100 rounded-xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-[10px] font-black text-[#667A8A] uppercase tracking-wider border-b border-slate-200">
                      <th className="px-6 py-4"><span className="flex items-center gap-1.5"><FaIdBadge className="text-slate-400" /> Class ID</span></th>
                      <th className="px-6 py-4"><span className="flex items-center gap-1.5"><FaIdBadge className="text-slate-400" /> Teacher ID</span></th>
                      <th className="px-6 py-4"><span className="flex items-center gap-1.5"><FaBook className="text-slate-400" /> Registered Course Subject</span></th>
                      <th className="px-6 py-4"><span className="flex items-center gap-1.5"><FaChalkboardTeacher className="text-slate-400" /> Assigned Instructor Name</span></th>
                      <th className="px-6 py-4 text-center">Operational Directives</th>
                    </tr>
                  </thead>
                  
                  <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-700">
                    {enrolledClasses.map((enrollment) => (
                      <tr key={enrollment._id} className="hover:bg-slate-50/70 transition-colors">
                        
                        <td className="px-6 py-4 text-[#483EA8] font-black tracking-wide uppercase">
                          {enrollment.classId}
                        </td>
                        
                        <td className="px-6 py-4 font-mono text-slate-500 font-bold">
                          {enrollment.teacherid}
                        </td>
                        
                        <td className="px-6 py-4 text-slate-800 font-bold uppercase tracking-tight max-w-xs truncate">
                          {enrollment.subject}
                        </td>
                        
                        <td className="px-6 py-4 text-slate-600 font-medium">
                          {enrollment.time}
                        </td>
                        
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-3">
                            
                            <button
                              type="button"
                              onClick={handlePaymentGateway}
                              className="bg-[#483EA8] hover:bg-[#392f8a] text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow-xs"
                            >
                              <FaCreditCard className="text-[10px]" />
                              <span>Process Fee</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => unenrollFromClass(enrollment._id, enrollment.subject)}
                              className="bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 text-[10px] font-black uppercase tracking-wider px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-all"
                            >
                              <FaTrashAlt className="text-[10px]" />
                              <span>Unenroll</span>
                            </button>

                          </div>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="w-full border-2 border-dashed border-slate-200 rounded-2xl p-12 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-3">
                  <FaBook className="text-slate-400 text-lg" />
                </div>
                <h3 className="text-xs font-black text-slate-700 uppercase tracking-wider">No Enrolled Classes Located</h3>
                <p className="text-[11px] text-[#667A8A] font-bold uppercase tracking-wide mt-1 max-w-xs">
                  Your registration profiles list is completely clear. Visit the dashboard portal directory to secure cohort access.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default MyClass;