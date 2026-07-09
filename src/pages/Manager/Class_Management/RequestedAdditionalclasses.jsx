import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import Head from '../Header/Header';
import API from '../../../api';

function RequestedAdditionalClasses() {
  const [classes,  setClasses]  = useState([]);
  const [loading,  setLoading]  = useState(true);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    setLoading(true);
    try {
      const res = await API.get('/api/classes/requestedadditionalclasses/additionalclasses');
      const data = res.data?.data || res.data || [];
      setClasses(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Fetch error:', err);
      toast.error('Data load nahi ho saka');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Delete this record?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, delete!',
    });

    if (result.isConfirmed) {
      try {
        await API.delete(`/api/classes/deleteAdditionalClass/${id}`);
        setClasses(prev => prev.filter(item => item._id !== id));
        toast.success('Record deleted successfully');
      } catch (err) {
        toast.error(err.response?.data?.message || 'Delete fail ho gaya');
      }
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      <Head />

      <div className="w-full max-w-[1250px] mx-auto px-4 mt-6 md:pl-[260px]">

        <div className="border-b-2 border-gray-200 pb-4 mb-6">
          <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
            Requested Additional Classes
          </h1>
          <p className="text-xs text-gray-500 font-medium mt-0.5">
            Review and manage all additional class requests
          </p>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-[20px] shadow-sm p-5 overflow-hidden">
          <div className="overflow-x-auto border border-slate-100 rounded-xl">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-[#13293d] text-white uppercase font-black tracking-wider">
                <tr>
                  <th className="px-4 py-3.5">Teacher</th>
                  <th className="px-4 py-3.5">Class ID</th>
                  <th className="px-4 py-3.5">Subject</th>
                  <th className="px-4 py-3.5">Grade</th>
                  <th className="px-4 py-3.5">Date</th>
                  <th className="px-4 py-3.5">Status</th>
                  <th className="px-4 py-3.5 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-gray-700 font-medium bg-white">
                {loading ? (
                  <tr>
                    <td colSpan="7" className="px-4 py-8 text-center text-gray-400">Loading...</td>
                  </tr>
                ) : classes.length > 0 ? (
                  classes.map(item => (
                    <tr key={item._id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-4 py-3 font-semibold text-[#13293d]">{item.teacher}</td>
                      <td className="px-4 py-3 font-mono text-slate-600">{item.classid || '—'}</td>
                      <td className="px-4 py-3 font-medium">{item.subject}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-100 rounded font-bold">
                          G-{item.grade}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500">{item.date || '—'}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded font-bold text-[11px] uppercase border ${
                          item.status === 'Approved'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}>
                          {item.status || 'Pending'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="bg-red-50 hover:bg-red-600 text-red-600 hover:text-white font-bold px-3 py-1.5 rounded-lg border border-red-200 transition-all"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-4 py-10 text-center text-gray-400 font-semibold">
                      No additional class requests found.
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

export default RequestedAdditionalClasses;
