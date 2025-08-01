// src/pages/ModelPage.jsx
import React from 'react';

const ModelPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 font-inter min-h-screen bg-gray-50">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10 leading-tight">
        How Our MBTI Prediction Model Works
      </h1>
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-4xl mx-auto">
        <p className="text-lg text-gray-700 mb-6">
          Our MBTI Analyser uses a sophisticated machine learning model to predict your personality type based on the text you provide. This model has been carefully trained to understand the nuances of language that correlate with different MBTI types.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">The Power of BERT for Text Classification</h2>
        <p className="text-lg text-gray-700 mb-6">
          At the core of our prediction system is a powerful language model called <span className="font-semibold text-blue-600">BERT (Bidirectional Encoder Representations from Transformers)</span>. In simple terms, BERT is a neural network model that has been pre-trained on a massive amount of text data from the internet. This pre-training allows BERT to understand context and meaning in language far better than traditional models.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          For our specific task, we fine-tuned BERT for <span className="font-semibold text-purple-600">text classification</span>. This means we adapted the pre-trained BERT model to classify input text into one of the 16 MBTI personality types. When you provide text (whether directly, or extracted from audio, video, or images), our model processes it to identify patterns and characteristics that align with a particular MBTI profile.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ensuring Multilingual Compatibility through Translation</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our core BERT model is specifically trained on English text to achieve optimal accuracy. To extend our service to a global audience and ensure that users can submit content in various languages, we've integrated a robust, real-time translation mechanism. Before any input text (whether directly provided, transcribed from audio/video, or extracted from images via OCR) is fed into our BERT model, it is automatically detected and, if necessary, translated into English. This crucial pre-processing step ensures that the model always receives input in the format it was trained on, maintaining the integrity and accuracy of the MBTI prediction, regardless of the original language.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">Model Training Details</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-6">
          <li>
            <strong>Dataset Size:</strong> Our model was trained on a comprehensive dataset consisting of <span className="font-semibold text-green-600">106,000 text examples</span>. This large dataset helps the model learn a wide range of linguistic patterns associated with different personality types.
          </li>
          <li>
            <strong>Prediction Output:</strong> The model analyzes your input text and predicts your <span className="font-semibold text-red-600">4-letter MBTI personality type</span> (e.g., INTJ, ENFP, etc.).
          </li>
          <li>
            <strong>Continuous Improvement:</strong> We are continuously working to improve the accuracy and robustness of our model to provide you with the most insightful predictions.
          </li>
        </ul>

        <p className="text-lg text-gray-700">
          By leveraging advanced AI techniques like BERT and incorporating seamless multilingual support, we aim to offer a unique and insightful way to explore your personality through the lens of the MBTI framework.
        </p>
      </div>
    </div>
  );
};

export default ModelPage;
