import React from "react";
import { Link } from "react-router-dom";

const staticAdditionalClasses = [
  {
    _id: "1",
    teacher: "Dr. Ahmed Raza",
    grade: "Grade 9",
    subject: "Biology",
    date: "2025-05-20",
    date2: "2025-05-22",
    date3: "2025-05-24",
    date4: "2025-05-26",
    status: "Approved",
  },
  {
    _id: "2",
    teacher: "Dr. Ahmed Raza",
    grade: "Grade 10",
    subject: "Chemistry",
    date: "2025-05-21",
    date2: "2025-05-23",
    date3: "2025-05-25",
    date4: "2025-05-27",
    status: "Pending",
  },
];

const staticRequestedClasses = [
  {
    _id: "3",
    teacher: "Dr. Ahmed Raza",
    grade: "Grade 8",
    subject: "Physics",
    date1: "2025-05-19",
    date2: "2025-05-21",
    date3: "2025-05-23",
    date4: "",
    status: "Approved",
  },
];

const statusBadge = (status) => {
  const base = "px-3 py-0.5 rounded-full text-xs font-medium border";
  if (status === "Approved")
    return `${base} bg-emerald-50 text-emerald-700 border-emerald-200`;
  if (status === "Pending")
    return `${base} bg-amber-50 text-amber-700 border-amber-200`;
  if (status === "Rejected")
    return `${base} bg-red-50 text-red-700 border-red-200`;
  return `${base} bg-gray-100 text-gray-500 border-gray-200`;
};

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
            style={{
              border: "2.5px solid transparent",
              background:
                "linear-gradient(white, white) padding-box, linear-gradient(135deg, #5DC85A, #1DA8A0, #1A7DC4) border-box",
            }}
          >
            <span
              className="text-[10px] font-extrabold tracking-tight"
              style={{
                background: "linear-gradient(135deg, #5DC85A, #1A7DC4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              S2S
            </span>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 leading-none">
              Step2Scientist
            </p>
            <p className="text-[11px] text-gray-400 leading-none mt-0.5">
              Teacher Portal
            </p>
          </div>
        </div>

        <nav className="flex items-center gap-1">
          {["Dashboard", "My Classes", "Additional Classes", "Schedule"].map(
            (item) => (
              <button
                key={item}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                  item === "Additional Classes"
                    ? "text-white font-medium"
                    : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                }`}
                style={
                  item === "Additional Classes"
                    ? {
                        background: "linear-gradient(135deg, #1DA8A0, #1A7DC4)",
                      }
                    : {}
                }
              >
                {item}
              </button>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}

function AdditionalClasses() {
  const allClasses = [
    ...staticAdditionalClasses.map((c) => ({ ...c, date1: c.date })),
    ...staticRequestedClasses,
  ];

  const approvedCount = allClasses.filter(
    (c) => c.status === "Approved",
  ).length;
  const pendingCount = allClasses.filter((c) => c.status === "Pending").length;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              View Additional Classes
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Aapki extra aur requested classes ka jaiza
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/viewclasses"
              className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors no-underline"
            >
              My Classes
            </Link>
            <Link
              to="/AddAdditionalClasses"
              className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90 no-underline"
              style={{
                background: "linear-gradient(135deg, #5DC85A, #1DA8A0)",
              }}
            >
              + Add Additional Class
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            {
              label: "Kul Classes",
              value: allClasses.length,
              color: "#1A7DC4",
            },
            { label: "Approved", value: approvedCount, color: "#1DA8A0" },
            { label: "Pending", value: pendingCount, color: "#F59E0B" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-xl border border-gray-200 px-5 py-4"
            >
              <p className="text-[11px] uppercase tracking-wide text-gray-400 mb-1">
                {s.label}
              </p>
              <p className="text-3xl font-semibold" style={{ color: s.color }}>
                {s.value}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">
              Class Records
            </span>
            <span className="text-xs text-gray-400">
              {allClasses.length} entries
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  {[
                    "Teacher",
                    "Grade",
                    "Subject",
                    "Date 1",
                    "Date 2",
                    "Date 3",
                    "Date 4",
                    "Status",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500 whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allClasses.map((cls, i) => (
                  <tr
                    key={cls._id}
                    className={`border-b border-gray-50 transition-colors hover:bg-teal-50/60 ${
                      i % 2 !== 0 ? "bg-gray-50/40" : "bg-white"
                    }`}
                  >
                    <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">
                      {cls.teacher}
                    </td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                      {cls.grade}
                    </td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                      {cls.subject}
                    </td>
                    <td className="px-4 py-3 text-gray-400 whitespace-nowrap">
                      {cls.date1 || cls.date || "—"}
                    </td>
                    <td className="px-4 py-3 text-gray-400 whitespace-nowrap">
                      {cls.date2 || "—"}
                    </td>
                    <td className="px-4 py-3 text-gray-400 whitespace-nowrap">
                      {cls.date3 || "—"}
                    </td>
                    <td className="px-4 py-3 text-gray-400 whitespace-nowrap">
                      {cls.date4 || "—"}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={statusBadge(cls.status)}>
                        {cls.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-5 py-3 border-t border-gray-100 flex justify-end">
            <span className="text-[11px] text-gray-300">
              Step2Scientist · Teacher Portal
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdditionalClasses;
