import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from '../Header/Header';

function AdGenerate() {
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleSubmit = (e) => {
    // Standard reload behavior block karne ke liye agar user enter press kare
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Head />
      
      {/* S2S Sidebar Alignment Wrapper Container */}
      <div className="ml-[290px] pt-16 px-8 flex justify-center items-center">
        <div className="w-full max-w-[550px] bg-white rounded-[24px] border-2 border-gray-100 shadow-xl p-8 transition-all">
          
          {/* Component Header Module */}
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-[#063a67] m-0 tracking-tight">
              Generate Report
            </h1>
            <p className="text-xs text-gray-400 font-semibold tracking-wider mt-1.5 uppercase">
              Extract System Analytics & Enrollment Matrices
            </p>
            <div className="w-full h-[3px] bg-gradient-to-r from-[#063a67] to-[#e6eff6] mt-4 rounded-full"></div>
          </div>

          {/* Form Filter Layout Control */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Input Element Wrapper Block */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="from" className="text-[14px] font-bold text-gray-700 uppercase tracking-wide">
                Select Month *
              </label>
              <input
                type="month"
                id="from"
                name="from"
                className="w-full p-3.5 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50 cursor-pointer text-center md:text-left"
                value={selectedMonth}
                onChange={handleMonthChange}
                required
              />
            </div>

            {/* Action Trigger Router Controller */}
            <div className="pt-2">
              {selectedMonth ? (
                <Link 
                  to={`/adgeneratereport?month=${selectedMonth}`} 
                  className="no-underline block"
                >
                  <button
                    type="button"
                    className="w-full text-white cursor-pointer bg-[#063a67] text-center rounded-xl py-4 outline-none transition-all duration-200 text-[16px] font-bold hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] hover:scale-[1.02] shadow-md border-none"
                  >
                    🚀 Generate Operational Report
                  </button>
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => alert("Please choose a valid month before compilation initialization.")}
                  className="w-full text-gray-400 bg-gray-100 text-center rounded-xl py-4 text-[16px] font-bold border-none cursor-not-allowed"
                >
                  Select Month to Unlock
                </button>
              )}
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default AdGenerate;