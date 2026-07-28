import {Routes, Route, useLocation} from 'react-router-dom';
import {motion, AnimatePresence} from 'motion/react';
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-[#F0EFEB] text-[#2C2C2E] min-h-screen flex flex-col justify-between selection:bg-[#F2C400]/30 selection:text-[#2C2C2E]">
      <Header />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{opacity: 0, y: 15}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -15}}
            transition={{duration: 0.3}}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/chi-siamo" element={<ChiSiamo />} />
              <Route path="/widiu" element={<WIDIU />} />
              <Route path="/servizi" element={<ProgettiDetail />} />
              <Route path="/services" element={<ProgettiDetail />} />
              <Route path="/about" element={<ChiSiamo />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/dailyplatform" element={<DailyPlatform />} />
              <Route path="/servizi/dailyplatform" element={<DailyPlatform />} />
              <Route path="/vera" element={<Vera />} />
              <Route path="/servizi/vera" element={<Vera />} />
              <Route path="/salvatore" element={<Salvatore />} />
              <Route path="/servizi/salvatore" element={<Salvatore />} />
              <Route path="/contatti" element={<ContactForm />} />
              <Route path="/bandi" element={<Bandi />} />
              <Route path="/daily-safety-lab" element={<DailySafetyLab />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
