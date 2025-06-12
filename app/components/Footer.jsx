import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold gradient-text">
              Portfolio
            </a>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#home" className="text-gray-400 hover:text-white transition">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition">
              Projects
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white transition">
              Skills
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition">
              Contact
            </a>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Dribbble">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
