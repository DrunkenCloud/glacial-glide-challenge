const SponsorsSection = () => {
  return (
    <section id="sponsors" className="relative py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="scroll-reveal text-center mb-12">
          <span className="text-primary text-lg font-medium tracking-widest uppercase">
            Supporters
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-5 text-foreground">
            Our Sponsors
          </h2>
        </div>

        <div className="scroll-reveal text-center">
          <div className="glass-card rounded-lg px-10 py-5 inline-block">
            <span className="text-foreground/85 font-medium text-xl">
              To Be Announced
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
