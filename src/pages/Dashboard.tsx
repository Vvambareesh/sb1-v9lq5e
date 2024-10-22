import React from 'react';
import AccountOverview from '../components/dashboard/AccountOverview';
import ActiveTrades from '../components/dashboard/ActiveTrades';
import AIPredictions from '../components/dashboard/AIPredictions';
import QuickActions from '../components/dashboard/QuickActions';
import StockPerformanceChart from '../components/dashboard/StockPerformanceChart';
import RecentTransactions from '../components/dashboard/RecentTransactions';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <AccountOverview />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ActiveTrades />
        <AIPredictions />
        <QuickActions />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <StockPerformanceChart />
        </div>
        <RecentTransactions />
      </div>
    </div>
  );
};

export default Dashboard;