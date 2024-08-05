import React from 'react';
import '../assets/css/style.css';
import Images2 from '../assets/images/Deepak_Kumar.pdf'
import Pdf from '../assets/documents/Deepak_Offer.pdf'
import Pdf2 from '../assets/documents/PRM_Digital_Letter.pdf'

const experiences = [
  {
    role: 'React JS Trainee',
    company: 'PRM Digital',
    duration: 'November 15 2023 to April 30 2024',
    responsibilities: [
      'Responsible for developing and implementing user interface components using React.js concepts and workflows such as Hooks, and Webpack.',
      'Collaborated with the design team to translate visual concept into functional.',
      'Created designs and developed responsive websites.'
    ],
    documentLink: Pdf2
  },
  {
    role: 'Software Intern',
    company: 'Mobzway Technologies',
    duration: 'May 21 2024 - continue',
    responsibilities: [
      'Worked on front-end web applications using ReactJS.',
      'This intern i learn Socket.io mongoDb and etc.  ',
      'Contributed to team discussions on front-end development strategies.',
      'Learn and Create Firebase for authentication and real-time database.'
    ],
    documentLink: Pdf
  },
];


const Experience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-600 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900">Experience</h1>
        <div className="mt-4">
          {experiences.map((experience, index) => (
            <div key={index} className="mb-8 p-4 bg-gray-300 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-gray-800">{experience.role}</h2>
              <h3 className="text-xl text-gray-600">{experience.company}</h3>
              <p className="text-gray-500">{experience.duration}</p>
              <ul className="mt-2 list-disc list-inside">
                {experience.responsibilities.map((responsibility, i) => (
                  <li key={i} className="text-gray-600">{responsibility}</li>
                ))}
              </ul>
              <a
                href={experience.documentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-full hover:bg-gray-800 shadow"
              >
                View Document
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
