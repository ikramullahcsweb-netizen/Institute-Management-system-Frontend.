import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Head from "../Header/Header";
import API from "../../../api";

const SubjectView = () => {
  const [subjects,    setSubjects]    = useState([]);
  const [searchTerm,  setSearchTerm]  = useState("");
  const [loading,     setLoading]     = useState(true);

  useEffect(() => {
    API.get('/api/subjects/viewSubject')
      .then(res => {
        const d = res.data?.data || res.data || [];
        setSubjects(Array.isArray(d) ? d : []);
      })
      .catch(err => {
        console.error('Subjects fetch error:', err);
        Swal.fire({ icon: 'error', title: 'Error', text: 'Subjects load nahi ho sake' });
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredSubjects = subjects.filter(s => {
    const q = searchTerm.toLowerCase();
    return (
      (s.sbid        || '').toLowerCase().includes(q) ||
      (s.subjectname || '').toLowerCase().includes(q) ||
      (s.grade       || '').toString().toLowerCase().includes(q) ||
      (s.teid        || '').toLowerCase().includes(q) ||
      (s.teachername || '').toLowerCase().includes(q)
    );
  });

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      <Head />

      <div className="w-full max-w-[1100px] mx-auto px-4 mt-6 md:pl-[260px]">

        <div className="border-b-2 border-gray-200 pb-4 mb-6">
          <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">View All Subjects</h1>
          <p className="text-xs text-gray-500 font-medium">Academic subjects and teacher assignments</p>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-[20px] shadow-sm overflow-hidden p-5">
          <input
            type="text"
            className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all mb-4"
            placeholder="Search by Teacher ID, Name, Grade, Subject..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />

          <div className="overflow-x-auto border border-slate-100 rounded-xl">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-[#13293d] text-white uppercase font-black tracking-wider">
                <tr>
                  <th className="px-4 py-3.5">Subject ID</th>
                  <th className="px-4 py-3.5">Subject Name</th>
                  <th className="px-4 py-3.5">Grade</th>
                  <th className="px-4 py-3.5">Teacher ID</th>
                  <th className="px-4 py-3.5">Teacher Name</th>
                  <th className="px-4 py-3.5">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-gray-700">
                {loading ? (
                  <tr>
                    <td colSpan="6" className="px-4 py-8 text-center text-gray-400 font-semibold">
                      Loading subjects...
                    </td>
                  </tr>
                ) : filteredSubjects.length > 0 ? (
                  filteredSubjects.map((s, i) => (
                    <tr key={s._id || i} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-4 py-3 font-semibold text-[#13293d]">{s.sbid || '—'}</td>
                      <td className="px-4 py-3 font-medium">{s.subjectname || '—'}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 bg-slate-100 rounded text-gray-600 font-bold">
                          {s.grade || '—'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500 font-mono">{s.teid || '—'}</td>
                      <td className="px-4 py-3 font-medium">{s.teachername || '—'}</td>
                      <td className="px-4 py-3 font-semibold text-emerald-600">
                        {s.amount ? `Rs. ${s.amount}` : '—'}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-4 py-8 text-center text-gray-400 font-medium">
                      No subjects found.
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
};

export default SubjectView;
