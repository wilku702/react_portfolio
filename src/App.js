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

// Lazy-loaded Pages
const FrontPage = lazy(() => import('./pages/FrontPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

// Lazy-loaded Articles
const KdanPage = lazy(() => import('./pages/articles/KdanPage'));
const TrinitiPage = lazy(() => import('./pages/articles/TrinitiPage'));
const NagoyaPage = lazy(() => import('./pages/articles/NagoyaPage'));
const AdonitPage = lazy(() => import('./pages/articles/AdonitPage'));

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
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<div className="page" />}>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/about" element={<AboutPage />} />

            <Route path="/kdan" element={<KdanPage />} />
            <Route path="/triniti" element={<TrinitiPage />} />
            <Route path="/nagoya" element={<NagoyaPage />} />
            <Route path="/adonit" element={<AdonitPage />} />

            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
