import React from 'react';

const PortfolioSummary: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Portfolio Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Total Value:</span>
          <span className="font-bold">$100,000.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Today's Change:</span>
          <span className="font-bold text-green-600">+$1,500.00 (+1.5%)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Total Gain/Loss:</span>
          <span className="font-bold text-green-600">+$10,000.00 (+10%)</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;