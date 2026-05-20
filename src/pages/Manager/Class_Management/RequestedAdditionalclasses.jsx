// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Head from '../Header/Header';

// function RequestedAdditionalClasses() {
//   // Mock Static Data Matrix - Pure frontend management
//   const [addAdditionalClasses, setAddAdditionalClasses] = useState([
//     { _id: '1', teacher: 'Asim Khan', grade: 'Grade 11', subject: 'Maths', date: '05/20/2026', date2: '05/22/2026', date3: '', date4: '' },
//     { _id: '2', teacher: 'Sana Ahmed', grade: 'Grade 12', subject: 'Chemistry', date: '05/21/2026', date2: '', date3: '', date4: '' }
//   ]);

//   const [requestSchedule, setRequestSchedule] = useState([
//     { _id: 's1', teacher: 'Zeeshan Ali', grade: 'Grade 10', subject: 'English', date1: '05/19/2026', date2: '05/23/2026', date3: '', date4: '' }
//   ]);

//   // Pure Client-side state deletion handler (No page reloads)
//   const handleDeleteAdditionalClass = (id) => {
//     setAddAdditionalClasses(prev => prev.filter(item => item._id !== id));
//   };

//   const handleDeleteSchedule = (id) => {
//     setRequestSchedule(prev => prev.filter(item => item._id !== id));
//   };

//   return (
//     <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
//       <Head />

//       <div className="w-full max-w-[1100px] mx-auto px-4 mt-6 pl-[170px]">
        
//         {/* Title Dashboard Section */}
//         <div className="border-b-2 border-gray-200 pb-4 mb-6">
//           <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">Requested Additional Classes</h1>
//           <p className="text-xs text-gray-500 font-medium">Review and manage pending additional lectures layouts locally</p>
//         </div>

//         {/* Table Workspace Card */}
//         <div className="bg-white border-2 border-slate-200 rounded-[20px] shadow-sm p-5 overflow-hidden">
//           <div className="overflow-x-auto border border-slate-100 rounded-xl">
//             <table className="w-full text-left border-collapse text-xs">
//               <thead className="bg-slate-50 text-gray-600 uppercase font-bold border-b border-slate-200">
//                 <tr>
//                   <th className="p-3">Teacher</th>
//                   <th className="p-3">Grade</th>
//                   <th className="p-3">Subject</th>
//                   <th className="p-3">Date 1</th>
//                   <th className="p-3">Date 2</th>
//                   <th className="p-3">Date 3</th>
//                   <th className="p-3">Date 4</th>
//                   <th className="p-3 text-center">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-100 text-gray-700">
                
//                 {/* Mapping Additional Classes */}
//                 {addAdditionalClasses.map((addAdditionalClass) => (
//                   <tr key={addAdditionalClass._id} className="hover:bg-slate-50/80 transition-colors">
//                     <td className="p-3 font-semibold text-[#13293d]">{addAdditionalClass.teacher}</td>
//                     <td className="p-3">
//                       <span className="px-2 py-0.5 bg-slate-100 rounded text-gray-600 font-bold">{addAdditionalClass.grade}</span>
//                     </td>
//                     <td className="p-3 font-medium">{addAdditionalClass.subject}</td>
//                     <td className="p-3 text-gray-500">{addAdditionalClass.date || '-'}</td>
//                     <td className="p-3 text-gray-500">{addAdditionalClass.date2 || '-'}</td>
//                     <td className="p-3 text-gray-500">{addAdditionalClass.date3 || '-'}</td>
//                     <td className="p-3 text-gray-500">{addAdditionalClass.date4 || '-'}</td>
//                     <td className="p-3 text-center flex items-center justify-center gap-2">
//                       <Link 
//                         to={`/approvalclasses/${addAdditionalClass._id}`}
//                         className="bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white font-bold px-3 py-1.5 rounded-lg border border-emerald-200 hover:border-emerald-600 transition-colors text-center shadow-xs"
//                       >
//                         Edit
//                       </Link>
//                       <button 
//                         className="bg-red-50 hover:bg-red-600 text-red-600 hover:text-white font-bold px-3 py-1.5 rounded-lg border border-red-200 hover:border-red-600 transition-colors shadow-xs"
//                         onClick={() => handleDeleteAdditionalClass(addAdditionalClass._id)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}

//                 {/* Mapping Schedule Array */}
//                 {requestSchedule.map((schedule) => (
//                   <tr key={schedule._id} className="hover:bg-slate-50/80 transition-colors">
//                     <td className="p-3 font-semibold text-[#13293d]">{schedule.teacher}</td>
//                     <td className="p-3">
//                       <span className="px-2 py-0.5 bg-slate-100 rounded text-gray-600 font-bold">{schedule.grade}</span>
//                     </td>
//                     <td className="p-3 font-medium">{schedule.subject}</td>
//                     <td className="p-3 text-gray-500">{schedule.date1 || '-'}</td>
//                     <td className="p-3 text-gray-500">{schedule.date2 || '-'}</td>
//                     <td className="p-3 text-gray-500">{schedule.date3 || '-'}</td>
//                     <td className="p-3 text-gray-500">{schedule.date4 || '-'}</td>
//                     <td className="p-3 text-center flex items-center justify-center gap-2">
//                       <Link 
//                         to={`/approvalclasses/${schedule._id}`}
//                         className="bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white font-bold px-3 py-1.5 rounded-lg border border-emerald-200 hover:border-emerald-600 transition-colors text-center shadow-xs"
//                       >
//                         Edit
//                       </Link>
//                       <button 
//                         className="bg-red-50 hover:bg-red-600 text-red-600 hover:text-white font-bold px-3 py-1.5 rounded-lg border border-red-200 hover:border-red-600 transition-colors shadow-xs"
//                         onClick={() => handleDeleteSchedule(schedule._id)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}

//                 {addAdditionalClasses.length === 0 && requestSchedule.length === 0 && (
//                   <tr>
//                     <td colSpan="8" className="p-8 text-center text-gray-400 font-medium">
//                       No requested classes or schedules listed.
//                     </td>
//                   </tr>
//                 )}

//               </tbody>
//             </table>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default RequestedAdditionalClasses;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Head from '../Header/Header';

function RequestedAdditionalClasses() {
  // Mock Static Data Matrix - Pure frontend management
  const [addAdditionalClasses, setAddAdditionalClasses] = useState([
    { _id: '1', teacher: 'Asim Khan', grade: 'Grade 11', subject: 'Maths', date: '05/20/2026', date2: '05/22/2026', date3: '', date4: '' },
    { _id: '2', teacher: 'Sana Ahmed', grade: 'Grade 12', subject: 'Chemistry', date: '05/21/2026', date2: '', date3: '', date4: '' }
  ]);

  const [requestSchedule, setRequestSchedule] = useState([
    { _id: 's1', teacher: 'Zeeshan Ali', grade: 'Grade 10', subject: 'English', date1: '05/19/2026', date2: '05/23/2026', date3: '', date4: '' }
  ]);

  // Pure Client-side state deletion handler (No page reloads)
  const handleDeleteAdditionalClass = (id) => {
    setAddAdditionalClasses(prev => prev.filter(item => item._id !== id));
  };

  const handleDeleteSchedule = (id) => {
    setRequestSchedule(prev => prev.filter(item => item._id !== id));
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      {/* Head triggers layout structure automatically wrapping fixed sidebar */}
      <Head />

     
      <div className="w-full max-w-[1250px] mx-auto px-4 mt-6 md:pl-[260px] transition-all duration-300">
        
        {/* Title Dashboard Section */}
        <div className="border-b-2 border-gray-200 pb-4 mb-6">
          <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
            Requested Additional Classes
          </h1>
          <p className="text-xs text-gray-500 font-medium">
            Review and manage pending additional lectures layouts locally
          </p>
        </div>

        {/* Table Workspace Card */}
        <div className="bg-white border-2 border-slate-200 rounded-[20px] shadow-sm p-5 overflow-hidden">
          <div className="overflow-x-auto border border-slate-100 rounded-xl">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-slate-50 text-gray-600 uppercase font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Teacher</th>
                  <th className="p-3">Grade</th>
                  <th className="p-3">Subject</th>
                  <th className="p-3">Date 1</th>
                  <th className="p-3">Date 2</th>
                  <th className="p-3">Date 3</th>
                  <th className="p-3">Date 4</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-gray-700">
                
                {/* Mapping Additional Classes */}
                {addAdditionalClasses.map((addAdditionalClass) => (
                  <tr key={addAdditionalClass._id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3 font-semibold text-[#13293d]">{addAdditionalClass.teacher}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 bg-slate-100 rounded text-gray-600 font-bold">{addAdditionalClass.grade}</span>
                    </td>
                    <td className="p-3 font-medium">{addAdditionalClass.subject}</td>
                    <td className="p-3 text-gray-500">{addAdditionalClass.date || '-'}</td>
                    <td className="p-3 text-gray-500">{addAdditionalClass.date2 || '-'}</td>
                    <td className="p-3 text-gray-500">{addAdditionalClass.date3 || '-'}</td>
                    <td className="p-3 text-gray-500">{addAdditionalClass.date4 || '-'}</td>
                    <td className="p-3 text-center flex items-center justify-center gap-2">
                      {/* Clicking this button navigates directly to the approval edit screen flow */}
                      <Link 
                        to={`/approvalclasses/${addAdditionalClass._id}`}
                        className="bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white font-bold px-3 py-1.5 rounded-lg border border-emerald-200 hover:border-emerald-600 transition-colors text-center shadow-xs"
                      >
                        Edit
                      </Link>
                      <button 
                        type="button"
                        className="bg-red-50 hover:bg-red-600 text-red-600 hover:text-white font-bold px-3 py-1.5 rounded-lg border border-red-200 hover:border-red-600 transition-colors shadow-xs"
                        onClick={() => handleDeleteAdditionalClass(addAdditionalClass._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}

                {/* Mapping Schedule Array */}
                {requestSchedule.map((schedule) => (
                  <tr key={schedule._id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3 font-semibold text-[#13293d]">{schedule.teacher}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 bg-slate-100 rounded text-gray-600 font-bold">{schedule.grade}</span>
                    </td>
                    <td className="p-3 font-medium">{schedule.subject}</td>
                    <td className="p-3 text-gray-500">{schedule.date1 || '-'}</td>
                    <td className="p-3 text-gray-500">{schedule.date2 || '-'}</td>
                    <td className="p-3 text-gray-500">{schedule.date3 || '-'}</td>
                    <td className="p-3 text-gray-500">{schedule.date4 || '-'}</td>
                    <td className="p-3 text-center flex items-center justify-center gap-2">
                      {/* Redirecting layout flow towards edit panel configurations page */}
                      <Link 
                        to={`/approvalclasses/${schedule._id}`}
                        className="bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white font-bold px-3 py-1.5 rounded-lg border border-emerald-200 hover:border-emerald-600 transition-colors text-center shadow-xs"
                      >
                        Edit
                      </Link>
                      <button 
                        type="button"
                        className="bg-red-50 hover:bg-red-600 text-red-600 hover:text-white font-bold px-3 py-1.5 rounded-lg border border-red-200 hover:border-red-600 transition-colors shadow-xs"
                        onClick={() => handleDeleteSchedule(schedule._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}

                {/* Empty Records Notification Row View */}
                {addAdditionalClasses.length === 0 && requestSchedule.length === 0 && (
                  <tr>
                    <td colSpan="8" className="p-8 text-center text-gray-400 font-semibold tracking-wide">
                      No requested classes or active schedules listed.
                    </td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default RequestedAdditionalClasses;