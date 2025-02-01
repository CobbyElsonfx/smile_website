import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaBook, FaClipboardList, FaUserGraduate, FaCalendarAlt, FaClipboardCheck, FaEnvelope, FaFileAlt, FaQuestionCircle, FaUserClock } from 'react-icons/fa';
import AppPreview from '../AppPreview';

const TeacherFeaturesSection = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher className="w-8 h-8 text-primary" />,
      title: "Dashboard Access",
      description: "Access to an advanced dashboard with student statistics and teaching widgets"
    },
    {
      icon: <FaBook className="w-8 h-8 text-primary" />,
      title: "Syllabus Management",
      description: "Create and manage class syllabi with ease"
    },
    {
      icon: <FaClipboardList className="w-8 h-8 text-primary" />,
      title: "Assignment Management",
      description: "Create, assign and grade student assignments efficiently"
    },
    {
      icon: <FaUserGraduate className="w-8 h-8 text-primary" />,
      title: "Student Progress Tracking",
      description: "Monitor and track individual student performance and progress"
    },
    {
      icon: <FaCalendarAlt className="w-8 h-8 text-primary" />,
      title: "Schedule Management",
      description: "Manage class schedules and exam timetables"
    },
    {
      icon: <FaClipboardCheck className="w-8 h-8 text-primary" />,
      title: "Attendance Tracking",
      description: "Take and manage student attendance with detailed reporting"
    },
    {
      icon: <FaEnvelope className="w-8 h-8 text-primary" />,
      title: "Communication Tools",
      description: "Send emails and messages to students, parents, and colleagues"
    },
    {
      icon: <FaFileAlt className="w-8 h-8 text-primary" />,
      title: "Online Examination",
      description: "Create and conduct online exams with question banks"
    },
    {
      icon: <FaQuestionCircle className="w-8 h-8 text-primary" />,
      title: "Question Bank",
      description: "Maintain a comprehensive database of exam questions"
    },
    {
      icon: <FaUserClock className="w-8 h-8 text-primary" />,
      title: "Leave Management",
      description: "Apply and track leave requests through the system"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Teacher Features</h2>
          <p className="text-xl text-gray-600">Empower your teaching with our comprehensive suite of tools</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-4">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* App Preview Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-24 bg-gradient-to-r from-teal-600 to-emerald-500 rounded-3xl p-12 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block px-4 py-2 bg-emerald-400/20 rounded-full text-sm font-semibold mb-6">
                Mobile App Available Soon
              </div>
              <h3 className="text-4xl font-bold mb-6">
                Grade Assignments Anywhere
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Access your teaching tools on the go with our intuitive mobile application. Grade assignments, record attendance, and communicate with parents - all from your smartphone.
              </p>
              <ul className="space-y-4">
                {[
                  "Quick and easy grade entry",
                  "Real-time synchronization",
                  "Offline access to essential features",
                  "Secure data encryption"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <AppPreview />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeacherFeaturesSection; 