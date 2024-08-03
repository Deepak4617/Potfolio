// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Header from '../components/header';
// import Home from '../pages/home';
// import About from '../pages/about';
// import Experience from '../pages/experience';
// import Contact from '../pages/contact';
// import Projects from '../pages/project';

// const AppRoute = () => {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/experience" element={<Experience />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   );
// };

// export default AppRoute;


import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import Home from '../pages/home';
import About from '../pages/about';
import Experience from '../pages/experience';
import Contact from '../pages/contact';
import Projects from '../pages/project';

const AppRoute = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Optional: Add a catch-all route for undefined paths */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  );
};

export default AppRoute;
