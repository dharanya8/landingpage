// components/Services.js
import React from 'react';
import { Megaphone, Bot, LineChart, PenTool } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'SEO, PPC, social media campaigns that drive traffic and generate qualified leads.',
    color: 'blue',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Smart chatbots, email sequences, and workflow automation to save time.',
    color: 'purple',
  },
  {
    icon: LineChart,
    title: 'Website Growth Strategy',
    description: 'Data-driven CRO and UX strategies to boost your website performance.',
    color: 'green',
  },
  {
    icon: PenTool,
    title: 'Branding & Content',
    description: 'Consistent brand identity and high-converting content across all channels.',
    color: 'orange',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We Offer</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to transform your digital presence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className={`inline-flex p-3 rounded-lg bg-${service.color}-50 text-${service.color}-600 mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;