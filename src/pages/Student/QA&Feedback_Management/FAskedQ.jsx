import React, { useState, useEffect } from 'react';
import Head from '../Header/Header';
import { FaGraduationCap, FaBook, FaSearch, FaQuestionCircle, FaCommentDots } from 'react-icons/fa';

function FAskedQ() {
  // 1. Pure Static Local Mock Database (No Backend API required)
  const [staticMockQuestions] = useState([
    { grade: '6', subject: 'Science', question: 'What is photosynthesis?', answer: 'The process by which green plants use sunlight to synthesize nutrients from carbon dioxide and water.' },
    { grade: '9', subject: 'Mathematics', question: 'What is Pythagoras Theorem?', answer: 'In a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides.' },
    { grade: '10', subject: 'Computer Science', question: 'What is the purpose of an aggregation pipeline in MongoDB?', answer: 'It filters, transforms, and groups documents through sequential stages to output computed analytical data.' },
    { grade: '11', subject: 'Physics', question: 'Define Ohms Law.', answer: 'The current through a conductor between two points is directly proportional to the voltage across the two points.' }
  ]);

  // States
  const [questions, setQuestions] = useState([]);
  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('');

  // Initial mount pe static data load karne ke liye
  useEffect(() => {
    setQuestions(staticMockQuestions);
  }, [staticMockQuestions]);

  // 2. Client-Side Static Query Filtering (Replaces backend search endpoint)
  useEffect(() => {
    const filterStaticQuestions = () => {
      let filtered = staticMockQuestions;

      if (grade.trim()) {
        filtered = filtered.filter(q => 
          q.grade.toLowerCase().includes(grade.toLowerCase().trim())
        );
      }
      if (subject.trim()) {
        filtered = filtered.filter(q => 
          q.subject.toLowerCase().includes(subject.toLowerCase().trim())
        );
      }

      setQuestions(filtered);
    };

    filterStaticQuestions();
  }, [grade, subject, staticMockQuestions]);

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans antialiased">
      {/* Universal Portal Navbar Header */}
      <Head />

      {/* Main Container: left sidebar gap handle karne ke liye responsive padding add ki hai */}
      <div className="w-full max-w-[1200px] mx-auto px-4 lg:pl-[290px] mt-8 space-y-6">
        
        {/* Step-2 Corporate Slate Accent Heading Plate */}
        <div className="border-b-2 border-slate-200 pb-3">
          <h2 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
            <FaQuestionCircle className="text-[#384D6C]" /> Connect With Your Teachers - FAQS
          </h2>
          <div className="h-1 w-16 bg-[#384D6C] rounded-full mt-1" />
        </div>

        {/* Search Inputs Filter Deck Container */}
        <div className="bg-white border-2 border-slate-900 rounded-2xl p-5 shadow-xs grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          
          {/* Grade Filter Input Box */}
          <div className="space-y-1.5 relative">
            <label className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
              <FaGraduationCap className="text-slate-400 text-sm" /> Filter By Grade Level
            </label>
            <div className="relative flex items-center">
              <input 
                type="text" 
                onChange={handleGradeChange} 
                name="grade" 
                value={grade}
                placeholder="Search Grade (e.g., 9, 10)" 
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl pl-10 pr-4 py-3 focus:outline-none transition-colors shadow-inner"
              />
              <FaSearch className="absolute left-4 text-slate-400 text-xs pointer-events-none" />
            </div>
          </div>

          {/* Subject Filter Input Box */}
          <div className="space-y-1.5 relative">
            <label className="text-[11px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
              <FaBook className="text-slate-400 text-xs" /> Filter By Subject Name
            </label>
            <div className="relative flex items-center">
              <input 
                type="text" 
                name="subject" 
                onChange={handleSubjectChange}  
                value={subject}
                placeholder="Search Subject (e.g., Mathematics)" 
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl pl-10 pr-4 py-3 focus:outline-none transition-colors shadow-inner"
              />
              <FaSearch className="absolute left-4 text-slate-400 text-xs pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Dynamic Cards Display Stack */}
        <div className="space-y-4">
          {questions.length > 0 ? (
            questions.map((question, index) => (
              <div 
                key={index} 
                className="bg-white border-2 border-slate-900 rounded-2xl p-5 md:p-6 shadow-sm hover:translate-x-0.5 transition-transform duration-200 flex flex-col md:flex-row gap-4 items-start justify-between"
              >
                {/* Custom Left Badges Layer */}
                <div className="flex sm:flex-row md:flex-col gap-2 shrink-0 w-full md:w-fit">
                  <span className="text-[10px] font-mono font-black tracking-wider uppercase text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md text-center inline-block">
                    Grade {question.grade}
                  </span>
                  <span className="text-[10px] font-black tracking-wider uppercase text-white bg-[#384D6C] border border-slate-950 px-2.5 py-1 rounded-md text-center inline-block">
                    {question.subject}
                  </span>
                </div>

                {/* Question Text Body & Verified Answer Deck */}
                <div className="flex-1 space-y-3 w-full">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1">
                      <FaQuestionCircle /> Academic Question Node
                    </span>
                    <h3 className="text-sm font-black text-slate-900 leading-tight">
                      {question.question}
                    </h3>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-1 shadow-inner">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0C7FDA] flex items-center gap-1">
                      <FaCommentDots /> Faculty Verified Answer
                    </span>
                    <p className="text-xs font-bold text-slate-700 leading-relaxed">
                      {question.answer}
                    </p>
                  </div>
                </div>

              </div>
            ))
          ) : (
            /* Clean Empty Informer Block */
            <div className="w-full text-center py-12 bg-white border-2 border-slate-200 border-dashed rounded-2xl text-slate-400 font-bold text-xs uppercase tracking-wider space-y-2">
              <FaQuestionCircle className="text-3xl mx-auto opacity-30 text-slate-500" />
              <p>No FAQ items match your active parameters.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default FAskedQ;