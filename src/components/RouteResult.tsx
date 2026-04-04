import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { RouteResult as ResultType, stations, Line } from '../data/metro';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface RouteResultProps {
  result: ResultType | null;
  error: string | null;
}

export const RouteResult: React.FC<RouteResultProps> = ({ result, error }) => {
  const { lang, t } = useLanguage();

  if (error) {
    return (
      <section id="route-result" className="py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-center"
        >
          <p className="text-red-400 font-medium">{error}</p>
        </motion.div>
      </section>
    );
  }

  if (!result) return null;

  const getLineColor = (line: Line) => {
    switch (line) {
      case 'red': return 'bg-red-500';
      case 'green': return 'bg-green-500';
      case 'purple': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getLineTextColor = (line: Line) => {
    switch (line) {
      case 'red': return 'text-red-400';
      case 'green': return 'text-green-400';
      case 'purple': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="route-result" className="py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="p-6 sm:p-8 border-b border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-bold text-white">{t.routeResultTitle}</h2>
          <div className="flex items-center gap-4 bg-[#0A0F2C] px-4 py-2 rounded-lg border border-white/10">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#1E90FF]" />
              <span className="text-white font-semibold">{result.totalTime} {t.minutes}</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="font-medium">{result.totalStops} {t.stops}</span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="relative">
            {/* Vertical line connecting dots */}
            <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-white/10"></div>

            <div className="space-y-6">
              {result.steps.map((step, index) => {
                const station = stations.find(s => s.id === step.stationId);
                if (!station) return null;
                const name = lang === 'en' ? station.nameEn : station.nameAz;

                if (step.type === 'transfer') {
                  const prevStep = result.steps[index - 1];
                  const prevStation = stations.find(s => s.id === prevStep.stationId);
                  const prevName = prevStation ? (lang === 'en' ? prevStation.nameEn : prevStation.nameAz) : name;
                  
                  return (
                    <div key={`transfer-${index}`} className="relative flex items-center gap-6 pl-10">
                      <div className="absolute left-0 w-6 h-6 rounded-full bg-[#0A0F2C] border-2 border-[#FFB300] flex items-center justify-center z-10">
                        <ArrowRight className="w-3 h-3 text-[#FFB300]" />
                      </div>
                      <div className="bg-[#FFB300]/10 border border-[#FFB300]/20 rounded-lg px-4 py-2 w-full flex items-center gap-2">
                        <span className="text-[#FFB300] font-medium text-sm">{t.transferAt} {prevName}</span>
                        <span className="text-gray-400 text-sm mx-2">→</span>
                        <span className={`text-sm font-semibold ${getLineTextColor(step.line)}`}>
                          {step.line === 'red' ? t.lineRed : step.line === 'green' ? t.lineGreen : t.linePurple}
                        </span>
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={`${step.stationId}-${index}`} className="relative flex items-center gap-6 pl-10">
                    <div className={`absolute left-0 w-6 h-6 rounded-full border-4 border-[#0A0F2C] z-10 ${getLineColor(step.line)}`}></div>
                    <div className="flex-1 py-2">
                      <h3 className={`text-lg font-medium ${step.type === 'start' || step.type === 'end' ? 'text-white font-bold' : 'text-gray-300'}`}>
                        {name}
                      </h3>
                      {(step.type === 'start' || step.type === 'end') && (
                        <p className={`text-xs mt-1 ${getLineTextColor(step.line)}`}>
                          {step.line === 'red' ? t.lineRed : step.line === 'green' ? t.lineGreen : t.linePurple}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
