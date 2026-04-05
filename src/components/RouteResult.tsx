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
          className="bg-red-100 border-2 border-red-400 rounded-2xl p-6 text-center"
        >
          <p className="text-red-700 font-semibold text-lg">{error}</p>
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
      case 'yellow': return 'bg-yellow-400';
      default: return 'bg-gray-500';
    }
  };

  const getLineTextColor = (line: Line) => {
    switch (line) {
      case 'red': return 'text-red-600';
      case 'green': return 'text-green-600';
      case 'purple': return 'text-purple-600';
      case 'yellow': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <section id="route-result" className="py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-blue-50 border-2 border-[#1E90FF] rounded-2xl overflow-hidden shadow-xl"
      >
        <div className="p-8 border-b-2 border-blue-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gradient-to-r from-blue-50 to-white">
          <h2 className="text-3xl font-bold text-gray-900">{t.routeResultTitle}</h2>
          <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-lg border-2 border-[#1E90FF] shadow-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#1E90FF]" />
              <span className="text-gray-900 font-bold text-lg">{result.totalTime} {t.minutes}</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="font-semibold">{result.totalStops} {t.stops}</span>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="relative">
            {/* Vertical line connecting dots */}
            <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-gray-300"></div>

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
                      <div className="absolute left-0 w-6 h-6 rounded-full bg-white border-2 border-[#FFB300] flex items-center justify-center z-10">
                        <ArrowRight className="w-3 h-3 text-[#FFB300]" />
                      </div>
                      <div className="bg-amber-50 border-2 border-[#FFB300] rounded-lg px-4 py-3 w-full flex items-center gap-2">
                        <span className="text-[#D99300] font-bold text-sm">{t.transferAt} {prevName}</span>
                        <span className="text-gray-400 text-sm mx-1">→</span>
                        <span className={`text-sm font-bold ${getLineTextColor(step.line)}`}>
                          {step.line === 'red' ? t.lineRed : step.line === 'green' ? t.lineGreen : step.line === 'yellow' ? t.lineYellow : t.linePurple}
                        </span>
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={`${step.stationId}-${index}`} className="relative flex items-center gap-6 pl-10">
                    <div className={`absolute left-0 w-6 h-6 rounded-full border-4 border-white z-10 ${getLineColor(step.line)}`}></div>
                    <div className="flex-1 py-2">
                      <h3 className={`text-lg font-medium ${step.type === 'start' || step.type === 'end' ? 'text-gray-900 font-bold' : 'text-gray-700'}`}>
                        {name}
                      </h3>
                      {(step.type === 'start' || step.type === 'end') && (
                        <p className={`text-xs mt-1 ${getLineTextColor(step.line)}`}>
                          {step.line === 'red' ? t.lineRed : step.line === 'green' ? t.lineGreen : step.line === 'yellow' ? t.lineYellow : t.linePurple}
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
