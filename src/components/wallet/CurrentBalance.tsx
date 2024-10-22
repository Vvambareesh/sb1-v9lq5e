import React from 'react';

const CurrentBalance: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Current Balance</h2>
      <div className="text-4xl font-bold text-blue-600">$10,000.00</div>
      <p className="text-sm text-gray-500 mt-2">Last updated: 2023-03-15 14:30:00</p>
    </div>
  );
};

export default CurrentBalance;