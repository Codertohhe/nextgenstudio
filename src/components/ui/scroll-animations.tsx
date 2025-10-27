import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollReveal: React.FC<ScrollAnimationProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  return (
    <div
      ref={ref}
      className={`${inView ? 'text-reveal revealed' : 'text-reveal'} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const UnderlineAnimation: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && elementRef.current) {
      elementRef.current.classList.add('active');
    }
  }, [inView]);

  return (
    <span
      ref={(node) => {
        ref(node);
        if (elementRef.current) {
          elementRef.current = node;
        }
      }}
      className={`underline-animate ${className}`}
    >
      {children}
    </span>
  );
};

export const FadeInUp: React.FC<ScrollAnimationProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        inView 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-6 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};