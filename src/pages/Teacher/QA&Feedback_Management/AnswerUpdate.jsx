import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Head from '../Header/Header';
import Swal from 'sweetalert2';

function AnswerUpdate() {
  const navigate = useNavigate();

  // Rules ke mutabik static state values default UI render karne ke liye
  const [grade, setGrade] = useState("Grade 10");
  const [subject, setSubject] = useState("Mathematics");
  const [sid, setSid] = useState("STU-9843");
  const [question, setQuestion] = useState("Sir, please explain how to find the roots of a quadratic equation using the completion of squares method. I am stuck on exercise 4.2.");
  const [answer, setAnswer] = useState("Here is the updated explanation: You need to isolate the x terms, add (b/2)² to both sides, and then compress the left side into a perfect square trinomial.");

  const reply = (event) => {
    event.preventDefault();
    
    // Static layout update simulation alert
    Swal.fire({
      title: 'Answer Updated!',
      text: 'Changes have been simulated and saved to the local state layout.',
      icon: 'success',
      confirmButtonColor: '#483EA8'
    }).then(() => {
      navigate('/THQuestion');
    });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <Head />
      
      {/* Container with Sidebar Layout Offset Padding */}
      <div className="w-full max-w-[1000px] mx-auto px-4 mt-8 md:pl-[276px] transition-all">
        
        {/* Component Header Card */}
        <div className="w-full bg-[#C9E8EA] border border-slate-200 rounded-[20px] p-6 mb-8">
          <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tight">
            Connect with your teachers
          </h1>
          <p className="text-xs text-slate-600 font-bold mt-1">
            Modify and re-submit previously saved student solutions.
          </p>
        </div>

        {/* Core Form Section Block */}
        <div className="bg-white border-2 border-slate-200 rounded-[22px] p-6 sm:p-10 shadow-sm">
          <form onSubmit={reply} className="space-y-6">
            
            {/* Metadata Fields: ID, Grade & Subject Horizontal Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-500 uppercase tracking-wider">
                  Student ID
                </label>
                <div className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700">
                  {sid}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-500 uppercase tracking-wider">
                  Grade
                </label>
                <div className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700">
                  {grade}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-500 uppercase tracking-wider">
                  Subject
                </label>
                <div className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700">
                  {subject}
                </div>
              </div>
            </div>

            {/* Student Question Text Area Box */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-black text-gray-500 uppercase tracking-wider">
                Question
              </label>
              <div className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-4 text-sm font-medium text-slate-700 min-h-[100px] leading-relaxed">
                {question}
              </div>
            </div>

            {/* Answer Input Field Wrapper */}
            <div className="flex flex-col gap-1.5 pt-2">
              <label className="text-xs font-black text-gray-500 uppercase tracking-wider">
                Answer
              </label>
              <textarea
                id="answer1"
                required
                placeholder="Modify your answer..."
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
                className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-3 text-sm outline-none h-40 resize-none focus:border-[#483EA8] transition-colors leading-relaxed"
              />
            </div>

            {/* Action Buttons Interface Layout */}
            <div className="flex justify-between items-center pt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={() => navigate('/THQuestion')}
                className="bg-[#667A8A] hover:bg-slate-600 text-white text-xs font-black py-3.5 px-8 rounded-xl uppercase tracking-wider transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#483EA8] hover:bg-[#392f8a] text-white text-xs font-black py-3.5 px-8 rounded-xl uppercase tracking-wider transition-colors shadow-sm"
              >
                Update Answer
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default AnswerUpdate;