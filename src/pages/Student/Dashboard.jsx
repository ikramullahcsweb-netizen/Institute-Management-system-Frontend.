import React, { useState, useEffect } from 'react';
import Head from './Header/Header';
import dashboardImg from './photos/dashboard.png';
import API from '../../api';
import { FaBullhorn, FaCalendarDay, FaUserCheck } from 'react-icons/fa';

function Dashboard() {
  const [name, setName] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [institutenotices, setInstitutenotices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Real date
  useEffect(() => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
    setCurrentDate(formattedDate);
  }, []);

  // Fetch student name from profile
  useEffect(() => {
    API.get('/api/v1/studentprofile')
      .then((res) => {
        const d = res.data?.data || res.data;
        setName(d.name || '');
      })
      .catch((err) => {
        console.error('Error fetching student profile:', err);
      });
  }, []);

  // Fetch institute notices
  useEffect(() => {
    API.get('/api/notices/getinstitutenotices')
      .then((res) => {
        // Backend array ya { data: [] } return kar sakta hai
        const data = Array.isArray(res.data) ? res.data
          : Array.isArray(res.data?.data) ? res.data.data
          : [];
        setInstitutenotices(data);
      })
      .catch((err) => {
        console.error('Error fetching institute notices:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12">
      <Head />

      <div className="w-full max-w-[1300px] mx-auto px-4 pl-4 md:pl-[290px] mt-8 transition-all space-y-6">
        
        {/* Top Hero Banner */}
        <div className="relative w-full bg-gradient-to-r from-[#1E2D42] via-[#2F4563] to-[#384D6C] border-2 border-slate-900 rounded-[22px] p-6 md:p-8 text-white overflow-hidden shadow-sm">
          
          <div className="relative z-10 space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 bg-black/30 border border-white/20 px-3 py-1 rounded-md text-xs font-mono font-bold tracking-wider text-[#C9E8EA] uppercase">
              <FaCalendarDay />
              <span>Session Log: {currentDate}</span>
            </div>
            
            <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-tight uppercase">
              Welcome Back, <span className="text-[#C9E8EA]">{name || '...'}</span>!
            </h1>
            
            <p className="text-xs md:text-sm text-slate-300 font-medium max-w-md leading-relaxed">
              System access approved. Monitor your course updates and notices below.
            </p>
          </div>

          <div className="absolute right-0 top-0 h-full w-1/3 opacity-25 md:opacity-100 hidden sm:block pointer-events-none">
            <img 
              src={dashboardImg} 
              alt="Dashboard Graphic" 
              className="w-full h-full object-cover object-center transform scale-105 transition-transform"
            />
          </div>
          
          <div className="absolute top-0 right-1/4 w-32 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none" />
        </div>

        {/* Institute Notices */}
        <div className="bg-white border-2 border-slate-900 rounded-[22px] p-5 md:p-6 shadow-sm space-y-6">
          
          <div className="flex items-center justify-between gap-4 border-b-2 border-slate-100 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 bg-[#C9E8EA] text-[#384D6C] rounded-lg text-sm border border-slate-300">
                <FaBullhorn />
              </div>
              <div>
                <h2 className="text-base font-black text-slate-900 uppercase tracking-wider">
                  Institute Notices & System Messages
                </h2>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">
                  Official operational updates broadcasted by administration desk
                </p>
              </div>
            </div>
            
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-extrabold bg-slate-100 text-slate-600 border border-slate-300 px-2.5 py-1 rounded-md">
              <FaUserCheck className="text-emerald-600" /> Authorized Stream
            </span>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Loading notices...</p>
            </div>
          ) : institutenotices.length > 0 ? (
            <div className="space-y-4">
              {institutenotices.map((Inotice, index) => (
                <div 
                  key={Inotice._id || index} 
                  className="bg-slate-50 border-2 border-slate-100 hover:border-slate-300 rounded-xl p-4 md:p-5 transition-all space-y-2 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-dashed border-slate-200 pb-1.5">
                    <h3 className="text-sm md:text-base font-black text-slate-900 group-hover:text-[#384D6C] transition-colors leading-snug">
                      {Inotice.I_topic}
                    </h3>
                    <span className="text-[10px] text-slate-400 font-mono font-bold shrink-0">
                      Posted: {Inotice.I_date}
                    </span>
                  </div>
                  
                  <p className="text-xs text-slate-600 font-medium leading-relaxed max-w-4xl">
                    {Inotice.I_description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50">
              <p className="text-sm font-black text-slate-400 uppercase tracking-wider">
                No Notices
              </p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                No active institutional announcements at this time.
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default Dashboard;
