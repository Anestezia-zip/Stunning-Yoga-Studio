import './App.css'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Features from './sections/Features/Features'
import Pricing from './sections/Pricing'
import Faq from './sections/Faq'
import Testimonials from './sections/Testimonials'
import Download from './sections/Download'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeatureGetStarted from './sections/Features/FeatureGetStarted'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FeaturePrograms from './sections/Features/FeaturePrograms'

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Features />
              <Pricing />
              <Faq />
              <Testimonials />
              <Download />
            </>
          } />
          <Route path="/get-started" element={<FeatureGetStarted />} />
          <Route path="/advanced-classes" element={<FeaturePrograms />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
