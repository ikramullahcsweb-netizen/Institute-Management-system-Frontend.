import React from 'react';
import { FaGraduationCap, FaBook, FaUserTie, FaIdCard, FaQuestionCircle, FaPaperPlane } from 'react-icons/fa';

function AddQuestionForm() {
  return (
    <div className="w-full bg-slate-50 min-h-screen py-10 px-4 font-sans antialiased">
      <div className="w-full max-w-2xl mx-auto space-y-6">
        
        {/* Step-Up Branded Module Headline Plate */}
        <div className="border-b-2 border-slate-200 pb-3">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
            <FaQuestionCircle className="text-[#384D6C]" /> Connect With Teachers
          </h2>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-0.5">
            Submit your specific academic queries to the portal
          </p>
        </div>

        {/* Master Controlled Content Data Sheet Container */}
        <div className="bg-white border-2 border-slate-900 rounded-2xl p-6 md:p-8 shadow-sm">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* Input Selection Block Layer: Select Grade */}
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaGraduationCap className="text-slate-400 text-sm" /> Academic Grade
              </label>
              <div className="relative">
                <select className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none transition-colors appearance-none cursor-pointer">
                  <option value="">Select Enrolled Grade Target</option>
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            {/* Input Selection Block Layer: Select Subject */}
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaBook className="text-slate-400 text-xs" /> Subject Module
              </label>
              <div className="relative">
                <select className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none transition-colors appearance-none cursor-pointer">
                  <option value="">Select Subject Parameter</option>
                  <option value="math">Mathematics Matrix</option>
                  <option value="cs">Computer Science Architecture</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            {/* Input Selection Block Layer: Select Teacher */}
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                <FaUserTie className="text-slate-400 text-xs" /> Designated Instructor
              </label>
              <div className="relative">
                <select className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none transition-colors appearance-none cursor-pointer">
                  <option value="">Select Target Faculty Member</option>
                  <option value="t1">Sir Imran Dev Node</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            {/* Input Selection Block Layer: Student Identity Key Code */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-dashed border-slate-200">
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                  <FaIdCard className="text-slate-400 text-xs" /> Verified Student ID
                </label>
                <input 
                  type="text" 
                  value="SID-2026-MOCK" 
                  className="w-full bg-slate-100 border-2 border-slate-200 text-[#0C7FDA] font-mono font-black text-xs rounded-xl px-4 py-3.5 cursor-not-allowed select-none shadow-inner"
                  readOnly 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                  <FaQuestionCircle className="text-slate-400 text-xs" /> Question Topic Key
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Core Array Traversal" 
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none transition-colors placeholder:text-slate-400 placeholder:font-medium"
                />
              </div>
            </div>

            {/* Action Panel Framework Buttons Row Layout */}
            <div className="flex justify-end pt-4 border-t-2 border-slate-100">
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-[#384D6C] hover:bg-[#2e3e56] text-white text-xs font-black uppercase tracking-widest px-8 py-4 rounded-xl border-2 border-slate-950 flex items-center justify-center gap-2 transition-transform active:scale-[0.99] shadow-md"
              >
                <FaPaperPlane className="text-xs" /> Submit Question Node
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default AddQuestionForm;