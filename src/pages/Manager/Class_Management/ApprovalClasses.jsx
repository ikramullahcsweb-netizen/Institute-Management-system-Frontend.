import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import Head from '../Header/Header';
import API from '../../../api';

function ApprovalClasses() {
  const [classes,    setClasses]    = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading,    setLoading]    = useState(true);

  useEffect(() => {
    API.get('/api/classes/teachermyclasses/addclasses')
      .then(res => {
        const data = res.data?.data || res.data || [];
        setClasses(Array.isArray(data) ? data : []);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleApprove = async (id) => {
    const result = await Swal.fire({
      title: 'Approve this class?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#10a1b6',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, Approve!',
    });

    if (result.isConfirmed) {
      try {
        await API.put(`/api/classes/updateClass/${id}`, { status: 'Approved' });
        setClasses(prev =>
          prev.map(c => c._id === id ? { ...c, status: 'Approved' } : c)
        );
        toast.success('Class approved successfully!');
      } catch (err) {
        toast.error(err.response?.data?.message || 'Approval fail ho gaya');
      }
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Delete this class?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, Delete!',
    });

    if (result.isConfirmed) {
      try {
        await API.delete(`/api/classes/deleteClass/${id}`);
        setClasses(prev => prev.filter(c => c._id !== id));
        toast.success('Class deleted!');
      } catch (err) {
        toast.error(err.response?.data?.message || 'Delete fail ho gaya');
      }
    }
  };

  const filtered = classes.filter(c =>
    (c.teacher  || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (c.classid  || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (c.subject  || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      <Head />

      <div className="w-full max-w-[1250px] mx-auto px-4 mt-6 md:pl-[260px]">

        <div className="border-b-2 border-gray-200 pb-4 mb-6">
          <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
            Manage & Approve Classes
          </h1>
          <p className="text-xs text-gray-500 font-medium mt-0.5">
            View all classes and approve or delete them
          </p>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-[20px] shadow-sm p-5">
          <input
            type="text"
            placeholder="Search by teacher, class ID or subject..."
            className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all mb-5"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />

          <div className="overflow-x-auto border border-slate-100 rounded-xl">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-[#13293d] text-white uppercase font-black tracking-wider">
                <tr>
                  <th className="px-4 py-3.5">Teacher</th>
                  <th className="px-4 py-3.5">Class ID</th>
                  <th className="px-4 py-3.5">Subject</th>
                  <th className="px-4 py-3.5">Grade</th>
                  <th className="px-4 py-3.5">Date</th>
                  <th className="px-4 py-3.5 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-gray-700 font-medium bg-white">
                {loading ? (
                  <tr>
                    <td colSpan="6" className="px-4 py-8 text-center text-gray-400">Loading classes...</td>
                  </tr>
                ) : filtered.length > 0 ? (
                  filtered.map(c => (
                    <tr key={c._id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 font-semibold text-[#13293d]">{c.teacher}</td>
                      <td className="px-4 py-3 font-mono text-slate-600">{c.classid}</td>
                      <td className="px-4 py-3">
                        <span className="bg-purple-50 text-purple-700 border border-purple-100 px-2 py-0.5 rounded font-bold text-[11px] uppercase">
                          {c.subject}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-bold text-[#10a1b6]">G-{c.grade}</td>
                      <td className="px-4 py-3 text-gray-500">{c.date || '—'}</td>
                      <td className="px-4 py-3 text-center flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleApprove(c._id)}
                          className="bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white font-bold px-3 py-1.5 rounded-lg border border-emerald-200 transition-all"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleDelete(c._id)}
                          className="bg-red-50 hover:bg-red-600 text-red-600 hover:text-white font-bold px-3 py-1.5 rounded-lg border border-red-200 transition-all"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-4 py-10 text-center text-gray-400 font-semibold">
                      No classes found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApprovalClasses;
