import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Head from '../Header/Header';
import { FaUserTie, FaUserGraduate, FaBookOpen, FaGraduationCap, FaCommentAlt, FaPaperPlane, FaEdit } from 'react-icons/fa';

function UpdateTeacherF() {
  const { id } = useParams();
  const navigator = useNavigate();

  // Pure Static Sandbox Model State Pools
  const [grade, setGrade] = useState('Grade 10');
  const [subject, setSubject] = useState('Computer Science');
  const [teacher, setTeacher] = useState('Miss Fatima');
  const [sid, setSid] = useState('SD001');
  const [tfeedback, setTFeedback] = useState('The theoretical logic presentation streams are extremely comprehensive and clear.');

  // Pre-populated Faculty Stream Records 
  const [teacherid] = useState([
    { name: 'Sir Imran', subject: 'Mathematics' },
    { name: 'Miss Fatima', subject: 'Computer Science' },
    { name: 'Dr. Arsalan', subject: 'Physics' },
    { name: 'Prof. Naeem', subject: 'Chemistry' }
  ]);

  // Simulation: Pre-loading historical record context parameters
  useEffect(() => {
    console.log(`Sandbox: Querying target instructor report reference token match for ID: ${id}`);
    setGrade('Grade 10 (Advanced Level)');
  }, [id]);

  // Handle Auto Subject Switch Mapping based on Teacher Dropdown Interaction
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

  // Local Storage Pipeline Console Log Simulation
  const handleFakeUpdateSubmission = () => {
    console.log("Mocking Teacher Feedback Update Log mutation dispatched:", {
      id,
      grade,
      subject,
      teacher,
      sid,
      feedback: tfeedback
    });
  };

  const executeToastSequenceUpdateTeacher = () => {
    toast.loading('Synchronizing faculty evaluation archives...', {
      id: 'updating_teacher_loader',
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
      toast.dismiss('updating_teacher_loader');
      
      toast.success('Instructor Evaluation Overwritten!', {
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
        navigator('/MyFeedbacks');
      }, 2200);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Confirm Evaluation Changes?",
      text: "Are you sure you want to rewrite the performance log parameters for this instructor?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#384D6C",
      cancelButtonColor: "#4a2032",
      confirmButtonText: "Yes, modify entry",
      cancelButtonText: "Cancel",
      background: '#FFFFFF',
      customClass: {
        title: 'text-sm font-black uppercase text-slate-800 tracking-tight',
        popup: 'rounded-2xl border-2 border-slate-900',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        handleFakeUpdateSubmission();
        Swal.fire({
          title: "Changes Committed",
          text: "Local state evaluation arrays synchronized safely.",
          icon: "success",
          confirmButtonColor: "#384D6C"
        });
        executeToastSequenceUpdateTeacher();
      } else {
        Swal.fire({
          title: "Aborted",
          text: "Log modification parameters discarded.",
          icon: "error",
          confirmButtonColor: "#384D6C"
        });
      }
    });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20 font-sans antialiased">
      {/* Live System Alerts Dispatch Center Wrapper */}
      <Toaster position="top-right" reverseOrder={false} />
      
      {/* Universal Portal Navbar Header */}
      <Head />

      {/* Main Structural Layout Content Wrapper - Padding configured for dashboard layout consistency */}
      <div className="w-full max-w-[1100px] mx-auto px-4 lg:pl-[290px] mt-8 space-y-6">
        
        {/* Module Title Deck Segment Section */}
        <div className="border-b-2 border-slate-200 pb-3">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2.5">
            <FaEdit className="text-[#384D6C]" /> We Want to Hear from You - Update Teacher Feedback
          </h2>
          <div className="h-1 w-16 bg-[#384D6C] rounded-full mt-1.5" />
        </div>

        {/* Dynamic Modifiable Input Card Form */}
        <form 
          onSubmit={handleSubmit}
          className="bg-white border-2 border-slate-900 rounded-2xl p-6 md:p-8 shadow-sm max-w-3xl space-y-5"
        >
          {/* Dual Column Parameters Layout Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Field Parameter: Student Verified ID */}
            <div className="space-y-1.5">
              <label htmlFor="t_update_sid" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaUserGraduate className="text-slate-400" /> Student Verification ID
              </label>
              <input 
                id="t_update_sid"
                type="text" 
                pattern="^SD\d{3}$" 
                title="Please match format 'SD001'" 
                value={sid} 
                readOnly
                className="w-full bg-slate-100 border-2 border-slate-200 text-slate-500 font-bold text-xs rounded-xl px-4 py-3 cursor-not-allowed focus:outline-none"
              />
            </div>

            {/* Field Parameter: Academic Grade Information Dropdown View */}
            <div className="space-y-1.5">
              <label htmlFor="t_update_grade" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaGraduationCap className="text-slate-400" /> Assigned Student Grade
              </label>
              <input 
                id="t_update_grade" 
                type="text" 
                value={grade} 
                readOnly
                className="w-full bg-slate-100 border-2 border-slate-200 text-slate-500 font-bold text-xs rounded-xl px-4 py-3 cursor-not-allowed focus:outline-none"
              />
            </div>

            {/* Field Parameter: Target Instructor Modification Dropdown */}
            <div className="space-y-1.5">
              <label htmlFor="t_update_faculty" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaUserTie className="text-[#384D6C]" /> Target Faculty Instructor
              </label>
              <select 
                id="t_update_faculty" 
                value={teacher}
                required 
                onChange={(e) => setTeacher(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="">-- Select Instructor --</option>
                {teacherid.map((inst, index) => (
                  <option key={index} value={inst.name}>{inst.name}</option>
                ))}
              </select>
            </div>

            {/* Field Parameter: Auto Synchronized Department Subject Course Field */}
            <div className="space-y-1.5">
              <label htmlFor="t_update_subject" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaBookOpen className="text-slate-400" /> Core Department Course
              </label>
              <input 
                id="t_update_subject" 
                type="text" 
                value={subject} 
                placeholder="Select instructor to populate subject stream..."
                readOnly
                className="w-full bg-slate-100 border-2 border-slate-200 text-slate-500 font-bold text-xs rounded-xl px-4 py-3 cursor-not-allowed focus:outline-none italic"
              />
            </div>

          </div>

          {/* Field Parameter: Large Review Textarea Input Frame */}
          <div className="space-y-1.5">
            <label htmlFor="t_update_feedback_statement" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
              <FaCommentAlt className="text-slate-400" /> Modified Performance Assessment Statement
            </label>
            <textarea
              id="t_update_feedback_statement"
              rows="6"
              placeholder="Elaborate details regarding modifications to instructional styles, pacing, content delivery methods..."
              required
              value={tfeedback}
              onChange={(e) => setTFeedback(e.target.value)}
              className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl p-4 focus:outline-none transition-colors shadow-inner resize-none min-h-[140px]"
            ></textarea>
          </div>

          {/* Form Action Buttons Layout Segment Control Deck Row */}
          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#384D6C] hover:bg-[#2b3b54] text-white font-black text-xs uppercase tracking-widest py-3.5 px-8 rounded-xl border-2 border-slate-950 shadow-xs flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] border-b-4 active:border-b-2"
            >
              <FaPaperPlane className="text-[10px]" /> Update & Broadcast Assessment
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default UpdateTeacherF;