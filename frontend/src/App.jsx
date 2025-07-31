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
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <Router>
      <TestProvider>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/test" element={<TestPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/about" element={<AboutMBTIPage />} />
              <Route path="/types" element={<PersonalityTypesPage />} />
              <Route path="/types/:typeId" element={<PersonalityDetailPage />} />
              <Route path="/resources" element={<ResourcesBlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
              <Route path="/terms" element={<PlaceholderPage title="Terms of Use" />} />
              <Route path="/about-us" element={<PlaceholderPage title="About Us" />} />
              <Route path="/sitemap" element={<PlaceholderPage title="Sitemap" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </TestProvider>
    </Router>
  );
}

export default App;
