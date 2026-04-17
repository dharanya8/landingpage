// components/CTA.js
import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Scale Your Business with AI?</h2>
        <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
          Join hundreds of businesses that have automated their marketing and doubled their revenue.
        </p>
        <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
          Schedule a Free Consultation
        </button>
      </div>
    </section>
  );
};

export default CTA;