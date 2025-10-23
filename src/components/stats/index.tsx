import { achievementData } from "../../mock";
import { StatCard } from "../statsCard";

const StatsCards = () => {
  return (
    <>
      <div className="sm:px-28 p-4">
        <div className="grid grid-cols-1  gap-8 md:grid-cols-2">
          <p className="sm:text-4xl text-2xl">
            At Precision Core Tech Solutions, every component we produce
            reflects our commitment to accuracy, quality, and dependability.
          </p>
          <p className=" mx-auto font-medium text-lg">
            Founded with a vision to bridge innovation and industrial
            reliability, we deliver customized, high-quality products that serve
            critical sectors such as power, infrastructure, automation,
            manufacturing, and research.
          </p>
        </div>
        <div className="py-4 sm:p-8 bg-[--color-background] font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
            {achievementData.map((item, index) => (
              <StatCard
                key={index}
                metric={item.metric.toString()}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="h-12 bg-gradient-to-b from-white to white via-zinc-50"></div>
    </>
  );
};

export default StatsCards;
