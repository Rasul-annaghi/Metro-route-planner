import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const MetroMapDetail: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{t.mapTitle}</h1>
          <h2 className="text-2xl text-gray-600 mb-8">{t.mapSubtitle}</h2>
          <div className="w-24 h-1 bg-[#1E90FF] mx-auto rounded-full"></div>
        </div>

        {/* Metro Map Image */}
        <div className="mb-12 bg-black rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-12 flex items-center justify-center min-h-96">
            <svg className="w-full h-auto max-h-96" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
              {/* Red Line */}
              <line x1="50" y1="200" x2="300" y2="150" stroke="#EF4444" strokeWidth="6" strokeLinecap="round"/>
              <line x1="300" y1="150" x2="550" y2="100" stroke="#EF4444" strokeWidth="6" strokeLinecap="round"/>
              
              {/* Green Line */}
              <line x1="150" y1="300" x2="300" y2="150" stroke="#22C55E" strokeWidth="6" strokeLinecap="round"/>
              <line x1="300" y1="150" x2="450" y2="250" stroke="#22C55E" strokeWidth="6" strokeLinecap="round"/>
              
              {/* Purple Line */}
              <line x1="300" y1="150" x2="300" y2="350" stroke="#A855F7" strokeWidth="6" strokeLinecap="round"/>
              
              {/* Stations */}
              <circle cx="50" cy="200" r="8" fill="#EF4444"/>
              <circle cx="150" cy="180" r="8" fill="#EF4444"/>
              <circle cx="250" cy="160" r="8" fill="#FFA500"/>
              <circle cx="300" cy="150" r="10" fill="#FFB300"/>
              <circle cx="350" cy="140" r="8" fill="#EF4444"/>
              <circle cx="450" cy="120" r="8" fill="#EF4444"/>
              <circle cx="550" cy="100" r="8" fill="#EF4444"/>
              
              <circle cx="150" cy="300" r="8" fill="#22C55E"/>
              <circle cx="200" cy="240" r="8" fill="#22C55E"/>
              <circle cx="450" cy="250" r="8" fill="#22C55E"/>
              
              <circle cx="300" cy="200" r="8" fill="#A855F7"/>
              <circle cx="300" cy="280" r="8" fill="#A855F7"/>
              <circle cx="300" cy="350" r="8" fill="#A855F7"/>
              
              {/* Station Labels */}
              <text x="50" y="225" fontSize="10" fill="#fff" textAnchor="middle">Icherisheher</text>
              <text x="300" y="125" fontSize="10" fill="#fff" textAnchor="middle">Transfer</text>
              <text x="550" y="85" fontSize="10" fill="#fff" textAnchor="middle">Hazi Aslanov</text>
              <text x="150" y="325" fontSize="10" fill="#fff" textAnchor="middle">Inshaatchilar</text>
              <text x="450" y="275" fontSize="10" fill="#fff" textAnchor="middle">Khatai</text>
            </svg>
          </div>
        </div>

        {/* Information Box */}
        <div className="bg-gradient-to-r from-blue-50 to-white border-2 border-[#1E90FF] rounded-2xl p-10 shadow-lg mb-12">
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            {t.mapInfo}
          </p>
          
          {/* Lines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <div className="bg-white border-2 border-red-300 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <h3 className="text-lg font-bold text-red-600">{t.lineRed}</h3>
              </div>
              <p className="text-sm text-gray-600">{t.redLineDesc}</p>
            </div>
            
            <div className="bg-white border-2 border-green-300 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <h3 className="text-lg font-bold text-green-600">{t.lineGreen}</h3>
              </div>
              <p className="text-sm text-gray-600">{t.greenLineDesc}</p>
            </div>
            
            <div className="bg-white border-2 border-purple-300 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                <h3 className="text-lg font-bold text-purple-600">{t.linePurple}</h3>
              </div>
              <p className="text-sm text-gray-600">{t.purpleLineDesc}</p>
            </div>

            <div className="bg-white border-2 border-yellow-300 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                <h3 className="text-lg font-bold text-yellow-500">{t.lineYellow}</h3>
              </div>
              <p className="text-sm text-gray-600">{t.yellowLineDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
