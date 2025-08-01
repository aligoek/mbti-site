// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TestProvider } from './context/TestContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import ResultsPage from './pages/ResultsPage';
import AboutMBTIPage from './pages/AboutMBTIPage';
import PersonalityTypesPage from './pages/PersonalityTypesPage';
import PersonalityDetailPage from './pages/PersonalityDetailPage';
import ResourcesBlogPage from './pages/ResourcesBlogPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'; // Import new Privacy Policy Page
import TermsOfServicePage from './pages/TermsOfServicePage'; // Import new Terms of Service Page
import AboutUsPage from './pages/AboutUsPage'; // Import new About Us Page
import ModelPage from './pages/ModelPage'; 

function App() {
  return (
    <Router>
      <TestProvider>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Navbar />
          {/* Added 'pt-16' to the main element to create space for the fixed Navbar.
              This padding pushes the content down so it doesn't get hidden behind the navbar. */}
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/test" element={<TestPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/about" element={<AboutMBTIPage />} />
              <Route path="/types" element={<PersonalityTypesPage />} />
              <Route path="/types/:typeId" element={<PersonalityDetailPage />} />
              <Route path="/resources" element={<ResourcesBlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/model" element={<ModelPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} /> {/* Use new Privacy Policy Page */}
              <Route path="/terms" element={<TermsOfServicePage />} /> {/* Use new Terms of Service Page */}
              <Route path="/about-us" element={<AboutUsPage />} /> {/* Use new About Us Page */}
              {/* Removed sitemap route as requested */}
            </Routes>
          </main>
          <Footer />
        </div>
      </TestProvider>
    </Router>
  );
}

export default App;
