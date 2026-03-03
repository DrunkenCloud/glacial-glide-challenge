import { Trophy, Award, Medal, FileText } from "lucide-react";

const prizes = [
  { icon: Trophy, label: "Winner", amount: "₹15,000", color: "text-yellow-400" },
  { icon: Award, label: "1st Runner-Up", amount: "₹10,000", color: "text-glacial-frost" },
  { icon: Medal, label: "2nd Runner-Up", amount: "₹5,000", color: "text-accent" },
];

const PrizesSection = () => {
  return (
    <section id="prizes" className="relative py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal text-center mb-12">
          <span className="text-primary text-lg font-medium tracking-widest uppercase">
            Rewards
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-5 text-foreground">
            Prizes & Recognition
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {prizes.map((prize, i) => (
            <div
              key={i}
              className="scroll-reveal glass-card rounded-xl p-10 md:p-12 text-center hover:border-primary/30 transition-colors"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <prize.icon className={`w-14 h-14 md:w-16 md:h-16 mx-auto mb-6 ${prize.color}`} />
              <p className="text-muted-foreground text-base md:text-lg mb-3">{prize.label}</p>
              <p className="font-display text-4xl md:text-5xl font-bold text-foreground">{prize.amount}</p>
            </div>
          ))}
        </div>

        <div className="scroll-reveal max-w-3xl mx-auto mb-12">
          <div className="glass-card rounded-xl p-8 md:p-10">
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-foreground font-semibold text-xl md:text-2xl mb-2">Recognition</h3>
                <p className="text-foreground/85 text-base md:text-lg leading-relaxed">
                  Possible Publication Ventures as an Outcome of Winning the Challenge
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsors */}
        <div className="scroll-reveal text-center">
          <p className="text-muted-foreground text-lg mb-8 tracking-widest uppercase">
            Sponsors
          </p>
          <div className="glass-card rounded-lg px-10 py-5 inline-block">
            <span className="text-foreground/85 font-medium text-xl">To Be Announced</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
