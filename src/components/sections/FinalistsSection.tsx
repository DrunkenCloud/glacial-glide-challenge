import { Users } from "lucide-react";

const finalists = [
  { no: 1, leader: "Harshitha", team: "GlacioX", institute: "SNU Chennai" },
  { no: 2, leader: "IYYAPPAN", team: "Snow_Vision", institute: "Thiagarajar College of Engineering" },
  { no: 3, leader: "Linga", team: "Glacial Lake Detection", institute: "VIT Chennai" },
  { no: 4, leader: "Santhosh", team: "ICE KATTI", institute: "Vellore Institute of Technology" },
  { no: 5, leader: "Sharron Teena", team: "GlacierMIT", institute: "MIT, Chennai" },
];

const FinalistsSection = () => {
  return (
    <section id="finalists" className="relative py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="scroll-reveal text-center mb-12">
          <span className="text-primary text-lg font-medium tracking-widest uppercase">
            Finale
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-5 text-foreground">
            Top 5 Finalists
          </h2>
        </div>

        <div className="scroll-reveal glass-card rounded-xl p-8 md:p-12 mb-8">
          <p className="text-foreground/85 text-lg md:text-xl leading-relaxed mb-6 text-center">
            We are pleased to announce the list of Top 5 teams that have qualified for the
            Finale of <strong>GLOFeagles Challenge</strong>, hosted as a part of the 11th edition
            of <strong>NCVPRIPG 2026</strong>, based on the evaluation of the submitted results.
          </p>

          <div className="bg-background/30 rounded-xl p-4 md:p-6 border border-primary/20 mb-6">
            <p className="text-muted-foreground text-sm md:text-base text-center italic">
              The teams are listed below in alphabetical order based on the Team Leader's name and not according to their rank.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-primary/30">
                  <th className="py-4 px-4 text-primary font-display font-bold text-sm md:text-base uppercase tracking-wider">
                    S. No.
                  </th>
                  <th className="py-4 px-4 text-primary font-display font-bold text-sm md:text-base uppercase tracking-wider">
                    Team Leader Name
                  </th>
                  <th className="py-4 px-4 text-primary font-display font-bold text-sm md:text-base uppercase tracking-wider">
                    Team Name
                  </th>
                  <th className="py-4 px-4 text-primary font-display font-bold text-sm md:text-base uppercase tracking-wider">
                    Institute
                  </th>
                </tr>
              </thead>
              <tbody>
                {finalists.map((f, i) => (
                  <tr
                    key={f.no}
                    className="border-b border-border/30 hover:bg-primary/5 transition-colors"
                  >
                    <td className="py-4 px-4 text-foreground/85 text-base md:text-lg font-medium">
                      {f.no}
                    </td>
                    <td className="py-4 px-4 text-foreground text-base md:text-lg font-semibold">
                      {f.leader}
                    </td>
                    <td className="py-4 px-4 text-foreground/85 text-base md:text-lg">
                      {f.team}
                    </td>
                    <td className="py-4 px-4 text-foreground/85 text-base md:text-lg">
                      {f.institute}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="scroll-reveal">
          <div className="glass-card rounded-xl p-6 md:p-8 border-2 border-primary/40 bg-primary/5">
            <div className="flex items-center justify-center gap-3">
              <Users className="w-6 h-6 text-primary shrink-0" />
              <p className="text-foreground/90 text-base md:text-lg text-center">
                The qualified teams will present their work at <strong>LNMIIT Jaipur</strong> during the Final Presentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalistsSection;
