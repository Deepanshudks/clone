import heroBackground from "../../assets/hero-background.jpg";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Hero background"
          className="w-full h-full object-cover scale-105 animate-in fade-in duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/90 backdrop-blur-md" />
      </div>

      <div className="relative z-10 py-40 max-w-6xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full">
        <h1
          className="
            sm:text-6xl text-4xl
            font-extrabold
            leading-tight
            text-transparent
            bg-clip-text
            bg-gradient-to-r from-primary to-blue-400 font-mono
            animate-in fade-in slide-in-from-bottom-8
            duration-1000
            tracking-tight
          "
        >
          We Are A Team Of Passionate Engineers And Innovators
        </h1>

        <p
          className="
            mt-6
            sm:text-lg text-base
            text-zinc-600
            max-w-3xl
            leading-relaxed
            animate-in fade-in slide-in-from-bottom-10
            duration-1000 delay-200
          "
        >
          Bringing together years of expertise in designing, developing, and
          delivering advanced systems and components across industries driven by
          precision, innovation, and collaboration.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
