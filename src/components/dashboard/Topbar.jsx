import React from 'react';

const Topbar = () => {
  return (
    <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
      <h2 className="text-xl font-bold text-slate-700">
        Dashboard
      </h2>

      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="Admin"
          className="w-10 h-10 rounded-full"
        />

        <div>
          <h3 className="font-semibold text-sm">Admin</h3>
          <p className="text-xs text-gray-500">Administrator</p>
        </div>
      </div>
    </header>
  );
};

export default Topbar;