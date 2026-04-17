// components/Benefits.js
import React from 'react';
import { Users, TrendingUp, Clock, MessageCircle, PieChart, BarChart, Shield, Globe } from 'lucide-react';

const benefits = [
  { icon: Users, title: 'More qualified leads', desc: 'AI-powered targeting that finds your ideal customers.', color: 'blue' },
  { icon: TrendingUp, title: 'Better conversion rates', desc: 'Smart funnels and personalized customer journeys.', color: 'green' },
  { icon: Clock, title: 'Reduced manual work', desc: 'Automate email, social media, and follow-ups.', color: 'orange' },
  { icon: MessageCircle, title: 'Faster customer engagement', desc: '24/7 chatbots and instant response systems.', color: 'purple' },
  { icon: PieChart, title: 'Clear analytics', desc: 'Real-time dashboards with actionable insights.', color: 'red' },
  { icon: BarChart, title: 'Scalable growth', desc: 'Systems that grow seamlessly with your business.', color: 'indigo' },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-2 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Real Benefits That Drive Results</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their marketing with our AI-powered solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-${benefit.color}-100 text-${benefit.color}-600 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-blue-600 text-sm font-semibold">Learn more →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;