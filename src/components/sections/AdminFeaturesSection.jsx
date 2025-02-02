import { FiCheckCircle, FiSettings, FiDollarSign, FiUsers, FiCalendar, FiBell } from 'react-icons/fi';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, features }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300
               before:absolute before:inset-0 before:bg-gradient-to-r before:from-teal-500/5 before:to-emerald-500/5 before:rounded-2xl
               hover:transform hover:scale-[1.02] hover:-translate-y-1"
  >
    <div className="absolute -top-6 left-8">
      <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-4 rounded-2xl shadow-lg">
        <Icon className="w-8 h-8 text-white" />
      </div>
    </div>
    
    <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-8">{title}</h3>
    
    <div className="space-y-4">
      {features.map((feature, index) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          key={index}
          className="flex items-start space-x-3 group"
        >
          <div className="flex-shrink-0 w-6">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 
                          group-hover:scale-125 transition-transform duration-300" />
          </div>
          <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
            {feature}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const AdminFeaturesSection = () => {
  const features = {
    administrative: {
      icon: FiSettings,
      title: "Administrative Control",
      features: [
        "Manage classes and terms",
        "Setup academic year with any number of terms",
        "Manage your school's subjects and gradings",
        "Automate students' promotions",
        "Automate report remarks",
        "Control assessment percentages",
        "Setup your school timetable with reminders"
      ]
    },
    communication: {
      icon: FiBell,
      title: "Communication Tools",
      features: [
        "Schedule and send free push notifications",
        "Schedule and send paid sms notifications",
        "Send students' results to parents through sms",
        "Send arrears notifications to parents"
      ]
    },
    documents: {
      icon: FiUsers,
      title: "Document Management",
      features: [
        "Customize and generate student ID cards",
        "Manage and automate document signatures",
        "Upload documents for questions/answers generation",
        "Generate assessment sheets & report cards"
      ]
    },
    financial: {
      icon: FiDollarSign,
      title: "Financial Operations",
      features: [
        "Manage fees/bills (school fees, exam fees, etc.)",
        "Manage recurring fees (classes, canteen, etc.)",
        "Include or exclude students from specific fees",
        "Collect fee payments and generate receipts",
        "View and generate arrears list"
      ]
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(0,128,128,0.1),transparent_50%)]" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 relative"
      >
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Powerful Administrative Suite
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transform your school management with our comprehensive suite of powerful tools and features
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {Object.entries(features).map(([key, section], index) => (
            <FeatureCard
              key={key}
              icon={section.icon}
              title={section.title}
              features={section.features}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AdminFeaturesSection; 