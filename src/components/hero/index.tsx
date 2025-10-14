import heroBackground from "../../assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Meet The Vision Of <span className="text-primary">1600 Humans</span>{" "}
          Whose Action Built{" "}
          <span className="text-primary">3000+ Digital Masterpieces</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
