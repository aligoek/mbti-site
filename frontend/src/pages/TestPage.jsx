// src/pages/TestPage.jsx
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TestContext } from '../context/TestContext';

const TestPage = () => {
  const { questions, testProgress, submitAnswer, mbtiResult, setTestProgress, setUserAnswers, setMbtiResult, testText, setTestText, getMbtiPredictionFromBackend } = useContext(TestContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedFormat, setSelectedFormat] = useState(null); // 'video', 'audio', 'text', 'image'
  const [loadingPrediction, setLoadingPrediction] = useState(false); // Tahmin yükleniyor durumu
  const [predictionError, setPredictionError] = useState(null); // Tahmin hatası durumu
  const navigate = useNavigate();

  // Test sayfasına girildiğinde test durumunu sıfırla
  useEffect(() => {
    setTestProgress(0);
    setUserAnswers([]);
    setMbtiResult(null);
    setCurrentQuestionIndex(0);
    setSelectedFormat(null); // Format seçimini sıfırla
    setTestText(''); // Metin testini sıfırla
    setPredictionError(null); // Hata mesajını sıfırla
  }, [setTestProgress, setUserAnswers, setMbtiResult, setTestText]);

  const handleFormatSelect = (format) => {
    setSelectedFormat(format);
    setCurrentQuestionIndex(0); // Seçilen format için ilk sorudan başla
  };

  // Sadece çoktan seçmeli sorular için (video, audio, image)
  const handleAnswer = (answerValue) => {
    submitAnswer(questions[currentQuestionIndex].id, answerValue);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      // Tüm sorular cevaplandı, sonuç sayfasına git
      navigate('/results');
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      // Son soru ise ve metin testi değilse sonuçlara git
      if (selectedFormat !== 'text') {
        navigate('/results');
      }
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  // Metin testi için tahmin yapma
  const handleTextTestSubmit = async () => {
    if (!testText.trim()) {
      setPredictionError("Lütfen tahmin yapmak için bir metin girin.");
      return;
    }
    setLoadingPrediction(true);
    setPredictionError(null);
    const result = await getMbtiPredictionFromBackend(testText);
    setLoadingPrediction(false);
    if (result) {
      navigate('/results');
    } else {
      setPredictionError("Tahmin alınamadı. Lütfen daha sonra tekrar deneyin.");
    }
  };

  // Seçilen formata göre soruları filtrele
  const filteredQuestions = questions.filter(q => q.type === selectedFormat);
  const displayQuestion = filteredQuestions[currentQuestionIndex];

  if (!selectedFormat) {
    return (
      <div className="container mx-auto px-4 py-8 font-inter min-h-screen">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Tercih Ettiğiniz Test Formatını Seçin</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <button
            onClick={() => handleFormatSelect('video')}
            className="bg-blue-100 hover:bg-blue-200 transition duration-300 p-6 rounded-xl shadow-lg text-center flex flex-col items-center justify-center transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg className="w-16 h-16 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-5 4v-4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H11a1 1 0 01-1-1z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h10a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"></path>
            </svg>
            <span className="text-2xl font-semibold text-gray-800">Video Testi</span>
          </button>
          <button
            onClick={() => handleFormatSelect('audio')}
            className="bg-green-100 hover:bg-green-200 transition duration-300 p-6 rounded-xl shadow-lg text-center flex flex-col items-center justify-center transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            <svg className="w-16 h-16 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13m-6 0v-3l-12 3V9l12-3V19zm0-6.28L9.75 12l.75-.72V19m-6-6.28L3.75 12l.75-.72V19"></path>
            </svg>
            <span className="text-2xl font-semibold text-gray-800">Ses Testi</span>
          </button>
          <button
            onClick={() => handleFormatSelect('text')}
            className="bg-red-100 hover:bg-red-200 transition duration-300 p-6 rounded-xl shadow-lg text-center flex flex-col items-center justify-center transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            <svg className="w-16 h-16 text-red-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M12 16h.01"></path>
            </svg>
            <span className="text-2xl font-semibold text-gray-800">Metin Testi</span>
          </button>
          <button
            onClick={() => handleFormatSelect('image')}
            className="bg-yellow-100 hover:bg-yellow-200 transition duration-300 p-6 rounded-xl shadow-lg text-center flex flex-col items-center justify-center transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            <svg className="w-16 h-16 text-yellow-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span className="text-2xl font-semibold text-gray-800">Görsel Testi</span>
          </button>
        </div>
      </div>
    );
  }

  // Metin testi formatı için özel render
  if (selectedFormat === 'text') {
    return (
      <div className="container mx-auto px-4 py-8 font-inter min-h-screen">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">MBTI Testi - Metin Formatı</h2>
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-2xl mx-auto">
          <p className="text-lg text-gray-600 mb-4">Lütfen kişiliğiniz hakkında bilgi veren bir metin girin. Bu bir günlük girişi, bir hikaye veya kendinizi ifade eden herhangi bir yazı olabilir.</p>
          <textarea
            className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 resize-y"
            placeholder="Metninizi buraya girin..."
            value={testText}
            onChange={(e) => setTestText(e.target.value)}
          ></textarea>
          {predictionError && (
            <p className="text-red-500 text-sm mt-2">{predictionError}</p>
          )}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleTextTestSubmit}
              disabled={loadingPrediction}
              className={`px-8 py-3 rounded-full font-semibold shadow-md transition duration-300 ease-in-out ${
                loadingPrediction
                  ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300'
              }`}
            >
              {loadingPrediction ? 'Tahmin Ediliyor...' : 'MBTI Tipimi Tahmin Et'}
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setSelectedFormat(null)} // Format seçimine geri dön
              className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out text-sm"
            >
              Format Seçimine Geri Dön
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Diğer test formatları için render
  if (!displayQuestion) {
    return (
      <div className="container mx-auto px-4 py-8 font-inter text-center min-h-screen">
        <p className="text-xl text-gray-700">Seçilen format için soru yok veya test tamamlandı.</p>
        {mbtiResult && (
          <button
            onClick={() => navigate('/results')}
            className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Sonuçları Görüntüle
          </button>
        )}
      </div>
    );
  }

  const progressPercentage = ((currentQuestionIndex + 1) / filteredQuestions.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8 font-inter min-h-screen">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">MBTI Testi - {selectedFormat.charAt(0).toUpperCase() + selectedFormat.slice(1)} Formatı</h2>

      {/* İlerleme Çubuğu */}
      <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Soru Kartı */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-2xl mx-auto">
        <p className="text-lg text-gray-600 mb-4">Soru {currentQuestionIndex + 1} / {filteredQuestions.length}</p>
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">{displayQuestion.question}</h3>

        {/* Medya (video, ses, görsel) */}
        {displayQuestion.type === 'video' && displayQuestion.videoUrl && (
          <div className="mb-6 rounded-lg overflow-hidden shadow-md">
            <video controls className="w-full h-auto">
              <source src={displayQuestion.videoUrl} type="video/mp4" />
              Tarayıcınız video etiketini desteklemiyor.
            </video>
          </div>
        )}
        {displayQuestion.type === 'audio' && displayQuestion.audioUrl && (
          <div className="mb-6">
            <audio controls className="w-full">
              <source src={displayQuestion.audioUrl} type="audio/mpeg" />
              Tarayıcınız ses öğesini desteklemiyor.
            </audio>
          </div>
        )}
        {displayQuestion.type === 'image' && displayQuestion.imageUrl && (
          <div className="mb-6 flex justify-center">
            <img
              src={displayQuestion.imageUrl}
              alt="Test Görseli"
              className="max-w-full h-auto rounded-lg shadow-md"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x200/CCCCCC/000000?text=Resim+Yukleme+Hatasi"; }}
            />
          </div>
        )}

        {/* Seçenekler */}
        <div className="space-y-4">
          {displayQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              className="w-full text-left bg-gray-50 hover:bg-blue-100 border border-gray-200 text-gray-800 py-3 px-5 rounded-lg shadow-sm transition duration-200 ease-in-out transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {option.text}
            </button>
          ))}
        </div>

        {/* Navigasyon Butonları */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handleBack}
            disabled={currentQuestionIndex === 0}
            className={`px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out ${
              currentQuestionIndex === 0
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-md'
            }`}
          >
            Geri
          </button>
          {currentQuestionIndex < filteredQuestions.length - 1 ? (
            <button
              onClick={handleNext}
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              İleri
            </button>
          ) : (
            <button
              onClick={() => navigate('/results')}
              className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-purple-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              Sonuçları Görüntüle
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
