import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Head from '../Header/Header';
import { FaCogs, FaUserGraduate, FaCalendarAlt, FaPaperPlane } from 'react-icons/fa';

function SFeedback() {
  // Static Local Data Hook Managers
  const [sid, setSid] = useState('STU-99210');
  const [grade, setGrade] = useState('Grade 10');
  const [sfeedback, setSFeedback] = useState('');
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const navigator = useNavigate();

  // Sandbox Profile Loading Simulation on Mount
  useEffect(() => {
    // React hook logic maintains state value inputs safely
    setSid('STU-2026-MERN');
    setGrade('Grade 10 (Advanced)');
  }, []);

  // Sandbox Post Submission Logger Action Pipeline
  const submitFakeRequest = () => {
    console.log("Mock Submission Payload attached successfully:", {
      sid,
      grade,
      feedback: sfeedback,
      date
    });
  };

  const handleToastAlertSequence = () => {
    toast.loading('Processing submission pipeline...', {
      id: 'submitting_loader',
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
      toast.dismiss('submitting_loader');
      
      toast.success('Service Feedback Logged!', {
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

  const handleSubmit = (event) => {
    event.preventDefault();

    Swal.fire({
      title: "Submit Service Entry?",
      text: "Are you sure you want to log this parameter record?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#384D6C",
      cancelButtonColor: "#4a2032",
      confirmButtonText: "Yes, submit log",
      cancelButtonText: "Cancel",
      background: '#FFFFFF',
      customClass: {
        title: 'text-sm font-black uppercase text-slate-800 tracking-tight',
        popup: 'rounded-2xl border-2 border-slate-900',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        submitFakeRequest();
        Swal.fire({
          title: "Feedback Saved",
          text: "Sandbox state mutation sequence processed.",
          icon: "success",
          confirmButtonColor: "#384D6C"
        });
        handleToastAlertSequence();
      } else {
        Swal.fire({
          title: "Cancelled",
          text: "Log state generation suspended.",
          icon: "error",
          confirmButtonColor: "#384D6C"
        });
      }
    });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20 font-sans antialiased">
      {/* Dynamic Native System Alerts Wrapper */}
      <Toaster position="top-right" reverseOrder={false} />
      
      {/* Universal Portal Navbar Header */}
      <Head />

      {/* Main Structural Wrapper Container - Handled layout spacing offset via padding */}
      <div className="w-full max-w-[1100px] mx-auto px-4 lg:pl-[290px] mt-8 space-y-6">
        
        {/* Module Main Heading Block */}
        <div className="border-b-2 border-slate-200 pb-3">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2.5">
            <FaCogs className="text-[#384D6C]" /> We Want to Hear from You - Service Feedback
          </h2>
          <div className="h-1 w-16 bg-[#384D6C] rounded-full mt-1.5" />
        </div>

        {/* Input Form Frame Deck */}
        <form 
          onSubmit={handleSubmit}
          className="bg-white border-2 border-slate-900 rounded-2xl p-6 md:p-8 shadow-sm max-w-3xl space-y-5"
        >
          {/* Row Layout: Student ID & Grade Grid View */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Input Segment: Student ID Tracker Box */}
            <div className="space-y-1.5">
              <label htmlFor="sid_view" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaUserGraduate className="text-slate-400" /> Student Profile Token
              </label>
              <input
                id="sid_view" 
                type="text" 
                value={sid} 
                readOnly
                className="w-full bg-slate-100 border-2 border-slate-200 text-slate-500 font-bold text-xs rounded-xl px-4 py-3 cursor-not-allowed focus:outline-none select-none"
              />
            </div>

            {/* Input Segment: Current Academic Grade Box */}
            <div className="space-y-1.5">
              <label htmlFor="grade_view" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaUserGraduate className="text-slate-400" /> Allocated Grade Tier
              </label>
              <input
                id="grade_view" 
                type="text" 
                value={grade} 
                readOnly
                className="w-full bg-slate-100 border-2 border-slate-200 text-slate-500 font-bold text-xs rounded-xl px-4 py-3 cursor-not-allowed focus:outline-none select-none"
              />
            </div>

          </div>

          {/* Input Segment: Textarea Feedback Module Box */}
          <div className="space-y-1.5">
            <label htmlFor="feedback_entry" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
              <FaCogs className="text-slate-400" /> Elaborate System / Utility Feedback
            </label>
            <textarea
              id="feedback_entry"
              rows="5"
              placeholder="Describe platform experience, system responses, lab issues, or administration utilities bugs..."
              value={sfeedback}
              onChange={(e) => setSFeedback(e.target.value)}
              required
              className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl p-4 focus:outline-none transition-colors shadow-inner resize-none min-h-[120px]"
            ></textarea>
          </div>

          {/* Input Segment: Current Date Timestamp Box */}
          <div className="space-y-1.5">
            <label htmlFor="date_view" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
              <FaCalendarAlt className="text-slate-400" /> Entry Submission Date
            </label>
            <input
              id="date_view"
              type="date"
              value={date}
              readOnly
              className="w-full bg-slate-100 border-2 border-slate-200 text-slate-500 font-bold text-xs rounded-xl px-4 py-3 cursor-not-allowed focus:outline-none select-none w-full sm:w-1/2"
            />
          </div>

          {/* Bottom Action Submit Deck Button Row */}
          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#384D6C] hover:bg-[#2b3b54] text-white font-black text-xs uppercase tracking-widest py-3.5 px-8 rounded-xl border-2 border-slate-950 shadow-xs flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] border-b-4 active:border-b-2"
            >
              <FaPaperPlane className="text-[11px]" /> Dispatch Feedback Log
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default SFeedback;