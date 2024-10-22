import React from 'react';

const PositionSummary: React.FC = () => {
  const positions = [
    { symbol: 'AAPL', quantity: 10, avgPrice: 150, currentPrice: 155, pnl: 50 },
    { symbol: 'GOOGL', quantity: 5, avgPrice: 2800, currentPrice: 2850, pnl: 250 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Position Summary</h2>
      <ul className="space-y-2">
        {positions.map((position, index) => (
          <li key={index} className="flex justify-between items-center text-sm">
            <span className="font-medium">{position.symbol}</span>
            <span>{position.quantity}</span>
            <span>${position.avgPrice.toFixed(2)}</span>
            <span>${position.currentPrice.toFixed(2)}</span>
            <span className={position.pnl >= 0 ? 'text-green-600' : 'text-red-600'}>
              ${position.pnl.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PositionSummary;