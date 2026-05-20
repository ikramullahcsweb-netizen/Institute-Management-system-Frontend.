import React from 'react';
import { Plus } from 'lucide-react';

const Overview = () => {
  return (
    <div>
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Admin Overview</h1>
          <p className="text-slate-400 text-sm">Control center for Step2Scientist platform.</p>
        </div>
        <button className="bg-[#52b69a] text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-[#40917a] transition-all">
          <Plus size={20} /> Create New Course
        </button>
      </div>
      
      {/* Cards and Tables go here */}
      <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-800 text-center">
        <p className="text-slate-400">Main Content Area - Overview Stats will be here.</p>
      </div>
    </div>
  );
};

export default Overview;