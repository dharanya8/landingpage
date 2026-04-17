// components/About.js
import React from 'react';
import { Target, Rocket, Users, Cpu, CheckCircle, Award, BarChart, Clock } from 'lucide-react';

const About = () => {
  const points = [
    { icon: Target, text: 'Result-focused strategy', color: 'blue' },
    { icon: Rocket, text: 'Faster execution', color: 'purple' },
    { icon: Users, text: 'Better lead conversion', color: 'green' },
    { icon: Cpu, text: 'Scalable systems', color: 'orange' },
  ];

  const achievements = [
    { value: '98%', label: 'Client Satisfaction', icon: Award },
    { value: '3x', label: 'ROI Average', icon: BarChart },
    { value: '24/7', label: 'Support Available', icon: Clock },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 animate-fade-in-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl object-cover w-full h-96 relative z-10 transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="flex-1 animate-fade-in-right">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">We Combine Marketing Strategy with AI Innovation</h2>
            <p className="mt-4 text-gray-600 text-lg">
              At AI-Marketo, we blend creative marketing expertise with cutting-edge artificial intelligence to deliver unprecedented results for modern businesses.
            </p>
            <p className="mt-2 text-gray-600">
              Founded by industry veterans, our platform helps companies automate repetitive tasks, engage customers intelligently, and scale marketing ROI like never before.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2 group">
                  <div className={`p-1.5 rounded-lg bg-${point.color}-100 text-${point.color}-600 group-hover:scale-110 transition-transform`}>
                    <point.icon size={18} />
                  </div>
                  <span className="text-gray-700 font-medium">{point.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-6 pt-6 border-t border-gray-100">
              {achievements.map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                  <div className="text-sm text-gray-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;