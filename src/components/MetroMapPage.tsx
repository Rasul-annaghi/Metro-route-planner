import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';

interface MetroMapPageProps {
  onBack: () => void;
}

export const MetroMapPage: React.FC<MetroMapPageProps> = ({ onBack }) => {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#1E90FF] hover:text-[#0066CC] font-semibold transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          {lang === 'az' ? 'Geri' : 'Back'}
        </button>
      </div>

      {/* Page Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Bakı Metropoliteni
        </h1>
        <div className="w-24 h-1 bg-[#1E90FF] rounded-full"></div>
      </div>

      {/* Metro Map Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200">
          <img
            src="/images/metro_map.png"
            alt="Bakı Metro Xəritəsi"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 sm:p-12 space-y-8">
          {/* Introduction */}
          <p className="text-gray-700 text-lg leading-relaxed">
            Bakı metropoliteni Azərbaycanın paytaxtı Bakı şəhərində yeraltı xətləri birləşdirən nəqliyyat sistemidir. O, Türk, İslam ölkələri və Yaxın Şərqin ilk metro nəqliyyatıdır. Metropoliten ümumi uzunluğu 40.7 km olan 3 xətdən, 27 stansiyadan ibarətdir. Stansiyaların yeddisi böyük dərinlikdə yerləşir.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            1966-cı ildə tərkibində hərəkət, hərəkət qatarları, yol və tunel qurğuları, sanitariya texnikası və elektromexanika, işarəvermə və rabitə, material-texniki təminat xidmətləri kimi 6 xidməti olan Bakı Metropoliteni İdarəsi yaradılır. 1967-ci il noyabrın 6-da Bakı şəhərində metropolitenin 5 stansiyası istismara verilir.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Bakı metropoliteninin nadirliyi ondan ibarətdir ki, 60% və 40%-minlik mailliklər və kiçik radiuslu çox saylı əyrilər var.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Metropolitenin daha bir özəlliyi Qırmızı və Yaşıl xətləri "28 May" stansiyasında bir müstəvidə birləşməsidir. Nəticədə, "28 May-Həzi Aslanov" və əksinə, qatarlar, faktiki olaraq, bir xətt üzrə hərəkətini davam etdirir.
          </p>

          {/* Lines Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {lang === 'az' ? 'Xətlər üzrə hərəkət belə təşkil edilir:' : 'Lines are organized as follows:'}
            </h2>

            <div className="space-y-6">
              {/* Red Line */}
              <div className="bg-white border-2 border-red-300 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-5 h-5 rounded-full bg-red-500"></div>
                  <h3 className="text-xl font-bold text-red-600">Qırmızı</h3>
                </div>
                <ul className="text-gray-700 space-y-1 ml-8 list-disc">
                  <li>"İçərişəhər — Həzi Aslanov"</li>
                  <li>"İçərişəhər — Bakmil"</li>
                </ul>
              </div>

              {/* Green Line */}
              <div className="bg-white border-2 border-green-300 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-5 h-5 rounded-full bg-green-500"></div>
                  <h3 className="text-xl font-bold text-green-600">Yaşıl</h3>
                </div>
                <ul className="text-gray-700 space-y-1 ml-8 list-disc">
                  <li>"Dərnəgül — Həzi Aslanov"</li>
                  <li>"Xətai — Cəfər Cabbarlı" <span className="text-gray-500 text-sm">(məkik hərəkət)</span></li>
                  <li>"Dərnəgül — Bakmil"</li>
                </ul>
              </div>

              {/* Purple Line */}
              <div className="bg-white border-2 border-purple-300 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-5 h-5 rounded-full bg-purple-500"></div>
                  <h3 className="text-xl font-bold text-purple-600">Bənövşəyi</h3>
                </div>
                <ul className="text-gray-700 space-y-1 ml-8 list-disc">
                  <li>"Avtovağzal — 8 Noyabr"</li>
                  <li>"Xocəsən — 8 Noyabr"</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Transfers Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {lang === 'az' ? 'Keçidlər' : 'Transfers'}
            </h2>

            <div className="space-y-4">
              <div className="bg-white border-2 border-amber-300 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <span className="text-gray-400 text-lg">⇄</span>
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Yaşıl və Qırmızı xətlər üzrə
                  </h3>
                </div>
                <p className="text-gray-700 ml-8">
                  ("Cəfər Cabbarlı — Xətai" mənzlinə): <strong>"28 May"</strong> və <strong>"Cəfər Cabbarlı"</strong> stansiyaları
                </p>
              </div>

              <div className="bg-white border-2 border-amber-300 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <span className="text-gray-400 text-lg">⇄</span>
                    <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Yaşıl və Bənövşəyi xətlər üzrə
                  </h3>
                </div>
                <p className="text-gray-700 ml-8">
                  <strong>"Memar Əcəmi"</strong> stansiyaları (hər xəttin keçid stansiyaları eyni adı daşıyır)
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
