
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionHeading = ({ children, className, id }: SectionHeadingProps) => {
  return (
    <h2 id={id} className={cn("section-heading", className)}>
      {children}
    </h2>
  );
};

export default SectionHeading;
