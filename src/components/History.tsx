import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const History: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="history" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{t.historyTitle}</h2>
            <div className="w-16 h-1 bg-[#1E90FF] rounded-full mb-8"></div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>{t.historyText1}</p>
              <p>{t.historyText2}</p>
            </div>
          </div>
          <div className="relative h-64 lg:h-auto">
            <img 
              src="https://picsum.photos/seed/bakumetro/800/600" 
              alt="Baku Metro" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F2C] via-transparent to-transparent lg:bg-gradient-to-l"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
