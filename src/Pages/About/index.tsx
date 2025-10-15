import { Clock } from "lucide-react";

const About = () => {
  return (
    <div className=" h-screen w-screen text-center items-center flex justify-center text-primary">
      <span className="px-2">
        {" "}
        <Clock />{" "}
      </span>
      {"  "}
      maintenance
    </div>
  );
};

export default About;
