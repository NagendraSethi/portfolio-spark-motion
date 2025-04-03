
import React from 'react';
import { Github, Mail, Linkedin, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-10 border-t border-border/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70 text-sm">
              © {currentYear} Sethi Nagendrasundar Narahari. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4 items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-accent/10 hover:text-accent"
              asChild
            >
              <a 
                href="https://github.com/NagendraSethi" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-accent/10 hover:text-accent"
              asChild
            >
              <a 
                href="mailto:nagndra90@gmail.com" 
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-accent/10 hover:text-accent"
              asChild
            >
              <a 
                href="https://linkedin.com/in/NagendraSethi" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </Button>
            
            <Button 
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="ml-2 rounded-full"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
