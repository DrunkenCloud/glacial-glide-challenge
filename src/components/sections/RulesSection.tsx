import { Users, Code, Clock, Shield } from "lucide-react";

const rules = [
  {
    icon: Users,
    text: "Maximum 4 members per team. Designate one team lead.",
  },
  {
    icon: Code,
    text: "Submit well-commented Python code, a concise approach summary, and a demo script.",
  },
  {
    icon: Clock,
    text: "Include inference time and system specifications in your submission.",
  },
  {
    icon: Shield,
    text: "Fair play is strictly enforced. Any form of plagiarism leads to disqualification.",
  },
];

const RulesSection = () => {
  return (
    <section id="rules" className="relative py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="scroll-reveal text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Guidelines
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Rules & Submissions
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {rules.map((rule, i) => (
            <div
              key={i}
              className="scroll-reveal glass-card rounded-xl p-5 flex gap-4 items-start"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <rule.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-foreground/85 leading-relaxed">{rule.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
