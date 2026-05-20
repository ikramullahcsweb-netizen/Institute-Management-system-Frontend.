import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Head from '../Header/Header';
import { FaUserTie, FaUserGraduate, FaBookOpen, FaGraduationCap, FaCommentAlt, FaPaperPlane } from 'react-icons/fa';

function TFeedback() {
  // Pure Static Database Simulation States (Mocking profiles fetch logs)
  const [grade, setGrade] = useState('Grade 10');
  const [subject, setSubject] = useState('');
  const [teacher, setTeacher] = useState('');
  const [sid, setSid] = useState('SD001');
  const [tfeedback, setTFeedback] = useState('');

  // Static Pre-populated Teachers List Mapping Stream
  const [teacherid] = useState([
    { name: 'Sir Imran', subject: 'Mathematics' },
    { name: 'Miss Fatima', subject: 'Computer Science' },
    { name: 'Dr. Arsalan', subject: 'Physics' },
    { name: 'Prof. Naeem', subject: 'Chemistry' }
  ]);

  const navigator = useNavigate();

  // Handle Dynamic Subject Extraction matching Selected Teacher Value
  useEffect(() => {
    if (teacher) {
      const matchFound = teacherid.find(t => t.name === teacher);
      if (matchFound) {
        setSubject(matchFound.subject);
      }
    } else {
      setSubject('');
    }
  }, [teacher, teacherid]);

  // Frontend Safe Payload Trigger Simulation
  const handleFakeSubmitLog = () => {
    console.log("Mocking Payload State Mutation Array mapped:", {
      grade,
      subject,
      teacher,
      sid,
      feedback: tfeedback
    });
  };

  const executeToastSequenceFeedback = () => {
    toast.loading('Registering faculty review metric...', {
      id: 'submitting_teacher_loader',
      style: {
        background: '#0F172A',
        color: '#ffffff',
        borderRadius: '12px',
        border: '2px solid #334155',
        fontSize: '13px',
        fontWeight: 'bold',
      },
    });
  
    setTimeout(() => {
      toast.dismiss('submitting_teacher_loader');
      
      toast.success('Teacher Evaluation Successfully Sent!', {
        style: {
          background: '#136845',
          color: '#ffffff',
          borderRadius: '12px',
          border: '2px solid #1e3a1e',
          fontSize: '13px',
          fontWeight: 'bold',
        },
        duration: 2000,
      });

      setTimeout(() => {
        navigator('/Feedback');
      }, 2200);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Confirm Evaluation?",
      text: "Do you want to broadcast this performance review to management parameters?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#384D6C",
      cancelButtonColor: "#4a2032",
      confirmButtonText: "Yes, submit review",
      cancelButtonText: "Cancel",
      background: '#FFFFFF',
      customClass: {
        title: 'text-sm font-black uppercase text-slate-800 tracking-tight',
        popup: 'rounded-2xl border-2 border-slate-900',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        handleFakeSubmitLog();
        Swal.fire({
          title: "Saved Successfully",
          text: "Local state array mutated with latest assessment records.",
          icon: "success",
          confirmButtonColor: "#384D6C"
        });
        executeToastSequenceFeedback();
      } else {
        Swal.fire({
          title: "Log Cancelled",
          text: "Verification sequence safely dropped.",
          icon: "error",
          confirmButtonColor: "#384D6C"
        });
      }
    });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20 font-sans antialiased">
      {/* Live System Native Notification Desk */}
      <Toaster position="top-right" reverseOrder={false} />
      
      {/* Universal Portal Navbar Header */}
      <Head />

      {/* Grid Canvas Entry Main Frame Block - Using padding to preserve left sidebar gap layouts */}
      <div className="w-full max-w-[1100px] mx-auto px-4 lg:pl-[290px] mt-8 space-y-6">
        
        {/* Module Title Deck Segment */}
        <div className="border-b-2 border-slate-200 pb-3">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2.5">
            <FaUserTie className="text-[#384D6C]" /> We Want to Hear from You - Teacher Feedback
          </h2>
          <div className="h-1 w-16 bg-[#384D6C] rounded-full mt-1.5" />
        </div>

        {/* Evaluation Interactive Form Layout Structure */}
        <form 
          onSubmit={handleSubmit}
          className="bg-white border-2 border-slate-900 rounded-2xl p-6 md:p-8 shadow-sm max-w-3xl space-y-5"
        >
          {/* Dual Column Parameters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Field: Student ID Code Token */}
            <div className="space-y-1.5">
              <label htmlFor="student_token" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaUserGraduate className="text-slate-400" /> Student Verification ID
              </label>
              <input 
                id="student_token"
                type="text" 
                pattern="^SD\d{3}$" 
                title="Please enter format matching 'SD001'" 
                value={sid} 
                readOnly
                className="w-full bg-slate-100 border-2 border-slate-200 text-slate-500 font-bold text-xs rounded-xl px-4 py-3 cursor-not-allowed focus:outline-none"
              />
            </div>

            {/* Field: Current Student Grade Level */}
            <div className="space-y-1.5">
              <label htmlFor="student_grade" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaGraduationCap className="text-slate-400" /> Assigned Student Grade
              </label>
              <input 
                id="student_grade" 
                type="text" 
                value={grade} 
                readOnly
                className="w-full bg-slate-100 border-2 border-slate-200 text-slate-500 font-bold text-xs rounded-xl px-4 py-3 cursor-not-allowed focus:outline-none"
              />
            </div>

            {/* Field: Select Target Faculty Member Dropdown Option */}
            <div className="space-y-1.5">
              <label htmlFor="faculty_select" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaUserTie className="text-[#384D6C]" /> Target Faculty Instructor
              </label>
              <select 
                id="faculty_select" 
                value={teacher}
                required 
                onChange={(e) => setTeacher(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="">-- Choose Assigned Teacher --</option>
                {teacherid.map((inst, idx) => (
                  <option key={idx} value={inst.name}>{inst.name}</option>
                ))}
              </select>
            </div>

            {/* Field: Auto Loaded Assigned Course Subject Code */}
            <div className="space-y-1.5">
              <label htmlFor="faculty_subject" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaBookOpen className="text-slate-400" /> Core Department Course
              </label>
              <input 
                id="faculty_subject" 
                type="text" 
                value={subject} 
                placeholder="Select teacher to map course payload..."
                readOnly
                className="w-full bg-slate-100 border-2 border-slate-200 text-slate-500 font-bold text-xs rounded-xl px-4 py-3 cursor-not-allowed focus:outline-none italic"
              />
            </div>

          </div>

          {/* Field: Rich Assessment Statement Content Textarea */}
          <div className="space-y-1.5">
            <label htmlFor="feedback_statement" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
              <FaCommentAlt className="text-slate-400" /> Evaluation Performance Review Statement
            </label>
            <textarea
              id="feedback_statement"
              rows="6"
              placeholder="Elaborate details regarding classroom management, logic delivery, practice sheets availability, or custom instructional reviews..."
              required
              value={tfeedback}
              onChange={(e) => setTFeedback(e.target.value)}
              className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl p-4 focus:outline-none transition-colors shadow-inner resize-none min-h-[140px]"
            ></textarea>
          </div>

          {/* Bottom Call-To-Action Dispatch Control Dashboard Layout Row */}
          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#384D6C] hover:bg-[#2b3b54] text-white font-black text-xs uppercase tracking-widest py-3.5 px-8 rounded-xl border-2 border-slate-950 shadow-xs flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] border-b-4 active:border-b-2"
            >
              <FaPaperPlane className="text-[10px]" /> Dispatch Faculty Assessment
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default TFeedback;