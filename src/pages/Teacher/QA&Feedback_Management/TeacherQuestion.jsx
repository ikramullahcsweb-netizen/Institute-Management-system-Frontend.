import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Head from '../Header/Header';
import { FaReply } from 'react-icons/fa';

function TeacherQuestion() {
  // Aapke standard rules ke mutabik complete front-end test karne ke liye static mockup data array
  const [questions] = useState([
    { _id: 'tq1', subject: 'Mathematics', grade: 'Grade 10', sid: 'STU-9843', question: 'How to calculate the roots using completing square formula? I am stuck on the second step.' },
    { _id: 'tq2', subject: 'Mathematics', grade: 'Grade 08', sid: 'STU-1120', question: 'Please explain the difference between rational and irrational numbers with daily life examples.' }
  ]);

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <Head />

      {/* Main Content Container Layout - Sidebar Offset Padding Fixed */}
      <div className="w-full max-w-[1200px] mx-auto px-4 pl-4 md:pl-[290px] pr-4 mt-8 transition-all">
        
        {/* Step 2 Color Theme Background Header Box */}
        <div className="w-full bg-[#C9E8EA] border border-slate-200 rounded-[20px] p-6 mb-8 shadow-xs">
          <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tight">
            Connect With Your Teachers - New Questions
          </h1>
          <p className="text-xs text-slate-600 font-bold mt-0.5">
            Incoming students queries matched with your core academic subjects.
          </p>
        </div>

        {/* Dynamic Static Cards List Grid */}
        <div className="w-full space-y-4">
          {questions.map((question, index) => (
            <div 
              key={index} 
              className="w-full bg-white border-2 border-slate-200 p-6 rounded-[22px] shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-all hover:border-slate-300"
            >
              
              {/* Left Column Area: Question Descriptive Elements */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-black text-[#483EA8] uppercase bg-purple-50 px-3 py-1 rounded-md">
                    {question.subject}
                  </span>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    {question.grade}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400">
                    ID: {question.sid}
                  </span>
                </div>

                <div className="text-[15px] text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 block text-xs uppercase tracking-wider mb-1">Question:</strong>
                  {question.question}
                </div>
              </div>

              {/* Right Column Area: Action Buttons Panel */}
              <div className="w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 flex justify-end">
                <Link 
                  to={`/AnswerQ/${question._id}`} 
                  className="bg-[#483EA8] hover:bg-[#392f8a] text-white text-xs font-black py-3 px-6 rounded-xl flex items-center gap-2 uppercase tracking-wider transition-all shadow-xs whitespace-nowrap w-full md:w-auto justify-center"
                >
                  <FaReply className="text-[13px]" />
                  <span>Answer</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default TeacherQuestion;