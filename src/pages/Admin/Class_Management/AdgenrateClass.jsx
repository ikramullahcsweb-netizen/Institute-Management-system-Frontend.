
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Head from '../../Admin/Header/Header';

function AdGenerate() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const navigate = useNavigate();

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleGenerate = (event) => {
    event.preventDefault();
    if (selectedMonth) {
      navigate(`/adreportclass?month=${selectedMonth}`);
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans antialiased">
      <Head />
      <div className="w-full max-w-[1100px] mx-auto px-4 lg:pl-[290px] mt-10">
        <div className="w-full bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-10 max-w-xl mx-auto">
          <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tight mb-6 border-b pb-3">
            Generate Attendance Report
          </h1>
          <form className="space-y-6" onSubmit={handleGenerate}>
            <div className="flex flex-col gap-2">
              <label htmlFor="from" className="text-xs font-black text-slate-700 uppercase tracking-wider">
                Select Report Month Target:
              </label>
              <input
                type="month"
                id="from"
                name="from"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#063a67]/20 focus:border-[#063a67] transition-all text-sm"
                value={selectedMonth}
                onChange={handleMonthChange}
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#063a67] hover:bg-[#052e52] text-white text-xs font-black uppercase tracking-widest py-4 rounded-xl shadow-md transition-all hover:scale-[1.01]"
            >
              Compile & Export Report
            </button>
          </form>
        </div>
      </div>   
    </div>
  );
}

export default AdGenerate;