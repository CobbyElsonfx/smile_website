import Button from '../shared/Button';
import phoneMockup from '../../assets/phone-mockup.png';
import bgVideo from '../../assets/video.mp4';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay with gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/40 to-teal-600/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-white text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold mb-4 animate-fade-in">
                SMILE
              </h1>
              <h2 className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 font-light max-w-2xl">
                School Management & Innovative Learning Environment
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
                <Button variant="primary" className="w-full sm:w-auto px-8 py-3 hover:scale-105 transition-transform">
                  Get Started
                </Button>
                <Button variant="outline" className="w-full sm:w-auto  px-8 py-3 hover:scale-105 transition-transform">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-teal-400/20 blur-3xl rounded-full transform -translate-y-1/2"></div>
                <img 
                  src={phoneMockup} 
                  alt="SMILE App"
                  className="w-full max-w-lg mx-auto transform hover:rotate-12 transition-transform duration-500 relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 