import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from '../Header/Header';

function AddAdditionalClasses() {
  // STATIC INITIAL CS STATE DATA
  const [teacher, setTeacher] = useState('Dr. Asim Khan');
  const [classid, setClassId] = useState('');
  const [teacherid, setTeacherId] = useState('CS-TEACH-404');
  const [date1, setDate1] = useState('');
  const [grade, setGrade] = useState(''); // Representing Semester / Batch
  const [subject, setSubject] = useState('Advanced Algorithms & Complexity');
  
  const navigator = useNavigate();

  const request = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Add Additional Class",
      text: "Are you sure you want to request this extra CS lecture slot?",
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
          title: "Request Cancelled",
          text: "The additional class layout was not modified.",
          icon: "error",
          confirmButtonColor: "#384D6C"
        });
      }
    });
  };

  const submitRequest = () => {
    // Pure Frontend Simulation flow without external Axios connections
    console.log("Static Data Submission Payload Simulated:", {
      teacher, date: date1, grade, subject, classid, teacherid, status: 'Pending'
    });

    Swal.fire({
      title: "Request Processed!",
      text: "CS Additional lecture entry has been queued successfully.",
      icon: "success",
      confirmButtonColor: "#10a1b6"
    });
    
    simulateToasts();
  };

  const simulateToasts = () => {
    toast.loading('Processing slot allocation request...', {
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
        toast.success('Additional CS Class Added Successfully!', {
          style: {
            background: '#10a1b6',
            color: '#ffffff',
            borderRadius: '12px',
          },
          duration: 2000,
        });
        setTimeout(() => {
          navigator('/requestedadditionalclasses');
        }, 2200); 
      }, 1000); 
    }, 2500); 
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      {/* Head section component mapping sidebar configuration rules */}
      <Head />

      {/* COMPONENT BODY CONTAINER - Offset cleanly by 260px matching your static sidebar width */}
      <div className="w-full max-w-[1250px] mx-auto px-4 mt-6 md:pl-[260px] transition-all duration-300">
        
        {/* Title Area Layout */}
        <div className="border-b-2 border-gray-200 pb-4 mb-8">
          <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
            Schedule Computing Slot
          </h1>
          <p className="text-xs text-gray-500 font-medium">
            Deploy additional core computer science lectures and laboratory hours locally
          </p>
        </div>

        {/* Master Workspace Card Structure */}
        <div className="max-w-[750px] mx-auto bg-white border-2 border-slate-200 rounded-[20px] shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-[#384D6C] border-b border-slate-100 pb-3 mb-6 uppercase tracking-wider text-center">
            Class Registration Panel
          </h2>

          <form onSubmit={request} className="space-y-5">
            {/* Input Row: Teacher Name */}
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
                className="w-full bg-slate-100 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-sm text-gray-500 font-medium outline-none cursor-not-allowed"
              />
            </div>

            {/* Input Row: Course/Class Code ID */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="classidInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                Course / Lab ID Code
              </label>
              <input 
                type="text" 
                id="classidInput" 
                required 
                placeholder="e.g., CS-301, CS-451"
                value={classid} 
                onChange={(e) => setClassId(e.target.value)} 
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 font-medium outline-none transition-all"
              />
            </div>

            {/* Input Row: Faculty ID Code */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="teacheridInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                Faculty Instructor Reference ID
              </label>
              <input 
                type="text" 
                id="teacheridInput" 
                required 
                value={teacherid} 
                onChange={(e) => setTeacherId(e.target.value)} 
                readOnly
                className="w-full bg-slate-100 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-sm text-gray-500 font-medium outline-none cursor-not-allowed"
              />
            </div>

            {/* Input Row: Academic Semester/Batch Group */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="gradeInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                Target Batch / Semester (Numeric Group)
              </label>
              <input 
                type="text" 
                id="gradeInput" 
                pattern="[0-9]+" 
                required 
                placeholder="e.g., 6, 8"
                value={grade} 
                onChange={(e) => setGrade(e.target.value)} 
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 font-medium outline-none transition-all"
              />
            </div>

            {/* Input Row: Selected Target Date */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="dateInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                Target Calendar Date
              </label>
              <input 
                type="date" 
                id="dateInput" 
                required 
                value={date1} 
                onChange={(e) => setDate1(e.target.value)} 
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 font-medium outline-none transition-all"
              />
            </div>

            {/* Input Row: Computing Subject Module Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subjectInput" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                Computing Subject Module
              </label>
              <input 
                type="text" 
                id="subjectInput" 
                pattern="[A-Za-z\s]+" 
                required 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)} 
                readOnly
                className="w-full bg-slate-100 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-sm text-gray-500 font-medium outline-none cursor-not-allowed"
              />
            </div>

            {/* Form Operation Sub-panel Buttons Matrix */}
            <div className="flex items-center justify-between pt-4 gap-4">
              <Link 
                to="/requestedadditionalclasses" 
                className="w-1/2 bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-3 px-4 rounded-xl shadow-xs transition-all text-center uppercase tracking-wider"
              >
                Cancel
              </Link>
              <button 
                type="submit"
                className="w-1/2 bg-[#10a1b6] hover:bg-[#128a9c] text-white text-xs font-bold py-3 px-4 rounded-xl shadow-xs transition-all text-center uppercase tracking-wider"
              >
                Request
              </button>
            </div>
          </form>

          {/* Separation Divider Block Line */}
          <div className="w-full border-t border-slate-100 my-6"></div>

          {/* Extended Path Redirect Action Navigation Node */}
          <div className="w-full flex justify-center">
            <Link 
              to="/requestschedule" 
              className="w-full sm:w-[60%] bg-[#384D6C] hover:bg-[#2b3c54] text-white text-xs font-bold py-3 px-4 rounded-xl shadow-xs transition-all text-center uppercase tracking-wider"
            >
              Request A Schedule Layout
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddAdditionalClasses;