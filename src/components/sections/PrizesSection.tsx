import { Trophy, Award, Medal, FileText, GraduationCap } from "lucide-react";

const prizes = [
  { icon: Trophy, label: "Winner", amount: "₹10,000", color: "text-yellow-400" },
  { icon: Award, label: "1st Runner-Up", amount: "₹7,000", color: "text-glacial-frost" },
  { icon: Medal, label: "2nd Runner-Up", amount: "₹5,000", color: "text-accent" },
];

const PrizesSection = () => {
  return (
    <section id="prizes" className="relative py-24 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Rewards
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Prizes & Recognition
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {prizes.map((prize, i) => (
            <div
              key={i}
              className="scroll-reveal glass-card rounded-xl p-8 text-center hover:border-primary/30 transition-colors"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <prize.icon className={`w-10 h-10 mx-auto mb-4 ${prize.color}`} />
              <p className="text-muted-foreground text-sm mb-2">{prize.label}</p>
              <p className="font-display text-3xl font-bold text-foreground">{prize.amount}</p>
            </div>
          ))}
        </div>

        <div className="scroll-reveal grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="glass-card rounded-lg p-4 flex items-center gap-3">
            <FileText className="w-5 h-5 text-primary shrink-0" />
            <span className="text-sm text-foreground/85">Collaboration on research paper</span>
          </div>
          <div className="glass-card rounded-lg p-4 flex items-center gap-3">
            <GraduationCap className="w-5 h-5 text-primary shrink-0" />
            <span className="text-sm text-foreground/85">E-certificates for all participants</span>
          </div>
        </div>

        {/* Sponsors */}
        <div className="scroll-reveal mt-16 text-center">
          <p className="text-muted-foreground text-sm mb-6 tracking-widest uppercase">
            Sponsors
          </p>
          <div className="flex items-center justify-center gap-8">
            <div className="glass-card rounded-lg px-6 py-3">
              <span className="font-display font-bold text-foreground/70">BAI Petro</span>
            </div>
            <div className="glass-card rounded-lg px-6 py-3">
              <span className="text-muted-foreground text-sm italic">More sponsors TBD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
