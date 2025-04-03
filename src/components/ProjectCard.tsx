
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

interface ProjectCardProps {
  title: string;
  description: React.ReactNode;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  imageUrl?: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubLink,
  liveLink,
  imageUrl,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <AnimatedElement animation="slide-in-bottom" delay={delay} className="h-full">
      <Card className="h-full border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl overflow-hidden flex flex-col group hover:translate-y-[-5px] bg-card/50 backdrop-blur-sm">
        {imageUrl && (
          <div className="w-full h-56 overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-xl text-primary">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="space-y-4 text-muted-foreground">
            {description}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="flex flex-wrap -m-1">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="tech-badge m-1 bg-secondary/50"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-3 w-full">
            {githubLink && (
              <Button variant="outline" size="sm" className="flex-1 rounded-full" asChild>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <Github size={16} className="mr-2" />
                  Code
                </a>
              </Button>
            )}
            {liveLink && (
              <Button variant="default" size="sm" className="flex-1 rounded-full" asChild>
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </AnimatedElement>
  );
};

export default ProjectCard;
