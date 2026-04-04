import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { stations, Line } from '../data/metro';

export const MetroMap: React.FC = () => {
  const { lang, t } = useLanguage();

  const renderLine = (line: Line, title: string, colorClass: string, bgClass: string) => {
    const lineStations = stations.filter(s => s.lines.includes(line));
    
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${colorClass}`}>
          <div className={`w-4 h-4 rounded-full ${bgClass}`}></div>
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {lineStations.map(s => (
            <div 
              key={s.id} 
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${s.lines.length > 1 ? 'border-[#FFB300]/50 bg-[#FFB300]/10 text-[#FFB300]' : 'border-white/10 bg-white/5 text-gray-300'}`}
            >
              {lang === 'en' ? s.nameEn : s.nameAz}
              {s.lines.length > 1 && <span className="ml-2 text-xs opacity-70">⇄</span>}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="map" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.mapTitle}</h2>
        <div className="w-24 h-1 bg-[#1E90FF] mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderLine('red', t.lineRed, 'text-red-400', 'bg-red-500')}
        {renderLine('green', t.lineGreen, 'text-green-400', 'bg-green-500')}
        {renderLine('purple', t.linePurple, 'text-purple-400', 'bg-purple-500')}
        
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
          <div className="w-12 h-12 rounded-full bg-[#FFB300]/20 flex items-center justify-center mb-4">
            <span className="text-[#FFB300] text-xl">⇄</span>
          </div>
          <h3 className="text-lg font-medium text-white mb-2">Transfer Stations</h3>
          <p className="text-sm text-gray-400">
            Stations highlighted in amber indicate transfer points between different lines.
          </p>
        </div>
      </div>
    </section>
  );
};
