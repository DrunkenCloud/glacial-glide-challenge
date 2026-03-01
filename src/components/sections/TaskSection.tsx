import { Search, Eye, BarChart3 } from "lucide-react";

const tasks = [
  {
    icon: Search,
    title: "Detect Glacial Lakes",
    description:
      "Use image processing, spectral indices, terrain analysis, and deep learning to identify glacial lakes in complex mountainous terrain from Sentinel-2 imagery.",
  },
  {
    icon: Eye,
    title: "Distinguish & Minimize False Alarms",
    description:
      "Effectively separate glacial lakes from snow, ice, debris-covered surfaces, and terrain shadows while minimizing false positives.",
  },
  {
    icon: BarChart3,
    title: "Evaluate & Quantify Uncertainty",
    description:
      "Develop robust performance evaluation metrics and uncertainty assessment to ensure real-world applicability in GLOF risk mapping.",
  },
];

const TaskSection = () => {
  return (
    <section id="tasks" className="relative py-24 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            What You'll Build
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Task Details
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tasks.map((task, i) => (
            <div
              key={i}
              className="scroll-reveal glass-card rounded-xl p-6 hover:border-primary/30 transition-colors group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <task.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3 text-foreground">
                {task.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {task.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaskSection;
