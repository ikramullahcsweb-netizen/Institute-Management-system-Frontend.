import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Head from '../Header/Header';
import { FaCogs, FaGraduationCap, FaCalendarAlt, FaPaperPlane } from 'react-icons/fa';

function UpdateSFeedback() {
  const { id } = useParams();
  const navigator = useNavigate();

  // Pure Static Sandbox Mock States for Pre-loading Data Parameters
  const [grade, setGrade] = useState('Grade 10');
  const [sfeedbacks, setSFeedbacks] = useState('The portal performance drops during high traffic quiz submission loops.');
  const [date, setDate] = useState('2026-05-20');

  // Simulation API Profile Fetch Event Hooks
  useEffect(() => {
    console.log(`Sandbox Pipeline: Simulating retrieval logic for Service Feedback Item ID Token: ${id}`);
    setGrade('Grade 10 (Advanced Node)');
  }, [id]);

  // Frontend Payload Console Logger Trigger 
  const executeFakeUpdatePayload = () => {
    console.log("Mocking Update Payload mutation stream dispatched:", {
      id,
      grade,
      feedback: sfeedbacks,
      date
    });
  };

  const executeToastSequenceSFeedback = () => {
    toast.loading('Overwriting system parameter archives...', {
      id: 'updating_sfeedback_loader',
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
      toast.dismiss('updating_sfeedback_loader');
      
      toast.success('Service Feedback Updated!', {
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
        // Navigates securely back to the standard profile repository overview page
        navigator('/MyFeedbacks');
      }, 2200);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Modify Service Record?",
      text: "Are you sure you want to alter the contents of this system feedback entry?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#384D6C",
      cancelButtonColor: "#4a2032",
      confirmButtonText: "Yes, overwrite log",
      cancelButtonText: "Cancel",
      background: '#FFFFFF',
      customClass: {
        title: 'text-sm font-black uppercase text-slate-800 tracking-tight',
        popup: 'rounded-2xl border-2 border-slate-900',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        executeFakeUpdatePayload();
        Swal.fire({
          title: "Update Processed",
          text: "Local framework storage array has updated successfully.",
          icon: "success",
          confirmButtonColor: "#384D6C"
        });
        executeToastSequenceSFeedback();
      } else {
        Swal.fire({
          title: "Cancelled",
          text: "Log synchronization dropped by user query.",
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

      {/* Main Structural Layout Content Wrapper - Left padding spacing reserved for dashboard consistency */}
      <div className="w-full max-w-[1100px] mx-auto px-4 lg:pl-[290px] mt-8 space-y-6">
        
        {/* Module Section Main Heading Node Banner */}
        <div className="border-b-2 border-slate-200 pb-3">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2.5">
            <FaCogs className="text-[#384D6C]" /> We Want to Hear from You - Update Service Feedback
          </h2>
          <div className="h-1 w-16 bg-[#384D6C] rounded-full mt-1.5" />
        </div>

        {/* Update Form Card Frame Component */}
        <form 
          onSubmit={handleSubmit}
          className="bg-white border-2 border-slate-900 rounded-2xl p-6 md:p-8 shadow-sm max-w-3xl space-y-5"
        >
          {/* Field Block: Current Student Grade Information Node */}
          <div className="space-y-1.5">
            <label htmlFor="s_update_grade" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
              <FaGraduationCap className="text-slate-400" /> Allocated Profile Academic Grade
            </label>
            <input 
              id="s_update_grade"
              type="text" 
              value={grade} 
              readOnly
              className="w-full bg-slate-100 border-2 border-slate-200 text-slate-500 font-bold text-xs rounded-xl px-4 py-3 cursor-not-allowed focus:outline-none"
            />
          </div>

          {/* Field Block: Rich Textarea Content Feedback Statement Input Box */}
          <div className="space-y-1.5">
            <label htmlFor="s_update_text" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
              <FaCogs className="text-slate-400" /> Describe Platform Experience / Utility Issue
            </label>
            <textarea
              id="s_update_text"
              rows="6"
              placeholder="Provide clean explicit diagnostic descriptions regarding site utilities, latency parameters or styling breakdowns..."
              required
              value={sfeedbacks}
              onChange={(e) => setSFeedbacks(e.target.value)}
              className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl p-4 focus:outline-none transition-colors shadow-inner resize-none min-h-[140px]"
            ></textarea>
          </div>

          {/* Field Block: Log Insertion Entry Submission Timestamp Date Input */}
          <div className="space-y-1.5">
            <label htmlFor="s_update_date" className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
              <FaCalendarAlt className="text-slate-400" /> Original Entry Registration Date
            </label>
            <input 
              id="s_update_date"
              type="date"
              value={date} 
              onChange={(e) => setDate(e.target.value)}
              className="w-full max-w-xs bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3 focus:outline-none transition-colors"
            />
          </div>

          {/* Bottom Interactive Dashboard Dispatch Controls Row Layout */}
          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#384D6C] hover:bg-[#2b3b54] text-white font-black text-xs uppercase tracking-widest py-3.5 px-8 rounded-xl border-2 border-slate-950 shadow-xs flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] border-b-4 active:border-b-2"
            >
              <FaPaperPlane className="text-[10px]" /> Save & Update System Entry
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default UpdateSFeedback;