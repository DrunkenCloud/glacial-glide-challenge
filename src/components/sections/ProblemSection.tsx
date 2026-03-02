import { Badge } from "@/components/ui/badge";

const ProblemSection = () => {
  return (
    <section id="challenge" className="relative py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal">
          <span className="text-primary text-base font-medium tracking-widest uppercase">
            The Challenge
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-8 text-foreground">
            Problem Statement
          </h2>
        </div>

        <div className="scroll-reveal glass-card rounded-xl p-8 md:p-12 mb-10">
          <p className="text-foreground/85 leading-relaxed text-base md:text-lg lg:text-xl">
            Rapid glacier retreat driven by climate change has resulted in the widespread formation
            and expansion of glacial lakes in high-altitude mountain regions across the world.
            These lakes, particularly those dammed by loose moraines or remnant ice, pose a
            significant hazard in the form of Glacial Lake Outburst Floods (GLOFs). Accurate
            identification of glacial lakes is a fundamental prerequisite for reliable GLOF hazard
            assessment and improved flood prediction. In this challenge, participants will work with
            Sentinel-2 multispectral imagery available through the IEEE DataPort dataset to design a
            computationally efficient and accurate framework for glacial lake detection in complex
            mountainous terrain. The task encourages the integration of image processing techniques,
            spectral indices, terrain analysis, and deep learning models to effectively distinguish
            glacial lakes from snow, ice, debris-covered surfaces, and terrain shadows, while
            minimizing false alarms. Emphasis will be placed on developing a robust and
            well-validated model with clear performance evaluation and uncertainty assessment to
            ensure real-world applicability in GLOF risk mapping and early warning systems.
          </p>
        </div>

        <div className="scroll-reveal flex flex-wrap gap-4 mb-8">
          <Badge className="bg-glacial-ice/20 text-glacial-ice border-glacial-ice/30 hover:bg-glacial-ice/30 text-base px-4 py-2">
            🌍 SDG 9 – Infrastructure
          </Badge>
          <Badge className="bg-glacial-ice/20 text-glacial-ice border-glacial-ice/30 hover:bg-glacial-ice/30 text-base px-4 py-2">
            🏙️ SDG 11 – Sustainable Cities
          </Badge>
          <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 text-base px-4 py-2">
            🌡️ SDG 13 – Climate Action
          </Badge>
        </div>

        <div className="scroll-reveal glass-card rounded-lg p-5 inline-flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          <span className="text-base text-muted-foreground">
            <strong className="text-foreground">Dataset:</strong> Sentinel-2 multispectral imagery via IEEE DataPort
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
