import AdminIcon from "../../assets/admin.png"
import Docs from "../../assets/documents.png"
import UserGroupIcon from "../../assets/user-group.png"
import Staff from "../../assets/staff.png"
import AcademicIcon from "../../assets/academics.png"
import FinanceIcon from "../../assets/finance.png"

const Features = () => {
  const features = [
    {
      title: "Administration",
      description: "Control your school. This is where you configure and administer the backing stuff.",
      icon: AdminIcon,
    },
    {
      title: "Students",
      description: "Manage your students, their parents, track attendance & generate student id cards.",
      icon: UserGroupIcon,
    },
    {
      title: "Staff",
      description: "Manage your staff members, tax filings, work schedules and pay their salaries.",
      icon: Staff,
    },
    {
      title: "Academics",
      description: "View and generate student report cards, analyze their performance.",
      icon: AcademicIcon,
    },
    {
      title: "Documentation",
      description: "Manage your student's documents & generate certificates.",
      icon: Docs,
    },
    {
      title: "Finance",
      description: "Control your school's finances, setup and break fee payments.",
      icon: FinanceIcon,
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg p-8 w-[90%] h-full transition-all duration-300 ease-in-out 
              hover:-translate-y-2 hover:shadow-2xl hover:bg-emerald-100/10
              bg-gradient-to-t from-[#005653] to-[#04BDB7] relative 
              border border-emerald-100/20 backdrop-blur-sm"
            >
              <div className="flex flex-col items-start text-left space-y-4">
                <div className="p-4 rounded-xl bg-white/15 shadow-lg transform transition-transform duration-300 hover:scale-110">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="h-12 w-12 md:h-16 md:w-16 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-base md:text-lg text-white/90 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
