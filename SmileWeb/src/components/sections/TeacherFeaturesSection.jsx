import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaBook, FaClipboardList, FaUserGraduate, FaCalendarAlt, FaClipboardCheck, FaEnvelope, FaFileAlt, FaQuestionCircle, FaUserClock } from 'react-icons/fa';

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
      </div>
    </section>
  );
};

export default TeacherFeaturesSection; 