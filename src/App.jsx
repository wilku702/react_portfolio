import { useEffect, lazy, Suspense } from 'react';
import { MotionConfig, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
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
import PointerGradient from './components/PointerGradient';
import { NavigationProvider } from './context/NavigationContext';

// Lazy-loaded Pages
const FrontPage = lazy(() => import('./pages/FrontPage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Lazy-loaded Articles
const DynamicArticlePage = lazy(() => import('./pages/articles/DynamicArticlePage'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<FrontPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/work" element={<Navigate to="/experience" replace />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/:id" element={<DynamicArticlePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  // Prefetch lazy-loaded route chunks when the browser is idle
  useEffect(() => {
    const prefetch = () => {
      import('./pages/ExperiencePage');
      import('./pages/ProjectsPage');
      import('./pages/AboutPage');
      import('./pages/articles/DynamicArticlePage');
    };

    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(prefetch);
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(prefetch, 2000);
    return () => clearTimeout(id);
  }, []);

  return (
    <HelmetProvider>
    <MotionConfig reducedMotion="user">
    <div className="App">
      <PointerGradient />
      <Router>
        <NavigationProvider>
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <Navbar />
          <Suspense fallback={
            <div className="loading-page" role="status" aria-live="polite">
              <div className="loading-pulse" />
              <div className="loading-pulse short" />
              <span className="sr-only">Loading page...</span>
            </div>
          }>
            <ErrorBoundary>
              <main id="main-content">
                <AnimatedRoutes />
              </main>
            </ErrorBoundary>
          </Suspense>
          <Footer />
        </NavigationProvider>
      </Router>
    </div>
    </MotionConfig>
    </HelmetProvider>
  );
}

export default App;
