// src/pages/AboutMBTIPage.jsx
import React from 'react';

const AboutMBTIPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 font-inter min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">About Myers-Briggs Type Indicator (MBTI)</h1>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">What is MBTI?</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Myers-Briggs Type Indicator (MBTI) is a self-report questionnaire designed to indicate psychological preferences in how people perceive the world and make decisions. Developed by Isabel Myers and Katharine Briggs during World War II, this indicator is based on Carl Jung's conceptual theory of psychological types. MBTI aims to make Jung's theory of psychological types understandable and useful in people's lives.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          It is commonly used for self-discovery, career development, team building, and improving interpersonal relationships. While it is widely used, it is important to remember that MBTI is not a definitive measure of personality but a tool for self-understanding.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">History of MBTI</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          The MBTI was created by Isabel Myers and Katharine Briggs during World War II. They observed that people had different ways of processing information and making decisions, and they wanted to create a tool to help understand these differences. Their work was inspired by Carl Jung's theories, particularly those in his book "Psychological Types." The first manual for the MBTI was published in 1962, and it has undergone several revisions and updates since then.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Four Dichotomies</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          MBTI categorizes personality into 16 types based on four dichotomies:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">1. Extraversion (E) / Introversion (I)</h3>
            <p className="text-gray-700">
              Where you focus your energy. Extraverts gain energy from social interaction, while introverts recharge through solitude and reflection.
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">2. Sensing (S) / Intuition (N)</h3>
            <p className="text-gray-700">
              How you perceive information. Sensors focus on concrete facts and details, while Intuitives focus on patterns, possibilities, and abstract concepts.
            </p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">3. Thinking (T) / Feeling (F)</h3>
            <p className="text-gray-700">
              How you make decisions. Thinkers prioritize logic and objectivity, while Feelers prioritize values, harmony, and the impact on people.
            </p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">4. Judging (J) / Perceiving (P)</h3>
            <p className="text-gray-700">
              How you prefer to live your outer life. Judgers prefer a planned and organized approach, while Perceivers prefer flexibility and spontaneity.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Real-World Applications and Benefits</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
          <li><strong>Personal Development:</strong> Gain self-awareness, understand your strengths, and identify areas for growth.</li>
          <li><strong>Career Guidance:</strong> Explore career paths that align with your natural preferences and talents.</li>
          <li><strong>Relationship Building:</strong> Understand different communication styles and foster stronger connections with others.</li>
          <li><strong>Team Building:</strong> Enhance team dynamics by appreciating diverse working styles and contributions.</li>
          <li><strong>Conflict Resolution:</strong> Learn to resolve disagreements by understanding fundamental personality differences.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMBTIPage;
