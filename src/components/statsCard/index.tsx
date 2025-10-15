import React from "react";

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
      <div className="p-4 space-y-4 border-zinc-300 h-full border-l transition-all duration-300 ">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary leading-none">
          {metric}
        </h2>

        <h3 className="text-xl font-bold text-foreground">{title}</h3>

        <p className="text-muted text-base leading-relaxed">{description}</p>
      </div>
    );
  }
);
