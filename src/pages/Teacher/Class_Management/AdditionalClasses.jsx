import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import { toast } from 'react-toastify';

const BASE_URL = '';

const statusBadge = (status) => {
  const base = "px-3 py-0.5 rounded-full text-xs font-medium border";
  if (status === "Approved") return `${base} bg-emerald-50 text-emerald-700 border-emerald-200`;
  if (status === "Pending") return `${base} bg-amber-50 text-amber-700 border-amber-200`;
  if (status === "Rejected") return `${base} bg-red-50 text-red-700 border-red-200`;
  return `${base} bg-gray-100 text-gray-500 border-gray-200`;
};

function AdditionalClasses() {
  const [additionalClasses, setAdditionalClasses] = useState([]);
  const [requestedClasses, setRequestedClasses] = useState([]);
  
  const allClasses = [...additionalClasses, ...requestedClasses];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Pehle Teacher profile fetch karein
        const profileRes = await axios.get(`${BASE_URL}/api/v1/teacherprofile`, { withCredentials: true });
        const tname = profileRes.data.name;

        // 2. Promise.all ka istemal: dono network calls parallel (ek saath) hongi
        const [additionalRes, schedulesRes] = await Promise.all([
          axios.get(`${BASE_URL}/api/classes/requestedadditionalclasses/additionalclasses`, { withCredentials: true }),
          axios.get(`${BASE_URL}/api/classes/requestedadditionalclasses/schedules`, { withCredentials: true })
        ]);

        // 3. Teacher ke naam se data filter aur state update
        setAdditionalClasses(additionalRes.data.filter(c => c.teacher === tname));
        setRequestedClasses(schedulesRes.data.filter(c => c.teacher === tname));
        
      } catch (err) {
        console.error("Data fetch error:", err);
        toast.error("Data load karne mein masla aaya!");
      }
    };

    fetchData();
  }, []);

  const approvedCount = allClasses.filter((c) => c.status === "Approved").length;
  const pendingCount = allClasses.filter((c) => c.status === "Pending").length;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">View Additional Classes</h1>
            <p className="text-sm text-gray-500 mt-1">Aapki extra aur requested classes ka jaiza</p>
          </div>
          <Link to="/AddAdditionalClasses" className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90 no-underline" style={{ background: "linear-gradient(135deg, #5DC85A, #1DA8A0)" }}>
            + Add Additional Class
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Kul Classes", value: allClasses.length, color: "#1A7DC4" },
            { label: "Approved", value: approvedCount, color: "#1DA8A0" },
            { label: "Pending", value: pendingCount, color: "#F59E0B" }
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-200 px-5 py-4">
              <p className="text-[11px] uppercase tracking-wide text-gray-400 mb-1">{s.label}</p>
              <p className="text-3xl font-semibold" style={{ color: s.color }}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Table Records */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {["Teacher", "Grade", "Subject", "Date 1", "Date 2", "Date 3", "Date 4", "Status"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500 whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allClasses.map((cls) => (
                <tr key={cls._id} className="border-b border-gray-50 hover:bg-teal-50/60 transition-colors">
                  <td className="px-4 py-3 font-medium text-gray-800">{cls.teacher}</td>
                  <td className="px-4 py-3 text-gray-600">{cls.grade}</td>
                  <td className="px-4 py-3 text-gray-600">{cls.subject}</td>
                  <td className="px-4 py-3 text-gray-400">{cls.date1 || cls.date || "—"}</td>
                  <td className="px-4 py-3 text-gray-400">{cls.date2 || "—"}</td>
                  <td className="px-4 py-3 text-gray-400">{cls.date3 || "—"}</td>
                  <td className="px-4 py-3 text-gray-400">{cls.date4 || "—"}</td>
                  <td className="px-4 py-3">
                    <span className={statusBadge(cls.status)}>{cls.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default AdditionalClasses;