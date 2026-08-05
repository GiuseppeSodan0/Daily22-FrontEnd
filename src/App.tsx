import {Routes, Route, useLocation} from 'react-router-dom';
import {motion} from 'motion/react';
import {useEffect} from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import WIDIU from './components/WIDIU';
import ProgettiDetail from './components/ProgettiDetail';
import ContactForm from './components/ContactForm';
import Bandi from './components/Bandi';
import DailySafetyLab from './components/DailySafetyLab';
import ChiSiamo from './components/ChiSiamo';
import PrivacyPolicy from './components/PrivacyPolicy';
import Vera from './components/Vera';
import DailyPlatform from './components/DailyPlatform';
import Salvatore from './components/Salvatore';

export default function App() {
  const location = useLocation();

  const isDailySafetyLabPage =
    location.pathname.includes('daily-safety-lab') ||
    location.pathname.includes('daily-safety') ||
    location.pathname.includes('safety-lab');
  const curtainColor = isDailySafetyLabPage ? '#e73749' : '#f6c73b';

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.style.setProperty('--transition-color', curtainColor);
  }, [location.pathname, curtainColor]);

  return (
    <div className="bg-[#F0EFEB] text-[#2C2C2E] min-h-screen flex flex-col justify-between selection:bg-[#f6c73b]/30 selection:text-[#2C2C2E] relative overflow-x-hidden">
      {/* Horizontal Brand Page Transition Curtain */}
      <motion.div
        key={`curtain-${location.pathname}`}
        className="fixed inset-0 z-[9999] pointer-events-none"
        style={{ backgroundColor: curtainColor }}
        initial={{ x: '-100%' }}
        animate={{ x: ['-100%', '0%', '100%'] }}
        transition={{
          duration: 0.45,
          times: [0, 0.4, 1],
          ease: [0.4, 0.0, 0.2, 1],
        }}
      />

      <Header />

      <main className="flex-grow">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/about" element={<ChiSiamo />} />
            <Route path="/widiu" element={<WIDIU />} />
            <Route path="/servizi/widiu" element={<WIDIU />} />
            <Route path="/servizi" element={<ProgettiDetail />} />
            <Route path="/services" element={<ProgettiDetail />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/contatti" element={<ContactForm />} />
            <Route path="/dailyplatform" element={<DailyPlatform />} />
            <Route path="/servizi/dailyplatform" element={<DailyPlatform />} />
            <Route path="/vera" element={<Vera />} />
            <Route path="/servizi/vera" element={<Vera />} />
            <Route path="/salvatore" element={<Salvatore />} />
            <Route path="/servizi/salvatore" element={<Salvatore />} />
            <Route path="/bandi" element={<Bandi />} />
            <Route path="/grants" element={<Bandi />} />
            <Route path="/daily-safety-lab" element={<DailySafetyLab />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
