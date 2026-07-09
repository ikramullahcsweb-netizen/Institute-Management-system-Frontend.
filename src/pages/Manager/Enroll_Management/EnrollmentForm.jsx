import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Head from '../Header/Header';
import API from '../../../api';

const EnrollmentForm = () => {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [classes,  setClasses]  = useState([]);

  const [studentId, setStudentId] = useState('');
  const [classId,   setClassId]   = useState('');
  const [teacherId, setTeacherId] = useState('');
  const [subject,   setSubject]   = useState('');
  const [teacher,   setTeacher]   = useState('');
  const [grade,     setGrade]     = useState('');
  const [loading,   setLoading]   = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Students list — admin route use karo
        const studentsRes = await API.get('/api/auth/getstudentsadmin');
        const studentsData = studentsRes.data?.data || studentsRes.data || [];
        setStudents(Array.isArray(studentsData) ? studentsData : []);

        // Classes/Subjects list
        const classesRes = await API.get('/api/subjects/viewSubject');
        const classesData = classesRes.data?.data || classesRes.data || [];
        setClasses(Array.isArray(classesData) ? classesData : []);

      } catch (error) {
        console.error('Form data fetch error:', error);
        toast.error('Form data load nahi ho saka');
      }
    };

    fetchData();
  }, []);

  // Class select hone pe teacher/subject/grade auto fill
  const handleClassChange = (e) => {
    const selectedId = e.target.value;
    setClassId(selectedId);

    const selected = classes.find(c => c.sbid === selectedId);
    if (selected) {
      setTeacherId(selected.teid        || '');
      setSubject(selected.subjectname   || '');
      setTeacher(selected.teachername   || '');
      setGrade(selected.grade           || '');
    } else {
      setTeacherId(''); setSubject(''); setTeacher(''); setGrade('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!studentId || !classId) {
      toast.error('Student aur Class select karna zaroori hai');
      return;
    }

    setLoading(true);
    try {
      await API.post('/api/enrollments/classenrollments', {
        studentId,
        classId,
        teacherid: teacherId,
        subject,
        grade,
        time: new Date().toISOString(),
      });

      toast.success('Enrollment created successfully!');
      setStudentId(''); setClassId(''); setTeacherId('');
      setSubject(''); setTeacher(''); setGrade('');
      navigate('/managerenroll');
    } catch (error) {
      console.error('Enrollment error:', error);
      toast.error(error.response?.data?.message || 'Enrollment fail ho gaya');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      <Head />

      <div className="w-full md:pl-[250px]">
        <div className="w-full max-w-[600px] mx-auto px-3 sm:px-4 mt-4 sm:mt-8">

          <div className="border-b-2 border-gray-200 pb-3 mb-6">
            <h1 className="text-lg sm:text-2xl font-black text-[#13293d] tracking-tight uppercase">
              New Course Enrollment
            </h1>
            <p className="text-xs text-gray-500 font-medium">Assign students to active academic class frames</p>
          </div>

          <div className="bg-white border-2 border-slate-200 rounded-[20px] shadow-sm p-4 sm:p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Student Selector */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Select Student
                </label>
                <select
                  required
                  value={studentId}
                  onChange={e => setStudentId(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all text-gray-800 font-medium"
                >
                  <option value="">-- Select Student --</option>
                  {students.map(s => (
                    <option key={s._id} value={s.stdid || s.username}>
                      {s.name} ({s.stdid || s.username})
                    </option>
                  ))}
                </select>
              </div>

              {/* Class Selector */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Select Class
                </label>
                <select
                  required
                  value={classId}
                  onChange={handleClassChange}
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all text-gray-800 font-medium"
                >
                  <option value="">-- Select Class --</option>
                  {classes.map(c => (
                    <option key={c._id} value={c.sbid}>
                      {c.sbid} — {c.subjectname}
                    </option>
                  ))}
                </select>
              </div>

              <hr className="border-slate-100" />

              {/* Auto-filled fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50/60 border border-slate-100 p-4 rounded-xl">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Teacher ID</label>
                  <input value={teacherId} readOnly className="w-full bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-xs text-gray-500 font-medium cursor-not-allowed outline-none" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Teacher Name</label>
                  <input value={teacher} readOnly className="w-full bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-xs text-gray-500 font-medium cursor-not-allowed outline-none" />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Subject</label>
                  <input value={subject} readOnly className="w-full bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-xs text-gray-500 font-medium cursor-not-allowed outline-none" />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Grade</label>
                  <input value={grade ? `Grade ${grade}` : ''} readOnly className="w-full bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-xs text-gray-500 font-bold cursor-not-allowed outline-none" />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => navigate('/managerenroll')}
                  className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-gray-600 text-sm font-bold py-2.5 px-6 rounded-xl transition-all"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:flex-1 bg-[#10a1b6] hover:bg-[#1b5592] disabled:opacity-60 text-white text-sm font-bold py-2.5 px-8 rounded-xl shadow-md transition-all uppercase tracking-wider"
                >
                  {loading ? 'Submitting...' : 'Submit Enrollment'}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentForm;
