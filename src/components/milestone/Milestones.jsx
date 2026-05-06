
// import React from 'react';
// import { FaUsers, FaLightbulb, FaAward } from 'react-icons/fa';

// const Milestones = () => {
//   return (
//     <section id="Milestones" className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-6">
        
//         <div className="bg-[#f0f8fa] rounded-[20px] p-10 md:p-16 border border-slate-100 shadow-xl">
          
//           <div className="text-center mb-16">
//             <h2 className="text-[#1a759f] font-black text-3xl md:text-4xl uppercase tracking-tighter">
//               THE BEST
//             </h2>
//             <p className="text-[#52b69a] font-bold text-2xl tracking-[0.15em] uppercase mt-2">
//               MILESTONE
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            
//             <div className="py-8 md:py-0 md:px-10 text-center">
//               <div className="text-[#1a759f] flex justify-center mb-4">
//                 <FaUsers size={40} />
//               </div>
//               <h3 className="text-3xl font-black text-slate-800 mb-2">100+</h3>
//               <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">
//                 Active Students
//               </p>
//             </div>

//             <div className="py-8 md:py-0 md:px-10 text-center">
//               <div className="text-[#1a759f] flex justify-center mb-4">
//                 <FaLightbulb size={40} />
//               </div>
//               <h3 className="text-3xl font-black text-slate-800 mb-2">10+</h3>
//               <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">
//                 Research Projects
//               </p>
//             </div>

//             <div className="py-8 md:py-0 md:px-10 text-center">
//               <div className="text-[#1a759f] flex justify-center mb-4">
//                 <FaAward size={40} />
//               </div>
//               <h3 className="text-3xl font-black text-slate-800 mb-2">100%</h3>
//               <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">
//                 Practical Success
//               </p>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Milestones;



import React from 'react';
import { FaUsers, FaLightbulb, FaAward, FaChalkboardTeacher } from 'react-icons/fa';

const Milestones = () => {
  return (
    <section id="Milestones" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#f0f8fa] rounded-[20px] p-10 md:p-16 border border-slate-100 shadow-xl">
          <div className="text-center mb-16">
            <h2 className="text-[#1a759f] font-black text-3xl md:text-4xl uppercase tracking-tighter">THE BEST</h2>
            <p className="text-[#52b69a] font-bold text-2xl tracking-[0.15em] uppercase mt-2">MILESTONE</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-200">
            <div className="py-8 lg:py-0 lg:px-6 text-center">
              <div className="text-[#1a759f] flex justify-center mb-4"><FaUsers size={40} /></div>
              <h3 className="text-3xl font-black text-slate-800 mb-2">100+</h3>
              <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Active Students</p>
            </div>
            <div className="py-8 lg:py-0 lg:px-6 text-center">
              <div className="text-[#1a759f] flex justify-center mb-4"><FaLightbulb size={40} /></div>
              <h3 className="text-3xl font-black text-slate-800 mb-2">10+</h3>
              <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Research Projects</p>
            </div>
            <div className="py-8 lg:py-0 lg:px-6 text-center">
              <div className="text-[#1a759f] flex justify-center mb-4"><FaChalkboardTeacher size={40} /></div>
              <h3 className="text-3xl font-black text-slate-800 mb-2">4+</h3>
              <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Amazing Teachers</p>
            </div>
            <div className="py-8 lg:py-0 lg:px-6 text-center">
              <div className="text-[#1a759f] flex justify-center mb-4"><FaAward size={40} /></div>
              <h3 className="text-3xl font-black text-slate-800 mb-2">100%</h3>
              <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Practical Success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;