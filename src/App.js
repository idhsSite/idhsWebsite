import React from 'react'
import HomePage from './Components/Home/HomePage'
import About from './Components/About/About'

import Contact from './Components/Contact/Contact'
import NavMenu from './Components/Common/NavMenu'
import { Link, Route, Routes } from "react-router-dom";
import Product from "./Components/Products/Product"

function App() {
  return (
    <div>
      <NavMenu />
      <HomePage />
      <Product />
      <About />
      <Contact />


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App