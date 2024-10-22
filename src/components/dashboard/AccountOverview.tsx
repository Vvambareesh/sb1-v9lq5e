import React from 'react';

const AccountOverview: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Account Overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p className="text-sm text-gray-600">Current Balance</p>
          <p className="text-xl font-bold text-blue-900">$10,000.00</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Today's P&L</p>
          <p className="text-xl font-bold text-green-600">+$250.00</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Total Investment</p>
          <p className="text-xl font-bold text-blue-900">$8,750.00</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Portfolio Value</p>
          <p className="text-xl font-bold text-blue-900">$11,250.00</p>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;