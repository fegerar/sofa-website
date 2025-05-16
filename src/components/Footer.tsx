import React from 'react';
import { Monitor, Mail, Phone, MapPin, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 pt-12 pb-8"> {/* Black background */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Monitor className="h-8 w-8 text-accent mr-2" /> {/* Accent color */}
              <span className="text-xl font-bold text-white">SOFA</span>
            </div>
            <p className="mb-4 text-gray-400"> {/* Keep gray text */}
              Revolutionizing fair play in football with cutting-edge computer vision technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"> {/* Accent hover */}
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"> {/* Accent hover */}
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"> {/* Accent hover */}
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-accent transition-colors">Features</a> {/* Accent hover */}
              </li>
              <li>
                <a href="#demo" className="hover:text-accent transition-colors">Demo</a> {/* Accent hover */}
              </li>
              <li>
                <a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a> {/* Accent hover */}
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">Contact</a> {/* Accent hover */}
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-accent transition-colors">Documentation</a> 
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">API Reference</a> 
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Case Studies</a> 
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Blog</a> 
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-500" /> {/* Slightly dimmer icon color */}
                <span>fegerar@proton.me / huseynovmurad2002@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-500" /> {/* Slightly dimmer icon color */}
                <span>+39 351 803 2225 / +36 70 675 4679</span>
              </li>
              
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">&copy; 2025 SOFA Technology. All rights reserved.</p> {/* Dimmer copyright text */}
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">Privacy Policy</a> {/* Accent hover */}
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">Terms of Service</a> {/* Accent hover */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;