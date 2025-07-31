// src/pages/PlaceholderPage.jsx
import React from 'react';

const PlaceholderPage = ({ title }) => (
  <div className="container mx-auto px-4 py-8 font-inter min-h-screen text-center">
    <h1 className="text-4xl font-bold text-gray-800 mb-6">{title}</h1>
    <p className="text-lg text-gray-700">'{title}' için içerik buraya gelecek.</p>
    <p className="text-md text-gray-500 mt-4">Bu bir yer tutucu sayfadır.</p>
  </div>
);

export default PlaceholderPage;
