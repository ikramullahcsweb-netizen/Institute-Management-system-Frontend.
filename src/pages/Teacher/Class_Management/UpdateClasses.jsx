import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Head from '../Header/Header';

function UpdateClasses() {
  const { id } = useParams();
  const navigator = useNavigate();
  
  // STATIC LOCAL DATA STATE STORAGE FOR FORM BINDING
  const [teacher, setTeacher] = useState('Dr. Asim Khan');
  const [classid, setClassId] = useState('CS-301-A');
  const [teacherid, setTeacherId] = useState('CS-TEACH-404');
  const [subject, setSubject] = useState('Advanced Data Structures & Lab');
  const [time, setTime] = useState('09:00 AM - 10:30 AM');
  const [date, setDate] = useState('Monday, May 18');
  const [grade, setGrade] = useState('6');

  // Simulated effect logic for initial tracking setup
  useEffect(() => {
    console.log(`Initialized static tracking parameters for core schedule target instance: ${id}`);
  }, [id]);

  const update = (e) => {
    e.preventDefault();
    
    // Simulating structural update success without dynamic backend servers
    console.log("Locally saved modifications registered successfully:", {
      id, teacher, classid, teacherid, subject, time, date, grade
    });

    Swal.fire({
      title: "Schedule Updated",
      text: "The core lecture allocation registry was updated locally.",
      icon: "success",
      confirmButtonColor: "#10a1b6"
    }).then(() => {
      // Standard local safe layout redirection
      navigator('/viewclasses');
    });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      {/* Head navigation component context mounting point */}
      <Head />

      {/* DASHBOARD FORM CONTAINER: Offset spacing tailored for the 260px fixed sidebar layout */}
      <div className="w-full max-w-[1250px] mx-auto px-4 mt-6 md:pl-[260px] transition-all duration-300">
        
        {/* Component Identification Banner Row */}
        <div className="border-b-2 border-gray-200 pb-4 mb-8">
          <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
            Modify Course Settings
          </h1>
          <p className="text-xs text-gray-500 font-medium">
            Overhaul system configurations and schedule timelines dynamically within the local matrix
          </p>
        </div>

        {/* Form Panel Content Wrapper Card */}
        <div className="max-w-[750px] mx-auto bg-white border-2 border-slate-200 rounded-[20px] shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-[#384D6C] border-b border-slate-100 pb-3 mb-6 uppercase tracking-wider text-center">
            Edit Lecture Context Log
          </h2>

          <form onSubmit={update} className="space-y-5">
            
            {/* Input Element Grid: Professor Reference Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="teacherInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                  Assigned Instructor
                </label>
                <input 
                  type="text" 
                  id="teacherInput" 
                  required
                  value={teacher} 
                  onChange={(e) => setTeacher(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 font-medium outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="teacheridInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                  Instructor Identifier Code
                </label>
                <input 
                  type="text" 
                  id="teacheridInput" 
                  required
                  value={teacherid} 
                  onChange={(e) => setTeacherId(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 font-medium outline-none transition-all"
                />
              </div>
            </div>

            {/* Input Element: Curriculum Subject Stream Block */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subjectInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                Computing Subject Module Title
              </label>
              <input 
                type="text" 
                id="subjectInput" 
                required
                value={subject} 
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 font-medium outline-none transition-all"
              />
            </div>

            {/* Input Element: Core Class Stream ID Selector */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="classidInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                Course Allocation Reference (Class ID)
              </label>
              <input 
                type="text" 
                id="classidInput" 
                required
                value={classid} 
                onChange={(e) => setClassId(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 font-medium outline-none transition-all"
              />
            </div>

            {/* Grid Box Layout Row: Date and Time Operations Panel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="timeInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                  Target Hourly Slot Range
                </label>
                <input 
                  type="text" 
                  id="timeInput" 
                  required
                  value={time} 
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 font-medium outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="dateInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                  Target Calendar Date Log
                </label>
                <input 
                  type="text" 
                  id="dateInput" 
                  required
                  value={date} 
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 font-medium outline-none transition-all"
                />
              </div>
            </div>

            {/* Input Element: Target Academic Group Semester */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="gradeInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                Target Semester Batch (Numeric Value)
              </label>
              <input 
                type="text" 
                id="gradeInput" 
                required
                value={grade} 
                onChange={(e) => setGrade(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 font-medium outline-none transition-all"
              />
            </div>

            {/* Execution Control Link Matrix Row */}
            <div className="flex items-center justify-between pt-4 gap-4 border-t border-slate-100">
              <Link 
                to="/viewclasses"
                className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-3 px-6 rounded-xl shadow-xs transition-all text-center uppercase tracking-wider"
              >
                Cancel
              </Link>
              <button 
                type="submit"
                className="bg-[#10a1b6] hover:bg-[#128a9c] text-white text-xs font-bold py-3 px-6 rounded-xl shadow-xs transition-all text-center uppercase tracking-wider"
              >
                Save Changes
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}

export default UpdateClasses;