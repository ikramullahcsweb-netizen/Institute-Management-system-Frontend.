// import React, { useEffect, useState } from 'react';
// import API from '../../../api';
// import Head from '../Header/Header';

// function ManagerSearchusers() {
//   const [student, setStudent] = useState([]);
//   const [teacher, setTeacher] = useState([]);
//   const [searchstudent, setSearchStudent] = useState('');
//   const [searchteacher, setSearchTeacher] = useState('');
//   const [loadingStudents, setLoadingStudents] = useState(true);
//   const [loadingTeachers, setLoadingTeachers] = useState(true);

//   // Fetch students
//   useEffect(() => {
//     API.get('/api/auth/getstudentsadmin')
//       .then((res) => {
//         const data = res.data.data || res.data || [];
//         setStudent(Array.isArray(data) ? data : []);
//       })
//       .catch((err) => console.error("Error fetching students:", err))
//       .finally(() => setLoadingStudents(false));
//   }, []);

//   // Fetch teachers
//   useEffect(() => {
//     API.get('/api/auth/getteachersadmin')
//       .then((res) => {
//         const data = res.data.data || res.data || [];
//         setTeacher(Array.isArray(data) ? data : []);
//       })
//       .catch((err) => console.error("Error fetching teachers:", err))
//       .finally(() => setLoadingTeachers(false));
//   }, []);

//   const filteredStudents = student.filter((item) =>
//     (item.name || '').toLowerCase().includes(searchstudent.toLowerCase())
//   );

//   const filteredTeachers = teacher.filter((item) =>
//     (item.name || '').toLowerCase().includes(searchteacher.toLowerCase())
//   );

//   return (
//     <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans">
//       <Head />
      
//       <div className="w-full max-w-[1200px] mx-auto px-4 mt-8 space-y-12 md:pl-[280px]">
        
//         {/* STUDENT RECORDS */}
//         <div className="bg-white border-2 border-slate-200 rounded-[24px] p-6 shadow-sm">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-5 mb-6">
//             <div>
//               <h2 className="text-xl font-black text-[#13293d] uppercase tracking-tight">Student Records</h2>
//               <p className="text-xs text-gray-400 font-medium mt-0.5">Registered students directory</p>
//             </div>
            
//             <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
//               <span className="bg-slate-100 text-[#13293d] text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl border border-slate-200 text-center">
//                 Total: <b className="text-[#10a1b6] ml-1">{student.length}</b>
//               </span>
//               <input 
//                 type="text" 
//                 placeholder="Search student by name..." 
//                 onChange={(e) => setSearchStudent(e.target.value)}
//                 className="w-full sm:w-64 bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl pl-4 pr-4 py-2 text-xs font-medium outline-none transition-all text-gray-800"
//               />
//             </div>
//           </div>

//           <div className="w-full overflow-x-auto border border-slate-200 rounded-xl max-h-[300px] overflow-y-auto shadow-inner bg-slate-50">
//             <table className="w-full border-collapse text-left text-xs min-w-[700px]">
//               <thead className="bg-[#13293d] text-white font-black uppercase tracking-wider sticky top-0 z-10">
//                 <tr>
//                   <th className="px-4 py-3.5">Student ID</th>
//                   <th className="px-4 py-3.5">Name</th>
//                   <th className="px-4 py-3.5">Email</th>
//                   <th className="px-4 py-3.5">Grade</th>
//                   <th className="px-4 py-3.5">Security Answer</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-200 font-medium text-gray-700 bg-white">
//                 {loadingStudents ? (
//                   <tr><td colSpan="5" className="px-4 py-8 text-center text-gray-400">Loading students...</td></tr>
//                 ) : filteredStudents.length > 0 ? (
//                   filteredStudents.map((item, index) => (
//                     <tr key={item._id || index} className="hover:bg-slate-50/80 transition-colors">
//                       <td className="px-4 py-3 font-mono font-bold text-slate-900">{item.stdid || '—'}</td>
//                       <td className="px-4 py-3 font-bold text-[#13293d]">{item.name || '—'}</td>
//                       <td className="px-4 py-3 text-slate-500">{item.email || '—'}</td>
//                       <td className="px-4 py-3">
//                         <span className="bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded text-[10px] uppercase">
//                           {item.grade || '—'}
//                         </span>
//                       </td>
//                       <td className="px-4 py-3 text-[#10a1b6] font-bold">{item.SecAnswer || '—'}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr><td colSpan="5" className="px-4 py-8 text-center text-gray-400">No students found.</td></tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* TEACHER DIRECTORY */}
//         <div className="bg-white border-2 border-slate-200 rounded-[24px] p-6 shadow-sm">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-5 mb-6">
//             <div>
//               <h2 className="text-xl font-black text-[#13293d] uppercase tracking-tight">Faculty Directory</h2>
//               <p className="text-xs text-gray-400 font-medium mt-0.5">Registered institutional educators</p>
//             </div>
            
//             <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
//               <span className="bg-slate-100 text-[#13293d] text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl border border-slate-200 text-center">
//                 Total: <b className="text-[#10a1b6] ml-1">{teacher.length}</b>
//               </span>
//               <input 
//                 type="text" 
//                 placeholder="Search faculty by name..." 
//                 onChange={(e) => setSearchTeacher(e.target.value)}
//                 className="w-full sm:w-64 bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl pl-4 pr-4 py-2 text-xs font-medium outline-none transition-all text-gray-800"
//               />
//             </div>
//           </div>

//           <div className="w-full overflow-x-auto border border-slate-200 rounded-xl max-h-[300px] overflow-y-auto shadow-inner bg-slate-50">
//             <table className="w-full border-collapse text-left text-xs min-w-[600px]">
//               <thead className="bg-[#13293d] text-white font-black uppercase tracking-wider sticky top-0 z-10">
//                 <tr>
//                   <th className="px-4 py-3.5">Teacher ID</th>
//                   <th className="px-4 py-3.5">Name</th>
//                   <th className="px-4 py-3.5">Subject</th>
//                   <th className="px-4 py-3.5">Email</th>
//                   <th className="px-4 py-3.5">Security Answer</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-200 font-medium text-gray-700 bg-white">
//                 {loadingTeachers ? (
//                   <tr><td colSpan="5" className="px-4 py-8 text-center text-gray-400">Loading teachers...</td></tr>
//                 ) : filteredTeachers.length > 0 ? (
//                   filteredTeachers.map((item, index) => (
//                     <tr key={item._id || index} className="hover:bg-slate-50/80 transition-colors">
//                       <td className="px-4 py-3 font-mono font-bold text-slate-900">{item.teid || '—'}</td>
//                       <td className="px-4 py-3 font-bold text-[#13293d]">{item.name || '—'}</td>
//                       <td className="px-4 py-3">
//                         <span className="bg-purple-50 text-purple-700 font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wide">
//                           {item.subject || '—'}
//                         </span>
//                       </td>
//                       <td className="px-4 py-3 text-slate-500">{item.email || '—'}</td>
//                       <td className="px-4 py-3 text-[#10a1b6] font-bold">{item.SecAnswer || '—'}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr><td colSpan="5" className="px-4 py-8 text-center text-gray-400">No teachers found.</td></tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default ManagerSearchusers;



import React, { useEffect, useState } from 'react';
import API from '../../../api';
import Head from '../Header/Header';

function ManagerSearchusers() {
  const [student, setStudent] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [searchstudent, setSearchStudent] = useState('');
  const [searchteacher, setSearchTeacher] = useState('');
  const [loadingStudents, setLoadingStudents] = useState(true);
  const [loadingTeachers, setLoadingTeachers] = useState(true);

  // Fetch students
  useEffect(() => {
    API.get('/api/auth/getstudentsadmin')
      .then((res) => {
        const data = res.data.data || res.data || [];
        setStudent(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error("Error fetching students:", err))
      .finally(() => setLoadingStudents(false));
  }, []);

  // Fetch teachers
  useEffect(() => {
    API.get('/api/auth/getteachersadmin')
      .then((res) => {
        const data = res.data.data || res.data || [];
        setTeacher(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error("Error fetching teachers:", err))
      .finally(() => setLoadingTeachers(false));
  }, []);

  const filteredStudents = student.filter((item) =>
    (item.name || '').toLowerCase().includes(searchstudent.toLowerCase())
  );

  const filteredTeachers = teacher.filter((item) =>
    (item.name || '').toLowerCase().includes(searchteacher.toLowerCase())
  );

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans">
      <Head />
      
      <div className="w-full max-w-[1200px] mx-auto px-4 mt-8 space-y-12 md:pl-[280px]">
        
        {/* STUDENT RECORDS */}
        <div className="bg-white border-2 border-slate-200 rounded-[24px] p-6 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-5 mb-6">
            <div>
              <h2 className="text-xl font-black text-[#13293d] uppercase tracking-tight">Student Records</h2>
              <p className="text-xs text-gray-400 font-medium mt-0.5">Registered students directory</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <span className="bg-slate-100 text-[#13293d] text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl border border-slate-200 text-center">
                Total: <b className="text-[#10a1b6] ml-1">{student.length}</b>
              </span>
              <input 
                type="text" 
                placeholder="Search student by name..." 
                onChange={(e) => setSearchStudent(e.target.value)}
                className="w-full sm:w-64 bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl pl-4 pr-4 py-2 text-xs font-medium outline-none transition-all text-gray-800"
              />
            </div>
          </div>

          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl max-h-[300px] overflow-y-auto shadow-inner bg-slate-50">
            <table className="w-full border-collapse text-left text-xs min-w-[700px]">
              <thead className="bg-[#13293d] text-white font-black uppercase tracking-wider sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-3.5">Student ID</th>
                  <th className="px-4 py-3.5">Name</th>
                  <th className="px-4 py-3.5">Email</th>
                  <th className="px-4 py-3.5">Grade</th>
                  <th className="px-4 py-3.5">Security Answer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-gray-700 bg-white">
                {loadingStudents ? (
                  <tr><td colSpan="5" className="px-4 py-8 text-center text-gray-400">Loading students...</td></tr>
                ) : filteredStudents.length > 0 ? (
                  filteredStudents.map((item, index) => (
                    <tr key={item._id || index} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-4 py-3 font-mono font-bold text-slate-900">{item.stdid || '—'}</td>
                      <td className="px-4 py-3 font-bold text-[#13293d]">{item.name || '—'}</td>
                      <td className="px-4 py-3 text-slate-500">{item.email || '—'}</td>
                      <td className="px-4 py-3">
                        <span className="bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded text-[10px] uppercase">
                          {item.grade || '—'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[#10a1b6] font-bold">{item.SecAnswer || '—'}</td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="5" className="px-4 py-8 text-center text-gray-400">No students found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* TEACHER DIRECTORY */}
        <div className="bg-white border-2 border-slate-200 rounded-[24px] p-6 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-5 mb-6">
            <div>
              <h2 className="text-xl font-black text-[#13293d] uppercase tracking-tight">Faculty Directory</h2>
              <p className="text-xs text-gray-400 font-medium mt-0.5">Registered institutional educators</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <span className="bg-slate-100 text-[#13293d] text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl border border-slate-200 text-center">
                Total: <b className="text-[#10a1b6] ml-1">{teacher.length}</b>
              </span>
              <input 
                type="text" 
                placeholder="Search faculty by name..." 
                onChange={(e) => setSearchTeacher(e.target.value)}
                className="w-full sm:w-64 bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl pl-4 pr-4 py-2 text-xs font-medium outline-none transition-all text-gray-800"
              />
            </div>
          </div>

          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl max-h-[300px] overflow-y-auto shadow-inner bg-slate-50">
            <table className="w-full border-collapse text-left text-xs min-w-[600px]">
              <thead className="bg-[#13293d] text-white font-black uppercase tracking-wider sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-3.5">Teacher ID</th>
                  <th className="px-4 py-3.5">Name</th>
                  <th className="px-4 py-3.5">Subject</th>
                  <th className="px-4 py-3.5">Email</th>
                  <th className="px-4 py-3.5">Security Answer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-gray-700 bg-white">
                {loadingTeachers ? (
                  <tr><td colSpan="5" className="px-4 py-8 text-center text-gray-400">Loading teachers...</td></tr>
                ) : filteredTeachers.length > 0 ? (
                  filteredTeachers.map((item, index) => (
                    <tr key={item._id || index} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-4 py-3 font-mono font-bold text-slate-900">{item.teid || '—'}</td>
                      <td className="px-4 py-3 font-bold text-[#13293d]">{item.name || '—'}</td>
                      <td className="px-4 py-3">
                        <span className="bg-purple-50 text-purple-700 font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wide">
                          {item.subject || '—'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-500">{item.email || '—'}</td>
                      <td className="px-4 py-3 text-[#10a1b6] font-bold">{item.SecAnswer || '—'}</td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="5" className="px-4 py-8 text-center text-gray-400">No teachers found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ManagerSearchusers;
