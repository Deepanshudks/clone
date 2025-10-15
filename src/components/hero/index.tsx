import heroBackground from "../../assets/hero-background.jpg";
import { Button } from "@mui/material";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85%] sm:p-20 sm:py-28 p-4 items-center flex overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/30 backdrop-blur-xs" />
      </div>

      <div className=" z-10 sm:max-w-[65%] flex flex-col items-start  sm:mpx-6 pt-40 gap-3 justify-end-safe ">
        <h1 className="sm:text-4xl text-2xl font-semibold text-foreground leading-tight  animate-in fade-in slide-in-from-bottom-4 duration-700">
          Engineering Precision. Powering Innovation.
        </h1>
        <p className="text-foreground sm:text-lg text-md  py-4 font-medium tracking-wide">
          We design and manufacture advanced mechanical, electrical, and
          electronic systems that power industrial and infrastructure
          excellence.
        </p>
        <div>
          <Button
            variant="contained"
            className="!rounded-xl !normal-case !px-6 !py-3 !bg-primary  flex items-center gap-2 group"
          >
            Consult Our Experts
            <span className="inline-block transition-all duration-800 animate-horizontal">
              <ChevronRight />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
