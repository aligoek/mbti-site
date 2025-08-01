import React from 'react';
import { useNavigate } from 'react-router-dom';

const PersonalityTypesPage = () => {
  const navigate = useNavigate();

  const allMbtiTypes = [
    { type: "ISTJ", name: "The Logistician", summary: "Practical, fact-minded individuals who are highly responsible and organized, valuing tradition and duty." },
    { type: "ISFJ", name: "The Defender", summary: "Dedicated and warm protectors, known for their meticulous nature and commitment to helping others." },
    { type: "INFJ", name: "The Advocate", summary: "Quiet and mystical, yet very inspiring and tireless idealists, driven by a strong sense of purpose." },
    { type: "INTJ", name: "The Architect", summary: "Imaginative and strategic thinkers, independent and always seeking to improve systems and the world around them." },
    { type: "ISTP", name: "The Virtuoso", summary: "Bold and practical experimenters, masters of tools and hands-on problem-solving, living in the moment." },
    { type: "ISFP", name: "The Adventurer", summary: "Flexible and charming artists, who live in the moment and enjoy exploring the world through their senses." },
    { type: "INFP", name: "The Mediator", summary: "Poetic, kind, and altruistic people, guided by deep personal values and a desire for harmony." },
    { type: "INTP", name: "The Logician", summary: "Innovative inventors with an unquenchable thirst for knowledge, highly analytical and abstract thinkers." },
    { type: "ESTP", name: "The Entrepreneur", summary: "Smart, energetic, and very perceptive people who thrive on action and excitement, living life in the fast lane." },
    { type: "ESFP", name: "The Entertainer", summary: "Spontaneous, energetic, and enthusiastic people who love being the center of attention and bringing joy to others." },
    { type: "ENFP", name: "The Campaigner", summary: "Enthusiastic, creative, and sociable free spirits, driven by connection, new possibilities, and inspiring others." },
    { type: "ENTP", name: "The Debater", summary: "Smart and curious thinkers who cannot resist an intellectual challenge, always ready to brainstorm and innovate." },
    { type: "ESTJ", name: "The Executive", summary: "Excellent administrators, unsurpassed at managing things or people, upholding traditions and order." },
    { type: "ESFJ", name: "The Consul", summary: "Extraordinarily caring, social, and popular people, dedicated to fostering social harmony and supporting their communities." },
    { type: "ENFJ", name: "The Protagonist", summary: "Charismatic and inspiring leaders, passionate about helping others reach their full potential and making a positive impact." },
    { type: "ENTJ", name: "The Commander", summary: "Bold, imaginative, and strong-willed leaders, natural strategists who thrive on challenges and achieving goals." },
  ];

  return (
    <div className="container mx-auto px-4 py-12 font-inter min-h-screen bg-gray-50">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10 leading-tight">
        Discover: The 16 Personality Types
      </h1>
      <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        Each personality type offers a unique perspective, set of strengths, and areas for growth. Explore the types below to understand yourself or others more deeply.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allMbtiTypes.map((typeInfo) => (
          <div
            key={typeInfo.type}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 cursor-pointer hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            onClick={() => navigate(`/types/${typeInfo.type.toLowerCase()}`)}
          >
            <h3 className="text-3xl font-bold text-blue-700 mb-2">{typeInfo.type}</h3>
            <p className="text-xl font-semibold text-gray-900 mb-3">{typeInfo.name}</p>
            <p className="text-gray-700 text-base leading-relaxed">{typeInfo.summary}</p>
            <button className="mt-4 text-blue-600 hover:underline font-medium flex items-center gap-1">
              Learn More <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalityTypesPage;
