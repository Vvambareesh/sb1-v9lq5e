import React from 'react';

const RecentTransactions: React.FC = () => {
  const transactions = [
    { id: 1, type: 'Buy', symbol: 'AAPL', amount: 1500, date: '2023-03-15' },
    { id: 2, type: 'Sell', symbol: 'GOOGL', amount: 2800, date: '2023-03-14' },
    { id: 3, type: 'Deposit', amount: 5000, date: '2023-03-13' },
    { id: 4, type: 'Buy', symbol: 'TSLA', amount: 3200, date: '2023-03-12' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <ul className="space-y-2">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="flex justify-between items-center text-sm">
            <span className="font-medium">
              {transaction.type} {transaction.symbol}
            </span>
            <span className={transaction.type === 'Sell' || transaction.type === 'Deposit' ? 'text-green-600' : 'text-red-600'}>
              ${transaction.amount.toFixed(2)}
            </span>
            <span className="text-gray-500">{transaction.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;