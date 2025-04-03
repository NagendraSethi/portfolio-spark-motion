
import React from 'react';
import SectionHeading from './SectionHeading';
import AnimatedElement from './AnimatedElement';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, Server, Laptop, Cloud } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code />,
      skills: ["JavaScript", "TypeScript", "Python", "C", "C++"]
    },
    {
      title: "Frontend Technologies",
      icon: <Globe />,
      skills: ["React.js", "Express.js", "Redux Toolkit", "Bootstrap", "Tailwind CSS", "SCSS"]
    },
    {
      title: "Backend Technologies",
      icon: <Server />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "Prisma", "FastAPI (Python)"]
    },
    {
      title: "Databases",
      icon: <Database />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Azure CosmosDB"]
    },
    {
      title: "Tools & Frameworks",
      icon: <Laptop />,
      skills: ["Git", "GitHub", "VS Code", "Postman"]
    },
    {
      title: "Cloud Services",
      icon: <Cloud />,
      skills: ["Azure Cloud", "Power BI"]
    }
  ];
  
  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <SectionHeading>Skills & Expertise</SectionHeading>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedElement 
              key={category.title}
              animation="scale-in"
              delay={index * 100}
            >
              <Card className="h-full border border-border/30 hover:border-accent/50 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm hover:translate-y-[-5px]">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 rounded-md bg-accent/10 text-accent">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="tech-badge bg-secondary/50 hover:bg-accent/20 hover:text-accent transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
