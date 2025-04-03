
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Mail, Linkedin, FileText } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30 dark:from-blue-900/20 dark:to-purple-900/20"></div>
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center z-10">
        <AnimatedElement animation="fade-in" delay={100}>
          <p className="text-accent font-medium mb-2">Hello, I'm</p>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-in" delay={300}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4">
            Sethi Nagendrasundar Narahari
          </h1>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-in" delay={500}>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl">
            Full Stack Developer specializing in <span className="highlight">React.js</span>, <span className="highlight">Node.js</span>, and <span className="highlight">Data Visualization</span>
          </p>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-in" delay={700}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#contact">
                Contact Me
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">
                View Projects
              </a>
            </Button>
          </div>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-in" delay={900} className="mt-12">
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/NagendraSethi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:nagndra90@gmail.com" aria-label="Email">
                <Mail />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/NagendraSethi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Resume">
                <FileText />
              </a>
            </Button>
          </div>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-in" delay={1100} className="absolute bottom-8">
          <a href="#about" className="flex flex-col items-center text-foreground/60 hover:text-accent transition-colors">
            <span className="mb-2 text-sm">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default HeroSection;
