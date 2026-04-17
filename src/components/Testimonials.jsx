// components/Testimonials.js
import React from 'react';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "CEO, NovaBridge Solutions",
    review:
      "Working with this team transformed our entire marketing pipeline. Within 3 months, our lead volume doubled and our cost-per-acquisition dropped by 40%. The AI automation they built saves us 20+ hours every week.",
    avatar: "SM",
  },
  {
    name: "James Okoye",
    role: "Founder, Apex Digital Commerce",
    review:
      "They don't just deliver campaigns — they build systems. Our email automation alone generates consistent revenue on autopilot. The team is sharp, communicative, and genuinely invested in results.",
    avatar: "JO",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director, CloudNest SaaS",
    review:
      "The combination of strategic marketing and AI automation is rare. They helped us scale from 500 to 5,000 monthly sign-ups in six months without increasing our headcount. Exceptional work.",
    avatar: "PS",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wide">Client Stories</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Don't take our word for it — here's what business leaders say after working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">"{t.review}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{t.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;