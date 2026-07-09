import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Head from '../Header/Header';
import API from '../../../api';

function MyFeedbacks() {
  const [tfeedbacks, setTFeedbacks] = useState([]);
  const [sfeedbacks, setSFeedbacks] = useState([]);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState('');

  useEffect(() => {
    const fetchAll = async () => {
      try {
        // Step 1: student ka stdid lo
        const profileRes  = await API.get('/api/v1/studentprofile');
        const profileData = profileRes.data?.data || profileRes.data;
        const myStdid     = profileData?.stdid || '';

        // Step 2: teacher aur service feedbacks parallel fetch karo
        const [tfRes, sfRes] = await Promise.all([
          API.get('/api/feedback/MyTFeedbacks'),
          API.get('/api/feedback/MySFeedbacks'),
        ]);

        // Backend ApiResponse: { statusCode, data: [...], message }
        const allTF = Array.isArray(tfRes.data?.data)
          ? tfRes.data.data
          : Array.isArray(tfRes.data)
          ? tfRes.data
          : [];

        const allSF = Array.isArray(sfRes.data?.data)
          ? sfRes.data.data
          : Array.isArray(sfRes.data)
          ? sfRes.data
          : [];

        // Step 3: apne feedbacks filter karo
        setTFeedbacks(myStdid ? allTF.filter(f => f.sid === myStdid) : allTF);
        setSFeedbacks(myStdid ? allSF.filter(f => f.sid === myStdid) : allSF);

      } catch (err) {
        console.error('MyFeedbacks error:', err);
        setError(err.response?.data?.message || 'Could not load feedbacks');
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  const deleteTF = (id) => {
    Swal.fire({
      title: 'Delete feedback?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Delete',
    }).then(async r => {
      if (r.isConfirmed) {
        try {
          await API.delete(`/api/feedback/deleteTFeedback/${id}`);
          setTFeedbacks(p => p.filter(f => f._id !== id));
          Swal.fire('Deleted!', '', 'success');
        } catch (err) {
          Swal.fire('Error', err.response?.data?.message || 'Delete failed', 'error');
        }
      }
    });
  };

  const deleteSF = (id) => {
    Swal.fire({
      title: 'Delete feedback?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Delete',
    }).then(async r => {
      if (r.isConfirmed) {
        try {
          await API.delete(`/api/feedback/deleteSFeedback/${id}`);
          setSFeedbacks(p => p.filter(f => f._id !== id));
          Swal.fire('Deleted!', '', 'success');
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
            Loading your feedbacks...
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
        <h2 className="text-xl font-black text-[#063a67] mb-6">My Feedbacks</h2>

        {/* ── Teacher Feedbacks ── */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[13px] font-black uppercase tracking-widest text-[#384D6C] bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
              Teacher Feedbacks
              <span className="ml-2 bg-blue-100 text-blue-700 rounded-full px-1.5 py-0.5 text-[10px]">
                {tfeedbacks.length}
              </span>
            </h3>
            <Link to="/TFeedback">
              <button className="bg-[#384D6C] hover:bg-[#283952] text-white text-xs font-bold px-3 py-2 rounded-xl transition-all">
                + Add
              </button>
            </Link>
          </div>

          {tfeedbacks.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-gray-200 rounded-[20px] p-6 text-center">
              <p className="text-gray-400 font-semibold text-sm">No teacher feedbacks yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {tfeedbacks.map((f, i) => (
                <div key={f._id || i} className="bg-white border-2 border-gray-100 rounded-[20px] shadow-sm p-5 hover:border-gray-200 transition-all">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {f.grade && (
                      <span className="text-[11px] bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded border border-blue-100">Grade: {f.grade}</span>
                    )}
                    {f.subject && (
                      <span className="text-[11px] bg-purple-50 text-purple-700 font-bold px-2 py-0.5 rounded border border-purple-100">{f.subject}</span>
                    )}
                    {f.teacher && (
                      <span className="text-[11px] bg-slate-50 text-slate-600 font-bold px-2 py-0.5 rounded border border-slate-200">{f.teacher}</span>
                    )}
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase text-gray-400 tracking-wider">Feedback</span>
                    <p className="text-gray-800 font-medium text-sm mt-1 leading-relaxed">{f.feedback}</p>
                  </div>
                  <div className="flex gap-2 mt-4 pt-3 border-t border-gray-100">
                    <Link to={`/UpdateTeacherF/${f._id}`}>
                      <button className="bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-600 hover:text-white text-xs font-bold px-4 py-2 rounded-lg transition-all">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteTF(f._id)}
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

        {/* ── Service Feedbacks ── */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[13px] font-black uppercase tracking-widest text-[#384D6C] bg-green-50 px-3 py-1.5 rounded-lg border border-green-100">
              Service Feedbacks
              <span className="ml-2 bg-green-100 text-green-700 rounded-full px-1.5 py-0.5 text-[10px]">
                {sfeedbacks.length}
              </span>
            </h3>
            <Link to="/SFeedback">
              <button className="bg-[#384D6C] hover:bg-[#283952] text-white text-xs font-bold px-3 py-2 rounded-xl transition-all">
                + Add
              </button>
            </Link>
          </div>

          {sfeedbacks.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-gray-200 rounded-[20px] p-6 text-center">
              <p className="text-gray-400 font-semibold text-sm">No service feedbacks yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {sfeedbacks.map((f, i) => (
                <div key={f._id || i} className="bg-white border-2 border-gray-100 rounded-[20px] shadow-sm p-5 hover:border-gray-200 transition-all">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {f.grade && (
                      <span className="text-[11px] bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded border border-blue-100">Grade: {f.grade}</span>
                    )}
                    {f.date && (
                      <span className="text-[11px] bg-gray-50 text-gray-500 font-bold px-2 py-0.5 rounded border border-gray-200">
                        {new Date(f.date).toLocaleDateString()}
                      </span>
                    )}
                    {f.reply && (
                      <span className="text-[11px] bg-green-50 text-green-700 font-bold px-2 py-0.5 rounded border border-green-200">
                        ✓ Reply received
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase text-gray-400 tracking-wider">Feedback</span>
                    <p className="text-gray-800 font-medium text-sm mt-1 leading-relaxed">{f.feedback}</p>
                  </div>
                  {f.reply && (
                    <div className="mt-3 pt-3 border-t border-dashed border-gray-200">
                      <span className="text-[11px] font-black uppercase text-green-700 tracking-wider">Manager Reply</span>
                      <p className="text-gray-700 font-medium text-sm mt-1 leading-relaxed">{f.reply}</p>
                    </div>
                  )}
                  <div className="flex gap-2 mt-4 pt-3 border-t border-gray-100">
                    <Link to={`/UpdateSFeedback/${f._id}`}>
                      <button className="bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-600 hover:text-white text-xs font-bold px-4 py-2 rounded-lg transition-all">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteSF(f._id)}
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
    </div>
  );
}

export default MyFeedbacks;
