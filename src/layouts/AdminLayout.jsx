import React, { useState } from 'react';
import Sidebar from '../components/common/Sidebar';

const AdminLayout = ({ children }) => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="flex bg-[#0f172a] text-slate-200 min-h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header can go here */}
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;