import heroBackground from "../../assets/hero-background.jpg";
import { Button } from "@mui/material";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-[65%] flex flex-col items-start  px-6 py-40 justify-start ">
        <h1 className="text-4xl font-light text-foreground leading-tight  animate-in fade-in slide-in-from-bottom-4 duration-700">
          Meet The Vision Of 1600 Humans Whose Action Built 3000+ Digital
          Masterpieces
        </h1>
        <p className="text-foreground text-lg  py-4 font-extralight tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          repellat numquam voluptatum ratione nostrum maiores enim! Assumenda a
          minima sapiente nostrum, laboriosam atque. Quidem obcaecati, omnis
          suscipit eum in, cumque nam alias recusandae, quia tempore soluta ea.
          Adipisci, aliquid aperiam.
        </p>
        <div>
          <Button
            variant="contained"
            className="rounded-lg !normal-case !p-3 flex items-center gap-2 group"
          >
            Consult Our Experts
            <span className="inline-block group-hover:animate-pulse">
              <ChevronRight />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
