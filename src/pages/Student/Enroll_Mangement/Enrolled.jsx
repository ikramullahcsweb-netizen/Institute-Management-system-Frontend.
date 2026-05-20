import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Head from '../Header/Header';
import { FaBookReader, FaFolderOpen, FaArrowRight, FaHashtag, FaGraduationCap } from 'react-icons/fa';

function Enrolled() {
  // Functional mock dataset reflecting approved bank and online transactions architecture
  const [payments] = useState([
    { subjectcode: 'SUB-402', description: 'CLS-402', subjectname: 'Advanced Full Stack Architecture' },
    { subjectcode: 'SUB-209', description: 'CLS-209', subjectname: 'Automated Backend Scaling Matrix' },
    { subjectcode: 'SUB-771', description: 'CLS-771', subjectname: 'Data Engineering & Pipeline Ops' }
  ]);

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12">
      <Head />

      {/* Main Responsive Canvas Layer with Structural Left Sidebar Clearance */}
      <div className="w-full max-w-[1250px] mx-auto px-4 pl-4 md:pl-[290px] mt-8 transition-all">
        
        {/* Step 2 Consistent Visual Layout Brand Header Block */}
        <div className="w-full bg-[#C9E8EA] border border-slate-200 rounded-[20px] p-5 mb-8 flex items-center justify-between shadow-xs">
          <div>
            <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
              <FaBookReader className="text-slate-700" />
              <span>My Enrolled Subjects</span>
            </h1>
            <p className="text-[11px] text-slate-600 font-bold mt-0.5 uppercase tracking-wide">
              Access your verified academic roster courses, study material pathways, and active lesson digital hubs.
            </p>
          </div>
        </div>

        {/* Core Institutional Table Data Base Container Frame */}
        <div className="bg-white border-2 border-slate-200 rounded-[22px] shadow-xs overflow-hidden">
          
          {/* Subsystem Descriptive Ribbon Section Header */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#483EA8]" />
            <h2 className="text-xs font-black text-slate-800 uppercase tracking-widest">
              Verified Course Roster Registry
            </h2>
          </div>

          <div className="p-6">
            {payments.length > 0 ? (
              <div className="w-full overflow-x-auto border border-slate-100 rounded-xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-[10px] font-black text-[#667A8A] uppercase tracking-wider border-b border-slate-200">
                      <th className="px-6 py-4">
                        <span className="flex items-center gap-1.5">
                          <FaHashtag className="text-slate-400" /> Class Code
                        </span>
                      </th>
                      <th className="px-6 py-4">
                        <span className="flex items-center gap-1.5">
                          <FaGraduationCap className="text-slate-400" /> Registered Course Module Title
                        </span>
                      </th>
                      <th className="px-6 py-4 text-center">Academic Directives</th>
                    </tr>
                  </thead>
                  
                  <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-700">
                    {payments.map((payment) => (
                      <tr key={payment.subjectcode} className="hover:bg-slate-50/70 transition-colors">
                        
                        {/* Course Class Identification Label Code Mapping Element */}
                        <td className="px-6 py-4 text-[#483EA8] font-black tracking-wide uppercase">
                          {payment.description}
                        </td>
                        
                        {/* Course Full Core String Name Context Row */}
                        <td className="px-6 py-4 text-slate-800 font-bold uppercase tracking-tight">
                          {payment.subjectname}
                        </td>
                        
                        {/* Hyperlink View Navigation Routing Anchor Cell */}
                        <td className="px-6 py-4 text-center">
                          <Link 
                            to={`/lessonmaterial/${payment.description}`}
                            className="inline-flex items-center gap-2 bg-[#483EA8] hover:bg-[#392f8a] text-white text-[10px] font-black uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all shadow-xs group"
                          >
                            <FaFolderOpen className="text-[11px]" />
                            <span>Launch Class Portal</span>
                            <FaArrowRight className="text-[9px] transition-transform group-hover:translate-x-1" />
                          </Link>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="w-full border-2 border-dashed border-slate-200 rounded-2xl p-12 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-3">
                  <FaBookReader className="text-slate-400 text-lg" />
                </div>
                <h3 className="text-xs font-black text-slate-700 uppercase tracking-wider">No Active Enrolments Found</h3>
                <p className="text-[11px] text-[#667A8A] font-bold uppercase tracking-wide mt-1 max-w-xs">
                  We could not track any verified or approved tuition fee profiles linked to your institutional register records.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Enrolled;