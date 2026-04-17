// components/Hero.js
import React from 'react';
import { ArrowRight, PlayCircle, TrendingUp, Bot, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-blue-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Grow Your Business with{' '}
              <span className="text-blue-600">Smart Digital Marketing</span> & AI Automation
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Automate your customer journey, generate qualified leads, and scale your revenue with AI-powered marketing solutions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                Get Started <ArrowRight size={18} />
              </button>
              <button className="border border-gray-300 bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all shadow-sm">
                <PlayCircle size={18} /> Book a Free Demo
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-xs text-gray-400">AI Dashboard</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-green-500" size={20} />
                    <span className="text-sm font-medium">Lead Growth</span>
                  </div>
                  <span className="text-green-600 font-bold">+147%</span>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Bot className="text-blue-500" size={20} />
                    <span className="text-sm font-medium">AI Automations</span>
                  </div>
                  <span className="text-blue-600 font-bold">24/7 Active</span>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="text-purple-500" size={20} />
                    <span className="text-sm font-medium">Conversion Rate</span>
                  </div>
                  <span className="text-purple-600 font-bold">3.8x</span>
                </div>
                <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-blue-600 rounded-full"></div>
                </div>
                <p className="text-xs text-gray-400 text-center">Real-time performance metrics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;