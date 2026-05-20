import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Head from "../Header/Header";
import Swal from "sweetalert2";

function AdminSearchusers() {
  const [student, setStudent] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [searchstudent, setSearchStudent] = useState("");
  const [searchteacher, setSearchTeacher] = useState("");

  // Fetching Data from LocalStorage Pipeline On-Mount
  useEffect(() => {
    try {
      const localStudents = localStorage.getItem("s2s_students");
      const localTeachers = localStorage.getItem("s2s_teachers");

      if (localStudents) setStudent(JSON.parse(localStudents));
      if (localTeachers) setTeacher(JSON.parse(localTeachers));
    } catch (error) {
      console.error("Local records load parsing fault:", error);
    }
  }, []);

  // State Driven Student Erasure Mechanism
  const studentDelete = (id) => {
    Swal.fire({
      title: "Are you absolute sure?",
      text: "This action will purge the student profile metadata permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#063a67",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, purge record!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          const currentStudents =
            JSON.parse(localStorage.getItem("s2s_students")) || [];
          // Fallback to match either unique 'stdid' or database '_id' identifier
          const updatedStudents = currentStudents.filter(
            (s) => s._id !== id && s.stdid !== id,
          );

          localStorage.setItem("s2s_students", JSON.stringify(updatedStudents));
          setStudent(updatedStudents); // Direct state mutation reactive refresh

          Swal.fire("Purged!", "Student registry matrix cleared.", "success");
        } catch (err) {
          console.error(err);
          Swal.fire(
            "System Exception",
            "Failed to mutate storage cluster array.",
            "error",
          );
        }
      }
    });
  };

  // State Driven Teacher Erasure Mechanism
  const teacherDelete = (id) => {
    Swal.fire({
      title: "Are you absolute sure?",
      text: "This action will purge the teacher profile metadata permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#063a67",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, purge record!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          const currentTeachers =
            JSON.parse(localStorage.getItem("s2s_teachers")) || [];
          const updatedTeachers = currentTeachers.filter(
            (t) => t._id !== id && t.teid !== id,
          );

          localStorage.setItem("s2s_teachers", JSON.stringify(updatedTeachers));
          setTeacher(updatedTeachers);

          Swal.fire("Purged!", "Teacher registry matrix cleared.", "success");
        } catch (err) {
          console.error(err);
          Swal.fire(
            "System Exception",
            "Failed to mutate storage cluster array.",
            "error",
          );
        }
      }
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <Head />

      {/* Core Workspace Viewport Frame */}
      <div className="ml-[290px] pt-8 px-8 pb-16">
        <div className="w-full max-w-[1250px] mx-auto bg-white rounded-[24px] border border-gray-100 shadow-xl p-8 space-y-12">
          {/* ==================== STUDENT METRICS BLOCK ==================== */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 pb-4 gap-4">
              <div>
                <h2 className="text-2xl font-black text-[#063a67] m-0 tracking-tight">
                  Student Management Log
                </h2>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">
                  Active Database Metrics Counter:{" "}
                  <span className="text-[#063a67] font-bold">
                    {student.length} Students
                  </span>
                </p>
              </div>
              {/* Functional Live Query Filter Element */}
              <input
                type="text"
                placeholder="🔍 Filter student profiles by title..."
                className="w-full md:w-[320px] p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-sm transition-all focus:border-[#063a67] bg-gray-50"
                value={searchstudent}
                onChange={(e) => setSearchStudent(e.target.value)}
              />
            </div>

            {/* Custom Core Scrollable Table Wrapper Frame */}
            <div className="w-full overflow-x-auto rounded-xl border border-gray-200 max-h-[280px] overflow-y-auto shadow-inner">
              <table className="w-full border-collapse bg-white text-left text-xs text-gray-500">
                <thead className="bg-gray-50 sticky top-0 z-10 shadow-sm">
                  <tr>
                    <th className="px-4 py-3.5 font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      ID
                    </th>
                    <th className="px-4 py-3.5 font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      Full Name
                    </th>
                    <th className="px-4 py-3.5 font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      Email
                    </th>
                    <th className="px-4 py-3.5 font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      Phone
                    </th>
                    <th className="px-4 py-3.5 font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      Grade
                    </th>
                    <th className="px-4 py-3.5 font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      Username
                    </th>
                    <th className="px-4 py-3.5 font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      Gender
                    </th>
                    <th className="px-4 py-3.5 font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      Parent Guardian
                    </th>
                    <th className="px-4 py-3.5 font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      Parent Phone
                    </th>
                    <th className="px-4 py-3.5 font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      Security Key
                    </th>
                    <th
                      colSpan="2"
                      className="px-4 py-3.5 font-bold text-center text-[#063a67] uppercase tracking-wider border-b border-gray-200"
                    >
                      Operations Control
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {student.filter((s) =>
                    s.name?.toLowerCase().includes(searchstudent.toLowerCase()),
                  ).length > 0 ? (
                    student
                      .filter((s) =>
                        s.name
                          ?.toLowerCase()
                          .includes(searchstudent.toLowerCase()),
                      )
                      .map((st, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-blue-50/20 transition-colors"
                        >
                          <td className="px-4 py-3 font-bold font-mono text-[#063a67]">
                            {st.stdid || "—"}
                          </td>
                          <td className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">
                            {st.name || "—"}
                          </td>
                          <td className="px-4 py-3 text-gray-600">
                            {st.email || "—"}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-gray-600">
                            {st.contactnumber || "—"}
                          </td>
                          <td className="px-4 py-3">
                            <span className="bg-blue-50 text-[#063a67] font-bold px-2 py-0.5 rounded border border-blue-100">
                              G-{st.grade || "—"}
                            </span>
                          </td>
                          <td className="px-4 py-3 font-mono text-gray-600">
                            {st.username || "—"}
                          </td>
                          <td className="px-4 py-3 font-medium text-gray-700">
                            {st.gender || "—"}
                          </td>
                          <td className="px-4 py-3 text-gray-900 font-semibold whitespace-nowrap">
                            {st.parentname || "—"}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-gray-600">
                            {st.parentphonenumber || "—"}
                          </td>
                          <td className="px-4 py-3 text-gray-500 font-mono italic">
                            {st.SecAnswer || st.secanswer || "—"}
                          </td>
                          <td className="px-2 py-3 text-center">
                            <Link to={`/updatestudent/${st.stdid || st._id}`}>
                              <button className="cursor-pointer bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-600 hover:text-white px-3 py-1 rounded-md font-bold transition-all">
                                Update
                              </button>
                            </Link>
                          </td>
                          <td className="px-2 py-3 text-center">
                            <button
                              onClick={() => studentDelete(st._id || st.stdid)}
                              className="cursor-pointer bg-red-50 border border-red-200 text-red-600 hover:bg-red-600 hover:text-white px-3 py-1 rounded-md font-bold transition-all"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                  ) : (
                    <tr>
                      <td
                        colSpan="12"
                        className="px-4 py-8 text-center text-sm font-semibold text-gray-400"
                      >
                        No student datasets captured inside search query matrix
                        matching bounds.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* ==================== TEACHER METRICS BLOCK ==================== */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 pb-4 gap-4">
              <div>
                <h2 className="text-2xl font-black text-[#063a67] m-0 tracking-tight">
                  Faculty Teacher Registry
                </h2>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">
                  Active Database Metrics Counter:{" "}
                  <span className="text-[#063a67] font-bold">
                    {teacher.length} Lecturers
                  </span>
                </p>
              </div>
              <input
                type="text"
                placeholder="🔍 Filter faculty members by profile handle..."
                className="w-full md:w-[320px] p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-sm transition-all focus:border-[#063a67] bg-gray-50"
                value={searchteacher}
                onChange={(e) => setSearchTeacher(e.target.value)}
              />
            </div>

            <div className="w-full overflow-x-auto rounded-xl border border-gray-200 max-h-[280px] overflow-y-auto shadow-inner">
              <table className="w-full border-collapse bg-white text-left text-xs text-gray-500">
                <thead className="bg-gray-50 sticky top-0 z-10 shadow-sm">
                  <tr>
                    <th className="px-4 py-3.5 font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      ID
                    </th>
                    <th className="px-4 py-3.5 font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      Faculty Name
                    </th>
                    <th className="px-4 py-3.5 font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      Email
                    </th>
                    <th className="px-4 py-3.5 font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      Phone
                    </th>
                    <th className="px-4 py-3.5 font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      Username
                    </th>
                    <th className="px-4 py-3.5 font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      Gender
                    </th>
                    <th className="px-4 py-3.5 font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      Assigned Subject Domain
                    </th>
                    <th className="px-4 py-3.5 font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      Security Key
                    </th>
                    <th
                      colSpan="2"
                      className="px-4 py-3.5 font-bold text-center text-[#063a67] uppercase tracking-wider border-b border-gray-200"
                    >
                      Operations Control
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {teacher.filter((t) =>
                    t.name?.toLowerCase().includes(searchteacher.toLowerCase()),
                  ).length > 0 ? (
                    teacher
                      .filter((t) =>
                        t.name
                          ?.toLowerCase()
                          .includes(searchteacher.toLowerCase()),
                      )
                      .map((te, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-blue-50/20 transition-colors"
                        >
                          <td className="px-4 py-3 font-bold font-mono text-[#063a67]">
                            {te.teid || "—"}
                          </td>
                          <td className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">
                            {te.name || "—"}
                          </td>
                          <td className="px-4 py-3 text-gray-600">
                            {te.email || "—"}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-gray-600">
                            {te.contactnumber || "—"}
                          </td>
                          <td className="px-4 py-3 font-mono text-gray-600">
                            {te.username || "—"}
                          </td>
                          <td className="px-4 py-3 font-medium text-gray-700">
                            {te.gender || "—"}
                          </td>
                          <td className="px-4 py-3">
                            <span className="bg-purple-50 text-purple-700 border border-purple-100 font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                              {te.subject || "—"}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-gray-500 font-mono italic">
                            {te.SecAnswer || te.secanswer || "—"}
                          </td>
                          <td className="px-2 py-3 text-center">
                            <Link to={`/updateteacher/${te.teid || te._id}`}>
                              <button className="cursor-pointer bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-600 hover:text-white px-3 py-1 rounded-md font-bold transition-all">
                                Update
                              </button>
                            </Link>
                          </td>
                          <td className="px-2 py-3 text-center">
                            <button
                              onClick={() => teacherDelete(te._id || te.teid)}
                              className="cursor-pointer bg-red-50 border border-red-200 text-red-600 hover:bg-red-600 hover:text-white px-3 py-1 rounded-md font-bold transition-all"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                  ) : (
                    <tr>
                      <td
                        colSpan="10"
                        className="px-4 py-8 text-center text-sm font-semibold text-gray-400"
                      >
                        No teacher datasets captured inside search query matrix
                        matching bounds.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminSearchusers;
