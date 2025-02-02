import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import VisionSection from './sections/VisionSection';


const Hero = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-gradient-to-br from-teal-600 to-teal-700">
          <Header />
          <HeroSection />
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg className="relative block w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
              <path 
                fill="#ffffff"
                d="M0,100 C480,0 960,0 1440,100 L1440,100 L0,100 Z"
              />
            </svg>
          </div>
        </div>
        <div className="absolute w-full md:w-[60%] left-1/2 -translate-x-1/2" style={{ top: 'calc(100% - 206px)' }}>
          <VisionSection/>
        </div>
      </div>
    </>
  );
};

export default Hero;
