// components/Services.js
import React from 'react';
import { Megaphone, Bot, LineChart, PenTool, Sparkles, TrendingUp, Users as UsersIcon, Target } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'SEO, PPC, social media campaigns that drive traffic and generate qualified leads.',
    color: 'blue',
    features: ['SEO Optimization', 'Social Media', 'Email Marketing'],
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Smart chatbots, email sequences, and workflow automation to save time and money.',
    color: 'purple',
    features: ['Chatbots', 'Workflow', 'Analytics'],
  },
  {
    icon: LineChart,
    title: 'Website Growth Strategy',
    description: 'Data-driven CRO and UX strategies to boost your website performance.',
    color: 'green',
    features: ['CRO', 'UX Design', 'Analytics'],
  },
  {
    icon: PenTool,
    title: 'Branding & Content',
    description: 'Consistent brand identity and high-converting content across all channels.',
    color: 'orange',
    features: ['Brand Strategy', 'Content Creation', 'Design'],
  },
];

const colorStyles = {
  blue: 'from-blue-500 to-blue-600',
  purple: 'from-purple-500 to-purple-600',
  green: 'from-green-500 to-green-600',
  orange: 'from-orange-500 to-orange-600',
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Comprehensive Marketing Solutions</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end digital marketing and AI automation services to help your business thrive
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${colorStyles[service.color]} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;