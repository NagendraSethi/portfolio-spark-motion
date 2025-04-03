
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
    <section id="skills" className="section bg-secondary/30">
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
              <Card className="h-full border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-md bg-accent/10 text-accent">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap">
                    {category.skills.map((skill) => (
                      <span key={skill} className="tech-badge">
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
