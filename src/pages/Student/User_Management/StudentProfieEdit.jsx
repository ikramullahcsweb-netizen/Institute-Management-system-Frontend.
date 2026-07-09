import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Head from '../Header/Header';
import Swal from 'sweetalert2';
import API from '../../../api';
import { FaUserCircle, FaSave, FaTimes, FaIdCard, FaVenusMars, FaEnvelope, FaPhone, FaUserShield, FaCity } from 'react-icons/fa';

function StudentProfileEdit() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('Male');
  const [email, setEmail] = useState('');
  const [contactnumber, setContactnumber] = useState('');
  const [parentname, setParentName] = useState('');
  const [parentphonenumber, setParentPhonenumber] = useState('');
  const [secanswer, setSecAnswer] = useState('');

  // Fetch current profile data on mount
  useEffect(() => {
    API.get('/api/v1/studentprofile')
      .then((res) => {
        // Backend ApiResponse: { statusCode, data, message }
        const d = res.data?.data || res.data;
        setName(d.name || '');
        setUsername(d.username || '');
        setGender(d.gender || 'Male');
        setEmail(d.email || '');
        setContactnumber(d.contactnumber || '');
        setParentName(d.parentname || '');
        setParentPhonenumber(d.parentphonenumber || '');
        setSecAnswer(d.SecAnswer || d.secanswer || '');
      })
      .catch((err) => {
        console.error('Error fetching profile:', err);
      })
      .finally(() => setFetching(false));
  }, []);

  // Submit updated profile
  const updateStudent = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await API.put('/api/v1/studentprofileedit', {
        name,
        username,
        gender,
        email,
        contactnumber,
        parentname,
        parentphonenumber,
        SecAnswer: secanswer,
      });

      await Swal.fire({
        icon: 'success',
        title: 'Profile Updated',
        text: 'Your profile has been updated successfully.',
        confirmButtonColor: '#384D6C',
        confirmButtonText: 'View Profile'
      });

      navigate('/StudentProfile');
    } catch (error) {
      console.error('Update error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: error.response?.data?.message || 'Could not update profile. Please try again.',
        confirmButtonColor: '#384D6C',
      });
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans antialiased">
        <Head />
        <div className="w-full max-w-[1300px] mx-auto px-4 pl-4 md:pl-[290px] mt-8">
          <p className="text-slate-500 font-bold text-sm">Loading profile data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans antialiased">
      <Head />

      <div className="w-full max-w-[1300px] mx-auto px-4 pl-4 md:pl-[290px] mt-8 transition-all space-y-6">
        
        {/* Page Title */}
        <div className="border-b-2 border-slate-200 pb-3">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
            <FaIdCard className="text-[#384D6C]" /> Edit Student Profile
          </h2>
        </div>

        {/* Profile Card */}
        <div className="bg-white border-2 border-slate-900 rounded-2xl p-5 md:p-6 shadow-sm flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#C9E8EA] flex items-center justify-center text-[#384D6C] shrink-0">
            <FaUserCircle className="w-12 h-12" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900 uppercase">{name || '—'}</h3>
            <p className="text-xs text-slate-500 font-bold uppercase">Student Account</p>
          </div>
        </div>

        {/* Edit Form */}
        <div className="bg-white border-2 border-slate-900 rounded-2xl p-5 md:p-8 shadow-sm">
          <form onSubmit={updateStudent} className="space-y-6">
            
            {/* Name & Username */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-700 tracking-wider">Full Name</label>
                <input 
                  type="text"
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none transition-colors"
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-700 tracking-wider">Username</label>
                <input 
                  type="text"
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none transition-colors"
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Gender */}
            <div className="space-y-2 border-y border-dashed border-slate-200 py-4">
              <span className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1">
                <FaVenusMars className="text-slate-400" /> Gender
              </span>
              <div className="flex items-center gap-6 bg-slate-50 p-3 rounded-xl border border-slate-200 w-fit">
                <label className="flex items-center gap-2 cursor-pointer font-bold text-xs text-slate-800">
                  <input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} className="w-4 h-4" />
                  Male
                </label>
                <label className="flex items-center gap-2 cursor-pointer font-bold text-xs text-slate-800">
                  <input type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} className="w-4 h-4" />
                  Female
                </label>
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1">
                  <FaEnvelope className="text-slate-400 text-[10px]" /> Email Address
                </label>
                <input 
                  type="email"
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none transition-colors"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1">
                  <FaPhone className="text-slate-400 text-[10px]" /> Contact Number
                </label>
                <input 
                  type="text"
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none transition-colors"
                  value={contactnumber} 
                  onChange={(e) => setContactnumber(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Parent Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border-t border-slate-100 pt-4">
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1">
                  <FaUserShield className="text-slate-400 text-[10px]" /> Parent / Guardian Name
                </label>
                <input 
                  type="text"
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none transition-colors"
                  value={parentname} 
                  onChange={(e) => setParentName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1">
                  <FaPhone className="text-slate-400 text-[10px]" /> Parent Phone Number
                </label>
                <input 
                  type="text"
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none transition-colors"
                  value={parentphonenumber} 
                  onChange={(e) => setParentPhonenumber(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Security Answer */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <label className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1">
                <FaCity className="text-slate-400" /> Security Answer
              </label>
              <div className="text-[10px] text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg max-w-fit font-bold uppercase tracking-wide mb-1">
                Security Question: What city were you born in?
              </div>
              <input 
                type="text"
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none transition-colors"
                value={secanswer} 
                onChange={(e) => setSecAnswer(e.target.value)}
                required
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t-2 border-slate-100">
              <button 
                type="submit" 
                disabled={loading}
                className="w-full sm:w-auto bg-[#384D6C] hover:bg-[#283952] disabled:opacity-60 text-white text-xs font-black uppercase tracking-widest px-6 py-3.5 rounded-xl border-2 border-slate-950 flex items-center justify-center gap-1.5 transition-all"
              >
                <FaSave /> {loading ? 'Saving...' : 'Save Changes'}
              </button>

              <Link 
                to="/StudentProfile" 
                className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-black uppercase tracking-widest px-6 py-3.5 rounded-xl border-2 border-slate-300 flex items-center justify-center gap-1.5 transition-colors text-center"
              >
                <FaTimes /> Cancel
              </Link>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default StudentProfileEdit;
