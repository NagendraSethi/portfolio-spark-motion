
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links with improved handling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      e.preventDefault();
      
      const targetId = href.substring(1);
      if (!targetId) return;
      
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset = 80; // To account for fixed navbar
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    };
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick as unknown as EventListener);
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick as unknown as EventListener);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Background decorative elements */}
      <div className="fixed inset-0 -z-20 grid-pattern opacity-30"></div>
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-background to-background via-blue-50/30 dark:via-blue-950/10"></div>
      </div>
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
