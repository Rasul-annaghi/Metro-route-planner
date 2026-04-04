import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RouteResult } from './components/RouteResult';
import { MetroMap } from './components/MetroMap';
import { History } from './components/History';
import { RouteResult as ResultType } from './data/metro';

export default function App() {
  const [routeResult, setRouteResult] = useState<ResultType | null>(null);
  const [routeError, setRouteError] = useState<string | null>(null);

  const handleRouteFound = (result: ResultType | null, error: string | null) => {
    setRouteResult(result);
    setRouteError(error);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0A0F2C] font-sans selection:bg-[#1E90FF]/30">
        <Navbar />
        <main>
          <Hero onRouteFound={handleRouteFound} />
          {(routeResult || routeError) && (
            <RouteResult result={routeResult} error={routeError} />
          )}
          <MetroMap />
          <History />
        </main>
        <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10 mt-12">
          &copy; {new Date().getFullYear()} Baku Metro Route Planner. All rights reserved.
        </footer>
      </div>
    </LanguageProvider>
  );
}
