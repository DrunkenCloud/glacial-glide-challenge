import { Trophy } from "lucide-react";

const PrizesSection = () => {
  return (
    <section id="prizes" className="relative py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal text-center mb-10">
          <span className="text-primary text-base font-medium tracking-widest uppercase">
            Rewards
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-foreground">
            Prizes & Recognition
          </h2>
        </div>

        <div className="scroll-reveal glass-card rounded-xl p-10 text-center mb-10">
          <Trophy className="w-16 h-16 mx-auto mb-6 text-primary" />
          <p className="text-xl text-foreground/85 font-medium">To Be Announced</p>
        </div>

        {/* Sponsors */}
        <div className="scroll-reveal text-center">
          <p className="text-muted-foreground text-base mb-6 tracking-widest uppercase">
            Sponsors
          </p>
          <div className="glass-card rounded-lg px-8 py-4 inline-block">
            <span className="text-foreground/85 font-medium text-lg">To Be Announced</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
