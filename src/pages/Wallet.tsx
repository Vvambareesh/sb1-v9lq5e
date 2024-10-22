import React from 'react';
import CurrentBalance from '../components/wallet/CurrentBalance';
import QuickActions from '../components/wallet/QuickActions';
import UPIPayment from '../components/wallet/UPIPayment';
import TransactionHistory from '../components/wallet/TransactionHistory';

const Wallet: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Wallet</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CurrentBalance />
        <QuickActions />
      </div>
      <UPIPayment />
      <TransactionHistory />
    </div>
  );
};

export default Wallet;