const milestones = [
  { date: "Mar 10", year: "2026", label: "Website Launch", done: true },
  { date: "Mar 20", year: "2026", label: "Dataset Release", done: false },
  { date: "Apr 1", year: "2026", label: "Submissions Open", done: false },
  { date: "Jun 5", year: "2026", label: "Submissions Close", done: false },
  { date: "Jun 20", year: "2026", label: "Results Announced", done: false },
  { date: "Jun 20 – Jul 5", year: "2026", label: "Conference Registration", done: false },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="relative py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal text-center mb-12">
          <span className="text-primary text-lg font-medium tracking-widest uppercase">
            Mark Your Calendar
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-5 text-foreground">
            Important Dates
          </h2>
        </div>

        {/* Ice path timeline */}
        <div className="relative">
          {/* Vertical ice trail line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/10" />

          <div className="space-y-10 md:space-y-16">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`scroll-reveal relative flex items-center gap-4 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Content Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[45%] ${
                      isLeft ? "md:pr-10" : "md:pl-10"
                    }`}
                  >
                    <div className="glass-card rounded-xl p-5 md:p-6 flex items-center gap-5 hover:border-primary/30 transition-colors">
                      {/* Date Square */}
                      <div className={`shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-lg flex flex-col items-center justify-center ${
                        m.done ? "bg-primary/20 border-2 border-primary" : "bg-primary/10 border-2 border-primary/30"
                      }`}>
                        <p className="text-primary font-display font-bold text-xl md:text-2xl leading-tight text-center px-2">
                          {m.date}
                        </p>
                        <p className="text-primary/70 font-display text-sm md:text-base mt-1">
                          {m.year}
                        </p>
                      </div>

                      {/* Details */}
                      <div className="flex-1">
                        <p className="text-foreground font-semibold text-lg md:text-xl">{m.label}</p>
                        {m.done && (
                          <span className="inline-block mt-1 text-sm text-primary/80 font-medium">
                            ✓ Completed
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Dot on the line */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-5 h-5 rounded-full border-[3px] ${
                        m.done
                          ? "bg-primary border-primary glow-cyan"
                          : "bg-background border-primary/50"
                      }`}
                    />
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
