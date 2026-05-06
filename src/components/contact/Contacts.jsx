


// import React from 'react';
// import { FaWhatsapp, FaUser, FaPhone, FaRegPaperPlane } from "react-icons/fa6";
// import { AiOutlineMail } from "react-icons/ai";
// import { TbMessageCircleFilled } from "react-icons/tb";

// const Contacts = () => {
//   return (
//     <section id='Contact' className='m-3 md:my-20 mt-28'>
//       <div className="text-center mb-12">
//         <h1 className='text-3xl font-black text-slate-900 uppercase tracking-tighter'>Get in touch</h1>
//         <p className='text-[#52b69a] font-bold tracking-widest uppercase text-sm'>Contact Me</p>
//       </div>

//       <div className='flex container mx-auto md:flex-row justify-center md:gap-12 gap-8 flex-col items-center md:items-start'>
        
//           <div className="lg:col-span-1 space-y-6">
//             <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 flex items-center gap-6">
//               <div className="bg-[#1a759f] p-4 rounded-2xl text-white">
//                 <FaPhoneAlt size={20} />
//               </div>
//               <div>
//                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Call Us</p>
//                 <p className="text-lg font-bold text-slate-800">+92 300 1234567</p>
//               </div>
//             </div>

//             <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 flex items-center gap-6">
//               <div className="bg-[#52b69a] p-4 rounded-2xl text-white">
//                 <FaEnvelope size={20} />
//               </div>
//               <div>
//                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Us</p>
//                 <p className="text-lg font-bold text-slate-800">info@step2scientist.com</p>
//               </div>
//             </div>

//             <div className="bg-slate-900 p-8 rounded-[40px] shadow-xl flex items-center gap-6 text-white">
//               <div className="bg-white/10 p-4 rounded-2xl">
//                 <FaClock size={20} className="text-[#52b69a]" />
//               </div>
//               <div>
//                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Opening Hours</p>
//                 <p className="text-lg font-bold">Mon - Sat (9AM - 6PM)</p>
//               </div>
//             </div>
//           </div>

      
        
//         <div className='flex flex-col gap-4 w-full md:w-auto'>
//           <h1 className='text-2xl font-black text-slate-800 mb-2 ml-2 tracking-tight italic'>Let's Collab...</h1>
          
//           <div className='bg-white p-2 rounded-3xl'>
//             <form action="" method='POST' className='space-y-8'>
              
//               {/* Name Input */}
//               <div className='flex flex-col relative w-full'>
//                 <label htmlFor="name" className='absolute -top-3 left-4 px-2 bg-white text-slate-500 text-xs font-bold flex items-center gap-2'>
//                   <FaUser size={14} className="text-[#1a759f]" /> NAME
//                 </label>
//                 <input 
//                   type='text' 
//                   name='name' 
//                   placeholder="Enter your full name"
//                   className='rounded-2xl border-2 border-gray-200 md:w-96 w-full h-14 p-5 outline-none focus:border-[#1a759f] transition-all text-slate-700'
//                 />
//               </div>

//               {/* Phone Input */}
//               <div className='flex flex-col relative'>
//                 <label htmlFor="phone" className='absolute -top-3 left-4 px-2 bg-white text-slate-500 text-xs font-bold flex items-center gap-2'>
//                   <FaPhone size={14} className="text-[#1a759f]" /> PHONE
//                 </label>
//                 <input 
//                   type='text' 
//                   name='phone' 
//                   placeholder="+92 000 0000000"
//                   className='rounded-2xl border-2 border-gray-200 md:w-96 w-full h-14 p-5 outline-none focus:border-[#1a759f] transition-all text-slate-700'
//                 />
//               </div>

//               {/* Message Input */}
//               <div className='flex flex-col relative'>
//                 <label htmlFor="message" className='absolute -top-3 left-4 px-2 bg-white text-slate-500 text-xs font-bold flex items-center gap-2'>
//                   <TbMessageCircleFilled size={16} className="text-[#1a759f]" /> MESSAGE
//                 </label>
//                 <textarea 
//                   name="message" 
//                   placeholder="Tell us about your project..."
//                   className='rounded-2xl border-2 border-gray-200 h-32 md:w-96 w-full p-5 outline-none focus:border-[#1a759f] transition-all text-slate-700 resize-none'
//                 ></textarea>
//               </div>

            
//               <button 
//                 type="submit"
//                 className='w-full md:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-slate-900 text-white rounded-2xl hover:bg-[#1a759f] transition-all duration-300 font-bold shadow-lg active:scale-95'
//               >
//                 <span>SEND MESSAGE</span>
//                 <FaRegPaperPlane size={20} />
//               </button>
//             </form>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };


import React from 'react';
import { 
  FaUser, 
  FaPhone, 
  FaRegPaperPlane, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock 
} from "react-icons/fa"; // Saare icons yahan se import kar diye
import { TbMessageCircleFilled } from "react-icons/tb";

const Contacts = () => {
  return (
    <section id='Contact' className='m-3 md:my-20 mt-28'>
      <div className="text-center mb-12">
        <h1 className='text-3xl font-black text-slate-900 uppercase tracking-tighter'>Get in touch</h1>
        <p className='text-[#52b69a] font-bold tracking-widest uppercase text-sm'>Contact Me</p>
      </div>

      <div className='flex container mx-auto md:flex-row justify-center md:gap-12 gap-8 flex-col items-center md:items-start'>
        
        {/* Left Side: Contact Info Cards */}
        <div className="w-full md:w-auto space-y-6">
          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 flex items-center gap-6">
            <div className="bg-[#1a759f] p-4 rounded-2xl text-white">
              <FaPhoneAlt size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Call Us</p>
              <p className="text-lg font-bold text-slate-800">+92 300 1234567</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 flex items-center gap-6">
            <div className="bg-[#52b69a] p-4 rounded-2xl text-white">
              <FaEnvelope size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Us</p>
              <p className="text-lg font-bold text-slate-800">info@step2scientist.com</p>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-[40px] shadow-xl flex items-center gap-6 text-white">
            <div className="bg-white/10 p-4 rounded-2xl">
              <FaClock size={20} className="text-[#52b69a]" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Opening Hours</p>
              <p className="text-lg font-bold">Mon - Sat (9AM - 6PM)</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form Section */}
        <div className='flex flex-col gap-4 w-full md:w-auto'>
          <h1 className='text-2xl font-black text-slate-800 mb-2 ml-2 tracking-tight italic'>Let's Collab...</h1>
          
          <div className='bg-white p-2 rounded-3xl'>
            <form action="" method='POST' className='space-y-8'>
              
              <div className='flex flex-col relative w-full'>
                <label htmlFor="name" className='absolute -top-3 left-4 px-2 bg-white text-slate-500 text-xs font-bold flex items-center gap-2'>
                  <FaUser size={14} className="text-[#1a759f]" /> NAME
                </label>
                <input 
                  type='text' 
                  name='name' 
                  placeholder="Enter your full name"
                  className='rounded-2xl border-2 border-gray-200 md:w-96 w-full h-14 p-5 outline-none focus:border-[#1a759f] transition-all text-slate-700'
                />
              </div>

              <div className='flex flex-col relative'>
                <label htmlFor="phone" className='absolute -top-3 left-4 px-2 bg-white text-slate-500 text-xs font-bold flex items-center gap-2'>
                  <FaPhone size={14} className="text-[#1a759f]" /> PHONE
                </label>
                <input 
                  type='text' 
                  name='phone' 
                  placeholder="+92 000 0000000"
                  className='rounded-2xl border-2 border-gray-200 md:w-96 w-full h-14 p-5 outline-none focus:border-[#1a759f] transition-all text-slate-700'
                />
              </div>

              <div className='flex flex-col relative'>
                <label htmlFor="message" className='absolute -top-3 left-4 px-2 bg-white text-slate-500 text-xs font-bold flex items-center gap-2'>
                  <TbMessageCircleFilled size={16} className="text-[#1a759f]" /> MESSAGE
                </label>
                <textarea 
                  name="message" 
                  placeholder="Tell us about your project..."
                  className='rounded-2xl border-2 border-gray-200 h-32 md:w-96 w-full p-5 outline-none focus:border-[#1a759f] transition-all text-slate-700 resize-none'
                ></textarea>
              </div>

              <button 
                type="submit"
                className='w-full md:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-slate-900 text-white rounded-2xl hover:bg-[#1a759f] transition-all duration-300 font-bold shadow-lg active:scale-95'
              >
                <span>SEND MESSAGE</span>
                <FaRegPaperPlane size={20} />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};



export default Contacts;

