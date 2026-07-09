import React, { useState, useEffect } from 'react';
import Head from '../Header/Header';
import API from '../../../api';

function FAskedQ() {
  const [questions, setQuestions] = useState([]);
  const [grade, setGrade]         = useState('');
  const [subject, setSubject]     = useState('');
  const [loading, setLoading]     = useState(true);

  // Initial load
  useEffect(() => {
    API.get('/api/feedback/fAskQs')
      .then(res => {
        const d = res.data?.data || res.data || [];
        setQuestions(Array.isArray(d) ? d : []);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // Search on filter change
  useEffect(() => {
    const params = {};
    if (grade)   params.grade   = grade;
    if (subject) params.subject = subject;

    API.get('/api/feedback/fASearch', { params })
      .then(res => {
        const d = res.data?.data || res.data || [];
        setQuestions(Array.isArray(d) ? d : []);
      })
      .catch(err => console.error(err));
  }, [grade, subject]);

  return (
    <div>
      <Head />

      <div className="max-w-3xl mx-auto px-4 mt-6 md:ml-[270px] pb-12">
        <h2 className="text-xl font-bold text-[#063a67] mb-6">
          Frequently Asked Questions (FAQs)
        </h2>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="Filter by Grade..."
            value={grade}
            onChange={e => setGrade(e.target.value)}
            className="flex-1 p-3 border-2 border-gray-200 rounded-xl font-semibold text-gray-700 focus:outline-none focus:border-[#384D6C]"
          />
          <input
            type="text"
            placeholder="Filter by Subject..."
            value={subject}
            onChange={e => setSubject(e.target.value)}
            className="flex-1 p-3 border-2 border-gray-200 rounded-xl font-semibold text-gray-700 focus:outline-none focus:border-[#384D6C]"
          />
        </div>

        {loading ? (
          <p className="text-gray-400 font-semibold">Loading FAQs...</p>
        ) : questions.length === 0 ? (
          <div className="bg-white border-2 border-dashed border-gray-200 rounded-[20px] p-10 text-center">
            <p className="text-gray-400 font-semibold">No FAQs found.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {questions.map((q, i) => (
              <div key={q._id || i} className="bg-white border-2 border-gray-100 rounded-[20px] shadow-sm p-6">
                <div className="flex gap-2 mb-3">
                  <span className="text-[11px] bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded border border-blue-100">
                    Grade: {q.grade}
                  </span>
                  <span className="text-[11px] bg-purple-50 text-purple-700 font-bold px-2 py-0.5 rounded border border-purple-100">
                    {q.subject}
                  </span>
                </div>

                <div className="mb-3">
                  <span className="text-[11px] font-bold uppercase text-gray-400 tracking-wider">Question</span>
                  <p className="text-gray-800 font-semibold mt-1">{q.question}</p>
                </div>

                {q.answer && (
                  <div className="mt-3 pt-3 border-t border-dashed border-gray-200">
                    <span className="text-[11px] font-bold uppercase text-[#384D6C] tracking-wider">Answer</span>
                    <p className="text-gray-700 font-medium mt-1">{q.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FAskedQ;
