import React, { useState } from 'react';
import { Toast } from 'flowbite-react';
import { ToastMessage } from '../components/toastMessge/toast';
import { ContactModal } from '../components/model/contactModal';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isCopied, setIsCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [isMapLoading, setIsMapLoading] = useState(true); 
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); 

    const formData = new FormData(event.target);
    formData.append("access_key", "24dfccff-76d9-4a14-aef1-b59939f53bc9");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        setOpenModal(true);
      } else {
        console.log("Form submission failed:", res);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false); // Set loading state to false after the request completes
    }
  };

  // const handleLinkClick = () => {
  //   setIsClicked(true);
  // };

  const handleCopyEmail = () => {
    const email = 'Dk4803382@gmail.com';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email)
        .then(() => {
          setIsCopied(true);
          setCopyError(false);
          setTimeout(() => setIsCopied(false), 2000);
        })
        .catch(() => {
          fallbackCopyTextToClipboard(email);
        });
    } else {
      fallbackCopyTextToClipboard(email);
    }
  };

  const fallbackCopyTextToClipboard = (text) => {
    const textArea = document.createElement('textarea');
    Object.assign(textArea.style, {
      position: 'fixed', top: '0', left: '0', width: '2em', height: '2em',
      padding: '0', border: 'none', outline: 'none', boxShadow: 'none', background: 'transparent'
    });
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
  
    try {
      const successful = document.execCommand('copy');
      setIsCopied(successful);
      setCopyError(!successful);
      setTimeout(() => {
        setIsCopied(false);
        setCopyError(false);
      }, 2000);
    } catch {
      setCopyError(true);
      setTimeout(() => setCopyError(false), 2000);
    }
  
    document.body.removeChild(textArea);
  };

  const submittedMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;

  return (
    <>
      <div className="fixed top-24 ml-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-sm px-4">
        {isCopied && (
          <ToastMessage message={'Copied to clipboard'}/>
        )}
        {copyError && (
          <Toast>
            <div className="ml-3 text-sm font-normal">Failed to copy email</div>
            <Toast.Toggle />
          </Toast>
        )}
      </div>

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-600 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-gray-300 p-8 rounded-lg mt-10 shadow-xxl">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="text-center text-gray-600">We'd love to hear from you. Please fill out the form below to get in touch.</p>
          <form className="mt-8 space-y-6" onSubmit={onSubmit}>
            <div className="mt-4 flex justify-start space-x-4">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-700"
              >
                Copy Email
              </button>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-2">
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className=" mb-4 bg-gray-100 rounded-lg appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mb-4 bg-gray-100 rounded-lg appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="mb-4 bg-gray-100 rounded-lg appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="mb-2 bg-gray-100 rounded-lg appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                style={{ marginLeft: '-0px' }}
                className={`mr-10 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading} 
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {isMapLoading && (
  <div className="text-center my-4">
    <p>Loading map...</p>
  </div>
)}
<div className="w-full overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.8889854931717!2d76.65235837537254!3d30.721521174589764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef91afd9c903%3A0xc13b1aff0517a752!2sSante%20Majra%2C%20Sector%20115%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140307!5e0!3m2!1sen!2sin!4v1723015737821!5m2!1sen!2sin"
    style={{ border: '0', position: 'relative', top: '0', left: '0', width: '380px', height: '300px' }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    onLoad={() => setIsMapLoading(false)} 
  ></iframe>
</div>

          </form>

          {/* {isSubmitted && !isClicked && (
            <div className="mt-4 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded">
              <h3 className="text-center text-lg font-bold">Message Ready to Send!</h3>
              <p className="mt-2 text-center">Your message is ready to be sent via WhatsApp or Email. Please choose an option below:</p>
              <pre className="mt-2 whitespace-pre-wrap">{submittedMessage}</pre>
              <div className="mt-4 flex justify-center space-x-4">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(submittedMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={handleLinkClick}
                >
                  Send via WhatsApp
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(submittedMessage)}`}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={handleLinkClick}
                >
                  Send via Email
                </a>
              </div>
            </div>
          )} */}

          {openModal && (
            <ContactModal openModal={openModal} setOpenModal={setOpenModal}/>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;

