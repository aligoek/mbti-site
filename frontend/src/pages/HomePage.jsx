// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleStartTestClick = () => {
    navigate('/test');
  };

  const testFormats = [
      { 
          name: "Video Analysis", 
          description: "Provide a video as input and predict MBTI personality type based on the transcribed text from the video." 
      },
      { 
          name: "Audio Analysis", 
          description: "Provide an audio file as input and predict MBTI personality type based on the transcribed text from the audio." 
      },
      { 
          name: "Text Analysis", 
          description: "Provide written text as input and predict MBTI personality type based on the given text." 
      },
      { 
          name: "Visual Analysis", 
          description: "Provide an image (with text) as input and predict MBTI personality type based on the extracted text from the image." 
      }
  ];



  const mbtiBenefits = [
    "Enhanced self-awareness and personal growth.",
    "Improved communication and relationships.",
    "Better career planning and job satisfaction.",
    "Understanding diverse perspectives in teams.",
    "Identifying natural strengths and areas for development."
  ];

  return (
    <div className="container mx-auto px-4 py-8 font-inter">
      {/* Kahraman Bölümü */}
      <section className="text-center my-12 bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-xl shadow-lg">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          <span className="text-blue-600">MBTI Analyser</span> to Discover Your True Self
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Explore your personality type with our comprehensive MBTI analysis. Understand your strengths, weaknesses, and how you relate to others.
        </p>
        <button
          onClick={handleStartTestClick}
          className="bg-blue-600 text-white px-10 py-4 rounded-full text-xl font-bold shadow-xl hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Start the MBTI Analysis Now!
        </button>
      </section>

      {/* Test Formatları Bölümü */}
      <section className="my-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Choose Your Path to Self-Discovery</h2>
        <p className="text-xl text-center text-gray-700 mb-8 max-w-3xl mx-auto">
          Our MBTI Analyser infers your personality type by analyzing the text you provide. Whether it's written text, or text transcribed from audio, video, or extracted from images, our advanced model processes your input to determine your unique 4-letter MBTI profile.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testFormats.map((format, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col items-center  text-center">
              <div className="flex justify-center mb-4">
                {format.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{format.name}</h3>
              <p className="text-gray-600">{format.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MBTI Faydaları Bölümü */}
      <section className="my-12 bg-gradient-to-br from-blue-100 to-purple-100 p-10 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Why Understand Your MBTI Type?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center md:items-start">
            <ul className="space-y-4 text-lg text-gray-700 list-disc list-inside">
              {mbtiBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-600 mr-2 text-2xl">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://designs.ai/blog/wp-content/uploads/2020/04/THE-MBTI-PERSONALITIES-IN-QUARANTINE-2.png"
              alt="MBTI Faydaları İllüstrasyonu"
              className="rounded-lg "
            />
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default HomePage;
