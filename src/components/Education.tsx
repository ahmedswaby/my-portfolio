import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              <GraduationCap className="inline-block mr-2 h-8 w-8" />
              Education
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded"></div>
          </div>

          <div className="max-w-3xl w-full mb-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">UX (User Experience)</h3>
              <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
              Go My Code
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              March 2021 to June 2021
              </div>
              <p className="text-gray-700 dark:text-gray-300">
              The UX Design course allow me to acquire the knowledge and tools necessary to understand the different principles of user experience design. learned how to carry out a good UX study, how to use the different types of processes in order to conceptualize a final product from a user-centric perspective.
              </p>
            </div>
          </div>
          <div className="max-w-3xl w-full">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Faculty of commerce - Accounting</h3>
              <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                 EGI Academy
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              2016 to 2020
              </div>
              <p className="text-gray-700 dark:text-gray-300">
              Provides financial information to management by researching and analyzing accounting data; preparing reports. Prepares asset, liability, and capital account entries by compiling and analyzing account information

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;