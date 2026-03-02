import React from 'react';
import Image2 from '../assets/images/project1.png';
import Project2 from '../assets/images/project2.png';
import Project3 from '../assets/images/project3.png';
import Project4 from '../assets/images/project4.png';
import Project5 from '../assets/images/project5.png';


const Projects = () => {
  const projects = [
    {
      title: 'Shoping Website',
      description: 'This is a demo shopping website where users can browse products, add them to their cart, and proceed to checkout. The website is built using React JS for the frontend, Bootstrap CSS for styling, and Redux for state management.',
      technologies: ['React JS', 'Bootstrap CSS', 'Redux'],
      link: 'https://shopingxyz.netlify.app',
      image2: Image2,
    },
    {
      title: 'Admin Dashboard',
      description: 'Includes various small programming learning tasks such as displaying JSX, creating a counter, building a search filter, creating a datagrid with sort/filter/search functionalities, implementing drag and drop task lists, and creating a To Do List application with Firebase integration *and create adminPanal to click task6 then show adminpanal then signUp and view AdminPanal*.',
      technologies: ['React JS', 'Tailwind CSS', 'Firebase'],
      link: 'https://back-office-panel.netlify.app',
      image2: Project2,
    },
    {
      title: "Secure MERN Authentication & Admin Panel Application",
      description: "A full-stack MERN application featuring secure user authentication, protected routes, and role-based access control. Users can sign up and log in using JWT authentication, while admins can access a dedicated admin panel to manage and view application data. The frontend is built with React and styled using Tailwind CSS for a modern, responsive UI, and the backend is powered by Node.js, Express, and MongoDB.",
      technologies: [
        "MongoDB",
        "Express JS",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "JWT Authentication"
      ],
      link: 'https://frontend-gmld.onrender.com',
      image2: Project3,
    },
    {
      title: "DK Tech Solutions | Web Development & IT Services Company",
      description: "DK Tech Solutions provides professional website development, WordPress design, IT consulting, and digital solutions. We build fast, secure, and responsive websites using modern technologies to grow your business online.",
      technologies: [
        "WordPress",
        "Elementor"
      ],
      link: 'https://techietech.wuaze.com/',
      image2: Project4,
    },
    {
      title: "Hospital Management System (HMS) – Admin & Patient Portal",
      description: "Developed a Hospital Management System using modern web technologies to manage patients, doctors, appointments, and hospital records efficiently. The application includes authentication, protected routes, CRUD operations, and database integration for secure data handling",
      keyFeature: "Patient Registration and Login Appointment Booking System Doctor and Admin Dashboard Secure Authentication Database Integration Responsive UI Design",
      technologies: [
        "MongoDB",
        "Express JS",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "JWT Authentication"
      ],
      link: 'under processing...',
      image2: Project5,
    },
  ];

  const handleProjectClick = (link) => {
    if (link === "under processing...") {
      alert("🚧 Hospital Management System is currently under development. It will be live soon!");
    } else {
      window.open(link, "_blank");
    }
  };


  return (
    <React.Fragment>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-600 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto ">
          <h1 className="text-4xl font-bold text-gray-900  text-center">Projects</h1>
          <div className="mt-10 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-300 p-6 rounded-lg shadow-lg">
                <img src={project.image2} alt={project.title} className="w-full h-48 object-cover rounded-lg" />
                <h2 className="text-2xl font-bold text-gray-800 mt-4">{project.title}</h2>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4">
                  <span className="text-gray-600 font-semibold">Technologies:</span>
                  <ul className="list-disc list-inside">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="text-gray-500">{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => handleProjectClick(project.link)}
                    className={`font-semibold ${project.link === "under processing..."
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-indigo-600 hover:text-indigo-900"
                      }`}
                  >
                    {project.link === "under processing..." ? "Coming Soon" : "View Project"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
