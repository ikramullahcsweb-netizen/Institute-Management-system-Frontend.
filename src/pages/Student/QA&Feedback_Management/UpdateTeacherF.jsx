import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Head from '../Header/Header';
import API from '../../../api';

function UpdateTeacherF() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [grade, setGrade]         = useState('');
  const [subject, setSubject]     = useState('');
  const [teacher, setTeacher]     = useState('');
  const [sid, setSid]             = useState('');
  const [tfeedback, setTFeedback] = useState('');
  const [teacherList, setTeacherList] = useState([]);
  const [loading, setLoading]     = useState(false);
  const [fetching, setFetching]   = useState(true);

  // Fetch existing feedback
  useEffect(() => {
    API.get(`/api/feedback/getTFeedback/${id}`)
      .then(res => {
        const d = res.data?.data || res.data;
        setGrade(d.grade     || '');
        setSubject(d.subject || '');
        setTeacher(d.teacher || '');
        setSid(d.sid         || '');
        setTFeedback(d.feedback || '');
      })
      .catch(err => console.error(err))
      .finally(() => setFetching(false));
  }, [id]);

  // Teacher list
  useEffect(() => {
    API.get('/api/auth/getteachersadmin')
      .then(res => {
        const d = res.data?.data || res.data;
        setTeacherList(Array.isArray(d) ? d : []);
      })
      .catch(err => console.error(err));
  }, []);

  // Auto-fill subject when teacher changes
  useEffect(() => {
    if (teacher && teacherList.length > 0) {
      const sel = teacherList.find(t => t.name === teacher);
      if (sel) setSubject(sel.subject || '');
    }
  }, [teacher, teacherList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Update Feedback?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#384D6C',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Update!',
    }).then(async result => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await API.put(`/api/feedback/updateTFeedback/${id}`, {
            grade, subject, teacher, sid, tfeedback
          });
          toast.success('Teacher feedback updated!');
          setTimeout(() => navigate('/MyFeedbacks'), 1500);
        } catch (err) {
          toast.error(err.response?.data?.message || 'Update failed');
        } finally {
          setLoading(false);
        }
      }
    });
  };

  if (fetching) {
    return (
      <div><Head />
        <div className="md:ml-[270px] pt-8 px-4">
          <div className="flex items-center gap-3 text-gray-400 font-semibold">
            <div className="w-4 h-4 border-2 border-gray-300 border-t-[#384D6C] rounded-full animate-spin" />
            Loading...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Head />
      <Toaster />

      <div className="max-w-3xl mx-auto px-4 mt-6 md:ml-[270px] pb-12">
        <h2 className="text-xl font-bold text-[#063a67] mb-6">Update Teacher Feedback</h2>

        <div className="bg-white border-2 border-gray-100 rounded-[20px] shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Grade</label>
                <input value={grade} readOnly className="w-full p-3 border-2 border-gray-100 bg-gray-50 rounded-xl font-semibold text-gray-700 cursor-not-allowed" />
              </div>

              <div>
                <label className="block text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Select Teacher</label>
                <select
                  required
                  value={teacher}
                  onChange={e => setTeacher(e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 bg-white rounded-xl font-semibold text-gray-700 focus:outline-none focus:border-[#384D6C]"
                >
                  <option value="">-- Select --</option>
                  {teacherList.map((t, i) => (
                    <option key={t._id || i} value={t.name}>{t.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Subject</label>
                <input value={subject} readOnly className="w-full p-3 border-2 border-gray-100 bg-gray-50 rounded-xl font-semibold text-gray-700 cursor-not-allowed" />
              </div>

              <div>
                <label className="block text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Student ID</label>
                <input value={sid} readOnly className="w-full p-3 border-2 border-gray-100 bg-gray-50 rounded-xl font-semibold text-gray-700 cursor-not-allowed" />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Your Feedback</label>
              <textarea
                required
                rows={5}
                value={tfeedback}
                onChange={e => setTFeedback(e.target.value)}
                className="w-full p-3 border-2 border-gray-200 rounded-xl font-semibold text-gray-700 focus:outline-none focus:border-[#384D6C] resize-none"
              />
            </div>

            <div className="flex gap-3 justify-end">
              <button type="button" onClick={() => navigate('/MyFeedbacks')}
                className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold px-6 py-3 rounded-xl text-sm transition-all">
                Cancel
              </button>
              <button type="submit" disabled={loading}
                className="bg-[#384D6C] hover:bg-[#283952] disabled:opacity-60 text-white font-bold px-8 py-3 rounded-xl transition-all">
                {loading ? 'Updating...' : 'Update Feedback'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateTeacherF;
