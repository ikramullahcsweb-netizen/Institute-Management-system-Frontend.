// import React from 'react';
// import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

// const Mentors = () => {
//   const mentors = [
//     {
//       id: 1,
//       name: "Dr. Arshad Khan",
//       role: "Senior Research Scientist",
//       image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
//     },
//     {
//       id: 2,
//       name: "Engr. Sara Ahmed",
//       role: "Full Stack Developer",
//       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
//     },
//     {
//       id: 3,
//       name: "Prof. Hassan Ali",
//       role: "AI & Robotics Expert",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
//     }
//   ];

//   return (
//     <section id="Mentors" className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
//         <div className="text-center mb-16">
//           <h2 className="text-[#1a759f] font-black text-4xl md:text-5xl uppercase tracking-tighter">
//             PROFESSIONAL MENTORS
//           </h2>
//           <p className="text-[#52b69a] font-bold text-xl tracking-[0.15em] mt-2">
//             LEARN FROM THE EXPERTS
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {mentors.map((mentor) => (
//             <div key={mentor.id} className="group relative bg-[#f0f8fa] rounded-[40px] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300">
              
//               <div className="h-72 overflow-hidden">
//                 <img 
//                   src={mentor.image} 
//                   alt={mentor.name} 
//                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
//                 />
//               </div>

//               <div className="p-8 text-center">
//                 <h3 className="text-2xl font-bold text-slate-800 mb-1">{mentor.name}</h3>
//                 <p className="text-[#1a759f] font-semibold text-sm uppercase tracking-wide mb-6">
//                   {mentor.role}
//                 </p>

//                 <div className="flex justify-center gap-4">
//                   <a href="#" className="p-3 bg-white rounded-full text-slate-600 hover:text-[#1a759f] hover:shadow-md transition-all">
//                     <FaLinkedin size={20} />
//                   </a>
//                   <a href="#" className="p-3 bg-white rounded-full text-slate-600 hover:text-black hover:shadow-md transition-all">
//                     <FaGithub size={20} />
//                   </a>
//                   <a href="#" className="p-3 bg-white rounded-full text-slate-600 hover:text-[#1DA1F2] hover:shadow-md transition-all">
//                     <FaTwitter size={20} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Mentors;



import React from 'react';
import { FaLinkedin, FaEnvelope, FaGraduationCap } from 'react-icons/fa';
import shafiqImg from "../../assets/crop logo.jfif"; // Path check karlein

const Mentors = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="bg-[#f0f8fa] rounded-[50px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 border border-slate-100 shadow-xl">
          
          {/* Image Section */}
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-[40px] overflow-hidden border-[10px] border-white shadow-2xl">
              <img 
                src={shafiqImg} 
                alt="Mr. Shafiq" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#52b69a] text-white p-4 rounded-2xl shadow-lg">
              <FaGraduationCap size={30} />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-[#1a759f] font-black text-4xl md:text-5xl uppercase tracking-tighter mb-2">
              MR. SHAFIQ
            </h2>
            <p className="text-[#52b69a] font-bold text-xl tracking-widest mb-6">
              FOUNDER & SENIOR MENTOR
            </p>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-2xl">
              With over a decade of experience in scientific research and technical education, 
              Mr. Shafiq has dedicated his career to empowering students with practical skills 
              and innovative thinking at Step2Scientist.
            </p>

            <div className="flex justify-center lg:justify-start gap-4">
              <button className="bg-[#1a759f] text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#145a7a] transition-all">
                <FaLinkedin /> LinkedIn
              </button>
              <button className="border-2 border-slate-200 text-slate-700 px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white transition-all">
                <FaEnvelope /> Contact
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mentors;