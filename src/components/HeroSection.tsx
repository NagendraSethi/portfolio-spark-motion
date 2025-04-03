
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Mail, Linkedin, FileText, Download } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(120,119,198,0.15)_0%,rgba(24,23,43,0)_100%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent"></div>
        
        {/* Decorative circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center z-10">
        <AnimatedElement animation="fade-in" delay={100}>
          <p className="text-accent font-medium mb-2 text-lg">Hello, I'm</p>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-in" delay={300}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            Sethi Nagendrasundar 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Narahari</span>
          </h1>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-in" delay={500}>
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl leading-relaxed">
            Full Stack Developer specializing in <span className="highlight">React.js</span>, <span className="highlight">Node.js</span>, and <span className="highlight">Data Visualization</span>
          </p>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-in" delay={700}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="rounded-full px-6 font-medium text-base" asChild>
              <a href="#contact">
                Contact Me
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-6 font-medium text-base" asChild>
              <a href="public/Nagendra_NIT_surat_CV.pdf" download="public/Nagendra_NIT_surat_CV.pdf">
                <Download className="mr-2" size={18} />
                Download Resume
              </a>
            </Button>
          </div>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-in" delay={900} className="mt-12">
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent/10 hover:text-accent" asChild>
              <a href="https://github.com/NagendraSethi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent/10 hover:text-accent" asChild>
              <a href="mailto:nagndra90@gmail.com" aria-label="Email">
                <Mail />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent/10 hover:text-accent" asChild>
              <a href="https://linkedin.com/in/NagendraSethi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </Button>
          </div>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-in" delay={1100} className="absolute bottom-8">
          <a href="#about" className="flex flex-col items-center text-foreground/60 hover:text-accent transition-colors">
            <span className="mb-2 text-sm">Scroll Down</span>
            <div className="w-8 h-8 rounded-full border-2 border-foreground/20 flex items-center justify-center">
              <ArrowDown size={16} className="animate-bounce" />
            </div>
          </a>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default HeroSection;
