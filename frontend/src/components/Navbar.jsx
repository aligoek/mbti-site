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
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 p-4 shadow-lg rounded-b-lg font-inter">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Ana Sayfa */}
        <Link to="/" className="flex items-center space-x-2 text-white text-2xl font-bold tracking-tight">
          
          <span>MBTI Analyser</span>  
        </Link>

        {/* Mobil menü butonu */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2">
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
          <Link to="/about" className="text-white hover:text-blue-200 transition duration-300 ease-in-out">MBTI Hakkında</Link>
          <div className="relative group">
            <button className="text-white hover:text-blue-200 transition duration-300 ease-in-out focus:outline-none">
              16 Kişilik Tipi
            </button>
            {/* 16 Kişilik Tipi için açılır menü */}
            <div className="absolute hidden group-hover:block bg-white text-gray-800 rounded-md shadow-lg py-2 mt-2 w-48 z-10">
              <Link to="/types" className="block px-4 py-2 hover:bg-gray-100">Tüm Tipleri Görüntüle</Link>
            </div>
          </div>
          <Link to="/resources" className="text-white hover:text-blue-200 transition duration-300 ease-in-out">Kaynaklar/Blog</Link>
          <Link to="/contact" className="text-white hover:text-blue-200 transition duration-300 ease-in-out">İletişim</Link>
          <button
            onClick={handleStartTestClick}
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-blue-100 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Testi Başlat
          </button>
        </div>
      </div>

      {/* Mobil menü (koşullu olarak render edilir) */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-blue-700 rounded-lg p-4 space-y-3">
          <Link to="/about" onClick={toggleMobileMenu} className="block text-white hover:text-blue-200 transition duration-300 ease-in-out py-2">MBTI Hakkında</Link>
          <Link to="/types" onClick={toggleMobileMenu} className="block text-white hover:text-blue-200 transition duration-300 ease-in-out py-2">16 Kişilik Tipi</Link>
          <Link to="/resources" onClick={toggleMobileMenu} className="block text-white hover:text-blue-200 transition duration-300 ease-in-out py-2">Kaynaklar/Blog</Link>
          <Link to="/contact" onClick={toggleMobileMenu} className="block text-white hover:text-blue-200 transition duration-300 ease-in-out py-2">İletişim</Link>
          <button
            onClick={handleStartTestClick}
            className="w-full bg-white text-blue-600 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-blue-100 transition duration-300 ease-in-out"
          >
            Testi Başlat
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
