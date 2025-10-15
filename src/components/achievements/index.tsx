import React from "react";
import { achievementData } from "../../mock";

export const StatCard = React.memo(
  ({
    metric,
    title,
    description,
  }: {
    metric: string;
    title: string;
    description: string;
  }) => {
    return (
      <div className="p-8 space-y-4 rounded-xl h-full border border-card/50 transition-all duration-300 hover:shadow-2xl hover:border-primary/50">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-primary mb-2 leading-none">
          {metric}
        </h2>

        <h3 className="text-xl font-bold text-foreground">{title}</h3>

        <p className="text-muted-foreground text-base leading-relaxed">
          {description}
        </p>
      </div>
    );
  }
);

export default function App() {
  return (
    <div className="min-h-screen p-4 sm:p-8 bg-[--color-background] font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Our Achievements & Expertise
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Discover the measurable impact we've made across various domains.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievementData.map((item) => (
            <p key={item.title}></p>
          ))}
        </div>
      </div>
    </div>
  );
}
