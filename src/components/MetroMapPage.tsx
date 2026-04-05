import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';

interface MetroMapPageProps {
  onBack: () => void;
}

export const MetroMapPage: React.FC<MetroMapPageProps> = ({ onBack }) => {
  const { lang, t } = useLanguage();

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
          {t.metroPageTitle}
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
          <p className="text-gray-700 text-lg leading-relaxed">{t.metroPageIntro1}</p>
          <p className="text-gray-700 text-lg leading-relaxed">{t.metroPageIntro2}</p>
          <p className="text-gray-700 text-lg leading-relaxed">{t.metroPageIntro3}</p>
          <p className="text-gray-700 text-lg leading-relaxed">{t.metroPageIntro4}</p>

          {/* Lines Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t.linesOrganizedAs}
            </h2>

            <div className="space-y-6">
              {/* Red Line */}
              <div className="bg-white border-2 border-red-300 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-5 h-5 rounded-full bg-red-500"></div>
                  <h3 className="text-xl font-bold text-red-600">{t.lineRed}</h3>
                </div>
                <ul className="text-gray-700 space-y-1 ml-8 list-disc">
                  {lang === 'en' ? (
                    <>
                      <li>"Icherisheher — Hazi Aslanov"</li>
                      <li>"Icherisheher — Bakmil"</li>
                    </>
                  ) : (
                    <>
                      <li>"İçərişəhər — Həzi Aslanov"</li>
                      <li>"İçərişəhər — Bakmil"</li>
                    </>
                  )}
                </ul>
              </div>

              {/* Green Line */}
              <div className="bg-white border-2 border-green-300 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-5 h-5 rounded-full bg-green-500"></div>
                  <h3 className="text-xl font-bold text-green-600">{t.lineGreen}</h3>
                </div>
                <ul className="text-gray-700 space-y-1 ml-8 list-disc">
                  {lang === 'en' ? (
                    <>
                      <li>"Darnagul — Hazi Aslanov"</li>
                      <li>"Darnagul — Bakmil"</li>
                    </>
                  ) : (
                    <>
                      <li>"Dərnəgül — Həzi Aslanov"</li>
                      <li>"Dərnəgül — Bakmil"</li>
                    </>
                  )}
                </ul>
              </div>

              {/* Purple Line */}
              <div className="bg-white border-2 border-purple-300 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-5 h-5 rounded-full bg-purple-500"></div>
                  <h3 className="text-xl font-bold text-purple-600">{t.linePurple}</h3>
                </div>
                <ul className="text-gray-700 space-y-1 ml-8 list-disc">
                  {lang === 'en' ? (
                    <>
                      <li>"Avtovagzal — 8 Noyabr"</li>
                      <li>"Khojasan — 8 Noyabr"</li>
                    </>
                  ) : (
                    <>
                      <li>"Avtovağzal — 8 Noyabr"</li>
                      <li>"Xocəsən — 8 Noyabr"</li>
                    </>
                  )}
                </ul>
              </div>

              {/* Yellow Line */}
              <div className="bg-white border-2 border-yellow-300 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-5 h-5 rounded-full bg-yellow-400"></div>
                  <h3 className="text-xl font-bold text-yellow-500">{t.lineYellow}</h3>
                </div>
                <ul className="text-gray-700 space-y-1 ml-8 list-disc">
                  {lang === 'en' ? (
                    <li>"Khatai — Jafar Jabbarly" <span className="text-gray-500 text-sm">{t.shuttleText}</span></li>
                  ) : (
                    <li>"Xətai — Cəfər Cabbarlı" <span className="text-gray-500 text-sm">{t.shuttleText}</span></li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Transfers Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t.transfers}
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
                    {t.transferGreenRed}
                  </h3>
                </div>
                <p className="text-gray-700 ml-8">
                  <span dangerouslySetInnerHTML={{ __html: t.transferGreenRedDesc }} />
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
                    {t.transferGreenPurple}
                  </h3>
                </div>
                <p className="text-gray-700 ml-8">
                  <span dangerouslySetInnerHTML={{ __html: t.transferGreenPurpleDesc }} />
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
