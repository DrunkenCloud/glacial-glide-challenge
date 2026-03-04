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
      <div className="relative z-10 text-center px-4 max-w-[90rem] mx-auto mt-1">
        {/* MODERATED PADDING (py-4) AND MARGIN (mb-8) */}
        <div className="inline-block mb-8 px-6 md:px-12 py-4 rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/30 shadow-md w-full max-w-[90%]">
          <h2 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wide leading-tight">
            <span className="text-glacial-frost">The 11th National Conference on</span>
            <span className="text-glacial-frost"> Computer Vision, Pattern Recognition,</span>
            <span className="text-glacial-frost"> Image Processing and Graphics</span>
            <div className="mt-2">
               <span className="text-primary font-extrabold text-xl md:text-2xl lg:text-3xl">(NCVPRIPG 2026)</span>
            </div>
          </h2>
        </div>

        {/* MODERATED FONT SIZE (lg:text-6xl) AND MARGIN (mb-8) */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
          <span className="text-gradient-ice">GLOFeagles '26</span>
          <br />
          {/* MODERATED mt-4 AND FONT SIZE */}
          <span className="text-foreground/90 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mt-2 block px-4">
            Automated Detection of Glacial Lakes from <br className="hidden md:block" /> Multi-Temporal Satellite Imagery
          </span>
        </h1>

        {/* MODERATED mb-10 */}
        <p className="text-muted-foreground text-base md:text-lg lg:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
          July 22–24, 2026 · LNMIIT Jaipur <br />
          <span className="opacity-80 text-sm md:text-base">Organized by Shiv Nadar University Chennai</span>
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe02fogGYG-ysD2in3E-MhY7OTo7DVQK2YSQJ7JjcXEzfPgbQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-display font-semibold px-10 py-4 rounded-lg text-xl glow-cyan hover:scale-105 transition-transform shadow-lg"
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
