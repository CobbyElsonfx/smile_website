import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    if (isMenuOpen) {
      document.addEventListener('click', closeMenu);
      // Prevent scrolling when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('click', closeMenu);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Prevent menu close when clicking inside
  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-20 flex items-center z-50 bg-gradient-to-r from-teal-600 to-teal-500 shadow-lg">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="text-white font-bold text-2xl relative z-50">
          <img src={logo} alt="SMILE Logo" className="h-[10rem] transition-transform duration-300 hover:scale-105" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex font-medium text-white text-lg items-center space-x-2">
          <button onClick={() => scrollToSection('home')} className="px-6 py-2 hover:bg-teal-500/30 rounded-full transition-all duration-300 hover:scale-105">Home</button>
          <button onClick={() => scrollToSection('features')} className="px-6 py-2 hover:bg-teal-500/30 rounded-full transition-all duration-300 hover:scale-105">Features</button>
          <button onClick={() => scrollToSection('contact')} className="px-6 py-2 hover:bg-teal-500/30 rounded-full transition-all duration-300 hover:scale-105">Contact</button>
        </nav>

        {/* Hamburger Button */}
        <button 
          className="md:hidden relative z-50 w-12 h-12 rounded-full bg-teal-500/30 backdrop-blur-sm focus:outline-none transition-transform duration-300 hover:scale-105"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          aria-label="Toggle menu"
        >
          <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span 
              className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 delay-200' : '-translate-y-2'
              }`}
            />
            <span 
              className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
                isMenuOpen ? 'w-0 opacity-50' : 'w-6 delay-200 opacity-100'
              }`}
            />
            <span 
              className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45 delay-200' : 'translate-y-2'
              }`}
            />
          </div>
        </button>

        {/* Mobile Navigation Dropdown */}
        <div 
          className={`fixed md:hidden top-20 inset-x-0 h-[50vh] bg-gradient-to-b from-teal-600/95 to-teal-800/95 backdrop-blur-sm transform transition-all duration-500 ease-in-out origin-top ${
            isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`}
          onClick={handleMenuClick}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <nav className="flex flex-col items-center space-y-6 text-xl">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white py-4 px-12 hover:bg-teal-500/30 rounded-xl transition-all duration-300 transform hover:scale-110 flex items-center group w-64 justify-center"
              >
                <span className="material-icons mr-3 group-hover:rotate-12 transition-transform duration-300 text-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </span>
                <span className="font-light tracking-wider">HOME</span>
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-white py-4 px-12 hover:bg-teal-500/30 rounded-xl transition-all duration-300 transform hover:scale-110 flex items-center group w-64 justify-center"
              >
                <span className="material-icons mr-3 group-hover:rotate-12 transition-transform duration-300 text-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="font-light tracking-wider">FEATURES</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white py-4 px-12 hover:bg-teal-500/30 rounded-xl transition-all duration-300 transform hover:scale-110 flex items-center group w-64 justify-center"
              >
                <span className="material-icons mr-3 group-hover:rotate-12 transition-transform duration-300 text-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="font-light tracking-wider">CONTACT</span>
              </button>
            </nav>
            
            {/* Social Links */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-6">
              <a href="tel:+233538096641" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-125">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a href="mailto:smilebasic25@gmail.com" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-125">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="https://maps.google.com/?q=Wristberg+Rd,+Accra,+Ghana" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-125">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 