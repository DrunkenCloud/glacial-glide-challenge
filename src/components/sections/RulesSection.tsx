import { FileText } from "lucide-react";

const RulesSection = () => {
  return (
    <section id="rules" className="relative py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal text-center mb-12">
          <span className="text-primary text-lg font-medium tracking-widest uppercase">
            Guidelines
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-5 text-foreground">
            Rules & Submissions
          </h2>
        </div>

        <div className="scroll-reveal glass-card rounded-xl p-12 text-center">
          <FileText className="w-20 h-20 mx-auto mb-8 text-primary" />
          <p className="text-2xl text-foreground/85 font-medium">To Be Announced</p>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
