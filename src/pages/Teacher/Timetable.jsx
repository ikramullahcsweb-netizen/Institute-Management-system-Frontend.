// // // import React, { useState, useEffect } from 'react';
// // // import { Calendar, momentLocalizer } from 'react-big-calendar';
// // // import 'react-big-calendar/lib/css/react-big-calendar.css';
// // // import moment from 'moment';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import Swal from 'sweetalert2';

// // // // Iconography assets optimization map
// // // import { 
// // //   FaHome, FaChalkboardTeacher, FaUserCheck, FaWallet, 
// // //   FaRegCalendarAlt, FaHistory, FaComments, FaAward, 
// // //   FaUserCircle, FaSignOutAlt, FaSearch, FaGraduationCap, FaBookOpen 
// // // } from 'react-icons/fa';

// // // import homeImg from './navbar_images/Home.png';
// // // import classesImg from './navbar_images/Class.png';
// // // import enrollImg from './navbar_images/Enroll.png';
// // // import payImg from './navbar_images/Pay.png';
// // // import timeImg from './navbar_images/Time.png';
// // // import attendanceImg from './navbar_images/Attendance.png';
// // // import qaImg from './navbar_images/Qa.png';
// // // import feedbackImg from './navbar_images/Feedback.png';
// // // import profileImg from './navbar_images/Profile.png';
// // // import walletImg from './navbar_images/Wallet.png';
// // // import logoutImg from './navbar_images/Logout.png';

// // // const TeacherWeekTimetable = () => {
// // //   const navigate = useNavigate();
// // //   const localizer = momentLocalizer(moment);

// // //   // Core structured client mockup template dataset
// // //   const [timetableData] = useState([
// // //     { id: 1, Subject: 'Advanced Calculus', Teacher: 'Prof. Asif Khan', Grade: 'Grade-11', Hall: 'Room 401', Date: moment().format('YYYY-MM-DD'), Start_time: '09:00:00', End_Time: '10:30:00' },
// // //     { id: 2, Subject: 'Quantum Physics', Teacher: 'Dr. Sarah Ahmed', Grade: 'Grade-12', Hall: 'Lab 2', Date: moment().add(1, 'days').format('YYYY-MM-DD'), Start_time: '11:00:00', End_Time: '12:30:00' },
// // //     { id: 3, Subject: 'Organic Chemistry', Teacher: 'Prof. Asif Khan', Grade: 'Grade-11', Hall: 'Theater B', Date: moment().add(2, 'days').format('YYYY-MM-DD'), Start_time: '14:00:00', End_Time: '15:30:00' },
// // //     { id: 4, Subject: 'Linear Algebra', Teacher: 'Dr. Sajid Ali', Grade: 'Grade-10', Hall: 'Room 102', Date: moment().format('YYYY-MM-DD'), Start_time: '13:00:00', End_Time: '14:30:00' }
// // //   ]);

// // //   const [filteredEvents, setFilteredEvents] = useState([]);
// // //   const [gradeFilter, setGradeFilter] = useState('');
// // //   const [teacherFilter, setTeacherFilter] = useState('');
// // //   const [subjectFilter, setSubjectFilter] = useState('');

// // //   useEffect(() => {
// // //     let filtered = timetableData.filter(event => {
// // //       const gradeMatch = !gradeFilter || event.Grade.toLowerCase().includes(gradeFilter.toLowerCase());
// // //       const teacherMatch = !teacherFilter || event.Teacher.toLowerCase().includes(teacherFilter.toLowerCase());
// // //       const subjectMatch = !subjectFilter || event.Subject.toLowerCase().includes(subjectFilter.toLowerCase());
// // //       return gradeMatch && teacherMatch && subjectMatch;
// // //     });
// // //     setFilteredEvents(filtered);
// // //   }, [gradeFilter, teacherFilter, subjectFilter, timetableData]);

// // //   const handleLogout = () => {
// // //     Swal.fire({
// // //       title: 'Logout Request',
// // //       text: "Are you sure you want to log out of the session?",
// // //       icon: 'warning',
// // //       showCancelButton: true,
// // //       confirmButtonColor: '#483EA8',
// // //       cancelButtonColor: '#667A8A',
// // //       confirmButtonText: 'Yes, Logout'
// // //     }).then((result) => {
// // //       if (result.isConfirmed) {
// // //         navigate('/');
// // //       }
// // //     });
// // //   };

// // //   // Safe color scheme map allocation for clean UI visibility context
// // //   const eventColors = ['#483EA8', '#2E7D32', '#C62828', '#EF6C00', '#00838F', '#6A1B9A'];

// // //   return (
// // //     <div className="w-full bg-slate-50 min-h-screen flex flex-col md:flex-row relative">
      
// // //       {/* Fixed Left Sidebar Panel Component Segment */}
// // //       <aside className="w-full md:w-[260px] bg-white border-r border-slate-200 md:fixed md:h-full top-0 left-0 z-30 flex flex-col justify-between p-5 transition-all">
// // //         <div className="space-y-6">
// // //           <div className="flex items-center gap-3 px-2 py-3 bg-slate-50 border border-slate-100 rounded-xl">
// // //             <div className="w-8 h-8 rounded-full bg-[#483EA8] flex items-center justify-center text-white font-bold text-sm">RA</div>
// // //             <span className="font-black text-xs text-slate-800 uppercase tracking-widest">Royal Academy</span>
// // //           </div>

// // //           <nav>
// // //             <ul className="space-y-1.5">
// // //               {[
// // //                 { label: 'Dashboard', path: '/login', img: homeImg, icon: <FaHome /> },
// // //                 { label: 'My Classes', path: '/login', img: classesImg, icon: <FaChalkboardTeacher /> },
// // //                 { label: 'Enrollments', path: '/login', img: enrollImg, icon: <FaUserCheck /> },
// // //                 { label: 'Payment', path: '/login', img: payImg, icon: <FaWallet /> },
// // //                 { label: 'TimeTable', path: '/studenttimetable', img: timeImg, icon: <FaRegCalendarAlt />, active: true },
// // //                 { label: 'Attendance', path: '/login', img: attendanceImg, icon: <FaHistory /> },
// // //                 { label: 'Q&A', path: '/login', img: qaImg, icon: <FaComments /> },
// // //                 { label: 'Feedbacks', path: '/login', img: feedbackImg, icon: <FaAward /> },
// // //                 { label: 'Profile', path: '/studentprofile', img: profileImg, icon: <FaUserCircle /> },
// // //                 { label: 'Wallet', path: '/login', img: walletImg, icon: <FaWallet /> },
// // //               ].map((item, idx) => (
// // //                 <li key={idx}>
// // //                   <Link 
// // //                     to={item.path}
// // //                     className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
// // //                       item.active 
// // //                         ? 'bg-purple-50 text-[#483EA8] border-l-4 border-[#483EA8]' 
// // //                         : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
// // //                     }`}
// // //                   >
// // //                     <img src={item.img} alt={item.label} className="w-4 h-4 object-contain filter grayscale opacity-75" />
// // //                     <span>{item.label}</span>
// // //                   </Link>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </nav>
// // //         </div>

// // //         <div className="pt-4 border-t border-slate-100">
// // //           <button 
// // //             onClick={handleLogout}
// // //             className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-red-600 hover:bg-red-50 transition-all text-left"
// // //           >
// // //             <img src={logoutImg} alt="Logout" className="w-4 h-4 object-contain" />
// // //             <span>Logout Account</span>
// // //           </button>
// // //         </div>
// // //       </aside>

// // //       {/* Main Structural View Section with Fixed Sidebar Clearance Padding Guard */}
// // //       <main className="w-full flex-1 px-4 py-6 md:py-8 pl-4 md:pl-[290px] pr-4 transition-all overflow-x-hidden">
        
// // //         {/* Step 2 Color Theme Secondary Header Deck */}
// // //         <div className="w-full bg-[#C9E8EA] border border-slate-200 rounded-[20px] p-5 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-xs">
// // //           <div>
// // //             <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
// // //               <FaRegCalendarAlt className="text-slate-700" />
// // //               <span>Academy Weekly Timetable</span>
// // //             </h1>
// // //             <p className="text-[11px] text-slate-600 font-bold mt-0.5 uppercase tracking-wide">
// // //               Track and configure systemic scheduling structures for active cohorts.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         {/* Filters Matrix Module Workspace Box */}
// // //         <div className="bg-white border-2 border-slate-200 rounded-[22px] p-4 sm:p-5 mb-6 shadow-xs">
// // //           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
// // //             {/* Grade Search Input Control */}
// // //             <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center gap-3 focus-within:border-[#483EA8] transition-colors">
// // //               <FaGraduationCap className="text-slate-400 text-sm shrink-0" />
// // //               <div className="w-full">
// // //                 <label className="block text-[9px] font-black text-[#667A8A] uppercase tracking-wider mb-0.5">Grade Filter</label>
// // //                 <input 
// // //                   type="text"
// // //                   placeholder="Search by grade..."
// // //                   value={gradeFilter}
// // //                   onChange={(e) => setGradeFilter(e.target.value)}
// // //                   className="w-full bg-transparent text-xs font-bold text-slate-700 outline-none placeholder-slate-400"
// // //                 />
// // //               </div>
// // //             </div>

// // //             {/* Instructor Search Input Control */}
// // //             <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center gap-3 focus-within:border-[#483EA8] transition-colors">
// // //               <FaUserCircle className="text-slate-400 text-sm shrink-0" />
// // //               <div className="w-full">
// // //                 <label className="block text-[9px] font-black text-[#667A8A] uppercase tracking-wider mb-0.5">Teacher Filter</label>
// // //                 <input 
// // //                   type="text"
// // //                   placeholder="Search by teacher..."
// // //                   value={teacherFilter}
// // //                   onChange={(e) => setTeacherFilter(e.target.value)}
// // //                   className="w-full bg-transparent text-xs font-bold text-slate-700 outline-none placeholder-slate-400"
// // //                 />
// // //               </div>
// // //             </div>

// // //             {/* Academic Department Subject Input Control */}
// // //             <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center gap-3 focus-within:border-[#483EA8] transition-colors">
// // //               <FaBookOpen className="text-slate-400 text-sm shrink-0" />
// // //               <div className="w-full">
// // //                 <label className="block text-[9px] font-black text-[#667A8A] uppercase tracking-wider mb-0.5">Subject Filter</label>
// // //                 <input 
// // //                   type="text"
// // //                   placeholder="Search by subject..."
// // //                   value={subjectFilter}
// // //                   onChange={(e) => setSubjectFilter(e.target.value)}
// // //                   className="w-full bg-transparent text-xs font-bold text-slate-700 outline-none placeholder-slate-400"
// // //                 />
// // //               </div>
// // //             </div>

// // //           </div>
// // //         </div>

// // //         {/* Primary Interactive Calendar Renderer Display Component Container */}
// // //         <div className="bg-white border-2 border-slate-200 rounded-[22px] p-4 sm:p-6 shadow-sm min-h-[600px] overflow-x-auto">
// // //           <div className="min-w-[750px]">
// // //             <Calendar
// // //               localizer={localizer}
// // //               defaultView="week"
// // //               views={['month', 'week', 'day']}
// // //               events={filteredEvents.map((event, idx) => ({
// // //                 id: event.id,
// // //                 title: `${event.Subject} | ${event.Teacher}`,
// // //                 raw: event,
// // //                 start: new Date(event.Date + 'T' + event.Start_time),
// // //                 end: new Date(event.Date + 'T' + event.End_Time),
// // //                 color: eventColors[idx % eventColors.length]
// // //               }))}
// // //               startAccessor="start"
// // //               endAccessor="end"
// // //               className="rounded-xl overflow-hidden font-sans text-xs"
// // //               style={{ height: 550 }}
// // //               eventPropGetter={(event) => ({
// // //                 className: "shadow-xs border-none rounded-lg",
// // //                 style: {
// // //                   backgroundColor: event.color,
// // //                   color: 'white',
// // //                   padding: '4px 8px',
// // //                   fontWeight: '600'
// // //                 }
// // //               })}
// // //               components={{
// // //                 event: ({ event }) => (
// // //                   <div className="space-y-0.5 py-0.5">
// // //                     <div className="font-black tracking-wide text-[11px] truncate uppercase">{event.raw.Subject}</div>
// // //                     <div className="text-[10px] opacity-90 font-bold truncate">{event.raw.Teacher}</div>
// // //                     <div className="text-[9px] opacity-75 font-medium flex items-center gap-1 mt-0.5">
// // //                       <span className="bg-white/20 px-1 rounded text-[8px] uppercase font-black">{event.raw.Grade}</span>
// // //                       <span className="truncate">{event.raw.Hall}</span>
// // //                     </div>
// // //                   </div>
// // //                 )
// // //               }}
// // //             />
// // //           </div>
// // //         </div>

// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default TeacherWeekTimetable;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Calendar, momentLocalizer } from 'react-big-calendar';
// // import 'react-big-calendar/lib/css/react-big-calendar.css';
// // import moment from 'moment';
// // import home from './navbar_images/Home.png'
// // import classes from './navbar_images/Class.png'
// // import enroll from './navbar_images/Enroll.png'
// // import pay from './navbar_images/Pay.png'
// // import time from './navbar_images/Time.png'
// // import attendance from './navbar_images/Attendance.png'
// // import qa from './navbar_images/Qa.png'
// // import feedback from './navbar_images/Feedback.png'
// // import profile from './navbar_images/Profile.png'
// // import wallet from './navbar_images/Wallet.png'
// // import logout from './navbar_images/Logout.png'



// // const TeacherWeekTimetable = () => {
// //   const [timetableData, setTimetableData] = useState([]);
// //   const [filteredEvents, setFilteredEvents] = useState([]);
// //   const [gradeFilter, setGradeFilter] = useState('');
// //   const [teacherFilter, setTeacherFilter] = useState('');
// //   const [subjectFilter, setSubjectFilter] = useState('');
  
// //   const [error, setError] = useState(null);
  

// //   useEffect(() => {
// //     fetchTimetableData();
// //   }, []);

// //   const fetchTimetableData = () => {
// //     axios.get(`http://localhost:3000/Student/Timetable`)
// //       .then((res) => {
// //         console.log("Retrieved timetable data:", res.data); // Log retrieved data
// //         setTimetableData(res.data);
// //         setFilteredEvents(res.data); // Set filtered events initially to all events
// //       })
// //       .catch((err) => {
// //         console.error("Error fetching timetable data:", err);
// //         setError(err);
// //       });
// //   };

// //   useEffect(() => {
// //     applyFilters();
// //   }, [gradeFilter, teacherFilter, subjectFilter]);

// //   const applyFilters = () => {
// //     let filtered = timetableData.filter(event => {
// //       let gradeMatch = true;
// //       let teacherMatch = true;
// //       let subjectMatch = true;

// //       if (gradeFilter && event.Grade !== gradeFilter) {
// //         gradeMatch = false;
// //       }
// //       if (teacherFilter && event.Teacher.toLowerCase().indexOf(teacherFilter.toLowerCase()) === -1) {
// //         teacherMatch = false;
// //       }
// //       if (subjectFilter && event.Subject.toLowerCase().indexOf(subjectFilter.toLowerCase()) === -1) {
// //         subjectMatch = false;
// //       }

// //       return gradeMatch && teacherMatch && subjectMatch;
// //     });

// //     setFilteredEvents(filtered);
// //   };

// //   const localizer = momentLocalizer(moment);

  
// //   const getRandomColor = (index) => {
// //     const letters = '1234569ABCDEF';
// //     let color = '#';
// //     for (let i = 0; i < 6; i++) {
// //       color += letters[Math.floor(Math.random() * 16)];
// //     }
// //     return color;
    
// //   };

// //   const handleDeletetoken = () => {
// //     axios.get('/logout').then(res => {
// //         console.log(res);
// //         window.location.href = '/';
// //     }).catch(err => console.log(err));
// //   }

// //   return (
// //     <div  className='profilecontent'>
// //       <div className='sidenavbar'>                
// //                 <ul className='sidenavbarul'>
// //                     <li>
// //                         <img src={home} alt='home' className='navimage'/>
// //                         <a href='/login'>Dashboard</a>
// //                     </li>
// //                     <li>
// //                         <img src={classes} alt='home' className='navimage'/>
// //                         <a href='/login'>My Classes</a>
// //                     </li>
// //                     <li>
// //                         <img src={enroll} alt='home' className='navimage'/>
// //                         <a href='/login'>Enrollments</a>
// //                     </li>
// //                     <li>
// //                         <img src={pay} alt='home' className='navimage'/>
// //                         <a href='/login'>Payment</a>
// //                     </li>
// //                     <li>
// //                         <img src={time} alt='home' className='navimage'/>
// //                         <a href='/studenttimetable'>TimeTable</a>
// //                     </li>
// //                     <li>
// //                         <img src={attendance} alt='home' className='navimage'/>
// //                         <a href='/login'>Attendance</a>
// //                     </li>
// //                     <li>
// //                         <img src={qa} alt='home' className='navimage'/>
// //                         <a href='/login'>Q&A</a>
// //                     </li>
// //                     <li>
// //                         <img src={feedback} alt='home' className='navimage'/>
// //                         <a href='/login'>Feedbacks</a>
// //                     </li>
// //                     <li>
// //                         <img src={profile} alt='home' className='navimage'/>
// //                         <a href='/studentprofile'>Profile</a>
// //                     </li>
// //                     <li>
// //                         <img src={wallet} alt='home' className='navimage'/>
// //                         <a href='/login'>Wallet</a>
// //                     </li>
// //                     <br/><br/><br/><br/>
// //                     <li className='logoutsq'>
// //                         <img src={logout} alt='home' className='navimage'/>
// //                         <button className='logoutbtn' onClick={handleDeletetoken}>Logout</button>
// //                     </li>
// //                 </ul>
// //             </div>
// //     <div style={{ height: '650px', width: '1000px', position: 'relative' }}>
// //       {error && <div>Error: {error.message}</div>}
// //       <div>
// //         <input
// //           type="text"
// //           placeholder="Search by grade"
// //           value={gradeFilter}
// //           onChange={(e) => setGradeFilter(e.target.value)}
// //           className="w-1/3 px-4 py-2 m-4 rounded border border-gray-300 focus:outline-none"
// //           style={{ backgroundColor:'#EEFEF4',width:'180px',display: 'inline-block', padding: '0.2rem 1rem', textAlign: 'center', borderRadius: '0.25rem', color: 'black', textDecoration: 'none'  }}
// //         />
// //         <input
// //           type="text"
// //           placeholder="Search by teacher"
// //           value={teacherFilter}
// //           onChange={(e) => setTeacherFilter(e.target.value)}
// //           className="w-1/3 px-4 py-2 m-4 rounded border border-gray-300 focus:outline-none"
// //           style={{ backgroundColor:'#EEFEF4',width:'180px',display: 'inline-block', padding: '0.2rem 1rem', textAlign: 'center', borderRadius: '0.25rem', color: 'black', textDecoration: 'none'  }}
// //         />
// //         <input
// //           type="text"
// //           placeholder="Search by subject"
// //           value={subjectFilter}
// //           onChange={(e) => setSubjectFilter(e.target.value)}
// //           className="w-1/3 px-4 py-2 m-4 rounded border border-gray-300 focus:outline-none"
// //           style={{ backgroundColor:'#EEFEF4',width:'180px',display: 'inline-block', padding: '0.2rem 1rem', textAlign: 'center', borderRadius: '0.25rem', color: 'black', textDecoration: 'none'  }}
// //         />
// //       </div>
// //       <Calendar
// //         localizer={localizer}
// //         events={filteredEvents.map((event, index) => ({
// //           id: event.id,
// //           title: (
// //             <div>
// //               <span>{event.Subject}</span><br />
// //               <span>{event.Teacher}</span><br />
// //               <span>{event.Hall}</span>
// //             </div>
// //           ),
// //           start: new Date(event.Date + 'T' + event.Start_time),
// //           end: new Date(event.Date + 'T' + event.End_Time),
// //           bgColor: getRandomColor(index) // Assign a unique color to each event
// //         }))}
// //         startAccessor="start"
// //         endAccessor="end"
        
// //         eventPropGetter={
// //           (event, start, end, isSelected) => {
// //             return {
// //               style: {
// //                 backgroundColor: event.bgColor, // Use the bgColor property for the background color
// //                 color: 'white', // Event text color
// //                 width: '140px',
// //                 height: '140px',
// //               }
// //             };
// //           }
// //         }
// //       />
// //     </div>
// //     </div>
// //   );
// // }

// // export default TeacherWeekTimetable;

// import React, { useState, useEffect } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import moment from 'moment';
// import { Link, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import axios from 'axios'; // Axios import kiya
// import { 
//   FaHome, FaChalkboardTeacher, FaUserCheck, FaWallet, 
//   FaRegCalendarAlt, FaHistory, FaComments, FaAward, 
//   FaUserCircle, FaSignOutAlt, FaGraduationCap, FaBookOpen 
// } from 'react-icons/fa';

// // ... (image imports waise hi rahengi)

// const TeacherWeekTimetable = () => {
//   const navigate = useNavigate();
//   const localizer = momentLocalizer(moment);

//   const [timetableData, setTimetableData] = useState([]); // Empty state
//   const [loading, setLoading] = useState(true);

//   // API se data fetch karna
//   useEffect(() => {
//     const fetchTimetable = async () => {
//       try {
//         const res = await axios.get('http://localhost:3000/gettimetable'); // Apne endpoint ka naam check kar lena
//         setTimetableData(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching timetable:", err);
//         setLoading(false);
//       }
//     };
//     fetchTimetable();
//   }, []);

//   // ... (baki state filters waise hi rahengi)
//   const [filteredEvents, setFilteredEvents] = useState([]);
//   const [gradeFilter, setGradeFilter] = useState('');
//   const [teacherFilter, setTeacherFilter] = useState('');
//   const [subjectFilter, setSubjectFilter] = useState('');

//   useEffect(() => {
//     let filtered = timetableData.filter(event => {
//       const gradeMatch = !gradeFilter || event.Grade.toLowerCase().includes(gradeFilter.toLowerCase());
//       const teacherMatch = !teacherFilter || event.Teacher.toLowerCase().includes(teacherFilter.toLowerCase());
//       const subjectMatch = !subjectFilter || event.Subject.toLowerCase().includes(subjectFilter.toLowerCase());
//       return gradeMatch && teacherMatch && subjectMatch;
//     });
//     setFilteredEvents(filtered);
//   }, [gradeFilter, teacherFilter, subjectFilter, timetableData]);

//   // ... (handleLogout aur return statement waisa hi rahega)
//   // Bas 'return' ke andar Calendar section mein filteredEvents map karein
  
//   if (loading) return <div className="p-10 text-center">Loading Timetable...</div>;

//   return (
//     <div className="w-full bg-slate-50 min-h-screen flex flex-col md:flex-row relative">
//       {/* ... (Sidebar code) */}
      
//       <main className="w-full flex-1 px-4 py-6 md:py-8 pl-4 md:pl-[290px] pr-4 transition-all overflow-x-hidden">
//         {/* ... (Header and Filters code) */}

//         <div className="bg-white border-2 border-slate-200 rounded-[22px] p-4 sm:p-6 shadow-sm min-h-[600px] overflow-x-auto">
//            <Calendar
//               localizer={localizer}
//               defaultView="week"
//               events={filteredEvents.map((event, idx) => ({
//                 id: event.id,
//                 title: `${event.Subject} | ${event.Teacher}`,
//                 raw: event,
//                 start: new Date(`${event.Date}T${event.Start_time}`),
//                 end: new Date(`${event.Date}T${event.End_Time}`),
//                 color: ['#483EA8', '#2E7D32', '#C62828'][idx % 3] // Simplify colors
//               }))}
//               startAccessor="start"
//               endAccessor="end"
//               style={{ height: 550 }}
//               // ... (rest of the calendar props)
//             />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default TeacherWeekTimetable;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

// Imports (Make sure paths are correct)
import home from './navbar_images/Home.png';
import classes from './navbar_images/Class.png';
import enroll from './navbar_images/Enroll.png';
import pay from './navbar_images/Pay.png';
import time from './navbar_images/Time.png';
import attendance from './navbar_images/Attendance.png';
import qa from './navbar_images/Qa.png';
import feedback from './navbar_images/Feedback.png';
import profile from './navbar_images/Profile.png';
import wallet from './navbar_images/Wallet.png';
import logout from './navbar_images/Logout.png';

const TeacherWeekTimetable = () => {
  const [timetableData, setTimetableData] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filters, setFilters] = useState({ grade: '', teacher: '', subject: '' });
  const [loading, setLoading] = useState(true);

  const localizer = momentLocalizer(moment);

  useEffect(() => {
    axios.get(`http://localhost:3000/Student/Timetable`)
      .then((res) => {
        setTimetableData(res.data);
        setFilteredEvents(res.data);
        setLoading(false);
      })
      .catch((err) => { console.error(err); setLoading(false); });
  }, []);

  useEffect(() => {
    const filtered = timetableData.filter(e => 
      e.Grade.toLowerCase().includes(filters.grade.toLowerCase()) &&
      e.Teacher.toLowerCase().includes(filters.teacher.toLowerCase()) &&
      e.Subject.toLowerCase().includes(filters.subject.toLowerCase())
    );
    setFilteredEvents(filtered);
  }, [filters, timetableData]);

  const navItems = [
    { name: 'Dashboard', icon: home, path: '/login' },
    { name: 'TimeTable', icon: time, path: '/studenttimetable', active: true },
    { name: 'Profile', icon: profile, path: '/studentprofile' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Fixed Sidebar */}
      <aside className="w-64 bg-slate-900 text-white fixed h-full flex flex-col p-6 shadow-2xl">
        <div className="mb-10">
          <h1 className="text-xl font-bold text-cyan-400 tracking-wider">TEACHER PORTAL</h1>
        </div>
        
        <nav className="flex-1 space-y-2">
          {navItems.map((item, i) => (
            <a key={i} href={item.path} 
               className={`flex items-center p-3 rounded-lg transition-all ${item.active ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>
              <img src={item.icon} alt={item.name} className="w-5 h-5 mr-3 filter invert" />
              {item.name}
            </a>
          ))}
        </nav>

        <button onClick={() => axios.get('/logout').then(() => window.location.href = '/')} 
                className="text-red-400 flex items-center hover:text-red-300 font-semibold">
          <img src={logout} alt="logout" className="w-5 h-5 mr-3" /> Logout
        </button>
      </aside>

      {/* Main Content (Shifted to right) */}
      <main className="ml-64 flex-1 p-8">
        <header className="mb-8">
          <h2 className="text-3xl font-extrabold text-slate-800">Weekly Timetable</h2>
          <p className="text-slate-500">Manage your academic schedule efficiently.</p>
        </header>

        {/* Filter Bar */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8 flex gap-4">
          {['grade', 'teacher', 'subject'].map(field => (
            <input key={field} placeholder={`Search ${field}...`}
                   onChange={(e) => setFilters({...filters, [field]: e.target.value})}
                   className="flex-1 p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
          ))}
        </div>

        {/* Calendar Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 h-[600px]">
          {loading ? <div className="text-center">Loading...</div> : (
            <Calendar
              localizer={localizer}
              events={filteredEvents.map(e => ({
                title: `${e.Subject} | ${e.Teacher}`,
                start: new Date(`${e.Date}T${e.Start_time}`),
                end: new Date(`${e.Date}T${e.End_Time}`)
              }))}
              eventPropGetter={() => ({ className: 'bg-blue-500 border-none rounded-md' })}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default TeacherWeekTimetable;