<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
// Import Styles
>>>>>>> ebd69c1e7ae9403d70f3befda851b6d60b6f6956
import './assets/styles/global.css';

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

// Import Pages
import FrontPage from './pages/FrontPage';
import AboutPage from './pages/AboutPage';
<<<<<<< HEAD

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
=======
>>>>>>> ebd69c1e7ae9403d70f3befda851b6d60b6f6956

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
    <div className="App">
<<<<<<< HEAD
      <div
        className="pointer-gradient"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(148, 174, 247, 0.09), transparent 80%)`,
          transition: 'background 0.1s ease'
        }}></div>
      <Router>
        <ScrollToTop />
=======
      <Router>
>>>>>>> ebd69c1e7ae9403d70f3befda851b6d60b6f6956
        <Navbar />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/about" element={<AboutPage />} />
<<<<<<< HEAD

          <Route path="/kdan" element={<KdanPage />} />
          <Route path="/triniti" element={<TrinitiPage />} />
          <Route path="/nagoya" element={<NagoyaPage />} />
          <Route path="/adonit" element={<AdonitPage />} />

=======
>>>>>>> ebd69c1e7ae9403d70f3befda851b6d60b6f6956
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
