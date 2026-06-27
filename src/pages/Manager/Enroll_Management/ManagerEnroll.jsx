import React, { useState, useEffect } from "react";
import Head from "../Header/Header";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ManagerEnroll() {
  const navigate = useNavigate();
  const [enrollments, setEnrollments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Backend Port 3000
  const API_URL = "http://localhost:3000";

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      // Endpoint: /classenrollments
      const res = await axios.get(`${API_URL}/classenrollments`);
      setEnrollments(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load data");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this enrollment?")) {
      try {
        await axios.delete(`${API_URL}/classenrollments/${id}`);
        setEnrollments(enrollments.filter((e) => e._id !== id));
        toast.success("Deleted successfully");
      } catch (err) {
        toast.error("Error deleting record");
      }
    }
  };

  const filteredEnrollments = enrollments.filter((enr) =>
    enr.studentId?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    enr.subject?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      <Head />

      {/* Main Content Area: Responsive Padding for Sidebar */}
      <div className="w-full max-w-[1250px] mx-auto px-4 mt-6 md:pl-[260px] transition-all duration-300">
        
        <div className="border-b-2 border-gray-200 pb-4 mb-6">
          <h1 className="text-xl md:text-2xl font-black text-[#13293d] uppercase tracking-tight">
            Class Enrollments Registry
          </h1>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by Student ID or Subject..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm outline-none shadow-sm"
          />
          <button 
            onClick={() => navigate("/EnrollmentForm")}
            className="bg-[#10a1b6] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase hover:bg-teal-600 transition shadow-sm"
          >
            Add New Enrollment
          </button>
        </div>

        {/* Table Container */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-gray-600 uppercase font-bold border-b">
                <tr>
                  <th className="p-4">Student ID</th>
                  <th className="p-4">Class ID</th>
                  <th className="p-4">Subject</th>
                  <th className="p-4">Grade</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredEnrollments.map((item) => (
                  <tr key={item._id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-gray-800">{item.studentId}</td>
                    <td className="p-4 text-gray-600">{item.classId}</td>
                    <td className="p-4 font-semibold text-[#13293d]">{item.subject}</td>
                    <td className="p-4 text-gray-600">G-{item.grade}</td>
                    <td className="p-4 text-center">
                      <button 
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-50 hover:bg-red-600 text-red-600 hover:text-white font-bold px-3 py-1.5 rounded-lg border border-red-200 transition-all"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagerEnroll;