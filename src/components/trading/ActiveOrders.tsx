import React from 'react';

const ActiveOrders: React.FC = () => {
  const orders = [
    { id: 1, symbol: 'AAPL', type: 'Buy', quantity: 10, price: 150, status: 'Open' },
    { id: 2, symbol: 'GOOGL', type: 'Sell', quantity: 5, price: 2800, status: 'Open' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Active Orders</h2>
      <ul className="space-y-2">
        {orders.map((order) => (
          <li key={order.id} className="flex justify-between items-center text-sm">
            <span className="font-medium">
              {order.type} {order.symbol}
            </span>
            <span>
              {order.quantity} @ ${order.price.toFixed(2)}
            </span>
            <span className="text-yellow-600">{order.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveOrders;