import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS (with Popper.js bundled)
import Navbar from './components/Navbar.js';
import Intro from './components/Intro.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Profile from './components/Profile.js';
import Work from './components/Work.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Intro/>
      <Skills/>
      <Projects/>
      <Profile/>
      <Work/>
      <Footer/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
