// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleStartTestClick = () => {
    navigate('/test');
    setIsMobileMenuOpen(false); // Menüyü navigasyonda kapat
  };

  return (
    // Added 'fixed', 'top-0', 'left-0', 'right-0', 'z-50' for fixed positioning
    // Added 'bg-white/80' for semi-transparent background
    // Added 'backdrop-blur-md' for the blur effect
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md p-4 border-b-2 font-inter">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Ana Sayfa */}
        <Link to="/" className="flex items-center space-x-2 text-gray-800 text-2xl font-bold tracking-tight">
          
          <span>MBTI Analyser</span>  
        </Link>

        {/* Mobil menü butonu */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Masaüstü navigasyon linkleri */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="text-gray-800 hover:text-blue-800 hover:underline font-semibold transition duration-300 ease-in-out">About MBTI</Link>
          <Link to="/types" className="text-gray-800 hover:text-blue-800 hover:underline font-semibold transition duration-300 ease-in-out focus:outline-none">
            16 Personality Types
          </Link>
          <Link to="/model" className="text-gray-800 hover:text-blue-800 hover:underline font-semibold transition duration-300 ease-in-out">How it Works</Link> {/* New link for ModelPage */}
          <Link to="/resources" className="text-gray-800 hover:text-blue-800 hover:underline font-semibold transition duration-300 ease-in-out">Resources/Blog</Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-800 hover:underline font-semibold transition duration-300 ease-in-out">Contact</Link>
          <button
            onClick={handleStartTestClick}
            className="bg-white text-blue-800 px-6 py-2 rounded-full font-semibold border-2 hover:bg-blue-100 transition duration-200 ease-in-out transform hover:scale-100"
          >
            Start Analysis
          </button>
        </div>
      </div>

      {/* Mobil menü (koşullu olarak render edilir) */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg p-4 space-y-3">
          <Link to="/about" onClick={toggleMobileMenu} className="block text-gray-800 hover:text-blue-800 hover:underline font-semibold transition duration-300 ease-in-out py-2">About MBTI</Link>
          <Link to="/types" onClick={toggleMobileMenu} className="block text-gray-800 hover:text-blue-800 hover:underline font-semibold transition duration-300 ease-in-out py-2">16 Personality Types</Link>
          <Link to="/model" onClick={toggleMobileMenu} className="block text-gray-800 hover:text-blue-800 hover:underline font-semibold transition duration-300 ease-in-out py-2">How it Works</Link> {/* New link for ModelPage */}
          <Link to="/resources" onClick={toggleMobileMenu} className="block text-gray-800 hover:text-blue-800 hover:underline font-semibold transition duration-300 ease-in-out py-2">Resources/Blog</Link>
          <Link to="/contact" onClick={toggleMobileMenu} className="block text-gray-800 hover:text-blue-800 hover:underline font-semibold transition duration-300 ease-in-out py-2">Contact</Link>
          <button
            onClick={handleStartTestClick}
            className="w-full bg-white text-blue-800 px-6 py-2 rounded-full font-semibold border-2 hover:bg-blue-100 transition duration-300 ease-in-out"
          >
            Start Analysis
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
