import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import Head from '../Header/Header';
import API from '../../../api';

function TeacherMyClasses() {
  const [addclasses,   setAddclasses]   = useState([]);
  const [searchQuery,  setSearchQuery]  = useState('');
  const [loading,      setLoading]      = useState(true);
  const [teacherName,  setTeacherName]  = useState('');

  useEffect(() => {
    // Teacher name fetch karo taake sirf apni classes filter ho
    API.get('/api/v1/teacherprofile')
      .then(res => {
        const d = res.data?.data || res.data;
        setTeacherName(d.name || '');
      })
      .catch(err => console.error(err));

    // Sab classes fetch karo
    API.get('/api/classes/teachermyclasses/addclasses')
      .then(res => {
        // Backend ApiResponse: { statusCode, data: [...], message }
        const data = res.data?.data || res.data || [];
        setAddclasses(Array.isArray(data) ? data : []);
      })
      .catch(err => {
        console.error('Error fetching classes:', err);
        toast.error('Classes load nahi ho sake');
      })
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Delete Class?',
      text: 'Are you sure you want to delete this class slot?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#384D6C',
      confirmButtonText: 'Yes, delete!',
    });

    if (result.isConfirmed) {
      try {
        await API.delete(`/api/classes/deleteClass/${id}`);
        setAddclasses(prev => prev.filter(item => item._id !== id));
        toast.success('Class deleted successfully!');
      } catch (err) {
        console.error('Delete error:', err);
        toast.error(err.response?.data?.message || 'Delete fail ho gaya');
      }
    }
  };

  // Apni classes filter karo + search
  const filteredClasses = addclasses.filter(c => {
    const matchTeacher = teacherName ? c.teacher === teacherName : true;
    const matchSearch  = searchQuery
      ? (c.grade   || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (c.classid || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (c.subject || '').toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchTeacher && matchSearch;
  });

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-10 font-sans">
      <Head />

      <div className="max-w-[1350px] mx-auto px-4 md:pl-[260px] pt-5">
        <div className="border-b-2 border-gray-200 pb-4 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">My Classes</h1>
            <p className="text-xs text-gray-500 font-medium mt-0.5">
              Total: <b className="text-[#10a1b6]">{filteredClasses.length}</b> classes
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <Link to="/AddClasses">
              <button className="bg-[#10a1b6] hover:bg-[#128a9c] text-white text-xs font-bold py-2.5 px-4 rounded-xl uppercase tracking-wider">
                + Add Class
              </button>
            </Link>
            <Link to="/AdditionalClasses">
              <button className="bg-[#384D6C] hover:bg-[#2b3c54] text-white text-xs font-bold py-2.5 px-4 rounded-xl uppercase tracking-wider">
                Additional Slots
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full bg-white border-2 border-slate-200 rounded-[20px] shadow-sm p-6">
          <div className="mb-6 max-w-md">
            <input
              type="text"
              placeholder="Search by grade, class ID or subject..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
            />
          </div>

          <div className="w-full overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[700px] border-collapse text-left text-xs">
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
              <tbody className="divide-y divide-slate-100 bg-white text-gray-700 font-medium">
                {loading ? (
                  <tr>
                    <td colSpan="6" className="px-4 py-8 text-center text-gray-400">Loading classes...</td>
                  </tr>
                ) : filteredClasses.length > 0 ? (
                  filteredClasses.map(c => (
                    <tr key={c._id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 font-semibold text-gray-800">{c.teacher}</td>
                      <td className="px-4 py-3 font-mono text-[#384D6C]">{c.classid}</td>
                      <td className="px-4 py-3">
                        <span className="bg-purple-50 text-purple-700 border border-purple-100 px-2 py-0.5 rounded font-bold text-[11px] uppercase">
                          {c.subject}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-bold text-[#10a1b6]">G-{c.grade}</td>
                      <td className="px-4 py-3 text-gray-500">{c.date || '—'}</td>
                      <td className="px-4 py-3 text-center flex items-center justify-center gap-2">
                        <Link to={`/UpdateClasses/${c._id}`}>
                          <button className="bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-600 hover:text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all">
                            Edit
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(c._id)}
                          className="bg-red-50 border border-red-200 text-red-600 hover:bg-red-600 hover:text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all"
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

export default TeacherMyClasses;