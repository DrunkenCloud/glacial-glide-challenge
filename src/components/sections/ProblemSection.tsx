const ProblemSection = () => {
  return (
    <section id="challenge" className="relative py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="scroll-reveal">
          <span className="text-primary text-lg font-medium tracking-widest uppercase">
            The Challenge
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-5 mb-10 text-foreground">
            Problem Statement
          </h2>
        </div>

        <div className="scroll-reveal glass-card rounded-xl p-10 md:p-14 mb-12">
          <p className="text-foreground/85 leading-relaxed text-lg md:text-lg lg:text-xl text-left md:text-justify">
            Rapid glacier retreat driven by climate change has resulted in the
            widespread formation and expansion of glacial lakes in high-altitude
            mountain regions across the world. These lakes, particularly those
            dammed by loose moraines or remnant ice, pose a significant hazard
            in the form of Glacial Lake Outburst Floods (GLOFs). Accurate
            identification of glacial lakes is a fundamental prerequisite for
            reliable GLOF hazard assessment and improved flood prediction.
            <br />
            <br />
            In this challenge, participants will work with Satellite
            multispectral imagery available through the given dataset to
            design a computationally efficient and accurate framework for
            glacial lake detection in complex mountainous terrain. The task
            encourages the integration of image processing techniques, spectral
            indices, terrain analysis, and deep learning models to effectively
            distinguish glacial lakes from snow, ice, debris-covered surfaces,
            and terrain shadows, while minimizing false alarms. Emphasis will be
            placed on developing a robust and well-validated model with clear
            performance evaluation and uncertainty assessment to ensure
            real-world applicability in GLOF risk mapping and early warning
            systems.
          </p>
          <div className="flex w-full justify-center items-center gap-6 md:gap-12 lg:gap-16 mt-8">
            <img
              src="/sdg9.webp"
              alt="SDG 9 - Industry, Innovation and Infrastructure"
              className="w-[28%] max-w-[150px] md:max-w-[170px] lg:max-w-[200px] object-contain"
            />
            <img
              src="/sdg11.webp"
              alt="SDG 11 - Sustainable Cities and Communities"
              className="w-[28%] max-w-[150px] md:max-w-[170px] lg:max-w-[200px] object-contain"
            />
            <img
              src="/sdg13.webp"
              alt="SDG 13 - Climate Action"
              className="w-[28%] max-w-[150px] md:max-w-[170px] lg:max-w-[200px] object-contain"
            />
          </div>
        </div>
        <div className="scroll-reveal glass-card rounded-lg p-6 w-full flex items-start md:items-center gap-4 md:gap-5">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />

          <div className="flex flex-col md:flex-row md:items-center gap-3 w-full">
            <span className="text-lg text-muted-foreground">
              <strong className="text-foreground">Dataset:</strong> Satellite
              multispectral imagery
            </span>

            <span className="w-fit md:ml-auto px-3 py-1 text-s font-semibold rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
              To Be Released
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
