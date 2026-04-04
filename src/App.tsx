import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RouteResult } from './components/RouteResult';
import { MetroMap } from './components/MetroMap';
import { History } from './components/History';
import { MetroMapPage } from './components/MetroMapPage';
import { RouteResult as ResultType } from './data/metro';

type Page = 'home' | 'map';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [routeResult, setRouteResult] = useState<ResultType | null>(null);
  const [routeError, setRouteError] = useState<string | null>(null);

  const handleRouteFound = (result: ResultType | null, error: string | null) => {
    setRouteResult(result);
    setRouteError(error);
  };

  const navigateToMap = () => {
    setCurrentPage('map');
    window.scrollTo({ top: 0 });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0 });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans selection:bg-[#1E90FF]/30">
        <Navbar onNavigateMap={navigateToMap} onNavigateHome={navigateToHome} currentPage={currentPage} />
        
        {currentPage === 'home' && (
          <>
            <main>
              <Hero onRouteFound={handleRouteFound} />
              {(routeResult || routeError) && (
                <RouteResult result={routeResult} error={routeError} />
              )}
              <MetroMap />
              <History />
            </main>
            <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-200 mt-12">
              &copy; {new Date().getFullYear()} Baku Metro Route Planner. All rights reserved.
            </footer>
          </>
        )}

        {currentPage === 'map' && (
          <MetroMapPage onBack={navigateToHome} />
        )}
      </div>
    </LanguageProvider>
  );
}
