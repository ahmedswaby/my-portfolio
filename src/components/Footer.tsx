import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Ahmed Khaled. All rights reserved.</p>
          <p className="text-sm mt-2">
            Made with{' '}
            <a 
              href="https://www.doyoubuzz.com/us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              DoYouBuzz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;