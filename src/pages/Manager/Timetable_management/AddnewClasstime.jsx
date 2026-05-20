import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Head from "../Header/Header";

const AddClassForm = () => {
  const navigator = useNavigate();

  // Clean input field reactive variable matrices tracking
  const [date, setDate] = useState("");
  const [Class_ID, setClass_ID] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [teacher, setTeacher] = useState("");
  const [hall, setHall] = useState("");
  const [price, setPrice] = useState("");
  const [managerId, setManagerId] = useState("");
  const [todayDate, setTodayDate] = useState("");

  // Auto initialize live timestamps context
  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setTodayDate(currentDate);

    const now = new Date();
    const currentHour = String(now.getHours()).padStart(2, "0");
    const currentMinute = String(now.getMinutes()).padStart(2, "0");
    setStartTime(`${currentHour}:${currentMinute}`);
  }, []);

  // Safe client interceptor logic execution framework
  const handleSubmit = (e) => {
    e.preventDefault();

    const mockNewClassPayload = {
      Date: date,
      Class_ID: Class_ID,
      Start_time: startTime,
      End_Time: endTime,
      Grade: grade,
      Subject: subject,
      Teacher: teacher,
      Hall: hall,
      Price: parseFloat(price) || 0,
      Manager_ID: managerId,
      Added_Date: todayDate,
    };

    // Log the created item object to simulate backend processing arrays
    console.log(
      "Virtual Payload Committed to Local Storage Memory Matrix:",
      mockNewClassPayload,
    );

    // Smooth localized redirect link pipeline trigger
    navigator("/Manager/Timetable");
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    if (selectedDate === todayDate) {
      const now = new Date();
      const currentHour = String(now.getHours()).padStart(2, "0");
      const currentMinute = String(now.getMinutes()).padStart(2, "0");
      setStartTime(`${currentHour}:${currentMinute}`);
    }
  };

  const handleStartTimeChange = (e) => {
    const selectedStartTime = e.target.value;
    setStartTime(selectedStartTime);
    if (!endTime || selectedStartTime > endTime) {
      setEndTime(selectedStartTime);
    }
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans">
      <Head />

      <div className="w-full max-w-[850px] mx-auto px-4 mt-8">
        {/* Step 2 Profile Consistent Identity Header */}
        <div className="border-b-2 border-gray-200 pb-4 mb-8">
          <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
            Schedule New Class Entry
          </h1>
          <p className="text-xs text-gray-500 font-medium">
            Provision alternative lecture timetables, lock classroom spaces and
            link instructors
          </p>
        </div>

        {/* Operational Grid Input Layout Block Sheet */}
        <div className="bg-white border-2 border-slate-200 rounded-[24px] shadow-sm p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Primary Track Parameters Matrix Section Header */}
            <div className="text-[#10a1b6] font-black text-xs uppercase tracking-widest border-b border-slate-100 pb-1.5 mb-2">
              1. Basic Logistics Metadata
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Session Date
                </label>
                <input
                  type="date"
                  value={date}
                  min={todayDate}
                  onChange={handleDateChange}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all font-mono font-bold text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Class Reference ID
                </label>
                <input
                  type="text"
                  placeholder="e.g. C-PHYS-101"
                  value={Class_ID}
                  onChange={(e) => setClass_ID(e.target.value)}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all font-mono font-black placeholder-gray-400"
                />
              </div>
            </div>

            {/* Timeline Window Boundaries Section Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Window Start Time
                </label>
                <input
                  type="time"
                  value={startTime}
                  min={date === todayDate ? startTime : undefined}
                  onChange={handleStartTimeChange}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all font-mono text-emerald-600 font-bold"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Window End Time
                </label>
                <input
                  type="time"
                  value={endTime}
                  min={startTime}
                  onChange={handleEndTimeChange}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all font-mono text-amber-600 font-bold"
                />
              </div>
            </div>

            {/* Academic Content parameters assignment structure layer */}
            <div className="text-[#10a1b6] font-black text-xs uppercase tracking-widest border-b border-slate-100 pt-4 pb-1.5 mb-2">
              2. Academic Track & Assignment Allocation
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Target Grade
                </label>
                <input
                  type="text"
                  placeholder="e.g. 11"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all font-bold"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Subject Field
                </label>
                <input
                  type="text"
                  placeholder="e.g. Organic Chemistry"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Assigned Faculty Teacher
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dr. Asim"
                  value={teacher}
                  onChange={(e) => setTeacher(e.target.value)}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all font-bold"
                />
              </div>
            </div>

            {/* Costing parameters and space location grids */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-slate-100 pt-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Allocated Hall Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Main Auditorium"
                  value={hall}
                  onChange={(e) => setHall(e.target.value)}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Admission Ticket Price (Rs)
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all font-mono font-bold"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Creation Date (System Controlled)
                </label>
                <input
                  type="date"
                  value={todayDate}
                  readOnly
                  disabled
                  className="w-full bg-slate-100 border-2 border-slate-200 text-gray-400 rounded-xl px-4 py-2.5 text-sm outline-none cursor-not-allowed font-mono"
                />
              </div>
            </div>

            {/* Operator Identifier Validation Matrix Field */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-slate-100 pt-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600 text-[#13293d]">
                  Authorizing Manager ID Token
                </label>
                <input
                  type="text"
                  placeholder="e.g. M_MGR_90"
                  value={managerId}
                  onChange={(e) => setManagerId(e.target.value)}
                  required
                  className="w-full bg-slate-50 border-2 border-[#13293d]/20 focus:border-[#13293d] rounded-xl px-4 py-2.5 text-sm outline-none transition-all font-mono uppercase font-bold text-gray-800"
                />
              </div>
            </div>

            {/* Form Execution Control Actions Panel */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-slate-100">
              <button
                type="button"
                className="w-full sm:w-1/3 bg-slate-100 hover:bg-slate-200 text-gray-500 font-bold text-sm py-3 rounded-xl transition-all order-2 sm:order-1"
                onClick={() => navigator("/Manager/Timetable")}
              >
                Cancel Process
              </button>
              <button
                type="submit"
                className="w-full sm:w-2/3 bg-[#10a1b6] hover:bg-[#13293d] text-white font-black text-sm uppercase tracking-wider py-3 rounded-xl transition-all shadow-md order-1 sm:order-2"
              >
                Compile & Append Class Time
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClassForm;
