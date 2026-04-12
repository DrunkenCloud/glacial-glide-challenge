import PersonCard from "../PersonCard";

type GuestPerson = {
  name: string;
  photo: string;
  link?: string;
  subtext?: string;
};

const guests = {
  keynoteSpeaker: [
    {
      name: "Dr. Deepak Mishra",
      photo: "/Deepak_Mishra.jpg",
      link: "https://scholar.google.com/citations?user=N-bWm_wAAAAJ&hl=en",
      subtext: "Professor, Indian Institute of Space Science and Technology Trivandrum",
    },
  ] as GuestPerson[],
};

const GuestSection = () => {
  return (
    <section id="guests" className="relative py-12 md:py-16 px-4">
      <div className="max-w-screen-3xl mx-auto">
        <div className="scroll-reveal text-center mb-12">
          <span className="text-primary text-lg font-medium tracking-widest uppercase">
            Guest
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-5 text-foreground">
            Special Guests
          </h2>
        </div>

        {/* Keynote Speaker */}
        <div className="scroll-reveal mb-12">
          <h3 className="text-center text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
            Keynote Speaker
          </h3>
          <div className="flex justify-center">
            <div className="w-full max-w-md mx-auto">
              {guests.keynoteSpeaker.map((person, i) =>
                person.link ? (
                  <a
                    key={i}
                    href={person.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="scroll-reveal block"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-colors">
                      <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                        {person.photo ? (
                          <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-12 h-12 md:w-14 md:h-14 text-primary/50" />
                        )}
                      </div>
                      <h3 className="text-foreground font-semibold text-base md:text-lg">
                        {person.name}
                      </h3>
                      {person.subtext && (
                        <p className="text-muted-foreground text-sm mt-1">{person.subtext}</p>
                      )}
                    </div>
                  </a>
                ) : (
                  <div
                    key={i}
                    className="scroll-reveal"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-colors">
                      <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                        {person.photo ? (
                          <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-12 h-12 md:w-14 md:h-14 text-primary/50" />
                        )}
                      </div>
                      <h3 className="text-foreground font-semibold text-base md:text-lg">
                        {person.name}
                      </h3>
                      {person.subtext && (
                        <p className="text-muted-foreground text-sm mt-1">{person.subtext}</p>
                      )}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestSection;
