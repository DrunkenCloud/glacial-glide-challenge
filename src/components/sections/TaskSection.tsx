import { ClipboardList } from "lucide-react";

const TaskSection = () => {
  return (
    <section id="tasks" className="relative py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal text-center mb-12">
          <span className="text-primary text-lg font-medium tracking-widest uppercase">
            What You'll Build
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-5 text-foreground">
            Task Details
          </h2>
        </div>

        <div className="scroll-reveal glass-card rounded-xl p-12 text-center">
          <ClipboardList className="w-20 h-20 mx-auto mb-8 text-primary" />
          <p className="text-2xl text-foreground/85 font-medium">To Be Announced</p>
        </div>
      </div>
    </section>
  );
};

export default TaskSection;
