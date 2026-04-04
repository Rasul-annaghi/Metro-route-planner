import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { stations, Line } from '../data/metro';

export const MetroMap: React.FC = () => {
  const { lang, t } = useLanguage();

  const renderLine = (line: Line, title: string, colorClass: string, bgClass: string) => {
    const lineStations = stations.filter(s => s.lines.includes(line));
    
    return (
      <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
        <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${colorClass}`}>
          <div className={`w-4 h-4 rounded-full ${bgClass}`}></div>
          {title}
        </h3>
        <div className="flex flex-wrap gap-3">
          {lineStations.map(s => (
            <div 
              key={s.id} 
              className={`px-4 py-2 rounded-lg text-sm font-medium border-2 transition-colors ${s.lines.length > 1 ? 'border-[#FFB300] bg-[#FFB300]/10 text-[#D99300] font-bold' : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'}`}
            >
              {lang === 'en' ? s.nameEn : s.nameAz}
              {s.lines.length > 1 && <span className="ml-2 text-xs">⇄</span>}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="map" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">{t.mapTitle}</h2>
        <div className="w-24 h-1 bg-[#1E90FF] mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {renderLine('red', t.lineRed, 'text-red-600', 'bg-red-500')}
        {renderLine('green', t.lineGreen, 'text-green-600', 'bg-green-500')}
        {renderLine('purple', t.linePurple, 'text-purple-600', 'bg-purple-500')}
        
        <div className="bg-blue-50 border-2 border-[#1E90FF] rounded-2xl p-8 flex flex-col justify-center items-center text-center">
          <div className="w-12 h-12 rounded-full bg-[#FFB300]/20 flex items-center justify-center mb-4">
            <span className="text-[#FFB300] text-xl">⇄</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{t.transferStationsTitle}</h3>
          <p className="text-sm text-gray-600">
            {t.transferStationsDesc}
          </p>
        </div>
      </div>
    </section>
  );
};
