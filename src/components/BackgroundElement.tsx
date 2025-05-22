import React from 'react';

interface BackgroundElementProps {
  className?: string;
}

const BackgroundElement: React.FC<BackgroundElementProps> = ({ className }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Gradient Orb - Top Right */}
      <div 
        className="absolute -top-20 -right-20 w-96 h-96 bg-primary-500/20 dark:bg-primary-600/10 rounded-full blur-3xl" 
        style={{ animation: 'float 20s ease-in-out infinite' }}
      />
      
      {/* Gradient Orb - Bottom Left */}
      <div 
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary-500/20 dark:bg-secondary-600/10 rounded-full blur-3xl" 
        style={{ animation: 'float 25s ease-in-out infinite reverse' }}
      />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
      
      {/* Animated Dots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-accent-500/50 dark:bg-accent-400/30"
        style={{ animation: 'pulse 4s ease-in-out infinite' }}
      />
      <div className="absolute top-3/4 right-1/3 w-3 h-3 rounded-full bg-secondary-500/50 dark:bg-secondary-400/30"
        style={{ animation: 'pulse 6s ease-in-out infinite 1s' }}
      />
      <div className="absolute bottom-1/4 left-2/3 w-2 h-2 rounded-full bg-primary-500/50 dark:bg-primary-400/30"
        style={{ animation: 'pulse 5s ease-in-out infinite 2s' }}
      />
    </div>
  );
};

export default BackgroundElement;