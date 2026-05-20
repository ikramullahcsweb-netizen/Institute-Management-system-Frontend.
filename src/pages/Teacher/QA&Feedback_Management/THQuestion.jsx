import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Head from '../Header/Header';
import Swal from 'sweetalert2';
import { FaEdit, FaTrashAlt, FaPlusCircle } from 'react-icons/fa';

function THQuestion() {
  // Pure static dataset array mockup view ko chalane ke liye
  const [questions, setQuestions] = useState([
    {
      _id: 'q1',
      sid: 'STU-9843',
      grade: 'Grade 10',
      subject: 'Mathematics',
      question: 'How to calculate the roots using completing square formula?',
      answer: 'Isolate the x terms, add (b/2)² to both sides, and factor into a perfect square.'
    },
    {
      _id: 'q2',
      sid: 'STU-1120',
      grade: 'Grade 08',
      subject: 'Mathematics',
      question: 'Please explain the difference between rational and irrational numbers.',
      answer: 'Rational numbers can be written as fractions (p/q), while irrational numbers cannot.'
    }
  ]);

  // Pure static filter array function simulations
  const handleDeleteA = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to clear this saved answer?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#8A6675',
      cancelButtonColor: '#667A8A',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setQuestions(prev => prev.filter(q => q._id !== id));
        Swal.fire('Deleted!', 'Answer removed from front-end local array.', 'success');
      }
    });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <Head />

      {/* Main Responsive Panel with Absolute Sidebar Padding Setup */}
      <div className="w-full max-w-[1300px] mx-auto px-4 pl-4 md:pl-[290px] pr-4 mt-8 transition-all">
        
        {/* Step 2 Color Variant Top Header Card */}
        <div className="w-full bg-[#C9E8EA] border border-slate-200 rounded-[20px] p-6 mb-8 shadow-xs">
          <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tight">
            Connect With Your Teachers
          </h1>
          <p className="text-sm text-slate-600 font-medium mt-1.5 leading-relaxed max-w-[1000px]">
            Welcome to our online platform dedicated to supporting students' learning journey! 
            Our platform is designed to enhance collaboration, engagement, and support within the educational community.
          </p>
          
          {/* Action Route to Create/Review Questions Area */}
          <div className="mt-5">
            <Link to="/TeacherQuestion">
              <button className="bg-[#483EA8] hover:bg-[#392f8a] text-white text-xs font-black py-3.5 px-6 rounded-xl flex items-center gap-2 uppercase tracking-wider transition-all shadow-sm">
                <FaPlusCircle className="text-[14px]" />
                <span>New Questions</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Section Secondary Label Title */}
        <div className="mb-6 px-1">
          <h2 className="text-lg font-black text-[#667A8A] uppercase tracking-wide border-b-2 border-slate-200 pb-2">
            Solved Questions
          </h2>
        </div>

        {/* Unordered Solved Cards Dynamic Array Grid */}
        <div className="w-full space-y-6">
          {questions.length === 0 ? (
            <p className="text-sm font-bold text-slate-400 text-center py-8 bg-white rounded-xl border border-dashed">
              No solved items found.
            </p>
          ) : (
            questions.map((question, index) => (
              <div 
                key={index} 
                className="w-full bg-white border-2 border-slate-200 p-6 rounded-[22px] shadow-sm flex flex-col xl:flex-row justify-between items-start gap-6 transition-all hover:border-slate-300"
              >
                {/* Solved Content Area elements block */}
                <div className="flex-1 space-y-3 w-full">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-black text-[#483EA8] bg-purple-50 px-2.5 py-1 rounded-md">
                      {question.subject}
                    </span>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {question.grade}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">
                      ID: {question.sid}
                    </span>
                  </div>

                  <div className="space-y-2 pt-1 text-[14px] text-slate-700">
                    <div>
                      <strong className="text-slate-900 block text-xs uppercase tracking-wider mb-0.5">Question:</strong>
                      <p className="bg-slate-50 border p-3 rounded-xl font-medium">{question.question}</p>
                    </div>
                    <div className="pt-1">
                      <strong className="text-[#483EA8] block text-xs uppercase tracking-wider mb-0.5">Answer:</strong>
                      <p className="bg-emerald-50/50 border border-emerald-100 p-3 rounded-xl font-medium text-slate-800">{question.answer}</p>
                    </div>
                  </div>
                </div>

                {/* Configuration Buttons Section Control Block */}
                <div className="flex xl:flex-col items-center gap-2.5 w-full xl:w-auto pt-4 xl:pt-0 border-t xl:border-t-0 border-slate-100 justify-end">
                  <Link 
                    to={`/AnswerUpdate/${question._id}`} 
                    className="w-full xl:w-[130px] text-center"
                  >
                    <button className="w-full bg-[#667A8A] hover:bg-slate-600 text-white text-xs font-black py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 uppercase tracking-wider transition-colors shadow-xs">
                      <FaEdit className="text-[13px]" />
                      <span>Edit</span>
                    </button>
                  </Link>
                  
                  <button 
                    onClick={() => handleDeleteA(question._id)}
                    className="w-full xl:w-[130px] bg-[#8A6675] hover:bg-red-900 text-white text-xs font-black py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <FaTrashAlt className="text-[12px]" />
                    <span>Delete</span>
                  </button>
                </div>

              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default THQuestion;