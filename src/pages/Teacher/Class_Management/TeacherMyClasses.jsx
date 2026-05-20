import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from '../Header/Header';

function TeacherMyClasses() {
  // STATIC COMPUTER SCIENCE SEMESTER COURSES STATE WORKFLOW
  const [addclasses, setAddclasses] = useState([
    {
      _id: 'mock-id-101',
      teacher: 'Dr. Asim Khan',
      classid: 'CS-301-A',
      teacherid: 'CS-TEACH-404',
      subject: 'Advanced Data Structures & Lab',
      time: '09:00 AM - 10:30 AM',
      date: 'Monday, May 18',
      grade: '6'
    },
    {
      _id: 'mock-id-102',
      teacher: 'Dr. Asim Khan',
      classid: 'CS-451',
      teacherid: 'CS-TEACH-404',
      subject: 'Advanced Algorithms & Complexity',
      time: '11:00 AM - 12:30 PM',
      date: 'Wednesday, May 20',
      grade: '8'
    },
    {
      _id: 'mock-id-103',
      teacher: 'Dr. Asim Khan',
      classid: 'CS-202-B',
      teacherid: 'CS-TEACH-404',
      subject: 'Database Management Systems & Lab',
      time: '01:30 PM - 03:00 PM',
      date: 'Thursday, May 21',
      grade: '4'
    }
  ]);
  
  const [searchQuery, setSearchQuery] = useState('');

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Class Slot",
      text: "Are you sure you want to completely drop this lecture slot layout from the workspace?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#384D6C",
      confirmButtonText: "Yes, drop it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Pure Frontend state filter operation mapping simulation
        const updatedClasses = addclasses.filter(item => item._id !== id);
        setAddclasses(updatedClasses);
        
        toast.success('Core CS Class Slot Dropped Successfully!', {
          style: {
            background: '#10a1b6',
            color: '#ffffff',
            borderRadius: '12px',
          }
        });
      } else {
        Swal.fire({
          title: "Action Cancelled",
          text: "The class routing configuration was left untouched.",
          icon: "error",
          confirmButtonColor: "#384D6C"
        });
      }
    });
  };

  // Filter tracking logic focusing on Semester/Grade values
  const filteredClasses = addclasses.filter((addclass) =>
    addclass.grade.toString().toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      {/* Head section root structure placement context */}
      <Head />

      {/* DASHBOARD WORKSPACE MAIN WRAPPER: Responsive spacing matching 260px fixed sidebar design */}
      <div className="w-full max-w-[1350px] mx-auto px-4 mt-6 md:pl-[260px] transition-all duration-300">
        
        {/* Descriptive Dashboard Heading Header */}
        <div className="border-b-2 border-gray-200 pb-4 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
              My Lecture Matrix
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              Monitor, refine, and maintain registered computer science curriculum allocation logs
            </p>
          </div>
          
          {/* Core Action Links Matrix Panel (Top Right Alignment) */}
          <div className="flex flex-wrap gap-2.5">
            <Link 
              to="/addclasses" 
              className="bg-[#10a1b6] hover:bg-[#128a9c] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs transition-all uppercase tracking-wider"
            >
              + Add Class
            </Link>
            <Link 
              to="/additionalclasses" 
              className="bg-[#384D6C] hover:bg-[#2b3c54] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs transition-all uppercase tracking-wider"
            >
              View Additional Slots
            </Link>
          </div>
        </div>

        {/* Workspace Management View Card Box */}
        <div className="w-full bg-white border-2 border-slate-200 rounded-[20px] shadow-sm p-5 sm:p-6">
          
          {/* Dynamic Table Filter Control Sub-panel */}
          <div className="mb-6 max-w-md">
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">
              Filter by Batch / Semester Group
            </label>
            <input
              type="text"
              placeholder="Search Target Semester Grade (e.g., 4, 6, 8)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 font-medium outline-none transition-all placeholder:text-gray-400 placeholder:text-xs"
            />
          </div>

          {/* Table Container Responsive Wrapper Block */}
          <div className="w-full overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm text-gray-500">
              <thead className="bg-slate-100 text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th scope="col" className="px-4 py-3.5">Assigned Professor</th>
                  <th scope="col" className="px-4 py-3.5">Class / Lab ID</th>
                  <th scope="col" className="px-4 py-3.5">Instructor Code</th>
                  <th scope="col" className="px-4 py-3.5">Computing Subject Module</th>
                  <th scope="col" className="px-4 py-3.5">Time Slot Range</th>
                  <th scope="col" className="px-4 py-3.5">Calendar Date</th>
                  <th scope="col" className="px-4 py-3.5 text-center">Batch</th>
                  <th scope="col" className="px-4 py-3.5 text-center">Modify</th>
                  <th scope="col" className="px-4 py-3.5 text-center">Terminate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {filteredClasses.length > 0 ? (
                  filteredClasses.map((addclass) => (
                    <tr key={addclass._id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-4 font-semibold text-gray-800 whitespace-nowrap">
                        {addclass.teacher}
                      </td>
                      <td className="px-4 py-4 font-mono text-xs text-[#384D6C] font-bold">
                        {addclass.classid}
                      </td>
                      <td className="px-4 py-4 font-mono text-xs text-gray-500">
                        {addclass.teacherid}
                      </td>
                      <td className="px-4 py-4 text-gray-700 font-medium max-w-[220px] truncate">
                        {addclass.subject}
                      </td>
                      <td className="px-4 py-4 text-xs font-medium text-slate-600 whitespace-nowrap">
                        {addclass.time}
                      </td>
                      <td className="px-4 py-4 text-xs font-medium text-slate-600 whitespace-nowrap">
                        {addclass.date}
                      </td>
                      <td className="px-4 py-4 text-center font-bold text-[#10a1b6]">
                        {addclass.grade}
                      </td>
                      {/* Operational Control Anchors Matrix */}
                      <td className="px-4 py-4 text-center whitespace-nowrap">
                        <Link 
                          to={`/update/${addclass._id}`} 
                          className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all shadow-xs"
                        >
                          Edit
                        </Link>
                      </td>
                      <td className="px-4 py-4 text-center whitespace-nowrap">
                        <button 
                          onClick={() => handleDelete(addclass._id)}
                          className="bg-red-500 hover:bg-red-600 text-white text-[11px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all shadow-xs"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center py-10 font-bold text-gray-400 uppercase tracking-widest text-xs bg-slate-50">
                      No computational layout schedules match the filter criteria.
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