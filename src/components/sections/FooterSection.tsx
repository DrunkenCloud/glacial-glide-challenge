import { Mail, ExternalLink } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative py-16 px-4 border-t border-border/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="font-display text-2xl font-bold text-gradient-ice mb-2">
            GLOFeagles '26
          </h3>
          <p className="text-muted-foreground text-sm">
            CV Hackathon @ NCVPRIPG 2026 · LNMIIT Jaipur
          </p>
        </div>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe02fogGYG-ysD2in3E-MhY7OTo7DVQK2YSQJ7JjcXEzfPgbQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-display font-semibold px-8 py-3 rounded-lg glow-cyan hover:scale-105 transition-transform mb-10"
        >
          Register Now
        </a>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm">
          <a
            href="mailto:glofeagles26@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            Contact Us
          </a>
          <a
            href="https://ncvpripg2026.lnmiit.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            NCVPRIPG 2026
          </a>
        </div>

        <p className="text-muted-foreground/50 text-xs">
          © 2026 GLOFeagles '26 · Shiv Nadar University Chennai
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
