import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Head from '../Header/Header';
import { FaUserTie, FaCogs, FaEdit, FaTrashAlt, FaHistory, FaFolderOpen } from 'react-icons/fa';

function MyFeedbacks() {
  // Pure Static Pre-loaded Data Array Stores (Mocking Database Responses)
  const [tfeedbacks, setTFeedbacks] = useState([
    { _id: 't1', grade: '9', subject: 'Mathematics', teacher: 'Sir Imran', feedback: 'The curriculum timeline is perfectly aligned with mock test schedules, but need more deep-dive practice sets.' },
    { _id: 't2', grade: '10', subject: 'Computer Science', teacher: 'Miss Fatima', feedback: 'Excellent practical code reviews in the lab module. The explanation of backend pipelines was highly productive.' }
  ]);

  const [sfeedbacks, setSFeedbacks] = useState([
    { _id: 's1', grade: '9', feedback: 'The digital lab portal authentication response time has improved. Thanks for optimizing the entry route loops.' },
    { _id: 's2', grade: '11', feedback: 'Library portal setup is running fine, but update requests for recent analytical books take time.' }
  ]);

  // Pure Client-Side Simulation Deletion Flow
  const handleDeleteT = (id) => {
    if (window.confirm("Are you sure you want to delete this teacher feedback? (Sandbox Simulation)")) {
      setTFeedbacks(tfeedbacks.filter(item => item._id !== id));
    }
  };

  const handleDeleteS = (id) => {
    if (window.confirm("Are you sure you want to delete this service feedback? (Sandbox Simulation)")) {
      setSFeedbacks(sfeedbacks.filter(item => item._id !== id));
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20 font-sans antialiased">
      {/* Universal Portal Navbar Header */}
      <Head />

      {/* Layout Content Desk Layer - Matching sidebar indentation shift gap via padding */}
      <div className="w-full max-w-[1250px] mx-auto px-4 lg:pl-[290px] mt-8 space-y-10">
        
        {/* Component Header Block section */}
        <div className="border-b-2 border-slate-200 pb-3">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2.5">
            <FaHistory className="text-[#384D6C]" /> We Want to Hear from You - My Feedbacks Logs
          </h2>
          <div className="h-1 w-16 bg-[#384D6C] rounded-full mt-1.5" />
        </div>

        {/* ========================================== */}
        {/* SECTION 1: TEACHER FEEDBACK REVIEWS BLOCK */}
        {/* ========================================== */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <FaUserTie className="text-[#384D6C] text-sm" />
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500">
              Submitted Faculty Evaluations ({tfeedbacks.length})
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {tfeedbacks.length > 0 ? (
              tfeedbacks.map((tfeedback) => (
                <div 
                  key={tfeedback._id}
                  className="bg-white border-2 border-slate-900 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row justify-between gap-5 items-start"
                >
                  {/* Left Metadata Parameters */}
                  <div className="space-y-2 md:w-[220px] shrink-0">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0C7FDA] bg-[#0C7FDA]/5 border border-[#0C7FDA]/20 px-2.5 py-1 rounded-md block w-fit">
                      Teacher Feedback
                    </span>
                    <div className="space-y-1 pt-1">
                      <p className="text-xs font-bold text-slate-800">
                        <span className="text-slate-400 font-medium">Instructor:</span> {tfeedback.teacher}
                      </p>
                      <p className="text-xs font-bold text-slate-800">
                        <span className="text-slate-400 font-medium">Subject:</span> {tfeedback.subject}
                      </p>
                      <p className="text-xs font-bold text-slate-800">
                        <span className="text-slate-400 font-medium">Grade Boundary:</span> {tfeedback.grade}
                      </p>
                    </div>
                  </div>

                  {/* Center Text Review Entry */}
                  <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-inner w-full">
                    <span className="text-[9px] font-black tracking-widest text-slate-400 uppercase block mb-1">
                      Statement Content
                    </span>
                    <p className="text-xs font-bold text-slate-700 leading-relaxed">
                      "{tfeedback.feedback}"
                    </p>
                  </div>

                  {/* Right Action Trigger Deck */}
                  <div className="flex md:flex-col sm:flex-row gap-2 w-full md:w-auto shrink-0 pt-1">
                    <Link 
                      to={`/UpdateTeacherF/${tfeedback._id}`}
                      className="flex-1 md:w-[110px] text-center bg-[#136845] hover:bg-[#0f5236] text-white font-black text-[10px] uppercase tracking-wider py-2.5 px-3 rounded-lg border border-slate-950 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <FaEdit /> Edit
                    </Link>
                    <button 
                      onClick={() => handleDeleteT(tfeedback._id)}
                      className="flex-1 md:w-[110px] text-center bg-[#4a2032] hover:bg-[#381826] text-white font-black text-[10px] uppercase tracking-wider py-2.5 px-3 rounded-lg border border-slate-950 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <FaTrashAlt /> Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 bg-white border-2 border-slate-200 border-dashed rounded-2xl text-slate-400 font-bold text-xs uppercase tracking-wider space-y-2">
                <FaFolderOpen className="text-2xl mx-auto opacity-30" />
                <p>No teacher feedback logs found.</p>
              </div>
            )}
          </div>
        </div>

        {/* ========================================== */}
        {/* SECTION 2: SERVICE FEEDBACK REVIEWS BLOCK */}
        {/* ========================================== */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <div className="flex items-center gap-2">
            <FaCogs className="text-[#384D6C] text-sm" />
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500">
              Submitted Portal Service Logs ({sfeedbacks.length})
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {sfeedbacks.length > 0 ? (
              sfeedbacks.map((sfeedback) => (
                <div 
                  key={sfeedback._id}
                  className="bg-white border-2 border-slate-900 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row justify-between gap-5 items-start"
                >
                  {/* Left Metadata Parameters */}
                  <div className="space-y-2 md:w-[220px] shrink-0">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#384D6C] bg-[#384D6C]/5 border border-[#384D6C]/20 px-2.5 py-1 rounded-md block w-fit">
                      Service Review
                    </span>
                    <div className="space-y-1 pt-1">
                      <p className="text-xs font-bold text-slate-800">
                        <span className="text-slate-400 font-medium">Grade Level:</span> {sfeedback.grade}
                      </p>
                    </div>
                  </div>

                  {/* Center Text Review Entry */}
                  <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-inner w-full">
                    <span className="text-[9px] font-black tracking-widest text-slate-400 uppercase block mb-1">
                      Statement Content
                    </span>
                    <p className="text-xs font-bold text-slate-700 leading-relaxed">
                      "{sfeedback.feedback}"
                    </p>
                  </div>

                  {/* Right Action Trigger Deck */}
                  <div className="flex md:flex-col sm:flex-row gap-2 w-full md:w-auto shrink-0 pt-1">
                    <Link 
                      to={`/UpdateSFeedback/${sfeedback._id}`}
                      className="flex-1 md:w-[110px] text-center bg-[#136845] hover:bg-[#0f5236] text-white font-black text-[10px] uppercase tracking-wider py-2.5 px-3 rounded-lg border border-slate-950 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <FaEdit /> Edit
                    </Link>
                    <button 
                      onClick={() => handleDeleteS(sfeedback._id)}
                      className="flex-1 md:w-[110px] text-center bg-[#4a2032] hover:bg-[#381826] text-white font-black text-[10px] uppercase tracking-wider py-2.5 px-3 rounded-lg border border-slate-950 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <FaTrashAlt /> Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 bg-white border-2 border-slate-200 border-dashed rounded-2xl text-slate-400 font-bold text-xs uppercase tracking-wider space-y-2">
                <FaFolderOpen className="text-2xl mx-auto opacity-30" />
                <p>No service feedback logs found.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default MyFeedbacks;