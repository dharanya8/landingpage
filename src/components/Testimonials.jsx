// components/Testimonials.js
import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    text: 'The AI automation saved us 20+ hours per week. Our lead conversion doubled within 3 months. Highly recommended! This has been a game-changer for our entire marketing team.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, GrowthLabs',
    text: 'Best decision we made this year. The team understood our needs and delivered a seamless marketing + AI solution that exceeded all expectations.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, Bloom Co.',
    text: 'Incredible results from day one. Our engagement rates skyrocketed and customer support automation is a complete game-changer for our business.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-15 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
         
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Trusted by businesses worldwide. Here's what our clients have to say about their experience.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote size={32} className="text-blue-200 mb-3" />
              <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <Quote size={32} className="text-blue-200 mb-3" />
            <p className="text-gray-700 mb-4 leading-relaxed">"{testimonials[current].text}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold">
                {testimonials[current].name[0]}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{testimonials[current].name}</p>
                <p className="text-sm text-gray-500">{testimonials[current].role}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-all">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;