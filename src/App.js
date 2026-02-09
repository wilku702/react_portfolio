import React, { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import './assets/styles/global.css';

// Import Routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';

// Import Components
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import { NavigationProvider } from './context/NavigationContext';

// Lazy-loaded Pages
const FrontPage = lazy(() => import('./pages/FrontPage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Lazy-loaded Articles
const DynamicArticlePage = lazy(() => import('./pages/articles/DynamicArticlePage'));

const LoadingPage = () => (
  <div className="page loading-page">
    <div className="loading-pulse"></div>
    <div className="loading-pulse short"></div>
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafId = useRef(null);

  const handleMouseMove = useCallback((event) => {
    if (rafId.current) return;
    rafId.current = requestAnimationFrame(() => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      rafId.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleMouseMove]);

  return (
    <div className="App">
      <div
        className="pointer-gradient"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(148, 174, 247, 0.09), transparent 80%)`,
          transition: 'background 0.1s ease'
        }}></div>
      <Router>
        <NavigationProvider>
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <ScrollToTop />
          <Navbar />
          <Suspense fallback={<LoadingPage />}>
            <ErrorBoundary>
              <main id="main-content">
                <Routes>
                  <Route path="/" element={<FrontPage />} />
                  <Route path="/experience" element={<ExperiencePage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/work" element={<Navigate to="/experience" replace />} />
                  <Route path="/about" element={<AboutPage />} />

                  <Route path="/:id" element={<DynamicArticlePage />} />

                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
            </ErrorBoundary>
          </Suspense>
          <Footer />
        </NavigationProvider>
      </Router>
    </div>
  );
}

export default App;
