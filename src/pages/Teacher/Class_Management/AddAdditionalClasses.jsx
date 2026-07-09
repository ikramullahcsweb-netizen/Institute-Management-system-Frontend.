import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'; // Import axios
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from '../Header/Header';

function AddAdditionalClasses() {
  const [teacher, setTeacher] = useState('');
  const [classid, setClassId] = useState('');
  const [teacherid, setTeacherId] = useState('');
  const [date1, setDate1] = useState('');
  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('');
  
  const navigator = useNavigate();
  const BASE_URL = ''; // Vite proxy use karta hai

  // 1. API Integration: Teacher Profile Fetching
  useEffect(() => {
    axios.get(`${BASE_URL}/api/v1/teacherprofile`, { withCredentials: true })
      .then((res) => {
        setTeacher(res.data.name);
        setTeacherId(res.data.teid);
        setSubject(res.data.subject);
      })
      .catch((err) => {
        console.error("Error fetching profile:", err);
        toast.error("Profile load nahi ho saki!");
      });
  }, []);

  const request = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Add Additional Class",
      text: "Are you sure you want to request this extra lecture slot?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#10a1b6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, submit request!",
    }).then((result) => {
      if (result.isConfirmed) {
        submitRequest(); 
      }
    });
  };

  // 2. API Integration: Data Submission
  const submitRequest = async () => {
    try {
      const payload = { teacher, date: date1, grade, subject, classid, teacherid, status: 'Pending' };
      await axios.post(`${BASE_URL}/api/classes/createaddadditionalclass`, payload, { withCredentials: true });
      
      Swal.fire({
        title: "Request Processed!",
        text: "Lecture entry has been queued successfully.",
        icon: "success",
        confirmButtonColor: "#10a1b6"
      });
      simulateToasts();
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Request submission failed!", "error");
    }
  };

  const simulateToasts = () => {
    toast.success('Additional Class Added Successfully!', { duration: 2000 });
    setTimeout(() => navigator('/requestedadditionalclasses'), 2200);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-10 font-sans">
      <Head />
      <div className="w-full max-w-[1250px] mx-auto px-4 mt-6 md:pl-[260px]">
        <div className="border-b-2 border-gray-200 pb-4 mb-8">
          <h1 className="text-2xl font-black text-[#13293d] uppercase">Schedule Computing Slot</h1>
        </div>

        <div className="max-w-[750px] mx-auto bg-white border-2 border-slate-200 rounded-[20px] p-8">
          <form onSubmit={request} className="space-y-5">
            {/* Teacher Details (Read Only) */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-600 uppercase">Assigned Professor</label>
              <input type="text" value={teacher} readOnly className="w-full bg-slate-100 border-2 rounded-xl px-4 py-2.5 cursor-not-allowed" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-600 uppercase">Course / Lab ID Code</label>
              <input type="text" required value={classid} onChange={(e) => setClassId(e.target.value)} className="w-full bg-slate-50 border-2 rounded-xl px-4 py-2.5" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-600 uppercase">Faculty Instructor Reference ID</label>
              <input type="text" value={teacherid} readOnly className="w-full bg-slate-100 border-2 rounded-xl px-4 py-2.5 cursor-not-allowed" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-600 uppercase">Target Batch / Semester</label>
              <input type="text" required value={grade} onChange={(e) => setGrade(e.target.value)} className="w-full bg-slate-50 border-2 rounded-xl px-4 py-2.5" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-600 uppercase">Target Calendar Date</label>
              <input type="date" required value={date1} onChange={(e) => setDate1(e.target.value)} className="w-full bg-slate-50 border-2 rounded-xl px-4 py-2.5" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-600 uppercase">Computing Subject Module</label>
              <input type="text" value={subject} readOnly className="w-full bg-slate-100 border-2 rounded-xl px-4 py-2.5 cursor-not-allowed" />
            </div>

            <button type="submit" className="w-full bg-[#10a1b6] hover:bg-[#128a9c] text-white font-bold py-3 rounded-xl transition-all uppercase">
              Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAdditionalClasses;