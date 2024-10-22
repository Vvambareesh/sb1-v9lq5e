import React, { useState } from 'react';

const initialHoldings = [
  { symbol: 'AAPL', quantity: 10, avgPrice: 150, currentPrice: 155, pnl: 50 },
  { symbol: 'GOOGL', quantity: 5, avgPrice: 2800, currentPrice: 2850, pnl: 250 },
  { symbol: 'MSFT', quantity: 15, avgPrice: 300, currentPrice: 310, pnl: 150 },
  { symbol: 'AMZN', quantity: 8, avgPrice: 3200, currentPrice: 3180, pnl: -160 },
];

const HoldingsTable: React.FC = () => {
  const [holdings, setHoldings] = useState(initialHoldings);
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }

    const sortedHoldings = [...holdings].sort((a, b) => {
      if (a[column] < b[column]) return sortDirection === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    setHoldings(sortedHoldings);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Holdings</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {['Symbol', 'Quantity', 'Avg Price', 'Current Price', 'P&L'].map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort(header.toLowerCase().replace(/\s+/g, ''))}
                >
                  {header}
                  {sortColumn === header.toLowerCase().replace(/\s+/g, '') && (
                    <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {holdings.map((holding, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {holding.symbol}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{holding.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${holding.avgPrice.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${holding.currentPrice.toFixed(2)}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${holding.pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ${holding.pnl.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HoldingsTable;