import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Wallet,
  CalendarClock,
  MessageSquare,
  ClipboardCheck,
  GraduationCap,
  LogOut,
  ChevronRight,
} from "lucide-react";

const modules = [
  {
    title: "Search Users",
    description: "Find students and teachers across the institute",
    icon: Users,
    path: "/searchusersmanager",
  },
  {
    title: "Financials",
    description: "Payments, dues and wallet overview",
    icon: Wallet,
    path: "/mgmain",
  },
  {
    title: "Timetable",
    description: "Class schedules and time slots",
    icon: CalendarClock,
    path: "/managertimetable",
  },
  {
    title: "Feedback & Q&A",
    description: "Respond to student and teacher feedback",
    icon: MessageSquare,
    path: "/managerfeedback",
  },
  {
    title: "Class Approvals",
    description: "Review additional class requests",
    icon: ClipboardCheck,
    path: "/requestedadditionalclasses",
  },
  {
    title: "Enrollments",
    description: "Manage student enrollments",
    icon: GraduationCap,
    path: "/managerenroll",
  },
];

function ManagerDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/managerlogin");
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-[#10a1b6] uppercase tracking-widest mb-1">
              Manager Session Portal
            </p>
            <h1 className="text-xl font-bold text-slate-800">Dashboard</h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-800 uppercase tracking-widest transition-all"
          >
            <LogOut size={14} />
            Logout
          </button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Welcome back</h2>
          <p className="text-sm text-slate-500 mt-1">
            Pick a module to get started
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <button
                key={mod.path}
                onClick={() => navigate(mod.path)}
                className="group text-left bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#10a1b6] hover:shadow-lg hover:shadow-slate-200/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-[#10a1b6]/10 transition-all">
                    <Icon size={20} className="text-slate-700 group-hover:text-[#10a1b6]" />
                  </div>
                  <ChevronRight
                    size={16}
                    className="text-slate-300 group-hover:text-[#10a1b6] transition-all"
                  />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-1">
                  {mod.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {mod.description}
                </p>
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default ManagerDashboard;