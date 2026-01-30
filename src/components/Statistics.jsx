import React from 'react';
import { Users, DollarSign, TrendingUp, Zap } from 'lucide-react';

const stats = [
  { id: 1, name: 'Active Users', value: '10,000+', icon: Users },
  { id: 2, name: 'Revenue Generated', value: '$2.5M+', icon: DollarSign },
  { id: 3, name: 'Uptime', value: '99.9%', icon: Zap },
  { id: 4, name: 'Growth Rate', value: '250%', icon: TrendingUp },
];

const Statistics = () => {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 text-center transform transition-transform duration-500 hover:scale-105 hover:border-purple-500"
            >
              <div className="flex justify-center items-center mb-4">
                <stat.icon className="h-12 w-12 text-purple-400" />
              </div>
              <h3 className="text-4xl font-bold text-white">{stat.value}</h3>
              <p className="text-gray-400 mt-2">{stat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;