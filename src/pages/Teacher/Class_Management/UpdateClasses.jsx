import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import Head from '../Header/Header';

function UpdateClasses() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const API_URL = ""; // Vite proxy use karta hai

  const [formData, setFormData] = useState({
    teacher: '',
    classid: '',
    teacherid: '',
    subject: '',
    time: '',
    date: '',
    grade: ''
  });

  // Backend se data fetch karna
  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/classes/getClass/${id}`, { withCredentials: true });
        setFormData(res.data);
      } catch (err) {
        console.error("Error fetching class data:", err);
      }
    };
    fetchClassData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const update = async (e) => {
    e.preventDefault();
    
    try {
      await axios.put(`${API_URL}/updateclass/${id}`, formData);
      
      Swal.fire({
        title: "Schedule Updated",
        text: "The class allocation has been updated successfully.",
        icon: "success",
        confirmButtonColor: "#10a1b6"
      }).then(() => {
        navigate('/viewclasses');
      });
    } catch (err) {
      Swal.fire("Error", "Failed to update record", "error");
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      <Head />

      <div className="w-full max-w-[1250px] mx-auto px-4 mt-6 md:pl-[260px] transition-all duration-300">
        <div className="border-b-2 border-gray-200 pb-4 mb-8">
          <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
            Modify Course Settings
          </h1>
        </div>

        <div className="max-w-[750px] mx-auto bg-white border-2 border-slate-200 rounded-[20px] shadow-sm p-6 sm:p-8">
          <form onSubmit={update} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Assigned Instructor" name="teacher" value={formData.teacher} onChange={handleChange} />
              <InputField label="Instructor Identifier Code" name="teacherid" value={formData.teacherid} onChange={handleChange} />
            </div>

            <InputField label="Computing Subject Module Title" name="subject" value={formData.subject} onChange={handleChange} />
            <InputField label="Course Allocation Reference (Class ID)" name="classid" value={formData.classid} onChange={handleChange} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Target Hourly Slot Range" name="time" value={formData.time} onChange={handleChange} />
              <InputField label="Target Calendar Date Log" name="date" value={formData.date} onChange={handleChange} />
            </div>

            <InputField label="Target Semester Batch" name="grade" value={formData.grade} onChange={handleChange} />

            <div className="flex items-center justify-between pt-4 gap-4 border-t border-slate-100">
              <Link to="/viewclasses" className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-3 px-6 rounded-xl transition-all uppercase">
                Cancel
              </Link>
              <button type="submit" className="bg-[#10a1b6] hover:bg-[#128a9c] text-white text-xs font-bold py-3 px-6 rounded-xl transition-all uppercase">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Chota component code ko clean rakhne ke liye
const InputField = ({ label, name, value, onChange }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">{label}</label>
    <input 
      type="text" 
      name={name}
      required
      value={value} 
      onChange={onChange}
      className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none transition-all"
    />
  </div>
);

export default UpdateClasses;