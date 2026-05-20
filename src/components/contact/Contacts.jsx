import React from 'react';
import { FaRegPaperPlane } from "react-icons/fa6";
import contactImg from "../../assets/office image.avif";

const Contacts = () => {
  return (
    <section id='Contact' className='py-20  bg-white mt-10'>
      <div className="max-w-7xl px-4  mx-auto">
        
        <div className="text-center mb-16">
          <h1 className='text-4xl font-black text-slate-900 uppercase tracking-tighter'>Get in touch</h1>
          <p className='text-[#52b69a] font-bold tracking-widest uppercase text-sm mt-2'>Contact Me</p>
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-16'>
          
          
          <div className='w-full lg:w-1/2 order-2 lg:order-1'>
            <div className='relative group'>
              <div className='absolute -inset-2 bg-gradient-to-r from-[#1a759f] to-[#52b69a] rounded-[40px] blur opacity-20 group-hover:opacity-40 transition duration-1000'></div>
              <div className='relative overflow-hidden rounded-[40px] border-4 border-white shadow-2xl bg-white'>
                <img 
                  src={contactImg} 
                  alt="Step 2 Scientist Team" 
                  className='w-full h-[550px] object-cover object-center group-hover:scale-105 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-10'>
                  <h3 className='text-white text-2xl font-black italic'>Step 2 Scientist</h3>
                  <p className='text-slate-200 font-medium'>Professional Learning Environment</p>
                </div>
              </div>
            </div>
          </div>

          
          <div className='w-full lg:w-1/2 order-1 lg:order-2 '>
            <h2 className='text-2xl font-black text-slate-800 mb-10 italic'>Fill out the form...</h2>
            <form action="" method='POST' className='space-y-10  '>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-10  '>
                <div className='flex flex-col relative w-full'>
                  <label className='absolute -top-3 left-4 px-2 bg-white text-[#1a759f] text-[10px] font-black tracking-widest'>FIRST NAME*</label>
                  <input type='text' name='firstname' placeholder="First name" className='rounded-2xl border-2 border-slate-100 w-full h-14 p-5 outline-none focus:border-[#1a759f] transition-all text-slate-700 font-semibold' required />
                </div>

                <div className='flex flex-col relative w-full'>
                  <label className='absolute -top-3 left-4 px-2 bg-white text-[#1a759f] text-[10px] font-black tracking-widest'>LAST NAME*</label>
                  <input type='text' name='lastname' placeholder="Last name" className='rounded-2xl border-2 border-slate-100 w-full h-14 p-5 outline-none focus:border-[#1a759f] transition-all text-slate-700 font-semibold' required />
                </div>
              </div>

              <div className='flex flex-col relative w-full'>
                <label className='absolute -top-3 left-4 px-2 bg-white text-[#1a759f] text-[10px] font-black tracking-widest'>EMAIL*</label>
                <input type='email' name='email' placeholder="example@mail.com" className='rounded-2xl border-2 border-slate-100 w-full h-14 p-5 outline-none focus:border-[#1a759f] transition-all text-slate-700 font-semibold' required />
              </div>

              <div className='flex flex-col relative w-full'>
                <label className='absolute -top-3 left-4 px-2 bg-white text-[#1a759f] text-[10px] font-black tracking-widest'>PHONE</label>
                <input type='text' name='phone' placeholder="+92 3XX XXXXXXX" className='rounded-2xl border-2 border-slate-100 w-full h-14 p-5 outline-none focus:border-[#1a759f] transition-all text-slate-700 font-semibold' />
              </div>

              <div className='flex flex-col relative w-full'>
                <label className='absolute -top-3 left-4 px-2 bg-white text-[#1a759f] text-[10px] font-black tracking-widest'>MESSAGE</label>
                <textarea name="message" placeholder="How can we help you?" className='rounded-2xl border-2 border-slate-100 h-32 w-full p-5 outline-none focus:border-[#1a759f] transition-all text-slate-700 font-semibold resize-none'></textarea>
              </div>

              <button type="submit" className='w-full py-5 bg-[#1a759f] text-white rounded-2xl hover:bg-slate-900 transition-all duration-300 font-black shadow-xl flex items-center justify-center gap-3 uppercase tracking-widest active:scale-95'>
                <span>Submit</span>
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