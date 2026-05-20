import React from 'react';

const DashboardCard = ({ title, value, icon, bg }) => {
  return (
    <div className={`p-5 rounded-2xl text-white shadow-lg ${bg}`}>
      
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm font-medium opacity-90">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        <div className="text-4xl opacity-80">
          {icon}
        </div>

      </div>

    </div>
  );
};

export default DashboardCard;