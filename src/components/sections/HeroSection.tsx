import HeroSkater from "../HeroSkater";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-start overflow-hidden pt-16"
    >
      {/* Parallax mountain layers */}
      <div className="absolute inset-0 parallax-mountains" />

      {/* Mist layer */}
      <div className="absolute inset-0 parallax-mist" />

      {/* Ice surface gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-ice-surface" />

      {/* Mouse-controlled skater on the lake */}
      <HeroSkater />

      {/* Ice crack lines */}
      <div className="absolute bottom-[30%] left-[10%] w-[30%] ice-crack-line rotate-12 opacity-40" />
      <div className="absolute bottom-[25%] right-[15%] w-[25%] ice-crack-line -rotate-6 opacity-30" />
      <div className="absolute bottom-[35%] left-[40%] w-[20%] ice-crack-line rotate-3 opacity-20" />

      {/* Floating ice particles */}
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-glacial-frost/30 animate-float-particle"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${5 + i * 5}%`,
            top: `${20 + (i % 5) * 12}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${3 + (i % 3)}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto -mt-2">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight text-gradient-ice">
          Computer Vision Challenge @ NCVPRIPG 2026
        </h2>

        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
          <span className="text-gradient-ice">GLOFeagles '26</span>
          <br />
          <span className="text-foreground/90 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mt-3 block">
            Automated Detection of Glacial Lakes from Multi-Temporal Satellite
            Imagery
          </span>
        </h1>

        <p className="text-muted-foreground text-base md:text-lg lg:text-xl mb-10 max-w-3xl mx-auto">
          July 22–24, 2026 · LNMIIT Jaipur · <br className="sm:hidden" />
          Organized by Shiv Nadar University Chennai
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe02fogGYG-ysD2in3E-MhY7OTo7DVQK2YSQJ7JjcXEzfPgbQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-display font-semibold px-10 py-4 rounded-lg text-xl glow-cyan hover:scale-105 transition-transform"
        >
          Register Now
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
