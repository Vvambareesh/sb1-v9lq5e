import React from 'react';

const QuickActions: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors">
          Deposit
        </button>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default QuickActions;