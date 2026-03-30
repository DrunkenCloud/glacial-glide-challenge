import { Users, Code, FileCheck, BarChart3, Shield, Calendar } from "lucide-react";

const rules = [
  {
    icon: Users,
    title: "Eligibility & Participation",
    items: [
      "Participation is open to students, research scholars, and early-career researchers from recognised academic institutions and industry.",
      "Both individual participants and teams are allowed.",
    ],
  },
  {
    icon: Users,
    title: "Team Formation",
    items: [
      "Teams may consist of a maximum of three members.",
      "Each team must designate a Team Lead (Corresponding Member) who will be responsible for all communications and submissions.",
    ],
  },
  {
    icon: Calendar,
    title: "Dataset Access",
    items: [
      "The dataset will be provided only to registered participants/teams who have completed the registration process.",
      "Registration closes on April 20, 2026.",
    ],
  },
  {
    icon: FileCheck,
    title: "Submission Requirements",
    items: [
      "Pre-trained model weights or checkpoints must be provided to enable direct evaluation without retraining.",
      "Model-generated outputs (segmentation masks or detection results) on the provided test dataset must be submitted.",
      "Participants must include an ablation study or justification of key design choices to strengthen their submission.",
      "Final submissions close on June 5, 2026.",
    ],
  },
  {
    icon: BarChart3,
    title: "Performance & System Specifications",
    items: [
      "Participants recommended metrics for evaluation: (i) Mean Intersection over Union (mIoU), (ii) F1 Score, (iii) Precision, (iv) Recall, (v) Accuracy, (vi) Cohen's Kappa (κ)",
      "Usage of state-of-the-art metrics and methodological solutions are welcome; however, participants need to justify using them appropriately on the shared dataset.",
    ],
  },
  {
    icon: Shield,
    title: "Fair Practice Policy",
    items: [
      "All participants must adhere to ethical and fair practices.",
      "Any form of plagiarism, data misuse, or unfair advantage will result in immediate disqualification of the entire team.",
    ],
  },
];

const RulesSection = () => {
  return (
    <section id="rules" className="relative py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="scroll-reveal text-center mb-12">
          <span className="text-primary text-lg font-medium tracking-widest uppercase">
            Guidelines
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-5 text-foreground">
            Challenge Rules & Guidelines
          </h2>
        </div>

        <div className="space-y-6">
          {rules.map((rule, i) => (
            <div
              key={i}
              className="scroll-reveal glass-card rounded-xl p-6 md:p-8"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <rule.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-display font-semibold text-xl md:text-2xl pt-2">
                  {rule.title}
                </h3>
              </div>
              <ul className="space-y-3 ml-16">
                {rule.items.map((item, j) => (
                  <li key={j} className="text-foreground/85 text-base md:text-lg leading-relaxed flex gap-3">
                    <span className="text-primary shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
