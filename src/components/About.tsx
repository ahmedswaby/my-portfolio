import React from 'react';
import { User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              <User className="inline-block mr-2 h-8 w-8" />
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded"></div>
          </div>
          
          <div className="max-w-3xl text-center">
            <p className="text-lg mb-6 leading-relaxed">
              I am a passionate developer with a keen interest in creating elegant solutions 
              to complex problems. With a strong foundation in modern web technologies and 
              best practices, I strive to build applications that are not only functional 
              but also provide an exceptional user experience.
            </p>
            
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community. 
              I believe in continuous learning and staying up-to-date with the latest 
              industry trends and innovations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;