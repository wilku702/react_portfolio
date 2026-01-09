import React, { useState, useEffect } from 'react';

// Import Routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

// Import Components
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import { ScrollProgress } from './components/InteractiveElements/ScrollProgress';

// Import Pages
import FrontPage from './pages/FrontPage';
import AboutPage from './pages/AboutPage';

// Import Articles
import KdanPage from './pages/articles/KdanPage';
import TrinitiPage from './pages/articles/TrinitiPage';
import NagoyaPage from './pages/articles/NagoyaPage';
import AdonitPage from './pages/articles/AdonitPage';

import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-background text-text flex flex-col relative">
      {/* Animated gradient background */}
      <AnimatedBackground />

      {/* Mouse gradient effect */}
      <div
        className="pointer-gradient hidden md:block fixed inset-0 pointer-events-none transition-[background] duration-100 ease-linear z-30"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(148, 174, 247, 0.09), transparent 80%)`
        }}
      ></div>

      {/* Scroll progress indicator */}
      <ScrollProgress />

      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/kdan" element={<KdanPage />} />
          <Route path="/triniti" element={<TrinitiPage />} />
          <Route path="/nagoya" element={<NagoyaPage />} />
          <Route path="/adonit" element={<AdonitPage />} />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
