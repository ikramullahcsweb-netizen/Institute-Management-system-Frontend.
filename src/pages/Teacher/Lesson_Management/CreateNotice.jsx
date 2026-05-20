import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function CreateNotice() {
  const navigate = useNavigate();
  const [topic, setTopic] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [description, setDescription] = useState('');
  const [grade, setGrade] = useState('');

  const submit = (e) => {
    e.preventDefault();
    Swal.fire('Notice Created!', 'Static notice added successfully.', 'success')
      .then(() => navigate('/myclasses'));
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 md:pl-[276px] px-4 pt-8">
      <div className="max-w-[850px] mx-auto bg-white border border-slate-200 rounded-[20px] p-6 sm:p-10 shadow-sm">
        <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight mb-6">Add New Notice (Static)</h2>
        <form onSubmit={submit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-600 uppercase">Grade</label>
              <select required value={grade} onChange={(e) => setGrade(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none">
                <option value="">Select Grade</option>
                {['6', '7', '8', '9', '10', '11'].map(g => <option key={g} value={g}>Grade {g}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-600 uppercase">Notice Topic</label>
              <input type="text" required placeholder="Enter topic" value={topic} onChange={(e) => setTopic(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600 uppercase">Date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600 uppercase">Description</label>
            <textarea required placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none h-32 resize-none" />
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-slate-100">
            <Link to="/myclasses" className="bg-slate-500 hover:bg-slate-600 text-white text-xs font-bold py-3 px-8 rounded-xl uppercase">Cancel</Link>
            <button type="submit" className="bg-[#483EA8] hover:bg-[#392f8a] text-white text-xs font-bold py-3 px-8 rounded-xl uppercase">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNotice;