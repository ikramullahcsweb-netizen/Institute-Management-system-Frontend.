import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from '../Header/Header';

function AddClasses() {
  // STATIC COMPUTER SCIENCE DEPARTMENT LABELS & PROFILE STATE
  const [teacher, setTeacher] = useState('Dr. Asim Khan');
  const [classid, setClassId] = useState('');
  const [teacherid, setTeacherId] = useState('CS-TEACH-404');
  const [subject, setSubject] = useState('Advanced Data Structures & Lab');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [grade, setGrade] = useState(''); // Target Semester / Class Group
  const navigator = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Add Core CS Class Slot",
      text: "Are you sure you want to log this scheduling profile?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#10a1b6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, save slot!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Local Frontend simulation matrix tracking block execution
        console.log("Simulated Local Form State Submission Registry:", {
          teacher, classid, teacherid, subject, time, date, grade
        });

        Swal.fire({
          title: "Class Registered",
          text: "Computing course schedule matrix updated successfully.",
          icon: "success",
          confirmButtonColor: "#10a1b6"
        });
        
        triggerToastNotification();
      }
    });
  };

  const triggerToastNotification = () => {
    toast.loading('Allocating institutional resource terminals...', {
      style: {
        background: '#384D6C',
        color: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #C9E8EA',
      },
    });

    setTimeout(() => {
      toast.dismiss();
      setTimeout(() => {
        toast.success('Core CS Class Saved Successfully!', {
          style: {
            background: '#10a1b6',
            color: '#ffffff',
            borderRadius: '12px',
          },
          duration: 2000,
        });
        setTimeout(() => {
          navigator('/viewclasses');
        }, 2200);
      }, 1000);
    }, 2500);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      {/* Root frame header row alignment schema */}
      <Head />

      {/* WORKSPACE FRAME CONTAINER: Multi-screen padding offset mapping 260px fixed sidebar panel */}
      <div className="w-full max-w-[1250px] mx-auto px-4 mt-6 md:pl-[260px] transition-all duration-300">
        
        {/* Course Header Descriptive Row */}
        <div className="border-b-2 border-gray-200 pb-4 mb-8">
          <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
            Create Lecture Schedule
          </h1>
          <p className="text-xs text-gray-500 font-medium">
            Register static core computing curriculum streams into the active local terminal
          </p>
        </div>

        {/* Form Container Panel Layout */}
        <div className="max-w-[750px] mx-auto bg-white border-2 border-slate-200 rounded-[20px] shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-[#384D6C] border-b border-slate-100 pb-3 mb-6 uppercase tracking-wider text-center">
            Standard Class Log Terminal
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Input Element Grid Cluster Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="teacherInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                  Assigned Professor
                </label>
                <input 
                  type="text" 
                  id="teacherInput" 
                  pattern="[A-Za-z\s]+" 
                  required 
                  value={teacher} 
                  onChange={(e) => setTeacher(e.target.value)} 
                  readOnly
                  className="w-full bg-slate-100 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-sm text-gray-500 font-medium cursor-not-allowed outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="teacheridInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                  Instructor Reference Code
                </label>
                <input 
                  type="text" 
                  id="teacheridInput" 
                  required 
                  value={teacherid} 
                  onChange={(e) => setTeacherId(e.target.value)} 
                  readOnly
                  className="w-full bg-slate-100 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-sm text-gray-500 font-medium cursor-not-allowed outline-none"
                />
              </div>
            </div>

            {/* Input Element: Course Core Subject Module Title */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subjectInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                Computing Course Subject Title
              </label>
              <input 
                type="text" 
                id="subjectInput" 
                required 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)} 
                readOnly
                className="w-full bg-slate-100 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-sm text-gray-500 font-medium cursor-not-allowed outline-none"
              />
            </div>

            {/* Input Element: Course Class/Lab Code Identifier */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="classidInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                Course Identifier Code (Class ID)
              </label>
              <input 
                type="text" 
                id="classidInput" 
                required 
                placeholder="e.g., CS-301-A, LAB-CS-204"
                value={classid} 
                onChange={(e) => setClassId(e.target.value)} 
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 font-medium outline-none transition-all"
              />
            </div>

            {/* Input Element Grid Cluster Row 2: Time and Date Configurations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="timeInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                  Timestamp Slot / Hour Range
                </label>
                <input 
                  type="text" 
                  id="timeInput" 
                  required 
                  placeholder="e.g., 09:00 AM - 10:30 AM"
                  value={time} 
                  onChange={(e) => setTime(e.target.value)} 
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 font-medium outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="dateInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                  Target Calendar Date
                </label>
                <input 
                  type="text" 
                  id="dateInput" 
                  required 
                  placeholder="e.g., Monday, May 18"
                  value={date} 
                  onChange={(e) => setDate(e.target.value)} 
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 font-medium outline-none transition-all"
                />
              </div>
            </div>

            {/* Input Element: Target Semester Grade Batch Group */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="gradeInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                Target Semester Batch (Numeric Value)
              </label>
              <input 
                type="text" 
                id="gradeInput" 
                pattern="[0-9]+" 
                required 
                placeholder="e.g., 4, 6, 8"
                value={grade} 
                onChange={(e) => setGrade(e.target.value)} 
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 font-medium outline-none transition-all"
              />
            </div>

            {/* Execution Buttons Flex Alignment Box */}
            <div className="flex items-center justify-end pt-4 gap-3">
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
                Save
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default AddClasses;