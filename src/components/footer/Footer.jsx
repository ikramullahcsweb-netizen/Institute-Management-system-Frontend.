import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div>
            <h2 className="text-2xl font-black tracking-tighter mb-6">
              STEP2<span className="text-[#52b69a]">SCIENTIST</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering the next generation of innovators through high-quality 
              technical education and hands-on training in modern technologies.
            </p>
            <div className="flex gap-4">
              
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-[#1a759f] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-[#1a759f] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-[#1a759f] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-[#1a759f] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#Home" className="hover:text-[#52b69a] transition-colors hover:underline">Home</a></li>
              <li><a href="#About" className="hover:text-[#52b69a] transition-colors hover:underline">About Us</a></li>
              <li><a href="#Services" className="hover:text-[#52b69a] transition-colors hover:underline">Services</a></li>
              <li><a href="#Contact" className="hover:text-[#52b69a] transition-colors hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="hover:text-[#52b69a] cursor-pointer transition- ">Web Development</li>
              <li className="hover:text-[#52b69a] cursor-pointer transition-colors">AI & Machine Learning</li>
              <li className="hover:text-[#52b69a] cursor-pointer transition-colors">Database Management</li>
              <li className="hover:text-[#52b69a] cursor-pointer transition-colors">Data Science</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <svg className="text-[#52b69a]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Peshawar, KP, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="text-[#52b69a]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="text-[#52b69a]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>info@step2scientist.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-xs font-medium">
            © {new Date().getFullYear()} Step2Scientist. All rights reserved. Developed by Ikram.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;