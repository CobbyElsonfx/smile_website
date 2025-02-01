import { FaGooglePlay, FaApple } from 'react-icons/fa';
import Button from '../shared/Button';

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Why Choose SMILE */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6">Why Choose SMILE?</h2>
            <p className="mb-8 text-lg">
              SMILE is designed for forward-thinking institutions that want to save time, reduce errors, and improve communication while enhancing the educational experience for students, staff, and parents.
            </p>
            <p className="text-xl italic mb-8">
              Your School, Your Control—All in One Place.
            </p>
            <Button variant="outline" className="text-lg">
              Get Started Today
            </Button>
          </div>

          {/* Right Column - Mobile Apps */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-6">Coming Soon on Mobile</h3>
            <p className="mb-8">
              Get ready for the SMILE mobile experience. Download our app to manage your school on the go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* Play Store Button */}
              <button className="flex items-center justify-center space-x-2 bg-white text-teal-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                <FaGooglePlay className="text-2xl" />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>

              {/* App Store Button */}
              <button className="flex items-center justify-center space-x-2 bg-white text-teal-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                <FaApple className="text-2xl" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-teal-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © 2024 SMILE. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm hover:text-emerald-400">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-emerald-400">Terms of Service</a>
              <a href="#" className="text-sm hover:text-emerald-400">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 