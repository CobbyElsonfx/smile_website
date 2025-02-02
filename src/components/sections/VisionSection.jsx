import Card from '../shared/Card';
import { motion } from 'framer-motion';

const VisionSection = () => {
  return (
    <section className="bg-transparent py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-teal-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-4 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="ring-[10px] ring-gray-100 backdrop-blur-sm bg-white/90 mx-2 sm:mx-0">
            <div className="flex flex-col items-center text-center px-3 sm:px-6">
              <motion.h2 
                className="text-2xl md:text-3xl font-extrabold text-teal-800 mb-4 md:mb-8 relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Our Vision
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
              </motion.h2>
              
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed drop-shadow-md">
                  We envision transforming school management through smart, seamless, and scalable technology. The world is evolving fast, and keeping up with technological advancements is no longer optional — it's essential.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed drop-shadow-md font-medium">
                  With SMILE, you're not just keeping up; you're leading the charge into the future of education.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  {['Innovation', 'Excellence', 'Growth'].map((value, index) => (
                    <motion.div
                      key={value}
                      className="px-4 py-2 bg-teal-50 rounded-full text-teal-700 text-sm font-medium"
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      {value}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection; 