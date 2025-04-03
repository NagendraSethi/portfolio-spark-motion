
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedElement from './AnimatedElement';

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: React.ReactNode;
  technologies: string[];
  link?: string;
  delay?: number;
}

const ExperienceCard = ({
  title,
  company,
  duration,
  description,
  technologies,
  link,
  delay = 0,
}: ExperienceCardProps) => {
  return (
    <AnimatedElement animation="slide-in-bottom" delay={delay} className="h-full">
      <Card className="h-full border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl group hover:translate-y-[-5px] bg-card/50 backdrop-blur-sm">
        <CardHeader className="space-y-1">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <CardTitle className="text-xl mb-1 text-primary">{title}</CardTitle>
              <CardDescription className="text-base">
                {link ? (
                  <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent hover:underline"
                  >
                    {company}
                  </a>
                ) : (
                  company
                )}
              </CardDescription>
            </div>
            <Badge variant="secondary" className="text-xs font-normal px-3 py-1">
              {duration}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {description}
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap -m-1">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="tech-badge m-1 transition-all group-hover:bg-accent/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>
    </AnimatedElement>
  );
};

export default ExperienceCard;
