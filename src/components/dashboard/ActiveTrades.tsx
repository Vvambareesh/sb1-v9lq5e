import React from 'react';

const ActiveTrades: React.FC = () => {
  const trades = [
    { symbol: 'AAPL', quantity: 10, entryPrice: 150.00, currentPrice: 155.00 },
    { symbol: 'GOOGL', quantity: 5, entryPrice: 2800.00, currentPrice: 2850.00 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Active Trades</h2>
      <ul className="space-y-2">
        {trades.map((trade, index) => (
          <li key={index} className="flex justify-between items-center">
            <span className="font-medium">{trade.symbol}</span>
            <span className="text-sm">
              {trade.quantity} @ ${trade.entryPrice.toFixed(2)}
            </span>
            <span className={`font-bold ${trade.currentPrice > trade.entryPrice ? 'text-green-600' : 'text-red-600'}`}>
              ${trade.currentPrice.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveTrades;