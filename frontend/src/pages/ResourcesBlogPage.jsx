// src/pages/ResourcesBlogPage.jsx
import React, { useState } from 'react';

const ResourcesBlogPage = () => {
  const articles = [
    {
      id: 1,
      title: "MBTI Sonuçlarınızı Anlamak",
      summary: "MBTI tipinizin günlük yaşamınız ve kişisel gelişiminiz için ne anlama geldiğini daha derinlemesine inceleyin.",
      link: "#"
    },
    {
      id: 2,
      title: "İş Yerinde MBTI: Etkili Ekipler Oluşturmak",
      summary: "Farklı MBTI tiplerinin profesyonel bir ortamda nasıl etkili bir şekilde işbirliği yapabileceğini keşfedin.",
      link: "#"
    },
    {
      id: 3,
      title: "Kişilik Teorilerinin Tarihi ve Evrimi",
      summary: "Kişilik psikolojisinin kökenlerine ve MBTI'nin gelişimine kısa bir bakış.",
      link: "#"
    },
  ];

  const faq = [
    {
      question: "MBTI bilimsel olarak doğrulanmış mıdır?",
      answer: "MBTI yaygın olarak kullanılan bir psikolojik araçtır, ancak bilimsel geçerliliği psikoloji camiasında devam eden bir tartışma konusudur. Kendi kendine raporlama içgörüleri ve pratik uygulamaları nedeniyle övülse de, bazı eleştirmenler test-yeniden test güvenilirliği ve öngörücü geçerlilik gibi psikometrik özelliklerini tartışmaktadır. En iyi şekilde kendini anlama ve kişisel gelişim için bir araç olarak görülmelidir, kesin bir bilimsel ölçüm olarak değil. Testlerimiz, kendini keşfetme için güçlü bir gösterge sonucu sağlamayı amaçlamaktadır."
    },
    {
      question: "MBTI tipim zamanla değişebilir mi?",
      answer: "MBTI, genellikle zamanla sabit kabul edilen 'tercih ettiğiniz' çalışma şeklinizi belirlemeyi amaçlar. Ancak, yaşam deneyimleri ve kişisel gelişim, tercihlerinizi ifade etme şeklinizde değişikliklere yol açabilir. Temel tipinizin kökten değişmesi pek olası olmasa da, davranışlarınız ve farklı durumlara nasıl uyum sağladığınız gelişebilir."
    },
    {
      question: "Online MBTI testleri ne kadar doğrudur?",
      answer: "Online MBTI testleri, tipiniz hakkında iyi bir fikir verebilir, ancak genellikle resmi, profesyonelce uygulanan MBTI değerlendirmesi kadar kapsamlı veya ayrıntılı değildir. En doğru ve derinlemesine anlayış için, sertifikalı bir uygulayıcı ile resmi değerlendirmeyi almanız önerilir. Testlerimiz, kendini keşfetme için güçlü bir gösterge sonucu sağlamayı amaçlamaktadır."
    },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8 font-inter min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Kaynaklar & Blog</h1>

      {/* Blog Yazıları Bölümü */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center md:text-left">Son Makaleler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{article.title}</h3>
              <p className="text-gray-700 mb-4">{article.summary}</p>
              <a href={article.link} className="text-blue-600 hover:underline font-medium">Daha Fazla Oku &rarr;</a>
            </div>
          ))}
        </div>
      </section>

      {/* SSS Bölümü */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center md:text-left">Sıkça Sorulan Sorular</h2>
        <div className="space-y-4">
          {faq.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <button
                className="w-full text-left p-6 flex justify-between items-center text-xl font-medium text-gray-800 hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openFAQ === index && (
                <div className="p-6 pt-0 text-gray-700 text-lg">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResourcesBlogPage;
