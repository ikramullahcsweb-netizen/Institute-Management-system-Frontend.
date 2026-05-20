import React from "react";
import { Link } from "react-router-dom";
import Head from "../Header/Header";

function Home() {
  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans flex flex-col">
      {/* Universal Workspace Header navigation */}
      <Head />
        <div className="flex-1 flex flex-col justify-center items-center px-4 py-12">
        {/* Brand Segment Introduction Panel */}
        <div className="text-center mb-10 max-w-sm">
          <h1 className="text-3xl font-black text-[#13293d] tracking-tight uppercase">
            Salary Console
          </h1>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Manage institutional payroll allocations and review structured
            payment registries effortlessly.
          </p>
          <div className="w-12 h-1 bg-[#10a1b6] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Action Panel Workspace Grid */}
        <div className="w-full max-w-[500px] flex flex-col sm:flex-row gap-4 justify-center items-stretch">
          {/* Card 1: Navigate to Create/Add Salary Layout */}
          <Link
            to="/create"
            className="flex-1 group bg-white border-2 border-slate-200 hover:border-[#10a1b6] p-6 rounded-[24px] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between items-center text-center text-decoration-none"
          >
            <div className="mb-4 p-4 rounded-full bg-slate-50 group-hover:bg-[#10a1b6]/10 text-[#13293d] group-hover:text-[#10a1b6] transition-all duration-300">
              {/* Dynamic SVG Icon Stream for Adding Payload Data */}
              <svg
                className="w-8 h-8 stroke-current fill-none stroke-[2]"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-black text-[#13293d] uppercase tracking-wide group-hover:text-[#10a1b6] transition-colors">
                Add Salary
              </h3>
              <p className="text-[11px] text-gray-400 font-medium mt-1 leading-relaxed">
                Log new financial compensation parameters for active tracking.
              </p>
            </div>
            <button className="mt-5 w-full bg-[#13293d] group-hover:bg-[#10a1b6] text-white font-bold text-[11px] uppercase tracking-wider py-2 rounded-xl shadow-xs transition-colors">
              Launch Creator
            </button>
          </Link>

          {/* Card 2: Navigate to View/Manage Salary Tables Dashboard */}
          <Link
            to="/managersalary"
            className="flex-1 group bg-white border-2 border-slate-200 hover:border-[#13293d] p-6 rounded-[24px] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between items-center text-center text-decoration-none"
          >
            <div className="mb-4 p-4 rounded-full bg-slate-50 group-hover:bg-[#13293d]/10 text-[#10a1b6] group-hover:text-[#13293d] transition-all duration-300">
              {/* Dynamic SVG Icon Stream for Viewing Registry Datasets */}
              <svg
                className="w-8 h-8 stroke-current fill-none stroke-[2]"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-black text-[#10a1b6] group-hover:text-[#13293d] uppercase tracking-wide transition-colors">
                View Salary
              </h3>
              <p className="text-[11px] text-gray-400 font-medium mt-1 leading-relaxed">
                Inspect generated ledger payroll modules and export reports.
              </p>
            </div>
            <button className="mt-5 w-full bg-[#10a1b6] group-hover:bg-[#13293d] text-white font-bold text-[11px] uppercase tracking-wider py-2 rounded-xl shadow-xs transition-colors">
              Open Ledger
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
