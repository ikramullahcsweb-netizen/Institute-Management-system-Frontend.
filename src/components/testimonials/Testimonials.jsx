import React from 'react';

const Testimonials = () => {
  const students = [
    {
      name: "Ali Ahmed",
      role: "Web Development Student",
      feedback: "Step2Scientist ne meri coding skills ko next level par pohnchaya hai. Practical approach ne mujhe real projects ke liye tayyar kiya.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ali"
    },
    {
      name: "Sara Khan",
      role: "Data Science Student",
      feedback: "Complexity ko asani se samjhane ka tarika lajawab hai. AI aur Data Science ke concepts ab mere liye bilkul clear hain.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara"
    },
    {
      name: "Hamza Bilal",
      role: "AI Specialist Student",
      feedback: "Best institute in Peshawar! Modern tools aur expert mentors ki wajah se mujhe industry standards ka pata chala.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hamza"
    },
    {
      name: "Zainab Malik",
      role: "Database Management",
      feedback: "Hands-on training ne mera confidence boost kiya. Ab main asani se complex database structures design kar sakti hoon.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zainab"
    }
  ];

  return (
    <section id="Testimonials" className="py-24 bg-[#f8fdff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tighter">
            STUDENTS <span className="text-[#1a759f]">FEEDBACK</span>
          </h2>
          <p className="text-slate-500 font-semibold tracking-widest text-xs mt-2 uppercase">
            What our successful students say
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#1a759f] to-[#52b69a] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {students.map((student, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-[35px] shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center group"
            >
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-[#1a759f] rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <img 
                  src={student.image} 
                  alt={student.name} 
                  className="w-20 h-20 rounded-full relative z-10 border-4 border-white shadow-md"
                />
              </div>
              
              <div className="mb-4">
                <span className="text-[#52b69a] text-2xl">"</span>
                <p className="text-slate-600 text-sm italic leading-relaxed">
                  {student.feedback}
                </p>
                <span className="text-[#52b69a] text-2xl">"</span>
              </div>

              <div className="mt-auto">
                <h4 className="font-bold text-slate-800 text-lg">{student.name}</h4>
                <p className="text-[#1a759f] text-[10px] font-bold uppercase tracking-wider">
                  {student.role}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;