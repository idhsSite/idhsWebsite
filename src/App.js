import React from 'react';
import HomePage from './Components/Home/HomePage';
import About from './Components/About/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from './Components/Contact/Contact';
import NavMenu from './Components/Common/NavMenu';
import Product from "./Components/Products/Product";

function App() {
  return (
    <BrowserRouter>
<NavMenu />
<HomePage/>
<Product/>
<About/>
<Contact/>

    <Routes>
      
      
     
     <Route path="/" exact component={HomePage} />
     <Route path="/about" exact component={About} />
      <Route path="/product" exact component={Product} />
  
      <Route path="/contact" exact component={Contact} />


   




    </Routes>
   
    
    </BrowserRouter>
    
  )
}

export default App