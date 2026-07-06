// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Head from '../Header/Header';

// function AdGenerate() {
//   const [selectedMonth, setSelectedMonth] = useState("");
//   const navigate = useNavigate();

//   const handleMonthChange = (event) => {
//     setSelectedMonth(event.target.value);
//   };

//   const handleGenerate = (event) => {
//     event.preventDefault();
//     if (selectedMonth) {
//       navigate(`/adreportclass?month=${selectedMonth}`);
//     }
//   };

//   return (
//     <div className="font-sans m-0 p-0">
//       <Head />
//       <div className="w-[950px] h-[550px] bg-gradient-to-r from-[#aed5d9] to-[#577faf] ml-[350px] p-2.5 rounded-[20px] border-2 border-black">
//         <div className="max-w-[600px] mt-[120px] ml-[150px] p-5 border border-gray-300 rounded-[20px] bg-[#f9f9f9]">
//           <h1 className="text-center text-[#333] text-3xl font-bold mb-[30px]">Generate Report</h1>
//           <form onSubmit={handleGenerate}>
//             <div className="mb-6">
//               <label htmlFor="from" className="block font-bold text-gray-600 mb-2">
//                 Select Month:
//               </label>
//               <input
//                 type="month"
//                 id="from"
//                 name="from"
//                 className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-[#384D6C]"
//                 value={selectedMonth}
//                 onChange={handleMonthChange}
//                 required
//               />
//             </div>
//             <button 
//               type="submit" 
//               className="text-white ml-[110px] cursor-pointer bg-[#384D6C] text-center rounded-[15px] padding px-[50px] py-[11px] outline-none transition-all duration-250 text-xl font-bold border-3 border-white hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] hover:scale-105"
//             >
//               Generate
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdGenerate;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Head from '../Header/Header';

function AdGenerate() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const navigate = useNavigate();

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleGenerate = (event) => {
    event.preventDefault();
    if (selectedMonth) {
      // Masla yahan tha: Path ko '/adreportclass' se badal kar '/adsalaryreport' kar diya hai
      navigate(`/adsalaryreport?month=${selectedMonth}`);
    }
  };

  return (
    <div className="font-sans min-h-screen bg-gray-100 m-0 p-0">
      <Head />
      {/* Container ko centralize kiya hai taake screen par sahi nazar aaye */}
      <div className="flex justify-center items-center mt-10">
        <div className="w-[950px] h-[550px] bg-gradient-to-r from-[#aed5d9] to-[#577faf] p-6 rounded-[20px] border-2 border-black flex justify-center items-center md:ml-[90px]">
          <div className="w-full max-w-[600px] p-8 border border-gray-300 rounded-[20px] bg-[#f9f9f9] shadow-lg">
            <h1 className="text-center text-[#333] text-3xl font-bold mb-[30px]">Generate Report</h1>
            <form onSubmit={handleGenerate}>
              <div className="mb-6">
                <label htmlFor="from" className="block font-bold text-gray-600 mb-2">
                  Select Month:
                </label>
                <input
                  type="month"
                  id="from"
                  name="from"
                  className="w-full p-2.5 border border-gray-300 rounded-md outline-none focus:border-[#384D6C] focus:ring-1 focus:ring-[#384D6C]"
                  value={selectedMonth}
                  onChange={handleMonthChange}
                  required
                />
              </div>
              <div className="flex justify-center">
                <button 
                  type="submit" 
                  className="text-white cursor-pointer bg-[#384D6C] text-center rounded-[15px] px-[50px] py-[11px] outline-none transition-all duration-250 text-xl font-bold border-2 border-white hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] hover:scale-105"
                >
                  Generate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdGenerate;
