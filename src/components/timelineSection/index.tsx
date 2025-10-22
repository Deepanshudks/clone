const TimelineSection = () => {
  const years = [
    2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-gray-900 mb-16 font-bold text-3xl md:text-4xl">
          The <span className="text-blue-600">appinventiv</span> Story
        </h2>

        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -translate-y-1/2 z-0"></div>

          {/* Timeline points */}
          <div className="flex justify-between items-center relative z-10">
            {years.map((year, index) => (
              <div key={year} className="flex flex-col items-center">
                <div
                  className={`mb-2 rounded-full ${
                    index === 0 ? "bg-blue-600 w-4 h-4" : "bg-gray-400 w-3 h-3"
                  }`}
                ></div>
                <span
                  className={`text-center ${
                    index === 0
                      ? "text-gray-900 font-semibold text-sm md:text-base"
                      : "text-gray-500 font-normal text-xs md:text-sm"
                  }`}
                >
                  {year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
