import React from 'react';
import Services from "./pages/Services.jsx";
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.js'; // Ensure this path is correct
import CssBaseline from '@mui/material/CssBaseline';
import Header from "../src/components/Header.jsx";
import HomePage from './pages/HomePage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/common/Footer.jsx';
import Launching from './components/common/Launching.jsx';
import { ShowMoreProvider } from './context/ShowMore.jsx';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ShowMoreProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/launching-soon" element={<Launching />} />
        </Routes>
        <Footer />
      </Router>

      </ShowMoreProvider>

    </ThemeProvider>
  );
};

export default App;
