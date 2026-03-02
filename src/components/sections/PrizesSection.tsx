import { Trophy } from "lucide-react";

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

        <div className="scroll-reveal glass-card rounded-xl p-12 text-center mb-12">
          <Trophy className="w-20 h-20 mx-auto mb-8 text-primary" />
          <p className="text-2xl text-foreground/85 font-medium">To Be Announced</p>
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
