import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Head from '../Header/Header';

function ReplyF() {
  const navigator = useNavigate();
  const [reply, setReply] = useState("");

  // Static mock data simulating a student feedback message block
  const [feedbacks] = useState({
    sid: "STD-2094",
    feedback: "The laboratory computer configurations need an update. The current processors are running extremely slow during development builds."
  });

  const replyS = (event) => {
    event.preventDefault();
    console.log('Answer updated locally:', reply);
    // Navigating back to management dashboard simulation
    navigator('/managerfeedback');
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      <Head />

      <div className="w-full max-w-[800px] mx-auto px-4 mt-8">
        {/* Title Heading Area */}
        <div className="border-b-2 border-gray-200 pb-4 mb-8 text-center sm:text-left">
          <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
            We Want to Hear from You
          </h1>
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">
            Service Feedbacks & Resolution Engine
          </p>
        </div>

        {/* Dynamic Interactive Card Box */}
        <div className="bg-white border-2 border-slate-200 rounded-[20px] shadow-sm p-6 sm:p-8">
          <form onSubmit={replyS} className="space-y-6">
            
            {/* Student Identity Block */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black text-gray-600 uppercase tracking-wider">
                Student ID
              </label>
              <div className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-[#13293d]">
                {feedbacks.sid}
              </div>
            </div>

            {/* Feedback Content Input View */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black text-gray-600 uppercase tracking-wider">
                Feedback Message
              </label>
              <div className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-4 text-sm text-gray-700 leading-relaxed min-h-[100px]">
                {feedbacks.feedback}
              </div>
            </div>

            {/* Response Management Input Controller */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black text-gray-600 uppercase tracking-wider">
                Your Response
              </label>
              <textarea
                id="sfr"
                rows="5"
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-3 text-sm outline-none transition-all text-gray-700 resize-none"
                placeholder="Type the official operational response resolution here..."
                value={reply}
                onChange={(event) => setReply(event.target.value)}
                required
              />
            </div>

            {/* Form Actions Operations Panel */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="w-full sm:w-[180px] bg-[#063a67] hover:bg-[#13293d] text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-md transition-all duration-200 uppercase tracking-wider"
              >
                Submit Response
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default ReplyF;