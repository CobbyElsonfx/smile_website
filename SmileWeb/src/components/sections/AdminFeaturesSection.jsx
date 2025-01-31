const FeatureList = ({ features, className = '' }) => (
  <ul className={`space-y-3 ${className}`}>
    {features.map((feature, index) => (
      <li key={index} className="flex items-center space-x-2">
        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
        <span className="text-gray-700">{feature}</span>
      </li>
    ))}
  </ul>
);

const AdminFeaturesSection = () => {
  const administratorFeatures = [
    "Manage classes and terms",
    "Setup academic year with any number of terms",
    "Manage your school's subjects and gradings",
    "Automate students' promotions",
    "Automate report remarks",
    "Control assessment percentages",
    "Schedule and send free push notifications",
    "Schedule and send paid sms notifications",
    "Customize and generate student ID cards",
    "Manage and automate document signatures",
    "Manage user accounts and track activities",
    "Upload documents for questions/answers generation",
    "Setup your school timetable with reminders",
    "Setup pickup points with bus in & bus out fees"
  ];

  const financialFeatures = [
    "Register students with their parents",
    "Track students' attendances",
    "Analyze students' assessments",
    "Generate assessment sheets & report cards",
    "Send students' results to parents through sms",
    "Manage fees/bills (school fees, exam fees, etc.)",
    "Manage recurring fees (classes, canteen, etc.)",
    "Include or exclude students from specific fees",
    "Collect fee payments and generate receipts",
    "View and generate arrears list",
    "Send arrears notifications to parents and more"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-teal-800 text-center mb-12">
          Features available to Administrators
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Administrative Features */}
          <div>
            <FeatureList features={administratorFeatures} />
          </div>
          
          {/* Right Column - Image */}
          <div className="flex justify-center">
            <img 
              src="/admin-features.png" 
              alt="Administrator Features"
              className="w-full max-w-md"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          {/* Left Column - Image */}
          <div className="flex justify-center order-2 md:order-1">
            <img 
              src="/financial-features.png" 
              alt="Financial Management"
              className="w-full max-w-md"
            />
          </div>
          
          {/* Right Column - Financial Features */}
          <div className="order-1 md:order-2">
            <FeatureList features={financialFeatures} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminFeaturesSection; 