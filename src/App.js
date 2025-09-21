import React, { useState } from 'react';
import { DollarSign, TrendingUp, TrendingDown, Wallet, PlusCircle, Eye, EyeOff, CreditCard, PieChart, Target } from 'lucide-react';

const FinanceTrackerHome = () => {
  const [showBalance, setShowBalance] = useState(true);

  const stats = [
    { title: 'Total Balance', amount: '$12,540.00', icon: Wallet, change: '+2.5%', positive: true },
    { title: 'Monthly Income', amount: '$4,200.00', icon: TrendingUp, change: '+5.2%', positive: true },
    { title: 'Monthly Expenses', amount: '$2,850.00', icon: TrendingDown, change: '-1.8%', positive: false },
    { title: 'Savings Goal', amount: '$8,500.00', icon: Target, change: '85% complete', positive: true }
  ];

  const recentTransactions = [
    { id: 1, description: 'Grocery Store', amount: -85.50, category: 'Food', date: '2024-09-22' },
    { id: 2, description: 'Salary Deposit', amount: 4200.00, category: 'Income', date: '2024-09-20' },
    { id: 3, description: 'Electric Bill', amount: -120.00, category: 'Utilities', date: '2024-09-19' },
    { id: 4, description: 'Coffee Shop', amount: -12.50, category: 'Food', date: '2024-09-18' },
    { id: 5, description: 'Gas Station', amount: -45.00, category: 'Transportation', date: '2024-09-17' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Welth</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-blue-600 font-medium">Dashboard</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Transactions</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Budget</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Reports</a>
          </nav>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <PlusCircle className="h-4 w-4" />
            <span>Add Transaction</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h2>
          <p className="text-gray-600">Here's an overview of your financial activity</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
                {stat.title === 'Total Balance' && (
                  <button 
                    onClick={() => setShowBalance(!showBalance)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    {showBalance ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  </button>
                )}
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-900 mb-2">
                {stat.title === 'Total Balance' && !showBalance ? '••••••' : stat.amount}
              </p>
              <span className={`text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </span>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Transactions */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Recent Transactions</h3>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">View All</a>
              </div>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.amount > 0 ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {transaction.amount > 0 ? 
                          <TrendingUp className="h-5 w-5 text-green-600" /> : 
                          <TrendingDown className="h-5 w-5 text-red-600" />
                        }
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{transaction.description}</p>
                        <p className="text-sm text-gray-500">{transaction.category} • {transaction.date}</p>
                      </div>
                    </div>
                    <span className={`font-semibold ${
                      transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions & Insights */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 text-left rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <PlusCircle className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Add Income</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <CreditCard className="h-5 w-5 text-red-600" />
                  <span className="font-medium">Add Expense</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <PieChart className="h-5 w-5 text-green-600" />
                  <span className="font-medium">View Budget</span>
                </button>
              </div>
            </div>

            {/* Monthly Summary */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">September Summary</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Budget Used</span>
                    <span className="font-medium">68%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Top Category</p>
                  <div className="flex justify-between">
                    <span className="font-medium">Food & Dining</span>
                    <span className="text-red-600">$580.50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FinanceTrackerHome;
