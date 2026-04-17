// components/About.js
import React from 'react';
import { Target, Rocket, Users, Cpu } from 'lucide-react';

const About = () => {
  const points = [
    { icon: Target, text: 'Result-focused strategy' },
    { icon: Rocket, text: 'Faster execution' },
    { icon: Users, text: 'Better lead conversion' },
    { icon: Cpu, text: 'Scalable systems' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-2xl shadow-xl object-cover w-full h-96"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About AI-Marketo</h2>
            <p className="mt-4 text-gray-600 text-lg">
              We combine creative marketing strategy with cutting-edge AI automation to deliver measurable growth for modern businesses.
            </p>
            <p className="mt-2 text-gray-600">
              Founded by industry experts, our platform helps companies automate repetitive tasks, engage customers intelligently, and scale marketing ROI like never before.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <point.icon size={20} className="text-blue-600" />
                  <span className="text-gray-700">{point.text}</span>
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