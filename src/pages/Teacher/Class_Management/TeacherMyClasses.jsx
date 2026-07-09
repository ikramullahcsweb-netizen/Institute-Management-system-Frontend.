import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Head from '../Header/Header';

const BASE_URL = '';

function TeacherMyClasses() {
  const [addclasses, setAddclasses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Backend se data fetch karne ke liye useEffect
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/classes/teachermyclasses/addclasses`, { withCredentials: true });
        setAddclasses(response.data);
      } catch (error) {
        console.error("Error fetching classes:", error);
        toast.error("Data load karne mein masla aaya.");
      }
    };
    fetchClasses();
  }, []);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Delete Class Slot",
      text: "Are you sure you want to drop this lecture slot?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#384D6C",
      confirmButtonText: "Yes, drop it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${BASE_URL}/api/classes/deleteClass/${id}`, { withCredentials: true });
          setAddclasses(addclasses.filter(item => item._id !== id));
          toast.success('Class Slot Dropped Successfully!');
        } catch (error) {
          console.error("Delete error:", error);
          toast.error("Deletion failed.");
        }
      }
    });
  };

  const filteredClasses = addclasses.filter((addclass) =>
    addclass.grade.toString().toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-10 font-sans flex flex-col">
      <Head />
      <div className=" max-w-[1350px] mx-auto px-4  md:pl-[260px] transition-all duration-300 pt-5 ">
        <div className="border-b-2 border-gray-200 pb-4 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">My Lecture Matrix</h1>
            <p className="text-xs text-gray-500 font-medium">Monitor and maintain curriculum allocation logs.</p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <Link to="/addclasses" className="bg-[#10a1b6] hover:bg-[#128a9c] text-white text-xs font-bold py-2.5 px-4 rounded-xl uppercase tracking-wider">+ Add Class</Link>
            <Link to="/additionalclasses" className="bg-[#384D6C] hover:bg-[#2b3c54] text-white text-xs font-bold py-2.5 px-4 rounded-xl uppercase tracking-wider">View Additional Slots</Link>
          </div>
        </div>

        <div className="w-full bg-white border-2 border-slate-200 rounded-[20px] shadow-sm p-6">
          <div className="mb-6 max-w-md">
            <input
              type="text"
              placeholder="Search by Semester Grade (e.g., 4)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none"
            />
          </div>

          <div className="w-full overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm text-gray-500">
              <thead className="bg-slate-100 text-xs font-bold uppercase border-b">
                <tr>
                  <th className="px-4 py-3.5">Professor</th>
                  <th className="px-4 py-3.5">Class ID</th>
                  <th className="px-4 py-3.5">Subject</th>
                  <th className="px-4 py-3.5 text-center">Batch</th>
                  <th className="px-4 py-3.5 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y bg-white">
                {filteredClasses.length > 0 ? (
                  filteredClasses.map((addclass) => (
                    <tr key={addclass._id} className="hover:bg-slate-50">
                      <td className="px-4 py-4 font-semibold text-gray-800">{addclass.teacher}</td>
                      <td className="px-4 py-4 font-mono text-xs text-[#384D6C]">{addclass.classid}</td>
                      <td className="px-4 py-4 text-gray-700">{addclass.subject}</td>
                      <td className="px-4 py-4 text-center font-bold text-[#10a1b6]">{addclass.grade}</td>
                      <td className="px-4 py-4 text-center">
                        <Link to={`/update/${addclass._id}`} className="bg-emerald-600 text-white text-[11px] px-3 py-1.5 rounded-lg mr-2">Edit</Link>
                        <button onClick={() => handleDelete(addclass._id)} className="bg-red-500 text-white text-[11px] px-3 py-1.5 rounded-lg">Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="5" className="text-center py-10 font-bold text-gray-400">No records found.</td></tr>
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