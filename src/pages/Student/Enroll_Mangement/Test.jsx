import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Head from '../Header/Header';
import { FaGraduationCap, FaBookmark, FaHashtag, FaEye, FaArrowRight, FaClipboardList } from 'react-icons/fa';

function Test() {
  // Functional mock dataset representing current catalog filtered by student grade level mapping
  const [subjects] = useState([
    { _id: 'sub-001', sbid: 'SBJ-991', subjectname: 'Advanced React Frontend Optimization', grade: 'Grade-12' },
    { _id: 'sub-002', sbid: 'SBJ-442', subjectname: 'Node.js Core Architecture Design', grade: 'Grade-12' },
    { _id: 'sub-003', sbid: 'SBJ-108', subjectname: 'MongoDB Enterprise Pipeline Aggregations', grade: 'Grade-12' },
    { _id: 'sub-004', sbid: 'SBJ-753', subjectname: 'Tailwind UI/UX Responsive Engineering', grade: 'Grade-12' }
  ]);

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12">
      <Head />

      {/* Main Responsive Canvas Layer with Structural Left Sidebar Clearance Protection */}
      <div className="w-full max-w-[1250px] mx-auto px-4 pl-4 md:pl-[290px] mt-8 transition-all">
        
        {/* Step 2 Consistent Visual Layout Brand Header Block */}
        <div className="w-full bg-[#C9E8EA] border border-slate-200 rounded-[20px] p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div>
            <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
              <FaGraduationCap className="text-slate-700" />
              <span>Available Subjects Catalog</span>
            </h1>
            <p className="text-[11px] text-slate-600 font-bold mt-0.5 uppercase tracking-wide">
              Explore educational courses curated explicitly for your current batch grade and batch parameters.
            </p>
          </div>

          {/* Navigational Directive to Enrolled Subsystem */}
          <Link 
            to="/enrolled"
            className="bg-[#483EA8] hover:bg-[#392f8a] text-white text-[10px] font-black uppercase tracking-wider px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-all shadow-md shrink-0"
          >
            <FaClipboardList className="text-[11px]" />
            <span>View Enrolled List</span>
          </Link>
        </div>

        {/* Core Institutional Table Data Base Container Frame */}
        <div className="bg-white border-2 border-slate-200 rounded-[22px] shadow-xs overflow-hidden">
          
          {/* Subsystem Descriptive Ribbon Section Header */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#483EA8]" />
            <h2 className="text-xs font-black text-slate-800 uppercase tracking-widest">
              Grade-Level Curricular Streams
            </h2>
          </div>

          <div className="p-6">
            {subjects.length > 0 ? (
              <div className="w-full overflow-x-auto border border-slate-100 rounded-xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-[10px] font-black text-[#667A8A] uppercase tracking-wider border-b border-slate-200">
                      <th className="px-6 py-4">
                        <span className="flex items-center gap-1.5">
                          <FaHashtag className="text-slate-400" /> Subject Code
                        </span>
                      </th>
                      <th className="px-6 py-4">
                        <span className="flex items-center gap-1.5">
                          <FaBookmark className="text-slate-400" /> Course Module Title
                        </span>
                      </th>
                      <th className="px-6 py-4 text-center">Operational Directives</th>
                    </tr>
                  </thead>
                  
                  <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-700">
                    {subjects.map((subject) => (
                      <tr key={subject._id} className="hover:bg-slate-50/70 transition-colors">
                        
                        {/* Subject ID Code Mapping Element */}
                        <td className="px-6 py-4 text-[#483EA8] font-black tracking-wide uppercase">
                          {subject.sbid}
                        </td>
                        
                        {/* Subject Full Core Title String Text Component Block */}
                        <td className="px-6 py-4 text-slate-800 font-bold uppercase tracking-tight">
                          {subject.subjectname}
                        </td>
                        
                        {/* Interactive View Class Router Anchor Target */}
                        <td className="px-6 py-4 text-center">
                          <Link 
                            to={`/viewclass/${subject.sbid}`}
                            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-xl transition-all group"
                          >
                            <FaEye className="text-[11px] text-slate-500" />
                            <span>View Class Room</span>
                            <FaArrowRight className="text-[9px] text-slate-400 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              /* Empty Stream Fallback Visual Placeholder */
              <div className="w-full border-2 border-dashed border-slate-200 rounded-2xl p-12 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-3">
                  <FaBookmark className="text-slate-400 text-lg" />
                </div>
                <h3 className="text-xs font-black text-slate-700 uppercase tracking-wider">No Subjects Linked</h3>
                <p className="text-[11px] text-[#667A8A] font-bold uppercase tracking-wide mt-1 max-w-xs">
                  We could not find any academic subjects mapped onto your standard student grade level registry.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Test;