import { Upload, FileText, Github, Youtube, CheckCircle2, Download } from "lucide-react";

const SubmissionSection = () => {
  return (
    <section id="submission" className="relative py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="scroll-reveal text-center mb-12">
          <span className="text-primary text-lg font-medium tracking-widest uppercase">
            How to Submit
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-5 text-foreground">
            Submission Procedure
          </h2>
        </div>

        {/* Download Guidelines */}
        <div className="scroll-reveal mb-8">
          <a
            href="/GLOFeagles_26-Submission_Procedure.pdf"
            download
            className="glass-card rounded-xl p-6 flex items-center justify-between gap-4 hover:border-primary/40 transition-all group max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-lg md:text-xl font-display font-bold text-foreground">
                  Download Submission Guidelines
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  Complete procedure in PDF format
                </p>
              </div>
            </div>
            <div className="text-primary group-hover:translate-x-1 transition-transform">→</div>
          </a>
        </div>

        {/* Important Notice */}
        <div className="scroll-reveal mb-8">
          <div className="glass-card rounded-xl p-6 md:p-8 border-2 border-primary/40 bg-primary/5">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse shrink-0 mt-1.5" />
              <div>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  <strong className="text-primary">Important:</strong> Each team is allowed <strong>only one final submission</strong>. 
                  Please ensure all requirements are met before submitting.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Submission Format */}
          <div className="scroll-reveal glass-card rounded-xl p-10 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                <Upload className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Submission Format
                </h3>
                <p className="text-base md:text-lg text-foreground/85 mb-6">
                  Submit your solution to <a href="mailto:glofeagles@snuchennai.edu.in" className="text-primary hover:underline font-semibold">glofeagles@snuchennai.edu.in</a> with your GitHub repository link:
                </p>
              </div>
            </div>

            <div className="ml-16">
              <div className="p-6 rounded-lg bg-background/30 border-2 border-primary/30 max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <Github className="w-6 h-6 text-primary" />
                  <h4 className="text-lg font-display font-bold text-foreground">GitHub Repository</h4>
                </div>
                <p className="text-foreground/85 font-mono text-sm md:text-base">
                  TeamName_GLOF_Challenge
                </p>
                <p className="text-muted-foreground text-sm mt-3">
                  Ensure your repository is public or accessible to evaluators
                </p>
              </div>
            </div>
          </div>

          {/* Required Components */}
          <div className="scroll-reveal glass-card rounded-xl p-10 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                  Required Components
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  Your submission must include all of the following:
                </p>
              </div>
            </div>

            <ul className="ml-16 space-y-4">
              <li className="flex items-start gap-3 text-foreground/85 text-base md:text-lg">
                <span className="text-primary mt-1">•</span>
                <span><strong>Trained model files</strong> (.pth, .h5, .onnx)</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/85 text-base md:text-lg">
                <span className="text-primary mt-1">•</span>
                <span><strong>Source code</strong> (inference.py, train.py, model_architecture.py, utils.py)</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/85 text-base md:text-lg">
                <span className="text-primary mt-1">•</span>
                <span><strong>Python Notebook</strong> (.ipynb)</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/85 text-base md:text-lg">
                <span className="text-primary mt-1">•</span>
                <span><strong>Segmentation masks</strong> for all images</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/85 text-base md:text-lg">
                <span className="text-primary mt-1">•</span>
                <span><strong>Technical and evaluation reports</strong></span>
              </li>
              <li className="flex items-start gap-3 text-foreground/85 text-base md:text-lg">
                <span className="text-primary mt-1">•</span>
                <span><strong>README and requirements.txt</strong></span>
              </li>
              <li className="flex items-start gap-3 text-foreground/85 text-base md:text-lg">
                <span className="text-primary mt-1">•</span>
                <div>
                  <strong>Explanation video</strong> (max 5 minutes)
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Youtube className="w-4 h-4" />
                    <span>Public/Unlisted YouTube link included in README</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Evaluation Metrics */}
          <div className="scroll-reveal glass-card rounded-xl p-10 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                  Evaluation Metrics
                </h3>
              </div>
            </div>

            <div className="ml-16">
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                  <p className="text-lg font-bold text-primary">IoU (Primary Metric)</p>
                </div>
                <div className="p-4 rounded-lg bg-background/30">
                  <p className="text-lg font-semibold text-foreground">Precision</p>
                </div>
                <div className="p-4 rounded-lg bg-background/30">
                  <p className="text-lg font-semibold text-foreground">Recall</p>
                </div>
                <div className="p-4 rounded-lg bg-background/30">
                  <p className="text-lg font-semibold text-foreground">F1 Score</p>
                </div>
                <div className="p-4 rounded-lg bg-background/30 sm:col-span-2">
                  <p className="text-lg font-semibold text-foreground">Cohen's Kappa</p>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-background/30 border-l-4 border-primary">
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-3">
                  <strong className="text-primary">Additional Evaluation Criteria:</strong>
                </p>
                <ul className="space-y-2 text-foreground/85">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Robustness under challenging conditions (snow, debris, shadows, cloud cover)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Visualization quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Overall reproducibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Warning */}
          <div className="scroll-reveal glass-card rounded-xl p-8 md:p-10 border-2 border-accent/40 bg-accent/5">
            <p className="text-center text-base md:text-lg text-foreground/90 leading-relaxed">
              <strong className="text-accent">⚠️ Warning:</strong> Incomplete or inaccessible submissions may be disqualified.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionSection;
