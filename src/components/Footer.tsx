
import React from 'react';
import { Github, Mail, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-secondary/80 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70 text-sm">
              © {currentYear} Sethi Nagendrasundar Narahari. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4 items-center">
            <a 
              href="https://github.com/NagendraSethi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            
            <a 
              href="mailto:nagndra90@gmail.com" 
              className="text-foreground/70 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            
            <a 
              href="https://linkedin.com/in/NagendraSethi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            
            <button 
              onClick={scrollToTop}
              className="ml-2 p-2 rounded-full bg-foreground/5 text-foreground/70 hover:text-accent hover:bg-foreground/10 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
