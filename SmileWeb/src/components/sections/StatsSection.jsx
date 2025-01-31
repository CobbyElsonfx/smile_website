const StatCard = ({ number, label }) => (
  <div className="bg-white rounded-lg p-6 text-center">
    <div className="text-4xl font-bold text-teal-600 mb-2">{number}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

const StatsSection = () => {
  const stats = [
    { number: "98%", label: "Customer Satisfaction" },
    { number: "100+", label: "Schools" },
    { number: "50k+", label: "Students" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 