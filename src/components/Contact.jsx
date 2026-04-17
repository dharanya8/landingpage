// components/Contact.js
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: Mail, text: 'hello@aimarketo.com', href: 'mailto:hello@aimarketo.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: '123 AI Avenue, San Francisco, CA', href: '#' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Mail size={16} />
            <span className="text-sm font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Let's Start a Conversation</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Ready to transform your marketing? Fill out the form and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-blue-100 mb-8">Have questions? We're here to help you grow your business.</p>
              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <a
                    key={idx}
                    href={info.href}
                    className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                      <info.icon size={20} />
                    </div>
                    <span>{info.text}</span>
                  </a>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-blue-100">Business Hours</p>
                <p className="font-semibold">Mon-Fri: 9AM - 6PM EST</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+1 234 567 890"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project and goals..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3.5 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;