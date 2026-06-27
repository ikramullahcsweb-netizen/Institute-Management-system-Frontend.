import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Head from '../Header/Header';

const EnrollmentForm = () => {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [teachers, setTeachers] = useState([]);

  // Form Individual States
  const [studentId, setStudentId] = useState('');
  const [classId, setClassId] = useState('');
  const [teacherId, setTeacherId] = useState('');
  const [subject, setSubject] = useState('');
  const [teacher, setTeacher] = useState('');
  const [grade, setGrade] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentsResponse = await axios.get('/students');
        const studentsData = Array.isArray(studentsResponse.data)
          ? studentsResponse.data
          : Array.isArray(studentsResponse.data?.data)
          ? studentsResponse.data.data
          : Array.isArray(studentsResponse.data?.students)
          ? studentsResponse.data.students
          : [];
        setStudents(studentsData);

        const classesResponse = await axios.get('/viewSubject');
        const classesData = Array.isArray(classesResponse.data)
          ? classesResponse.data
          : Array.isArray(classesResponse.data?.data)
          ? classesResponse.data.data
          : [];
        setClasses(classesData);

        const teachersResponse = await axios.get('/getAllTeachers');
        const teachersData = Array.isArray(teachersResponse.data)
          ? teachersResponse.data
          : Array.isArray(teachersResponse.data?.data)
          ? teachersResponse.data.data
          : [];
        setTeachers(teachersData);
      } catch (error) {
        console.log(error);
        toast.error('Failed to load form data');
      }
    };

    fetchData();
  }, []);

  const handleClassChange = (e) => {
    const selectedClassId = e.target.value;
    setClassId(selectedClassId);

    const selectedClass = classes.find((item) => item.sbid === selectedClassId);

    if (selectedClass) {
      setTeacherId(selectedClass.teid);
      setSubject(selectedClass.subjectname);
      setTeacher(selectedClass.teachername);
      setGrade(selectedClass.grade);
    } else {
      setTeacherId('');
      setSubject('');
      setTeacher('');
      setGrade('');
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/ManagerEnroll");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      studentId: studentId,
      classId: classId,
      teacherId: teacherId,
      subject: subject,
      grade: grade,
      teacherid: teacherId, // Add teacherid to formData
      time: new Date().toISOString() // Add current time to formData
    };

    console.log("Form Data:", formData);

    try {
      await axios.post('/classenrollments', formData);
      toast.success("Enrollment created successfully!");
      // Clear form fields after successful submission
      setStudentId('');
      setClassId('');
      setTeacherId('');
      setSubject('');
      setTeacher('');
      setGrade('');
    } catch (error) {
      console.error("Error creating enrollment:", error);
      toast.error("Failed to create enrollment. Please try again.");
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      <Head />

      <div className="w-full md:pl-[250px]">
        <div className="w-full max-w-[600px] mx-auto px-3 sm:px-4 mt-4 sm:mt-8">
          {/* Title Dash Section */}
          <div className="border-b-2 border-gray-200 pb-3 sm:pb-4 mb-4 sm:mb-6">
            <h1 className="text-lg sm:text-2xl font-black text-[#13293d] tracking-tight uppercase">
              New Course Enrollment
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              Assign students to active academic class frames
            </p>
          </div>

          {/* Form Container Wrapper Card */}
          <div className="bg-white border-2 border-slate-200 rounded-[16px] sm:rounded-[20px] shadow-sm p-4 sm:p-6 md:p-8 overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Student Selector Row */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-bold uppercase tracking-wider text-gray-600"
                  htmlFor="studentId"
                >
                  Student ID / Username
                </label>
                <div className="relative">
                  <select
                    id="studentId"
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all appearance-none text-gray-800 font-medium cursor-pointer"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                  >
                    <option value="">Select Student</option>
                    {students.map((student) => (
                      <option key={student._id} value={student.username}>
                        {student.username}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Class Selector Row */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-bold uppercase tracking-wider text-gray-600"
                  htmlFor="classId"
                >
                  Class ID
                </label>
                <div className="relative">
                  <select
                    id="classId"
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all appearance-none text-gray-800 font-medium cursor-pointer"
                    value={classId}
                    onChange={handleClassChange}
                  >
                    <option value="">Select Class ID</option>
                    {classes.map((classItem) => (
                      <option key={classItem._id} value={classItem.sbid}>
                        {classItem.sbid}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </div>
                </div>
              </div>

              <hr className="border-slate-100 my-2" />

              {/* Auto-Filled Parameters Matrix Block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 bg-slate-50/60 border border-slate-100 p-3 sm:p-4 rounded-xl">
                <div className="flex flex-col gap-1.5 min-w-0">
                  <label
                    className="text-[10px] font-bold uppercase tracking-wider text-gray-400"
                    htmlFor="teacherId"
                  >
                    Teacher ID
                  </label>
                  <input
                    type="text"
                    id="teacherId"
                    className="w-full bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none text-gray-500 font-medium cursor-not-allowed"
                    value={teacherId}
                    readOnly
                  />
                </div>

                <div className="flex flex-col gap-1.5 min-w-0">
                  <label
                    className="text-[10px] font-bold uppercase tracking-wider text-gray-400"
                    htmlFor="teacher"
                  >
                    Teacher Name
                  </label>
                  <input
                    type="text"
                    id="teacher"
                    className="w-full bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none text-gray-500 font-medium cursor-not-allowed"
                    value={teacher}
                    readOnly
                  />
                </div>

                <div className="flex flex-col gap-1.5 sm:col-span-2 min-w-0">
                  <label
                    className="text-[10px] font-bold uppercase tracking-wider text-gray-400"
                    htmlFor="subject"
                  >
                    Subject Title
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none text-gray-500 font-medium cursor-not-allowed"
                    value={subject}
                    readOnly
                  />
                </div>

                <div className="flex flex-col gap-1.5 sm:col-span-2 min-w-0">
                  <label
                    className="text-[10px] font-bold uppercase tracking-wider text-gray-400"
                    htmlFor="grade"
                  >
                    Assigned Grade
                  </label>
                  <input
                    type="text"
                    id="grade"
                    className="w-full bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none text-gray-500 font-bold cursor-not-allowed"
                    value={grade ? `Grade ${grade}` : ""}
                    readOnly
                  />
                </div>
              </div>

              {/* Bottom Actions Workspace Operations Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  className="w-full sm:w-auto order-2 sm:order-1 bg-slate-100 hover:bg-slate-200 text-gray-600 text-sm font-bold py-2.5 px-6 rounded-xl transition-all"
                  onClick={handleBack}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 order-1 sm:order-2 bg-[#10a1b6] hover:bg-[#1b5592] text-white text-sm font-bold py-2.5 px-8 rounded-xl shadow-md transition-all uppercase tracking-wider"
                >
                  Submit Enrollment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentForm;