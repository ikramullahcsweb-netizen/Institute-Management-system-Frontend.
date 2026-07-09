import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API, { redirectToLogin } from "../../../api";
import Swal from "sweetalert2";
import Head from "../Header/Header";
import userpng from "./photos/User.png";

const AdminProfile = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    mobile_no: "",
    SecAnswer: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    API.get("/api/auth/profile")
      .then((res) => {
        // Backend ApiResponse: { statusCode, data, message }
        const d = res.data?.data || res.data;
        setFormData({
          first_name: d.first_name || "",
          last_name: d.last_name || "",
          email_address: d.email_address || "",
          mobile_no: d.mobile_no || "",
          SecAnswer: d.SecAnswer || "",
        });
      })
      .catch((err) => {
        console.error("Admin profile fetch error:", err);
        if (err.response?.status === 401) {
          Swal.fire({
            icon: "warning",
            title: "Session Expired",
            text: "Aapka session expire ho gaya ya role mismatch hai. Dobara login karein.",
            confirmButtonColor: "#063a67",
            confirmButtonText: "Login Page",
          }).then(() => redirectToLogin());
        } else {
          Swal.fire({ icon: "error", title: "Error", text: err.response?.data?.message || "Profile load nahi ho saki" });
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.first_name.trim() || !formData.email_address.trim()) {
      Swal.fire({ icon: "warning", title: "Required Fields", text: "First name aur email zaroori hain" });
      return;
    }
    setSaving(true);
    try {
      const res = await API.put("/api/auth/profileedit", formData);
      Swal.fire({ icon: "success", title: "Updated!", text: res.data.message || "Profile update ho gayi" });
      setEditMode(false);
    } catch (err) {
      Swal.fire({ icon: "error", title: "Update Failed", text: err.response?.data?.message || "Kuch masla hogaya" });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 font-sans">
        <Head />
        <div className="md:ml-[240px] pt-8 px-8">
          <p className="text-gray-400 font-semibold">Loading profile...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <Head />

      <div className="px-3 sm:px-4 md:px-6 lg:px-8 pt-6 pb-12 flex justify-center md:ml-[240px]">
        <div className="w-full max-w-[1000px] bg-white rounded-[24px] border-2 border-gray-100 shadow-xl p-4 sm:p-6 lg:p-8 transition-all">

          {/* Top: Avatar + Name + Action Buttons */}
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between pb-6 border-b-2 border-gray-100 gap-6">
            <div className="flex items-center gap-4">
              <div className="p-1.5 bg-gradient-to-tr from-[#063a67] to-blue-400 rounded-full shadow-md">
                <img src={userpng} alt="Admin" className="w-[65px] h-[65px] bg-white rounded-full p-1 object-contain" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-[#063a67] m-0 tracking-tight">
                  {formData.first_name} {formData.last_name}
                </h1>
                <span className="inline-block mt-1 px-2.5 py-0.5 bg-red-100 border border-red-200 text-red-700 font-extrabold text-[10px] tracking-widest uppercase rounded-md">
                  System Administrator
                </span>
              </div>
            </div>

            {/* Quick Action Links */}
            <div className="flex flex-wrap gap-2.5">
              <Link to="/searchusersadmin" className="no-underline bg-gray-100 text-gray-700 hover:bg-[#063a67] hover:text-white px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all shadow-sm">
                🔍 Search Users
              </Link>
              <Link to="/addteacher" className="no-underline bg-gray-100 text-gray-700 hover:bg-[#063a67] hover:text-white px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all shadow-sm">
                ➕ Add Teacher
              </Link>
              <Link to="/addmanager" className="no-underline bg-gray-100 text-gray-700 hover:bg-[#063a67] hover:text-white px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all shadow-sm">
                💼 Add Manager
              </Link>
              <Link to="/addadmin" className="no-underline bg-gray-100 text-gray-700 hover:bg-[#063a67] hover:text-white px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all shadow-sm">
                🛡️ Add Admin
              </Link>
            </div>
          </div>

          {/* Profile Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[13px] font-extrabold text-gray-400 uppercase tracking-wider mb-2">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  disabled={!editMode}
                  className="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-xl font-bold text-gray-800 text-[15px] focus:outline-none focus:border-[#063a67] disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-[13px] font-extrabold text-gray-400 uppercase tracking-wider mb-2">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  disabled={!editMode}
                  className="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-xl font-bold text-gray-800 text-[15px] focus:outline-none focus:border-[#063a67] disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-100" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[13px] font-extrabold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  name="email_address"
                  value={formData.email_address}
                  onChange={handleChange}
                  disabled={!editMode}
                  className="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-xl font-semibold text-gray-700 text-[15px] focus:outline-none focus:border-[#063a67] disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-[13px] font-extrabold text-gray-400 uppercase tracking-wider mb-2">Mobile Number</label>
                <input
                  type="text"
                  name="mobile_no"
                  value={formData.mobile_no}
                  onChange={handleChange}
                  disabled={!editMode}
                  className="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-xl font-semibold text-gray-700 text-[15px] focus:outline-none focus:border-[#063a67] disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-100" />

            <div>
              <label className="block text-[13px] font-extrabold text-gray-400 uppercase tracking-wider mb-2">
                Security Answer — <span className="text-gray-500 font-semibold italic">What city were you born in?</span>
              </label>
              <input
                type="text"
                name="SecAnswer"
                value={formData.SecAnswer}
                onChange={handleChange}
                disabled={!editMode}
                className="w-full p-4 border-2 border-gray-100 bg-blue-50/40 rounded-xl font-bold text-[#063a67] text-[15px] focus:outline-none focus:border-[#063a67] border-l-4 border-l-[#063a67] disabled:cursor-not-allowed"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              {!editMode ? (
                <button
                  type="button"
                  onClick={() => setEditMode(true)}
                  className="px-6 py-3 bg-[#063a67] text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#0a4f8f] transition"
                >
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-6 py-3 bg-[#063a67] text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#0a4f8f] transition disabled:opacity-60"
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
};

export default AdminProfile;
