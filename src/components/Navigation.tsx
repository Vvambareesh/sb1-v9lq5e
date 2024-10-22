import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, User } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold">AI Trader</Link>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-yellow-400">Dashboard</Link>
            <Link to="/trading" className="hover:text-yellow-400">Trading</Link>
            <Link to="/portfolio" className="hover:text-yellow-400">Portfolio</Link>
            <Link to="/wallet" className="hover:text-yellow-400">Wallet</Link>
            <Link to="/settings" className="hover:text-yellow-400">Settings</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline">$10,000.00</span>
          <Bell className="w-6 h-6 cursor-pointer" />
          <User className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;