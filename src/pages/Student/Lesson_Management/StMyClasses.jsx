import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Head from '../Header/Header';
import { FaGraduationCap, FaChalkboardTeacher, FaBullhorn, FaBookOpen, FaSearch, FaEye, FaDownload } from 'react-icons/fa';

function StMyClasses() {
  const { description } = useParams(); 
  
  // Static Configuration Defaults
  const [grade] = useState('A+');
  const [searchTerm, setSearchTerm] = useState('');

  // Local Static Mock Data Matrix for Notice Boards
  const [notices] = useState([
    {
      _id: "nt-01",
      subject_name: "Mathematics",
      grade: "A+",
      date: "2026-05-18",
      topic: "Mid-Term Examination Syllabus Announcement",
      description: "Complete calculus pipelines and advanced trigonometric optimization structures will be evaluated during the upcoming ledger timeline."
    },
    {
      _id: "nt-02",
      subject_name: "Computer Science",
      grade: "A+",
      date: "2026-05-19",
      topic: "MERN Stack Term Project Submission Deadline",
      description: "Ensure that your local state mock modifications and responsive Tailwind dashboard wireframes are pushed to repository branches."
    }
  ]);

  // Local Static Mock Data Matrix for Lesson Materials
  const [materials] = useState([
    {
      _id: "mat-01",
      subject_name: "Computer Science",
      grade: "A+",
      teachername: "Dr. Asif Khan",
      lesson_topic: "Introduction to Utility-First CSS Frameworks (Tailwind)",
      lesson_date: "2026-05-12",
      lesson_description: "Deep dive into layout spacing orchestration, responsive responsive padding break points, and container utility patterns.",
      lesson_Files: "Tailwind_Core_Layouts.pdf"
    },
    {
      _id: "mat-02",
      subject_name: "Computer Science",
      grade: "A+",
      teachername: "Dr. Asif Khan",
      lesson_topic: "State Preservation Engines in Client React Frameworks",
      lesson_date: "2026-05-15",
      lesson_description: "Investigating mock state initializations, useEffect isolation routines, and local context pipelines.",
      lesson_Files: "React_State_Preservation.pdf"
    }
  ]);

  // Static Filter Routine for notices matching path parameters
  const currentSubject = description || "Computer Science";
  
  const filteredNotices = notices.filter(notice => 
    notice.subject_name.toLowerCase() === currentSubject.toLowerCase()
  );

  const filteredMaterials = materials.filter(material =>
    material.subject_name.toLowerCase() === currentSubject.toLowerCase() &&
    material.lesson_topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Standalone Mock Trigger Actions
  const showFile = (fileName) => {
    alert(`Static Preview Triggered for secure structural log: ${fileName}`);
  };

  const downloadFile = (fileName) => {
    alert(`Static Client Action dispatched! Starting localized storage dump for file payload: ${fileName}`);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <Head />
      
      {/* Main Structural Layout Grid Matrix with Left Sidebar Padding Buffer */}
      <div className="w-full max-w-[1300px] mx-auto px-4 pl-4 md:pl-[290px] mt-8 transition-all space-y-6">
        
        {/* Module Header Segment Card Box Area */}
        <div className="bg-[#C9E8EA] border-2 border-slate-900 rounded-[22px] p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3 bg-white border-2 border-slate-900 rounded-xl text-[#384D6C] text-2xl hidden sm:block">
              <FaGraduationCap />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight">
                {currentSubject} — Academic Portal
              </h1>
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wide mt-0.5 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <span className="bg-white/70 px-2 py-0.5 rounded border border-slate-400">Grade Matrix: {grade}</span>
                {filteredMaterials.length > 0 && (
                  <span className="flex items-center gap-1 text-slate-900">
                    <FaChalkboardTeacher className="text-[#384D6C]" /> 
                    Mentor: {filteredMaterials[0].teachername}
                  </span>
                )}
              </div>
            </div>
          </div>
          <span className="text-[10px] font-black uppercase bg-slate-900 text-white tracking-widest px-3 py-1.5 rounded-lg">
            Static Course Sandbox
          </span>
        </div>

        {/* Core Layout Split Module Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Column Layer A: Centralised Board Notices */}
          <div className="bg-white border-2 border-slate-900 rounded-[22px] p-5 shadow-sm space-y-4">
            <h2 className="text-base font-black text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b-2 border-slate-100 pb-3">
              <FaBullhorn className="text-amber-500 text-lg" />
              <span>Broadcast Notice Board</span>
            </h2>

            {filteredNotices.length === 0 ? (
              <p className="text-xs font-bold text-slate-400 uppercase text-center py-6">No announcements posted for this subject scope.</p>
            ) : (
              <div className="space-y-4 divide-y-2 divide-slate-100">
                {filteredNotices.map((notice) => (
                  <div className="pt-3 first:pt-0 space-y-1.5" key={notice._id}>
                    <span className="text-[10px] text-slate-500 font-mono font-bold block">{notice.date}</span>
                    <h3 className="text-sm font-black text-slate-900 leading-tight">{notice.topic}</h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">{notice.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Column Layer B: Material Records Engine (Takes 2 Columns Spacing Wide) */}
          <div className="lg:col-span-2 bg-white border-2 border-slate-900 rounded-[22px] p-5 shadow-sm space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-100 pb-4">
              <h2 className="text-base font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <FaBookOpen className="text-[#384D6C] text-lg" />
                <span>Published Material Index</span>
              </h2>
              
              {/* Specialized Static Filter Interface Group */}
              <div className="relative max-w-xs w-full">
                <input 
                  type="search" 
                  placeholder="Filter syllabus archives..." 
                  className="w-full bg-slate-50 border-2 border-slate-200 text-slate-800 text-xs font-bold placeholder-slate-400 rounded-xl pl-9 pr-4 py-2.5 focus:outline-none focus:border-[#384D6C] transition-colors"
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
              </div>
            </div>

            {/* Render Matrix Loops */}
            {filteredMaterials.length === 0 ? (
              <div className="text-center py-12 space-y-2">
                <p className="text-sm font-black text-slate-400 uppercase">Zero Modules Discovered</p>
                <p className="text-xs text-slate-500 font-medium">No files matching current state metrics filter queries.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredMaterials.map((lesson) => (
                  <div 
                    key={lesson._id} 
                    className="bg-slate-50 border-2 border-slate-100 rounded-xl p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:border-slate-300"
                  >
                    <div className="space-y-1.5 max-w-xl">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-white font-extrabold tracking-wider px-2 py-0.5 bg-[#384D6C] rounded-md uppercase">PDF Log</span>
                        <span className="text-[10px] text-slate-500 font-mono font-bold">Date: {lesson.lesson_date}</span>
                      </div>
                      <h3 className="text-sm md:text-base font-black text-slate-900 leading-snug">{lesson.lesson_topic}</h3>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">{lesson.lesson_description}</p>
                    </div>

                    {/* Operational Action Controls Array */}
                    <div className="flex sm:flex-row md:flex-col gap-2 min-w-[140px]">
                      <button
                        onClick={() => showFile(lesson.lesson_Files)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-[11px] font-black uppercase tracking-wider py-2 px-3 rounded-lg border border-slate-400 transition-all"
                      >
                        <FaEye />
                        <span>Inspect</span>
                      </button>
                      <button
                        onClick={() => downloadFile(lesson.lesson_Files)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-black uppercase tracking-wider py-2 px-3 rounded-lg shadow-xs transition-all"
                      >
                        <FaDownload />
                        <span>Pull Archive</span>
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

export default StMyClasses;