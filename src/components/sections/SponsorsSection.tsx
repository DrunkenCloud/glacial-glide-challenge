import SponsorCard from "../SponsorCard";

// Configure sponsors here
const sponsors = [
  {
    name: "Geotech",
    image: "/geotech.jpeg",
  },
];

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

        {sponsors.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-8 md:gap-10 max-w-7xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="scroll-reveal w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.75rem)]"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <SponsorCard
                  name={sponsor.name}
                  image={sponsor.image}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="scroll-reveal text-center">
            <div className="glass-card rounded-lg px-10 py-5 inline-block">
              <span className="text-foreground/85 font-medium text-xl">
                To Be Announced
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SponsorsSection;
