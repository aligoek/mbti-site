// src/context/TestContext.jsx
import React, { useState, createContext } from 'react';

const TestContext = createContext();

const TestProvider = ({ children }) => {
  const [testProgress, setTestProgress] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [mbtiResult, setMbtiResult] = useState(null);
  const [testText, setTestText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const BACKEND_URL = 'http://localhost:5000';

  // Placeholder questions (no changes)
  const questions = [
    // ... your existing questions ...
  ];

  // Function to submit answers for multi-choice tests (no changes)
  const submitAnswer = (questionId, answerValue) => {
    // ... existing implementation ...
  };

  // Function for text-based prediction (no changes)
  const getMbtiPredictionFromBackend = async (text) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BACKEND_URL}/predict-mbti`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get prediction from text.');
      }

      const data = await response.json();
      setMbtiResult(data.mbtiType);
      return data.mbtiType;
    } catch (err) {
      console.error("Error getting prediction from text:", err);
      setError(err.message);
      setMbtiResult("UNKNOWN");
      return null;
    } finally {
      setLoading(false);
    }
  };

  // --- NEW: Function for file-based (audio/video) prediction ---
  const getMbtiPredictionFromFile = async (file) => {
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`${BACKEND_URL}/predict-from-file`, {
        method: 'POST',
        body: formData, // No 'Content-Type' header needed, browser sets it
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to process the file.`);
      }

      const data = await response.json();
      setMbtiResult(data.mbtiType);
      return data.mbtiType;
    } catch (err) {
      console.error("Error getting prediction from file:", err);
      setError(err.message);
      setMbtiResult("UNKNOWN");
      return null;
    } finally {
      setLoading(false);
    }
  };


  return (
    <TestContext.Provider value={{
      testProgress,
      userAnswers,
      mbtiResult,
      questions,
      submitAnswer,
      setTestProgress,
      setUserAnswers,
      setMbtiResult,
      testText,
      setTestText,
      getMbtiPredictionFromBackend,
      getMbtiPredictionFromFile, // Add new function to context
      loading,
      error
    }}>
      {children}
    </TestContext.Provider>
  );
};

export { TestContext, TestProvider };
