import { Mail, ExternalLink } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative py-16 px-4 border-t border-border/30">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-10">
          <h3 className="font-display text-3xl font-bold text-gradient-ice mb-3">
            GLOFeagles '26
          </h3>
          <p className="text-muted-foreground text-base">
            CV Hackathon @ NCVPRIPG 2026 · LNMIIT Jaipur
          </p>
        </div>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe02fogGYG-ysD2in3E-MhY7OTo7DVQK2YSQJ7JjcXEzfPgbQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-display font-semibold px-10 py-4 rounded-lg text-lg glow-cyan hover:scale-105 transition-transform mb-12"
        >
          Register Now
        </a>

        <div className="flex flex-wrap items-center justify-center gap-8 mb-10 text-base">
          <a
            href="mailto:erpsupport@snuchennai.edu.in"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </a>
          <a
            href="https://ncvpripg2026.lnmiit.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            NCVPRIPG 2026
          </a>
        </div>

        <p className="text-muted-foreground/50 text-sm">
          © 2026 GLOFeagles '26 · Shiv Nadar University Chennai
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
