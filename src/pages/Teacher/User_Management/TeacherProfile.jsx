import React, { useState, useEffect } from 'react';
import axios from 'axios';
import user from './photos/User.png';
import { Link } from 'react-router-dom';
import Head from '../Header/Header';
import { FaUserEdit, FaUserCircle, FaEnvelope, FaPhoneAlt, FaBookOpen, FaQuestionCircle } from 'react-icons/fa';

function TeacherProfile() {
  const [name, setName] = useState("");
  const [teid, setTeid] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contactnumber, setContactnumber] = useState("");
  const [gender, setGender] = useState("");
  const [subject, setSubject] = useState("");
  const [secanswer, setSecAnswer] = useState("");

  useEffect(() => {
    // Yahan hum direct full backend URL use kar rahe hain
       axios.get('http://localhost:3000/api/v1/teacherprofile', {
    withCredentials: true
  })
      .then((res) => {
        setName(res.data.name);
        setTeid(res.data.teid);
        setUsername(res.data.username);
        setEmail(res.data.email);
        setContactnumber(res.data.contactnumber);
        setGender(res.data.gender);
        setSubject(res.data.subject);            
        setSecAnswer(res.data.SecAnswer);  
      })
      .catch((err) => {
        console.error(" error in data fetching:", err);
      });
  }, []);

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <Head />
      <div className="w-full max-w-[1100px] mx-auto px-4 pl-4 md:pl-[290px] pr-4 mt-8 transition-all">
        {/* Profile Content */}
        <div className="w-full bg-[#C9E8EA] border border-slate-200 rounded-[20px] p-5 mb-6">
            <h1 className="text-xl font-black text-slate-800 uppercase flex items-center gap-2">
              <FaUserCircle /> User Profile
            </h1>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-[22px] p-8 shadow-sm space-y-8">
            <div className="flex items-center gap-4">
                <img src={user} alt='Avatar' className="w-20 h-20 rounded-full border-2 border-[#483EA8]" />
                <div>
                    <h2 className="text-lg font-black text-slate-800">{name}</h2>
                    <p className="text-xs font-bold text-slate-400">ID: {teid}</p>
                </div>
            </div>
            
            {/* Displaying Data */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-black text-[#667A8A] uppercase">Email</label>
                    <div className="bg-slate-50 border p-3 rounded-xl">{email}</div>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-black text-[#667A8A] uppercase">Subject</label>
                    <div className="bg-slate-50 border p-3 rounded-xl">{subject}</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherProfile;