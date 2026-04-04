import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Train } from 'lucide-react';

interface NavbarProps {
  onNavigateMap: () => void;
  onNavigateHome: () => void;
  currentPage: 'home' | 'map';
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateMap, onNavigateHome, currentPage }) => {
  const { lang, setLang, t } = useLanguage();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, id: string) => {
    e.preventDefault();
    if (currentPage !== 'home') {
      onNavigateHome();
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#1E90FF] to-[#0066CC] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => handleScroll(e, 'hero')}>
            <Train className="w-8 h-8 text-white" />
            <div className="hidden sm:block">
              <div className="text-white font-bold text-sm leading-tight">Baku City Metro</div>
              <div className="text-white/80 text-xs">Route Planner</div>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <button
              onClick={onNavigateMap}
              className="text-white hover:text-blue-100 transition-colors text-sm font-semibold bg-transparent border-none cursor-pointer"
            >
              {t.navMap}
            </button>
            <a href="#history" onClick={(e) => handleScroll(e, 'history')} className="text-white hover:text-blue-100 transition-colors text-sm font-semibold">
              {t.navHistory}
            </a>
            
            <div className="flex items-center bg-white/20 rounded-full p-1">
              <button
                onClick={() => setLang('en')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${lang === 'en' ? 'bg-white text-[#1E90FF]' : 'text-white hover:bg-white/30'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('az')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${lang === 'az' ? 'bg-white text-[#1E90FF]' : 'text-white hover:bg-white/30'}`}
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
