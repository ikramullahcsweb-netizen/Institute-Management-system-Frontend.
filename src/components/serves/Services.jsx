import React from 'react';
import { Code, Cpu, Database, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      icon: <Code className="w-8 h-8 text-[#1a759f]" />,
      desc: "Building modern, responsive, and high-performance web applications."
    },
    {
      title: "AI & ML",
      icon: <Cpu className="w-8 h-8 text-[#1a759f]" />,
      desc: "Integrating intelligent solutions and machine learning models."
    },
    {
      title: "Database Management",
      icon: <Database className="w-8 h-8 text-[#1a759f]" />,
      desc: "Secure and scalable data architecture and management."
    },
    {
      title: "Data Science",
      icon: <BarChart3 className="w-8 h-8 text-[#1a759f]" />,
      desc: "Transforming raw data into actionable business insights."
    }
  ];

  return (
    <section id="Services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tighter">
            Our <span className="text-[#1a759f]">Services</span>
          </h2>
          <p className="text-slate-500 font-semibold tracking-widest text-xs mt-2 uppercase">
            Excellence in Technology Solutions
          </p>
          <div className="w-20 h-1 bg-[#1a759f] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 bg-[#f0f8fa] rounded-[30px] border border-transparent hover:border-[#1a759f]/20 hover:bg-white hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="mb-6 inline-block p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;