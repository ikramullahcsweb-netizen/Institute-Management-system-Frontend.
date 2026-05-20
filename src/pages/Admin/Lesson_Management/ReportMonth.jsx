import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Head from "../Header/Header";

function ReportMonth() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Get current date locally (Pure Frontend)
    const currentDate = new Date();
    // Format date to 'YYYY-MM' for input type 'month'
    const formattedDate = currentDate.toISOString().slice(0, 7);
    setSelectedMonth(formattedDate);
  }, []);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleGenerate = (event) => {
    event.preventDefault();
    if (selectedMonth) {
      // S2S Lesson Report dashboard navigation
      navigate(`/lessonReport?month=${selectedMonth}`);
    }
  };

  return (
    <div className="font-sans m-0 p-0">
      <Head />

      {/* Step 2 Scientist Sidebar-aligned Layout Wrapper */}
      <div className="w-[950px] h-[550px] bg-gradient-to-r from-[#e6eff6] to-[#063a67] ml-[350px] p-2.5 rounded-[20px] border-2 border-black flex items-center justify-center">
        <div className="w-full max-w-[600px] p-8 border border-gray-300 rounded-[20px] bg-[#f9f9f9] shadow-lg">
          <h1 className="text-center text-[#063a67] text-3xl font-bold mb-[30px]">
            Generate Lesson Report
          </h1>

          <form onSubmit={handleGenerate}>
            <div className="mb-6">
              <label
                htmlFor="from"
                className="block font-bold text-gray-700 mb-2 text-md"
              >
                Select Target Month:
              </label>
              <input
                type="month"
                id="from"
                name="from"
                className="w-full p-3 border-2 border-gray-300 rounded-xl outline-none focus:border-[#063a67] transition-all font-semibold"
                value={selectedMonth}
                onChange={handleMonthChange}
                required
              />
            </div>

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="text-white cursor-pointer bg-[#063a67] text-center rounded-[15px] px-[60px] py-[12px] outline-none transition-all duration-250 text-xl font-bold border-3 border-white hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] hover:scale-105 shadow-md"
              >
                Generate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReportMonth;
