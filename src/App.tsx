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
import Brevetto from './components/Brevetto';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen flex flex-col justify-between selection:bg-yellow-400/30 selection:text-yellow-900">
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
              <Route path="/contatti" element={<ContactForm />} />
              <Route path="/bandi" element={<Bandi />} />
              <Route path="/daily-safety-lab" element={<DailySafetyLab />} />
              <Route path="/brevetto" element={<Brevetto />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
