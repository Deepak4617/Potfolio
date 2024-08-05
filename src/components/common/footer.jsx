import React from 'react';

import javascriptLogo from '../../assets/images/javascript.png';
import reactLogo from '../../assets/images/react.png';
import reduxLogo from '../../assets/images/redux.png';
import tailwindLogo from '../../assets/images/tailwind.png';
import htmlLogo from '../../assets/images/html.png';
import cssLogo from '../../assets/images/css.png';
import bootstrapLogo from '../../assets/images/bootstrap.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-2">
      <div className="overflow-hidden">
        <marquee>
          <div className='flex gap-10'>
            <img src={reactLogo} alt="React" title="React" className="h-12 w-12" />
            <img src={bootstrapLogo} alt="Bootstrap" title="Bootstrap" className="h-12 w-12" />
            <img src={tailwindLogo} alt="Tailwind CSS" title="Tailwind CSS" className="h-12 w-12" />
            <img src={htmlLogo} alt="HTML" title="HTML" className="h-12 w-12" />
            <img src={javascriptLogo} alt="JavaScript" title="JavaScript" className="h-12 w-12" />
            <img src={reduxLogo} alt="Redux" title="Redux" className="h-12 w-12" />
            <img src={cssLogo} alt="MongoDB" title="MongoDB" className="h-12 w-12" />
          </div>
        </marquee>
      </div>
    </footer>
  );
};

export default Footer;

