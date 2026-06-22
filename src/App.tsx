import {Routes, Route, useLocation} from 'react-router-dom';
import {motion, AnimatePresence} from 'motion/react';
import {useEffect} from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Mission from './components/Mission';
import Prodotto from './components/Prodotto';
import ProgettiDetail from './components/ProgettiDetail';
import ContactForm from './components/ContactForm';
import Team from './components/Team';
import FAQs from './components/FAQs';
import Startup from './components/Startup';
import SmartStart from './components/SmartStart';
import DailySafetyLab from './components/DailySafetyLab';
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
              <Route path="/mission" element={<Mission />} />
              <Route path="/prodotto" element={<Prodotto />} />
              <Route path="/progetti" element={<ProgettiDetail />} />
              <Route path="/contatti" element={<ContactForm />} />
              <Route path="/team" element={<Team />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/startup" element={<Startup />} />
              <Route path="/smart-start" element={<SmartStart />} />
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
