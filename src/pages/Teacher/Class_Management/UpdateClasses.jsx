import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Head from '../Header/Header';
import API from '../../../api';

function UpdateClasses() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    teacher: '', classid: '', teacherid: '',
    subject: '', time: '', date: '', grade: ''
  });
  const [loading,  setLoading]  = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    API.get(`/api/classes/getClass/${id}`)
      .then(res => {
        const d = res.data?.data || res.data;
        setFormData({
          teacher:   d.teacher   || '',
          classid:   d.classid   || '',
          teacherid: d.teacherid || '',
          subject:   d.subject   || '',
          time:      d.time      || '',
          date:      d.date      || '',
          grade:     d.grade     || '',
        });
      })
      .catch(err => {
        console.error('Fetch error:', err);
        Swal.fire('Error', 'Class data load nahi ho saka', 'error');
      })
      .finally(() => setFetching(false));
  }, [id]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.put(`/api/classes/updateClass/${id}`, formData);
      await Swal.fire({
        title: 'Updated!',
        text: 'Class updated successfully.',
        icon: 'success',
        confirmButtonColor: '#10a1b6',
      });
      navigate('/TeacherMyClasses');
    } catch (err) {
      Swal.fire('Error', err.response?.data?.message || 'Update fail ho gaya', 'error');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="w-full bg-slate-50 min-h-screen">
        <Head />
        <div className="md:pl-[260px] pt-8 px-4">
          <p className="text-gray-400 font-semibold">Loading class data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      <Head />
      <div className="w-full max-w-[1250px] mx-auto px-4 mt-6 md:pl-[260px]">
        <div className="border-b-2 border-gray-200 pb-4 mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">Update Class</h1>
          <Link to="/TeacherMyClasses">
            <button className="bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold py-2.5 px-4 rounded-xl">← Back</button>
          </Link>
        </div>

        <div className="max-w-[750px] mx-auto bg-white border-2 border-slate-200 rounded-[20px] shadow-sm p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Teacher Name"   name="teacher"   value={formData.teacher}   onChange={handleChange} />
              <Field label="Teacher ID"     name="teacherid" value={formData.teacherid} onChange={handleChange} />
              <Field label="Subject"        name="subject"   value={formData.subject}   onChange={handleChange} />
              <Field label="Class ID"       name="classid"   value={formData.classid}   onChange={handleChange} />
              <Field label="Time"           name="time"      value={formData.time}      onChange={handleChange} />
              <Field label="Date"           name="date"      value={formData.date}      onChange={handleChange} type="date" />
              <Field label="Grade"          name="grade"     value={formData.grade}     onChange={handleChange} />
            </div>

            <div className="flex gap-3 pt-4 border-t border-slate-100">
              <button type="submit" disabled={loading}
                className="flex-1 bg-[#10a1b6] hover:bg-[#128a9c] disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-all uppercase text-xs tracking-wider">
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
              <Link to="/TeacherMyClasses" className="flex-1">
                <button type="button"
                  className="w-full bg-slate-100 hover:bg-slate-200 text-gray-600 font-bold py-3 rounded-xl transition-all uppercase text-xs tracking-wider">
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const Field = ({ label, name, value, onChange, type = 'text' }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">{label}</label>
    <input
      type={type} name={name} value={value} onChange={onChange} required
      className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all text-gray-800"
    />
  </div>
);

export default UpdateClasses;