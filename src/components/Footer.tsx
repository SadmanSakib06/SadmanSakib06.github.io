import React from 'react';
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="font-bold text-2xl bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Sadman Sakib
              </div>
              <p className="text-gray-400 leading-relaxed">
                UX Designer & React Developer passionate about creating beautiful, 
                user-centered digital experiences that make a difference.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </a>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Projects
                </a>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Skills
                </a>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/sadman-sakib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/sadman-sakib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:sadman.sakib@example.com"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://twitter.com/sadman_sakib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-200"
                >
                  <Twitter size={20} />
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Available for freelance work and collaborations
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Sadman Sakib. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>Made with</span>
                <Heart className="text-pink-400" size={16} />
                <span>using React & Tailwind CSS</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-400 italic">
                "In a world where you can be anything, be kind."
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;