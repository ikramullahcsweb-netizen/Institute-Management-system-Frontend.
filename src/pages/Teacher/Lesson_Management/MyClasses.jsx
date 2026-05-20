import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Head from '../Header/Header';
import Swal from 'sweetalert2';
import { FaArrowCircleDown, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle, IoIosArrowDroprightCircle } from "react-icons/io";

function MyClasses() {
  const [searchTerm, setSearchTerm] = useState('');

  // Front-end UI Test karne ke liye Pure Static Data Sets
  const [notices, setNotices] = useState([
    { _id: 'n1', grade: 8, date: '2026-05-18', topic: 'Midterm Exam Notice', description: 'Syllabus includes chapters 1 to 4.' },
    { _id: 'n2', grade: 10, date: '2026-05-19', topic: 'Practical Submission', description: 'Bring files by Friday afternoon.' }
  ]);

  const [materials, setMaterials] = useState([
    { _id: 'm1', grade: 8, lesson_date: '2026-05-15', lesson_topic: 'Algebra Basics Lecture Note', lesson_description: 'PDF covering foundational formulas.' },
    { _id: 'm2', grade: 11, lesson_date: '2026-05-17', lesson_topic: 'Organic Chemistry Presentation', lesson_description: 'PPT deck covering Hydrocarbons.' }
  ]);

  const handleDeleteNotice = (id) => {
    Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#483EA8', confirmButtonText: 'Delete' })
      .then((r) => { if (r.isConfirmed) setNotices(prev => prev.filter(n => n._id !== id)); });
  };

  const handleDeleteMaterial = (id) => {
    Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#483EA8', confirmButtonText: 'Delete' })
      .then((r) => { if (r.isConfirmed) setMaterials(prev => prev.filter(m => m._id !== id)); });
  };

  const filteredMaterials = materials.filter(m => m.lesson_topic.toLowerCase().includes(searchTerm.toLowerCase()));

  const noticesByGrade = {};
  const materialsByGrade = {};
  notices.forEach(n => { (noticesByGrade[n.grade] = noticesByGrade[n.grade] || []).push(n); });
  filteredMaterials.forEach(m => { (materialsByGrade[m.grade] = materialsByGrade[m.grade] || []).push(m); });

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <Head />
      <div className="w-full max-w-[1350px] mx-auto px-4 mt-8 md:pl-[276px] transition-all">
        
        {/* Static Header Badge */}
        <div className="w-full bg-[#C9E8EA] border rounded-[20px] p-6 mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black text-slate-800 uppercase">Mathematics & Science</h1>
            <p className="text-xs text-slate-600 font-bold">Teacher: Static Prof. (Frontend Dev Mode)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Static Notices Column Layout */}
          <div className="bg-white border-2 border-slate-200 rounded-[22px] p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-black uppercase">Notices</h2>
              <Link to="/createnotice" className="bg-[#667A8A] text-white text-xs font-bold py-2 px-4 rounded-xl flex items-center gap-2"><IoIosAddCircle /> Add Notice</Link>
            </div>
            {Array.from({ length: 6 }, (_, i) => i + 6).map(grade => noticesByGrade[grade] && (
              <div key={grade} className="mb-4 bg-slate-50 p-4 rounded-xl">
                <h3 className="text-xs font-black text-[#191970] uppercase mb-2">Grade {grade}</h3>
                {noticesByGrade[grade].map(n => (
                  <div key={n._id} className="bg-white border p-3 rounded-lg mb-2">
                    <h4 className="text-sm font-bold">{n.topic}</h4>
                    <p className="text-xs text-slate-500 mb-2">{n.description}</p>
                    <div className="flex gap-2">
                      <Link to={`/editnotice/${n._id}`} className="bg-[#483EA8] text-white text-[11px] px-2 py-1 rounded">Edit</Link>
                      <button onClick={() => handleDeleteNotice(n._id)} className="bg-[#8A6675] text-white text-[11px] px-2 py-1 rounded">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Static Lesson Materials Column Layout */}
          <div className="bg-white border-2 border-slate-200 rounded-[22px] p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-black uppercase">Lesson Materials</h2>
              <Link to="/addmaterial" className="bg-[#667A8A] text-white text-xs font-bold py-2 px-4 rounded-xl flex items-center gap-2"><IoIosAddCircle /> Add Material</Link>
            </div>
            <input type="search" placeholder="Search Materials..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full bg-slate-50 border p-2 text-sm rounded-xl mb-4 outline-none" />
            {Array.from({ length: 6 }, (_, i) => i + 6).map(grade => materialsByGrade[grade] && (
              <div key={grade} className="mb-4 bg-slate-50 p-4 rounded-xl">
                <h3 className="text-xs font-black text-[#191970] uppercase mb-2">Grade {grade}</h3>
                {materialsByGrade[grade].map(m => (
                  <div key={m._id} className="bg-white border p-3 rounded-lg mb-2">
                    <h4 className="text-sm font-bold">{m.lesson_topic}</h4>
                    <p className="text-xs text-slate-500 mb-2">{m.lesson_description}</p>
                    <div className="flex gap-2 mt-2">
                      <button onClick={() => alert('Static Simulation: Open File Window Link Mocked')} className="bg-[#3EA87B] text-white text-[11px] px-2 py-1 rounded">View</button>
                      <Link to={`/editmaterial/${m._id}`} className="bg-[#483EA8] text-white text-[11px] px-2 py-1 rounded">Edit</Link>
                      <button onClick={() => handleDeleteMaterial(m._id)} className="bg-[#8A6675] text-white text-[11px] px-2 py-1 rounded">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default MyClasses;