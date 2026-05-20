import React from 'react';
import { Link } from 'react-router-dom';
import Head from '../Header/Header';
import { FaQuestionCircle, FaPlusCircle, FaHistory, FaComments } from 'react-icons/fa';

function Question() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans antialiased">
      {/* Universal Portal Navbar Header */}
      <Head />

      {/* Main Structural Layout Desk Container - Handled sidebar space layout using left padding */}
      <div className="w-full max-w-[1100px] mx-auto px-4 lg:pl-[290px] mt-10 space-y-8">
        
        {/* Module Header Node Plate */}
        <div className="border-b-2 border-slate-200 pb-4">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2.5">
            <FaComments className="text-[#384D6C]" /> Connect With Your Teachers
          </h2>
          <div className="h-1.5 w-20 bg-[#384D6C] rounded-full mt-1.5" />
        </div>

        {/* Welcome Informational Box Card Layer */}
        <div className="bg-white border-2 border-slate-900 rounded-2xl p-6 md:p-8 shadow-sm max-w-4xl">
          <p className="text-sm md:text-base font-medium text-slate-700 leading-relaxed">
            Welcome to Q & A section! We understand the importance of fostering open communication 
            between students and teachers to enhance the learning experience. This platform serves 
            as a direct channel for you to connect with your educators. Our teachers are dedicated to 
            supporting your academic journey, and we encourage you to take advantage of this opportunity 
            to engage with them directly. Effective communication is key to your success.
          </p>
        </div>

        {/* Q&A Navigation Channels Grid (3 Option Deck Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl">
          
          {/* Action Card Channel 1: Add Question */}
          <Link 
            to="/AddQuestion" 
            className="group flex flex-col items-center justify-center text-center p-6 bg-white border-2 border-slate-900 rounded-2xl shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] border-b-4 active:border-b-2"
          >
            <div className="w-12 h-12 bg-[#EFF2F4] border border-slate-300 text-[#384D6C] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:bg-[#384D6C] group-hover:text-white transition-colors duration-200">
              <FaPlusCircle />
            </div>
            <span className="text-sm font-black uppercase tracking-wider text-slate-900">
              Add Questions
            </span>
            <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">
              Ask a new doubt to faculty
            </p>
          </Link>

          {/* Action Card Channel 2: My Questions */}
          <Link 
            to="/MyQuestions" 
            className="group flex flex-col items-center justify-center text-center p-6 bg-white border-2 border-slate-900 rounded-2xl shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] border-b-4 active:border-b-2"
          >
            <div className="w-12 h-12 bg-[#EFF2F4] border border-slate-300 text-[#384D6C] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:bg-[#384D6C] group-hover:text-white transition-colors duration-200">
              <FaHistory />
            </div>
            <span className="text-sm font-black uppercase tracking-wider text-slate-900">
              My Questions
            </span>
            <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">
              Track your pending/resolved logs
            </p>
          </Link>

          {/* Action Card Channel 3: FAQs Board */}
          <Link 
            to="/FAskedQ" 
            className="group flex flex-col items-center justify-center text-center p-6 bg-white border-2 border-slate-900 rounded-2xl shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] border-b-4 active:border-b-2 sm:col-span-2 lg:col-span-1"
          >
            <div className="w-12 h-12 bg-[#EFF2F4] border border-slate-300 text-[#384D6C] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:bg-[#384D6C] group-hover:text-white transition-colors duration-200">
              <FaQuestionCircle />
            </div>
            <span className="text-sm font-black uppercase tracking-wider text-slate-900">
              FAQs Board
            </span>
            <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">
              Browse common public queries
            </p>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Question;