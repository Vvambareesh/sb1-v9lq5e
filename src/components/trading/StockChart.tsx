import React, { useState } from 'react';
import { CandlestickChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2023-03-01', open: 150, close: 155, high: 160, low: 145 },
  { date: '2023-03-02', open: 155, close: 160, high: 165, low: 150 },
  { date: '2023-03-03', open: 160, close: 158, high: 165, low: 155 },
  { date: '2023-03-04', open: 158, close: 162, high: 165, low: 156 },
  { date: '2023-03-05', open: 162, close: 159, high: 164, low: 158 },
];

const StockChart: React.FC = () => {
  const [timeframe, setTimeframe] = useState('1D');

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">AAPL Stock Chart</h2>
        <div className="space-x-2">
          {['1D', '1W', '1M', '3M', '1Y'].map((tf) => (
            <button
              key={tf}
              className={`px-2 py-1 rounded ${
                timeframe === tf ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setTimeframe(tf)}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <CandlestickChart data={data}>
          <XAxis dataKey="date" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <CandlestickChart />
        </CandlestickChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;