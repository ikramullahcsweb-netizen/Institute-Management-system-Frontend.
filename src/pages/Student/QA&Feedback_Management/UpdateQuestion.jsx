import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Head from '../Header/Header';
import { FaEdit, FaUserGraduate, FaUserTie, FaBook, FaQuestionCircle, FaPaperPlane } from 'react-icons/fa';

function UpdateQuestion() {
  const { id } = useParams();
  const navigator = useNavigate();

  // Static Local Data Hook Managers
  const [grade, setGrade] = useState('Grade 10');
  const [subject, setSubject] = useState('Computer Science');
  const [teacher, setTeacher] = useState('Miss Fatima');
  const [sid, setSid] = useState('SD001');
  const [question, setQuestion] = useState('What is the absolute difference between SQL and NoSQL architectural layouts?');

  // Static Pre-populated Teachers List Mapping Stream
  const [teacherid] = useState([
    { name: 'Sir Imran', subject: 'Mathematics' },
    { name: 'Miss Fatima', subject: 'Computer Science' },
    { name: 'Dr. Arsalan', subject: 'Physics' },
    { name: 'Prof. Naeem', subject: 'Chemistry' }
  ]);

  // Simulation: Pre-loading existing data based on parameter ID
  useEffect(() => {
    console.log(`Sandbox: Simulating data lookup pipeline for Question ID: ${id}`);
    // Simulated load from local state mockup data pool
    setGrade('Grade 10 (Advanced)');
    setSid('SD2026');
  }, [id]);

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

  // Sandbox Post Submission Logger Action Pipeline
  const handleFakeUpdateLog = () => {
    console.log("Mocking Update Action Payload:", {
      id,
      grade,
      subject,
      teacher,
      sid,
      question
    });
  };

  const executeToastSequenceUpdate = () => {
    toast.loading('Processing record modifications...', {
      id: 'updating_question_loader',
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
      toast.dismiss('updating_question_loader');
      
      toast.success('Question Updated Successfully!', {
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
        navigator('/MyQuestions');
      }, 2200);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Update Academic Question?",
      text: "Are you sure you want to save modifications to this record log?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#384D6C",
      cancelButtonColor: "#4a2032",
      confirmButtonText: "Yes, save changes",
      cancelButtonText: "Cancel",
      background: '#FFFFFF',
      customClass: {
        title: 'text-sm font-black uppercase text-slate-800 tracking-tight',
        popup: 'rounded-2xl border-2 border-slate-900',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        handleFakeUpdateLog();
        Swal.fire({
          title: "Modifications Saved",
          text: "Virtual sandbox data pipeline has integrated updates.",
          icon: "success",
          confirmButtonColor: "#384D6C"
        });
        executeToastSequenceUpdate();
      } else {
        Swal.fire({
          title: "Update Aborted",
          text: "Previous properties preserved without mutations.",
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

      {/* Main Structural Wrapper Container - Left sidebar padding offset integrated */}
      <div className="w-full max-w-[1100px] mx-auto px-4 lg:pl-[290px] mt-8 space-y-6">
        
        {/* Module Title Deck Segment */}
        <div className="border-b-2 border-slate-200 pb-3">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2.5">
            <FaEdit className="text-[#384D6C]" /> Connect With Your Teachers - Update Your Question
          </h2>
          <div className="h-1 w-16 bg-[#384D6C] rounded-full mt-1.5" />
        </div>

        {/* Update Form Layout Frame Box */}
        <form 
          onSubmit={handleSubmit}
          className="bg-white border-2 border-slate-900 rounded-2xl p-6 md:p-8 shadow-sm max-w-3xl space-y-5"
        >
          {/* Dual Column Parameters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Field: Student ID Code Token */}
            <div className="space-y-1.5">
              <label htmlFor="update_sid" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaUserGraduate className="text-slate-400" /> Student Verification ID
              </label>
              <input 
                id="update_sid"
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
              <label htmlFor="update_grade" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaUserGraduate className="text-slate-400" /> Assigned Academic Grade
              </label>
              <input 
                id="update_grade" 
                type="text" 
                value={grade} 
                readOnly
                className="w-full bg-slate-100 border-2 border-slate-200 text-slate-500 font-bold text-xs rounded-xl px-4 py-3 cursor-not-allowed focus:outline-none"
              />
            </div>

            {/* Field: Select Target Faculty Member Dropdown Option */}
            <div className="space-y-1.5">
              <label htmlFor="update_teacher" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaUserTie className="text-[#384D6C]" /> Target Faculty Instructor
              </label>
              <select 
                id="update_teacher" 
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
              <label htmlFor="update_subject" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaBook className="text-slate-400" /> Core Department Course
              </label>
              <input 
                id="update_subject" 
                type="text" 
                value={subject} 
                placeholder="Select teacher to auto-load course..."
                readOnly
                className="w-full bg-slate-100 border-2 border-slate-200 text-slate-500 font-bold text-xs rounded-xl px-4 py-3 cursor-not-allowed focus:outline-none italic"
              />
            </div>

          </div>

          {/* Field: Custom Textarea Question Statement */}
          <div className="space-y-1.5">
            <label htmlFor="update_question_text" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
              <FaQuestionCircle className="text-slate-400" /> Detailed Question Statement
            </label>
            <textarea
              id="update_question_text"
              rows="6"
              placeholder="Type your revised core doubt concept here..."
              required
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl p-4 focus:outline-none transition-colors shadow-inner resize-none min-h-[140px]"
            ></textarea>
          </div>

          {/* Bottom Call-To-Action Dispatch Control Layout Row */}
          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#384D6C] hover:bg-[#2b3b54] text-white font-black text-xs uppercase tracking-widest py-3.5 px-8 rounded-xl border-2 border-slate-950 shadow-xs flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] border-b-4 active:border-b-2"
            >
              <FaPaperPlane className="text-[10px]" /> Save & Broadcast Modifications
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default UpdateQuestion;