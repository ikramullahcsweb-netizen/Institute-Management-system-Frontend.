import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Head from "../Header/Header";
import Swal from "sweetalert2";

function UpdateTeacher() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Component Core Controlled Input States
  const [name, setName] = useState("");
  const [teid, setTeid] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [contactnumber, setContactnumber] = useState("");
  const [subject, setSubject] = useState("");
  const [secanswer, setSecAnswer] = useState("");

  // Hydrating Form States on Mount via LocalStorage Teacher Array Registry
  useEffect(() => {
    try {
      const localTeachers = localStorage.getItem("s2s_teachers");
      if (localTeachers) {
        const teachersArray = JSON.parse(localTeachers);
        // Matching criteria checks either unique Teacher ID string or internal object ID tracking parameter
        const targetTeacher = teachersArray.find(
          (t) => t.teid === id || t._id === id,
        );

        if (targetTeacher) {
          setName(targetTeacher.name || "");
          setTeid(targetTeacher.teid || "");
          setUsername(targetTeacher.username || "");
          setGender(targetTeacher.gender || "");
          setEmail(targetTeacher.email || "");
          setContactnumber(targetTeacher.contactnumber || "");
          setSubject(targetTeacher.subject || "");
          setSecAnswer(
            targetTeacher.SecAnswer || targetTeacher.secanswer || "",
          );
        } else {
          console.warn(
            `Teacher dataset bounding segment matched no items relative to URL handle ID: ${id}`,
          );
        }
      }
    } catch (error) {
      console.error("Local faculty registry stream breakdown error:", error);
    }
  }, [id]);

  // Local Mutation Form Handler Execution Event
  const updateTeacher = async (e) => {
    e.preventDefault();
    try {
      const localTeachers = localStorage.getItem("s2s_teachers");
      let teachersArray = localTeachers ? JSON.parse(localTeachers) : [];

      // Mapping updated matrix nodes across matching workspace handles
      const updatedArray = teachersArray.map((teacher) => {
        if (teacher.teid === id || teacher._id === id) {
          return {
            ...teacher,
            name,
            username,
            gender,
            email,
            contactnumber,
            subject,
            SecAnswer: secanswer, // Normalizing key capitalization matrix bounds
          };
        }
        return teacher;
      });

      localStorage.setItem("s2s_teachers", JSON.stringify(updatedArray));

      await Swal.fire({
        icon: "success",
        title: "Faculty Profile Updated",
        text: "Teacher workspace parameters have been persistent mutated successfully!",
        confirmButtonColor: "#063a67",
        confirmButtonText: "Return to Database",
      });

      navigate("/searchusersadmin");
    } catch (error) {
      console.error(error);
      await Swal.fire({
        icon: "error",
        title: "Mutation Fault Exception",
        text: "System dashboard encountered structural issues writing configuration to local blocks.",
        confirmButtonColor: "#ef4444",
        confirmButtonText: "Acknowledge",
      });
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <Head />

      {/* Main Application Workspace Frame */}
      <div className="ml-[290px] pt-8 px-8 pb-16">
        <div className="w-full max-w-[1000px] mx-auto bg-white rounded-[24px] border border-gray-100 shadow-xl p-8 space-y-8">
          {/* Section Header Module Title Block */}
          <div className="border-b border-gray-100 pb-5">
            <h1 className="text-2xl font-black text-[#063a67] m-0 tracking-tight">
              Modify Teacher Profile Data
            </h1>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">
              Administrative Database Faculty Matrix Control Terminal
            </p>
          </div>

          {/* Meta Aspect Identity Display Card Block */}
          <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-gradient-to-r from-slate-50 to-blue-50/30 rounded-2xl border border-gray-100">
            {/* Dynamic Avatar Initials Node Vector Generator */}
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#063a67] to-[#12538c] flex items-center justify-center text-white text-3xl font-black shadow-md border-4 border-white tracking-tighter">
              {name
                ? name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                    .substring(0, 2)
                : "TR"}
            </div>
            <div className="text-center sm:text-left space-y-1">
              <h2 className="text-xl font-bold text-gray-900 m-0">
                {name || "Unassigned Workspace Node"}
              </h2>
              <p className="font-mono text-xs font-bold text-gray-400">
                Faculty Registration ID Token:{" "}
                <span className="text-[#063a67]">{teid || "—"}</span>
              </p>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-200 uppercase tracking-wider">
                System Designation Role: Instructor {subject && `(${subject})`}
              </div>
            </div>
          </div>

          {/* Interactive Mutator Workspace Form */}
          <form onSubmit={updateTeacher} className="space-y-6">
            {/* Split Row Framework Module: Core Names handles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
                  Legal Full Faculty Identity Title
                </label>
                <input
                  type="text"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] bg-gray-50/50 text-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
                  System Username Access Handle
                </label>
                <input
                  type="text"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] bg-gray-50/50 text-sm"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Custom Tailored Selector Segment: Binary Biological Gender */}
            <div className="space-y-2 p-4 bg-gray-50 rounded-xl border border-gray-200/60">
              <span className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider mb-1">
                Biological Gender Assignment Matrix
              </span>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 font-bold text-sm text-gray-700 cursor-pointer select-none">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    className="w-4 h-4 accent-[#063a67]"
                    checked={gender === "Male"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Male Faculty Handle
                </label>
                <label className="flex items-center gap-2 font-bold text-sm text-gray-700 cursor-pointer select-none">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    className="w-4 h-4 accent-[#063a67]"
                    checked={gender === "Female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Female Faculty Handle
                </label>
              </div>
            </div>

            {/* Split Row Framework Module: Core Communications Networks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
                  Electronic Mailing Address (Email)
                </label>
                <input
                  type="email"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] bg-gray-50/50 text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
                  Active Mobile Communication Line
                </label>
                <input
                  type="text"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] bg-gray-50/50 text-sm"
                  value={contactnumber}
                  onChange={(e) => setContactnumber(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Specialized Department Parameter Box */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
                Instructional Academic Subject Department
              </label>
              <input
                type="text"
                className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] bg-gray-50/50 text-sm"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>

            {/* Cryptographic Security Question Verification Module */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
                Account Cryptography Token Security Question:{" "}
                <span className="text-[#063a67] lowercase italic font-bold">
                  What city were you born in?
                </span>
              </label>
              <input
                type="text"
                className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] bg-gray-50/50 text-sm"
                value={secanswer}
                onChange={(e) => setSecAnswer(e.target.value)}
                required
              />
            </div>

            {/* Execution Controls Action Control Ribbon Layout */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-end gap-4 border-t border-gray-100">
              <Link
                to="/searchusersadmin"
                className="w-full sm:w-auto no-underline"
              >
                <button
                  type="button"
                  className="w-full sm:w-auto min-w-[130px] border-2 border-gray-200 text-gray-500 bg-white hover:bg-gray-100 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider cursor-pointer transition-all"
                >
                  Abort Changes
                </button>
              </Link>
              <button
                type="submit"
                className="w-full sm:w-auto min-w-[180px] bg-[#063a67] hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider border-none cursor-pointer transition-all shadow-md"
              >
                Persist Cluster Matrix Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default UpdateTeacher;
