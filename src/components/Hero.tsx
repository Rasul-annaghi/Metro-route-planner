import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { stations, findFastestRoute, RouteResult } from '../data/metro';
import { MapPin, Navigation, ChevronDown } from 'lucide-react';

interface HeroProps {
  onRouteFound: (result: RouteResult | null, error: string | null) => void;
}

export const Hero: React.FC<HeroProps> = ({ onRouteFound }) => {
  const { lang, t } = useLanguage();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!from || !to) return;

    if (from === to) {
      onRouteFound(null, t.sameStationError);
      return;
    }

    const result = findFastestRoute(from, to);
    if (!result) {
      onRouteFound(null, t.noRouteError);
    } else {
      onRouteFound(result, null);
      setTimeout(() => {
        document.getElementById('route-result')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Group stations by line for the dropdown
  const redStations = stations.filter(s => s.lines.includes('red'));
  const greenStations = stations.filter(s => s.lines.includes('green') && !s.lines.includes('red'));
  const purpleStations = stations.filter(s => s.lines.includes('purple'));

  const renderOptions = (group: typeof stations) => {
    return group.map(s => (
      <option key={s.id} value={s.id} className="bg-[#0A0F2C] text-white">
        {lang === 'en' ? s.nameEn : s.nameAz}
      </option>
    ));
  };

  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          {t.heroTitle}
        </h1>
        <p className="text-lg sm:text-xl text-gray-400">
          {t.heroSubtitle}
        </p>
      </div>

      <div className="max-w-4xl mx-auto w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 w-full">
            <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#1E90FF]" />
              {t.fromLabel}
            </label>
            <div className="relative">
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full bg-[#0A0F2C]/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-all appearance-none"
                required
              >
                <option value="" disabled className="text-gray-500">{t.selectStation}</option>
                <optgroup label={t.lineRed}>{renderOptions(redStations)}</optgroup>
                <optgroup label={t.lineGreen}>{renderOptions(greenStations)}</optgroup>
                <optgroup label={t.linePurple}>{renderOptions(purpleStations)}</optgroup>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="flex-1 w-full">
            <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FFB300]" />
              {t.toLabel}
            </label>
            <div className="relative">
              <select
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full bg-[#0A0F2C]/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-all appearance-none"
                required
              >
                <option value="" disabled className="text-gray-500">{t.selectStation}</option>
                <optgroup label={t.lineRed}>{renderOptions(redStations)}</optgroup>
                <optgroup label={t.lineGreen}>{renderOptions(greenStations)}</optgroup>
                <optgroup label={t.linePurple}>{renderOptions(purpleStations)}</optgroup>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto bg-[#1E90FF] hover:bg-[#00D4FF] text-white font-semibold py-3 px-8 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#1E90FF]/20"
          >
            <Navigation className="w-5 h-5" />
            {t.findRoute}
          </button>
        </form>
      </div>
    </section>
  );
};
