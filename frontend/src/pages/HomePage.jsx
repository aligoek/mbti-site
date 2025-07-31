// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleStartTestClick = () => {
    navigate('/test');
  };

  const testFormats = [
    { name: "Video Testi", icon: (
      <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-5 4v-4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H11a1 1 0 01-1-1z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h10a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"></path>
      </svg>
    ), description: "Kısa video kliplerle etkileşim kurun ve tepkilerinizle ilgili soruları yanıtlayın." },
    { name: "Ses Testi", icon: (
      <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13m-6 0v-3l-12 3V9l12-3V19zm0-6.28L9.75 12l.75-.72V19m-6-6.28L3.75 12l.75-.72V19"></path>
      </svg>
    ), description: "Çeşitli ses senaryolarını dinleyin ve ton, içerik veya duygu hakkında soruları yanıtlayın." },
    { name: "Metin Testi", icon: (
      <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M12 16h.01"></path>
      </svg>
    ), description: "Geleneksel anket sorularını ve senaryo tabanlı istemleri yanıtlayın." },
    { name: "Görsel Testi", icon: (
      <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
    ), description: "Bilişsel tercihlerinizi ortaya çıkarmak için görselleri ve infografikleri yorumlayın." }
  ];

  const mbtiBenefits = [
    "Gelişmiş öz farkındalık ve kişisel gelişim.",
    "Geliştirilmiş iletişim ve ilişkiler.",
    "Daha iyi kariyer planlaması ve iş tatmini.",
    "Ekiplerde farklı bakış açılarını anlama.",
    "Doğal güçlü yönleri ve gelişim alanlarını belirleme."
  ];

  const testimonials = [
    { quote: "Bu test kendimi daha önce hiç olmadığı kadar anlamama yardımcı oldu!", author: "Jane Doe, Pazarlama Uzmanı" },
    { quote: "Kariyer yollarına ilişkin içgörüler inanılmaz derecede doğru ve yardımcıydı.", author: "John Smith, Yazılım Mühendisi" },
    { quote: "Gerçekten ilgi çekici ve bilgilendirici bir deneyim. Şiddetle tavsiye edilir!", author: "Emily White, Öğrenci" }
  ];

  return (
    <div className="container mx-auto px-4 py-8 font-inter">
      {/* Kahraman Bölümü */}
      <section className="text-center my-12 bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-xl shadow-lg">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          <span className="text-blue-600">MBTI Analyser</span> ile Gerçek Benliğinizi Keşfedin
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          İlgi çekici, etkileşimli testlerle benzersiz kişilik tipinizi ortaya çıkarın. Güçlü yönleriniz, tercihleriniz ve potansiyeliniz hakkında derinlemesine içgörüler edinin.
        </p>
        <button
          onClick={handleStartTestClick}
          className="bg-blue-600 text-white px-10 py-4 rounded-full text-xl font-bold shadow-xl hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          MBTI Testini Şimdi Başlatın!
        </button>
      </section>

      {/* Test Formatları Bölümü */}
      <section className="my-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Kendini Keşfetme Yolunuzu Seçin</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testFormats.map((format, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center border border-gray-200 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                {format.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{format.name}</h3>
              <p className="text-gray-600">{format.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MBTI Faydaları Bölümü */}
      <section className="my-16 bg-blue-50 p-10 rounded-xl shadow-inner">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">MBTI Tipinizi Neden Anlamalısınız?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center md:items-start">
            <ul className="space-y-4 text-lg text-gray-700 list-disc list-inside">
              {mbtiBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2 text-2xl">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://placehold.co/400x300/60A5FA/FFFFFF?text=MBTI+Faydalari"
              alt="MBTI Faydaları İllüstrasyonu"
              className="rounded-lg shadow-md"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/60A5FA/FFFFFF?text=Resim+Yukleme+Hatasi"; }}
            />
          </div>
        </div>
      </section>

      {/* Referanslar Bölümü */}
      <section className="my-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Kullanıcılarımız Ne Diyor?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <p className="text-gray-900 font-semibold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
