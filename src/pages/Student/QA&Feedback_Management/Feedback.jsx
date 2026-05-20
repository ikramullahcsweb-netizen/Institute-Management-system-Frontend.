import React from 'react';
import { Link } from 'react-router-dom';
import Head from '../Header/Header';
import { FaCommentMedical, FaHistory, FaComments } from 'react-icons/fa';

function Feedback() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans antialiased">
      {/* Universal Portal Navbar Header */}
      <Head />

      {/* Main Container Wrapper: Left layout sidebar gap configured smoothly via padding */}
      <div className="w-full max-w-[1100px] mx-auto px-4 lg:pl-[290px] mt-10 space-y-8">
        
        {/* Module Header Node Plate */}
        <div className="border-b-2 border-slate-200 pb-4">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2.5">
            <FaComments className="text-[#384D6C]" /> We Want to Hear from You
          </h2>
          <div className="h-1.5 w-20 bg-[#384D6C] rounded-full mt-1.5" />
        </div>

        {/* Informational Welcome Deck Grid */}
        <div className="bg-white border-2 border-slate-900 rounded-2xl p-6 md:p-8 shadow-sm max-w-3xl">
          <p className="text-sm md:text-base font-medium text-slate-700 leading-relaxed">
            Welcome to our feedback page! Your opinion matters to us, and we greatly appreciate you 
            taking the time to share your thoughts, academic requirements, and experiences to fine-tune the system.
          </p>
        </div>

        {/* Action Panel Framework Row/Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          
          {/* Action Trigger Node 1: Add Your Feedback */}
          <Link 
            to="/FeedbackType" 
            className="group flex flex-col items-center justify-center text-center p-6 bg-white border-2 border-slate-900 rounded-2xl shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] border-b-4 active:border-b-2"
          >
            <div className="w-12 h-12 bg-[#EFF2F4] border border-slate-300 text-[#384D6C] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:bg-[#384D6C] group-hover:text-white transition-colors duration-200">
              <FaCommentMedical />
            </div>
            <span className="text-sm font-black uppercase tracking-wider text-slate-900">
              Add Your Feedback
            </span>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-normal mt-1">
              Submit fresh experience parameters
            </p>
          </Link>

          {/* Action Trigger Node 2: My Feedbacks Tracker */}
          <Link 
            to="/MyFeedbacks" 
            className="group flex flex-col items-center justify-center text-center p-6 bg-white border-2 border-slate-900 rounded-2xl shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] border-b-4 active:border-b-2"
          >
            <div className="w-12 h-12 bg-[#EFF2F4] border border-slate-300 text-[#384D6C] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:bg-[#384D6C] group-hover:text-white transition-colors duration-200">
              <FaHistory />
            </div>
            <span className="text-sm font-black uppercase tracking-wider text-slate-900">
              My Feedbacks Log
            </span>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-normal mt-1">
              Track previously submitted entries
            </p>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Feedback;