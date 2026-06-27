import React, { useState, useEffect } from 'react';
import userpng from './photos/User.png';
import { useNavigate, Link } from 'react-router-dom';
import Head from '../Header/Header';
import Swal from 'sweetalert2';
import { FaUserCheck, FaTimesCircle, FaUserCircle, FaEnvelope, FaPhoneAlt, FaBookOpen, FaQuestionCircle } from 'react-icons/fa';

function TeacherProfileEdit() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Form States
  const [name, setName] = useState("");
  const [teid, setTeid] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [contactnumber, setContactnumber] = useState("");
  const [subject, setSubject] = useState("");
  const [secanswer, setSecAnswer] = useState("");

  // 1. Fetch current profile data on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Replace with your actual GET API endpoint
        const response = await fetch('/api/teacher/profile'); 
        const data = await response.json();
        
        setName(data.name);
        setTeid(data.teid);
        setUsername(data.username);
        setGender(data.gender);
        setEmail(data.email);
        setContactnumber(data.contactnumber);
        setSubject(data.subject);
        setSecAnswer(data.secanswer);
      } catch (err) {
        console.error("Failed to fetch:", err);
      }
    };
    fetchProfile();
  }, []);

  // 2. Handle Update Submission
  const updateTeacher = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/teacher/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, username, gender, email, contactnumber, subject, secanswer })
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Profile updated successfully!',
          confirmButtonColor: '#483EA8'
        }).then(() => navigate('/teacherprofile'));
      } else {
        throw new Error('Update Failed');
      }
    } catch (error) {
      Swal.fire({ icon: 'error', title: 'Oops...', text: 'Something went wrong!' });
    } finally {
      setLoading(false);
    }
  };

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
          <form onSubmit={updateTeacher} className="space-y-6">
            {/* Form Fields (Mapped to State) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-black text-[#667A8A] uppercase">Full Name</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm" 
                       value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              {/* Add remaining inputs here using the same pattern... */}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button 
                type="submit"
                disabled={loading}
                className="bg-[#483EA8] hover:bg-[#392f8a] text-white py-3 px-6 rounded-xl flex items-center gap-2 uppercase font-black"
              >
                {loading ? 'Saving...' : <><FaUserCheck /> Save Changes</>}
              </button>

              <Link to='/teacherprofile'>
                <button type="button" className="bg-slate-200 hover:bg-slate-300 text-slate-700 py-3 px-6 rounded-xl uppercase font-black">
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