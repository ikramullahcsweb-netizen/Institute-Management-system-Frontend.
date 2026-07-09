import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Head from '../Header/Header';
import API from '../../../api';

function UpdateQuestion() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [grade, setGrade]         = useState('');
  const [subject, setSubject]     = useState('');
  const [teacher, setTeacher]     = useState('');
  const [sid, setSid]             = useState('');
  const [question, setQuestion]   = useState('');
  const [teacherList, setTeacherList] = useState([]);
  const [loading, setLoading]     = useState(false);
  const [fetching, setFetching]   = useState(true);

  // Fetch existing question
  useEffect(() => {
    API.get(`/api/feedback/getQuestion/${id}`)
      .then(res => {
        const d = res.data?.data || res.data;
        setGrade(d.grade || '');
        setSubject(d.subject || '');
        setTeacher(d.teacher || '');
        setSid(d.sid || '');
        setQuestion(d.question || '');
      })
      .catch(err => console.error(err))
      .finally(() => setFetching(false));
  }, [id]);

  // Fetch teacher list
  useEffect(() => {
    API.get('/api/v1/teacherprofileall')
      .then(res => {
        const d = res.data?.data || res.data;
        setTeacherList(Array.isArray(d) ? d : []);
      })
      .catch(err => console.error(err));
  }, []);

  // Auto-fill subject on teacher change
  useEffect(() => {
    if (teacher && teacherList.length > 0) {
      const selected = teacherList.find(t => t.name === teacher);
      if (selected) setSubject(selected.subject || '');
    }
  }, [teacher, teacherList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Update Question?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#384D6C',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Update!',
    }).then(async result => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await API.put(`/api/feedback/updateQuestion/${id}`, {
            grade, subject, teacher, sid, question
          });
          toast.success('Question updated!');
          setTimeout(() => navigate('/MyQuestions'), 1500);
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
          <p className="text-gray-400 font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Head />
      <Toaster />

      <div className="max-w-3xl mx-auto px-4 mt-6 md:ml-[270px] pb-12">
        <h2 className="text-xl font-bold text-[#063a67] mb-6">
          Update Question
        </h2>

        <div className="bg-white border-2 border-gray-100 rounded-[20px] shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Grade</label>
                <input
                  value={grade}
                  readOnly
                  className="w-full p-3 border-2 border-gray-100 bg-gray-50 rounded-xl font-semibold text-gray-700 cursor-not-allowed"
                />
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
                    <option key={i} value={t.name}>{t.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Subject</label>
                <input
                  value={subject}
                  readOnly
                  className="w-full p-3 border-2 border-gray-100 bg-gray-50 rounded-xl font-semibold text-gray-700 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Student ID</label>
                <input
                  value={sid}
                  readOnly
                  className="w-full p-3 border-2 border-gray-100 bg-gray-50 rounded-xl font-semibold text-gray-700 cursor-not-allowed"
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Question</label>
              <textarea
                required
                rows={5}
                value={question}
                onChange={e => setQuestion(e.target.value)}
                className="w-full p-3 border-2 border-gray-200 rounded-xl font-semibold text-gray-700 focus:outline-none focus:border-[#384D6C] resize-none"
              />
            </div>

            <div className="flex gap-3 justify-end pt-2">
              <button
                type="button"
                onClick={() => navigate('/MyQuestions')}
                className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold px-6 py-3 rounded-xl text-sm transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="bg-[#384D6C] hover:bg-[#283952] disabled:opacity-60 text-white font-bold px-8 py-3 rounded-xl transition-all"
              >
                {loading ? 'Updating...' : 'Update Question'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateQuestion;
