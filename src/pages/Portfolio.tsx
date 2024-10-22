import React from 'react';
import PortfolioSummary from '../components/portfolio/PortfolioSummary';
import AssetAllocation from '../components/portfolio/AssetAllocation';
import PerformanceTimeline from '../components/portfolio/PerformanceTimeline';
import HoldingsTable from '../components/portfolio/HoldingsTable';

const Portfolio: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PortfolioSummary />
        <AssetAllocation />
        <PerformanceTimeline />
      </div>
      <HoldingsTable />
    </div>
  );
};

export default Portfolio;