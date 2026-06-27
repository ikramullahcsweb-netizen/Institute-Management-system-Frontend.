import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Head from '../Header/Header';
import { FaBookReader, FaFolderOpen, FaArrowRight, FaHashtag, FaGraduationCap } from 'react-icons/fa';

function Enrolled() {
  const [payments, setPayments] = useState([]);
  const BASE_URL = 'http://localhost:3000';

  useEffect(() => {
    fetchEnrolledClasses();
  }, []);

  const fetchEnrolledClasses = async () => {
    try {
      // 1. Pehle Student Profile se ID fetch karein
      const profileRes = await axios.get(`${BASE_URL}/studentprofile`);
      const studentId = profileRes.data.username;

      // 2. Phir saari enrollments fetch karein
      const enrollRes = await axios.get(`${BASE_URL}/classenrollments`);
      
      // 3. Filter karein sirf us student ki classes
      const myClasses = enrollRes.data.filter(item => item.studentId === studentId);
      
      // 4. Data ko table ke format mein map karein
      setPayments(myClasses.map(item => ({
        subjectcode: item.classId, 
        description: item.classId, 
        subjectname: item.subject
      })));
      
    } catch (err) {
      console.error("Error fetching enrolled classes:", err);
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12">
      <Head />

      <div className="w-full max-w-[1250px] mx-auto px-4 pl-4 md:pl-[290px] mt-8">
        <div className="w-full bg-[#C9E8EA] border border-slate-200 rounded-[20px] p-5 mb-8 flex items-center justify-between shadow-xs">
          <div>
            <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
              <FaBookReader className="text-slate-700" />
              <span>My Enrolled Subjects</span>
            </h1>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-[22px] shadow-xs overflow-hidden">
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
                      <th className="px-6 py-4">Class Code</th>
                      <th className="px-6 py-4">Course Module Title</th>
                      <th className="px-6 py-4 text-center">Academic Directives</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-700">
                    {payments.map((payment) => (
                      <tr key={payment.subjectcode} className="hover:bg-slate-50/70">
                        <td className="px-6 py-4 text-[#483EA8] font-black uppercase">{payment.description}</td>
                        <td className="px-6 py-4 text-slate-800 font-bold uppercase tracking-tight">{payment.subjectname}</td>
                        <td className="px-6 py-4 text-center">
                          <Link 
                            to={`/lessonmaterial/${payment.description}`}
                            className="inline-flex items-center gap-2 bg-[#483EA8] hover:bg-[#392f8a] text-white text-[10px] font-black uppercase px-4 py-2.5 rounded-xl transition-all"
                          >
                            <FaFolderOpen /> Launch Portal
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center p-12">
                <h3 className="text-xs font-black text-slate-700 uppercase">No Active Enrolments Found</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enrolled;