
import React from 'react';
import heroPic from "../../assets/office image.avif"; 

const About = () => {
  return (
    <section id="About" className="relative py-24 bg-[#f0f8fa] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-4xl font-black text-slate-800 uppercase tracking-tighter">
            ABOUT <span className="text-[#1a759f]">US</span>
          </h2>
          <p className="text-slate-500 font-semibold tracking-widest text-xs mt-2 uppercase">
            Innovating the Future of Science and Technology
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#1a759f] to-[#52b69a] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="z-10 text-left order-2 lg:order-1">
            <h2 className="text-[#1a759f] font-bold tracking-[0.2em] text-sm mb-4 uppercase">
               Discover Our Mission
            </h2>
            
            <h1 className="text-4xl md:text-5xl font-black text-slate-800 leading-tight mb-6">
              Empowering Minds at <br />
              <span className="bg-gradient-to-r from-[#1a759f] to-[#52b69a] bg-clip-text text-transparent">
                Step2Scientist
              </span>
            </h1>
            
            <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-md font-medium">
              Join Step2Scientist's premier institute where technology meets creativity. 
              Our mission is to empower students through modern tools, research, 
              and a hands-on learning environment.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <button className="w-full sm:w-auto px-10 py-4 bg-[#1a759f] text-white font-bold rounded-full hover:bg-[#145a7a] transition-all shadow-lg active:scale-95">
                LEARN MORE
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200 flex gap-10">
              <div>
                <p className="text-3xl font-bold text-slate-800">Expert</p>
                <p className="text-[10px] text-[#1a759f] font-bold uppercase tracking-widest">Instructors</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-800">Practical</p>
                <p className="text-[10px] text-[#1a759f] font-bold uppercase tracking-widest">Approach</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#1a759f]/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative z-10 border-[10px] border-white rounded-[30px] overflow-hidden shadow-2xl max-w-sm md:max-w-md bg-white">
              <img 
                src={heroPic} 
                alt="Step2Scientist About" 
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 lg:right-0 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-slate-100">
                <div className="bg-blue-50 p-2 rounded-full text-xl">💡</div>
                <div>
                  <p className="font-bold text-slate-800 text-lg leading-tight">Innovation</p>
                  <p className="text-xs text-slate-500 font-semibold tracking-wide">Future Focused</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;


