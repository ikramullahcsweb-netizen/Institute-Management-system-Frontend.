import React, { useState, useEffect } from 'react';
import Head from '../Header/Header';
import { toast, Toaster } from 'react-hot-toast';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { FaCheckCircle, FaCalendarAlt, FaSearch, FaFileDownload, FaClipboardList, FaLayersGroup } from 'react-icons/fa';

function AttendStudent() {
  // Functional front-end mockup states mapping robust structural schemas
  const [studentId] = useState('STU-2026-09');
  const [studentName] = useState('Ikram Ullah');
  const [userName] = useState('ikram_dev');
  const [dateFilter, setDateFilter] = useState('');
  const [classFilter, setClassFilter] = useState('');
  const [todayDate, setTodayDate] = useState('');

  const [attendances] = useState([
    { _id: '1', classId: 'CLS-101', subject: 'React Frontend Systems', date: '2026-05-18', time: '10:00 AM' },
    { _id: '2', classId: 'CLS-102', subject: 'Node.js Core Architecture', date: '2026-05-19', time: '11:30 AM' },
    { _id: '3', classId: 'CLS-101', subject: 'React Frontend Systems', date: '2026-05-20', time: '10:15 AM' },
    { _id: '4', classId: 'CLS-104', subject: 'MongoDB Aggregations Masterclass', date: '2026-05-20', time: '02:00 PM' }
  ]);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setTodayDate(formattedDate);
  }, []);

  const handleDateFilter = (e) => setDateFilter(e.target.value);
  const handleClassFilter = (e) => setClassFilter(e.target.value);

  // Computed dynamic state lists filtering
  const filteredAttendancesByClass = attendances.filter((attendance) =>
    attendance.classId.toLowerCase().includes(classFilter.toLowerCase()) ||
    attendance.subject.toLowerCase().includes(classFilter.toLowerCase())
  );

  const filteredAttendancesByDate = attendances.filter((attendance) =>
    dateFilter ? attendance.date === dateFilter : true
  );

  // PDF Download Structured Document Definition
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.header}>Attendance Audit Report</Text>
          <Text style={pdfStyles.subheader}>Student Name: {studentName}</Text>
          <Text style={pdfStyles.subheader}>Student ID: {studentId}</Text>
          <Text style={pdfStyles.subheader}>Generated System Date: {todayDate}</Text>

          <View style={pdfStyles.table}>
            <View style={pdfStyles.tableRow}>
              <Text style={pdfStyles.tableHeader}>Class ID</Text>
              <Text style={pdfStyles.tableHeader}>Subject</Text>
              <Text style={pdfStyles.tableHeader}>Date</Text>
              <Text style={pdfStyles.tableHeader}>Time</Text>
            </View>
            {filteredAttendancesByClass.map((attendance) => (
              <View key={attendance._id} style={pdfStyles.tableRow}>
                <Text style={pdfStyles.tableData}>{attendance.classId}</Text>
                <Text style={pdfStyles.tableData}>{attendance.subject}</Text>
                <Text style={pdfStyles.tableData}>{attendance.date}</Text>
                <Text style={pdfStyles.tableData}>{attendance.time}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12">
      <Toaster position="top-right" />
      <Head />

      {/* Main Container Layout Area with Sidebar Offset Clearance Grid */}
      <div className="w-full max-w-[1250px] mx-auto px-4 pl-4 md:pl-[290px] mt-8 transition-all">
        
        {/* Secondary Title Section Row Deck */}
        <div className="w-full bg-[#C9E8EA] border border-slate-200 rounded-[20px] p-5 mb-8 flex items-center justify-between shadow-xs">
          <div>
            <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
              <FaClipboardList className="text-slate-700" />
              <span>Student Attendance Ledger</span>
            </h1>
            <p className="text-[11px] text-slate-600 font-bold mt-0.5 uppercase tracking-wide">
              Review history records, filter timeline occurrences, and download compliance reports.
            </p>
          </div>
        </div>

        {/* Core Subsystem Split Flex Grid Configuration */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
          
          {/* Card Module 1: Class and Subject Filtering View */}
          <div className="bg-white border-2 border-slate-200 rounded-[22px] shadow-xs overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-2.5">
              <FaLayersGroup className="text-[#483EA8] text-sm" />
              <h2 className="text-xs font-black text-slate-800 uppercase tracking-widest">
                View Attendance By Class Group
              </h2>
            </div>
            
            <div className="p-6">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center gap-3 focus-within:border-[#483EA8] transition-colors mb-5">
                <FaSearch className="text-slate-400 text-sm shrink-0" />
                <div className="w-full">
                  <label className="block text-[9px] font-black text-[#667A8A] uppercase tracking-wider mb-0.5">Search Query</label>
                  <input
                    type="text"
                    placeholder="Search By Class ID Or Subject..."
                    value={classFilter}
                    onChange={handleClassFilter}
                    className="w-full bg-transparent text-xs font-bold text-slate-700 outline-none placeholder-slate-400"
                  />
                </div>
              </div>

              {/* Responsive Layout Table Deck */}
              <div className="w-full overflow-x-auto border border-slate-100 rounded-xl mb-5">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-[10px] font-black text-[#667A8A] uppercase tracking-wider border-b border-slate-200">
                      <th className="px-4 py-3">Class ID</th>
                      <th className="px-4 py-3">Subject</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-700">
                    {filteredAttendancesByClass.length > 0 ? (
                      filteredAttendancesByClass.map((attendance) => (
                        <tr key={attendance._id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="px-4 py-3 text-[#483EA8] font-bold">{attendance.classId}</td>
                          <td className="px-4 py-3 font-medium">{attendance.subject}</td>
                          <td className="px-4 py-3 text-slate-500">{attendance.date}</td>
                          <td className="px-4 py-3 text-slate-500">{attendance.time}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center py-8 text-xs font-bold text-slate-400 uppercase tracking-wider">No matching class records.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* External PDF Toolkit Action Downloader Interface */}
              <div className="flex justify-end">
                <PDFDownloadLink document={<MyDocument />} fileName={`Attendance_Report_${studentId}.pdf`}>
                  {({ loading }) => (
                    <button 
                      disabled={loading}
                      className="bg-[#483EA8] hover:bg-[#392f8a] disabled:bg-slate-300 text-white text-[11px] font-black uppercase tracking-wider py-2.5 px-4 rounded-xl flex items-center gap-2 transition-all shadow-xs"
                    >
                      <FaFileDownload className="text-xs" />
                      <span>{loading ? 'Processing Document...' : 'Download Full PDF Report'}</span>
                    </button>
                  )}
                </PDFDownloadLink>
              </div>
            </div>
          </div>

          {/* Card Module 2: Absolute Calendar Date Filtering View */}
          <div className="bg-white border-2 border-slate-200 rounded-[22px] shadow-xs overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-2.5">
              <FaCalendarAlt className="text-[#483EA8] text-sm" />
              <h2 className="text-xs font-black text-slate-800 uppercase tracking-widest">
                Track Entries By Calendar Date
              </h2>
            </div>

            <div className="p-6">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center gap-3 focus-within:border-[#483EA8] transition-colors mb-5">
                <FaCalendarAlt className="text-slate-400 text-sm shrink-0" />
                <div className="w-full">
                  <label className="block text-[9px] font-black text-[#667A8A] uppercase tracking-wider mb-0.5">Target Date Timeline</label>
                  <input
                    type="date"
                    value={dateFilter}
                    onChange={handleDateFilter}
                    placeholder={todayDate}
                    className="w-full bg-transparent text-xs font-bold text-slate-700 outline-none"
                  />
                </div>
              </div>

              {/* Data Table Matrix Display panel */}
              <div className="w-full overflow-x-auto border border-slate-100 rounded-xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-[10px] font-black text-[#667A8A] uppercase tracking-wider border-b border-slate-200">
                      <th className="px-4 py-3">Class ID</th>
                      <th className="px-4 py-3">Subject</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-700">
                    {filteredAttendancesByDate.length > 0 ? (
                      filteredAttendancesByDate.map((attendance) => (
                        <tr key={attendance._id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="px-4 py-3 text-[#483EA8] font-bold">{attendance.classId}</td>
                          <td className="px-4 py-3 font-medium">{attendance.subject}</td>
                          <td className="px-4 py-3 text-slate-500">{attendance.date}</td>
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">
                              <FaCheckCircle className="text-[10px]" />
                              <span>Present</span>
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center py-8 text-xs font-bold text-slate-400 uppercase tracking-wider">No logged records on this specific date.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// PDF Document Layout Stylesheet Compilation
const pdfStyles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  header: {
    fontSize: 22,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#1e293b',
    textTransform: 'uppercase'
  },
  subheader: {
    fontSize: 11,
    marginBottom: 6,
    color: '#475569'
  },
  table: {
    display: 'table',
    width: '100%',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 6
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    minHeight: 26,
    alignItems: 'center'
  },
  tableHeader: {
    backgroundColor: '#f8fafc',
    fontWeight: 'bold',
    fontSize: 10,
    color: '#475569',
    padding: 6,
    flex: 1,
    textAlign: 'center'
  },
  tableData: {
    padding: 6,
    fontSize: 9,
    color: '#334155',
    flex: 1,
    textAlign: 'center'
  }
});

export default AttendStudent;