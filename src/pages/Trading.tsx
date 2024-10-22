import React from 'react';
import StockChart from '../components/trading/StockChart';
import OrderForm from '../components/trading/OrderForm';
import ActiveOrders from '../components/trading/ActiveOrders';
import PositionSummary from '../components/trading/PositionSummary';

const Trading: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Trading</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <StockChart />
        </div>
        <div className="space-y-6">
          <OrderForm />
          <ActiveOrders />
          <PositionSummary />
        </div>
      </div>
    </div>
  );
};

export default Trading;