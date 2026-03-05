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
      <div className="absolute inset-x-0 top-16 bottom-1/3 z-10 flex items-center">
        <div className="w-full px-4 max-w-[90rem] mx-auto">
          <div className="grid gap-4 lg:gap-8 lg:grid-cols-[6fr_4fr] lg:items-center">
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <h2 className="font-display text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wide leading-tight">
                  <span className="text-glacial-frost">
                    The 11th National Conference on
                  </span>
                  <span className="text-glacial-frost">
                    {" "}
                    Computer Vision, Pattern Recognition,
                  </span>
                  <span className="text-glacial-frost">
                    {" "}
                    Image Processing and Graphics
                  </span>
                  <div className="mt-2">
                    <span className="text-primary font-extrabold text-xl md:text-2xl lg:text-3xl">
                      (NCVPRIPG 2026)
                    </span>
                  </div>
                </h2>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-8 leading-tight">
                <div className="px-6 md:px-12 py-6 md:py-12 rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/30 shadow-md w-full max-w-[90%] mx-auto lg:mx-0">
                  <span className="text-gradient-ice inline-block text-[1.1em] leading-[1.1] origin-left">
                    GLOFeagles '26
                  </span>
                  <br />
                  <span className="text-foreground/90 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium mt-4 block">
                    Automated Detection of Glacial Lakes from{" "}
                    <br className="hidden md:block" /> Multi-Temporal Satellite
                    Imagery
                  </span>
                </div>
              </h1>
            </div>

            <div className="text-center lg:text-right">
              <p className="text-glacial-frost text-lg md:text-xl lg:text-2xl mb-5 lg:mb-10 max-w-3xl mx-auto lg:mr-0 leading-relaxed">
                July 22–24, 2026 · LNMIIT Jaipur <br />
                <span className="opacity-80 text-sm md:text-base">
                  Organized by Shiv Nadar University Chennai
                </span>
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
          </div>
        </div>
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
