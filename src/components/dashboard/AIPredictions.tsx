import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const AIPredictions: React.FC = () => {
  const predictions = [
    { symbol: 'TSLA', direction: 'up', confidence: 85 },
    { symbol: 'AMZN', direction: 'down', confidence: 70 },
    { symbol: 'MSFT', direction: 'up', confidence: 90 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">AI Predictions</h2>
      <ul className="space-y-2">
        {predictions.map((prediction, index) => (
          <li key={index} className="flex justify-between items-center">
            <span className="font-medium">{prediction.symbol}</span>
            <div className="flex items-center">
              {prediction.direction === 'up' ? (
                <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
              )}
              <span className="text-sm">{prediction.confidence}% confidence</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AIPredictions;