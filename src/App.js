import React from 'react';

import NavMenu from './components/common/NavMenu';
import Home from './pages/Home';
import Services from "./pages/Services";
import About from './pages/About';

import Contact from './pages/Contact';
import { Element } from 'react-scroll';



// import './App.css';


function App() {
  return (
    <>
      <NavMenu />
      {/* Using Element from react-scroll to define page sections */}
      <Element name="home" className="element">
        <Home />
      </Element>
     
      <Element name="services" className="element">
        <Services />
      </Element>
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="contact" className="element">
        <Contact />
      </Element>
      </>
  );
}

export default App;