// src/pages/PersonalityTypesPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PersonalityTypesPage = () => {
  const navigate = useNavigate();

  const allMbtiTypes = [
    { type: "ISTJ", name: "Lojistikçi", summary: "Pratik ve gerçekçi bireyler." },
    { type: "ISFJ", name: "Savunmacı", summary: "Adanmış ve sıcak koruyucular." },
    { type: "INFJ", name: "Avukat", summary: "Sessiz ve mistik, ancak çok ilham verici ve yorulmak bilmeyen idealistler." },
    { type: "INTJ", name: "Mimar", summary: "Hayal gücü yüksek ve stratejik düşünenler." },
    { type: "ISTP", name: "Virtüöz", summary: "Cesur ve pratik deneyciler." },
    { type: "ISFP", name: "Maceracı", summary: "Esnek ve çekici sanatçılar." },
    { type: "INFP", name: "Arabulucu", summary: "Şiirsel, nazik ve fedakar insanlar." },
    { type: "INTP", name: "Mantıkçı", summary: "Doymak bilmez bilgi susuzluğu olan yenilikçi mucitler." },
    { type: "ESTP", name: "Girişimci", summary: "Zeki, enerjik ve çok algılayıcı insanlar." },
    { type: "ESFP", name: "Eğlendirici", summary: "Spontane, enerjik ve coşkulu insanlar." },
    { type: "ENFP", name: "Kampanyacı", summary: "Coşkulu, yaratıcı ve sosyal özgür ruhlar." },
    { type: "ENTP", name: "Tartışmacı", summary: "Entelektüel bir meydan okumaya direnemeyen zeki ve meraklı düşünenler." },
    { type: "ESTJ", name: "Yönetici", summary: "İşleri veya insanları yönetmede üstün, mükemmel yöneticiler." },
    { type: "ESFJ", name: "Konsolos", summary: "Olağanüstü ilgili, sosyal ve popüler insanlar." },
    { type: "ENFJ", name: "Başrol Oyuncusu", summary: "Karizmatik ve ilham veren liderler." },
    { type: "ENTJ", name: "Komutan", summary: "Cesur, hayal gücü yüksek ve güçlü iradeli liderler." },
  ];

  return (
    <div className="container mx-auto px-4 py-8 font-inter min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">16 Kişilik Tipi</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allMbtiTypes.map((typeInfo) => (
          <div
            key={typeInfo.type}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 cursor-pointer hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
            onClick={() => navigate(`/types/${typeInfo.type.toLowerCase()}`)}
          >
            <h3 className="text-3xl font-bold text-blue-600 mb-2">{typeInfo.type}</h3>
            <p className="text-xl font-semibold text-gray-900 mb-3">{typeInfo.name}</p>
            <p className="text-gray-700">{typeInfo.summary}</p>
            <button className="mt-4 text-blue-600 hover:underline font-medium">Daha Fazla Bilgi Edinin &rarr;</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalityTypesPage;
