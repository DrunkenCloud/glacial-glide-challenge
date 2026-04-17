import { ClipboardList, CheckCircle2, Target } from "lucide-react";

const TaskSection = () => {
  return (
    <section id="tasks" className="relative py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="scroll-reveal text-center mb-12">
          <span className="text-primary text-lg font-medium tracking-widest uppercase">
            What You'll Build
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-5 text-foreground">
            Task Details
          </h2>
        </div>

        <div className="space-y-8">
          {/* Main Task Details */}
          <div className="scroll-reveal glass-card rounded-xl p-10 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                <ClipboardList className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                  Computational Approaches
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  Participants may use any computational approach, including:
                </p>
              </div>
            </div>
            
            <ul className="space-y-3 ml-16 text-foreground/85 text-base md:text-lg">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Spectral index–based methods (e.g., NDWI)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Classical image processing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Machine learning, or Deep learning techniques</span>
              </li>
            </ul>

            <div className="mt-8 p-6 rounded-lg bg-background/30 border-l-4 border-primary">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                <strong className="text-primary">Dataset Restrictions:</strong> Only the dataset(s) provided for this challenge may be used.
              </p>
              <ul className="mt-4 space-y-2 ml-6 text-foreground/85 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">×</span>
                  <span>Use of external labeled datasets or additional ground truth is strictly prohibited</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Permitted preprocessing steps include cloud masking, terrain correction, atmospheric correction, and shadow handling, as per the specified guidelines</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Primary Objective */}
          <div className="scroll-reveal glass-card rounded-xl p-10 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Primary Objective
                </h3>
                <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
                  The primary objective is to assess the accuracy, robustness, and reliability of glacial lake detection in complex high-altitude environments.
                </p>
              </div>
            </div>
            
            <div className="ml-16 p-6 rounded-lg bg-background/30">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                <strong className="text-primary">Key Challenge:</strong> Particular emphasis will be placed on the ability to distinguish glacial lakes from spectrally similar features, including:
              </p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-foreground/85">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Snow</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/85">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Clean ice</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/85">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Debris-covered ice</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/85">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Terrain shadows</span>
                </div>
              </div>
            </div>
          </div>

          {/* Qualitative Assessment */}
          <div className="scroll-reveal glass-card rounded-xl p-10 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                  Qualitative Assessment
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  Submissions will also be assessed on:
                </p>
              </div>
            </div>
            
            <ul className="space-y-4 ml-16">
              <li className="flex items-start gap-3 text-foreground/85 text-base md:text-lg">
                <span className="text-primary font-bold mt-1">1.</span>
                <span>Clarity and completeness of the methodological description</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/85 text-base md:text-lg">
                <span className="text-primary font-bold mt-1">2.</span>
                <span>Computational efficiency</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/85 text-base md:text-lg">
                <span className="text-primary font-bold mt-1">3.</span>
                <span>Suitability for operational glacial lake monitoring and GLOF hazard assessment</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/85 text-base md:text-lg">
                <span className="text-primary font-bold mt-1">4.</span>
                <span>Solutions balancing detection accuracy, robustness, and scalability will be preferred</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/85 text-base md:text-lg">
                <span className="text-primary font-bold mt-1">5.</span>
                <span>Novelty of the Challenge</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskSection;
