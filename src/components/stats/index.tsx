import { achievementData } from "../../mock";
import { StatCard } from "../statsCard";

const StatsCards = () => {
  return (
    <>
      <div className="sm:px-28 p-4">
        <div className="grid grid-cols-1  gap-8 md:grid-cols-2">
          <p className="sm:text-4xl text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
            quaerat eum.
          </p>
          <p className=" mx-auto font-medium text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
            quaerat eum. Ea, reiciendis ipsam repellendus, quis nemo adipisci
            dignissimos minima ullam nam cum numquam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Praesentium provident excepturi quod?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus laborum autem voluptates!
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
