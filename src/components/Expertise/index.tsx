import React from "react";
import { Settings, Cpu, Zap, Droplet, Factory, Diamond } from "lucide-react";

interface ExpertiseArea {
  title: string;
  description: string;

  icon: React.ReactNode;
}

interface ExpertiseCardProps extends ExpertiseArea {}

const expertiseAreas: ExpertiseArea[] = [
  {
    title: "Mechanical Design & Fabrication",
    description:
      "Expertise in robust design principles, component engineering, and precision fabrication processes.",
    icon: <Settings size={20} fill="white" className="text-white" />,
  },
  {
    title: "Electrical & Control Systems",
    description:
      "Specialists in designing complex control architectures, sensor integration, and reliable system commissioning.",
    icon: <Cpu size={20} fill="white" className="text-white" />,
  },
  {
    title: "Embedded Electronics & Automation",
    description:
      "Developing high-performance firmware, real-time operating systems, and automated industrial solutions.",
    icon: <Zap size={20} fill="white" className="text-white" />,
  },
  {
    title: "Hydraulics & Pneumatics",
    description:
      "Designing, modeling, and implementing fluid power systems for heavy industrial and motion control applications.",
    icon: <Droplet size={20} fill="white" className="text-white" />,
  },
  {
    title: "Power & Energy Systems",
    description:
      "Solutions for efficient power distribution, grid integration, and management of renewable energy sources.",
    icon: <Factory size={20} fill="white" className="text-white" />,
  },
  {
    title: "High Precision Machining",
    description:
      "Leveraging modern manufacturing facilities to produce components that meet rigorous technical and tolerance standards.",
    icon: <Diamond size={20} fill="white" className="text-white" />,
  },
];

const ExpertiseCard: React.FC<ExpertiseCardProps> = React.memo(
  ({ title, description, icon }) => (
    <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 text-gray-900 h-full flex flex-col transition-transform duration-300 hover:scale-[1.02]">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 rounded-full bg-gray-900 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
);

const ExpertiseSection: React.FC = () => {
  const brightBlueClass = "bg-blue-600";
  const whiteTextColor = "text-white";

  const introText: string =
    "Our multidisciplinary engineering team enables end-to-end development from concept and prototyping to full-scale production. With modern manufacturing facilities and quality-driven processes, we ensure every component meets rigorous technical standards.";

  return (
    <section
      className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 ${brightBlueClass}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2
          className={`text-3xl sm:text-5xl font-extrabold mb-4 text-center ${whiteTextColor}`}
        >
          Our Expertise
        </h2>

        <p
          className={`text-center text-lg max-w-4xl mb-16 ${whiteTextColor} opacity-90`}
        >
          {introText}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {expertiseAreas.map((card, index) => (
            <ExpertiseCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
