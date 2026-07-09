import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Head from '../Header/Header';
import API from '../../../api';

function MyQuestions() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState('');

  useEffect(() => {
    const fetchAll = async () => {
      try {
        // Step 1: student ka stdid lo
        const profileRes = await API.get('/api/v1/studentprofile');
        const profileData = profileRes.data?.data || profileRes.data;
        const myStdid = profileData?.stdid || '';

        // Step 2: sab questions fetch karo
        const qRes = await API.get('/api/feedback/Myquestions');
        // Backend ApiResponse: { statusCode, data: [...], message }
        const allQ = Array.isArray(qRes.data?.data)
          ? qRes.data.data
          : Array.isArray(qRes.data)
          ? qRes.data
          : [];

        // Step 3: apne questions filter karo
        const mine = myStdid
          ? allQ.filter(q => q.sid === myStdid)
          : allQ;

        setQuestions(mine);
      } catch (err) {
        console.error('MyQuestions error:', err);
        setError(err.response?.data?.message || 'Could not load questions');
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Delete this question?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, delete!',
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          await API.delete(`/api/feedback/deleteQuestion/${id}`);
          setQuestions(prev => prev.filter(q => q._id !== id));
          Swal.fire('Deleted!', 'Your question has been removed.', 'success');
        } catch (err) {
          Swal.fire('Error', err.response?.data?.message || 'Delete failed', 'error');
        }
      }
    });
  };

  // ── Loading ──
  if (loading) {
    return (
      <div>
        <Head />
        <div className="max-w-3xl mx-auto px-4 mt-6 md:ml-[270px] pb-12">
          <div className="flex items-center gap-3 text-gray-400 font-semibold">
            <div className="w-4 h-4 border-2 border-gray-300 border-t-[#384D6C] rounded-full animate-spin" />
            Loading your questions...
          </div>
        </div>
      </div>
    );
  }

  // ── Error ──
  if (error) {
    return (
      <div>
        <Head />
        <div className="max-w-3xl mx-auto px-4 mt-6 md:ml-[270px] pb-12">
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 font-semibold text-sm">
            ⚠️ {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Head />

      <div className="max-w-3xl mx-auto px-4 mt-6 md:ml-[270px] pb-12">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-black text-[#063a67]">My Questions</h2>
            <p className="text-xs text-gray-400 font-semibold mt-0.5">
              {questions.length} question{questions.length !== 1 ? 's' : ''} found
            </p>
          </div>
          <Link to="/AddQuestion">
            <button className="bg-[#384D6C] hover:bg-[#283952] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all">
              + Ask Question
            </button>
          </Link>
        </div>

        {/* Empty state */}
        {questions.length === 0 ? (
          <div className="bg-white border-2 border-dashed border-gray-200 rounded-[20px] p-10 text-center">
            <p className="text-gray-400 font-semibold text-sm">You haven't asked any questions yet.</p>
            <Link to="/AddQuestion">
              <button className="mt-4 bg-[#384D6C] hover:bg-[#283952] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all">
                Ask your first question →
              </button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {questions.map((q, i) => (
              <div
                key={q._id || i}
                className="bg-white border-2 border-gray-100 rounded-[20px] shadow-sm p-5 hover:border-gray-200 transition-all"
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {q.grade && (
                    <span className="text-[11px] bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded border border-blue-100">
                      Grade: {q.grade}
                    </span>
                  )}
                  {q.subject && (
                    <span className="text-[11px] bg-purple-50 text-purple-700 font-bold px-2 py-0.5 rounded border border-purple-100">
                      {q.subject}
                    </span>
                  )}
                  {q.teacher && (
                    <span className="text-[11px] bg-slate-50 text-slate-600 font-bold px-2 py-0.5 rounded border border-slate-200">
                      {q.teacher}
                    </span>
                  )}
                  {!q.answer && (
                    <span className="text-[11px] bg-amber-50 text-amber-600 font-bold px-2 py-0.5 rounded border border-amber-200">
                      Awaiting Answer
                    </span>
                  )}
                  {q.answer && (
                    <span className="text-[11px] bg-green-50 text-green-700 font-bold px-2 py-0.5 rounded border border-green-200">
                      ✓ Answered
                    </span>
                  )}
                </div>

                {/* Question */}
                <div className="mb-2">
                  <span className="text-[11px] font-black uppercase text-gray-400 tracking-wider">Question</span>
                  <p className="text-gray-800 font-semibold text-sm mt-1 leading-relaxed">{q.question}</p>
                </div>

                {/* Answer if exists */}
                {q.answer && (
                  <div className="mt-3 pt-3 border-t border-dashed border-gray-200">
                    <span className="text-[11px] font-black uppercase text-[#384D6C] tracking-wider">Answer</span>
                    <p className="text-gray-700 font-medium text-sm mt-1 leading-relaxed">{q.answer}</p>
                  </div>
                )}

                {/* Actions — only show edit/delete if not yet answered */}
                <div className="flex gap-2 mt-4 pt-3 border-t border-gray-100">
                  <Link to={`/UpdateQuestion/${q._id}`}>
                    <button className="bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-600 hover:text-white text-xs font-bold px-4 py-2 rounded-lg transition-all">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(q._id)}
                    className="bg-red-50 border border-red-200 text-red-600 hover:bg-red-600 hover:text-white text-xs font-bold px-4 py-2 rounded-lg transition-all"
                  >
                    Delete
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyQuestions;
