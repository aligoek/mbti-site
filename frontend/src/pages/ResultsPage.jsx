// src/pages/ResultsPage.jsx
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TestContext } from '../context/TestContext';

const ResultsPage = () => {
  // TestContext'ten mbtiResult'ı doğrudan alıyoruz
  const { mbtiResult } = useContext(TestContext);
  const navigate = useNavigate();

  // MBTI tipleri için detaylı veriler
  const mbtiData = {
    "ISTJ": {
      name: "Müfettiş",
      summary: "Pratik, gerçekçi, sorumlu ve organize. Detaylara dikkat ederler ve görevlerini ciddiye alırlar.",
      strengths: ["Rasyonel", "Sorumlu", "Detaycı", "Güvenilir"],
      weaknesses: ["Esnek olmayan", "Duygusuz görünebilir", "Değişime dirençli", "Eleştirel"],
      careerPaths: ["Muhasebeci", "Yönetici", "Polis Memuru", "Asker", "Bilgi İşlem Analisti"],
      relationshipInsights: "İlişkilerde sadakat, güvenilirlik ve pratik desteğe değer verirler.",
      famousIndividuals: ["George Washington", "Angela Merkel", "Natalie Portman"]
    },
    "ISFJ": {
      name: "Koruyucu",
      summary: "Sıcakkanlı, vicdanlı, yardımsever ve sadık. Başkalarının ihtiyaçlarına duyarlıdırlar.",
      strengths: ["Empatik", "Sadık", "Sabırlı", "Pratik"],
      weaknesses: ["Aşırı fedakar", "Çatışmadan kaçınan", "Eleştiriye duyarlı", "Kendini ihmal eden"],
      careerPaths: ["Hemşire", "Öğretmen", "Sosyal Hizmet Uzmanı", "Danışman", "İnsan Kaynakları"],
      relationshipInsights: "İlişkilerde uyum, destek ve derin duygusal bağlara önem verirler.",
      famousIndividuals: ["Kraliçe Elizabeth II", "Anne Hathaway", "Vin Diesel"]
    },
    "INFJ": {
      name: "Danışman",
      summary: "İdealist, derin düşünen, empatik ve kararlı. İnsanlığa hizmet etme arzusu taşırlar.",
      strengths: ["Vizyoner", "Empatik", "Kararlı", "İlham Verici"],
      weaknesses: ["Aşırı hassas", "Mükemmeliyetçi", "Gizemli", "Tükenmişlik riski"],
      careerPaths: ["Yazar", "Danışman", "Psikolog", "Öğretim Görevlisi", "Sanatçı"],
      relationshipInsights: "Derin, anlamlı bağlantılar ve ortak değerler ararlar.",
      famousIndividuals: ["Martin Luther King Jr.", "Nelson Mandela", "Oprah Winfrey"]
    },
    "INTJ": {
      name: "Mimar",
      summary: "Mantıklı, yenilikçi, bağımsız ve stratejik. Karmaşık sorunlara çözüm bulmayı severler.",
      strengths: ["Stratejik", "Mantıklı", "Bağımsız", "Kararlı"],
      weaknesses: ["Kibirli", "Duygusuz", "Sosyal beceriksiz", "Aşırı analitik"],
      careerPaths: ["Bilim İnsanı", "Mühendis", "Stratejist", "Profesör", "Mimar"],
      relationshipInsights: "İlişkilerde entelektüel bağlantıya ve kişisel gelişime değer verirler.",
      famousIndividuals: ["Elon Musk", "Michelle Obama", "Isaac Newton"]
    },
    "ISTP": {
      name: "Usta",
      summary: "Pratik, analitik, spontane ve meraklı. Ellerini kullanmayı ve sorunları çözmeyi severler.",
      strengths: ["Pratik", "Gözlemci", "Esnek", "Sakin"],
      weaknesses: ["Duygusuz", "Risk alan", "Taahhüt sorunları", "Sıkılabilir"],
      careerPaths: ["Mühendis", "Tamirci", "Pilot", "Sporcu", "Acil Durum Çalışanı"],
      relationshipInsights: "İlişkilerde özgürlüğe, bağımsızlığa ve ortak aktivitelere değer verirler.",
      famousIndividuals: ["Clint Eastwood", "Bruce Lee", "Bear Grylls"]
    },
    "ISFP": {
      name: "Besteci",
      summary: "Sanatsal, nazik, esnek ve duyarlı. Anı yaşarlar ve güzelliği takdir ederler.",
      strengths: ["Sanatsal", "Duyarlı", "Esnek", "Nazik"],
      weaknesses: ["Çatışmadan kaçınan", "Kararsız", "Eleştiriye duyarlı", "Planlama zorluğu"],
      careerPaths: ["Sanatçı", "Müzisyen", "Tasarımcı", "Veteriner", "Fizik Tedavi Uzmanı"],
      relationshipInsights: "İlişkilerde uyum, duygusal destek ve ortak deneyimler ararlar.",
      famousIndividuals: ["Michael Jackson", "Britney Spears", "Avril Lavigne"]
    },
    "INFP": {
      name: "Arabulucu",
      summary: "İdealist, yaratıcı, meraklı ve değer odaklı. Kişisel değerlerine bağlıdırlar.",
      strengths: ["Yaratıcı", "Empatik", "İdealist", "Açık Fikirli"],
      weaknesses: ["Pratik olmayan", "Kararsız", "Aşırı duygusal", "Eleştiriye duyarlı"],
      careerPaths: ["Yazar", "Sanatçı", "Danışman", "Psikolog", "Sosyal Hizmet Uzmanı"],
      relationshipInsights: "Derin, otantik bağlantılar ve ortak değerler ararlar.",
      famousIndividuals: ["William Shakespeare", "J.R.R. Tolkien", "Johnny Depp"]
    },
    "INTP": {
      name: "Mantıkçı",
      summary: "Mantıklı, yenilikçi, bağımsız ve analitik. Teorik problemlere çözüm bulmayı severler.",
      strengths: ["Mantıklı", "Yenilikçi", "Analitik", "Bağımsız"],
      weaknesses: ["Sosyal beceriksiz", "Duygusuz", "Aşırı eleştirel", "Pratik olmayan"],
      careerPaths: ["Bilim İnsanı", "Bilgisayar Programcısı", "Filozof", "Araştırmacı", "Üniversite Profesörü"],
      relationshipInsights: "İlişkilerde entelektüel uyum ve bağımsızlığa değer verirler.",
      famousIndividuals: ["Albert Einstein", "Bill Gates", "Marie Curie"]
    },
    "ESTP": {
      name: "Girişimci",
      summary: "Enerjik, spontane, gerçekçi ve cesur. Risk almayı ve yeni deneyimler yaşamayı severler.",
      strengths: ["Enerjik", "Pratik", "Spontane", "İkna Edici"],
      weaknesses: ["Sabırsız", "Risk alan", "Duygusuz", "Uzun vadeli planlama zorluğu"],
      careerPaths: ["Girişimci", "Pazarlamacı", "Satış Temsilcisi", "Sporcu", "Acil Durum Çalışanı"],
      relationshipInsights: "İlişkilerde heyecan, spontanlık ve ortak aktivitelere değer verirler.",
      famousIndividuals: ["Donald Trump", "Madonna", "Ernest Hemingway"]
    },
    "ESFP": {
      name: "Eğlendirici",
      summary: "Dışa dönük, neşeli, spontane ve sosyal. İnsanlarla etkileşim kurmayı severler.",
      strengths: ["Sosyal", "Neşeli", "Esnek", "Pratik"],
      weaknesses: ["Dikkati dağılan", "Planlama zorluğu", "Aşırı duygusal", "Eleştiriye duyarlı"],
      careerPaths: ["Eğlence Sektörü", "Pazarlamacı", "Öğretmen", "Moda Tasarımcısı", "Tur Rehberi"],
      relationshipInsights: "İlişkilerde eğlence, heyecan ve duygusal desteğe önem verirler.",
      famousIndividuals: ["Marilyn Monroe", "Elvis Presley", "Jamie Oliver"]
    },
    "ENFP": {
      name: "Kampanyacı",
      summary: "Coşkulu, yaratıcı, sosyal ve ilham verici. Yeni fikirler üretmeyi severler.",
      strengths: ["Yaratıcı", "Coşkulu", "Sosyal", "İlham Verici"],
      weaknesses: ["Düzensiz", "Aşırı düşünen", "Kolayca stres olan", "Çok duygusal olabilirler"],
      careerPaths: ["Gazeteci", "Danışman", "Sanatçı", "Girişimci", "Müşavir"],
      relationshipInsights: "Derin, anlamlı bağlantılar ve paylaşılan maceralar ararlar.",
      famousIndividuals: ["Will Smith", "Robin Williams", "Quentin Tarantino"]
    },
    "ENTP": {
      name: "Münazaracı",
      summary: "Zeki, tartışmacı, yenilikçi ve hızlı düşünen. Yeni fikirleri keşfetmeyi severler.",
      strengths: ["Zeki", "Yenilikçi", "Tartışmacı", "Hızlı Düşünen"],
      weaknesses: ["Sabırsız", "Duygusuz", "Aşırı eleştirel", "Taahhüt sorunları"],
      careerPaths: ["Avukat", "Mühendis", "Girişimci", "Siyasetçi", "Danışman"],
      relationshipInsights: "İlişkilerde entelektüel uyarım ve açık iletişime değer verirler.",
      famousIndividuals: ["Mark Twain", "Thomas Edison", "Sacha Baron Cohen"]
    },
    "ESTJ": {
      name: "Yönetici",
      summary: "Pratik, düzenli, kararlı ve geleneksel. Liderlik etmeyi ve sorumluluk almayı severler.",
      strengths: ["Organize", "Kararlı", "Sorumlu", "Lider"],
      weaknesses: ["Esnek olmayan", "Duygusuz", "Aşırı kontrolcü", "Eleştirel"],
      careerPaths: ["Yönetici", "Polis Şefi", "Askeri Lider", "Finansçı", "Proje Yöneticisi"],
      relationshipInsights: "İlişkilerde düzen, sorumluluk ve pratik desteğe önem verirler.",
      famousIndividuals: ["George W. Bush", "Condoleezza Rice", "Dr. Phil"]
    },
    "ESFJ": {
      name: "Konsül",
      summary: "Sıcakkanlı, sosyal, vicdanlı ve yardımsever. Başkalarına hizmet etmeyi severler.",
      strengths: ["Sosyal", "Yardımsever", "Organize", "Sadık"],
      weaknesses: ["Aşırı hassas", "Çatışmadan kaçınan", "Onay arayan", "Kendini ihmal eden"],
      careerPaths: ["Öğretmen", "Hemşire", "Sosyal Hizmet Uzmanı", "Danışman", "Satış Temsilcisi"],
      relationshipInsights: "İlişkilerde uyum, destek ve duygusal bağlara önem verirler.",
      famousIndividuals: ["Bill Clinton", "Jennifer Garner", "Taylor Swift"]
    },
    "ENFJ": {
      name: "Öğretmen",
      summary: "Karizmatik, ilham verici, empatik ve liderlik özellikleri taşıyan. Başkalarına rehberlik etmeyi severler.",
      strengths: ["Karizmatik", "İlham Verici", "Empatik", "Lider"],
      weaknesses: ["Aşırı fedakar", "Aşırı duygusal", "Mükemmeliyetçi", "Kendini ihmal eden"],
      careerPaths: ["Öğretmen", "Danışman", "Yönetici", "Politikacı", "İnsan Kaynakları"],
      relationshipInsights: "İlişkilerde derin bağlantılar, büyüme ve karşılıklı destek ararlar.",
      famousIndividuals: ["Barack Obama", "Oprah Winfrey", "Maya Angelou"]
    },
    "ENTJ": {
      name: "Komutan",
      summary: "Kararlı, stratejik, mantıklı ve lider. Hedeflere ulaşmak için organize olmayı severler.",
      strengths: ["Lider", "Stratejik", "Mantıklı", "Kararlı"],
      weaknesses: ["Kibirli", "Duygusuz", "Sabırsız", "Aşırı kontrolcü"],
      careerPaths: ["CEO", "Yönetici", "Avukat", "Girişimci", "Siyasetçi"],
      relationshipInsights: "İlişkilerde entelektüel uyum, büyüme ve ortak hedeflere değer verirler.",
      famousIndividuals: ["Steve Jobs", "Margaret Thatcher", "Gordon Ramsay"]
    },
    "UNKNOWN": {
      name: "Bilinmeyen Tip",
      summary: "MBTI tipiniz belirlenemedi. Lütfen testi tekrar deneyin veya daha fazla metin girin.",
      strengths: [],
      weaknesses: [],
      careerPaths: [],
      relationshipInsights: "",
      famousIndividuals: []
    }
  };

  // mbtiResult boşsa veya geçerli bir tip değilse UNKNOWN olarak ayarla
  const resultInfo = mbtiResult && mbtiData[mbtiResult] ? mbtiData[mbtiResult] : mbtiData["UNKNOWN"];

  // mbtiResult'ın null olması durumunda ana sayfaya yönlendirme
  useEffect(() => {
    if (!mbtiResult) {
      console.warn("MBTI sonucu bulunamadı, ana sayfaya yönlendiriliyor.");
      navigate('/');
    }
  }, [mbtiResult, navigate]);

  // mbtiResult gelene kadar veya yönlendirme yapılana kadar yükleme göstergesi
  if (!mbtiResult) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
          <p className="text-xl text-gray-700">Sonuçlar yükleniyor veya test tamamlanmadı...</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 font-inter min-h-screen">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">MBTI Test Sonuçlarınız</h2>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-3xl mx-auto text-center">
        <>
          <p className="text-2xl text-gray-600 mb-4">Kişilik Tipiniz:</p>
          <h3 className="text-6xl font-extrabold text-blue-600 mb-6 animate-pulse">{mbtiResult}</h3>
          <p className="text-3xl font-semibold text-gray-800 mb-8">{resultInfo.name}</p>
          <p className="text-lg text-gray-700 mb-8">{resultInfo.summary}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                Güçlü Yönler
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {resultInfo.strengths.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg>
                Zayıf Yönler
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {resultInfo.weaknesses.map((w, i) => <li key={i}>{w}</li>)}
              </ul>
            </div>
          </div>

          <div className="text-left mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <svg className="w-6 h-6 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17.555 17.293A4.999 4.999 0 0016 15c-1.399 0-2.736.357-3.927.97A6.001 6.001 0 0110 18a6.001 6.001 0 01-2.073-2.03C6.736 15.357 5.399 15 4 15a4.999 4.999 0 00-1.555 2.293A8 8 0 1010 2a8 8 0 007.555 15.293z"></path></svg>
              Kariyer Yolları
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {resultInfo.careerPaths.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>

          <div className="text-left mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <svg className="w-6 h-6 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
              İlişki İçgörüleri
            </h4>
            <p className="text-gray-700">{resultInfo.relationshipInsights}</p>
          </div>

          {resultInfo.famousIndividuals.length > 0 && (
            <div className="text-left mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 012.586 13H4v1a1 1 0 011 1h12a1 1 0 011-1v-1h1.414a1 1 0 01.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 100-6 3 3 0 000 6z"></path></svg>
                Bu Tipteki Ünlü Kişiler
              </h4>
              <p className="text-gray-700">{resultInfo.famousIndividuals.join(', ')}</p>
            </div>
          )}

          <button
            onClick={() => navigate(`/types/${mbtiResult.toLowerCase()}`)}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 mt-6"
          >
            Detaylı Bilgi İçin Tıklayın
          </button>
        </>
      </div>
    </div>
  );
};

export default ResultsPage;
