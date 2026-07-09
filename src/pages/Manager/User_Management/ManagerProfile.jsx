import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API, { redirectToLogin } from "../../../api";
import userpng from "./photos/User.png";
import Head from "../Header/Header";

function ManagerProfile() {
  const [profile, setProfile] = useState({
    name: "",
    username: "",
    email: "",
    contactnumber: "",
    secanswer: "",
    first_name: "",
    last_name: "",
    mobile_no: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/api/auth/profile")
      .then((res) => {
        const d = res.data?.data || res.data;
        setProfile({
          name: d.name || `${d.first_name || ""} ${d.last_name || ""}`.trim(),
          username: d.username || "",
          email: d.email || d.email_address || "",
          contactnumber: d.contactnumber || d.mobile_no || "",
          secanswer: d.SecAnswer || "",
          first_name: d.first_name || "",
          last_name: d.last_name || "",
          mobile_no: d.mobile_no || "",
        });
      })
      .catch((err) => {
        console.error("Manager profile fetch error:", err);
        if (err.response?.status === 401) {
          Swal.fire({
            icon: "warning",
            title: "Session Expired",
            text: "Aapka session expire ho gaya ya role mismatch hai. Dobara login karein.",
            confirmButtonColor: "#10a1b6",
            confirmButtonText: "Login Page",
          }).then(() => redirectToLogin());
        } else {
          Swal.fire({ icon: "error", title: "Error", text: err.response?.data?.message || "Profile load nahi ho saki" });
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans">
        <Head />
        <div className="w-full max-w-[900px] mx-auto px-4 mt-7 md:pl-20 lg:pl-28">
          <p className="text-slate-500 font-bold text-sm">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans">
      <Head />

      <div className="w-full max-w-[900px] mx-auto px-4 mt-7 md:pl-20 lg:pl-28">
        
        {/* Header */}
        <div className="border-b-2 border-slate-200 pb-4 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">User Profile</h1>
            <p className="text-xs text-gray-500 font-medium">View active manager credentials and organizational access clearance logs</p>
          </div>
          <Link to="/searchusersmanager" className="inline-block">
            <button type="button" className="bg-[#10a1b6] hover:bg-[#13293d] text-white text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all">
              Search Users Database
            </button>
          </Link>
        </div>

        {/* Hero Card */}
        <div className="bg-white border-2 border-slate-200 rounded-[24px] p-6 mb-6 flex flex-col sm:flex-row items-center gap-5 shadow-xs">
          <div className="w-20 h-20 bg-slate-100 rounded-full p-1.5 border-2 border-slate-200 overflow-hidden flex-shrink-0">
            <img src={userpng} alt="Manager Avatar" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-black text-[#13293d] leading-tight">{profile.name || "—"}</h2>
            <p className="text-xs text-[#10a1b6] font-bold uppercase tracking-widest mt-0.5">Authorized Systems Manager</p>
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md mt-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              Active Session
            </div>
          </div>
        </div>

        {/* Data Fields */}
        <div className="bg-white border-2 border-slate-200 rounded-[24px] shadow-xs p-6 md:p-8 space-y-6">
          
          {/* Base Info */}
          <div>
            <span className="text-[#10a1b6] text-[11px] font-black uppercase tracking-widest block mb-4">1. Base Identifier Parameters</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">Full Name</label>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-800">
                  {profile.name || "—"}
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">Username</label>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono font-black text-slate-700">
                  {profile.username || "—"}
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="border-t border-slate-100 pt-6">
            <span className="text-[#10a1b6] text-[11px] font-black uppercase tracking-widest block mb-4">2. Contact Information</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">Email Address</label>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-gray-800 font-medium">
                  {profile.email || "—"}
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">Mobile Number</label>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono text-gray-800">
                  {profile.contactnumber || "—"}
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="border-t border-slate-100 pt-6">
            <span className="text-[#10a1b6] text-[11px] font-black uppercase tracking-widest block mb-4">3. Security Information</span>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">
                Security Answer — <span className="text-slate-600 font-extrabold">What city were you born in?</span>
              </label>
              <div className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-[#13293d] tracking-wide">
                {profile.secanswer || "—"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagerProfile;
