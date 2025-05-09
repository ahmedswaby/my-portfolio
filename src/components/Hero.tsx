import React from 'react';
import { FileText, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ahmed Khaled
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Senior Frontend Developer
          </p>
          <div className="flex gap-4">
            <a 
              href="/ahmed-cv.pdf" 
              download
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
            <a 
              href="#contact"
              className="flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <FileText className="w-5 h-5 mr-2" />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;