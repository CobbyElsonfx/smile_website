import Button from '../shared/Button';
import phoneMockup from '../../assets/phone-mockup.png';
import bgVideo from '../../assets/video.mp4';

const HeroSection = () => {
  return (
    <div className="relative h-[80vh]">
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
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-teal-600/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex items-center justify-between gap-4">
            <div className="w-1/2 pr-8">
              <h1 className="text-white text-7xl md:text-8xl lg:text-9xl font-bold mb-4">
                SMILE
              </h1>
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl mb-8 font-light">
                School Management & Innovative Learning Environment
              </h2>
              <div className="flex space-x-4">
                <Button variant="primary">Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="w-1/2">
              <img 
                src={phoneMockup} 
                alt="SMILE App"
                className="w-full max-w-2xl transform rotate-12 ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 