import HeroSkater from "../HeroSkater";

const HeroSection = () => {
  return (
    <section
      id="hero"
      // FIX 1: Removed global overflow-hidden. overflow-x-hidden stops horizontal scrolling,
      // but allows vertical scrolling when zoomed in!
      className="relative min-h-screen h-auto flex flex-col overflow-x-hidden bg-background"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 parallax-mountains pointer-events-none" />
      <div className="absolute inset-0 parallax-mist pointer-events-none" />
      
      {/* THE LAKE: Changed to h-[33vh] so it's always tied to screen height */}
      <div className="absolute bottom-0 left-0 right-0 h-[33vh] bg-ice-surface pointer-events-none" />

      {/* Skater component */}
      <HeroSkater />

      {/* Ice crack lines - updated to use vh so they match the lake */}
      <div className="absolute bottom-[30vh] left-[10%] w-[30%] ice-crack-line rotate-12 opacity-40 pointer-events-none" />
      <div className="absolute bottom-[25vh] right-[15%] w-[25%] ice-crack-line -rotate-6 opacity-30 pointer-events-none" />
      <div className="absolute bottom-[35vh] left-[40%] w-[20%] ice-crack-line rotate-3 opacity-20 pointer-events-none" />

      {/* Floating ice particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
      </div>

      {/* CONTENT WRAPPER - THE REAL FIX 
          Relative positioning allows growth. 
          pb-[35vh] guarantees the text stops BEFORE the 33vh lake. 
      */}
      <div className="relative z-10 w-full max-w-[100rem] mx-auto flex-grow flex flex-col justify-center px-6 md:px-12 pt-6 md:pt-6 pb-[35vh]">
        
        {/* WIDE Flex Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16 w-full">
          
          {/* Left Column */}
          <div className="text-center lg:text-left w-full lg:w-[60%] xl:w-[65%]">
            <div className="mb-6 lg:mb-8">
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide leading-relaxed">
                <span className="text-glacial-frost">
                  The 11th National Conference on Computer Vision, Pattern Recognition, Image Processing and Graphics
                </span>
                <div className="mt-2">
                  <span className="text-primary font-extrabold text-3xl lg:text-4xl xl:text-5xl">
                    (NCVPRIPG 2026)
                  </span>
                </div>
              </h2>
            </div>

            <div className="px-6 py-10 md:px-12 md:py-14 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/30 shadow-md w-full">
              <h1 className="font-display font-bold leading-tight">
                <span className="text-gradient-ice inline-block text-4xl sm:text-5xl lg:text-6xl xl:text-[5.5rem] leading-[1.2] pb-2">
                  GLOFeagles '26
                </span>
              </h1>
              <span className="text-foreground/90 text-base md:text-lg lg:text-xl xl:text-2xl font-medium mt-6 block leading-snug">
                Automated Detection of Glacial Lakes from <br className="hidden xl:block" />
                Multi-Temporal Satellite Imagery
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="text-center lg:text-right w-full lg:w-[40%] xl:w-[35%] flex flex-col items-center lg:items-end">
            <p className="text-glacial-frost text-2xl lg:text-3xl xl:text-4xl mb-8 lg:mb-12 leading-tight font-semibold">
              July 22–24, 2026 <br />
              <span className="text-xl lg:text-2xl xl:text-3xl opacity-90 font-medium mt-2 block">
                · LNMIIT Jaipur
              </span>
              <span className="opacity-80 text-sm lg:text-base xl:text-xl mt-4 block font-normal tracking-wide lg:text-right">
                Organized by Shiv Nadar University Chennai
              </span>
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe02fogGYG-ysD2in3E-MhY7OTo7DVQK2YSQJ7JjcXEzfPgbQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground font-display font-bold px-12 py-5 rounded-xl text-xl lg:text-2xl xl:text-3xl glow-cyan hover:scale-105 transition-transform shadow-lg"
            >
              Register Now
            </a>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 z-20 pointer-events-none">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;