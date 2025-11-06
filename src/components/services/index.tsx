import { Zap, Cpu, Building, Factory, Shield, Settings } from "lucide-react";

import React from "react";

const achievementData = [
  {
    label: "Power & Energy",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate animi modi odit corrupti repellat iusto, ad, aspernatur inventore tempore earum libero perspiciatis vitae.",
    icon: <Zap size={36} />,
  },
  {
    label: "Industrial Automation",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate animi modi odit corrupti repellat iusto, ad, aspernatur inventore tempore earum libero perspiciatis vitae.",
    icon: <Cpu size={36} />,
  },
  {
    label: "Infrastructure & Utilities",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate animi modi odit corrupti repellat iusto, ad, aspernatur inventore tempore earum libero perspiciatis vitae.",
    icon: <Building size={36} />,
  },
  {
    label: "Manufacturing & Process Plants",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate animi modi odit corrupti repellat iusto, ad, aspernatur inventore tempore earum libero perspiciatis vitae.",
    icon: <Factory size={36} />,
  },
  {
    label: "Defense and Research Applications",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate animi modi odit corrupti repellat iusto, ad, aspernatur inventore tempore earum libero perspiciatis vitae.",
    icon: <Shield size={36} />,
  },
  {
    label: "Engineering Services & System Integrators",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate animi modi odit corrupti repellat iusto, ad, aspernatur inventore tempore earum libero perspiciatis vitae.",
    icon: <Settings size={36} />,
  },
];

const Industries = () => {
  return (
    <div className=" px-4 sm:px-6  gap-8" id="industries">
      <header className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Industries We Serve
        </h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Our solutions cater to a wide range of industrial sectors, including
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 py-12 lg:grid-cols-3 gap-6 sm:gap-12">
        {achievementData?.map((e, index) => (
          <IndustriesCard
            key={index}
            label={e.label}
            content={e.content}
            icon={e.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Industries;

interface IndustriesCardProps {
  label: string;
  content: string;
  icon: React.ReactNode;
}

const IndustriesCard: React.FC<IndustriesCardProps> = ({
  label,
  content,
  icon,
}) => {
  return (
    <div className="p-6 sm:p-8 rounded-xl h-full bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-mute">
      <div className="text-primary/80 mb-2">{icon}</div>

      <h3 className="text-lg font-bold text-gray-800">{label}</h3>

      <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
    </div>
  );
};
