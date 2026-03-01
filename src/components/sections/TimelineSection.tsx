const milestones = [
  { date: "March 10, 2026", label: "Website Launch", done: true },
  { date: "March 20, 2026", label: "Dataset Release", done: false },
  { date: "April 1, 2026", label: "Submissions Open", done: false },
  { date: "June 5, 2026", label: "Submissions Close", done: false },
  { date: "June 20, 2026", label: "Results Announced", done: false },
  { date: "June 20 – July 5", label: "Conference Registration", done: false },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="relative py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="scroll-reveal text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Mark Your Calendar
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Important Dates
          </h2>
        </div>

        {/* Ice path timeline */}
        <div className="relative">
          {/* Vertical ice trail line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/10" />

          <div className="space-y-8 md:space-y-12">
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
                  {/* Content */}
                  <div
                    className={`ml-14 md:ml-0 md:w-[45%] ${
                      isLeft ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                    }`}
                  >
                    <div className="glass-card rounded-lg p-4 inline-block">
                      <p className="text-primary font-display font-semibold text-sm">
                        {m.date}
                      </p>
                      <p className="text-foreground font-medium mt-1">{m.label}</p>
                    </div>
                  </div>

                  {/* Dot on the line */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-3 h-3 rounded-full border-2 ${
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
