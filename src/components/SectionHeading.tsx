
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionHeading = ({ children, className, id }: SectionHeadingProps) => {
  return (
    <div className="flex flex-col items-start mb-16">
      <h2 
        id={id} 
        className={cn(
          "text-4xl md:text-5xl font-heading font-bold relative after:content-[''] after:absolute after:left-0 after:-bottom-3 after:h-2 after:w-20 after:bg-accent after:rounded-full",
          className
        )}
      >
        {children}
      </h2>
      <div className="h-[1px] w-full bg-border/40 mt-8" />
    </div>
  );
};

export default SectionHeading;
