import React from 'react';
import { PlusCircle, MinusCircle, RefreshCw } from 'lucide-react';

const QuickActions: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-3 gap-4">
        <button className="flex flex-col items-center justify-center p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
          <PlusCircle className="w-8 h-8 text-blue-600 mb-2" />
          <span className="text-sm font-medium">Deposit</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 bg-red-100 rounded-lg hover:bg-red-200 transition-colors">
          <MinusCircle className="w-8 h-8 text-red-600 mb-2" />
          <span className="text-sm font-medium">Withdraw</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 bg-green-100 rounded-lg hover:bg-green-200 transition-colors">
          <RefreshCw className="w-8 h-8 text-green-600 mb-2" />
          <span className="text-sm font-medium">Trade</span>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;