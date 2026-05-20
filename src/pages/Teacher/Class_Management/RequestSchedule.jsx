import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from '../Header/Header';

function RequestSchedule() {
  // STATIC INITIAL STATE FOR COMPUTER SCIENCE STREAM
  const [teacher, setTeacher] = useState('Dr. Asim Khan');
  const [classid, setClassId] = useState('');
  const [teacherid, setTeacherId] = useState('CS-TEACH-404');
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [date3, setDate3] = useState('');
  const [date4, setDate4] = useState('');
  const [grade, setGrade] = useState(''); // Target Semester Group
  const [subject, setSubject] = useState('Database Management Systems & Lab');
  const [status, setStatus] = useState('Pending');
  
  const navigator = useNavigate();

  const request = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Request Batch Schedule",
      text: "Are you sure you want to submit these 4 tentative dates for the CS slot allocation?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#10a1b6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, submit request!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        submitRequest(); 
      } else {
        Swal.fire({
          title: "Submission Cancelled",
          text: "The multiline date query framework remains unsubmitted.",
          icon: "error",
          confirmButtonColor: "#384D6C"
        });
      }
    });
  };

  const submitRequest = () => {
    // Pure Frontend Simulation without external Axios connections
    console.log("Static Multiline Schedule Submission Payload Simulated:", {
      teacher, classid, teacherid, date1, date2, date3, date4, grade, subject, status
    });

    Swal.fire({
      title: "Schedule Request Logged",
      text: "Timeline preferences have been saved in the registry data stream.",
      icon: "success",
      confirmButtonColor: "#10a1b6"
    });
    
    executeToastSequence();
  };

  const clearForm = () => {
    setClassId('');
    setDate1('');
    setDate2('');
    setDate3('');
    setDate4('');
    setGrade('');
    setStatus('Pending');
    toast.info('Form filters reset successfully.', { duration: 1500 });
  };

  const executeToastSequence = () => {
    toast.loading('Analyzing layout timeline compatibility...', {
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
        toast.success('Schedule Timeline Stream Requested!', {
          style: {
            background: '#10a1b6',
            color: '#ffffff',
            borderRadius: '12px',
          },
          duration: 2000,
        });
        setTimeout(() => {
          navigator('/additionalclasses');
        }, 2200); 
      }, 1000); 
    }, 2500); 
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      {/* Head header module integration context */}
      <Head />

      {/* WORKSPACE CONTENT AREA FRAME: Shifted 260px right to respect the fixed sidebar position */}
      <div className="w-full max-w-[1250px] mx-auto px-4 mt-6 md:pl-[260px] transition-all duration-300">
        
        {/* Title Area row layout */}
        <div className="border-b-2 border-gray-200 pb-4 mb-8">
          <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
            Request Timetable Stream
          </h1>
          <p className="text-xs text-gray-500 font-medium">
            Propose multiple calendar slots for automated departmental routing layout reviews
          </p>
        </div>

        {/* Form Outer Registration Box Wrapper */}
        <div className="max-w-[800px] mx-auto bg-white border-2 border-slate-200 rounded-[20px] shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-[#384D6C] border-b border-slate-100 pb-3 mb-6 uppercase tracking-wider text-center">
            Multi-Date Preference Allocation
          </h2>

          <form onSubmit={request} className="space-y-5">
            
            {/* Form Input Row Grid: Professor Profile Data */}
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

            {/* Form Input Row Grid: Course Identifiers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="classidInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                  Course Code Identifier (Class ID)
                </label>
                <input 
                  type="text" 
                  id="classidInput" 
                  required 
                  placeholder="e.g., CS-402, LAB-CS-402"
                  value={classid} 
                  onChange={(e) => setClassId(e.target.value)} 
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 font-medium outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="gradeInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                  Target Batch / Semester (Numeric)
                </label>
                <input 
                  type="text" 
                  id="gradeInput" 
                  pattern="[0-9]+" 
                  required 
                  placeholder="e.g., 5, 7"
                  value={grade} 
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 font-medium outline-none transition-all"
                />
              </div>
            </div>

            {/* Timeline Multi-Date Entry Flex Area Split Matrix */}
            <div className="p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl">
              <span className="block text-xs font-black text-[#384D6C] uppercase tracking-wider mb-3 text-center sm:text-left">
                Propose Up to 4 Tentative Lecture Options
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="date1Input" className="text-[11px] font-bold text-gray-500 uppercase">Preference Date 1</label>
                  <input type="date" id="date1Input" required value={date1} onChange={(e) => setDate1(e.target.value)} className="w-full bg-white border border-slate-300 focus:border-[#10a1b6] rounded-xl px-3 py-2 text-xs text-gray-800 outline-none transition-all font-medium" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="date2Input" className="text-[11px] font-bold text-gray-500 uppercase">Preference Date 2</label>
                  <input type="date" id="date2Input" required value={date2} onChange={(e) => setDate2(e.target.value)} className="w-full bg-white border border-slate-300 focus:border-[#10a1b6] rounded-xl px-3 py-2 text-xs text-gray-800 outline-none transition-all font-medium" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="date3Input" className="text-[11px] font-bold text-gray-500 uppercase">Preference Date 3</label>
                  <input type="date" id="date3Input" required value={date3} onChange={(e) => setDate3(e.target.value)} className="w-full bg-white border border-slate-300 focus:border-[#10a1b6] rounded-xl px-3 py-2 text-xs text-gray-800 outline-none transition-all font-medium" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="date4Input" className="text-[11px] font-bold text-gray-500 uppercase">Preference Date 4</label>
                  <input type="date" id="date4Input" required value={date4} onChange={(e) => setDate4(e.target.value)} className="w-full bg-white border border-slate-300 focus:border-[#10a1b6] rounded-xl px-3 py-2 text-xs text-gray-800 outline-none transition-all font-medium" />
                </div>
              </div>
            </div>

            {/* Form Input Row: Computing Subject Module Title */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subjectInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                Computing Course Stream Module
              </label>
              <input 
                type="text" 
                id="subjectInput" 
                pattern="[A-Za-z\s]+" 
                required 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)} 
                readOnly
                className="w-full bg-slate-100 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-sm text-gray-500 font-medium cursor-not-allowed outline-none"
              />
            </div>

            {/* Action Operations Control Triggers Panel */}
            <div className="flex items-center justify-end pt-4 gap-3">
              <button 
                type="button" 
                onClick={clearForm}
                className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-3 px-6 rounded-xl shadow-xs transition-all text-center uppercase tracking-wider"
              >
                Clear Form
              </button>
              <button 
                type="submit"
                className="bg-[#10a1b6] hover:bg-[#128a9c] text-white text-xs font-bold py-3 px-6 rounded-xl shadow-xs transition-all text-center uppercase tracking-wider"
              >
                Request Schedule
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}

export default RequestSchedule;