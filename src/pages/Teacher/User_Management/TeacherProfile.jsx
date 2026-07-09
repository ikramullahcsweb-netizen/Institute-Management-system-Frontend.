import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API, { redirectToLogin } from "../../../api";
import Swal from "sweetalert2";
import Head from "../Header/Header";

function TeacherProfile() {
  // Single object state — AdminProfile ki tarah
  const [profile, setProfile] = useState({
    name:          "",
    teid:          "",
    username:      "",
    email:         "",
    contactnumber: "",
    gender:        "",
    subject:       "",
    SecAnswer:     "",
  });
  const [loading,  setLoading]  = useState(true);
  const [saving,   setSaving]   = useState(false);
  const [editMode, setEditMode] = useState(false);

  // ── Fetch profile — exactly like AdminProfile ──
  useEffect(() => {
    API.get("/api/v1/teacherprofile")
      .then((res) => {
        const d = res.data?.data || res.data;
        setProfile({
          name:          d.name          || "",
          teid:          d.teid          || "",
          username:      d.username      || "",
          email:         d.email         || "",
          contactnumber: d.contactnumber || "",
          gender:        d.gender        || "",
          subject:       d.subject       || "",
          SecAnswer:     d.SecAnswer     || "",
        });
      })
      .catch((err) => {
        console.error("Teacher profile fetch error:", err);
        if (err.response?.status === 401) {
          Swal.fire({
            icon: "warning",
            title: "Session Expired",
            text: "Aapka session expire ho gaya ya role mismatch hai. Dobara login karein.",
            confirmButtonColor: "#483EA8",
            confirmButtonText: "Login Page",
          }).then(() => redirectToLogin());
        } else {
          Swal.fire({ icon: "error", title: "Error", text: err.response?.data?.message || "Profile load nahi ho saki" });
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // ── Update profile ──
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!profile.name.trim() || !profile.email.trim()) {
      Swal.fire({ icon: "warning", title: "Required Fields", text: "Name aur email zaroori hain" });
      return;
    }
    setSaving(true);
    try {
      const res = await API.put("/api/v1/teacherprofileedit", {
        name:          profile.name,
        username:      profile.username,
        email:         profile.email,
        contactnumber: profile.contactnumber,
        gender:        profile.gender,
        subject:       profile.subject,
        SecAnswer:     profile.SecAnswer,
      });
      Swal.fire({ icon: "success", title: "Updated!", text: res.data.message || "Profile update ho gayi" });
      setEditMode(false);
    } catch (err) {
      Swal.fire({ icon: "error", title: "Update Failed", text: err.response?.data?.message || "Kuch masla hogaya" });
    } finally {
      setSaving(false);
    }
  };

  // ── Loading state ──
  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 font-sans">
        <Head />
        {/* Teacher Nav sidebar width = 230px */}
      <div className="md:ml-[230px] pt-8 px-8">
          <p className="text-gray-400 font-semibold">Loading profile...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <Head />

      {/* Teacher Nav sidebar width = 230px desktop, isliye ml-[230px] */}
      <div className="px-3 sm:px-4 md:px-6 lg:px-8 pt-6 pb-12 flex justify-center md:ml-[230px]">
        <div className="w-full max-w-[1000px] bg-white rounded-[24px] border-2 border-gray-100 shadow-xl p-4 sm:p-6 lg:p-8 transition-all">

          {/* ── Top: Avatar + Name ── */}
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between pb-6 border-b-2 border-gray-100 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-[65px] h-[65px] rounded-full bg-gradient-to-tr from-[#483EA8] to-[#10a1b6] flex items-center justify-center text-white text-2xl font-black shadow-md flex-shrink-0">
                {profile.name ? profile.name.charAt(0).toUpperCase() : "T"}
              </div>
              <div>
                <h1 className="text-2xl font-black text-[#483EA8] m-0 tracking-tight">
                  {profile.name || "—"}
                </h1>
                <span className="inline-block mt-1 px-2.5 py-0.5 bg-purple-100 border border-purple-200 text-purple-700 font-extrabold text-[10px] tracking-widest uppercase rounded-md">
                  Faculty Member · {profile.subject || "—"}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <span className="bg-gray-100 text-gray-600 px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide">
                ID: {profile.teid || "—"}
              </span>
            </div>
          </div>

          {/* ── Profile Form — exactly like AdminProfile ── */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">

            {/* Row 1: Name + Username */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[13px] font-extrabold text-gray-400 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  disabled={!editMode}
                  className="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-xl font-bold text-gray-800 text-[15px] focus:outline-none focus:border-[#483EA8] disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-[13px] font-extrabold text-gray-400 uppercase tracking-wider mb-2">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={profile.username}
                  onChange={handleChange}
                  disabled={!editMode}
                  className="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-xl font-bold text-gray-800 text-[15px] focus:outline-none focus:border-[#483EA8] disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-100" />

            {/* Row 2: Gender + Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[13px] font-extrabold text-gray-400 uppercase tracking-wider mb-2">
                  Gender
                </label>
                {editMode ? (
                  <select
                    name="gender"
                    value={profile.gender}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-xl font-bold text-gray-800 text-[15px] focus:outline-none focus:border-[#483EA8]"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    value={profile.gender}
                    disabled
                    className="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-xl font-bold text-gray-800 text-[15px] focus:outline-none disabled:cursor-not-allowed"
                  />
                )}
              </div>
              <div>
                <label className="block text-[13px] font-extrabold text-gray-400 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={profile.subject}
                  onChange={handleChange}
                  disabled={!editMode}
                  className="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-xl font-semibold text-[#483EA8] text-[15px] focus:outline-none focus:border-[#483EA8] disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-100" />

            {/* Row 3: Email + Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[13px] font-extrabold text-gray-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  disabled={!editMode}
                  className="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-xl font-semibold text-gray-700 text-[15px] focus:outline-none focus:border-[#483EA8] disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-[13px] font-extrabold text-gray-400 uppercase tracking-wider mb-2">
                  Contact Number
                </label>
                <input
                  type="text"
                  name="contactnumber"
                  value={profile.contactnumber}
                  onChange={handleChange}
                  disabled={!editMode}
                  className="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-xl font-semibold text-gray-700 text-[15px] focus:outline-none focus:border-[#483EA8] disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-100" />

            {/* Security Answer */}
            <div>
              <label className="block text-[13px] font-extrabold text-gray-400 uppercase tracking-wider mb-2">
                Security Answer —{" "}
                <span className="text-gray-500 font-semibold italic">
                  What city were you born in?
                </span>
              </label>
              <input
                type="text"
                name="SecAnswer"
                value={profile.SecAnswer}
                onChange={handleChange}
                disabled={!editMode}
                className="w-full p-4 border-2 border-gray-100 bg-blue-50/40 rounded-xl font-bold text-[#483EA8] text-[15px] focus:outline-none focus:border-[#483EA8] border-l-4 border-l-[#483EA8] disabled:cursor-not-allowed"
              />
            </div>

            {/* ── Action Buttons — same as AdminProfile ── */}
            <div className="flex gap-3 pt-2">
              {!editMode ? (
                <button
                  type="button"
                  onClick={() => setEditMode(true)}
                  className="px-6 py-3 bg-[#483EA8] text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#392f8a] transition"
                >
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-6 py-3 bg-[#483EA8] text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#392f8a] transition disabled:opacity-60"
                  >
                    {saving ? "Saving..." : "Save Changes"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditMode(false)}
                    className="px-6 py-3 bg-gray-100 text-gray-600 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-gray-200 transition"
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>

          </form>
        </div>
      </div>
    </main>
  );
}

export default TeacherProfile;
