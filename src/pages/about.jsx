import React, { useState } from 'react';
import profilePic2 from '../assets/images/profile.png';
import ContactInfoModal from '../components/common/contactInfoModel';
import GithubAndLinklind from '../components/common/githubAndLinklind';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/path-to-your-cv.pdf';
    link.download = 'Deepak_Kumar_CV.pdf';
    link.click();
  };

  const handleContactInfo = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  

  return (
    <React.Fragment>
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-600 py-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2">
            <img src={profilePic2} alt="Deepak Kumar" className="w-64 h-64 rounded-full shadow-lg mx-auto" />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
            <h1 className="text-4xl font-bold text-gray-900">Deepak Kumar</h1>
            <h3 className="text-2xl text-gray-700 mt-2">Frontend Developer</h3>
            <p className="mt-4 text-black-600 leading-relaxed">
              I am a passionate Frontend Developer with a strong background in creating engaging and user-friendly web applications. With a keen eye for detail and a deep understanding of modern web technologies, I strive to deliver high-quality solutions that meet client needs and exceed expectations.
            </p>
            <p className="mt-4 text-black-600 leading-relaxed">
              My expertise lies in React.js, JavaScript, HTML, CSS, Redux, and Redux Toolkit  and I have experience working with various libraries and frameworks to build responsive and dynamic user interfaces. I enjoy collaborating with teams, learning new skills, and staying updated with the latest industry trends.
            </p>
            <div className="mt-6 space-x-4">
              <button
                onClick={handleDownloadCV}
                className="px-6 py-2 text-sm font-medium text-gray-900 bg-gray-200 rounded-full hover:bg-gray-300 shadow"
              >
                Download CV
              </button>
              <button
                onClick={handleContactInfo}
                className="px-6 py-2 text-sm font-medium text-white bg-gray-600 rounded-full hover:bg-gray-700 shadow"
              >
                Contact Info
              </button>
            </div>
            <GithubAndLinklind/>
           
          </div>
        </div>
      </div>
      <ContactInfoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
    </React.Fragment>

  );
};

export default About;
