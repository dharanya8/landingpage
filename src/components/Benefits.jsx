// components/Benefits.js
import React from 'react';
import { Users, TrendingUp, Clock, MessageCircle, PieChart, BarChart } from 'lucide-react';

const benefits = [
  { icon: Users, title: 'More qualified leads', desc: 'AI-powered targeting that finds your ideal customers.' },
  { icon: TrendingUp, title: 'Better conversion rates', desc: 'Smart funnels and personalized journeys.' },
  { icon: Clock, title: 'Reduced manual work', desc: 'Automate email, social, and follow-ups.' },
  { icon: MessageCircle, title: 'Faster customer engagement', desc: '24/7 chatbots and instant responses.' },
  { icon: PieChart, title: 'Clear analytics', desc: 'Real-time dashboards with actionable insights.' },
  { icon: BarChart, title: 'Scalable growth', desc: 'Systems that grow with your business.' },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-xl font-bold text-white-200">Why Choose Us</h2>
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Real Business Benefits
          </h2>
          <p className="text-slate-900 max-w-xl mx-auto">
            We focus on outcomes that matter — not vanity metrics. Here's what you can expect working with AI-Marketo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className=" bg-slate-50 p-6 rounded-xl shadow-sm hover:shadow-2xl transition-shadow border border-gray-100">
              <div className="inline-flex p-3 rounded-lg bg-blue-50 text-blue-600 mb-4">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;