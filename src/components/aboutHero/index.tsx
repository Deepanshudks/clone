import heroBackground from "../../assets/hero-background.jpg";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center p-4 justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-50" />
      </div>

      <div className="relative  z-10 max-w-6xl pt-20 mx-auto font-mono flex flex-col items-center justify-center h-full">
        <h1 className="sm:text-5xl text-3xl font-semibold text-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700">
          Meet The Vision Of{" "}
          <span className="text-primary font-bold">1600 Humans</span>{" "}
          <span className="text-foreground font-extrabold">
            Whose Action Built
          </span>{" "}
          <span className="text-primary font-extrabold">
            3000+ Digital Masterpieces
          </span>
        </h1>
      </div>
    </section>
  );
};

export default AboutHero;
