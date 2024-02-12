import React from 'react';
import HomePage from './Components/Home/HomePage';
import About from './Components/About/About';

import Contact from './Components/Contact/Contact';
import NavMenu from './Components/Common/NavMenu';
import { Link, Route, Routes } from "react-router-dom";
import Product from "./Components/Products/Product";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <HomePage/>
      <Product/>
      <About/>
      <Contact/>


      
    </div>
  )
}

export default App