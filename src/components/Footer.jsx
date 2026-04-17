// components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
const Footer = () => {
  const quickLinks = ['Home', 'Services', 'About', 'Benefits', 'Testimonials', 'Contact'];
  const socialIcons = [
    { icon: FaFacebook, href: '#', color: 'hover:text-blue-600' },
    { icon: FaTwitter, href: '#', color: 'hover:text-sky-500' },
    { icon: FaLinkedin, href: '#', color: 'hover:text-blue-700' },
    { icon:FaInstagram, href: '#', color: 'hover:text-pink-600' },
    // { icon: Youtube, href: '#', color: 'hover:text-red-600' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <Sparkles className="h-7 w-7 text-blue-500" /> */}
              <span className="font-bold text-xl text-white">AI-Marketo</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transforming businesses with AI-powered digital marketing and automation solutions.
            </p>
            <div className="flex gap-4 mt-6">
              {socialIcons.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 ${social.color}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                 <FaEnvelope size={16} className="text-blue-500" />
                <span>hello@aimarketo.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                 <FaPhone size={16} className="text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                 <FaMapMarkerAlt size={16}  className="text-blue-500" />
                <span>123 AI Avenue, San Francisco, CA 94105</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4">Get the latest marketing tips and AI insights.</p>
            <div className="flex mr-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2  bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white"
              />
              <button className="px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-lg hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AI-Marketo. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;