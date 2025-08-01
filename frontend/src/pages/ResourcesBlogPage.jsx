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
      question: "Is MBTI scientifically valid?",
      answer: "MBTI is a widely used psychological tool, but its scientific validity remains a topic of ongoing debate within the psychology community. While it is praised for its self-report insights and practical applications, some critics question its psychometric properties, such as test-retest reliability and predictive validity. It should be viewed as a tool for self-understanding and personal development, rather than a definitive scientific measure. Our tests aim to provide a strong indicator result for self-exploration."
    },
    {
      question: "Can my MBTI type change over time?",
      answer: "MBTI aims to identify your 'preferred' way of working, which is generally considered stable over time. However, life experiences and personal development can lead to changes in how you express your preferences. While it is unlikely that your core type will change fundamentally, your behaviors and how you adapt to different situations may evolve."
    },
    {
      question: "How accurate are online MBTI tests?",
      answer: "Online MBTI tests can provide a good idea of your type, but they are generally not as comprehensive or detailed as a formal, professionally administered MBTI assessment. For the most accurate and in-depth understanding, it is recommended to take the official assessment with a certified practitioner. Our tests aim to provide a strong indicator result for self-exploration."
    },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-12 font-inter min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Resources & Blog</h1>

      

      {/* SSS Bölümü */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center md:text-left">Frequently Asked Questions</h2>
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
