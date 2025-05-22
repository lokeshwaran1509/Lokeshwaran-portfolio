import React, { ReactNode } from 'react';

interface ContentSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
  title, 
  children, 
  className = '' 
}) => {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default ContentSection;