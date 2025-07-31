// src/pages/AboutMBTIPage.jsx
import React from 'react';

const AboutMBTIPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 font-inter min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Myers-Briggs Tip Göstergesi (MBTI) Hakkında</h1>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">MBTI Nedir?</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Myers-Briggs Tip Göstergesi (MBTI), insanların dünyayı nasıl algıladıkları ve kararlarını nasıl verdikleri konusundaki farklı psikolojik tercihleri belirtmek için tasarlanmış bir öz bildirim anketidir. II. Dünya Savaşı sırasında Isabel Myers ve Katharine Briggs tarafından geliştirilen bu gösterge, Carl Jung'un psikolojik tipler hakkındaki kavramsal teorisine dayanmaktadır. MBTI, Jung'un psikolojik tipler teorisini anlaşılır ve insanların yaşamlarında faydalı hale getirmeyi amaçlar.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Genellikle kendini keşfetme, kariyer geliştirme, ekip oluşturma ve kişilerarası ilişkileri geliştirme için kullanılır. Yaygın olarak kullanılsa da, MBTI'nin kişiliği kesin bir ölçüsü değil, bir kendini anlama aracı olduğunu unutmamak önemlidir.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">MBTI'ın Tarihi</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          MBTI, II. Dünya Savaşı sırasında Isabel Myers ve Katharine Briggs tarafından oluşturuldu. İnsanların bilgiyi işleme ve karar verme biçimlerinde farklılıklar olduğunu gözlemlediler ve bu farklılıkları anlamalarına yardımcı olacak bir araç yaratmak istediler. Çalışmaları, Carl Jung'un özellikle "Psikolojik Tipler" adlı kitabındaki teorilerinden ilham aldı. MBTI'nin ilk el kitabı 1962'de yayımlandı ve o zamandan beri birkaç revizyon ve güncelleme geçirdi.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Dört İkilem</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          MBTI, kişiliği dört ikileme göre 16 tipe ayırır:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">1. Dışa Dönüklük (E) / İçe Dönüklük (I)</h3>
            <p className="text-gray-700">
              Enerjinizi nereye odakladığınız. Dışa dönükler sosyal etkileşimle enerji kazanırken, içe dönükler yalnızlık ve düşünme ile enerji kazanırlar.
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">2. Algılama (S) / Sezgi (N)</h3>
            <p className="text-gray-700">
              Bilgiyi nasıl algıladığınız. Algılayıcılar somut gerçeklere ve ayrıntılara odaklanırken, Sezgisel olanlar kalıplara, olasılıklara ve soyut kavramlara odaklanırlar.
            </p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">3. Düşünme (T) / Hissetme (F)</h3>
            <p className="text-gray-700">
              Kararları nasıl verdiğiniz. Düşünenler mantık ve objektifliği önceliklendirirken, Hissedenler değerleri, uyumu ve insanlar üzerindeki etkiyi önceliklendirirler.
            </p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">4. Yargılama (J) / Algılama (P)</h3>
            <p className="text-gray-700">
              Dış yaşamınızı nasıl yaşamayı tercih ettiğiniz. Yargılayanlar planlı ve düzenli bir yaklaşımı tercih ederken, Algılayanlar esnekliği ve spontanlığı tercih ederler.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Gerçek Dünya Kullanımları ve Faydaları</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
          <li><strong>Kişisel Gelişim:</strong> Öz farkındalık kazanın, güçlü yönlerinizi anlayın ve gelişim alanlarını belirleyin.</li>
          <li><strong>Kariyer Rehberliği:</strong> Doğal tercihlerinize ve yeteneklerinize uygun kariyer yollarını keşfedin.</li>
          <li><strong>İlişki Geliştirme:</strong> Farklı iletişim tarzlarını anlayın ve başkalarıyla daha güçlü bağlantılar kurun.</li>
          <li><strong>Ekip Oluşturma:</strong> Farklı çalışma tarzlarını ve katkılarını takdir ederek ekip dinamiklerini geliştirin.</li>
          <li><strong>Çatışma Çözümü:</strong> Temel kişilik farklılıklarını anlayarak anlaşmazlıkları çözmeyi öğrenin.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMBTIPage;
