import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
   
    // {
    //   company: 'Alwan & Awtar',
    //   position: 'Frontend Developer',
    //   period: '2022 - 2023',
    //   description: 'Developed responsive web applications using React and TypeScript.'
    // },
    // {
    //   company: 'Khalifa',
    //   position: 'Frontend Developer',
    //   period: '2021 - 2022',
    //   description: 'Built user interfaces and implemented frontend functionality.'
    // },
    {
      company: 'Tatweer Educational Technologies',
      position: 'Sr. Frontend Engineer',
      period: 'October 2022',
      description: 'Part of my work with Link Development as they outsourced me to TETCO to participate in their projects. Understand business needs, processes, and engineering requirements/restrictions Help in creating high-quality user manuals whenever needed that communicate clearly and translate business processes into user-friendly flows. work closely with the UX team to implement and develop web and mobile applications Help and support peers and other teams through reviewing their code and training them on job basics if needed Led product ownership duties and quality control processes, driving feature prioritization, refining user stories, and ensuring consistent delivery of high-quality releases scholarship.moc.gov.sa — Collaborated as Product Owner & QC, ensuring platform reliability, overseeing sprint deliverables, and maintaining alignment with stakeholder expectations.'
    },
    {
      company: 'Link Development',
      position: 'Sr. Frontend Engineer',
      period: 'July 2022 to Present',
      description: 'Write clean, efficient, and maintainable HTML, CSS, and TypeScript code Collaborate with designers and back-end developers to implement user interface elements and functionalities based on UI/UX designs and technical specifications. Assign tasks to the FE team members putting the frontend structure to the project depend on our need to make sure of its scalability and choosing the needed third parties or packages code reviewing for FE team members Participating with Testing Team to test features even if it’s not Frontend Scope mentor junior or Mid-level Frontend developer to boost their skills Ensure cross-browser and cross-platform compatibility of web applications'
    },
    {
      company: 'E-Rak Electronic Government Authority',
      position: 'Frontend Engineer (Mid Level)',
      period: 'May 2021 to June 2022',
      description: 'Working on our custom platform for Both citizens and government employees. Using modern web technologies and JS frameworks to create a web application that fit our needs keeping on eyes on the design & user experience to make a joyful experience for our Users Participate in UI/UX design discussions to do the best for our users.'
    },
    {
      company: 'Ais Works',
      position: 'Frontend Engineer (Mid Level)',
      period: '2021 - 2022',
      description: 'Implement the functionality of web designs without compromising visual/artistic aspects of the design Investigating bugs and issues on existing sites/features and introducing new solutions Following best practices and guidelines for delivering client-side code Take part in complex features implementation mes.dma.shj.ae — Worked as Frontend Engineer, and aligned frontend deliverables with business & quality control requirements'
    },
    {
      company: 'ZUMAR',
      position: 'Frontend Engineer',
      period: 'November 2020 to February 2021',
      description: 'working on our custom e-commerce platform using the modern technologies that fit our needs Using modern web technologies and JS frameworks like React to create a web application keeping on eyes on the design & user experience to make a joyful experience for our customers. Work within Agile methodologies & tools.'
    },
    {
      company: 'U4User',
      position: 'Frontend Engineer',
      period: '2018 - 2020',
      description: 'Develop new, responsive user-facing features using most modern technologies Ensure the technical feasibility of UI/UX designs optimizing applications for achieving maximum speed score Maintain and improve website Follows specs provided by the backend to achieve required results'
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              <Briefcase className="inline-block mr-2 h-8 w-8" />
              Experience
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded"></div>
          </div>

          <div className="max-w-4xl w-full">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="mb-8 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
                <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {exp.position}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {exp.period}
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;