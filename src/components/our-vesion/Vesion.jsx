// import React from 'react';
// import { FaRocket, FaLightbulb, FaGlobe } from 'react-icons/fa';

// const Vision = () => {
//   return (
//     <section id="Vision" className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
//         <div className="text-center mb-16">
//           <h2 className="text-[#1a759f] font-bold tracking-[0.2em] text-sm mb-4 uppercase">
//             Our Purpose
//           </h2>
//           <h1 className="text-4xl md:text-5xl font-black text-slate-800">
//             Our <span className="text-[#52b69a]">Vision & Mission</span>
//           </h1>
//           <div className="w-20 h-1.5 bg-[#52b69a] mx-auto mt-6 rounded-full"></div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
//           <div className="bg-[#f0f8fa] p-10 rounded-[40px] border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
//             <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:bg-[#1a759f] transition-all">
//               <FaRocket className="text-[#1a759f] group-hover:text-white" size={30} />
//             </div>
//             <h3 className="text-2xl font-bold text-slate-800 mb-4">Innovation</h3>
//             <p className="text-slate-600 leading-relaxed">
//               Humara maqsad Pakistan mein science aur technology ko nayi unchaiyon tak le jana hai, jahan har student practical kaam seekh sakay.
//             </p>
//           </div>

//           <div className="bg-slate-900 p-10 rounded-[40px] shadow-2xl lg:-translate-y-6">
//             <div className="w-16 h-16 bg-[#52b69a] rounded-2xl flex items-center justify-center shadow-sm mb-8">
//               <FaLightbulb className="text-white" size={30} />
//             </div>
//             <h3 className="text-2xl font-bold text-white mb-4">Quality Education</h3>
//             <p className="text-slate-300 leading-relaxed">
//               Step2Scientist ka vision hai ke har naujawan ko wo skills sikhayi jayein jo aaj ki modern dunya ki zaroorat hain, taake wo dunya ka muqabla kar sakein.
//             </p>
//           </div>

//           <div className="bg-[#f0f8fa] p-10 rounded-[40px] border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
//             <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:bg-[#52b69a] transition-all">
//               <FaGlobe className="text-[#52b69a] group-hover:text-white" size={30} />
//             </div>
//             <h3 className="text-2xl font-bold text-slate-800 mb-4">Global Impact</h3>
//             <p className="text-slate-600 leading-relaxed">
//               Hum chahte hain ke humare institute se parh kar nikalne wale scientists dunya bhar mein Pakistan ka naam roshan karein.
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Vision;

import React from 'react';
import { FaEye } from 'react-icons/fa';

const Vision = () => {
  return (
    <section id="Vision" className="py-20 bg-[#f0f8fa]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-[50px] shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            <div className="p-10 md:p-20 flex flex-col justify-center">
              <div className="mb-8">
                <h2 className="text-[#1a759f] font-black text-5xl uppercase tracking-tighter">
                  OUR VISION
                </h2>
                <p className="text-[#52b69a] font-bold text-xl tracking-[0.15em] mt-2">
                  INNOVATE • EMPOWER • LEAD
                </p>
              </div>
              
              <h3 className="text-3xl font-bold text-slate-800 mb-6 leading-tight">
                Empowering the Next Generation of Scientists
              </h3>
              
              <div className="space-y-6">
                <p className="text-slate-600 text-lg leading-relaxed">
                  Our vision is to become Pakistan's leading hub for practical science and technology education. We aim to bridge the gap between theoretical knowledge and real-world application.
                </p>
              </div>

              <div className="mt-10">
                <button className="bg-[#1a759f] text-white px-10 py-4 rounded-full font-bold hover:bg-[#145a7a] transition-all shadow-lg">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-[#1a759f] relative flex items-center justify-center p-12 overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              <div className="relative z-10 text-center">
                <div className="text-white/20 text-9xl font-black absolute -top-10 -left-10 select-none">
                  VISION
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-12 rounded-[40px] shadow-2xl">
                  <h3 className="text-white text-3xl font-bold mb-4 italic">"Innovation Meets Excellence"</h3>
                  <p className="text-white/80 font-medium tracking-widest">ESTABLISHED 2026</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;



// import React from 'react';

// const Vision = () => {
//   return (
//     <section id="Vision" className="py-20 bg-[#f0f8fa]">
//       <div className="max-w-5xl mx-auto px-6">
        
//         <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-xl border border-slate-100 text-center">
          
//           <div className="mb-10">
//             <h2 className="text-[#1a759f] font-black text-4xl md:text-5xl uppercase tracking-tighter mb-2">
//               OUR VISION
//             </h2>
//             <p className="text-[#52b69a] font-bold text-xl md:text-2xl tracking-[0.2em] uppercase">
//               Innovate • Empower • Lead
//             </p>
//           </div>

//           <div className="max-w-3xl mx-auto space-y-6">
//             <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
//               To become Pakistan's premier hub for practical science and technology education, 
//               transforming students into global innovators through hands-on learning and 
//               modern research environments.
//             </p>
//           </div>

//           <div className="mt-10 flex justify-center">
//             <div className="h-1.5 w-24 bg-gradient-to-r from-[#1a759f] to-[#52b69a] rounded-full"></div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Vision;