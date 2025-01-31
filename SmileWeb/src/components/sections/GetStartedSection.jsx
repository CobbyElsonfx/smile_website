const StepCard = ({ number, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative mb-4">
      <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-emerald-600 flex items-center justify-center">
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
      title: "Register",
      description: "Click on any of the register buttons, fill and submit valid details as required by Smile."
    },
    {
      number: "2",
      title: "Review",
      description: "After submission, we go through them and make sure you represent said school."
    },
    {
      number: "3",
      title: "Approval",
      description: "After verification process is done, we then approve or reject your account based on the outcome."
    },
    {
      number: "4",
      title: "Start Using",
      description: "After your account is approved, you get complete access to the Smile Platform (Web, Android, iOS)."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">GET STARTED</h2>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-gray-900 font-bold text-2xl">Simple</span>
            <span className="text-gray-900 font-bold text-2xl">&</span>
            <span className="text-emerald-500 font-bold text-2xl">Straight</span>
            <span className="text-gray-900 font-bold text-2xl">Away</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <StepCard {...step} />
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-emerald-200 -z-10">
                  <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-emerald-500"></div>
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