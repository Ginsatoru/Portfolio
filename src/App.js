import { useState, useEffect, lazy, Suspense } from "react";
import "./Styles/App.css";

// ============================================
// EAGER LOADING: Critical components (above the fold)
// ============================================
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

// ============================================
// LAZY LOADING: Non-critical components (below the fold)
// ============================================
const About = lazy(() => import("./Components/About"));
const Skills = lazy(() => import("./Components/Skills"));
const Technologies = lazy(() => import("./Components/Tools"));
const Projects = lazy(() => import("./Components/Projects"));
const Contact = lazy(() => import("./Components/Contact"));

// ============================================
// LOADING FALLBACK COMPONENT
// ============================================
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="loading-spinner"></div>
  </div>
);

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div 
      className="scroll-progress"
      style={{ transform: `scaleX(${scrollProgress / 100})` }}
    />
  );
};

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 500);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50
                 w-10 h-10 rounded-full
                 bg-primary-600 hover:bg-primary-700
                 text-white
                 flex items-center justify-center
                 transition-all duration-300
                 hover:scale-110 hover:-translate-y-1
                 focus:outline-none focus:ring-4 focus:ring-primary-500/50
                 no-print"
      aria-label="Scroll to top"
    >
      <svg 
        className="w-4 h-4" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </button>
  );
};

// ============================================
// MAIN APP COMPONENT
// ============================================
function App() {
  const [darkMode, setDarkMode] = useState(false);

  // ============================================
  // THEME PERSISTENCE: Save to localStorage
  // ============================================
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    
    // Update document class for Tailwind dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // ============================================
  // SMOOTH SCROLL BEHAVIOR
  // ============================================
  useEffect(() => {
    // Handle hash navigation on load
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="app-container">
        {/* Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Header Navigation */}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section - Eager Loaded */}
          <Hero />

          {/* Below-the-fold sections - Lazy Loaded */}
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Skills />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Technologies />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Projects />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;