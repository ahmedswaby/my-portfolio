import React from 'react';
import { Code } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'React', level: '★★★★★' },
    { name: 'React Native', level: '★★★★★' },
    { name: 'Angular', level: '★★★☆☆' },
    { name: 'TypeScript', level: '★★★★★' },
    { name: 'JavaScript', level: '★★★★★' },
    { name: 'Node.js', level: '★★★★☆' },
    { name: 'Next.js', level: '★★★★☆' },
    { name: 'Vite', level: '★★★★★' },
    { name: 'HTML/CSS', level: '★★★★★' },
    { name: 'Tailwind CSS', level: '★★★★★' },
    { name: 'Sass', level: '★★★★★' },
    { name: 'Git', level: '★★★★★' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              <Code className="inline-block mr-2 h-8 w-8" />
              Skills
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <div className="text-yellow-400">{skill.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;