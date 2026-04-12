import { useEffect } from "react";
import Navbar from "@/components/Navbar";

import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import TaskSection from "@/components/sections/TaskSection";
import TimelineSection from "@/components/sections/TimelineSection";
import RulesSection from "@/components/sections/RulesSection";
import PrizesSection from "@/components/sections/PrizesSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import GuestSection from "@/components/sections/GuestSection";
import OrganizersSection from "@/components/sections/OrganizersSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-glacial-gradient min-h-screen overflow-x-hidden pb-28">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <TaskSection />
      <TimelineSection />
      <RulesSection />
      <PrizesSection />
      <SponsorsSection />
      <GuestSection />
      <OrganizersSection />
      <FooterSection />
    </div>
  );
};

export default Index;
