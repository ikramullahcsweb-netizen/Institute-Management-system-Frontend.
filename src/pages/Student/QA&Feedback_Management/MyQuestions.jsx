import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Head from '../Header/Header';
import { FaQuestionCircle, FaCommentDots, FaEdit, FaTrashAlt, FaFolderOpen, FaUserGraduate } from 'react-icons/fa';

function MyQuestions() {
  // Pure Static Pre-loaded Database Simulation Array
  const [questions, setQuestions] = useState([
    { 
      _id: 'q1', 
      question: 'What is the absolute difference between SQL and NoSQL architectural layouts?', 
      answer: 'SQL databases are structured, relational system layers with rigid schemas, while NoSQL platforms like MongoDB are document-based, schemas-free collections suited for dynamic JSON streams.' 
    },
    { 
      _id: 'q2', 
      question: 'How do custom responsive breakpoints handle inline margin calculations in tailwind?', 
      answer: 'They eliminate the requirement for absolute position styling blocks by utility configurations matching flex views across adaptive viewport grids dynamically.' 
    }
  ]);

  // Pure Client-Side Simulation Deletion Channel Handler
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this question item? (Sandbox Simulation)")) {
      setQuestions(questions.filter(question => question._id !== id));
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20 font-sans antialiased">
      {/* Universal Portal Navbar Header */}
      <Head />

      {/* Main Structural Column Frame - Shifted smoothly to handle dashboard layout gaps via padding */}
      <div className="w-full max-w-[1200px] mx-auto px-4 lg:pl-[290px] mt-8 space-y-6">
        
        {/* Step-Up Identity Context Block Header */}
        <div className="border-b-2 border-slate-200 pb-3 flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
              <FaQuestionCircle className="text-[#384D6C]" /> Connect With Your Teachers - My Questions
            </h2>
            <div className="h-1 w-16 bg-[#384D6C] rounded-full" />
          </div>
          
          {/* Mock Dashboard Student ID Indicator Badge */}
          <span className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono font-black text-slate-500 bg-white border border-slate-200 shadow-xs px-3 py-1.5 rounded-xl">
            <FaUserGraduate className="text-[#384D6C]" /> SID: 2026-ACTIVE
          </span>
        </div>

        {/* Dynamic Cards Stack Container */}
        <div className="space-y-4">
          {questions.length > 0 ? (
            questions.map((question, index) => (
              <div 
                key={question._id || index}
                className="bg-white border-2 border-slate-900 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col justify-between gap-5 border-b-4"
              >
                {/* Content Stream Block Wrapper */}
                <div className="space-y-4 w-full">
                  
                  {/* Student Question Node Block */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1">
                      <FaQuestionCircle className="text-slate-400" /> Academic Query Statement
                    </span>
                    <h3 className="text-sm md:text-base font-black text-slate-900 leading-snug">
                      {question.question}
                    </h3>
                  </div>

                  {/* Faculty Verified Response Plate */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-inner">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0C7FDA] flex items-center gap-1 mb-1">
                      <FaCommentDots /> Faculty Verified Answer
                    </span>
                    <p className="text-xs font-bold text-slate-700 leading-relaxed">
                      {question.answer || <span className="text-amber-600 font-medium italic">Pending faculty review attachment pipeline...</span>}
                    </p>
                  </div>

                </div>

                {/* Bottom Interactive Action Control Deck Row */}
                <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-dashed border-slate-200 w-full">
                  
                  {/* Trigger: Edit Component Parameter Route */}
                  <Link 
                    to={`/UpdateQuestion/${question._id}`}
                    className="bg-[#136845] hover:bg-[#0f5236] text-white font-black text-[11px] uppercase tracking-wider py-2.5 px-6 rounded-xl border-2 border-slate-950 shadow-xs flex items-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <FaEdit /> Edit Component
                  </Link>

                  {/* Trigger: Local Filter Deletion Trigger */}
                  <button 
                    onClick={() => handleDelete(question._id)}
                    className="bg-[#4a2032] hover:bg-[#381826] text-white font-black text-[11px] uppercase tracking-wider py-2.5 px-6 rounded-xl border-2 border-slate-950 shadow-xs flex items-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <FaTrashAlt /> Delete Item
                  </button>

                </div>

              </div>
            ))
          ) : (
            /* Matrix Verification Empty Plate Viewport Informant */
            <div className="w-full text-center py-16 bg-white border-2 border-slate-200 border-dashed rounded-2xl text-slate-400 font-bold text-xs uppercase tracking-wider space-y-2">
              <FaFolderOpen className="text-3xl mx-auto opacity-30 text-slate-500" />
              <p>Your custom submitted question array pool is completely empty.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default MyQuestions;