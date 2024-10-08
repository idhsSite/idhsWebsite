import React from 'react';
import Services from "./pages/Services.jsx";
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import HomePage from './pages/HomePage.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsConditions from './pages/TermsConditions.jsx';
import RefundPolicy from './pages/RefundPolicy.jsx';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.js'; // Ensure this path is correct
import CssBaseline from '@mui/material/CssBaseline';
import Header from "../src/components/Header.jsx";
import Footer from './components/common/Footer.jsx';
import DownloadApp from './components/common/DownloadApp.jsx';
import { ShowMoreProvider } from './context/ShowMore.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerGrievanceRedressalPolicy from './pages/CustomerGrievanceRedressalPolicy.jsx';

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
            <Route path="/idhs-app" element={<DownloadApp />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/CustomerGrievanceRedressalPolicy" element={<CustomerGrievanceRedressalPolicy />} />
          </Routes>
          <Footer />
        </Router>
      </ShowMoreProvider>
    </ThemeProvider>
  );
};

export default App;
