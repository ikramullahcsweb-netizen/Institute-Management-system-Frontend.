import React, { useState, useEffect } from 'react';
import userpng from './photos/User.png';
import { useNavigate, Link } from 'react-router-dom';
import Head from '../Header/Header';
import Swal from 'sweetalert2';
import API from '../../../api';
import { FaUserCheck, FaTimesCircle, FaUserCircle } from 'react-icons/fa';

function TeacherProfileEdit() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const [name, setName] = useState('');
  const [teid, setTeid] = useState('');
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('Male');
  const [email, setEmail] = useState('');
  const [contactnumber, setContactnumber] = useState('');
  const [subject, setSubject] = useState('');
  const [secanswer, setSecAnswer] = useState('');

  // Fetch current profile on mount
  useEffect(() => {
    API.get('/api/v1/teacherprofile')
      .then((res) => {
        const d = res.data?.data || res.data;
        setName(d.name || '');
        setTeid(d.teid || '');
        setUsername(d.username || '');
        setGender(d.gender || 'Male');
        setEmail(d.email || '');
        setContactnumber(d.contactnumber || '');
        setSubject(d.subject || '');
        setSecAnswer(d.SecAnswer || '');
      })
      .catch((err) => {
        console.error('Error fetching profile:', err);
      })
      .finally(() => setFetching(false));
  }, []);

  // Submit update
  const updateTeacher = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await API.put('/api/v1/teacherprofileedit', {
        name,
        username,
        gender,
        email,
        contactnumber,
        subject,
        SecAnswer: secanswer,
      });

      await Swal.fire({
        icon: 'success',
        title: 'Profile Updated',
        text: 'Your profile has been updated successfully!',
        confirmButtonColor: '#483EA8'
      });

      navigate('/TeacherProfile');
    } catch (error) {
      console.error('Update error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: error.response?.data?.message || 'Something went wrong!',
        confirmButtonColor: '#483EA8',
      });
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="w-full bg-slate-50 min-h-screen pb-16">
        <Head />
        <div className="w-full max-w-[1100px] mx-auto px-4 pl-4 md:pl-[290px] pr-4 mt-8">
          <p className="text-slate-500 font-bold text-sm">Loading profile data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <Head />
      <div className="w-full max-w-[1100px] mx-auto px-4 pl-4 md:pl-[290px] pr-4 mt-8">
        
        <div className="w-full bg-[#C9E8EA] border border-slate-200 rounded-[20px] p-5 mb-6">
          <h1 className="text-xl font-black text-slate-800 uppercase flex items-center gap-2">
            <FaUserCircle /> Edit User Profile
          </h1>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-[22px] p-6 sm:p-8 shadow-sm">

          {/* Avatar area */}
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
            <img src={userpng} alt="Avatar" className="w-16 h-16 rounded-full border-2 border-[#483EA8]" />
            <div>
              <p className="text-sm font-black text-slate-800">{name || '—'}</p>
              <p className="text-xs text-slate-400 font-bold">ID: {teid || '—'}</p>
            </div>
          </div>

          <form onSubmit={updateTeacher} className="space-y-5">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-black text-[#667A8A] uppercase">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#483EA8] rounded-xl px-4 py-2.5 text-sm outline-none transition-colors"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-black text-[#667A8A] uppercase">Username</label>
                <input
                  type="text"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#483EA8] rounded-xl px-4 py-2.5 text-sm outline-none transition-colors"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-black text-[#667A8A] uppercase">Email</label>
                <input
                  type="email"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#483EA8] rounded-xl px-4 py-2.5 text-sm outline-none transition-colors"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-black text-[#667A8A] uppercase">Contact Number</label>
                <input
                  type="text"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#483EA8] rounded-xl px-4 py-2.5 text-sm outline-none transition-colors"
                  value={contactnumber}
                  onChange={(e) => setContactnumber(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-black text-[#667A8A] uppercase">Subject</label>
                <input
                  type="text"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#483EA8] rounded-xl px-4 py-2.5 text-sm outline-none transition-colors"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-black text-[#667A8A] uppercase">Gender</label>
                <select
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#483EA8] rounded-xl px-4 py-2.5 text-sm outline-none transition-colors"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-black text-[#667A8A] uppercase">Security Answer (City of Birth)</label>
              <input
                type="text"
                className="w-full bg-slate-50 border border-slate-200 focus:border-[#483EA8] rounded-xl px-4 py-2.5 text-sm outline-none transition-colors"
                value={secanswer}
                onChange={(e) => setSecAnswer(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#483EA8] hover:bg-[#392f8a] disabled:opacity-60 text-white py-3 px-6 rounded-xl flex items-center gap-2 uppercase font-black text-xs transition-colors"
              >
                <FaUserCheck /> {loading ? 'Saving...' : 'Save Changes'}
              </button>

              <Link to="/TeacherProfile">
                <button type="button" className="bg-slate-200 hover:bg-slate-300 text-slate-700 py-3 px-6 rounded-xl uppercase font-black text-xs flex items-center gap-2 transition-colors">
                  <FaTimesCircle /> Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TeacherProfileEdit;
