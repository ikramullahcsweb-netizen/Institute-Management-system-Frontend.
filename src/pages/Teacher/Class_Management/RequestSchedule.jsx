import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Head from '../Header/Header';

const BASE_URL = '';

function RequestSchedule() {
  const [teacher, setTeacher] = useState('');
  const [classid, setClassId] = useState('');
  const [teacherid, setTeacherId] = useState('');
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [date3, setDate3] = useState('');
  const [date4, setDate4] = useState('');
  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('');
  const [status, setStatus] = useState('Pending');
  
  const navigator = useNavigate();

  // Fetch Teacher Profile on load
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/v1/teacherprofile`, { withCredentials: true });
        setTeacher(res.data.name);
        setTeacherId(res.data.teacherid || 'CS-TEACH-404');
        setSubject(res.data.subject || 'Database Management Systems & Lab');
      } catch (err) {
        console.error("Profile fetch error:", err);
      }
    };
    fetchProfile();
  }, []);

  const request = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Request Batch Schedule",
      text: "Are you sure you want to submit these dates?",
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

  const submitRequest = async () => {
    try {
      handleClick2(); // Trigger loading toast
      await axios.post(`${BASE_URL}/api/classes/createschedule`, {
        teacher, classid, teacherid, date1, date2, date3, date4, grade, subject, status
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit request.");
    }
  };

  const clearForm = () => {
    setClassId(''); setDate1(''); setDate2(''); setDate3(''); 
    setDate4(''); setGrade(''); setStatus('Pending');
    toast.info('Form cleared.');
  };

  const handleClick2 = () => {
    toast.loading('Processing schedule request...', {
      style: { background: 'black', color: '#ffffff', borderRadius: '10px', border: '2px solid #ffffff' },
    });

    setTimeout(() => {
      toast.dismiss();
      toast.success('Schedule Requested!', {
        style: { background: '#28a745', color: '#ffffff', borderRadius: '10px', border: '2px solid #ffffff' },
        duration: 2000,
      });
      setTimeout(() => navigator('/additionalclasses'), 2500);
    }, 2000);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      <Head />
      <div className="w-full max-w-[1250px] mx-auto px-4 mt-6 md:pl-[260px] transition-all duration-300">
        <div className="border-b-2 border-gray-200 pb-4 mb-8">
          <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">Request Timetable Stream</h1>
        </div>

        <div className="max-w-[800px] mx-auto bg-white border-2 border-slate-200 rounded-[20px] shadow-sm p-8">
          <form onSubmit={request} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-600 uppercase">Assigned Professor</label>
                <input value={teacher} readOnly className="w-full bg-slate-100 border rounded-xl px-4 py-2.5 text-sm" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-600 uppercase">Instructor Reference Code</label>
                <input value={teacherid} readOnly className="w-full bg-slate-100 border rounded-xl px-4 py-2.5 text-sm" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-600 uppercase">Course Code Identifier</label>
                <input required placeholder="e.g., CS-402" value={classid} onChange={(e) => setClassId(e.target.value)} className="w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#10a1b6]" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-600 uppercase">Target Batch / Semester</label>
                <input required placeholder="e.g., 5" value={grade} onChange={(e) => setGrade(e.target.value)} className="w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#10a1b6]" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input type="date" required value={date1} onChange={(e) => setDate1(e.target.value)} className="border rounded-xl px-3 py-2 text-xs" />
              <input type="date" required value={date2} onChange={(e) => setDate2(e.target.value)} className="border rounded-xl px-3 py-2 text-xs" />
              <input type="date" required value={date3} onChange={(e) => setDate3(e.target.value)} className="border rounded-xl px-3 py-2 text-xs" />
              <input type="date" required value={date4} onChange={(e) => setDate4(e.target.value)} className="border rounded-xl px-3 py-2 text-xs" />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button type="button" onClick={clearForm} className="bg-red-500 text-white py-3 px-6 rounded-xl uppercase font-bold text-xs">Clear</button>
              <button type="submit" className="bg-[#10a1b6] text-white py-3 px-6 rounded-xl uppercase font-bold text-xs">Request Schedule</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RequestSchedule;