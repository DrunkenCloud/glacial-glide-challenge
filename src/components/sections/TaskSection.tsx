import { ClipboardList } from "lucide-react";

const TaskSection = () => {
  return (
    <section id="tasks" className="relative py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal text-center mb-10">
          <span className="text-primary text-base font-medium tracking-widest uppercase">
            What You'll Build
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-foreground">
            Task Details
          </h2>
        </div>

        <div className="scroll-reveal glass-card rounded-xl p-10 text-center">
          <ClipboardList className="w-16 h-16 mx-auto mb-6 text-primary" />
          <p className="text-xl text-foreground/85 font-medium">To Be Announced</p>
        </div>
      </div>
    </section>
  );
};

export default TaskSection;
