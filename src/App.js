import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavMenu from './components/common/NavMenu';
import HomePage from './pages/HomePage';
import Product from "./pages/Product";
import About from './pages/About';
import UserQuery from './pages/UserQuery';
import Contact from './pages/Contact';
// import './App.css';


function App() {
  return (
    <BrowserRouter>
    <>     
      <NavMenu />
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