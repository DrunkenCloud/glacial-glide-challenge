import React from 'react';

const milestones = [
  { date: "Mar 05", year: "2026", label: "Launch of Website" },
  { date: "Apr 01", year: "2026", label: "Dataset Release & Submission Opens" },
  { date: "May 15", year: "2026", label: "Validation Begins" },
  { date: "Jun 05", year: "2026", label: "Final Closure of Submissions (Post Validation)" },
  { date: "Jun 20", year: "2026", label: "Announcement of Shortlisted Teams" },
  { date: "Jun 20 – Jul 05", year: "2026", label: "Conference Registration" },
];

const TimelineSection = () => {
  const now = new Date();

  // Helper to check if a milestone is past or present
  const isPast = (dateStr, yearStr) => {
    // We take the first date if it's a range (e.g., "Jun 20 – Jul 05" -> "Jun 20")
    const simpleDate = dateStr.split('–')[0].trim();
    const milestoneDate = new Date(`${simpleDate}, ${yearStr}`);
    return now >= milestoneDate;
  };

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

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/10" />

          <div className="space-y-10 md:space-y-16">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              const done = isPast(m.date, m.year);
              
              return (
                <div
                  key={i}
                  className={`scroll-reveal relative flex items-center gap-4 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className={`ml-16 md:ml-0 md:w-[45%] ${isLeft ? "md:pr-10" : "md:pl-10"}`}>
                    <div className="glass-card rounded-xl p-5 md:p-6 flex items-center gap-5 hover:border-primary/30 transition-colors">
                      <div className={`shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-lg flex flex-col items-center justify-center ${
                          done ? "bg-primary/20 border-2 border-primary" : "bg-primary/10 border-2 border-primary/30"
                        }`}
                      >
                        <p className="text-primary font-display font-bold text-xl md:text-2xl leading-tight text-center px-2">
                          {m.date}
                        </p>
                        <p className="text-primary/70 font-display text-sm md:text-base mt-1">
                          {m.year}
                        </p>
                      </div>

                      <div className="flex-1">
                        <p className="text-foreground font-semibold text-lg md:text-xl">
                          {m.label}
                        </p>
                        {done && (
                          <span className="inline-block mt-1 text-sm text-primary/80 font-medium">
                            ✓ Completed
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-5 h-5 rounded-full border-[3px] ${
                        done ? "bg-primary border-primary glow-cyan" : "bg-background border-primary/50"
                      }`}
                    />
                  </div>
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              );
            })}
          </div>

          {/* Final Conference Block - Also uses auto-check */}
          {(() => {
            const confDone = isPast("Jul 22", "2026");
            return (
              <div className="scroll-reveal mt-16 relative">
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 z-10">
                  <div className={`w-5 h-5 rounded-full border-[3px] ${
                    confDone ? "bg-accent border-accent glow-cyan" : "bg-background border-accent/50"
                  }`} />
                </div>

                <div className="ml-16 md:ml-0">
                  <div className={`glass-card rounded-xl p-8 md:p-10 text-center border-accent/30 ${confDone ? 'bg-accent/15' : 'bg-accent/5'}`}>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                      <div className="w-28 h-28 md:w-32 md:h-32 rounded-lg flex flex-col items-center justify-center bg-accent/20 border-2 border-accent">
                        <p className="text-accent font-display font-bold text-2xl md:text-3xl leading-tight text-center px-2">
                          Jul 22-24
                        </p>
                        <p className="text-accent/70 font-display text-base md:text-lg mt-1">
                          2026
                        </p>
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-foreground font-display font-bold text-2xl md:text-3xl mb-2">
                          Presentation @ Conference
                        </h3>
                        <p className="text-muted-foreground text-base md:text-lg">
                          NCVPRIPG 2026 · LNMIIT Jaipur
                        </p>
                        {confDone && <p className="text-accent text-sm mt-2 font-medium">Event Concluded</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;