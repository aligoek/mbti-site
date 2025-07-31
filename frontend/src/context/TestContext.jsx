// src/context/TestContext.jsx
import React, { useState, createContext } from 'react';

const TestContext = createContext();

const TestProvider = ({ children }) => {
  const [testProgress, setTestProgress] = useState(0); // 0-100
  const [userAnswers, setUserAnswers] = useState([]);
  const [mbtiResult, setMbtiResult] = useState(null); // e.g., 'INTJ'
  const [testText, setTestText] = useState(''); // Metin tabanlı test için kullanıcı girişi
  const [loading, setLoading] = useState(false); // Yükleme durumu için state
  const [error, setError] = useState(null); // Hata mesajları için state

  // Backend URL'i
  const BACKEND_URL = 'http://localhost:5000'; // Kendi backend sunucunuzun adresi

  // Yer tutucu test soruları (Bu kısım değişmedi)
  const questions = [
    {
      id: 1,
      type: 'text',
      question: "Bir partiye gittiğinizde genellikle:",
      options: [
        { text: "Yabancılar da dahil olmak üzere birçok kişiyle etkileşim kurar mısınız?", value: "E" },
        { text: "İyi tanıdığınız birkaç kişiyle mi etkileşim kurarsınız? ", value: "I" }
      ]
    },
    {
      id: 2,
      type: 'audio',
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Yer tutucu ses
      question: "Sesi dinleyin. Ton nasıl geliyor:",
      options: [
        { text: "Enerjik ve dışa dönük?", value: "E" },
        { text: "Sakin ve çekingen?", value: "I" }
      ]
    },
    {
      id: 3,
      type: 'image',
      imageUrl: "https://placehold.co/400x200/FF0000/FFFFFF?text=Resim+1", // Yer tutucu resim
      question: "Bu resmi gördüğünüzde aklınıza gelen ilk şey nedir?",
      options: [
        { text: "Genel izlenim ve olasılıklar?", value: "N" },
        { text: "Belirli ayrıntılar ve gerçekler?", value: "S" }
      ]
    },
    {
      id: 4,
      type: 'video',
      videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", // Yer tutucu video
      question: "Videoyu izleyin. Karakterlerin karar verme süreci hakkında ne düşünüyorsunuz?",
      options: [
        { text: "Mantıklı ve objektifler.", value: "T" },
        { text: "Empati kuruyorlar ve duyguları dikkate alıyorlar.", value: "F" }
      ]
    },
    {
      id: 5,
      type: 'text',
      question: "Bir proje üzerinde çalışırken, şunu mu tercih edersiniz:",
      options: [
        { text: "Her şeyi önceden planlamak?", value: "J" },
        { text: "Esnek olmak ve ilerledikçe uyum sağlamak?", value: "P" }
      ]
    }
  ];

  // MBTI tipini hesaplama fonksiyonu (basitleştirilmiş)
  const calculateMbti = (answers) => {
    const counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    answers.forEach(answer => {
      counts[answer]++;
    });

    let type = "";
    type += counts.E >= counts.I ? "E" : "I";
    type += counts.S >= counts.N ? "S" : "N";
    type += counts.T >= counts.F ? "T" : "F";
    type += counts.J >= counts.P ? "J" : "P";
    return type;
  };

  const submitAnswer = (questionId, answerValue) => {
    setUserAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      const existingIndex = newAnswers.findIndex(ans => ans.questionId === questionId);
      if (existingIndex > -1) {
        newAnswers[existingIndex] = { questionId, answerValue };
      } else {
        newAnswers.push({ questionId, answerValue });
      }
      return newAnswers;
    });

    // İlerleme çubuğunu güncelle
    const newProgress = Math.min(100, ((userAnswers.length + 1) / questions.length) * 100);
    setTestProgress(newProgress);

    // Tüm sorular cevaplandığında sonucu hesapla (basitleştirilmiş)
    if (userAnswers.length + 1 === questions.length) {
      const finalAnswers = [...userAnswers, { questionId, answerValue }]; // Mevcut cevabı dahil et
      const calculatedType = calculateMbti(finalAnswers.map(a => a.answerValue));
      setMbtiResult(calculatedType);
    }
  };

  // Backend'e metin gönderip MBTI tahmini alma fonksiyonu
  const getMbtiPredictionFromBackend = async (text) => {
    setLoading(true); // Yükleme başladığında loading state'ini true yap
    setError(null); // Önceki hataları temizle
    try {
      const response = await fetch(`${BACKEND_URL}/predict-mbti`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Backend\'den MBTI tahmini alınırken bilinmeyen bir hata oluştu.');
      }

      const data = await response.json();
      setMbtiResult(data.mbtiType); // Backend'den gelen mbtiType'ı doğrudan set et
      return data.mbtiType;
    } catch (err) {
      console.error("Backend'den MBTI tahmini alınırken hata oluştu:", err);
      setError(err.message || 'MBTI tahmini alınırken bir sorun oluştu.'); // Hata mesajını kaydet
      setMbtiResult("UNKNOWN"); // Hata durumunda bilinmeyen olarak ayarla
      return null;
    } finally {
      setLoading(false); // İşlem bittiğinde loading state'ini false yap
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
      getMbtiPredictionFromBackend, // Backend fonksiyonunu context'e ekle
      loading, // loading state'ini context'e ekle
      error // error state'ini context'e ekle
    }}>
      {children}
    </TestContext.Provider>
  );
};

export { TestContext, TestProvider };
