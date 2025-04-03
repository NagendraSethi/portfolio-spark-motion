
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
      <Card className="h-full border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-md overflow-hidden flex flex-col">
        {imageUrl && (
          <div className="w-full h-48 overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="space-y-4">
            {description}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="flex flex-wrap -m-1">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="tech-badge m-1"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-2 w-full">
            {githubLink && (
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <Github size={16} className="mr-2" />
                  Code
                </a>
              </Button>
            )}
            {liveLink && (
              <Button variant="default" size="sm" className="flex-1" asChild>
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="mr-2" />
                  Demo
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
