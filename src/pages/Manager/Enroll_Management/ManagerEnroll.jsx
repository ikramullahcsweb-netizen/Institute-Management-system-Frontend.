import React, { useState, useEffect } from "react";
import Head from "../Header/Header";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import API from "../../../api";

function ManagerEnroll() {
  const navigate = useNavigate();
  const [enrollments, setEnrollments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    setLoading(true);
    try {
      const res = await API.get('/api/enrollments/classenrollments');
      const data = res.data?.data || res.data || [];
      setEnrollments(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      toast.error("Enrollments load nahi ho sake");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete Enrollment?",
      text: "This cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete!",
    });

    if (result.isConfirmed) {
      try {
        await API.delete(`/api/enrollments/classenrollments/${id}`);
        setEnrollments(prev => prev.filter(e => e._id !== id));
        toast.success("Deleted successfully");
      } catch (err) {
        toast.error(err.response?.data?.message || "Delete fail ho gaya");
      }
    }
  };

  const filteredEnrollments = enrollments.filter(enr =>
    (enr.studentId || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (enr.subject   || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (enr.classId   || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      <Head />

      <div className="w-full max-w-[1250px] mx-auto px-4 mt-6 md:pl-[260px]">

        <div className="border-b-2 border-gray-200 pb-4 mb-6">
          <h1 className="text-xl md:text-2xl font-black text-[#13293d] uppercase tracking-tight">
            Class Enrollments Registry
          </h1>
          <p className="text-xs text-gray-500 font-medium mt-0.5">
            Total: <b className="text-[#10a1b6]">{enrollments.length}</b> enrolled students
          </p>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by Student ID, Subject or Class ID..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="flex-1 bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm outline-none shadow-sm focus:border-[#10a1b6]"
          />
          <button
            onClick={() => navigate("/enrollmentform")}
            className="bg-[#10a1b6] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase hover:bg-teal-600 transition shadow-sm"
          >
            + Add New Enrollment
          </button>
        </div>

        {/* Table */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#13293d] text-white uppercase font-black tracking-wider">
                <tr>
                  <th className="px-4 py-3.5">Student ID</th>
                  <th className="px-4 py-3.5">Class ID</th>
                  <th className="px-4 py-3.5">Teacher ID</th>
                  <th className="px-4 py-3.5">Subject</th>
                  <th className="px-4 py-3.5">Grade</th>
                  <th className="px-4 py-3.5 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td colSpan="6" className="px-4 py-8 text-center text-gray-400 font-semibold">
                      Loading enrollments...
                    </td>
                  </tr>
                ) : filteredEnrollments.length > 0 ? (
                  filteredEnrollments.map(item => (
                    <tr key={item._id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-[#13293d]">{item.studentId}</td>
                      <td className="px-4 py-3 text-gray-600">{item.classId}</td>
                      <td className="px-4 py-3 font-mono text-gray-500">{item.teacherid}</td>
                      <td className="px-4 py-3 font-semibold text-[#13293d]">{item.subject}</td>
                      <td className="px-4 py-3">
                        <span className="bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded font-bold">
                          G-{item.grade}
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
                    <td colSpan="6" className="px-4 py-8 text-center text-gray-400 font-semibold">
                      No enrollments found. Add one using the button above.
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

export default ManagerEnroll;
