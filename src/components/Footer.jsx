// components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">AI-Marketo</h3>
            <p className="text-sm">AI-powered digital marketing & automation solutions for modern businesses.</p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="#benefits" className="hover:text-blue-400 transition">Benefits</a></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><FaEnvelope size={16} /> hello@aimarketo.com</li>
              <li className="flex items-center gap-2"> <FaPhone size={16} /> +1 (555) 123-4567</li>
              <li className="flex items-center gap-2"><FaMapMarkerAlt size={16} /> 123 AI Avenue, San Francisco, CA</li>
            </ul>
          </div>
          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition"><FaLinkedin size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition"><FaInstagram size={20} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AI-Marketo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;