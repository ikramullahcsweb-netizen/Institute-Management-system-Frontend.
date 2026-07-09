import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Head from '../Header/Header';
import API from '../../../api';

function AddQuestion() {
  const [teacher, setTeacher]         = useState('');
  const [question, setQuestion]       = useState('');
  const [idnumber, setIdnumber]       = useState('');
  const [teacherList, setTeacherList] = useState([]);
  const [subject, setSubject]         = useState('');
  const [sgrade, setSgrade]           = useState('');
  const [loading, setLoading]         = useState(false);
  const navigate = useNavigate();

  // Student profile se grade aur stdid fetch karo
  useEffect(() => {
    API.get('/api/v1/studentprofile')
      .then(res => {
        const d = res.data?.data || res.data;
        setIdnumber(d.stdid || '');
        setSgrade(d.grade  || '');
      })
      .catch(err => {
        console.error('Profile fetch error:', err);
        Swal.fire({
          icon: 'error',
          title: 'Profile Load Failed',
          text: err.response?.data?.message || 'Could not load your profile. Please login again.',
        });
      });
  }, []);

  // Admin route se teachers ki list fetch karo
  useEffect(() => {
    API.get('/api/auth/getteachersadmin')
      .then(res => {
        const d = res.data?.data || res.data;
        setTeacherList(Array.isArray(d) ? d : []);
      })
      .catch(err => console.error('Teacher list error:', err));
  }, []);

  // Teacher select hone pe subject auto-fill
  useEffect(() => {
    if (teacher && teacherList.length > 0) {
      const selected = teacherList.find(t => t.name === teacher);
      if (selected) setSubject(selected.subject || '');
    }
  }, [teacher, teacherList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Submit Question',
      text: 'Are you sure you want to proceed?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#384D6C',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Submit!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await API.post('/api/feedback/createQ', {
            grade:    sgrade,
            subject:  subject,
            teacher:  teacher,
            sid:      idnumber,
            question: question,
          });
          toast.success('Question submitted successfully!');
          setTimeout(() => navigate('/MyQuestions'), 1500);
        } catch (err) {
          toast.error(err.response?.data?.message || 'Submission failed');
        } finally {
          setLoading(false);
        }
      }
    });
  };

  return (
    <div>
      <Head />
      <Toaster />

      <div className="max-w-3xl mx-auto px-4 mt-6 md:ml-[270px] pb-12">
        <h2 className="text-xl font-bold text-[#063a67] mb-6">
          Connect with your Teachers — Add Question
        </h2>

        <div className="bg-white border-2 border-gray-100 rounded-[20px] shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Grade - auto filled */}
              <div>
                <label className="block text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                  Grade
                </label>
                <input
                  value={sgrade}
                  readOnly
                  placeholder={sgrade ? '' : 'Loading...'}
                  className="w-full p-3 border-2 border-gray-100 bg-gray-50 rounded-xl font-semibold text-gray-700 cursor-not-allowed"
                />
              </div>

              {/* Select Teacher */}
              <div>
                <label className="block text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                  Select Teacher
                </label>
                <select
                  required
                  value={teacher}
                  onChange={e => setTeacher(e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 bg-white rounded-xl font-semibold text-gray-700 focus:outline-none focus:border-[#384D6C]"
                >
                  <option value="">-- Select Teacher --</option>
                  {teacherList.map((t, i) => (
                    <option key={t._id || i} value={t.name}>{t.name}</option>
                  ))}
                </select>
              </div>

              {/* Subject - auto filled on teacher select */}
              <div>
                <label className="block text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <input
                  value={subject}
                  readOnly
                  placeholder="Select a teacher first"
                  className="w-full p-3 border-2 border-gray-100 bg-gray-50 rounded-xl font-semibold text-gray-700 cursor-not-allowed"
                />
              </div>

              {/* Student ID - auto filled */}
              <div>
                <label className="block text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                  Student ID
                </label>
                <input
                  value={idnumber}
                  readOnly
                  placeholder={idnumber ? '' : 'Loading...'}
                  className="w-full p-3 border-2 border-gray-100 bg-gray-50 rounded-xl font-semibold text-gray-700 cursor-not-allowed"
                />
              </div>

            </div>

            {/* Question textarea */}
            <div>
              <label className="block text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                Your Question
              </label>
              <textarea
                required
                rows={5}
                placeholder="Write your question here..."
                value={question}
                onChange={e => setQuestion(e.target.value)}
                className="w-full p-3 border-2 border-gray-200 rounded-xl font-semibold text-gray-700 focus:outline-none focus:border-[#384D6C] resize-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#384D6C] hover:bg-[#283952] disabled:opacity-60 text-white font-bold px-8 py-3 rounded-xl transition-all"
              >
                {loading ? 'Submitting...' : 'Submit Question'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;
