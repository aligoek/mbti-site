// src/pages/TestPage.jsx
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import { TestContext } from '../context/TestContext';

const TestPage = () => {
  const {
    setMbtiResult,
    setTestProgress,
    setUserAnswers,
    setTestText,
    testText,
    getMbtiPredictionFromBackend,
    getMbtiPredictionFromFile,
    loading,
    error
  } = useContext(TestContext);
  
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const navigate = useNavigate();

  // Reset state when the page is loaded or the format changes
  useEffect(() => {
    setTestProgress(0);
    setUserAnswers([]);
    setMbtiResult(null);
    setTestText('');
    setFile(null);
    setFileName('');
  }, [selectedFormat, setTestProgress, setUserAnswers, setMbtiResult, setTestText]);

  const handlePrediction = async (predictionFunc, ...args) => {
    const result = await predictionFunc(...args);
    if (result) {
      navigate('/results');
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  // Renders the correct UI based on the selected format
  const renderTestInterface = () => {
    switch (selectedFormat) {
      case 'text':
        return (
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Text Analysis</h3>
            <p className="text-lg text-gray-600 mb-4">Please enter a text that provides information about your personality.</p>
            <textarea
              className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your text here..."
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => handlePrediction(getMbtiPredictionFromBackend, testText)}
                disabled={loading || !testText.trim()}
                className={`px-8 py-3 rounded-full font-semibold shadow-md transition duration-300 ${loading || !testText.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              >
                {loading ? 'Predicting...' : 'Predict My MBTI Type'}
              </button>
            </div>
          </div>
        );
      
      case 'audio':
      case 'video':
      case 'image':
        const formatDetails = {
          audio: { title: 'Audio Analysis', accept: 'audio/*', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1V6a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 1.5v17a1 1 0 01-1.707.707L5.586 15z" />
            </svg>
          ) },
          video: { title: 'Video Analysis', accept: 'video/*', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          ) },
          image: { title: 'Image Analysis', accept: 'image/*', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          ) },
        };
        const details = formatDetails[selectedFormat];
        return (
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">{details.title}</h3>
            <p className="text-lg text-gray-600 mb-6 text-center">Please upload a {selectedFormat} file.</p>
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {details.icon}
                  <p className="mb-2 text-sm text-gray-500 mt-2"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500">{details.accept.toUpperCase()} files</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" accept={details.accept} onChange={handleFileChange} />
            </label>
            {fileName && <p className="text-center text-gray-600 mt-4">Selected file: {fileName}</p>}
            {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => handlePrediction(getMbtiPredictionFromFile, file)}
                disabled={!file || loading}
                className={`px-8 py-3 rounded-full font-semibold shadow-md transition duration-300 ${!file || loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              >
                {loading ? 'Analyzing...' : 'Predict My MBTI Type'}
              </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const testFormats = [
    { 
        name: "Video Analysis", 
        description: "Provide a video as input and predict MBTI personality type based on the transcribed text from the video.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        ),
        color: "from-blue-100 to-blue-200"
    },
    { 
        name: "Audio Analysis", 
        description: "Provide an audio file as input and predict MBTI personality type based on the transcribed text from the audio.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1V6a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 1.5v17a1 1 0 01-1.707.707L5.586 15z" />
          </svg>
        ),
        color: "from-green-100 to-green-200"
    },
    { 
        name: "Text Analysis", 
        description: "Provide written text as input and predict MBTI personality type based on the given text.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        ),
        color: "from-red-100 to-red-200"
    },
    { 
        name: "Image Analysis", 
        description: "Provide an image (with text) as input and predict MBTI personality type based on the extracted text from the image.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        color: "from-yellow-100 to-yellow-200"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 font-inter min-h-screen bg-gray-50">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10 leading-tight">
        {selectedFormat ? 'Start Your Personality Analysis' : 'Choose Your Analysis Method'}
      </h1>
      <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        Select the format that best suits you to begin your journey of self-discovery.
      </p>

      {!selectedFormat ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {testFormats.map((format, index) => (
              <button 
                key={index}
                onClick={() => setSelectedFormat(format.name.split(' ')[0].toLowerCase())} 
                className={`bg-gradient-to-br ${format.color} p-6 rounded-xl shadow-lg transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col items-center justify-center text-center`}
              >
                <div className="mb-4">
                  {format.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{format.name}</h3>
                <p className="text-gray-700 text-sm">{format.description}</p>
              </button>
            ))}
          </div>

          {/* New section for benefits and model explanation */}
          <section className="my-16 bg-gradient-to-br from-purple-100 to-blue-100 p-10 rounded-xl shadow-lg text-center max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Unlock Deeper Self-Understanding</h2>
            <p className="text-xl text-gray-700 mb-8">
              Our advanced MBTI Analyser goes beyond traditional questionnaires. By leveraging cutting-edge AI, we provide a more nuanced and objective assessment of your personality based on your unique linguistic patterns. Discover insights that empower personal growth, improve relationships, and guide your career path.
            </p>
            <Link 
              to="/model" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Learn More About Our AI Model
              <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </section>
        </>
      ) : (
        <div>
          {renderTestInterface()}
          <div className="flex justify-center mt-8">
            <button 
              onClick={() => setSelectedFormat(null)} 
              className="text-blue-600 hover:underline font-medium flex items-center gap-1 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Select a different format
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestPage;
