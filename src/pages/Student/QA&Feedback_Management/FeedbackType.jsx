import React from 'react';
import { Link } from 'react-router-dom';
import Head from '../Header/Header';
import { FaUserTie, FaChalkboardTeacher, FaCogs, FaArrowLeft } from 'react-icons/fa';

function FeedbackType() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans antialiased">
      {/* Universal Portal Navbar Header */}
      <Head />

      {/* Main Layout Desk: Configured with standard left dashboard alignment spacing gap */}
      <div className="w-full max-w-[1100px] mx-auto px-4 lg:pl-[290px] mt-8 space-y-6">
        
        {/* Navigation Breadcrumb Link Back */}
        <div className="flex items-center gap-2">
          <Link 
            to="/Feedback" 
            className="flex items-center gap-1.5 text-xs font-black uppercase text-slate-500 hover:text-slate-900 transition-colors tracking-wider"
          >
            <FaArrowLeft /> Back to Feedback Desk
          </Link>
        </div>

        {/* Module Main Headline Block */}
        <div className="border-b-2 border-slate-200 pb-3">
          <h2 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
            <FaChalkboardTeacher className="text-[#384D6C]" /> We Want to Hear from You - Add Your Feedbacks
          </h2>
          <div className="h-1 w-16 bg-[#384D6C] rounded-full mt-1" />
        </div>

        {/* Secondary Selection Segment Header */}
        <div className="pt-2">
          <h3 className="text-sm font-black uppercase tracking-wider text-slate-500">
            Pick Feedback Type Category
          </h3>
        </div>

        {/* Categories Selection Deck Grid System Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          
          {/* Option Action Card: Teacher Feedback Selection Channel */}
          <Link 
            to="/TFeedback" 
            className="group flex flex-col items-center justify-center text-center p-8 bg-white border-2 border-slate-900 rounded-2xl shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] border-b-4 active:border-b-2"
          >
            <div className="w-14 h-14 bg-[#EFF2F4] border border-slate-300 text-[#384D6C] rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-[#384D6C] group-hover:text-white transition-colors duration-200">
              <FaUserTie />
            </div>
            <span className="text-base font-black uppercase tracking-widest text-slate-900">
              Teacher Feedback
            </span>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-normal mt-1 max-w-[200px]">
              Evaluate faculty structures and class delivery systems
            </p>
          </Link>

          {/* Option Action Card: Service Feedback Selection Channel */}
          <Link 
            to="/SFeedback" 
            className="group flex flex-col items-center justify-center text-center p-8 bg-white border-2 border-slate-900 rounded-2xl shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] border-b-4 active:border-b-2"
          >
            <div className="w-14 h-14 bg-[#EFF2F4] border border-slate-300 text-[#384D6C] rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-[#384D6C] group-hover:text-white transition-colors duration-200">
              <FaCogs />
            </div>
            <span className="text-base font-black uppercase tracking-widest text-slate-900">
              Service Feedback
            </span>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-normal mt-1 max-w-[200px]">
              Rate portal utilities, labs, or administrative modules
            </p>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default FeedbackType;