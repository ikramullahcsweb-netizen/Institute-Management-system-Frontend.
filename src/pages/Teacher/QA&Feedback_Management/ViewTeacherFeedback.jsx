import React, { useState } from 'react';
import Head from '../Header/Header';
import { FaCommentAlt } from 'react-icons/fa';

function ViewTeacherFeedback() {
  // Rule ke mutabik UI structure test karne ke liye pure static array dataset mockup
  const [tfeedbacks] = useState([
    {
      grade: "Grade 10",
      subject: "Mathematics",
      teacher: "Prof. Asif Khan",
      feedback: "Excellent performance in the weekly assessment. Your understanding of quadratic functions has significantly improved, keep maintaining this consistency."
    },
    {
      grade: "Grade 10",
      subject: "Mathematics",
      teacher: "Prof. Asif Khan",
      feedback: "Great analytical skills during the live doubt clearing session. Just focus a bit more on step-by-step presentation in geometry proofs."
    }
  ]);

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <Head />

      {/* Main Grid Wrapper with Sidebar Layout Clearance Auto Padding */}
      <div className="w-full max-w-[1200px] mx-auto px-4 pl-4 md:pl-[290px] pr-4 mt-8 transition-all">
        
        {/* Step 2 Light Teal Header Box */}
        <div className="w-full bg-[#C9E8EA] border border-slate-200 rounded-[20px] p-6 mb-8 shadow-xs">
          <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tight">
            We Want to Hear from You - My Feedbacks
          </h1>
          <p className="text-xs text-slate-600 font-bold mt-0.5">
            Review professional evaluation notes and comments from your academic instructors.
          </p>
        </div>

        {/* Core Feedbacks Cards Loop List */}
        <div className="w-full space-y-5">
          {tfeedbacks.length === 0 ? (
            <p className="text-sm font-bold text-slate-400 text-center py-10 bg-white rounded-xl border border-dashed">
              No feedback entries recorded at this time.
            </p>
          ) : (
            tfeedbacks.map((tfeedback, index) => (
              <div 
                key={index} 
                className="w-full bg-white border-2 border-slate-200 p-6 rounded-[22px] shadow-sm flex flex-col md:flex-row gap-5 items-start transition-all hover:border-slate-300"
              >
                {/* Visual Accent Badge Icon */}
                <div className="bg-purple-50 p-3.5 rounded-xl text-[#483EA8] hidden sm:inline-block">
                  <FaCommentAlt className="text-lg" />
                </div>

                {/* Feedback Data Fields Structure */}
                <div className="flex-1 space-y-4 w-full">
                  
                  {/* Metadata Row tags: Grade, Subject & Instructor */}
                  <div className="flex flex-wrap items-center gap-2.5 border-b border-slate-100 pb-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Subject</span>
                      <span className="text-xs font-black text-[#483EA8] uppercase">{tfeedback.subject}</span>
                    </div>
                    <div className="h-6 w-[1px] bg-slate-200 mx-2 hidden sm:block"></div>
                    
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Grade</span>
                      <span className="text-xs font-bold text-slate-700">{tfeedback.grade}</span>
                    </div>
                    <div className="h-6 w-[1px] bg-slate-200 mx-2 hidden sm:block"></div>

                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Instructor</span>
                      <span className="text-xs font-bold text-slate-700">{tfeedback.teacher}</span>
                    </div>
                  </div>

                  {/* Main Text Area Evaluation Comment Box */}
                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-wider block">
                      Feedback Message
                    </label>
                    <p className="text-[15px] font-medium text-slate-700 bg-slate-50 border p-4 rounded-xl leading-relaxed">
                      "{tfeedback.feedback}"
                    </p>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default ViewTeacherFeedback;