import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// interface Stat {
//   value: number;
//   suffix?: string;
//   label: string;
//   color: string;
// }

const AboutSection: React.FC = () => {
  // const stats: Stat[] = [
  //   {
  //     value: 0o5,
  //     suffix: "",
  //     label: "Global Excellence Centers",
  //     color: "bg-pink-200",
  //   },
  //   {
  //     value: 50,
  //     suffix: "+",
  //     label: "Awards & Certifications",
  //     color: "bg-lime-200",
  //   },
  //   {
  //     value: 90,
  //     suffix: "%",
  //     label: "Returning Client Rate",
  //     color: "bg-sky-200",
  //   },
  //   {
  //     value: 94.7,
  //     suffix: "%",
  //     label: "Employee Happiness Index",
  //     color: "bg-yellow-100",
  //   },
  // ];

  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const paragraph = paragraphRef.current;
    if (!paragraph) return;

    const words = paragraph.innerText.split(" ");
    paragraph.innerHTML = words
      .map((word) => `<span class="word">${word} </span>`)
      .join("");

    gsap.fromTo(
      paragraph.querySelectorAll(".word"),
      { color: "#B6B4B4" },
      {
        color: "#424345",
        scrollTrigger: {
          trigger: paragraph,
          start: "top 90%",
          end: "bottom 20%",
          scrub: true,
        },
        stagger: 0.05,
        duration: 0.3,
      }
    );
  }, []);

  // const StatCard: React.FC<Stat> = ({ value, suffix = "", label, color }) => {
  //   const ref = useRef<HTMLDivElement>(null);
  //   const isInView = useInView(ref, { once: true });

  //   const count = useMotionValue(0);
  //   const rounded = useTransform(count, (latest) =>
  //     value % 1 === 0 ? Math.round(latest) : parseFloat(latest.toFixed(1))
  //   );

  //   const [displayValue, setDisplayValue] = useState<number>(0);

  //   useEffect(() => {
  //     const unsubscribe = rounded.on("change", (latest) =>
  //       setDisplayValue(latest)
  //     );

  //     if (isInView) animate(count, value, { duration: 2, ease: "easeOut" });

  //     return () => unsubscribe();
  //   }, [isInView, value, count, rounded]);

  //   return (
  //     <div
  //       ref={ref}
  //       className={`${color} p-8 rounded-xl shadow-lg hover:shadow-xl transform transition-transform duration-300`}
  //     >
  //       <motion.span className="text-5xl font-medium text-black mb-2 block">
  //         {displayValue}
  //         {suffix}
  //       </motion.span>
  //       <div className="text-md text-gray-700 font-medium">{label}</div>
  //     </div>
  //   );
  // };

  return (
    <div className="p-8 flex flex-col items-center justify-center gap-18">
      <div className="flex items-center justify-center">
        <div
          ref={paragraphRef}
          className="text-xl leading-normal font-medium max-w-5xl text-center"
        >
          Precesion Core Tech Solutions Pvt. Ltd. is a multidisciplinary
          engineering and manufacturing company specializing in the design and
          production of high-precision mechanical, electrical, electronic,
          hydraulic, and pneumatic systems. Founded with a vision to bridge
          innovation and industrial reliability, we deliver customized,
          high-quality products that serve critical sectors such as power,
          infrastructure, automation, manufacturing, and research. Our
          integrated approach combines engineering design, fabrication, and
          system integration under one roof allowing us to deliver complete
          solutions that meet complex technical and operational needs. At
          Precesion Core Tech Solutions, every component we produce reflects our
          commitment to accuracy, quality, and dependability.
        </div>
      </div>

      {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div> */}
    </div>
  );
};

export default AboutSection;
