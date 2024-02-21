import React from 'react';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import { BrowserRouter } from 'react-router-dom';

import Contact from './Pages/Contact';
import NavMenu from './Components/Common/NavMenu';
import Product from "./Pages/Product";
import UserQuery from './Pages/UserQuery';



function App() {


  return (
    <BrowserRouter>
    <NavMenu />
    <>
   
      
      <HomePage />
      <Product />
      <About />
      <UserQuery/>


      <Contact />
      </>
    </BrowserRouter>
    








  );
}


export default App