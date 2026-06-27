import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Head from '../Header/Header';
import { FaGraduationCap, FaBookmark, FaHashtag, FaEye, FaArrowRight, FaClipboardList } from 'react-icons/fa';

function Test() {
  const [subjects, setSubjects] = useState([]);
  const BASE_URL = 'http://localhost:3000';

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/viewSubject`);
      setSubjects(res.data);
    } catch (err) {
      console.error("Error fetching subjects:", err);
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12">
      <Head />

      <div className="w-full max-w-[1250px] mx-auto px-4 pl-4 md:pl-[290px] mt-8 transition-all">
        {/* Header Block */}
        <div className="w-full bg-[#C9E8EA] border border-slate-200 rounded-[20px] p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div>
            <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
              <FaGraduationCap className="text-slate-700" />
              <span>Available Subjects Catalog</span>
            </h1>
            <p className="text-[11px] text-slate-600 font-bold mt-0.5 uppercase tracking-wide">
              Explore educational courses curated for your grade.
            </p>
          </div>

          <Link 
            to="/enrolled"
            className="bg-[#483EA8] hover:bg-[#392f8a] text-white text-[10px] font-black uppercase tracking-wider px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-all shadow-md shrink-0"
          >
            <FaClipboardList className="text-[11px]" />
            <span>View Enrolled List</span>
          </Link>
        </div>

        {/* Table Container */}
        <div className="bg-white border-2 border-slate-200 rounded-[22px] shadow-xs overflow-hidden">
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
                      <th className="px-6 py-4">Subject Code</th>
                      <th className="px-6 py-4">Course Module Title</th>
                      <th className="px-6 py-4 text-center">Operational Directives</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-700">
                    {subjects.map((subject) => (
                      <tr key={subject._id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="px-6 py-4 text-[#483EA8] font-black tracking-wide uppercase">
                          {subject.sbid}
                        </td>
                        <td className="px-6 py-4 text-slate-800 font-bold uppercase tracking-tight">
                          {subject.subjectname}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Link 
                            to={`/viewclass/${subject.sbid}`}
                            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-xl transition-all"
                          >
                            <FaEye className="text-[11px]" />
                            <span>View Class Room</span>
                            <FaArrowRight className="text-[9px]" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-12 text-center">
                <h3 className="text-xs font-black text-slate-700 uppercase">No Subjects Linked</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;