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
    }
    return () => document.removeEventListener('click', closeMenu);
  }, [isMenuOpen]);

  // Prevent menu close when clicking inside
  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-20 flex items-center z-50 bg-teal-600">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="text-white font-bold text-2xl">
          <img src={logo} alt="SMILE Logo" className="h-[10rem]" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex font-medium text-white text-lg items-center">
          <Link to="/" className="px-6 py-2 hover:text-emerald-200 transition-colors">Home</Link>
          <Link to="/about" className="px-6 py-2 hover:text-emerald-200 transition-colors">About</Link>
          <Link to="/contact" className="px-6 py-2 hover:text-emerald-200 transition-colors">Contact</Link>
        </nav>

        {/* Hamburger Button */}
        <button 
          className="md:hidden relative z-50 w-10 h-10 focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          aria-label="Toggle menu"
        >
          <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span 
              className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 delay-200' : '-translate-y-1.5'
              }`}
            />
            <span 
              className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
                isMenuOpen ? 'w-0 opacity-50' : 'w-6 delay-200 opacity-100'
              }`}
            />
            <span 
              className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45 delay-200' : 'translate-y-1.5'
              }`}
            />
          </div>
        </button>

        {/* Mobile Navigation */}
        <div 
          className={`fixed md:hidden top-0 left-0 w-full h-screen bg-teal-600 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={handleMenuClick}
        >
          <div className="flex flex-col h-full pt-24 px-4">
            <nav className="flex flex-col space-y-4 text-lg">
              <Link 
                to="/" 
                className="text-white py-4 px-6 hover:bg-teal-700 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-white py-4 px-6 hover:bg-teal-700 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-white py-4 px-6 hover:bg-teal-700 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 