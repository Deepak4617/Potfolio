import React , {useState} from 'react';
import ContactInfoModal from '../components/common/contactInfoModel';
import profilePic2 from '../assets/images/profile.png';
import GithubAndLinklind from '../components/common/githubAndLinklind';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Deepak_Resume.pdf';
    link.download = 'Deepak_Resume.pdf';
    
    // For mobile compatibility
    if (document.createEvent) {
      const event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      link.dispatchEvent(event);
    } else {
      link.click();
    }
    
    document.body.appendChild(link);
    document.body.removeChild(link);
  };
  
  const handleContactInfo = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <React.Fragment>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-600">
        <main className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-8">
          <img src={profilePic2} alt="Deepak Kumar" className="w-64 h-64 rounded-full shadow-lg mx-auto" />
          <div className="text-center md:text-left">
            <div className="marquee-container">
              <div className="marquee-text">
                <h2 className="text-lg text-gray-600">Hello, I'm</h2>
                <h1 className="mt-2 text-4xl font-bold text-gray-900">Deepak Kumar</h1>
                <h3 className="mt-2 text-2xl text-gray-700">Frontend Developer</h3>
              </div>
            </div>
            <div className="mt-6 space-x-8">
              <button
                onClick={handleDownloadCV}
                className="px-6 py-2 text-sm font-medium text-gray-900 bg-gray-200 rounded-full hover:bg-gray-300 shadow"
              >
                Download CV
              </button>
              <button 
              onClick={handleContactInfo}
              className="px-6 py-2 text-sm font-medium text-white bg-gray-600 rounded-full hover:bg-gray-700 shadow">
                Contact Info
              </button>
            </div>
            <div className='ml-6'>
            <GithubAndLinklind/>
            </div>
          </div>
        </main>
        <style jsx>{`
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          display: flex;
          justify-content: center;
        }

        .marquee-text {
          display: inline-block;
          animation: marquee 10s linear 1;
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
      <ContactInfoModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </React.Fragment>

  );
};

export default Home;
