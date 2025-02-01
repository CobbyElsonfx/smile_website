import { FaUserGraduate, FaChartLine, FaBell, FaFileInvoiceDollar, FaComments } from 'react-icons/fa';
import parentApp from '../../assets/mac.png'; // Add your app mockup image

const FeatureCard = ({ icon: Icon, title, description, color, index }) => (
  <div className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group ${index % 2 === 0 ? 'hover:bg-gradient-to-br from-teal-50 to-emerald-50' : 'hover:bg-gradient-to-br from-emerald-50 to-teal-50'}`}>
    {/* Decorative Elements */}
    <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
    
    <div className="relative z-10">
      <div className={`${color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
        <Icon className="text-white text-3xl" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const ParentFeatures = () => {
  const features = [
    {
      icon: FaUserGraduate,
      title: "Real-time Academic Tracking",
      description: "Monitor your child's academic progress, attendance, and performance in real-time. Access detailed reports and assessment scores instantly.",
      color: "bg-emerald-500"
    },
    {
      icon: FaChartLine,
      title: "Progress Analytics",
      description: "View comprehensive analytics of your child's performance across subjects, compare with class averages, and track improvement over time.",
      color: "bg-teal-600"
    },
    {
      icon: FaBell,
      title: "Instant Notifications",
      description: "Receive immediate updates about assignments, exam schedules, results, and school announcements directly on your phone.",
      color: "bg-emerald-500"
    },
    {
      icon: FaFileInvoiceDollar,
      title: "Fee Management",
      description: "Handle all school-related payments online, view payment history, and receive digital receipts. Get timely reminders for upcoming fees.",
      color: "bg-teal-600"
    },
    {
      icon: FaComments,
      title: "Direct Communication",
      description: "Communicate directly with teachers and school administration through the built-in messaging system. Schedule parent-teacher meetings easily.",
      color: "bg-emerald-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-teal-50 to-transparent" />
      <div className="absolute -left-32 top-1/4 w-64 h-64 bg-emerald-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 w-64 h-64 bg-teal-100 rounded-full opacity-20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Empower Your Parental Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay connected with your child's educational journey through our comprehensive parent portal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        {/* Web Platform Preview Section */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-500 transform -skew-y-6 shadow-2xl rounded-3xl" />
          <div className="relative bg-gradient-to-r from-teal-600 to-emerald-500 rounded-3xl p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-block px-4 py-2 bg-emerald-400/20 rounded-full text-sm font-semibold mb-6">
                  Web Platform Available Now
                </div>
                <h3 className="text-4xl font-bold mb-6">
                  Access Anywhere with SMILE Web
                </h3>
                <p className="text-xl mb-8 opacity-90">
                  Our powerful web platform gives you complete access to your child's educational journey from any device with a web browser.
                </p>
                <ul className="space-y-4">
                  {[
                    "No installation required - access from any browser",
                    "Responsive design for all screen sizes",
                    "Real-time updates and notifications",
                    "Secure access to all features"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-12 space-y-6">
                  <button className="w-full sm:w-auto bg-white text-teal-600 px-8 py-4 rounded-xl hover:bg-emerald-50 transition-colors duration-300 flex items-center justify-center space-x-2">
                    <span>Access Web Platform</span>
                  </button>
                  
                  <div className="text-center sm:text-left">
                    <p className="text-white/80 text-sm">
                      Mobile apps coming soon for iOS and Android
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src={parentApp}
                  alt="SMILE Web Platform Preview"
                  className="w-full max-w-lg transform hover:-translate-y-2 transition-transform duration-500 shadow-2xl rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentFeatures; 