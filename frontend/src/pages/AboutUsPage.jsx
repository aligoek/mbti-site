// src/pages/AboutUsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 font-inter min-h-screen bg-gray-50">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10 leading-tight">
        About Us
      </h1>
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-4xl mx-auto prose prose-lg">
        <p className="mb-4">
          Welcome to MBTI Analyser, your innovative platform for self-discovery through advanced personality analysis. Our mission is to provide accessible and insightful tools that help individuals understand their unique strengths, preferences, and potential, all while prioritizing their privacy.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">Our Vision</h2>
        <p className="mb-4">
          We believe that self-awareness is a cornerstone of personal and professional growth. By leveraging cutting-edge artificial intelligence, we aim to offer a fresh perspective on the well-established Myers-Briggs Type Indicator (MBTI) framework, making it more engaging and relevant for the digital age.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">How We Do It</h2>
        <p className="mb-4">
          Our platform utilizes a sophisticated BERT-based machine learning model, trained on a diverse dataset of text examples, to infer MBTI personality types from various input formats—be it direct text, audio, video, or images. To ensure accurate analysis, our system includes an automatic translation feature that converts non-English input into English before processing. This approach allows for a unique and objective analysis, complementing traditional self-assessment methods.
        </p>
        <p className="mb-4">
          Crucially, our system is designed with your privacy in mind. We do not store any user-submitted data. All uploaded files (audio, video, images) are processed temporarily and deleted immediately after your MBTI prediction is generated. Text input is processed in memory without any persistent storage.
        </p>
        <p className="mb-4">
          We are committed to continuous research and development to enhance the accuracy and reliability of our analytical tools, ensuring that you receive the most valuable insights into your personality.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">Our Commitment to You</h2>
        <p className="mb-4">
          At MBTI Analyser, your privacy and data security are paramount. We adhere to strict privacy policies, including our "no data storage" principle, to protect your personal information and ensure that your data is used solely for the purpose of providing and improving our services.
        </p>
        <p className="mb-4">
          We are passionate about empowering individuals to better understand themselves and their interactions with the world. We hope our tools serve as a valuable resource on your journey of self-exploration.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">Contact Us</h2>
        <p className="mb-4">
          If you have any questions, feedback, or suggestions, please do not hesitate to <Link to="/contact" className="text-blue-600 hover:underline">contact us</Link>. We value your input and are always striving to improve our services.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
