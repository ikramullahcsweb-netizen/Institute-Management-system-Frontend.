import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-tight uppercase">
              STEP 2 <span className="bg-gradient-to-r from-brand-teal to-brand-green bg-clip-text text-transparent">SCIENTIST</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering the next generation of innovators through high-quality 
              technical education and hands-on training in modern technologies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2.5 bg-slate-800/50 hover:bg-brand-blue rounded-xl transition-all hover:-translate-y-0.5">
                <svg className="w-5.5 h-5.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="p-2.5 bg-slate-800/50 hover:bg-brand-blue rounded-xl transition-all hover:-translate-y-0.5">
                <svg className="w-5.5 h-5.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="p-2.5 bg-slate-800/50 hover:bg-brand-teal rounded-xl transition-all hover:-translate-y-0.5">
                <svg className="w-5.5 h-5.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="p-2.5 bg-slate-800/50 hover:bg-brand-green rounded-xl transition-all hover:-translate-y-0.5">
                <svg className="w-5.5 h-5.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-slate-100 border-l-2 border-brand-teal pl-3">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#Home" className="hover:text-brand-teal transition-colors hover:underline">Home</a></li>
              <li><a href="#About" className="hover:text-brand-teal transition-colors hover:underline">About Us</a></li>
              <li><a href="#Services" className="hover:text-brand-teal transition-colors hover:underline">Services</a></li>
              <li><a href="#Contact" className="hover:text-brand-teal transition-colors hover:underline">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-slate-100 border-l-2 border-brand-green pl-3">Our Core Scope</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="hover:text-brand-green cursor-pointer transition-colors">Computer Coding</li>
              <li className="hover:text-brand-green cursor-pointer transition-colors">Robotics Lab Work</li>
              <li className="hover:text-brand-green cursor-pointer transition-colors">Web App Engineering</li>
              <li className="hover:text-brand-green cursor-pointer transition-colors">Science Experimentation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-slate-100 border-l-2 border-brand-blue pl-3">Contact Support</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="text-brand-teal w-5 h-5 shrink-0" />
                <span>Peshawar, KP, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-green w-5 h-5 shrink-0" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-blue w-5 h-5 shrink-0" />
                <span>info@step2scientist.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
            © {new Date().getFullYear()} Step 2 Scientist Academy. All Rights Reserved. Developed by Ikram.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;