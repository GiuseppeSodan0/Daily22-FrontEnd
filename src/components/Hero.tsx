import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'motion/react';
import {ArrowRight, ChevronRight} from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const rotatingTags = [
  'IoT e Intelligenza Artificiale',
  'Prevenzione Predittiva',
  'Sicurezza sul Lavoro 4.0',
  'Wearable Intelligence',
];

export default function Hero() {
  const [tagIndex, setTagIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTagIndex((prev) => (prev + 1) % rotatingTags.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 35},
    visible: {
      opacity: 1,
      y: 0,
      transition: {type: 'spring', stiffness: 90, damping: 18},
    },
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-28 md:py-36 bg-gray-50 flex flex-col items-center">
      
      <ParticlesBackground />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-yellow-400/10 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-amber-400/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-yellow-400/10 blur-[140px] pointer-events-none" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 mb-8 shadow-sm hover:border-yellow-400 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
            <motion.span
              key={tagIndex}
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -10}}
              transition={{duration: 0.3}}
              className="text-[11px] font-bold uppercase tracking-widest text-yellow-600 font-mono"
            >
              {rotatingTags[tagIndex]}
            </motion.span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.08] select-none font-sans"
          >
            daily, una nuova <span className="font-black">era</span> per la sicurezza sul lavoro
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-600 font-light mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Soluzioni ad alto tasso tecnologico disegnate intorno all'uomo. Connettiamo dispositivi smart indossabili ed algoritmi predittivi per garantire l'incolumità in cantiere ed in azienda.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              to="/servizi"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 shadow-[0_4px_25px_rgba(234,179,8,0.2)] hover:shadow-[0_4px_30px_rgba(234,179,8,0.35)] group"
            >
              Scopri Dailyplatform
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
            </Link>

          </motion.div>



        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full" />
    </section>
  );
}
