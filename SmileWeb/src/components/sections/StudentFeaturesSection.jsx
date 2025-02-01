import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaBook, FaClipboardList, FaCalendarAlt, FaChartLine, FaMoneyBillWave, FaEnvelope, FaFileAlt, FaClipboard, FaBus } from 'react-icons/fa';

const StudentFeaturesSection = () => {
  const features = [
    {
      icon: <FaUserGraduate className="w-8 h-8 text-primary" />,
      title: "Student Dashboard",
      description: "Access your personalized dashboard with academic progress and notifications"
    },
    {
      icon: <FaBook className="w-8 h-8 text-primary" />,
      title: "Course Materials",
      description: "Access syllabus, study materials, and resources for all subjects"
    },
    {
      icon: <FaClipboardList className="w-8 h-8 text-primary" />,
      title: "Assignment Portal",
      description: "View, submit, and track assignments for all subjects"
    },
    {
      icon: <FaCalendarAlt className="w-8 h-8 text-primary" />,
      title: "Class Schedule",
      description: "View your daily class schedule and exam timetable"
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-primary" />,
      title: "Academic Progress",
      description: "Track your grades, attendance, and overall academic performance"
    },
    {
      icon: <FaMoneyBillWave className="w-8 h-8 text-primary" />,
      title: "Fee Management",
      description: "View and pay fees online through secure payment gateways"
    },
    {
      icon: <FaEnvelope className="w-8 h-8 text-primary" />,
      title: "Communication",
      description: "Message teachers and receive important announcements"
    },
    {
      icon: <FaFileAlt className="w-8 h-8 text-primary" />,
      title: "Online Exams",
      description: "Participate in online examinations and view results"
    },
    {
      icon: <FaClipboard className="w-8 h-8 text-primary" />,
      title: "Student Groups",
      description: "Join and participate in school clubs and activity groups"
    },
    {
      icon: <FaBus className="w-8 h-8 text-primary" />,
      title: "Transport Tracking",
      description: "Track school transport and view route information"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Features</h2>
          <p className="text-xl text-gray-600">Everything you need for a successful academic journey</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-4">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentFeaturesSection; 