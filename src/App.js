import React from 'react';
import HomePage from './Components/Home/HomePage';
import About from './Components/About/About';
import { BrowserRouter } from 'react-router-dom';

import Contact from './Components/Contact/Contact';
import NavMenu from './Components/Common/NavMenu';
import Product from "./Components/Products/Product";

import ExampleComponent from "./Components/ExampleComponent";


function App() {

  
  return (
<BrowserRouter>
<NavMenu/>
      <HomePage />
      <About />
      <Product />
      
      <Contact />
</BrowserRouter>

    
      
  




  );
}


export default App