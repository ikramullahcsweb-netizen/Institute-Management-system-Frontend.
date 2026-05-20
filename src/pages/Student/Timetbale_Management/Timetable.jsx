import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import Head from '../Header/Header';
import { FaSearch, FaFilter, FaCalendarAlt, FaChalkboard, FaLayerGroup } from 'react-icons/fa';

function WeekTimetable() {
  // Pure Local Mock Static Datasets matching your pipeline database schemas
  const [timetableData] = useState([
    {
      id: 1,
      Grade: "A+",
      Teacher: "Dr. Asif Khan",
      Subject: "Computer Science",
      Hall: "Lab Room 03",
      Date: "2026-05-20", // Matches current time horizon context
      Start_time: "09:00:00",
      End_Time: "10:30:00",
      bgColor: "#384D6C" // Premium Theme Primary Dark
    },
    {
      id: 2,
      Grade: "A+",
      Teacher: "Prof. Maria Jameel",
      Subject: "Mathematics",
      Hall: "Lecture Theater B",
      Date: "2026-05-21",
      Start_time: "11:00:00",
      End_Time: "12:30:00",
      bgColor: "#4A5D78"
    },
    {
      id: 3,
      Grade: "B",
      Teacher: "Engr. Bilal Shah",
      Subject: "Web Engineering",
      Hall: "MERN Dev Studio",
      Date: "2026-05-20",
      Start_time: "14:00:00",
      End_Time: "16:00:00",
      bgColor: "#2E3B52"
    }
  ]);

  // Operational State Architecture
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [gradeFilter, setGradeFilter] = useState('');
  const [teacherFilter, setTeacherFilter] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');

  // Localizer initialization via Moment Engine
  const localizer = momentLocalizer(moment);

  // Filter Engine Routine running locally on static state updates
  useEffect(() => {
    const filtered = timetableData.filter(event => {
      const gradeMatch = !gradeFilter || event.Grade.toLowerCase().includes(gradeFilter.toLowerCase());
      const teacherMatch = !teacherFilter || event.Teacher.toLowerCase().includes(teacherFilter.toLowerCase());
      const subjectMatch = !subjectFilter || event.Subject.toLowerCase().includes(subjectFilter.toLowerCase());
      return gradeMatch && teacherMatch && subjectMatch;
    });
    setFilteredEvents(filtered);
  }, [gradeFilter, teacherFilter, subjectFilter, timetableData]);

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12">
      <Head />

      {/* Main Structural Layout Grid Matrix with Left Sidebar Padding Cushion */}
      <div className="w-full max-w-[1300px] mx-auto px-4 pl-4 md:pl-[290px] mt-8 transition-all space-y-6">
        
        {/* Step 2 Brand Header Accent Box Panel */}
        <div className="bg-[#C9E8EA] border-2 border-slate-900 rounded-[20px] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div>
            <h1 className="text-xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
              <FaCalendarAlt className="text-slate-800" />
              <span>Academic Lecture Timetable</span>
            </h1>
            <p className="text-[11px] text-slate-700 font-bold mt-0.5 uppercase tracking-wide">
              Inspect upcoming lecture allocations, map hall slots, and handle criteria search filters.
            </p>
          </div>
          <span className="text-[10px] bg-white text-slate-900 border-2 border-slate-900 font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shrink-0">
            Static Schedule View
          </span>
        </div>

        {/* Search Parameter Dashboard Filters Control Box */}
        <div className="bg-white border-2 border-slate-900 rounded-[22px] p-5 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
            <FaFilter className="text-slate-400 text-xs" />
            <h2 className="text-xs font-black text-slate-800 uppercase tracking-widest">
              Live Query Search Filters
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Grade Input Filter Node */}
            <div className="relative">
              <input
                type="text"
                placeholder="Filter by grade (e.g. A+)"
                value={gradeFilter}
                onChange={(e) => setGradeFilter(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-xs font-bold text-slate-800 placeholder-slate-400 px-4 py-3 pl-9 rounded-xl focus:outline-none transition-colors"
              />
              <FaLayerGroup className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
            </div>

            {/* Teacher Input Filter Node */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search Instructor name..."
                value={teacherFilter}
                onChange={(e) => setTeacherFilter(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-xs font-bold text-slate-800 placeholder-slate-400 px-4 py-3 pl-9 rounded-xl focus:outline-none transition-colors"
              />
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
            </div>

            {/* Subject Input Filter Node */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search subject course..."
                value={subjectFilter}
                onChange={(e) => setSubjectFilter(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-xs font-bold text-slate-800 placeholder-slate-400 px-4 py-3 pl-9 rounded-xl focus:outline-none transition-colors"
              />
              <FaChalkboard className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
            </div>
          </div>
        </div>

        {/* Calendar High-Fidelity Workspace Wrapper Container */}
        <div className="bg-white border-2 border-slate-900 rounded-[22px] p-4 md:p-6 shadow-sm overflow-hidden">
          <div className="w-full overflow-x-auto">
            <div className="min-w-[800px] h-[750px]">
              <Calendar
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                events={filteredEvents.map((event) => ({
                  id: event.id,
                  title: (
                    <div className="p-1 space-y-0.5 text-left h-full">
                      <div className="font-black uppercase tracking-wide text-[11px] truncate">{event.Subject}</div>
                      <div className="font-bold opacity-90 text-[10px] truncate">👨‍🏫 {event.Teacher}</div>
                      <div className="font-semibold text-[9px] bg-black/20 inline-block px-1.5 py-0.5 rounded mt-1">📍 {event.Hall}</div>
                    </div>
                  ),
                  start: new Date(event.Date + 'T' + event.Start_time),
                  end: new Date(event.Date + 'T' + event.End_Time),
                  bgColor: event.bgColor
                }))}
                eventPropGetter={(event) => ({
                  className: "shadow-xs border-0 rounded-lg",
                  style: {
                    backgroundColor: event.bgColor || '#384D6C',
                    color: 'white',
                    padding: '4px'
                  }
                })}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default WeekTimetable;