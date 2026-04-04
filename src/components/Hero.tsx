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
      <option key={s.id} value={s.id} className="bg-white text-gray-800">
        {lang === 'en' ? s.nameEn : s.nameAz}
      </option>
    ));
  };

  return (
    <section id="hero" className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center relative">
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight">
          {t.heroTitle}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600">
          {t.heroSubtitle}
        </p>
      </div>

      <div className="max-w-4xl mx-auto w-full bg-blue-50 border-2 border-[#1E90FF] rounded-2xl p-8 sm:p-10 shadow-xl relative z-10">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-5 items-end">
          <div className="flex-1 w-full">
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#1E90FF]" />
              {t.fromLabel}
            </label>
            <div className="relative">
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full bg-white border-2 border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-all appearance-none font-medium"
                required
              >
                <option value="" disabled className="text-gray-500">{t.selectStation}</option>
                <optgroup label={t.lineRed}>{renderOptions(redStations)}</optgroup>
                <optgroup label={t.lineGreen}>{renderOptions(greenStations)}</optgroup>
                <optgroup label={t.linePurple}>{renderOptions(purpleStations)}</optgroup>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
            </div>
          </div>

          <div className="flex-1 w-full">
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#FFB300]" />
              {t.toLabel}
            </label>
            <div className="relative">
              <select
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full bg-white border-2 border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-all appearance-none font-medium"
                required
              >
                <option value="" disabled className="text-gray-500">{t.selectStation}</option>
                <optgroup label={t.lineRed}>{renderOptions(redStations)}</optgroup>
                <optgroup label={t.lineGreen}>{renderOptions(greenStations)}</optgroup>
                <optgroup label={t.linePurple}>{renderOptions(purpleStations)}</optgroup>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto bg-[#1E90FF] hover:bg-[#0066CC] text-white font-bold py-4 px-10 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-400/40 text-lg"
          >
            <Navigation className="w-5 h-5" />
            {t.findRoute}
          </button>
        </form>
      </div>
    </section>
  );
};
