import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Head from "../Header/Header";

function ManagerTimetable() {
  // Pure Local Mock Datasets - Replaces server fetching infrastructure
  const [timetableData, setTimetableData] = useState([
    {
      _id: "time_001",
      Manager_ID: "M_02",
      Added_Date: "2026-05-10",
      Date: "2026-05-20",
      Class_ID: "C-PHYS-101",
      Start_time: "09:00 AM",
      End_Time: "11:00 AM",
      Grade: "11",
      Subject: "Physics",
      Teacher: "Dr. Asim",
      Hall: "Hall A",
      Price: "1500",
    },
    {
      _id: "time_002",
      Manager_ID: "M_02",
      Added_Date: "2026-05-12",
      Date: "2026-05-22",
      Class_ID: "C-CHEM-302",
      Start_time: "11:30 AM",
      End_Time: "01:30 PM",
      Grade: "10",
      Subject: "Chemistry",
      Teacher: "Prof. Sana",
      Hall: "Hall C",
      Price: "1200",
    },
    {
      _id: "time_003",
      Manager_ID: "M_05",
      Added_Date: "2026-04-01",
      Date: "2026-04-15", // Past Date context simulator asset
      Class_ID: "C-MATH-909",
      Start_time: "02:00 PM",
      End_Time: "04:00 PM",
      Grade: "11",
      Subject: "Math",
      Teacher: "Sir Zeeshan",
      Hall: "Hall B",
      Price: "1800",
    },
  ]);

  const [searchDate, setSearchDate] = useState("");
  const [searchTeacher, setSearchTeacher] = useState("");
  const [searchSubject, setSearchSubject] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");

  // Checks context state limits against current native baseline timeline
  const isPastDate = (dateString) => {
    const currentDate = new Date().toISOString().split("T")[0];
    return dateString < currentDate;
  };

  // Compile specific metrics counts
  const teacherCounts = {};
  const filteredDataForMonth = timetableData.filter((item) =>
    item.Date.includes(`-${selectedMonth}-`),
  );

  filteredDataForMonth.forEach((item) => {
    if (!teacherCounts[item.Teacher]) {
      teacherCounts[item.Teacher] = 0;
    }
    teacherCounts[item.Teacher]++;
  });

  // Client PDF compiler sequence block
  const generatePDF = () => {
    if (!selectedMonth) {
      alert(
        "Please select a target month parameter before exporting documents.",
      );
      return;
    }

    const pdf = new jsPDF();
    const targetReportSet = timetableData.filter((item) =>
      item.Date.includes(`-${selectedMonth}-`),
    );

    targetReportSet.sort((a, b) => new Date(a.Date) - new Date(b.Date));

    const tableData = targetReportSet.map((item) => [
      item.Date,
      item.Class_ID,
      item.Teacher,
      item.Grade,
      item.Subject,
      item.Start_time,
      item.End_Time,
      item.Hall,
      item.Price,
    ]);

    pdf.setFontSize(16);
    pdf.text(14, 15, `Timetable Operational Report - Month: ${selectedMonth}`);

    pdf.autoTable({
      startY: 22,
      head: [
        [
          "Date",
          "Class_ID",
          "Teacher",
          "Grade",
          "Subject",
          "Start Time",
          "End Time",
          "Hall",
          "Price",
        ],
      ],
      body: tableData,
      headStyles: { fillColor: [19, 41, 61] },
    });

    let y = pdf.autoTable.previous.finalY + 12;
    pdf.setFontSize(12);
    pdf.text(14, y, "Teacher Aggregated Class Sessions:");
    y += 8;

    Object.keys(teacherCounts).forEach((teacher) => {
      pdf.text(20, y, `${teacher}: ${teacherCounts[teacher]} Lecture slots`);
      y += 6;
    });

    pdf.output("dataurlnewwindow");
  };

  // Realtime multi-parameter matching engine running across memory variables
  useEffect(() => {
    const outputs = timetableData.filter((item) => {
      return (
        item.Date.toLowerCase().includes(searchDate.toLowerCase()) &&
        item.Teacher.toLowerCase().includes(searchTeacher.toLowerCase()) &&
        item.Subject.toLowerCase().includes(searchSubject.toLowerCase())
      );
    });
    setFilteredEvents(outputs);
  }, [searchDate, searchTeacher, searchSubject, timetableData]);

  // Synchronous structural cleanup operation
  const confirmDelete = (itemId) => {
    if (
      window.confirm(
        "Are you sure you want to drop this timetable row component from active arrays?",
      )
    ) {
      setTimetableData((prev) => prev.filter((item) => item._id !== itemId));
    }
  };

  const months = [
    { value: "01", name: "January" },
    { value: "02", name: "February" },
    { value: "03", name: "March" },
    { value: "04", name: "April" },
    { value: "05", name: "May" },
    { value: "06", name: "June" },
    { value: "07", name: "July" },
    { value: "08", name: "August" },
    { value: "09", name: "September" },
    { value: "10", name: "October" },
    { value: "11", name: "November" },
    { value: "12", name: "December" },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans">
      <Head />

      <div className="w-full max-w-[1400px] mx-auto px-4 mt-8">
        {/* Module Header Descriptor */}
        <div className="border-b-2 border-gray-200 pb-4 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
              Academic Schedule Deck
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              Coordinate course timings, assign classroom locations, and audit
              timeline collisions
            </p>
          </div>

          <Link
            to="/Manager/AddnewClasstime"
            className="bg-[#10a1b6] hover:bg-[#13293d] text-white text-xs font-black tracking-wider uppercase px-4 py-2.5 rounded-xl shadow-xs transition-colors text-center"
          >
            Add New Class Time
          </Link>
        </div>

        {/* Real-time Query Filter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 bg-white p-4 border-2 border-slate-200 rounded-2xl shadow-xs">
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">
              Filter Date
            </label>
            <input
              type="date"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 focus:border-[#10a1b6] rounded-xl px-3 py-2 text-xs outline-none text-gray-700 font-mono"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">
              Search Faculty Instructor
            </label>
            <input
              type="text"
              placeholder="e.g. Dr. Asim"
              value={searchTeacher}
              onChange={(e) => setSearchTeacher(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 focus:border-[#10a1b6] rounded-xl px-3 py-2 text-xs outline-none text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">
              Search Subject Core
            </label>
            <input
              type="text"
              placeholder="e.g. Quantum Physics"
              value={searchSubject}
              onChange={(e) => setSearchSubject(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 focus:border-[#10a1b6] rounded-xl px-3 py-2 text-xs outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Schedule Main Matrix Canvas */}
        <div className="bg-white border-2 border-slate-200 rounded-[24px] overflow-hidden shadow-xs mb-6">
          <div className="overflow-x-auto w-full">
            <table className="w-full min-w-[1250px] border-collapse text-left">
              <thead>
                <tr className="bg-[#13293d] text-white text-xs font-black uppercase tracking-wider border-b border-slate-200">
                  <th className="py-4 px-4 text-center">Mgr ID</th>
                  <th className="py-4 px-4">Created Date</th>
                  <th className="py-4 px-4">Session Date</th>
                  <th className="py-4 px-4">Class Code ID</th>
                  <th className="py-4 px-4">Window Timeline</th>
                  <th className="py-4 px-4 text-center">Grade</th>
                  <th className="py-4 px-4">Subject Field</th>
                  <th className="py-4 px-4">Lead Teacher</th>
                  <th className="py-4 px-4 text-center">Hall</th>
                  <th className="py-4 px-4 text-right">Fee Rate</th>
                  <th className="py-4 px-5 text-center">Action Controls</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-xs text-gray-700">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((item) => {
                    const isPast = isPastDate(item.Date);
                    return (
                      <tr
                        key={item._id}
                        className={`hover:bg-slate-50/80 transition-colors ${isPast ? "bg-slate-100/50 opacity-75" : ""}`}
                      >
                        <td className="py-4 px-4 text-center font-mono font-bold text-slate-400">
                          {item.Manager_ID}
                        </td>
                        <td className="py-4 px-4 font-mono text-gray-400">
                          {item.Added_Date}
                        </td>
                        <td
                          className={`py-4 px-4 font-mono font-bold ${isPast ? "text-rose-600 line-through" : "text-gray-900"}`}
                        >
                          {item.Date}
                        </td>
                        <td className="py-4 px-4 font-mono font-black text-xs text-slate-600">
                          {item.Class_ID}
                        </td>
                        <td className="py-4 px-4 font-mono font-bold text-gray-600">
                          <span className="text-emerald-600">
                            {item.Start_time}
                          </span>{" "}
                          -{" "}
                          <span className="text-amber-600">
                            {item.End_Time}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center font-bold">
                          <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                            G-{item.Grade}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-bold text-gray-900">
                          {item.Subject}
                        </td>
                        <td className="py-4 px-4 text-[#10a1b6] font-bold">
                          {item.Teacher}
                        </td>
                        <td className="py-4 px-4 text-center font-bold text-slate-500">
                          {item.Hall}
                        </td>
                        <td className="py-4 px-4 text-right font-mono font-bold">
                          Rs {item.Price}
                        </td>

                        {/* Interactive Task Switches */}
                        <td className="py-4 px-5 text-center">
                          <div className="flex items-center justify-center gap-1.5">
                            <Link to={`/Manager/UpdateTimetable/${item._id}`}>
                              <button className="bg-slate-50 hover:bg-[#13293d] text-[#13293d] hover:text-white text-[11px] font-bold py-1 px-2.5 rounded-md transition-colors border border-slate-200">
                                Edit
                              </button>
                            </Link>
                            <button
                              className={`text-[11px] font-bold py-1 px-2.5 rounded-md transition-all border ${
                                isPast
                                  ? "bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed"
                                  : "bg-rose-50 hover:bg-rose-600 border-rose-100 text-rose-600 hover:text-white"
                              }`}
                              onClick={() => !isPast && confirmDelete(item._id)}
                              disabled={isPast}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan="11"
                      className="py-12 text-center text-xs font-bold text-gray-400 uppercase tracking-widest"
                    >
                      No active lecture slots or timetable profiles match
                      current criteria strings.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Operations & Report Section */}
        <div className="bg-white border-2 border-slate-200 rounded-[24px] p-6 shadow-xs flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4">
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex flex-col gap-1 w-full sm:w-56">
              <label
                htmlFor="month"
                className="text-[10px] font-bold text-gray-500 uppercase tracking-wider pl-1"
              >
                Target Compilation Month
              </label>
              <select
                id="month"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:border-[#10a1b6] text-xs font-bold rounded-xl px-3 py-2 outline-none text-gray-700"
              >
                <option value="">-- Choose target month --</option>
                {months.map((month, index) => (
                  <option key={index} value={month.value}>
                    {month.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={generatePDF}
            className="w-full sm:w-auto bg-[#13293d] hover:bg-[#10a1b6] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-xl transition-colors shadow-xs"
          >
            Generate Document PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default ManagerTimetable;
