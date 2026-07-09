import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";
import Head from "../Header/Header";

function ManagerTimetable() {
  const [timetableData, setTimetableData] = useState([]);
  const [searchDate, setSearchDate] = useState("");
  const [searchTeacher, setSearchTeacher] = useState("");
  const [searchSubject, setSearchSubject] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");

  // Base URL for API
  const API_BASE = ""; // Vite proxy use karta hai

  // Data Fetching
  useEffect(() => {
    fetchTimetableData();
  }, []);

  const fetchTimetableData = () => {
    axios.get(`${API_BASE}/api/timetable/Manager/Timetable`)
      .then((res) => {
        setTimetableData(res.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  };

  // Real-time Filtering Engine
  useEffect(() => {
    const outputs = timetableData.filter((item) => {
      return (
        (item.Date || "").toLowerCase().includes(searchDate.toLowerCase()) &&
        (item.Teacher || "").toLowerCase().includes(searchTeacher.toLowerCase()) &&
        (item.Subject || "").toLowerCase().includes(searchSubject.toLowerCase())
      );
    });
    setFilteredEvents(outputs);
  }, [searchDate, searchTeacher, searchSubject, timetableData]);

  // Utility: Date Validation
  const isPastDate = (dateString) => {
    const currentDate = new Date().toISOString().split("T")[0];
    return dateString < currentDate;
  };

  // Delete Operation
  const handleDelete = (id) => {
    axios.delete(`${API_BASE}/api/timetable/Manager/DeleteTimetable/${id}`)
      .then(() => {
        setTimetableData((prev) => prev.filter((item) => item._id !== id));
      })
      .catch((err) => console.error("Error deleting record:", err));
  };

  const confirmDelete = (itemId) => {
    if (window.confirm("Are you sure you want to drop this timetable record?")) {
      handleDelete(itemId);
    }
  };

  // PDF Export
  const generatePDF = () => {
    if (!selectedMonth) {
      alert("Please select a target month first.");
      return;
    }

    const pdf = new jsPDF();
    const targetReportSet = timetableData.filter((item) => item.Date.includes(`-${selectedMonth}-`));
    targetReportSet.sort((a, b) => new Date(a.Date) - new Date(b.Date));

    const tableData = targetReportSet.map((item) => [
      item.Date, item.Class_ID, item.Teacher, item.Grade, item.Subject, item.Start_time, item.End_Time, item.Hall, item.Price
    ]);

    pdf.setFontSize(16);
    pdf.text(`Academic Schedule Report: ${selectedMonth}`, 14, 15);
    pdf.autoTable({
      startY: 22,
      head: [['Date', 'Class ID', 'Teacher', 'Grade', 'Subject', 'Start', 'End', 'Hall', 'Price']],
      body: tableData,
    });
    pdf.output("dataurlnewwindow");
  };

  const months = [
    { value: "01", name: "January" }, { value: "02", name: "February" }, { value: "03", name: "March" },
    { value: "04", name: "April" }, { value: "05", name: "May" }, { value: "06", name: "June" },
    { value: "07", name: "July" }, { value: "08", name: "August" }, { value: "09", name: "September" },
    { value: "10", name: "October" }, { value: "11", name: "November" }, { value: "12", name: "December" },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans">
      <Head />
      <div className="w-full max-w-[1400px] mx-auto px-4 mt-8 md:ml-[280px]">
        
        {/* Header Section */}
        <div className="border-b-2 border-gray-200 pb-4 mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-black text-[#13293d] uppercase tracking-tight">Academic Schedule Deck</h1>
          <Link to="/Manager/AddnewClasstime" className="bg-[#10a1b6] hover:bg-[#13293d] text-white text-xs font-black uppercase px-4 py-2.5 rounded-xl transition-colors">
            Add New Class Time
          </Link>
        </div>

        {/* Filter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-white p-4 border border-slate-200 rounded-2xl shadow-sm">
          <input type="date" className="bg-slate-50 border rounded-xl px-3 py-2 text-xs" onChange={(e) => setSearchDate(e.target.value)} />
          <input type="text" placeholder="Search Teacher..." className="bg-slate-50 border rounded-xl px-3 py-2 text-xs" onChange={(e) => setSearchTeacher(e.target.value)} />
          <input type="text" placeholder="Search Subject..." className="bg-slate-50 border rounded-xl px-3 py-2 text-xs" onChange={(e) => setSearchSubject(e.target.value)} />
        </div>

        {/* Schedule Table */}
        <div className="bg-white border border-slate-200 rounded-[24px] overflow-hidden shadow-sm mb-6">
          <table className="w-full border-collapse text-left">
            <thead className="bg-[#13293d] text-white text-xs uppercase">
              <tr>
                <th className="p-4">Date</th>
                <th className="p-4">Class ID</th>
                <th className="p-4">Teacher</th>
                <th className="p-4">Subject</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filteredEvents.map((item) => (
                <tr key={item._id} className={isPastDate(item.Date) ? "bg-slate-50 opacity-60" : "hover:bg-slate-50"}>
                  <td className="p-4">{item.Date}</td>
                  <td className="p-4 font-bold">{item.Class_ID}</td>
                  <td className="p-4">{item.Teacher}</td>
                  <td className="p-4">{item.Subject}</td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center gap-2">
                      <Link to={`/Manager/UpdateTimetable/${item._id}`} className="bg-slate-200 px-3 py-1 rounded-md font-bold">Edit</Link>
                      <button onClick={() => confirmDelete(item._id)} className="bg-red-500 text-white px-3 py-1 rounded-md font-bold" disabled={isPastDate(item.Date)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Report Section */}
        <div className="bg-white p-6 border border-slate-200 rounded-[24px] flex flex-wrap items-center gap-4">
          <select className="bg-slate-50 border rounded-xl px-4 py-2 text-xs" onChange={(e) => setSelectedMonth(e.target.value)}>
            <option value="">Select Month</option>
            {months.map((m) => <option key={m.value} value={m.value}>{m.name}</option>)}
          </select>
          <button onClick={generatePDF} className="bg-[#13293d] text-white px-6 py-2 rounded-xl text-xs font-bold uppercase">
            Generate PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default ManagerTimetable;