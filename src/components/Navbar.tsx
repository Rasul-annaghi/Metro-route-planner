import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Train } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F2C]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleScroll(e as any, 'hero')}>
            <Train className="w-8 h-8 text-[#1E90FF]" />
            <span className="text-white font-bold text-xl tracking-tight hidden sm:block">Baku Metro</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#map" onClick={(e) => handleScroll(e, 'map')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              {t.navMap}
            </a>
            <a href="#history" onClick={(e) => handleScroll(e, 'history')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              {t.navHistory}
            </a>
            
            <div className="flex items-center bg-white/10 rounded-full p-1">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${lang === 'en' ? 'bg-[#1E90FF] text-white' : 'text-gray-400 hover:text-white'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('az')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${lang === 'az' ? 'bg-[#1E90FF] text-white' : 'text-gray-400 hover:text-white'}`}
              >
                AZ
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
