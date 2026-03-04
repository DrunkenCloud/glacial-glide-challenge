import { Mail, ExternalLink } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative pt-16 pb-0 px-4 border-t border-border/30">
      <div className="max-w-7xl mx-auto text-center lg:text-left">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h3 className="font-display text-4xl font-bold text-gradient-ice mb-4">
              GLOFeagles '26
            </h3>
            <p className="text-muted-foreground text-lg">
              NCVPRIPG 2026 · LNMIIT Jaipur
            </p>
            <p className="text-muted-foreground/50 text-base mt-4">
              © 2026 GLOFeagles '26 · Shiv Nadar University Chennai
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 lg:items-end">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe02fogGYG-ysD2in3E-MhY7OTo7DVQK2YSQJ7JjcXEzfPgbQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground font-display font-semibold px-12 py-5 rounded-lg text-xl glow-cyan hover:scale-105 transition-transform"
            >
              Register Now
            </a>

            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-4 lg:gap-10 text-lg">
              <a
                href="mailto:glofeagles@snuchennai.edu.in"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
                Contact Us
              </a>
              <a
                href="https://ncvpripg2026.lnmiit.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-6 h-6" />
                NCVPRIPG 2026
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
