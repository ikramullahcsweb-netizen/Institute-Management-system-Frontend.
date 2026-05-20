import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Head from "../Header/Header";

function ManagerUpdateTimetable() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Unified component operational state layout schema
  const [formData, setFormData] = useState({
    Date: "",
    Class_ID: "",
    Start_time: "",
    End_Time: "",
    Grade: "",
    Subject: "",
    Teacher: "",
    Hall: "",
    Price: "",
    Manager_ID: "",
    Added_Date: "",
  });

  const {
    Date: DateVal,
    Class_ID,
    Start_time,
    End_Time,
    Grade,
    Subject,
    Teacher,
    Hall,
    Price,
    Manager_ID,
    Added_Date,
  } = formData;

  // Local state populator logic - Bypassing real network calls seamlessly
  useEffect(() => {
    console.log(
      `Extracting offline dynamic state values for target identifier key: ${id}`,
    );

    // Injecting fallback data to avoid empty field layers during view state testing
    setFormData({
      Date: "2026-05-20",
      Class_ID: "C-PHYS-101",
      Start_time: "09:00",
      End_Time: "11:00",
      Grade: "11",
      Subject: "Physics",
      Teacher: "Dr. Asim",
      Hall: "Hall A",
      Price: "1500",
      Manager_ID: "M_02",
      Added_Date: "2026-05-10",
    });
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const currentDate = new Date().toISOString().split("T")[0];

    const isCurrentDate = selectedDate === currentDate;
    const now = new Date();
    const currentHour = String(now.getHours()).padStart(2, "0");
    const currentMinute = String(now.getMinutes()).padStart(2, "0");
    const currentTime = `${currentHour}:${currentMinute}`;

    setFormData({
      ...formData,
      Date: selectedDate,
      Added_Date: currentDate,
      Start_time: isCurrentDate ? currentTime : "",
      End_Time: "",
    });
  };

  const handleStartTimeChange = (e) => {
    const selectedStartTime = e.target.value;
    setFormData({ ...formData, Start_time: selectedStartTime });
  };

  const handleEndTimeChange = (e) => {
    const selectedEndTime = e.target.value;
    setFormData({ ...formData, End_Time: selectedEndTime });
  };

  const update = (e) => {
    e.preventDefault();
    console.log("Local State Alterations Saved Successfully:", formData);
    navigate("/Manager/Timetable");
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans">
      <Head />

      <div className="w-full max-w-[850px] mx-auto px-4 mt-8">
        {/* Module Header Segment Identity Layout */}
        <div className="border-b-2 border-gray-200 pb-4 mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
              Update Timetable Slot
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              Re-route live session timelines, adjust operational pricing models
              and switch halls
            </p>
          </div>
          <span className="bg-[#10a1b6] text-white px-2.5 py-1 rounded-md text-[10px] font-black tracking-widest font-mono">
            MODIFICATION
          </span>
        </div>

        {/* Operational Entry Matrix Workspace Box */}
        <div className="bg-white border-2 border-slate-200 rounded-[24px] shadow-sm p-6 md:p-10">
          <form onSubmit={update} className="space-y-5">
            {/* Grid Block Line 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Session Date
                </label>
                <input
                  type="date"
                  name="Date"
                  value={DateVal}
                  onChange={handleDateChange}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all font-mono font-bold text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Class String ID
                </label>
                <input
                  type="text"
                  name="Class_ID"
                  value={Class_ID}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all font-mono font-black text-slate-700"
                />
              </div>
            </div>

            {/* Grid Block Line 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Start Time Marker
                </label>
                <input
                  type="time"
                  name="Start_time"
                  value={Start_time}
                  onChange={handleStartTimeChange}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all font-mono text-emerald-600 font-bold"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  End Time Boundary
                </label>
                <input
                  type="time"
                  name="End_Time"
                  value={End_Time}
                  onChange={handleEndTimeChange}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all font-mono text-rose-600 font-bold"
                />
              </div>
            </div>

            {/* Grid Block Line 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-slate-100 pt-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Target Grade Level
                </label>
                <input
                  type="text"
                  name="Grade"
                  value={Grade}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all font-bold text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Subject Stream Domain
                </label>
                <input
                  type="text"
                  name="Subject"
                  value={Subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all text-gray-700"
                />
              </div>
            </div>

            {/* Grid Block Line 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Assigned Lecturer
                </label>
                <input
                  type="text"
                  name="Teacher"
                  value={Teacher}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all text-gray-800 font-medium"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Classroom Location / Hall
                </label>
                <input
                  type="text"
                  name="Hall"
                  value={Hall}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all text-slate-600"
                />
              </div>
            </div>

            {/* Grid Block Line 5 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-slate-100 pt-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Session Admission Price
                </label>
                <input
                  type="number"
                  name="Price"
                  value={Price}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all font-mono font-bold text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Operator Manager ID
                </label>
                <input
                  type="text"
                  name="Manager_ID"
                  value={Manager_ID}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm outline-none transition-all font-mono uppercase text-gray-700"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Log Creation Timestamp
                </label>
                <input
                  type="date"
                  name="Added_Date"
                  value={Added_Date}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-100 border-2 border-slate-200 text-gray-400 rounded-xl px-4 py-2.5 text-sm outline-none transition-all font-mono cursor-not-allowed"
                />
              </div>
            </div>

            {/* Layout Footer Controls Alignment Group */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-slate-100">
              <button
                type="button"
                className="w-full sm:w-1/3 bg-slate-100 hover:bg-slate-200 text-gray-500 font-bold text-sm py-3 rounded-xl transition-colors order-2 sm:order-1"
                onClick={() => navigate("/Manager/Timetable")}
              >
                Discard Alterations
              </button>
              <button
                type="submit"
                className="w-full sm:w-2/3 bg-[#10a1b6] hover:bg-[#13293d] text-white font-black text-sm uppercase tracking-wider py-3 rounded-xl transition-colors shadow-md order-1 sm:order-2"
              >
                Commit Changes & Propagate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ManagerUpdateTimetable;
