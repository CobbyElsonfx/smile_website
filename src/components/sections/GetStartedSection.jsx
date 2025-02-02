const StepCard = ({ number, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative mb-4">
      <div className="w-20 h-20 rounded-full bg-emerald-400 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-[#005653] flex items-center justify-center">
          <span className="text-white text-xl font-bold">{number}</span>
        </div>
      </div>
    </div>
    <h3 className="font-bold text-xl mb-2">{title}</h3>
    <p className="text-gray-600 max-w-xs">{description}</p>
  </div>
);

const GetStartedSection = () => {
  const steps = [
    {
      number: "1",
      title: "Explore Features",
      description: "Browse through our platform's functionalities to understand how Smile can benefit your school."
    },
    {
      number: "2",
      title: "Contact Us",
      description: "Reach out to us via WhatsApp or phone call to discuss your school's needs and requirements."
    },
    {
      number: "3",
      title: "School Setup",
      description: "We'll help set up and configure the platform specifically for your school's requirements."
    },
    {
      number: "4",
      title: "Training & Support",
      description: "Get 24/7 support and comprehensive workshops for parents, teachers, and students on using the platform."
    }
  ];

  return (
    <section className="py-16 mt-52 md:mt-25 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-4">GET STARTED</h2>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-gray-900 font-extrabold text-2xl">Simple</span>
            <span className="text-gray-900 font-extrabold text-2xl">&</span>
            <span className="text-emerald-500 font-extrabold text-2xl">Straight</span>
            <span className="text-gray-900 font-extrabold text-2xl">Away</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <StepCard {...step} />
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-emerald-200 -z-10">
                  <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-[#005653]"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection; 