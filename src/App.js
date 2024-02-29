import React from 'react';
// import NavMenu from "../src/components/common/NavMenu"
// import Home from './pages/HomePage';
import Services from "./pages/Services";
import About from './pages/About';
import Contact from './pages/Contact';
// import { Element } from 'react-scroll';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.js'; // Adjust the import path based on your project structure
import CssBaseline from '@mui/material/CssBaseline'; // Helps with consistent styling acros
import Header from "../src/components/Header.jsx"
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/common/Footer.jsx';
import { ShowMoreProvider } from './context/ShowMore';



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <ShowMoreProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ShowMoreProvider>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;


