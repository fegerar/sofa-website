import React, { useState, useEffect } from 'react';
import { Monitor, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-bg-secondary shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Monitor className="h-8 w-8 text-accent mr-2" />
            <span className="text-xl font-bold text-dark-text">SOFA</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-dark-text-secondary hover:text-accent transition-colors">Features</a>
            <a href="#demo" className="text-dark-text-secondary hover:text-accent transition-colors">Demo</a>
            <a href="#testimonials" className="text-dark-text-secondary hover:text-accent transition-colors">Testimonials</a>
            <a href="#contact" className="text-dark-text-secondary hover:text-accent transition-colors">Contact</a>
          </div>

          <div className="hidden md:block">
            <button className="bg-accent text-dark-bg px-5 py-2 rounded-md hover:bg-accent-dark transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-text-secondary hover:text-accent"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden mt-4 pb-4 ${isScrolled ? 'bg-dark-bg-secondary' : 'bg-dark-bg'} rounded-b-lg shadow-lg`}>
            <div className="flex flex-col space-y-4 px-4">
              <a
                href="#features"
                className="text-dark-text-secondary hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a
                href="#demo"
                className="text-dark-text-secondary hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Demo
              </a>
              <a
                href="#testimonials"
                className="text-dark-text-secondary hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-dark-text-secondary hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <button className="bg-accent text-dark-bg w-full py-2 rounded-md hover:bg-accent-dark transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;