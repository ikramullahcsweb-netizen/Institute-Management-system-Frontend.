import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../../api";
import Head from "../Header/Header";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

function AdminSearchusers() {
  const [student, setStudent] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [searchstudent, setSearchStudent] = useState("");
  const [searchteacher, setSearchTeacher] = useState("");
  const [studentSearchType, setStudentSearchType] = useState("name");
  const [teacherSearchType, setTeacherSearchType] = useState("name");
  const [loadingStudents, setLoadingStudents] = useState(true);
  const [loadingTeachers, setLoadingTeachers] = useState(true);

  useEffect(() => {
    loadAllStudents();
    loadAllTeachers();
  }, []);

  const loadAllStudents = async () => {
    setLoadingStudents(true);
    try {
      const res = await API.get("/api/auth/getstudentsadmin");
      const list = res.data.data || res.data || [];
      setStudent(Array.isArray(list) ? list : []);
    } catch (err) {
      console.error("loadAllStudents error:", err);
      toast.error("Students load nahi hue");
    } finally {
      setLoadingStudents(false);
    }
  };

  const loadAllTeachers = async () => {
    setLoadingTeachers(true);
    try {
      const res = await API.get("/api/auth/getteachersadmin");
      const list = res.data.data || res.data || [];
      setTeacher(Array.isArray(list) ? list : []);
    } catch (err) {
      console.error("loadAllTeachers error:", err);
      toast.error("Teachers load nahi hue");
    } finally {
      setLoadingTeachers(false);
    }
  };

  const filteredStudents = student.filter((s) => {
    const value = searchstudent.toLowerCase();
    if (!value) return true;
    if (studentSearchType === "id") return (s.stdid || "").toLowerCase().includes(value);
    return (s.name || "").toLowerCase().includes(value);
  });

  const filteredTeachers = teacher.filter((t) => {
    const value = searchteacher.toLowerCase();
    if (!value) return true;
    if (teacherSearchType === "id") return (t.teid || "").toLowerCase().includes(value);
    return (t.name || "").toLowerCase().includes(value);
  });

  const studentDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete this student!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#063a67",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await API.delete(`/api/auth/deleteuser/${id}`);
          setStudent((prev) => prev.filter((s) => s._id !== id));
          Swal.fire("Deleted!", "Student removed successfully.", "success");
        } catch (err) {
          Swal.fire("Error", err.response?.data?.message || "Could not delete.", "error");
        }
      }
    });
  };

  const teacherDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete this teacher!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#063a67",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await API.delete(`/api/auth/deleteuser/${id}`);
          setTeacher((prev) => prev.filter((t) => t._id !== id));
          Swal.fire("Deleted!", "Teacher removed successfully.", "success");
        } catch (err) {
          Swal.fire("Error", err.response?.data?.message || "Could not delete.", "error");
        }
      }
    });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans">
      <Head />

      <div className="w-full max-w-[1300px] mx-auto px-4 mt-8 space-y-12 md:pl-[280px]">

        {/* ── STUDENT RECORDS ── */}
        <div className="bg-white border-2 border-slate-200 rounded-[24px] p-6 shadow-sm">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-5 mb-6">
            <div>
              <h2 className="text-xl font-black text-[#13293d] uppercase tracking-tight">
                Student Management
              </h2>
              <p className="text-xs text-gray-400 font-medium mt-0.5">
                Registered students directory — Admin control panel
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <span className="bg-slate-100 text-[#13293d] text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl border border-slate-200 text-center">
                Total: <b className="text-[#063a67] ml-1">{student.length}</b>
              </span>
              <select
                value={studentSearchType}
                onChange={(e) => { setStudentSearchType(e.target.value); setSearchStudent(""); }}
                className="px-3 py-2 border-2 border-slate-200 rounded-xl outline-none font-semibold text-xs bg-slate-50 focus:border-[#063a67]"
              >
                <option value="name">By Name</option>
                <option value="id">By ID</option>
              </select>
              <input
                type="text"
                placeholder={studentSearchType === "id" ? "Search by Student ID..." : "Search student by name..."}
                value={searchstudent}
                onChange={(e) => setSearchStudent(e.target.value)}
                className="w-full sm:w-64 bg-slate-50 border-2 border-slate-200 focus:border-[#063a67] rounded-xl pl-4 pr-4 py-2 text-xs font-medium outline-none transition-all text-gray-800"
              />
            </div>
          </div>

          {/* Student Table */}
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl max-h-[320px] overflow-y-auto shadow-inner bg-slate-50">
            <table className="w-full border-collapse text-left text-xs min-w-[900px]">
              <thead className="bg-[#063a67] text-white font-black uppercase tracking-wider sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-3.5">Student ID</th>
                  <th className="px-4 py-3.5">Full Name</th>
                  <th className="px-4 py-3.5">Email</th>
                  <th className="px-4 py-3.5">Phone</th>
                  <th className="px-4 py-3.5">Grade</th>
                  <th className="px-4 py-3.5">Username</th>
                  <th className="px-4 py-3.5">Gender</th>
                  <th className="px-4 py-3.5">Parent</th>
                  <th className="px-4 py-3.5">Parent Phone</th>
                  <th className="px-4 py-3.5">Sec. Answer</th>
                  <th colSpan="2" className="px-4 py-3.5 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-gray-700 bg-white">
                {loadingStudents ? (
                  <tr>
                    <td colSpan="12" className="px-4 py-8 text-center text-gray-400">
                      Loading students...
                    </td>
                  </tr>
                ) : filteredStudents.length > 0 ? (
                  filteredStudents.map((st, idx) => (
                    <tr key={st._id || idx} className="hover:bg-blue-50/20 transition-colors">
                      <td className="px-4 py-3 font-bold font-mono text-[#063a67]">{st.stdid || "—"}</td>
                      <td className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">{st.name || "—"}</td>
                      <td className="px-4 py-3 text-slate-500">{st.email || "—"}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-slate-600">{st.contactnumber || "—"}</td>
                      <td className="px-4 py-3">
                        <span className="bg-blue-50 text-[#063a67] font-bold px-2 py-0.5 rounded border border-blue-100 text-[10px] uppercase">
                          G-{st.grade || "—"}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-mono text-slate-600">{st.username || "—"}</td>
                      <td className="px-4 py-3 text-slate-600">{st.gender || "—"}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-slate-600">{st.parentname || "—"}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-slate-600">{st.parentphonenumber || "—"}</td>
                      <td className="px-4 py-3 font-mono italic text-slate-500">{st.SecAnswer || "—"}</td>
                      <td className="px-2 py-3 text-center">
                        <Link to={`/updatestudent/${st._id}`}>
                          <button className="cursor-pointer bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-600 hover:text-white px-3 py-1 rounded-md font-bold transition-all text-[11px]">
                            Update
                          </button>
                        </Link>
                      </td>
                      <td className="px-2 py-3 text-center">
                        <button
                          onClick={() => studentDelete(st._id)}
                          className="cursor-pointer bg-red-50 border border-red-200 text-red-600 hover:bg-red-600 hover:text-white px-3 py-1 rounded-md font-bold transition-all text-[11px]"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="12" className="px-4 py-8 text-center text-gray-400">
                      No students found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── TEACHER REGISTRY ── */}
        <div className="bg-white border-2 border-slate-200 rounded-[24px] p-6 shadow-sm">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-5 mb-6">
            <div>
              <h2 className="text-xl font-black text-[#13293d] uppercase tracking-tight">
                Teacher Registry
              </h2>
              <p className="text-xs text-gray-400 font-medium mt-0.5">
                Registered institutional educators — Admin control panel
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <span className="bg-slate-100 text-[#13293d] text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl border border-slate-200 text-center">
                Total: <b className="text-[#063a67] ml-1">{teacher.length}</b>
              </span>
              <select
                value={teacherSearchType}
                onChange={(e) => { setTeacherSearchType(e.target.value); setSearchTeacher(""); }}
                className="px-3 py-2 border-2 border-slate-200 rounded-xl outline-none font-semibold text-xs bg-slate-50 focus:border-[#063a67]"
              >
                <option value="name">By Name</option>
                <option value="id">By ID</option>
              </select>
              <input
                type="text"
                placeholder={teacherSearchType === "id" ? "Search by Teacher ID..." : "Search teacher by name..."}
                value={searchteacher}
                onChange={(e) => setSearchTeacher(e.target.value)}
                className="w-full sm:w-64 bg-slate-50 border-2 border-slate-200 focus:border-[#063a67] rounded-xl pl-4 pr-4 py-2 text-xs font-medium outline-none transition-all text-gray-800"
              />
            </div>
          </div>

          {/* Teacher Table */}
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl max-h-[320px] overflow-y-auto shadow-inner bg-slate-50">
            <table className="w-full border-collapse text-left text-xs min-w-[800px]">
              <thead className="bg-[#063a67] text-white font-black uppercase tracking-wider sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-3.5">Teacher ID</th>
                  <th className="px-4 py-3.5">Name</th>
                  <th className="px-4 py-3.5">Email</th>
                  <th className="px-4 py-3.5">Phone</th>
                  <th className="px-4 py-3.5">Username</th>
                  <th className="px-4 py-3.5">Gender</th>
                  <th className="px-4 py-3.5">Subject</th>
                  <th className="px-4 py-3.5">Sec. Answer</th>
                  <th colSpan="2" className="px-4 py-3.5 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-gray-700 bg-white">
                {loadingTeachers ? (
                  <tr>
                    <td colSpan="10" className="px-4 py-8 text-center text-gray-400">
                      Loading teachers...
                    </td>
                  </tr>
                ) : filteredTeachers.length > 0 ? (
                  filteredTeachers.map((te, idx) => (
                    <tr key={te._id || idx} className="hover:bg-blue-50/20 transition-colors">
                      <td className="px-4 py-3 font-bold font-mono text-[#063a67]">{te.teid || "—"}</td>
                      <td className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">{te.name || "—"}</td>
                      <td className="px-4 py-3 text-slate-500">{te.email || "—"}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-slate-600">{te.contactnumber || "—"}</td>
                      <td className="px-4 py-3 font-mono text-slate-600">{te.username || "—"}</td>
                      <td className="px-4 py-3 text-slate-600">{te.gender || "—"}</td>
                      <td className="px-4 py-3">
                        <span className="bg-purple-50 text-purple-700 border border-purple-100 font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wide">
                          {te.subject || "—"}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-mono italic text-slate-500">{te.SecAnswer || "—"}</td>
                      <td className="px-2 py-3 text-center">
                        <Link to={`/updateteacher/${te._id}`}>
                          <button className="cursor-pointer bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-600 hover:text-white px-3 py-1 rounded-md font-bold transition-all text-[11px]">
                            Update
                          </button>
                        </Link>
                      </td>
                      <td className="px-2 py-3 text-center">
                        <button
                          onClick={() => teacherDelete(te._id)}
                          className="cursor-pointer bg-red-50 border border-red-200 text-red-600 hover:bg-red-600 hover:text-white px-3 py-1 rounded-md font-bold transition-all text-[11px]"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" className="px-4 py-8 text-center text-gray-400">
                      No teachers found.
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

export default AdminSearchusers;
