import { Button } from "@mui/material";
import {
  Settings,
  Layers,
  ToolCase,
  CheckCircle,
  Clock,
  Users,
  PlaneTakeoff,
  ChevronRight,
} from "lucide-react";

const reasonsData = [
  {
    title: "Precision Manufacturing",
    description:
      "Tight tolerance, high-quality components for mission-critical use.",
    icon: Settings,
  },
  {
    title: "Integrated Engineering",
    description:
      "Mechanical, electrical, and electronic systems under one roof.",
    icon: Layers,
  },
  {
    title: "Customized Solutions",
    description: "Tailored to specific project or tender requirements.",
    icon: ToolCase,
  },
  {
    title: "Quality Assurance",
    description:
      "Stringent inspection and testing standards for every product.",
    icon: CheckCircle,
  },
  {
    title: "Timely Delivery",
    description: "Streamlined processes to meet project schedules.",
    icon: Clock,
  },
  {
    title: "Client-Centric Approach",
    description:
      "Transparent communication and reliable post-delivery support.",
    icon: Users,
  },
];

export default function WhyChooseUs() {
  return (
    <div className="bg-white text-black py-16 px-6 sm:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2">
          <div className="lg:sticky lg:top-36 flex flex-col gap-10">
            <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">
              We Create New Solutions and Transform Existing Ones with
              Technologies That Beat Industry-Best Timelines
            </h1>

            <div className="bg-gray-100 rounded-xl p-6 sm:p-8 shadow-md max-w-full sm:max-w-sm">
              <PlaneTakeoff className="w-10 h-10 mb-4 text-blue-500" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Fuel Your Digital-First Idea
              </h2>
              <p className="text-gray-600 mb-4 sm:mb-6">
                With 1600+ Transformation Experts
              </p>
              <Button
                variant="contained"
                className="bg-blue-500 text-white px-5 py-2 sm:px-6 sm:py-3  rounded-md font-semibold"
              >
                Innovate With Us
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-6">
          {reasonsData.map((item) => (
            <div
              key={item.title}
              className="pb-6 border-b border-gray-300 last:border-b-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                <item.icon className="w-8 h-8 text-black flex-shrink-0" />
                <h3 className="text-xl sm:text-xl font-semibold flex-1">
                  {item.title}
                </h3>
                <ChevronRight className="w-6 h-6 text-black hidden sm:inline-block" />
              </div>
              <p className="text-gray-600 sm:pl-12">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
