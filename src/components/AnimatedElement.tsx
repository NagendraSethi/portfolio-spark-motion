
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'slide-in-bottom' | 'scale-in';
  delay?: number;
  threshold?: number;
  once?: boolean;
}

const AnimatedElement = ({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  once = true,
}: AnimatedElementProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, threshold]);

  return (
    <div
      ref={elementRef}
      className={cn(
        "transition-all duration-700",
        isVisible ? `animate-${animation}` : "opacity-0",
        className
      )}
      style={{ 
        animationDelay: delay > 0 ? `${delay}ms` : undefined,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
