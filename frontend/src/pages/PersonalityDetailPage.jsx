// src/pages/PersonalityDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const PersonalityDetailPage = () => {
  const { typeId } = useParams(); // URL'den tipi al, örn: 'intj'

  // Her MBTI tipi için detaylı yer tutucu veriler
  const detailedMbtiData = {
    "intj": {
      name: "Mimar",
      overview: "INTJ'ler stratejik, hayal gücü yüksek ve genellikle dünyayı iyileştirme konusunda güçlü bir arzuya sahiptirler. Mantığa ve verimliliğe her şeyden çok değer veren bağımsız düşünürlerdir. Büyük resmi görebilme ve uzun vadeli planlar geliştirebilme yetenekleriyle tanınırlar.",
      characteristics: [
        "Son derece analitik ve mantıklı",
        "Bağımsız ve kendine yeterli",
        "Stratejik ve vizyoner",
        "Yeterlilik ve bilgi ile hareket ederler",
        "Mesafeli veya çekingen algılanabilirler"
      ],
      cognitiveFunctions: {
        dominant: "İçe Dönük Sezgi (Ni)",
        auxiliary: "Dışa Dönük Düşünme (Te)",
        tertiary: "İçe Dönük Hissetme (Fi)",
        inferior: "Dışa Dönük Algılama (Se)"
      },
      areasForGrowth: [
        "Duygusal ifade ve empati geliştirme.",
        "Daha spontane deneyimlere açık olma.",
        "Başkalarını aşırı eleştirmekten kaçınma.",
        "Delegasyon yapmayı ve başkalarına güvenmeyi öğrenme."
      ],
      compatibilityNotes: "Paylaşılan sezgi ve tamamlayıcı düşünme/hissetme fonksiyonları nedeniyle genellikle ENTP'ler ve ENFP'lerle uyum sağlarlar."
    },
    "enfp": {
      name: "Kampanyacı",
      overview: "ENFP'ler coşkulu, yaratıcı ve sosyal özgür ruhlardır, genellikle partinin kalbinde yer alırlar. Değerleri ve başkalarıyla bağlantı kurma ve yeni olasılıkları keşfetme arzusuyla hareket ederler. Uyumlu ve başkalarına ilham vermekten hoşlanırlar.",
      characteristics: [
        "Coşkulu ve enerjik",
        "Yaratıcı ve hayal gücü yüksek",
        "Sosyal ve çekici",
        "Özgünlüğe ve bağlantıya değer verirler",
        "Kolayca dikkati dağılabilir veya aşırı taahhütte bulunabilirler"
      ],
      cognitiveFunctions: {
        dominant: "Dışa Dönük Sezgi (Ne)",
        auxiliary: "İçe Dönük Hissetme (Fi)",
        tertiary: "Dışa Dönük Düşünme (Te)",
        inferior: "İçe Dönük Algılama (Si)"
      },
      areasForGrowth: [
        "Organizasyon ve takip yeteneğini geliştirme.",
        "Duygusal yoğunluğu yönetme.",
        "Tükenmişliği önlemek için 'hayır' demeyi öğrenme.",
        "Gerektiğinde pratik detaylara odaklanma."
      ],
      compatibilityNotes: "Paylaşılan sezgi ve tamamlayıcı düşünme/hissetme fonksiyonları nedeniyle genellikle INTJ'ler ve INFJ'lerle uyum sağlarlar."
    },
    // Tüm 16 tip için detaylı verileri buraya ekleyin
  };

  const typeInfo = detailedMbtiData[typeId.toLowerCase()] || {
    name: "Tip Bulunamadı",
    overview: "Bu kişilik tipi için detaylı bilgi henüz mevcut değil.",
    characteristics: [],
    cognitiveFunctions: {},
    areasForGrowth: [],
    compatibilityNotes: ""
  };

  return (
    <div className="container mx-auto px-4 py-8 font-inter min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">{typeInfo.name} ({typeId.toUpperCase()})</h1>
      <p className="text-xl text-center text-gray-600 mb-10">{typeInfo.overview}</p>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Özellikler</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          {typeInfo.characteristics.map((char, index) => (
            <li key={index}>{char}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Bilişsel Fonksiyonlar</h2>
        {typeInfo.cognitiveFunctions.dominant ? (
          <div className="space-y-3 text-lg text-gray-700">
            <p><strong>Baskın:</strong> {typeInfo.cognitiveFunctions.dominant}</p>
            <p><strong>Yardımcı:</strong> {typeInfo.cognitiveFunctions.auxiliary}</p>
            <p><strong>Üçüncül:</strong> {typeInfo.cognitiveFunctions.tertiary}</p>
            <p><strong>Alt:</strong> {typeInfo.cognitiveFunctions.inferior}</p>
          </div>
        ) : (
          <p className="text-lg text-gray-700">Bilişsel fonksiyon detayları mevcut değil.</p>
        )}
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Gelişim Alanları</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          {typeInfo.areasForGrowth.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Uyumluluk Notları</h2>
        <p className="text-lg text-gray-700">{typeInfo.compatibilityNotes}</p>
      </div>
    </div>
  );
};

export default PersonalityDetailPage;
