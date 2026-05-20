import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Head from '../Header/Header';
import Swal from 'sweetalert2';

function AnswerQ() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');

  // Step 2 Theme ke mutabik pure static placeholder data
  const staticQuestion = {
    sid: "STU-9843",
    grade: "Grade 10",
    subject: "Mathematics",
    question: "Sir, please explain how to find the roots of a quadratic equation using the completion of squares method. I am stuck on exercise 4.2."
  };

  const reply = (event) => {
    event.preventDefault();
    // Static response preview simulation
    Swal.fire({
      title: 'Answer Submitted!',
      text: 'Your response has been saved locally.',
      icon: 'success',
      confirmButtonColor: '#483EA8'
    }).then(() => {
      navigate('/THQuestion');
    });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <Head />
      
      {/* Main Container Setup with Sidebar Padding Safety */}
      <div className="w-full max-w-[1000px] mx-auto px-4 mt-8 md:pl-[276px] transition-all">
        
        {/* Component Header Card */}
        <div className="w-full bg-[#C9E8EA] border border-slate-200 rounded-[20px] p-6 mb-8">
          <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tight">
            Connect with your teachers
          </h1>
          <p className="text-xs text-slate-600 font-bold mt-1">
            Review incoming student queries and draft your academic solutions.
          </p>
        </div>

        {/* Core Form Card Elements */}
        <div className="bg-white border-2 border-slate-200 rounded-[22px] p-6 sm:p-10 shadow-sm">
          <form onSubmit={reply} className="space-y-6">
            
            {/* Metadata Rows: ID, Grade & Subject Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-500 uppercase tracking-wider">
                  Student ID
                </label>
                <div className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700">
                  {staticQuestion.sid}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-500 uppercase tracking-wider">
                  Grade
                </label>
                <div className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700">
                  {staticQuestion.grade}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-500 uppercase tracking-wider">
                  Subject
                </label>
                <div className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700">
                  {staticQuestion.subject}
                </div>
              </div>
            </div>

            {/* Student's Question Area Display */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-black text-gray-500 uppercase tracking-wider">
                Question
              </label>
              <div className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-4 text-sm font-medium text-slate-700 min-h-[100px] leading-relaxed">
                {staticQuestion.question}
              </div>
            </div>

            {/* Answer Input Submission Segment */}
            <div className="flex flex-col gap-1.5 pt-2">
              <label className="text-xs font-black text-gray-500 uppercase tracking-wider">
                Your Answer
              </label>
              <textarea
                id="answer"
                required
                placeholder="Type your explanation or solution here..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-3 text-sm outline-none h-40 resize-none focus:border-[#483EA8] transition-colors leading-relaxed"
              />
            </div>

            {/* Bottom Controls Panel */}
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
                Submit Answer
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default AnswerQ;