
import React from 'react';
import SectionHeading from './SectionHeading';
import AnimatedElement from './AnimatedElement';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <SectionHeading>About Me</SectionHeading>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <AnimatedElement animation="slide-in-left" className="md:col-span-7 space-y-6">
            <p className="text-lg">
              I'm a motivated <span className="highlight">Full Stack Developer</span> with experience in software development and data analysis. With a strong academic background and hands-on experience, I'm eager to contribute to dynamic projects and grow within a professional team.
            </p>
            <p className="text-lg">
              Currently pursuing my <span className="highlight">Master's in Computer Science</span> at Sardar Vallabhbhai National Institute of Technology (SVNIT), I have a solid foundation in both frontend and backend technologies. I completed my Bachelor's degree from Konark Institute of Science and Technology with a CGPA of 8.59.
            </p>
            <p className="text-lg">
              As a Full Stack Developer Intern at Kraft Heins India GCC Pvt. Ltd., I've been working on optimizing business processes through custom web applications, improving performance and user experience. My work has resulted in significant efficiency gains, including a 60% improvement in communication efficiency and a 40% reduction in survey form loss.
            </p>
            <div className="pt-4">
              <Button size="lg" className="flex items-center" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2" size={18} />
                  Download Resume
                </a>
              </Button>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-in-right" className="md:col-span-5">
            <div className="bg-background rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">Master of Technology in Computer Science Engineering</h4>
                    <span className="text-sm text-foreground/70">2023-2025</span>
                  </div>
                  <p>Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat</p>
                  <p className="text-sm text-foreground/70">CGPA: 6.77</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">Bachelor of Technology in Computer Science Engineering</h4>
                    <span className="text-sm text-foreground/70">2019-2023</span>
                  </div>
                  <p>Konark Institute of Science and Technology, Bhubaneswar</p>
                  <p className="text-sm text-foreground/70">CGPA: 8.59</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">Certifications</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Full Stack Web Development by PW Skills</li>
                  <li>IIT Guwahati NPTEL Course: Design & Implementation of Human-Computer Interface (Silver Badge)</li>
                </ul>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
