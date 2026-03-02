const Navbar = () => {
  const sections = [
    { id: "hero", label: "Home" },
    { id: "challenge", label: "Challenge" },
    { id: "tasks", label: "Tasks" },
    { id: "timeline", label: "Dates" },
    { id: "rules", label: "Rules" },
    { id: "prizes", label: "Prizes" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo("hero")}
            className="font-display font-bold text-xl text-gradient-ice"
          >
            GLOFeagles '26
          </button>

          <div className="hidden md:flex items-center gap-8">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-base text-muted-foreground hover:text-primary transition-colors"
              >
                {s.label}
              </button>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe02fogGYG-ysD2in3E-MhY7OTo7DVQK2YSQJ7JjcXEzfPgbQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold bg-primary text-primary-foreground px-5 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
