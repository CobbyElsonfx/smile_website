import React from 'react';
import { motion } from 'framer-motion';

const AppPreview = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Phone Frame */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 bg-black rounded-[3rem] p-2 shadow-2xl"
      >
        {/* Screen Content */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden h-[600px]">
          {/* App Header */}
          <div className="bg-gradient-to-r from-teal-600 to-emerald-500 p-4">
            <div className="flex items-center justify-between">
              <div className="text-white">
                <h3 className="text-lg font-semibold">SMILE</h3>
                <p className="text-sm opacity-90">Student Results</p>
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full"></div>
            </div>
          </div>

          {/* App Content */}
          <div className="p-4">
            {/* Student Info */}
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                <div>
                  <h4 className="font-semibold">Andoh Francis</h4>
                  <p className="text-sm text-gray-500">Class: Form 3A</p>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-4">
             
              {['Mathematics', 'English', 'Science'].map((subject, index) => (
                <motion.div
                  key={subject}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-4 rounded-xl"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h5 className="font-medium">{subject}</h5>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-sm text-gray-500">Score:</span>
                        <span className="text-sm font-semibold text-emerald-600">85%</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold">A</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Teacher's Input Section */}
            <div className="mt-8 border-t pt-4">
              <h4 className="text-sm font-medium text-gray-600 mb-3">Teacher's Comments</h4>
              <div className="bg-gray-50 p-3 rounded-lg">
                <textarea 
                  className="w-full bg-transparent text-sm resize-none"
                  placeholder="Add comments..."
                  rows="2"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-8 -right-4 w-24 h-24 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    </div>
  );
};

export default AppPreview; 