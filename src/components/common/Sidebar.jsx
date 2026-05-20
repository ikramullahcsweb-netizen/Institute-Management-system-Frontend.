import React from 'react';
import { LayoutDashboard, Users, BookOpen, Settings, LogOut } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'Overview', icon: <LayoutDashboard size={20} />, label: 'Overview' },
    { id: 'Students', icon: <Users size={20} />, label: 'Students' },
    { id: 'Courses', icon: <BookOpen size={20} />, label: 'Courses' },
    { id: 'Settings', icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-[#1e293b] border-r border-slate-800 flex flex-col h-screen">
      <div className="p-6">
        <h2 className="text-xl font-black tracking-tighter text-white">
          STEP2<span className="text-[#52b69a]">ADMIN</span>
        </h2>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === item.id ? 'bg-[#52b69a] text-white shadow-lg' : 'text-slate-400 hover:bg-slate-800'
            }`}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 w-full rounded-xl transition-colors">
          <LogOut size={20} /> <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;