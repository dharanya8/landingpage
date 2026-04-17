// App.js
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import About from './components/About';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Backtotop from './components/Backtotop';

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  return (
    <div className="font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Benefits />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <Backtotop />
    </div>
  );
}

export default App;