


import React from 'react';
// Aapki image ka path yahan check karlein
import instituteBg from "../../assets/institue image.avif"; 

const Hero = () => {
  return (
    <section id="Home" className="relative min-h-screen h-200 flex items-center justify-center overflow-hidden mx-auto ">
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${instituteBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay taake text parha jaye */}
        <div className="absolute inset-0  bg-black/50"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        
        {/* Subheading */}
        <h2 className="text-[#52b69a] font-bold tracking-[0.3em] text-sm mb-6 uppercase drop-shadow-md">
          🚀 Welcome to Step2Scientist
        </h2>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 drop-shadow-lg">
          Explore the <br />
          <span className="bg-gradient-to-r from-[#1a759f] to-[#52b69a] bg-clip-text text-transparent">
            World of Science
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-gray-200 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
          Join Pakistan's premier institute where technology meets creativity. 
          We provide a modern environment 🏢 to help you become the scientist of tomorrow.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto px-12 py-4 bg-[#1a759f] text-white font-bold rounded-full hover:bg-[#145a7a] transition-all shadow-xl active:scale-95">
            GET STARTED
          </button>
          <button className="w-full sm:w-auto px-12 py-4 border-2 border-white/40 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-sm">
            VIEW COURSES
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-10 border-t border-white/20 flex flex-wrap justify-center gap-12 md:gap-20">
          <div className="text-center">
            <p className="text-4xl font-black text-white">500+</p>
            <p className="text-[10px] text-[#52b69a] font-bold uppercase tracking-widest mt-1">Active Members</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-white">100%</p>
            <p className="text-[10px] text-[#52b69a] font-bold uppercase tracking-widest mt-1">Practical Work</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-white">🔬</p>
            <p className="text-[10px] text-[#52b69a] font-bold uppercase tracking-widest mt-1">Lab Ready</p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;