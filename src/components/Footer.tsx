import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              <span className="text-primary-600 dark:text-primary-400">Your</span>Brand
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-xs">
              Creating beautiful digital experiences that drive growth and engagement.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {['Web Design', 'Development', 'Branding', 'SEO'].map(service => (
                <li key={service}>
                  <a href="#" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {['About', 'Team', 'Careers', 'Contact'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map(social => (
                <li key={social}>
                  <a href="#" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <p className="text-gray-500 dark:text-gray-400 text-center text-sm">
            &copy; {currentYear} YourBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;