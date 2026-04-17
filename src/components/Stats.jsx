// components/Stats.js
import React from 'react';
import { CheckCircle, Users, Zap, Headphones } from 'lucide-react';

const statsData = [
  { icon: CheckCircle, value: '100+', label: 'Projects Completed', color: 'blue' },
  { icon: Users, value: '50+', label: 'Happy Clients', color: 'green' },
  { icon: Zap, value: '3x', label: 'Faster Workflows', color: 'orange' },
  { icon: Headphones, value: '24/7', label: 'Automation Support', color: 'purple' },
];

const Stats = () => {
  return (
    <section className="py-16 bg-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className={`inline-flex p-3 rounded-full bg-${stat.color}-100 text-${stat.color}-600 mb-4`}>
                <stat.icon size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;