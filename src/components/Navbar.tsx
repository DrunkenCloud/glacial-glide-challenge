import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const sections = [
    { id: "hero", label: "Home" },
    { id: "challenge", label: "Challenge" },
    { id: "tasks", label: "Tasks" },
    { id: "timeline", label: "Dates" },
    { id: "rules", label: "Rules" },
    { id: "prizes", label: "Prizes" },
    { id: "organizers", label: "Team" },
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.4;
      setIsVisible(window.scrollY > 80);

      let currentSection = sections[0].id;
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && marker >= element.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();

    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  useEffect(() => {
    const activeButton = buttonRefs.current[activeSection];
    if (!activeButton) {
      return;
    }

    activeButton.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeSection]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const activeIndex = sections.findIndex(
    (section) => section.id === activeSection,
  );

  return (
    <nav
      className={`fixed -bottom-px left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-t border-border/50 transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div
        ref={scrollContainerRef}
        className="hide-scrollbar flex items-stretch gap-0 overflow-x-auto"
      >
        {sections.map((section, index) => (
          <button
            key={section.id}
            ref={(element) => {
              buttonRefs.current[section.id] = element;
            }}
            onClick={() => scrollTo(section.id)}
            aria-label={`Go to ${section.label}`}
            className={`relative transition-colors ${
              index <= activeIndex
                ? "bg-primary/70 hover:bg-primary/80"
                : "bg-muted/60 hover:bg-muted"
            } shrink-0 w-24 sm:w-28 md:w-auto md:flex-1 h-12 rounded-none border-r border-border/30 last:border-r-0`}
          >
            <span
              className={`absolute inset-0 flex items-center justify-center text-[10px] md:text-xs font-medium tracking-wide ${
                index <= activeIndex
                  ? "text-primary-foreground/95"
                  : "text-muted-foreground"
              }`}
            >
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
