import { FaClock, FaChartLine, FaUserShield, FaRegCreditCard, FaHeadset, FaBell } from 'react-icons/fa';
import PropTypes from 'prop-types';

const VisionCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-emerald-500 text-3xl mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

VisionCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const About = () => {
  const visionCards = [
    {
      icon: FaClock,
      title: "Real-time Updates",
      description: "Get instant notifications and updates about your transactions in real-time."
    },
    {
      icon: FaChartLine,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and insights to track your business performance."
    },
    {
      icon: FaUserShield,
      title: "Secure Platform",
      description: "Advanced security measures to protect your data and transactions."
    },
    {
      icon: FaRegCreditCard,
      title: "Easy Payments",
      description: "Seamless and secure payment processing for all transactions."
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you with any issues."
    },
    {
      icon: FaBell,
      title: "Smart Notifications",
      description: "Customizable alerts to keep you informed of important updates."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-900 to-emerald-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-6">Our Vision</h1>
        <p className="text-xl text-gray-200 max-w-2xl">
          Simple & Straight Away - We're committed to providing a seamless platform that makes managing your business effortless and efficient.
        </p>
      </div>

      {/* Vision Cards Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visionCards.map((card, index) => (
            <VisionCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;