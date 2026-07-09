import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import Head from '../Header/Header';
import API from '../../../api';

function AddClasses() {
  const [teacher,   setTeacher]   = useState('');
  const [classid,   setClassId]   = useState('');
  const [teacherid, setTeacherId] = useState('');
  const [date1,     setDate1]     = useState('');
  const [grade,     setGrade]     = useState('');
  const [subject,   setSubject]   = useState('');
  const [loading,   setLoading]   = useState(false);
  const navigate = useNavigate();

  // Teacher profile fetch
  useEffect(() => {
    API.get('/api/v1/teacherprofile')
      .then(res => {
        const d = res.data?.data || res.data;
        setTeacher(d.name    || '');
        setTeacherId(d.teid  || '');
        setSubject(d.subject || '');
      })
      .catch(err => {
        console.error('Profile fetch error:', err);
        toast.error('Profile load nahi ho saki!');
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Add Class',
      text: 'Are you sure you want to add this class?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#10a1b6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Add!',
    }).then(result => {
      if (result.isConfirmed) submitClass();
    });
  };

  const submitClass = async () => {
    setLoading(true);
    try {
      await API.post('/api/classes/addclass', {
        teacher,
        classid,
        teacherid,
        subject,
        grade,
        date: date1,
      });

      await Swal.fire({
        title: 'Class Added!',
        text: 'Class has been added successfully.',
        icon: 'success',
        confirmButtonColor: '#10a1b6',
      });

      navigate('/TeacherMyClasses');
    } catch (err) {
      console.error(err);
      Swal.fire('Error', err.response?.data?.message || 'Class add karna fail ho gaya!', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      <Head />

      <div className="w-full max-w-[1250px] mx-auto px-4 mt-6 md:pl-[260px]">
        <div className="border-b-2 border-gray-200 pb-4 mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-[#13293d] uppercase">Add New Class</h1>
            <p className="text-xs text-gray-500 font-medium mt-0.5">Create a new class slot in your schedule</p>
          </div>
          <Link to="/TeacherMyClasses">
            <button className="bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold py-2.5 px-4 rounded-xl transition-all">
              ← Back
            </button>
          </Link>
        </div>

        <div className="max-w-[750px] mx-auto bg-white border-2 border-slate-200 rounded-[20px] shadow-sm p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Teacher Name — readonly */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Teacher Name</label>
              <input
                type="text"
                value={teacher}
                readOnly
                placeholder="Loading..."
                className="w-full bg-slate-100 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-sm cursor-not-allowed text-gray-600 outline-none"
              />
            </div>

            {/* Teacher ID — readonly */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Teacher ID</label>
              <input
                type="text"
                value={teacherid}
                readOnly
                placeholder="Loading..."
                className="w-full bg-slate-100 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-sm cursor-not-allowed text-gray-600 outline-none"
              />
            </div>

            {/* Subject — readonly */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Subject</label>
              <input
                type="text"
                value={subject}
                readOnly
                placeholder="Loading..."
                className="w-full bg-slate-100 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-sm cursor-not-allowed text-gray-600 outline-none"
              />
            </div>

            {/* Class ID */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Class ID</label>
              <input
                type="text"
                required
                placeholder="e.g. CLS-101"
                value={classid}
                onChange={e => setClassId(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
              />
            </div>

            {/* Grade */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Grade</label>
              <input
                type="text"
                required
                placeholder="e.g. 10"
                value={grade}
                onChange={e => setGrade(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
              />
            </div>

            {/* Date */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Date</label>
              <input
                type="date"
                required
                value={date1}
                onChange={e => setDate1(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all text-gray-700"
              />
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#10a1b6] hover:bg-[#128a9c] disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-all uppercase tracking-wider text-sm"
              >
                {loading ? 'Adding...' : 'Add Class'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default AddClasses;
