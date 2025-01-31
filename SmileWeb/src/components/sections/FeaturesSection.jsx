import Card from '../shared/Card';

const FeatureCard = ({ title, description, image, icon }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex items-start mb-4">
      {icon && <img src={icon} alt="" className="w-8 h-8 mr-3" />}
      <h3 className="font-bold text-xl text-teal-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      title: "Student Management",
      description: "Complete student lifecycle management from admission to graduation",
      icon: "/icons/student.svg"
    },
    {
      title: "Attendance Tracking",
      description: "Digital attendance system with real-time tracking and reporting",
      icon: "/icons/attendance.svg"
    },
    {
      title: "Report Generation",
      description: "Automated report cards and performance analytics",
      icon: "/icons/report.svg"
    },
    {
      title: "Parent Communication",
      description: "Direct messaging and updates to parents through the platform",
      icon: "/icons/communication.svg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">
          What SMILE Can Do For You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 